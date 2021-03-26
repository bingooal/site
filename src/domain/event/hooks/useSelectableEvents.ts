import { useState } from 'react';

const useSelectableEvents = () => {
  const [selectedEvents, setSelectedEvents] = useState([]);

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
