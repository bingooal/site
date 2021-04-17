import { actionsToPoints } from '../../fixture/services/actions';
import { FootballPlayer } from '../../fixture/data/Fixture';
import Event from '../data/Event';

export type EventNameAndPoints = {
  eventName: string;
  points: number;
};

export const matchActorsToActions = (
  actors: FootballPlayer[],
  actions: string[]
): EventNameAndPoints[] => {
  if (!actors.length || !actions.length) {
    return [];
  }
  if (actors.length > actions.length) {
    return actors.map(({ name }, i) => {
      const action = actions[i] || actions[0];
      return {
        eventName: `${name} ${action}`,
        points: actionsToPoints[action],
      };
    });
  }
  return actors.map(({ name }, i) => {
    const action = actions[i];
    return {
      eventName: `${name} ${action}`,
      points: actionsToPoints[action],
    };
  });
};

export const generateEvents = (
  actors: FootballPlayer[],
  actions: string[],
  occuredEventNames: string[]
): Event[] => {
  const eventNamesAndPoints = matchActorsToActions(actors, actions);
  return eventNamesAndPoints.map(({ eventName, points }, i) => ({
    name: eventName,
    points,
    imageUrl: actors[i].imageUrl,
    hasOccured: occuredEventNames.includes(eventName),
  }));
};
