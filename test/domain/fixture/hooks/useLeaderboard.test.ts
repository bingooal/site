import { renderHook } from '@testing-library/react-hooks';
import * as fixtureApi from '../../../../src/domain/fixture/api/indexFrontend';
import Leaderboard from '../../../../src/domain/fixture/data/Leaderboard';
import useLeaderboard from '../../../../src/domain/fixture/hooks/useLeaderboard';
import { wrapperWithQueryClient } from '../../../testUtils';

const fixtureApiSpy = jest.spyOn(fixtureApi, 'getLeaderboard');

const fixtureId = 'fixtureId';
const userId = 'userId';
const userId2 = 'userId2';
const event = 'event';
const leaderboard: Leaderboard = [
  {
    userId: userId2,
    points: 2,
    selectedEvents: [event],
  },
  {
    userId,
    points: 1,
    selectedEvents: [event],
  },
];

describe('useLeaderboard', () => {
  it('fetches users from the backend when fixtureId is defined', async () => {
    fixtureApiSpy.mockResolvedValue(leaderboard);

    const { result, waitForNextUpdate } = renderHook(
      () => useLeaderboard(fixtureId, userId),
      { wrapper: wrapperWithQueryClient }
    );

    expect(result.current.userRank).toEqual(0);
    expect(result.current.numberOfUsersPlayingFixture).toEqual(0);
    expect(result.current.getOtherUsersSelectingEvent(event)).toEqual([]);

    await waitForNextUpdate();

    expect(result.current.userRank).toEqual(2);
    expect(result.current.numberOfUsersPlayingFixture).toEqual(
      leaderboard.length
    );
    expect(result.current.getOtherUsersSelectingEvent(event)).toEqual([
      userId2,
    ]);
    expect(fixtureApiSpy).toHaveBeenCalledTimes(1);
    expect(fixtureApiSpy).toHaveBeenCalledWith(fixtureId);
  });

  it('does not fetch users from the backend when fixtureId is not defined', async () => {
    fixtureApiSpy.mockResolvedValue(leaderboard);

    const { result } = renderHook(() => useLeaderboard(null, userId), {
      wrapper: wrapperWithQueryClient,
    });

    expect(result.current.numberOfUsersPlayingFixture).toEqual(0);
    expect(fixtureApiSpy).toHaveBeenCalledTimes(0);
  });
});
