import Image from 'next/image';
import FixturePreview from '../data/FixturePreview';

type Props = {
  fixture: FixturePreview;
};

const FixtureHeader: React.VFC<Props> = ({
  fixture: { homeTeamName, awayTeamName, homeTeamLogo, awayTeamLogo },
}: Props) => (
  <header className="sticky top-0 z-50 flex flex-row items-center justify-between w-full h-16 px-5 text-black bg-white border-b border-gray-200 md:h-20 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96">
    <div className="flex items-center w-2/5">
      <div className="relative flex-shrink-0 w-10 h-10 sm:table-cell">
        <Image src={homeTeamLogo} alt={homeTeamName} layout="fill" />
      </div>
      <div className="ml-3">
        <p className="font-semibold text-gray-900 whitespace-no-wrap">
          {homeTeamName}
        </p>
      </div>
    </div>
    <p className="text-center text-gray-900 whitespace-no-wrap">vs</p>
    <div className="flex items-center float-right w-2/5">
      <div className="mr-3">
        <p className="font-semibold text-right text-gray-900 whitespace-no-wrap">
          {awayTeamName}
        </p>
      </div>
      <div className="relative flex-shrink-0 w-10 h-10 sm:table-cell">
        <Image src={awayTeamLogo} alt={awayTeamName} layout="fill" />
      </div>
    </div>
  </header>
);

export default FixtureHeader;
