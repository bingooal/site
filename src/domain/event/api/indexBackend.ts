export { selectEvent, deselectEvent } from './adapter/selectEvents';

export type SelectEvent = (
  userId: string,
  fixtureId: string,
  eventName: string
) => Promise<void>;

export type DeselectEvent = (
  userId: string,
  fixtureId: string,
  eventName: string
) => Promise<void>;
