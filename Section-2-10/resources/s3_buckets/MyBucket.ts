import { CfnOutput, CfnParameter, Duration, Stack } from 'aws-cdk-lib';
import { Bucket } from "aws-cdk-lib/aws-s3";

// Creating custom implementation of resource
export class MyBucket extends Bucket{
    constructor(stack: Stack, name: string, objectName: string){
        
      // Adding parameters to stack from cli
        const duration = new CfnParameter(stack, 'duration', {
          type: 'Number',
          default: 5,
          minValue: 2,
          maxValue: 10
        });  

        // Abstract out specific resource props
        const resourceProps = {
          lifecycleRules: [
             {
               expiration: Duration.days(duration.valueAsNumber)
             }
          ]                 
        };

        // Call resource parent constructor to build resouce on stack
        super(stack, name, resourceProps);

        // Provide some cmd line output for resources created.
        new CfnOutput(stack, objectName, {
          value: this.bucketName 
        });
   }
}

