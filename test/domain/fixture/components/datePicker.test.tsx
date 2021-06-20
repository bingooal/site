import userEvent from '@testing-library/user-event';
import DatePicker from '../../../../src/domain/fixture/components/datePicker';
import { getDay, now, parse } from '../../../../src/services/date';
import { act, render, screen } from '../../../testUtils';

describe('DatePicker', () => {
  it('shows the current date', () => {
    const date = now();
    const setDate = jest.fn();
    render(<DatePicker date={date} setDate={setDate} />);

    expect(screen.getByText('Today')).toBeInTheDocument();
  });

  it('changes to the previous day when the user clicks the Previous Dat button', () => {
    const date = now();
    const setDate = jest.fn();
    render(<DatePicker date={date} setDate={setDate} />);

    const previousDayButton = screen.getByLabelText('Previous Day');
    userEvent.click(previousDayButton);

    expect(setDate).toHaveBeenCalledTimes(1);
    expect(setDate).toHaveBeenCalledWith(date.subtract(1, 'day'));
  });

  it('changes to the next day when the user clicks the Next Day button', () => {
    const date = now();
    const setDate = jest.fn();
    render(<DatePicker date={date} setDate={setDate} />);

    const nextDayButton = screen.getByLabelText('Next Day');
    userEvent.click(nextDayButton);

    expect(setDate).toHaveBeenCalledTimes(1);
    expect(setDate).toHaveBeenCalledWith(date.add(1, 'day'));
  });

  it('shows the Calendar date picker when the user clicks the current date', async () => {
    const date = parse('2021-05-04');
    const dayOfMonthToPick = 15;
    const setDate = jest.fn();
    render(<DatePicker date={date} setDate={setDate} />);

    await act(async () => {
      const currentDateButton = screen.getByText(getDay(date));
      userEvent.click(currentDateButton);
    });

    const dayOfMonthToPickButton = screen.getByText(dayOfMonthToPick);
    expect(dayOfMonthToPickButton).toBeInTheDocument();

    userEvent.click(dayOfMonthToPickButton);

    expect(setDate).toHaveBeenCalledTimes(1);
    expect(setDate).toHaveBeenCalledWith(parse(`2021-05-${dayOfMonthToPick}`));
  });
});
