import Image from 'next/image';
import Link from 'next/link';
import FixturePreview from '../data/FixturePreview';

type Props = {
  fixture: FixturePreview;
};
const FixtureCard: React.VFC<Props> = ({
  fixture: { homeTeamName, awayTeamName, homeTeamLogo, awayTeamLogo, id },
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
