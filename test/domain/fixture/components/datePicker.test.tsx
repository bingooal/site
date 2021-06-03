import userEvent from '@testing-library/user-event';
import DatePicker from '../../../../src/domain/fixture/components/datePicker';
import { now } from '../../../../src/services/date';
import { render, screen } from '../../../testUtils';

describe('DatePicker', () => {
  it('shows the current date', () => {
    render(<DatePicker date={now()} setDate={jest.fn()} />);

    expect(screen.getByText('Today')).toBeInTheDocument();
  });

  it('lets the user set the date to the previous day', () => {
    const date = now();
    const setDate = jest.fn();
    render(<DatePicker date={date} setDate={setDate} />);

    const previousDayButton = screen.getByLabelText('Previous');
    userEvent.click(previousDayButton);

    expect(setDate).toHaveBeenCalledTimes(1);
    expect(setDate).toHaveBeenCalledWith(date.subtract(1, 'day'));
  });

  it('lets the user set the date to the next day', () => {
    const date = now();
    const setDate = jest.fn();
    render(<DatePicker date={date} setDate={setDate} />);

    const nextDayButton = screen.getByLabelText('Next');
    userEvent.click(nextDayButton);

    expect(setDate).toHaveBeenCalledTimes(1);
    expect(setDate).toHaveBeenCalledWith(date.add(1, 'day'));
  });
});
