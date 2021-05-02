type FixturePreview = {
  id: string;
  date: string;
  status: string;
  minute: number;
  homeTeamName: string;
  homeTeamLogo: string;
  homeTeamGoals: number | null;
  awayTeamName: string;
  awayTeamLogo: string;
  awayTeamGoals: number | null;
};

export default FixturePreview;
