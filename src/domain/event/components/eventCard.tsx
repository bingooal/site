type Props = {
  name: string;
  points: number;
  selected: boolean;
  onClick: (name: string) => void;
};

const EventCard: React.VFC<Props> = ({
  name,
  points,
  selected,
  onClick,
}: Props) => (
  <div onClick={() => onClick(name)}>
    <div>
      <b>{name}</b>
    </div>
    <div>{points}</div>
    {selected && <div>Selected</div>}
  </div>
);

export default EventCard;
