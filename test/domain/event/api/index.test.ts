import {
  selectEvent,
  deselectEvent,
} from '../../../../src/domain/event/api/indexBackend';
import userSessionRepository from '../../../../src/domain/user/repositories/userSessionRepository';

describe('selectEvents', () => {
  const userId1 = 'userId1';
  const userId2 = 'userId2';
  const fixtureId1 = 'fixtureId1';
  const fixtureId2 = 'fixtureId2';
  const eventName1 = 'eventName1';
  const eventName2 = 'eventName2';

  beforeEach(() => {
    userSessionRepository.reset();
  });

  it('lets the caller get, select and deselect events for users and fixtures', async () => {
    expect(
      await userSessionRepository.getSelectedEvents(userId1, fixtureId1)
    ).toEqual([]);

    await selectEvent(userId1, fixtureId1, eventName1);
    await selectEvent(userId2, fixtureId1, eventName1);
    await selectEvent(userId1, fixtureId2, eventName1);
    await selectEvent(userId1, fixtureId1, eventName2);

    expect(
      await userSessionRepository.getSelectedEvents(userId1, fixtureId1)
    ).toEqual([eventName1, eventName2]);
    expect(
      await userSessionRepository.getSelectedEvents(userId1, fixtureId2)
    ).toEqual([eventName1]);
    expect(
      await userSessionRepository.getSelectedEvents(userId2, fixtureId1)
    ).toEqual([eventName1]);

    await deselectEvent(userId1, fixtureId1, eventName2);

    expect(
      await userSessionRepository.getSelectedEvents(userId1, fixtureId1)
    ).toEqual([eventName1]);
    expect(
      await userSessionRepository.getSelectedEvents(userId1, fixtureId2)
    ).toEqual([eventName1]);
    expect(
      await userSessionRepository.getSelectedEvents(userId2, fixtureId1)
    ).toEqual([eventName1]);
  });

  it('does not error when the caller deselects a non-existent event', async () => {
    await expect(deselectEvent(userId1, fixtureId1, eventName1)).not.toReject();
  });
});
