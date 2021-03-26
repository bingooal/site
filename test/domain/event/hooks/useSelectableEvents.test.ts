import { renderHook, act } from '@testing-library/react-hooks';
import useSelectableEvents from '../../../../src/domain/event/hooks/useSelectableEvents';

describe('useSelectableEvents', () => {
  it('lets the caller select and deselect events', async () => {
    const event = 'event';
    const { result } = renderHook(() => useSelectableEvents());

    expect(result.current.numberOfSelectedEvents).toEqual(0);
    expect(result.current.isSelected(event)).toEqual(false);

    act(() => {
      result.current.toggleEvent(event);
    });

    expect(result.current.numberOfSelectedEvents).toEqual(1);
    expect(result.current.isSelected(event)).toEqual(true);

    act(() => {
      result.current.toggleEvent(event);
    });

    expect(result.current.numberOfSelectedEvents).toEqual(0);
    expect(result.current.isSelected(event)).toEqual(false);
  });
});
