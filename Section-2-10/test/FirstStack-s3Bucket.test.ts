import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as Section210 from '../lib/section-2-10-stack';

// my first Jest test to test a created resource with default property values
test('S3 Bucket Created Only Once', () => {
   const app = new cdk.App();
     // WHEN
   const stack = new Section210.Section210Stack(app, 'MyTestStack');
     // THEN
   const template = Template.fromStack(stack);

    // Test that the ExpirationInDays value is derived from cli param input
    template.hasResourceProperties('AWS::S3::Bucket', {
        LifecycleConfiguration: {
            Rules: [
                    {
                        ExpirationInDays: {
                            "Ref": "duration"
                          }
                    }
                ] 
            }
    });
    
    // Test that only one resource of S3::Bucket is created
    template.resourceCountIs('AWS::S3::Bucket',1);
});
