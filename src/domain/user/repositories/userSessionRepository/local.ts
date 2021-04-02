import { UserAndSelectedEvents, UserSessionRepository } from '.';

const initialStore: { [key: string]: string[] } = {};

class LocalUserSessionRepository implements UserSessionRepository {
  selectedEvents: typeof initialStore;

  constructor() {
    this.reset();
  }

  reset() {
    this.selectedEvents = initialStore;
  }

  async getSelectedEvents(userId: string, fixtureId: string) {
    return this.selectedEvents[`${fixtureId}-${userId}`] || [];
  }

  async getUsersAndSelectedEvents(fixtureId: string) {
    const usersAndSelectedEvents: UserAndSelectedEvents[] = [];
    Object.entries(this.selectedEvents).forEach(
      ([primaryKey, selectedEvents]) => {
        const [thisFixtureId, userId] = primaryKey.split('-');
        if (thisFixtureId === fixtureId) {
          usersAndSelectedEvents.push({
            userId,
            selectedEvents,
          });
        }
      }
    );
    return usersAndSelectedEvents;
  }

  async selectEvent(userId: string, fixtureId: string, selectedEvent: string) {
    this.selectedEvents[`${fixtureId}-${userId}`] = [
      ...(this.selectedEvents[`${fixtureId}-${userId}`] || []),
      selectedEvent,
    ];
  }

  async deselectEvent(
    userId: string,
    fixtureId: string,
    deselectedEvent: string
  ) {
    if (!this.selectedEvents[`${fixtureId}-${userId}`]) {
      return;
    }
    this.selectedEvents[`${fixtureId}-${userId}`] = this.selectedEvents[
      `${fixtureId}-${userId}`
    ].filter((eventName) => eventName !== deselectedEvent);
  }
}

export const userSessionRepository = new LocalUserSessionRepository();
