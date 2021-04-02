import Image from 'next/image';
import Event from '../data/Event';

type Props = {
  event: Event;
  selected: boolean;
  onClick: (name: string) => void;
};

const EventCard: React.VFC<Props> = ({
  event: {
    name, points, imageUrl, hasOccured,
  },
  selected,
  onClick,
}: Props) => (
  <div onClick={() => onClick(name)}>
    <div>
      <b>{name}</b>
      <span>{` ${points} points`}</span>
    </div>
    <Image src={imageUrl} alt={name} width={50} height={50} />
    {selected && <div>Selected</div>}
    {hasOccured && <div>Has occured</div>}
  </div>
);

export default EventCard;
