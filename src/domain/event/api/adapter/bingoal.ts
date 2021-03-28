import makeRequest from '../../../../services/request';
import { SelectEvent, DeselectEvent } from '../indexBackend';

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
