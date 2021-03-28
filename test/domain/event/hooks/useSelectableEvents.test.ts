import { renderHook, act } from '@testing-library/react-hooks';
import useSelectableEvents from '../../../../src/domain/event/hooks/useSelectableEvents';
import * as eventApi from '../../../../src/domain/event/api/indexFrontend';

const userId = 'userId';
const fixtureId = 'fixture1';

describe('useSelectableEvents', () => {
  beforeEach(() => {
    localStorage.clear();

    jest.spyOn(eventApi, 'selectEvent').mockResolvedValue();
    jest.spyOn(eventApi, 'deselectEvent').mockResolvedValue();
  });

  it('lets the caller select and deselect events', () => {
    expect(localStorage.getItem(`selectedEvents-${fixtureId}`)).toEqual(null);

    const event = 'event';
    const { result } = renderHook(() => useSelectableEvents(userId, fixtureId));

    expect(result.current.numberOfSelectedEvents).toEqual(0);
    expect(result.current.isSelected(event)).toEqual(false);
    expect(localStorage.getItem(`selectedEvents-${fixtureId}`)).toEqual(null);
    expect(eventApi.selectEvent).toBeCalledTimes(0);

    act(() => {
      result.current.toggleEvent(event);
    });

    expect(result.current.numberOfSelectedEvents).toEqual(1);
    expect(result.current.isSelected(event)).toEqual(true);
    expect(localStorage.getItem(`selectedEvents-${fixtureId}`)).toEqual(
      JSON.stringify([event])
    );
    expect(eventApi.selectEvent).toBeCalledTimes(1);
    expect(eventApi.selectEvent).toBeCalledWith(userId, fixtureId, event);

    act(() => {
      result.current.toggleEvent(event);
    });

    expect(result.current.numberOfSelectedEvents).toEqual(0);
    expect(result.current.isSelected(event)).toEqual(false);
    expect(localStorage.getItem(`selectedEvents-${fixtureId}`)).toEqual(
      JSON.stringify([])
    );
    expect(eventApi.deselectEvent).toBeCalledTimes(1);
    expect(eventApi.deselectEvent).toBeCalledWith(userId, fixtureId, event);
  });

  it('lets the caller select events for different fixtures', () => {
    const event = 'event';
    const { result: fixture1Result } = renderHook(() =>
      useSelectableEvents(userId, fixtureId)
    );
    const { result: fixture2Result } = renderHook(() =>
      useSelectableEvents(userId, 'fixture2')
    );

    expect(fixture1Result.current.numberOfSelectedEvents).toEqual(0);
    expect(fixture2Result.current.numberOfSelectedEvents).toEqual(0);

    act(() => {
      fixture1Result.current.toggleEvent(event);
    });

    expect(fixture1Result.current.numberOfSelectedEvents).toEqual(1);
    expect(fixture2Result.current.numberOfSelectedEvents).toEqual(0);

    act(() => {
      fixture2Result.current.toggleEvent(event);
    });

    expect(fixture1Result.current.numberOfSelectedEvents).toEqual(1);
    expect(fixture2Result.current.numberOfSelectedEvents).toEqual(1);
  });
});
