import userEvent from '@testing-library/user-event';
import * as nextRouter from 'next/router';
import * as eventApi from '../../../../src/domain/event/api/indexFrontend';
import * as fixtureApi from '../../../../src/domain/fixture/api/indexFrontend';
import Fixture from '../../../../src/domain/fixture/data/Fixture';
import * as useLeaderboard from '../../../../src/domain/fixture/hooks/useLeaderboard';
import * as useLogin from '../../../../src/domain/user/hooks/useLogin';
import FixturePage from '../../../../src/pages/fixtures/[id]';
import { fixturePreview } from '../../../mockData';
import { render, screen, within } from '../../../testUtils';

const eventThatHasOccured = {
  name: 'Bruno Fernandes gets an assist',
  imageUrl: 'https://media.api-sports.io/football/players/20016.png',
  points: 7,
  hasOccured: true,
};

const eventThatHasNotOccured = {
  name: 'Jamie Vardy bangs a goal in',
  imageUrl: 'https://media.api-sports.io/football/players/40495.png',
  points: 8,
  hasOccured: false,
};

const fixture: Fixture = {
  ...fixturePreview,
  events: [eventThatHasOccured, eventThatHasNotOccured],
};

const mockNextRouter: Partial<nextRouter.NextRouter> = {
  query: { id: fixture.id },
};
const userId = 'userId';
const userRank = 1;
const numberOfUsersPlayingFixture = 123;
const otherUserSelectingEvent = 'other-userId';
const anotherUserSelectingEvent = 'another-userId';
const initialsOfOtherUserSelectingEvent = 'OU';
const initialsOfAnotherUserSelectingEvent = 'AU';

const getEventElement = (eventName) =>
  screen.getByRole('cell', { name: eventName }).parentElement;

describe('Fixture page', () => {
  beforeEach(() => {
    jest.spyOn(useLogin, 'default').mockReturnValue(userId);

    jest.spyOn(eventApi, 'getSelectedEvents').mockResolvedValue([]);
    jest.spyOn(eventApi, 'selectEvent').mockResolvedValue();

    jest
      .spyOn(nextRouter, 'useRouter')
      .mockReturnValue(mockNextRouter as nextRouter.NextRouter);

    jest.spyOn(fixtureApi, 'getFixture').mockResolvedValue(fixture);

    jest.spyOn(useLeaderboard, 'default').mockReturnValue({
      userRank,
      numberOfUsersPlayingFixture,
      getOtherUsersSelectingEvent: () => [
        otherUserSelectingEvent,
        anotherUserSelectingEvent,
      ],
    });

    render(<FixturePage />);
  });

  it('shows the user ID', () => {
    expect(screen.getByText(userId)).toBeInTheDocument();
  });

  it('fetches the fixture', () => {
    expect(fixtureApi.getFixture).toHaveBeenCalledWith(fixture.id);
  });

  it('shows the fixture header', () => {
    const fixtureHeader = screen.getByRole('banner');
    expect(
      within(fixtureHeader).getByText(fixture.homeTeamName)
    ).toBeInTheDocument();
    expect(
      within(fixtureHeader).getByText(fixture.awayTeamName)
    ).toBeInTheDocument();
  });

  it('shows events names, points and images, and other users selecting them', () => {
    const eventsTable = screen.getAllByRole('table')[1];
    expect(eventsTable).toBeInTheDocument();

    expect(
      within(eventsTable).getByRole('columnheader', {
        name: 'Events (0 selected)',
      })
    ).toBeInTheDocument();
    expect(
      within(eventsTable).getByRole('columnheader', {
        name: `Points`,
      })
    ).toBeInTheDocument();

    const event = fixture.events[0];
    const eventElement = getEventElement(event.name);

    expect(eventElement).toBeInTheDocument();
    expect(within(eventElement).getByText(event.points)).toBeInTheDocument();
    expect(within(eventElement).getByAltText(event.name)).toBeInTheDocument();
    expect(
      within(eventElement).getByText(
        `${initialsOfOtherUserSelectingEvent} ${initialsOfAnotherUserSelectingEvent}`
      )
    ).toBeInTheDocument();
  });

  it('lets the user select and deselect events that have not occured', () => {
    const occuredEvent = getEventElement(eventThatHasOccured.name);
    const notOccuredEvent = getEventElement(eventThatHasNotOccured.name);

    expect(screen.getByText(`Events (0 selected)`)).toBeInTheDocument();
    expect(occuredEvent).not.toHaveAttribute(
      'aria-label',
      expect.stringContaining('Selected')
    );
    expect(notOccuredEvent).not.toHaveAttribute(
      'aria-label',
      expect.stringContaining('Selected')
    );

    userEvent.click(occuredEvent);
    userEvent.click(notOccuredEvent);

    expect(screen.getByText(`Events (1 selected)`)).toBeInTheDocument();
    expect(occuredEvent).not.toHaveAttribute(
      'aria-label',
      expect.stringContaining('Selected')
    );
    expect(notOccuredEvent).toHaveAttribute(
      'aria-label',
      expect.stringContaining('Selected')
    );

    userEvent.click(notOccuredEvent);

    expect(screen.getByText(`Events (0 selected)`)).toBeInTheDocument();
    expect(notOccuredEvent).not.toHaveAttribute(
      'aria-label',
      expect.stringContaining('Selected')
    );
  });

  it('highlights only events that have occured', () => {
    expect(getEventElement(eventThatHasOccured.name)).toHaveAttribute(
      'aria-label',
      expect.stringContaining('Occured')
    );
    expect(getEventElement(eventThatHasNotOccured.name)).not.toHaveAttribute(
      'aria-label',
      expect.stringContaining('Occured')
    );
  });

  it('shows the user performance for this fixture', () => {
    const userPerformanceTable = screen.getAllByRole('table')[0];
    expect(userPerformanceTable).toBeInTheDocument();

    expect(
      within(userPerformanceTable).getByRole('columnheader', {
        name: 'Total Points',
      })
    ).toBeInTheDocument();
    expect(
      within(userPerformanceTable).getByRole('columnheader', {
        name: `Rank (of ${numberOfUsersPlayingFixture} players)`,
      })
    ).toBeInTheDocument();

    const totalPoints = within(userPerformanceTable).getByText('0');
    expect(totalPoints).toBeInTheDocument();

    const rank = within(userPerformanceTable).getByText('1');
    expect(rank).toBeInTheDocument();
  });
});
