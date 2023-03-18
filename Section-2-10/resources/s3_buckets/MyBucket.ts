import { CfnOutput, Duration, Stack } from 'aws-cdk-lib';
import { Bucket } from "aws-cdk-lib/aws-s3";

export class MyBucket extends Bucket{
    constructor(stack: Stack, name: string, objectName: string, duration: number){
        super(stack, name, {
            lifecycleRules: [
               {
                 expiration: Duration.days(duration)
               }
            ]                 
        });

        new CfnOutput(stack, objectName, {
          value: this.bucketName 
        });

   }
}

