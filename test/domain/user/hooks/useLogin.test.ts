import { renderHook } from '@testing-library/react-hooks';
import * as loginApi from '../../../../src/domain/user/api/indexFrontend';
import useLogin from '../../../../src/domain/user/hooks/useLogin';

const loginSpy = jest.spyOn(loginApi, 'login');

const useMockStorage = () => {
  let store;

  const originalGetItem = Storage.prototype.getItem;
  const originalSetItem = Storage.prototype.setItem;
  const clear = () => {
    store = {};
  };
  const getItem = (key) => store[key] || null;
  const setItem = (key, val) => {
    store[key] = val;
  };

  beforeEach(() => {
    clear();
    Storage.prototype.getItem = jest.fn(getItem);
    Storage.prototype.setItem = jest.fn(setItem);
  });

  afterEach(() => {
    clear();
    Storage.prototype.getItem = originalGetItem;
    Storage.prototype.setItem = originalSetItem;
  });

  return { getItem, setItem, clear };
};

describe('useLogin', () => {
  const { setItem } = useMockStorage();

  it('signs a new user up and stores their userId in sessionStorage', async () => {
    const newUserId = 'newUserId';
    loginSpy.mockResolvedValue({ userId: newUserId });

    const { result, waitForNextUpdate } = renderHook(() => useLogin());
    await waitForNextUpdate();

    expect(result.current).toEqual(newUserId);
    expect(loginSpy).toHaveBeenCalledTimes(1);
    expect(loginSpy).toHaveBeenCalledWith('null');
    expect(sessionStorage.setItem).toHaveBeenCalledTimes(1);
    expect(sessionStorage.setItem).toHaveBeenCalledWith('userId', newUserId);
  });

  it('logs an existing user in and stores their userId in sessionStorage', async () => {
    const existingUserId = 'existingUserId';
    setItem('userId', existingUserId);
    loginSpy.mockResolvedValue({ userId: existingUserId });

    const { result, waitForNextUpdate } = renderHook(() => useLogin());
    await waitForNextUpdate();

    expect(result.current).toEqual(existingUserId);
    expect(loginSpy).toHaveBeenCalledTimes(1);
    expect(loginSpy).toHaveBeenCalledWith(existingUserId);
    expect(sessionStorage.setItem).toHaveBeenCalledTimes(1);
    expect(sessionStorage.setItem).toHaveBeenCalledWith(
      'userId',
      existingUserId
    );
  });
});
