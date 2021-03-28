import {
  DynamoDBClient,
  QueryCommand,
  PutItemCommand,
} from '@aws-sdk/client-dynamodb';
import { UserRepository } from './index';
import User from '../../data/User';

const REGION = 'us-east-1';
const TABLE_NAME = 'Users';
enum AttributeName {
  Id = 'id',
}

const client = new DynamoDBClient({ region: REGION });

const insert: UserRepository['insert'] = async (user: User) => {
  const command = new PutItemCommand({
    TableName: TABLE_NAME,
    Item: {
      [AttributeName.Id]: { S: user.id },
    },
  });
  await client.send(command);
};

const contains: UserRepository['contains'] = async (userId: string) => {
  const command = new QueryCommand({
    TableName: TABLE_NAME,
    ConsistentRead: true,
    KeyConditionExpression: `${AttributeName.Id} = :userId`,
    ExpressionAttributeValues: {
      ':userId': {
        S: userId,
      },
    },
  });
  const response = await client.send(command);
  return Boolean(response.Items.length);
};

export const userRepository: UserRepository = {
  insert,
  contains,
};
