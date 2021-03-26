import useLocalStorageState from 'use-local-storage-state';

const useSelectableEvents = (fixtureId: string) => {
  const [selectedEvents, setSelectedEvents] = useLocalStorageState(
    `selectedEvents-${fixtureId}`,
    []
  );

  const isSelected = (name: string) => selectedEvents.includes(name);

  const selectEvent = (name: string) =>
    setSelectedEvents([...selectedEvents, name]);

  const deselectEvent = (name: string) =>
    setSelectedEvents(
      selectedEvents.filter(
        (nameOfSelectedEvent) => nameOfSelectedEvent !== name
      )
    );

  const toggleEvent = (name: string) =>
    isSelected(name) ? deselectEvent(name) : selectEvent(name);

  const numberOfSelectedEvents = selectedEvents.length;

  return { numberOfSelectedEvents, isSelected, toggleEvent };
};

export default useSelectableEvents;
