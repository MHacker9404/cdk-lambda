const { App } = require('@aws-cdk/core')
const LambdaFunction = require('./lambda-stack')

// Define names
const STACK_NAME = 'APP_NAME';
const STACK_ENV = 'DEV';
const MY_ACCOUNT = '123456789'

// Create the app
const app = new App();

// Create the lambda
const { lambdaFunction } = new LambdaFunction(app,`APIGW`, { env: { MY_ACCOUNT }, STACK_NAME, STACK_ENV })

app.synth();