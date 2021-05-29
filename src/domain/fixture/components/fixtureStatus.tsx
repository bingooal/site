import { getTime } from '../../../services/date';
import { FixtureStatus as Status } from '../data/Fixture';

type Props = {
  status: string;
  date: string;
  minute: number;
};

const FixtureStatus: React.VFC<Props> = ({ status, date, minute }: Props) => {
  if (status === Status.Postponed) {
    return <div className="text-red-500">Postponed</div>;
  }
  if (status === Status.HalfTime) {
    return <div className="text-red-500">Half time</div>;
  }
  if (status === Status.ExtraTimeBreak) {
    return <div className="text-red-500 ">Extra time break</div>;
  }
  if (status === Status.Penalties) {
    return <div className="text-red-500 ">Penalties</div>;
  }
  if (status === Status.FullTime || status === Status.FinishedAfterPenalties) {
    return <div className="text-gray-600 ">Full time</div>;
  }
  if (minute) {
    return <div className="text-red-500">{`${minute}'`}</div>;
  }
  return <div>{getTime(date)}</div>;
};

export default FixtureStatus;
