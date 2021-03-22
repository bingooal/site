type Event = {
  imageUrl: string;
  name: string;
  points: number;
};

export const mockEvents: Event[] = [
  {
    imageUrl: 'asdf',
    name: 'Bruno Fernandes gets an assist',
    points: 7,
  },
  {
    imageUrl: 'asdf',
    name: 'Jamie Vardy bangs a goal in',
    points: 8,
  },
  {
    imageUrl: 'asdf',
    name: 'Harry Maguire gets a yellow card',
    points: 5,
  },
  {
    imageUrl: 'asdf',
    name: 'Schmeichel makes 3 saves',
    points: 2,
  },
];

export default Event;
