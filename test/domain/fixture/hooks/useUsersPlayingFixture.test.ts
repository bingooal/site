import { renderHook } from '@testing-library/react-hooks';
import * as fixtureApi from '../../../../src/domain/fixture/api/indexFrontend';
import useUsersPlayingFixture from '../../../../src/domain/fixture/hooks/useUsersPlayingFixture';

const fixtureApiSpy = jest.spyOn(fixtureApi, 'getUsersPlayingFixture');

const defaultNumberOfUsersPlayingFixture = 1;

describe('useUsersPlayingFixture', () => {
  it('fetches users from the backend when fixtureId is defined', async () => {
    fixtureApiSpy.mockResolvedValue(123);

    const fixtureId = 'fixtureId';
    const { result, waitForNextUpdate } = renderHook(() =>
      useUsersPlayingFixture(fixtureId)
    );

    expect(result.current.numberOfUsersPlayingFixture).toEqual(
      defaultNumberOfUsersPlayingFixture
    );

    await waitForNextUpdate();

    expect(result.current.numberOfUsersPlayingFixture).toEqual(123);
    expect(fixtureApiSpy).toHaveBeenCalledTimes(1);
    expect(fixtureApiSpy).toHaveBeenCalledWith(fixtureId);
  });

  it('does not fetch users from the backend when fixtureId is not defined', async () => {
    fixtureApiSpy.mockResolvedValue(123);

    const { result } = renderHook(() => useUsersPlayingFixture(null));

    expect(result.current.numberOfUsersPlayingFixture).toEqual(
      defaultNumberOfUsersPlayingFixture
    );
    expect(fixtureApiSpy).toHaveBeenCalledTimes(0);
  });

  it('shows the current user is playing when backend returns no users playing this fixture', async () => {
    fixtureApiSpy.mockResolvedValue(0);

    const { result } = renderHook(() => useUsersPlayingFixture('fixtureId'));

    expect(result.current.numberOfUsersPlayingFixture).toEqual(
      defaultNumberOfUsersPlayingFixture
    );
    expect(fixtureApiSpy).toHaveBeenCalledTimes(1);
  });
});
