import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { GenericTable } from './GenericTable';
import { SpaceStack } from './SpaceStack';

test('TABLE CONFIGURES PROPERLY', () => {
    // Arrange
    const tableName = "test table";
    const priKey = "Id";
    const tableProps = {
        "Type": "AWS::DynamoDB::Table",
        "UpdateReplacePolicy": "Retain",
        "DeletionPolicy": "Retain",
    }
    const app = new cdk.App();
    // Act 
    const stack = new SpaceStack(app, 'SpaceStack');
    const table = new GenericTable(
        tableName,
        priKey,
        stack
    );
    // Assert
    const template = Template.fromStack(stack);
    template.hasResource('AWS::DynamoDB::Table', tableProps);

});