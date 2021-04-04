type Props = {
  userPoints: number;
  userRank: number;
  numberOfUsersPlayingFixture: number;
};

const UserPerformanceTable: React.VFC<Props> = ({
  userPoints,
  userRank,
  numberOfUsersPlayingFixture,
}: Props) => (
  <div className="container px-2 mx-auto sm:px-8">
    <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-4 py-3 text-xs font-semibold tracking-wider text-center uppercase bg-gray-100 border-b-2 border-gray-200">
              Total Points
            </th>
            <th className="px-4 py-3 text-xs font-semibold tracking-wider text-center uppercase bg-gray-100 border-b-2 border-gray-200">
              {`Rank (of ${numberOfUsersPlayingFixture} players)`}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-2 py-5 text-sm bg-white border-b border-gray-200">
              <div className="flex items-center justify-center">
                <div className="ml-0">
                  <p className="whitespace-no-wrap">{userPoints}</p>
                </div>
              </div>
            </td>
            <td className="px-2 py-5 text-sm bg-white border-b border-gray-200">
              <div className="flex items-center justify-center">
                <div className="mr-0">
                  <p className="whitespace-no-wrap ">{userRank}</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default UserPerformanceTable;
