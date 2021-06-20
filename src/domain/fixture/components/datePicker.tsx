import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Date as DayjsDate, getDay, parse } from '../../../services/date';

enum SVGDrawPathForArrow {
  Left = 'M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z',
  Right = 'M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z',
}

type ArrowButtonProps = {
  ariaLabel: string;
  svgDrawPath: SVGDrawPathForArrow;
  onClick: () => void;
};

const ArrowButton: React.VFC<ArrowButtonProps> = ({
  ariaLabel,
  svgDrawPath,
  onClick,
}: ArrowButtonProps) => (
  <button
    type="button"
    aria-label={ariaLabel}
    className="inline-flex px-2 py-2 bg-transparent rounded-full hover:bg-black hover:text-white hover:border-transparent"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path fillRule="evenodd" d={svgDrawPath} clipRule="evenodd" />
    </svg>
  </button>
);

type CalendarDatePickerProps = {
  date: DayjsDate;
  setDate: (newDate: DayjsDate) => void;
};

const CalendarDatePicker = ({ date, setDate }: CalendarDatePickerProps) => (
  <ReactDatePicker
    selected={date.toDate()}
    onChange={(newDate: Date) => setDate(parse(newDate))}
    customInput={
      <button
        type="button"
        className="w-full py-2 text-sm font-semibold bg-transparent border rounded"
      >
        {getDay(date)}
      </button>
    }
    wrapperClassName="w-full"
    popperPlacement="bottom"
    showPopperArrow={false}
  />
);

type Props = {
  date: DayjsDate;
  setDate: (newDate: DayjsDate) => void;
};

const DatePicker: React.VFC<Props> = ({ date, setDate }: Props) => (
  <div className="flex flex-row items-center px-2 py-4 border-b">
    <div className="flex justify-center w-1/6">
      <ArrowButton
        ariaLabel="Previous Day"
        svgDrawPath={SVGDrawPathForArrow.Left}
        onClick={() => setDate(date.subtract(1, 'day'))}
      />
    </div>

    <div className="flex justify-center w-4/6 ">
      <CalendarDatePicker date={date} setDate={setDate} />
    </div>
    <div className="flex justify-center w-1/6">
      <ArrowButton
        ariaLabel="Next Day"
        svgDrawPath={SVGDrawPathForArrow.Right}
        onClick={() => setDate(date.add(1, 'day'))}
      />
    </div>
  </div>
);

export default DatePicker;
