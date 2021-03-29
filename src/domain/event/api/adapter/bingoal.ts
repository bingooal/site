import makeRequest from '../../../../services/request';
import { GetSelectedEvents, SelectEvent, DeselectEvent } from '../indexBackend';

export const getSelectedEvents: GetSelectedEvents = async (userId, fixtureId) =>
  makeRequest({
    method: 'get',
    url: `${window.location.origin}/api/fixtures/${fixtureId}/events`,
    params: { userId },
  });

export const selectEvent: SelectEvent = async (userId, fixtureId, eventName) =>
  makeRequest({
    method: 'post',
    url: `${window.location.origin}/api/fixtures/${fixtureId}/events`,
    data: { userId, fixtureId, eventName },
  });

export const deselectEvent: DeselectEvent = async (
  userId,
  fixtureId,
  eventName
) =>
  makeRequest({
    method: 'delete',
    url: `${window.location.origin}/api/fixtures/${fixtureId}/events`,
    data: { userId, fixtureId, eventName },
  });
