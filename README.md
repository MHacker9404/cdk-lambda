# cdk-lambda

Use a lambda function to deploy CDK applications in a serverless way!

# Step 1
Create a nodejs lambda layer with cdk dependencies

```
git clone
cd nodejs
npm i
cd ..
zip -r nodejs.zip nodejs
```

# Step 2
Create your serverless deployment function. Add the layer from above, grant function permissions, and update the account number in deploy-lambda-stack.js

# Step 3
Run the function to deploy the lambda stack
