import { getTime } from '../../../services/date';

export enum Status {
  PST = 'PST',
  FT = 'FT',
  HT = 'HT',
}

type Props = {
  status: string;
  date: string;
  minute: number;
};

const FixtureStatus: React.VFC<Props> = ({ status, date, minute }: Props) => {
  if (status === Status.PST) {
    return <div className="text-red-500">Postponed</div>;
  }
  if (status === Status.FT) {
    return <div className="text-gray-600 ">Full time</div>;
  }
  if (status === Status.HT) {
    return <div className="text-red-500">Half time</div>;
  }
  if (minute) {
    return <div className="text-red-500">{`${minute}'`}</div>;
  }
  return <div>{getTime(date)}</div>;
};

export default FixtureStatus;
