import User from '../data/User';

const initialStore: ReadonlyArray<User> = [];

class LocalUserRepository {
  private users: typeof initialStore;

  constructor() {
    this.reset();
  }

  reset() {
    this.users = initialStore;
  }

  insert(user: User) {
    this.users = this.users.concat([user]);
  }

  contains(userId: string) {
    return this.users.some((user) => user.id === userId);
  }
}

export const userRepository = new LocalUserRepository();
