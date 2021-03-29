import Image from 'next/image';
import Link from 'next/link';

type Props = {
  homeTeamName: string;
  awayTeamName: string;
  homeTeamLogo: string;
  awayTeamLogo: string;
  id: string;
};
const FixtureCard: React.VFC<Props> = ({
  homeTeamName,
  awayTeamName,
  homeTeamLogo,
  awayTeamLogo,
  id,
}: Props) => (
  <Link href={`fixtures/${id}`}>
    <div>
      <Image src={homeTeamLogo} alt={homeTeamName} width={50} height={50} />
      <b>{`${homeTeamName} vs ${awayTeamName}`}</b>
      <Image src={awayTeamLogo} alt={awayTeamName} width={50} height={50} />
    </div>
  </Link>
);

export default FixtureCard;
