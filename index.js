const exec = require('child_process').exec;

exports.handler = (event, context, callback) => {
     
    const cdk = `/opt/nodejs/node_modules/aws-cdk/bin/cdk`;
    const deploy = `deploy --require-approval never --no-staging --app deploy-lambda-stack.js --ec2creds false --path-metadata false --asset-metadata false -o /tmp/cdk.out`;
    const CMD = `${cdk} ${deploy}`;
    
    const child = exec(CMD, (error) => {
        // Resolve with result of process
        callback(error, 'Process complete!');
    });

    // Log process stdout and stderr
    child.stdout.on('data', console.log);
    child.stderr.on('data', console.error);
};
