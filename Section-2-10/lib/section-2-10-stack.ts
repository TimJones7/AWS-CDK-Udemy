import * as cdk from 'aws-cdk-lib';
import { CfnParameter } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { MyBucket } from '../resources/s3_buckets/MyBucket';

// This defines one stack
export class Section210Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Adding parameters to stack from cli
    const duration = new CfnParameter(this, 'duration', {
      type: 'Number',
      default: 5,
      minValue: 2,
      maxValue: 10
    })

    const myBucket1 = new MyBucket(this, 'MyAbstractedBucket', 'myBucket1', duration.valueAsNumber);
    
  }
}
