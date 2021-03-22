type Event = {
  name: string;
  points: number;
};

export const mockEvents: Event[] = [
  {
    name: 'Bruno Fernandes gets an assist',
    points: 7,
  },
  {
    name: 'Jamie Vardy bangs a goal in',
    points: 8,
  },
  {
    name: 'Harry Maguire gets a yellow card',
    points: 5,
  },
  {
    name: 'Schmeichel makes 3 saves',
    points: 2,
  },
];

export default Event;
