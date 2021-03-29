import { GetSelectedEvents, SelectEvent, DeselectEvent } from './indexBackend';
import {
  getSelectedEvents as getSelectedEventsFromBingoal,
  selectEvent as selectEventInBingoal,
  deselectEvent as deselectEventInBingoal,
} from './adapter/bingoal';

export const getSelectedEvents: GetSelectedEvents = getSelectedEventsFromBingoal;
export const selectEvent: SelectEvent = selectEventInBingoal;
export const deselectEvent: DeselectEvent = deselectEventInBingoal;
