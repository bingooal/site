import { useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import {
  getSelectedEvents as queryBackendForSelectedEvents,
  selectEvent as mutateBackendWithSelectedEvent,
  deselectEvent as mutateBackendWithDeselectedEvent,
} from '../api/indexFrontend';

const useSelectableEvents = (userId: string, fixtureId: string) => {
  const [selectedEvents, setSelectedEvents] = useLocalStorageState(
    `selectedEvents-${fixtureId}`,
    []
  );

  useEffect(() => {
    const loadSelectedEventsFromBackend = async () => {
      if (!userId || !fixtureId) {
        return;
      }
      const events = await queryBackendForSelectedEvents(userId, fixtureId);
      if (events.length) {
        setSelectedEvents(events);
      }
    };
    loadSelectedEventsFromBackend();
  }, [userId, fixtureId, setSelectedEvents]);

  const isSelected = (name: string) => selectedEvents.includes(name);

  const selectEvent = (name: string) => {
    mutateBackendWithSelectedEvent(userId, fixtureId, name);
    setSelectedEvents([...selectedEvents, name]);
  };

  const deselectEvent = (name: string) => {
    mutateBackendWithDeselectedEvent(userId, fixtureId, name);
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
