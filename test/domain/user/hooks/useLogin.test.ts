import { renderHook } from '@testing-library/react-hooks';
import * as loginApi from '../../../../src/domain/user/api/indexFrontend';
import useLogin from '../../../../src/domain/user/hooks/useLogin';

const loginSpy = jest.spyOn(loginApi, 'login');

beforeEach(() => {
  localStorage.clear();
});

describe('useLogin', () => {
  it('signs a new user up and stores their userId in localStorage', async () => {
    const newUserId = 'newUserId';
    loginSpy.mockResolvedValue({ userId: newUserId });

    const { result, waitForNextUpdate } = renderHook(() => useLogin());
    await waitForNextUpdate();

    expect(result.current).toEqual(newUserId);
    expect(loginSpy).toHaveBeenCalledTimes(1);
    expect(loginSpy).toHaveBeenCalledWith('null');
    expect(localStorage.getItem('bingoalUserId')).toEqual(
      JSON.stringify(newUserId)
    );
  });

  it('logs an existing user in and stores their userId in localStorage', async () => {
    const existingUserId = 'existingUserId';
    localStorage.setItem('bingoalUserId', JSON.stringify(existingUserId));
    loginSpy.mockResolvedValue({ userId: existingUserId });

    const { result, waitForNextUpdate } = renderHook(() => useLogin());
    await waitForNextUpdate();

    expect(result.current).toEqual(existingUserId);
    expect(loginSpy).toHaveBeenCalledTimes(1);
    expect(loginSpy).toHaveBeenCalledWith(existingUserId);
    expect(localStorage.getItem('bingoalUserId')).toEqual(
      JSON.stringify(existingUserId)
    );
  });
});
