import Image from 'next/image';
import Link from 'next/link';
import FixturePreview from '../data/FixturePreview';

type FixtureRowProps = {
  fixture: FixturePreview;
};

const FixtureRow: React.VFC<FixtureRowProps> = ({
  fixture: { id, homeTeamName, awayTeamName, homeTeamLogo, awayTeamLogo },
}: FixtureRowProps) => (
  <Link href={`fixtures/${id}`}>
    <tr>
      <td className="w-2/5 px-2 py-5 text-sm bg-white border-b border-gray-200">
        <div className="flex items-center">
          <div className="relative flex-shrink-0 w-10 h-10 sm:table-cell">
            <Image src={homeTeamLogo} alt={homeTeamName} layout="fill" />
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{homeTeamName}</p>
          </div>
        </div>
      </td>
      <td className="px-2 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-center text-gray-900 whitespace-no-wrap">3pm</p>
      </td>
      <td className="w-2/5 px-2 py-5 text-sm bg-white border-b border-gray-200">
        <div className="flex items-center float-right">
          <div className="mr-3">
            <p className="text-right text-gray-900 whitespace-no-wrap">
              {awayTeamName}
            </p>
          </div>
          <div className="relative flex-shrink-0 w-10 h-10 sm:table-cell">
            <Image src={awayTeamLogo} alt={awayTeamName} layout="fill" />
          </div>
        </div>
      </td>
    </tr>
  </Link>
);

type TableProps = {
  fixtures: FixturePreview[];
};

const FixturesTable: React.VFC<TableProps> = ({ fixtures }: TableProps) => (
  <div className="container px-4 mx-auto sm:px-8">
    <div className="py-8">
      <h3 className="px-4 font-semibold px text-l">Today</h3>
      <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 text-xs font-semibold tracking-wider text-center text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                  Home
                </th>
                <th className="px-5 py-3 text-xs font-semibold tracking-wider text-center text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                  Time
                </th>
                <th className="px-5 py-3 text-xs font-semibold tracking-wider text-center text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                  Away
                </th>
              </tr>
            </thead>
            <tbody>
              {fixtures.map((fixture) => (
                <FixtureRow key={fixture.id} fixture={fixture} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default FixturesTable;
