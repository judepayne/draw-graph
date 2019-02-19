# lambda-draw-graph

The code that is deployed as an AWS Lambda function.

I've kept this code to a minimum (one source file); most of the functionality is provided in .cljc files compiled into this lambda. Structuring the application this way, allowed for functionality to be moved between front and back ends or both.

The Clojure code here has to generate a java class that conforms to the AWS Java JDK for lambda functions. I've always found it a bit fiddly to get Clojure to generate Java classes and there are instructions on the steps as comments in the source file.

## Steps for making and deploying a Clojure AWS lambda

1. Create an AWS account.
2. Download the AWS command line tool and configure it with your credentials.
3. Install the [AWS sdk](https://aws.amazon.com/sdk-for-java/) for java
4. Write your Clojure code including using gen-class to generate the AWS class that conforms to the relevant Amazon AWS Java SDK interfaces.
5. Build an uberjar of your code. I use Leiningen, so it's `lean clean` followed by `lean uberjar`.
6. Set up a role that can invoke your lambda and has appropriate permissions for any other AWS services that your lambda uses (e.g. S3). I used the AWS web console for this, although it can also be done via the AWS command line tool. Take a note of the ARN.
7. Create any lambda layers your lambda needs (to call into) e.g. for me the graphviz binary. Take a note of the ARN. 
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
		lean clean
		lean uberjar 
And 
    aws lambda update-function-code \
    --function-name DrawGraph \
    --zip-file fileb://target/lambda-draw-graph-0.1.0-standalone.jar
    
    
## API Gateway


    