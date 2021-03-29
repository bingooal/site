import {
  DynamoDBClient,
  QueryCommand,
  UpdateItemCommand,
} from '@aws-sdk/client-dynamodb';
import { UserSessionRepository } from '.';

const REGION = 'us-east-1';
const TABLE_NAME = 'UsersSessions';
enum AttributeName {
  FixtureId = 'fixtureId',
  UserId = 'userId',
  SelectedEvents = 'selectedEvents',
}

enum AttributeType {
  FixtureId = 'S',
  UserId = 'S',
  SelectedEvents = 'SS',
}

const client = new DynamoDBClient({ region: REGION });

const getSelectedEvents: UserSessionRepository['getSelectedEvents'] = async (
  userId: string,
  fixtureId: string
) => {
  const command = new QueryCommand({
    TableName: TABLE_NAME,
    ConsistentRead: true,
    KeyConditionExpression: `${AttributeName.FixtureId} = :fixtureId AND ${AttributeName.UserId} = :userId`,
    ExpressionAttributeValues: {
      ':fixtureId': {
        [AttributeType.FixtureId]: fixtureId,
      },
      ':userId': {
        [AttributeType.UserId]: userId,
      },
    },
  });
  const response = await client.send(command);
  return response.Items[0]?.selectedEvents[AttributeType.SelectedEvents] || [];
};

const getUsersPlayingFixture: UserSessionRepository['getUsersPlayingFixture'] = async (
  fixtureId: string
) => {
  const command = new QueryCommand({
    TableName: TABLE_NAME,
    ConsistentRead: true,
    KeyConditionExpression: `${AttributeName.FixtureId} = :fixtureId`,
    ExpressionAttributeValues: {
      ':fixtureId': {
        [AttributeType.FixtureId]: fixtureId,
      },
    },
  });
  const response = await client.send(command);
  const userIds = response.Items.map(
    (item) => item.userId[AttributeType.UserId]
  );
  return userIds;
};

const selectEvent: UserSessionRepository['selectEvent'] = async (
  userId: string,
  fixtureId: string,
  selectedEvent: string
) => {
  const command = new UpdateItemCommand({
    TableName: TABLE_NAME,
    Key: {
      [AttributeName.FixtureId]: {
        [AttributeType.FixtureId]: fixtureId,
      },
      [AttributeName.UserId]: {
        [AttributeType.UserId]: userId,
      },
    },
    UpdateExpression: `ADD ${AttributeName.SelectedEvents} :selectedEvents`,
    ExpressionAttributeValues: {
      ':selectedEvents': {
        [AttributeType.SelectedEvents]: [selectedEvent],
      },
    },
  });
  await client.send(command);
};

const deselectEvent: UserSessionRepository['deselectEvent'] = async (
  userId: string,
  fixtureId: string,
  deselectedEvent: string
) => {
  const command = new UpdateItemCommand({
    TableName: TABLE_NAME,
    Key: {
      [AttributeName.FixtureId]: {
        [AttributeType.FixtureId]: fixtureId,
      },
      [AttributeName.UserId]: {
        [AttributeType.UserId]: userId,
      },
    },
    UpdateExpression: `DELETE ${AttributeName.SelectedEvents} :selectedEvents`,
    ExpressionAttributeValues: {
      ':selectedEvents': {
        [AttributeType.SelectedEvents]: [deselectedEvent],
      },
    },
  });
  await client.send(command);
};

export const userSessionRepository: UserSessionRepository = {
  getSelectedEvents,
  getUsersPlayingFixture,
  selectEvent,
  deselectEvent,
};
