import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { MyBucket } from '../resources/s3_buckets/MyBucket';

// This defines one stack
export class Section210Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    
    super(scope, id, props);

    // Defines a resource on the stack
    const myBucket1 = new MyBucket(this, 'MyAbstractedBucket', 'myBucket1');    
  }
}
