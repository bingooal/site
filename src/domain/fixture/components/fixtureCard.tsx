import Link from 'next/link';

type Props = {
  homeTeamName: string;
  awayTeamName: string;
  id: string;
};
const FixtureCard: React.VFC<Props> = ({
  homeTeamName,
  awayTeamName,
  id,
}: Props) => (
  <Link href={`fixtures/${id}`}>
    <div>
      FixtureCard
      <span>{homeTeamName}</span>
      <span>{awayTeamName}</span>
    </div>
  </Link>
);

export default FixtureCard;
