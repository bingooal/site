import Image from 'next/image';
import Event from '../data/Event';

const getUserInitials = (username: string): string =>
  username
    .split('-')
    .map((word) => word[0])
    .join('')
    .toUpperCase();

type EventRowProps = {
  event: Event;
  selected: boolean;
  onClick: (name: string) => void;
  otherUsersSelectingEvent: string[];
};

const getBackgroundColor = (selected, hasOccured) => {
  if (selected && hasOccured) {
    return 'bg-green-200';
  }
  if (selected && !hasOccured) {
    return 'bg-yellow-100';
  }
  if (!selected && hasOccured) {
    return 'bg-gray-200';
  }
  return 'bg-white';
};

const EventRow: React.VFC<EventRowProps> = ({
  event: { name, points, imageUrl, hasOccured },
  selected,
  onClick,
  otherUsersSelectingEvent,
}: EventRowProps) => (
  <tr
    onClick={() => onClick(name)}
    className={getBackgroundColor(selected, hasOccured)}
    aria-label={`${selected ? 'Selected ' : ''}${hasOccured ? 'Occured' : ''}`}
  >
    <td className="w-4/6 px-2 py-5 text-sm">
      <div className="flex items-center">
        <div className="relative flex-shrink-0 w-10 h-10 sm:table-cell">
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            className="rounded-full"
          />
        </div>
        <div className="ml-3">
          <p className="text-gray-900 whitespace-no-wrap">{name}</p>
        </div>
      </div>
    </td>
    <td className="w-1/6 px-2 py-5 text-sm">
      <div className="flex items-center justify-center">
        <div className="mr-0">
          <p className="text-gray-900 whitespace-no-wrap ">{points}</p>
        </div>
      </div>
    </td>
    <td className="w-1/6 px-2 py-5 text-sm">
      <div className="flex items-center justify-center">
        <div className="mr-0">
          <p className="text-gray-900 whitespace-no-wrap ">
            {otherUsersSelectingEvent.map(getUserInitials).join(' ')}
          </p>
        </div>
      </div>
    </td>
  </tr>
);

type EventAndOtherUsersSelectingIt = {
  event: Event;
  otherUsersSelectingEvent: string[];
};

type TableProps = {
  eventsAndOtherUsersSelectingThem: EventAndOtherUsersSelectingIt[];
  numberOfSelectedEvents: number;
  isSelected: (eventName: string) => boolean;
  toggleEvent: (eventName: string) => void;
};

const EventsTable: React.VFC<TableProps> = ({
  eventsAndOtherUsersSelectingThem,
  numberOfSelectedEvents,
  isSelected,
  toggleEvent,
}: TableProps) => (
  <div className="container px-2 py-2 mx-auto sm:px-16">
    <div className="py-2">
      <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="w-4/6 px-4 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                {`Events (${numberOfSelectedEvents} selected)`}
              </th>
              <th className="w-1/6 px-2 py-3 text-xs font-semibold tracking-wider text-center text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Points
              </th>
              <th className="w-1/6 px-2 py-3 text-xs font-semibold tracking-wider text-center text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Selected by
              </th>
            </tr>
          </thead>
          <tbody>
            {eventsAndOtherUsersSelectingThem.map(
              ({ event, otherUsersSelectingEvent }) => (
                <EventRow
                  key={event.name}
                  event={event}
                  selected={isSelected(event.name)}
                  onClick={event.hasOccured ? () => null : toggleEvent}
                  otherUsersSelectingEvent={otherUsersSelectingEvent}
                />
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default EventsTable;
