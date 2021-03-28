import { UserSessionRepository } from './index';

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
    return this.selectedEvents[`${userId}-${fixtureId}`] || [];
  }

  async selectEvent(userId: string, fixtureId: string, selectedEvent: string) {
    this.selectedEvents[`${userId}-${fixtureId}`] = [
      ...(this.selectedEvents[`${userId}-${fixtureId}`] || []),
      selectedEvent,
    ];
  }

  async deselectEvent(
    userId: string,
    fixtureId: string,
    deselectedEvent: string
  ) {
    if (!this.selectedEvents[`${userId}-${fixtureId}`]) {
      return;
    }
    this.selectedEvents[`${userId}-${fixtureId}`] = this.selectedEvents[
      `${userId}-${fixtureId}`
    ].filter((eventName) => eventName !== deselectedEvent);
  }
}

export const userSessionRepository = new LocalUserSessionRepository();
