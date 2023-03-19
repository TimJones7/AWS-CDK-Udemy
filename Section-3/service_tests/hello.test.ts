import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { SpaceStack } from '../infrastructure/SpaceStack';

// TEST CONSTANTS
const num_of_endpoints = 1;

test('ONLY ONE LAMBDA CREATED', () => {
    const app = new cdk.App();
    const stack = new SpaceStack(app, 'SpaceStack');
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::Lambda::Function', 1);
});

test('LAMBDA HAS NODE 14 RUNTIME', () => {
    const app = new cdk.App();
    const stack = new SpaceStack(app, 'SpaceStack');
    const template = Template.fromStack(stack);
    const lambdaProps = { 
        Runtime: 'nodejs14.x'
    };
    template.hasResourceProperties('AWS::Lambda::Function', lambdaProps);
});

test('LAMBDA HAS PROPER FUNCTION HANDLER', () => {
    const app = new cdk.App();
    const stack = new SpaceStack(app, 'SpaceStack');
    const template = Template.fromStack(stack);
    const lambdaProps = { 
        Handler: 'hello.main'
    };
    template.hasResourceProperties('AWS::Lambda::Function', lambdaProps);
});
