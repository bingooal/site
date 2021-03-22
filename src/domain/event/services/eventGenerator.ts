import Event from '../data/Event';

export const matchActorsToActions = (
  actors: string[],
  actions: string[]
): string[] => {
  if (!actors.length || !actions.length) {
    return [];
  }
  if (actors.length > actions.length) {
    return actors.map((actor) => `${actor} ${actions[0]}`);
  }
  if (actors.length < actions.length) {
    return actions.map((action) => `${actors[0]} ${action}`);
  }
  return actors.map((actor, i) => `${actor} ${actions[i]}`);
};

export const generateEvents = (
  actors: string[],
  actions: string[]
): Event[] => {
  const names = matchActorsToActions(actors, actions);
  return names.map((name) => ({
    name,
    points: 3,
  }));
};
