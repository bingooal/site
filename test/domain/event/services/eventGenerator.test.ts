import {
  Action,
  actionsToPoints,
} from '../../../../src/domain/fixture/services/actions';
import {
  EventNameAndPoints,
  generateEvents,
  matchActorsToActions,
} from '../../../../src/domain/event/services/eventGenerator';

describe('eventGenerator', () => {
  const imageUrl = 'imageUrl';
  const actor = { name: 'Kaka', imageUrl };
  const actor2 = { name: 'Zidane', imageUrl };
  const actor3 = { name: 'Figo', imageUrl };
  const action = Action.ScoresAGoal;
  const action2 = Action.MakesATackle;

  describe('matchActorsToActions', () => {
    type Table = {
      actors: Parameters<typeof matchActorsToActions>[0];
      actions: Parameters<typeof matchActorsToActions>[1];
      expected: EventNameAndPoints[];
    };

    it.each`
      testName                                                                  | actors                     | actions              | expected
      ${'returns no matches when given no actors nor actions'}                  | ${[]}                      | ${[]}                | ${[]}
      ${'returns no matches when given no actors'}                              | ${[]}                      | ${[action]}          | ${[]}
      ${'returns no matches when given no actions'}                             | ${[actor]}                 | ${[]}                | ${[]}
      ${'matches each actor to an action when given equal actors and actions'}  | ${[actor, actor2]}         | ${[action, action2]} | ${[{ eventName: `${actor.name} ${action}`, points: actionsToPoints[action] }, { eventName: `${actor2.name} ${action2}`, points: actionsToPoints[action2] }]}
      ${'matches each actor to an action when given more actors than actions'}  | ${[actor, actor2, actor3]} | ${[action, action2]} | ${[{ eventName: `${actor.name} ${action}`, points: actionsToPoints[action] }, { eventName: `${actor2.name} ${action2}`, points: actionsToPoints[action2] }, { eventName: `${actor3.name} ${action}`, points: actionsToPoints[action] }]}
      ${'matches each actor to an action when given fewer actors than actions'} | ${[actor]}                 | ${[action, action2]} | ${[{ eventName: `${actor.name} ${action}`, points: actionsToPoints[action] }]}
    `('$testName', ({ actors, actions, expected }: Table) => {
      expect(matchActorsToActions(actors, actions)).toEqual(expected);
    });
  });

  describe('generateEvents', () => {
    it('should return events', () => {
      expect(generateEvents([actor], [action], [])).toEqual<
        ReturnType<typeof generateEvents>
      >([
        {
          name: `${actor.name} ${action}`,
          points: expect.any(Number),
          imageUrl,
          hasOccured: false,
        },
      ]);
    });

    it('should return events marked as having occured or not', () => {
      expect(
        generateEvents([actor, actor2], [action], [`${actor.name} ${action}`])
      ).toEqual<ReturnType<typeof generateEvents>>([
        expect.objectContaining({
          name: `${actor.name} ${action}`,
          hasOccured: true,
        }),
        expect.objectContaining({
          name: `${actor2.name} ${action}`,
          hasOccured: false,
        }),
      ]);
    });
  });
});
