import { SelectEvent, DeselectEvent } from './indexBackend';
import {
  selectEvent as selectEventInBingoal,
  deselectEvent as deselectEventInBingoal,
} from './adapter/bingoal';

export const selectEvent: SelectEvent = selectEventInBingoal;
export const deselectEvent: DeselectEvent = deselectEventInBingoal;
