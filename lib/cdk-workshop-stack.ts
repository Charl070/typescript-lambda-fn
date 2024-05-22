import * as cdk from 'aws-cdk-lib';
import * as Lambda from 'aws-cdk-lib/aws-lambda'
import * as awsgw from 'aws-cdk-lib/aws-apigateway'

export class CdkWorkshopStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
  
  // defines an AWS Lambda resource
  const hello = new Lambda.Function(this, 'HelloHandler', {
    runtime: Lambda.Runtime.NODEJS_16_X, // execution environment
    code: Lambda.Code.fromAsset('lambda'), // code loaded from "lambda" directory
    handler: 'hello.handler'  // file is "hello", function is "handler"
  });

  // defines an API Gateway REST API resource backed by our "hello" function.
  new awsgw.LambdaRestApi(this, 'Endpoint',{
    handler: hello
  });
}
}
