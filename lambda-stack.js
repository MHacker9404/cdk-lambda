const { Stack, RemovalPolicy} = require('@aws-cdk/core')
const { Runtime, Code, Function } = require('@aws-cdk/aws-lambda')
const { LambdaRestApi } = require("@aws-cdk/aws-apigateway")

module.exports = class LambdaFunction extends Stack {
  constructor(parent, id, props) {
    super(parent, id, props);

    const { STACK_NAME, STACK_ENV } = props

    // defines an AWS Lambda resource
    const lambda = new Function(this, `${STACK_NAME}-${STACK_ENV}`, {
      runtime: Runtime.NODEJS_10_X,    // execution environment
      code: Code.fromAsset('lambda'),  // code loaded from "lambda" directory
      handler: 'index.handler',        // file is "index", function is "handler"
      environment: {
        STACK_ENV: `${STACK_ENV}`,
      }
    });

    // defines an API Gateway REST API resource backed by our "hello" function.
    new LambdaRestApi(this, 'Endpoint', {
      handler: lambda
    });
    
  }
};