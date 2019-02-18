#!/bin/bash

lein clean

lein uberjar

aws lambda update-function-code \
--function-name DrawGraph \
--zip-file fileb://target/lambda-draw-graph-0.1.0-standalone.jar

aws lambda invoke \
--function-name DrawGraph \
--payload fileb://input_csv1.json \
out_from_csv1.json
