type UserRow = {
  userId: string;
  points: number;
  selectedEvents: string[];
};

type Leaderboard = UserRow[];

export default Leaderboard;
