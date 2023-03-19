import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {Code, Function as LambdaFunction, Runtime} from 'aws-cdk-lib/aws-lambda';
import { join } from 'path';
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';
import { GenericTable } from './GenericTable';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { SESV2 } from 'aws-sdk';

export class SpaceStack extends Stack {

    private api = new RestApi(this, 'SpaceApi');
    private spacesTable = new GenericTable(
        'Spaces-Table',
        'spaceId',
        this
    );

    constructor(scope: Construct, id: string, props?: StackProps){
        super(scope, id, props)

        // const helloLambda = new LambdaFunction(this, 'hello-lambda', {
        //     runtime: Runtime.NODEJS_14_X,
        //     code: Code.fromAsset(join(__dirname, '..', 'service', 'hello')),
        //     handler: 'hello.main'
        // });

        const helloLambdaWebpack = new LambdaFunction(this, 'hello-lambda-webpack', {
            runtime: Runtime.NODEJS_14_X,
            code: Code.fromAsset(join(__dirname, '..', 'build', 'nodeHelloLambda')),
            handler: 'nodeHelloLambda.handler'
        });

        const helloLambdaNodeJs = new NodejsFunction(this, 'Node-Lambda', {
            entry: (join(__dirname, '..', 'service', 'node-lambda', 'hello.ts')),
            handler: 'handler'
        });

        const s3ListPolicy = new PolicyStatement();
        s3ListPolicy.addActions('s3:ListAllMyBuckets');
        s3ListPolicy.addResources('*');
        helloLambdaNodeJs.addToRolePolicy(s3ListPolicy);

        // Hello API lambda integration
        // This is how to link a lambda with an api gateway
        const helloLambdaIntegration = new LambdaIntegration(helloLambdaNodeJs);
        // Provide the source
        const helloLambdaResource = this.api.root.addResource('hello');
        // Then provide the method
        helloLambdaResource.addMethod('GET', helloLambdaIntegration);




    }
}