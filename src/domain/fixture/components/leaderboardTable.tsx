import Leaderboard from '../data/Leaderboard';

type UserRowProps = {
  username: string;
  points: number;
};

const UserRow: React.VFC<UserRowProps> = ({
  username, points
}: UserRowProps) => (
  <tr className="bg-white">
    <td className="w-4/5 px-2 py-5 text-sm">
      <div className="flex items-center">
        <div className="ml-3">
          <p className="text-gray-900 whitespace-no-wrap">{username}</p>
        </div>
      </div>
    </td>
    <td className="w-1/5 px-2 py-5 text-sm">
      <div className="flex items-center justify-center">
        <div className="mr-0">
          <p className="text-gray-900 whitespace-no-wrap ">{points}</p>
        </div>
      </div>
    </td>
  </tr>
);

type TableProps = {
  leaderboard: Leaderboard;
};

const LeaderboardTable: React.VFC<TableProps> = ({
  leaderboard,
}: TableProps) => (
  <div className="container px-2 py-2 mx-auto sm:px-8">
    <div className="py-2 sm:px-8">
      <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="w-4/5 px-4 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Username
              </th>
              <th className="w-1/5 px-4 py-3 text-xs font-semibold tracking-wider text-center text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Points
              </th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map(({ userId, points}) => (
              <UserRow
                key={userId}
                username={userId}
                points={points}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default LeaderboardTable;
