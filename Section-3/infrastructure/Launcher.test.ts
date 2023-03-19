import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { SpaceStack } from './SpaceStack';

test('Stack Creates Properly', () => {
    // prepare
    const app = new cdk.App();
    const stack = new SpaceStack(app, 'SpaceStack');
    const template = Template.fromStack(stack);

    // Dummy condition to congifure test
    //template.resourceCountIs('AWS', );
});
