import {
  generateEvents,
  matchActorsToActions,
} from '../../../../src/domain/event/services/eventGenerator';

describe('eventGenerator', () => {
  const imageUrl = 'imageUrl';
  const actor = { name: 'Kaka', imageUrl };
  const actor2 = { name: 'Zidane', imageUrl };
  const actor3 = { name: 'Figo', imageUrl };
  const action = 'scores';
  const action2 = 'tackles';

  describe('matchActorsToActions', () => {
    type Table = {
      actors: Parameters<typeof matchActorsToActions>[0];
      actions: Parameters<typeof matchActorsToActions>[1];
      expected: string[];
    };

    it.each`
      testName                                                  | actors                     | actions              | expected
      ${'returns no matches when given no actors nor actions'}  | ${[]}                      | ${[]}                | ${[]}
      ${'returns no matches when given no actors'}              | ${[]}                      | ${[action]}          | ${[]}
      ${'returns no matches when given no actions'}             | ${[actor]}                 | ${[]}                | ${[]}
      ${'returns matches when given equal actors and actions'}  | ${[actor, actor2]}         | ${[action, action2]} | ${[`${actor.name} ${action}`, `${actor2.name} ${action2}`]}
      ${'returns matches when given more actors than actions'}  | ${[actor, actor2, actor3]} | ${[action, action2]} | ${[`${actor.name} ${action}`, `${actor2.name} ${action2}`, `${actor3.name} ${action}`]}
      ${'returns matches when given fewer actors than actions'} | ${[actor]}                 | ${[action, action2]} | ${[`${actor.name} ${action}`, `${actor.name} ${action2}`]}
    `('$testName', ({ actors, actions, expected }: Table) => {
      expect(matchActorsToActions(actors, actions)).toEqual(expected);
    });
  });

  describe('generateEvents', () => {
    it('should return events', () => {
      expect(generateEvents([actor], [action])).toEqual<
        ReturnType<typeof generateEvents>
      >([
        {
          name: `${actor.name} ${action}`,
          points: expect.any(Number),
          imageUrl,
        },
      ]);
    });
  });
});
