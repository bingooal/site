type Props = {
  imageUrl: string;
  name: string;
  points: number;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const EventCard: React.VFC<Props> = ({ imageUrl, name, points }: Props) => (
  <div>
    {/* <div>{imageUrl}</div> */}
    <div>{name}</div>
    <div>{points}</div>
  </div>
);

export default EventCard;
