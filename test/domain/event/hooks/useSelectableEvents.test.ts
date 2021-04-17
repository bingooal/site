import { renderHook, act } from '@testing-library/react-hooks';
import useSelectableEvents from '../../../../src/domain/event/hooks/useSelectableEvents';
import * as eventApi from '../../../../src/domain/event/api/indexFrontend';

const userId = 'userId';
const fixtureId = 'fixture1';
const event = 'event';

describe('useSelectableEvents', () => {
  beforeEach(() => {
    localStorage.clear();

    jest.spyOn(eventApi, 'getSelectedEvents').mockResolvedValue([]);
    jest.spyOn(eventApi, 'selectEvent').mockResolvedValue();
    jest.spyOn(eventApi, 'deselectEvent').mockResolvedValue();
  });

  it('lets the caller select and deselect events', () => {
    expect(localStorage.getItem(`selectedEvents-${fixtureId}`)).toEqual(null);

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

  it('loads selected events from backend when first ran', async () => {
    jest.spyOn(eventApi, 'getSelectedEvents').mockResolvedValue([event]);

    const { result, waitForNextUpdate } = renderHook(() =>
      useSelectableEvents(userId, fixtureId)
    );
    await waitForNextUpdate();

    expect(eventApi.getSelectedEvents).toBeCalledTimes(1);
    expect(result.current.numberOfSelectedEvents).toEqual(1);
    expect(result.current.isSelected(event)).toEqual(true);
    expect(localStorage.getItem(`selectedEvents-${fixtureId}`)).toEqual(
      JSON.stringify([event])
    );
  });

  it('does not fetch selected events from backend when userId is not defined', () => {
    jest
      .spyOn(eventApi, 'getSelectedEvents')
      .mockRejectedValue(new Error('userId not defined'));

    const { result } = renderHook(() =>
      useSelectableEvents("", fixtureId)
    );

    expect(eventApi.getSelectedEvents).toBeCalledTimes(0);
    expect(result.current.numberOfSelectedEvents).toEqual(0);
  });

  it('does not fetch selected events from backend when fixtureId is not defined', () => {
    jest
      .spyOn(eventApi, 'getSelectedEvents')
      .mockRejectedValue(new Error('fixtureId not defined'));

    const { result } = renderHook(() => useSelectableEvents(userId, undefined));

    expect(eventApi.getSelectedEvents).toBeCalledTimes(0);
    expect(result.current.numberOfSelectedEvents).toEqual(0);
  });

  it('does not load selected events from backend when there are no selected events in backend', () => {
    jest.spyOn(eventApi, 'getSelectedEvents').mockResolvedValue([]);

    const { result } = renderHook(() => useSelectableEvents(userId, fixtureId));

    expect(eventApi.getSelectedEvents).toBeCalledTimes(1);
    expect(result.current.numberOfSelectedEvents).toEqual(0);
  });
});
