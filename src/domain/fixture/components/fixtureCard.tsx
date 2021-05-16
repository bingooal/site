import Image from 'next/image';
import Link from 'next/link';
import FixturePreview from '../data/FixturePreview';
import FixtureStatus from './fixtureStatus';

type TeamRowProps = {
  name: string;
  logo: string;
  goals: number | null;
};

const TeamRow: React.VFC<TeamRowProps> = ({
  name,
  logo,
  goals,
}: TeamRowProps) => (
  <div className="flex flex-row items-center px-2 py-1 space-x-3">
    <div className="relative flex-shrink-0 w-7 h-7">
      <Image src={logo} alt={name} layout="fill" />
    </div>
    <div className="w-4/5">{name}</div>
    <div className="font-semibold">{goals}</div>
  </div>
);

type Props = {
  fixture: FixturePreview;
};

const FixtureCard: React.VFC<Props> = ({
  fixture: {
    id,
    date,
    status,
    minute,
    homeTeamName,
    homeTeamLogo,
    homeTeamGoals,
    awayTeamName,
    awayTeamLogo,
    awayTeamGoals,
  },
}: Props) => (
  <Link href={`fixtures/${id}`}>
    <div className="flex flex-row py-3 bg-white">
      <div className="w-3/4 pr-2 border-r">
        <TeamRow
          name={homeTeamName}
          logo={homeTeamLogo}
          goals={homeTeamGoals}
        />
        <TeamRow
          name={awayTeamName}
          logo={awayTeamLogo}
          goals={awayTeamGoals}
        />
      </div>
      <div className="flex flex-col justify-center w-1/4 text-sm font-medium text-center">
        <FixtureStatus status={status} date={date} minute={minute} />
      </div>
    </div>
  </Link>
);

export default FixtureCard;
