import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { SpaceStack } from './SpaceStack';

test('THIS IS A PLACEHOLDER JEST TEST', () => {
   const app = new cdk.App();
     // WHEN
   const stack = new SpaceStack(app, 'SpaceStack');
     // THEN
   const template = Template.fromStack(stack);

    // Dummy condition to congifure test
    template.resourceCountIs('AWS::S3::Bucket',0);
});
