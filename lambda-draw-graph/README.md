# lambda-draw-graph

The code that is deployed as an AWS Lambda function.

I've kept this code to a minimum (one source file); most of the functionality is provided in .cljc files compiled into this lambda. Structuring the application this way, allowed for functionality to be moved between front and back ends or both.

The Clojure code here has to generate a java class that conforms to the AWS Java JDK for lambda functions. I've always found it a bit fiddly to get Clojure to generate Java classes and there are instructions on the steps in the comments in the source file.

## Steps for making and deploying a Clojure AWS lambda

The AWS command line tool and the AWS web console seem to be functionally equivalent. As a first timer, I used a mix of the two - whichever I found the best instructions for. The AWS Lambda developer guide is a good starting point.

1. Create an AWS account.

2. Download the AWS command line tool and configure it with your credentials.

3. Install the [AWS sdk](https://aws.amazon.com/sdk-for-java/) for java.

4. Write your Clojure code including using gen-class to generate the AWS class that conforms to the relevant Amazon AWS Java SDK interfaces.

5. Build an uberjar of your code. I use Leiningen, so it's `lein clean` followed by `lean uberjar`.

6. Set up a role that can invoke your lambda and has appropriate permissions for any other AWS services that your lambda uses (e.g. S3). I used the AWS web console for this, although it can also be done via the AWS command line tool. Take a note of the ARN.

7. Create any lambda layers your lambda needs (to call into) e.g. for me the graphviz binary. Take a note of the ARN. I used the AWS web console for this. See below for building graphviz for AWS lambda.

8. Create your lambda function and deploy your jar (and any lambda layer binaries). In my case:

        aws lambda create-function \
        --function-name DrawGraph \
        --runtime java8 \
        --memory-size 1024 \
        --timeout 59 \
        --description 'converts a graph in CSV format to svg format using graphviz' \
        --role arn:aws:iam::948737168603:role/basic_lambda_role \
        --handler clojurehandler.Handler::handleRequest \
        --zip-file fileb://target/lambda-draw-graph-0.1.0-standalone.jar \
        --layers arn:aws:lambda:eu-west-2:948737168603:layer:dot:2 \
        --region eu-west-2
    
9. Test invoke the lambda. Put the json data to be passed into the lambda in a file and invoke it as per:
    
       aws lambda invoke \
       --function-name DrawGraph \
       --payload fileb://input_csv1.json \
       out_from_csv1.json
    
10. As you refine your lambda, you'll regularly need to rebuild and redploy just the new jar:
		`lean clean`		`lean uberjar` and 
		
        aws lambda update-function-code \
        --function-name DrawGraph \
        --zip-file fileb://target/lambda-draw-graph-0.1.0-standalone.jar
    
    
## API Gateway

Now you should set up an API Gateway (REST interface) over your lambda to make it publicly accessible over http. I used the AWS web console for this, for creating a new API Gateway and then adding a simple POST pass-through method through to the lambda function. The only trick in my case was to turn off CORS headers to allow for this REST interface to be called from the browser.


## Building Graphviz for AWS Lambda

A statically linked graphviz binary is deployed as a 'lambda layer' and is called into by the clojure code with the data in graphviz' 'dot' format.
It's a bit of a challenge to build Graphviz so that it successfully runs on AWS lambda.
In my case there was prior art: https://lifeinplaintextblog.wordpress.com/deploying-graphviz-on-aws-lambda/
but I needed to do my own build; in order to add support for graphviz' 'html-like labels', I needed to compile graphviz with expat statically linked.
Although the blog article above mentions renting an AWS EC2 instance and compiling on that to ensure that you are building on the eventual target platform that the Lmabdas run on (see [this](https://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html) for the precise AMI image), I found that building on Redhat linux (that's Amazon's flavour of linux is apparently forked from) then deploying the pre-built binary to the lambda layer in a zip file structured like [so](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html#configuration-layers-path) worked just fine.

The steps I followed to produce a statically linked build were:

    // only do this step if building on the Amazon EC2 instance:
    $ sudo yum groupinstall "Development tools"
    
    // on with the build. static build of expat first
    wget https://github.com/libexpat/libexpat/releases/download/R_2_2_6/expat-2.2.6.tar.bz2
    tar -xvf expat-2.3.6.tar.bz2
    cd expat-2.2.6
    // --enable-shared=so means make only outputs .a files for static linking
    // into graphviz, and .so files won't be produced
    ./configure  --enable-shared=no -q
    make --quiet
    sudo make install
    
    
    // Then Graphviz itself
    cd ..
    wget https://graphviz.gitlab.io/pub/graphviz/stable/SOURCES/graphviz.tar.gz
    tar -xvf graphviz.tar.gz
    cd graphviz-2.40.1/
    ./configure   --enable-static=yes --enable-shared=no --with-expat=yes
    make

    // then cd into cmd/dot to find the dot_static bindary

