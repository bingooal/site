import { FootballPlayer } from '../../fixture/data/Fixture';
import Event from '../data/Event';

export const matchActorsToActions = (
  actors: FootballPlayer[],
  actions: string[]
): string[] => {
  if (!actors.length || !actions.length) {
    return [];
  }
  if (actors.length > actions.length) {
    return actors.map(({ name }, i) => `${name} ${actions[i] || actions[0]}`);
  }
  if (actors.length < actions.length) {
    return actions.map((action) => `${actors[0].name} ${action}`);
  }
  return actors.map(({ name }, i) => `${name} ${actions[i]}`);
};

export const generateEvents = (
  actors: FootballPlayer[],
  actions: string[],
  occuredEventNames: string[],
): Event[] => {
  const eventNames = matchActorsToActions(actors, actions);
  return actors.map((actor, i) => ({
    name: eventNames[i],
    points: 3,
    imageUrl: actor.imageUrl,
    hasOccured: occuredEventNames.includes(eventNames[i]),
  }));
};
