import userEvent from '@testing-library/user-event';
import * as nextRouter from 'next/router';
import * as fixtureApi from '../../../../src/domain/fixture/api/indexFrontend';
import * as eventApi from '../../../../src/domain/event/api/indexFrontend';
import * as useLogin from '../../../../src/domain/user/hooks/useLogin';
import * as useLeaderboard from '../../../../src/domain/fixture/hooks/useLeaderboard';
import Fixture from '../../../../src/domain/fixture/data/Fixture';
import FixturePage from '../../../../src/pages/fixtures/[id]';
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

const mockFixture: Fixture = {
  id: '593320',
  homeTeamName: 'Barnsley',
  awayTeamName: 'Sheffield Wednesday',
  homeTeamLogo: 'https://media.api-sports.io/football/teams/747.png',
  awayTeamLogo: 'https://media.api-sports.io/football/teams/74.png',
  events: [eventThatHasOccured, eventThatHasNotOccured],
};

const { id, homeTeamName, awayTeamName, events } = mockFixture;
const mockNextRouter: Partial<nextRouter.NextRouter> = {
  query: { id },
};
const userId = 'userId';
const userRank = 1;
const numberOfUsersPlayingFixture = 123;

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

    jest.spyOn(fixtureApi, 'getFixture').mockResolvedValue(mockFixture);

    jest
      .spyOn(useLeaderboard, 'default')
      .mockReturnValue({ userRank, numberOfUsersPlayingFixture });

    render(<FixturePage />);
  });

  it('shows the user ID', () => {
    expect(screen.getByText(userId)).toBeInTheDocument();
  });

  it('fetches the fixture', () => {
    expect(fixtureApi.getFixture).toHaveBeenCalledWith(id);
  });

  it('shows the fixture header', () => {
    const fixtureHeader = screen.getByRole('banner');
    expect(within(fixtureHeader).getByText(homeTeamName)).toBeInTheDocument();
    expect(within(fixtureHeader).getByText(awayTeamName)).toBeInTheDocument();
  });

  it('shows events names, points and images', () => {
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

    const eventElement = getEventElement(events[0].name);

    expect(eventElement).toBeInTheDocument();
    expect(
      within(eventElement).getByText(events[0].points)
    ).toBeInTheDocument();
    expect(
      within(eventElement).getByAltText(events[0].name)
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
