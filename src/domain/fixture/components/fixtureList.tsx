import Image from 'next/image';
import Link from 'next/link';
import { getDay, getTime } from '../../../services/date';
import FixturePreview from '../data/FixturePreview';

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

type FixtureStatusProps = {
  date: string;
};

const FixtureStatus: React.VFC<FixtureStatusProps> = ({
  date,
}: FixtureStatusProps) => (
  <>
    <div className="text-sm font-medium">{getDay(date)}</div>
    <div className="text-xs text-gray-600">{getTime(date)}</div>
  </>
);

type FixtureCardProps = {
  fixture: FixturePreview;
};

export const FixtureCard: React.VFC<FixtureCardProps> = ({
  fixture: {
    id,
    date,
    homeTeamName,
    homeTeamLogo,
    homeTeamGoals,
    awayTeamName,
    awayTeamLogo,
    awayTeamGoals,
  },
}: FixtureCardProps) => (
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
      <div className="flex flex-col justify-center w-1/4 text-center">
        <FixtureStatus date={date} />
      </div>
    </div>
  </Link>
);

type Props = {
  fixtures: FixturePreview[];
};

const FixtureList: React.VFC<Props> = ({ fixtures }: Props) => (
  <div className="container mx-auto divide-y space-y sm:px-8">
    <h3 className="px-2 py-2 text-xl font-semibold">Today</h3>
    {fixtures.map((fixture) => (
      <FixtureCard key={fixture.id} fixture={fixture} />
    ))}
  </div>
);

export default FixtureList;
