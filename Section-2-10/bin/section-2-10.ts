#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { Section210Stack } from '../lib/section-2-10-stack';

const app = new cdk.App();

 /*
 This is a new stack, it requires:
  - a dependency to the application
  - a name
  - deployment properties

  The great thing about having all of our deployed stacks here is that stacks can share parameters
  */
new Section210Stack(app, 'Section210Stack', {});
//new Section210Stack(app, 'AnotherStack42069', {});
