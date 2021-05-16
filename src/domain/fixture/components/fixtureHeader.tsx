import Image from 'next/image';
import FixturePreview from '../data/FixturePreview';
import FixtureStatus from './fixtureStatus';

type TeamInfoProps = {
  name: string;
  logo: string;
};

const TeamInfo: React.VFC<TeamInfoProps> = ({ name, logo }: TeamInfoProps) => (
  <div className="flex flex-col items-center space-y-1">
    <div className="relative flex-shrink-0 w-8 h-8 sm:table-cell">
      <Image src={logo} alt={name} layout="fill" />
    </div>
    <div className="text-xs font-medium ">{name}</div>
  </div>
);

type Props = {
  fixture: FixturePreview;
};

const FixtureHeader: React.VFC<Props> = ({
  fixture: {
    date,
    status,
    minute,
    homeTeamName,
    homeTeamLogo,
    homeTeamGoals,
    awayTeamName,
    awayTeamLogo,
    awayTeamGoals,
    competition,
  },
}: Props) => (
  <header className="sticky top-0 z-50 px-2 py-3 bg-white border-b space-y-2">
    <div className="text-xs text-center text-gray-600">{competition.name}</div>
    <div className="flex flex-row text-center ">
      <div className="w-2/5 ">
        <TeamInfo name={homeTeamName} logo={homeTeamLogo} />
      </div>
      <div className="w-1/5 space-y-1">
        <div className="text-2xl font-bold">
          {homeTeamGoals !== null ? `${homeTeamGoals} : ${awayTeamGoals}` : '-'}
        </div>
        <div className="text-xs text-gray-600">
          <FixtureStatus status={status} date={date} minute={minute} />
        </div>
      </div>
      <div className="w-2/5 ">
        <TeamInfo name={awayTeamName} logo={awayTeamLogo} />
      </div>
    </div>
  </header>
);

export default FixtureHeader;
