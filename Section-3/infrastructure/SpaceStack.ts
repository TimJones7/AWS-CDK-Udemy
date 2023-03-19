import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {Code, Function as LambdaFunction, Runtime} from 'aws-cdk-lib/aws-lambda';
import { join } from 'path';
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';
import { GenericTable } from './GenericTable';


export class SpaceStack extends Stack {

    private api = new RestApi(this, 'SpaceApi');
    private spacesTable = new GenericTable(
        'Spaces-Table',
        'spaceId',
        this
    );

    constructor(scope: Construct, id: string, props?: StackProps){
        super(scope, id, props)


        const helloLambda = new LambdaFunction(this, 'hello-lambda', {
            runtime: Runtime.NODEJS_14_X,
            code: Code.fromAsset(join(__dirname, '..', 'service', 'hello')),
            handler: 'hello.main'
        });



        // Hello API lambda integration
        // This is how to link a lambda with an api gateway
        const helloLambdaIntegration = new LambdaIntegration(helloLambda);
        // Provide the source
        const helloLambdaResource = this.api.root.addResource('hello');
        // Then provide the method
        helloLambdaResource.addMethod('GET', helloLambdaIntegration);




    }
}