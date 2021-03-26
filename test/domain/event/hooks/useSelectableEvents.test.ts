import { renderHook, act } from '@testing-library/react-hooks';
import useSelectableEvents from '../../../../src/domain/event/hooks/useSelectableEvents';

describe('useSelectableEvents', () => {
  it('lets the caller select and deselect events', async () => {
    const event = 'event';
    const { result } = renderHook(() => useSelectableEvents('fixture1'));

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

  it('lets the caller select events for different fixtures', async () => {
    const event = 'event';
    const { result: fixture1Result } = renderHook(() =>
      useSelectableEvents('fixture1')
    );
    const { result: fixture2Result } = renderHook(() =>
      useSelectableEvents('fixture2')
    );

    expect(fixture1Result.current.numberOfSelectedEvents).toEqual(0);
    expect(fixture1Result.current.isSelected(event)).toEqual(false);
    expect(fixture2Result.current.numberOfSelectedEvents).toEqual(0);
    expect(fixture2Result.current.isSelected(event)).toEqual(false);

    act(() => {
      fixture1Result.current.toggleEvent(event);
    });

    expect(fixture1Result.current.numberOfSelectedEvents).toEqual(1);
    expect(fixture1Result.current.isSelected(event)).toEqual(true);
    expect(fixture2Result.current.numberOfSelectedEvents).toEqual(0);
    expect(fixture2Result.current.isSelected(event)).toEqual(false);

    act(() => {
      fixture2Result.current.toggleEvent(event);
    });

    expect(fixture1Result.current.numberOfSelectedEvents).toEqual(1);
    expect(fixture1Result.current.isSelected(event)).toEqual(true);
    expect(fixture2Result.current.numberOfSelectedEvents).toEqual(1);
    expect(fixture2Result.current.isSelected(event)).toEqual(true);
  });
});
