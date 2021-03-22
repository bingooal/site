type Props = {
  imageUrl: string;
  name: string;
  points: number;
  selected: boolean;
  onClick: (name: string) => void;
};

const EventCard: React.VFC<Props> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  imageUrl,
  name,
  points,
  selected,
  onClick,
}: Props) => (
  <div onClick={() => onClick(name)}>
    {/* <div>{imageUrl}</div> */}
    <div>
      <b>{name}</b>
    </div>
    <div>{points}</div>
    {selected && <div>Selected</div>}
  </div>
);

export default EventCard;
