import { login } from '../../../../src/domain/user/api/indexBackend';
import { LoginInfo } from '../../../../src/domain/user/data/User';
import userRepository from '../../../../src/domain/user/repositories';

describe('login', () => {
  beforeEach(() => {
    userRepository.reset();
  });

  it('signs a new user up', async () => {
    const loginData = await login(undefined);

    expect(loginData).toMatchObject<LoginInfo>({
      userId: expect.any(String),
    });
  });

  it('logs an existing user in', async () => {
    const { userId } = await login(undefined);

    const newLoginData = await login(userId);

    expect(newLoginData).toEqual({ userId });
  });
});
