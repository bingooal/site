import Image from 'next/image';
import Event from '../data/Event';

type EventRowProps = {
  event: Event;
  selected: boolean;
  onClick: (name: string) => void;
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
}: EventRowProps) => (
  <tr
    onClick={() => onClick(name)}
    className={getBackgroundColor(selected, hasOccured)}
    aria-label={`${selected ? 'Selected ' : ''}${hasOccured ? 'Occured' : ''}`}
  >
    <td className="w-4/5 px-2 py-5 text-sm">
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
    <td className="w-1/5 px-2 py-5 text-sm">
      <div className="flex items-center justify-center">
        <div className="mr-0">
          <p className="text-gray-900 whitespace-no-wrap ">{points}</p>
        </div>
      </div>
    </td>
  </tr>
);

type TableProps = {
  events: Event[];
  numberOfSelectedEvents: number;
  isSelected: (eventName: string) => boolean;
  toggleEvent: (eventName: string) => void;
};

const EventsTable: React.VFC<TableProps> = ({
  events,
  numberOfSelectedEvents,
  isSelected,
  toggleEvent,
}: TableProps) => (
  <div className="container px-2 py-2 mx-auto sm:px-8">
    <div className="py-2 sm:px-8">
      <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="w-4/5 px-4 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                {`Events (${numberOfSelectedEvents} selected)`}
              </th>
              <th className="w-1/5 px-4 py-3 text-xs font-semibold tracking-wider text-center text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Points
              </th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <EventRow
                key={event.name}
                event={event}
                selected={isSelected(event.name)}
                onClick={event.hasOccured ? () => null : toggleEvent}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default EventsTable;
