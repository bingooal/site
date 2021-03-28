import useLocalStorageState from 'use-local-storage-state';
import {
  selectEvent as updateBackendWithSelectedEvent,
  deselectEvent as updateBackendWithDeselectedEvent,
} from '../api/indexFrontend';

const useSelectableEvents = (userId: string, fixtureId: string) => {
  const [selectedEvents, setSelectedEvents] = useLocalStorageState(
    `selectedEvents-${fixtureId}`,
    []
  );

  const isSelected = (name: string) => selectedEvents.includes(name);

  const selectEvent = (name: string) => {
    updateBackendWithSelectedEvent(userId, fixtureId, name);
    setSelectedEvents([...selectedEvents, name]);
  };

  const deselectEvent = (name: string) => {
    updateBackendWithDeselectedEvent(userId, fixtureId, name);
    setSelectedEvents(
      selectedEvents.filter(
        (nameOfSelectedEvent) => nameOfSelectedEvent !== name
      )
    );
  };

  const toggleEvent = (name: string) =>
    isSelected(name) ? deselectEvent(name) : selectEvent(name);

  const numberOfSelectedEvents = selectedEvents.length;

  return { numberOfSelectedEvents, isSelected, toggleEvent };
};

export default useSelectableEvents;
