import { renderHook } from '@testing-library/react-hooks';
import * as fixtureApi from '../../../../src/domain/fixture/api/indexFrontend';
import Leaderboard from '../../../../src/domain/fixture/data/Leaderboard';
import useLeaderboard from '../../../../src/domain/fixture/hooks/useLeaderboard';

const fixtureApiSpy = jest.spyOn(fixtureApi, 'getLeaderboard');

const fixtureId = 'fixtureId';
const userId = 'userId';
const leaderboard: Leaderboard = [
  {
    userId: 'userWithMorePointsThanYou',
    points: 2,
  },
  {
    userId,
    points: 1,
  },
];

describe('useLeaderboard', () => {
  it('fetches users from the backend when fixtureId is defined', async () => {
    fixtureApiSpy.mockResolvedValue(leaderboard);

    const { result, waitForNextUpdate } = renderHook(() =>
      useLeaderboard(fixtureId, userId)
    );

    expect(result.current.userRank).toEqual(1);
    expect(result.current.numberOfUsersPlayingFixture).toEqual(1);

    await waitForNextUpdate();

    expect(result.current.userRank).toEqual(2);
    expect(result.current.numberOfUsersPlayingFixture).toEqual(
      leaderboard.length
    );
    expect(fixtureApiSpy).toHaveBeenCalledTimes(1);
    expect(fixtureApiSpy).toHaveBeenCalledWith(fixtureId);
  });

  it('does not fetch users from the backend when fixtureId is not defined', async () => {
    fixtureApiSpy.mockResolvedValue(leaderboard);

    const { result } = renderHook(() => useLeaderboard(null, userId));

    expect(result.current.numberOfUsersPlayingFixture).toEqual(1);
    expect(fixtureApiSpy).toHaveBeenCalledTimes(0);
  });

  it('shows the user is ranked 1 out of 1 users when backend returns empty leaderboard', async () => {
    fixtureApiSpy.mockResolvedValue([]);

    const { result, waitForNextUpdate } = renderHook(() =>
      useLeaderboard(fixtureId, userId)
    );
    await waitForNextUpdate();

    expect(result.current.userRank).toEqual(1);
    expect(result.current.numberOfUsersPlayingFixture).toEqual(1);
    expect(fixtureApiSpy).toHaveBeenCalledTimes(1);
  });
});
