import Image from 'next/image';

type Props = {
  name: string;
  points: number;
  imageUrl: string;
  selected: boolean;
  onClick: (name: string) => void;
};

const EventCard: React.VFC<Props> = ({
  name,
  points,
  imageUrl,
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
  </div>
);

export default EventCard;
