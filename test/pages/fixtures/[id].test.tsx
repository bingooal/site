import userEvent from '@testing-library/user-event';
import * as nextRouter from 'next/router';
import * as fixtureApi from '../../../src/domain/fixture/api/indexFrontend';
import * as eventApi from '../../../src/domain/event/api/indexFrontend';
import * as useLogin from '../../../src/domain/user/hooks/useLogin';
import * as useUsersPlayingFixture from '../../../src/domain/fixture/hooks/useUsersPlayingFixture';
import Fixture from '../../../src/domain/fixture/data/Fixture';
import FixturePage from '../../../src/pages/fixtures/[id]';
import { render, screen } from '../../testUtils';

const mockFixture: Fixture = {
  id: '593320',
  homeTeamName: 'Barnsley',
  awayTeamName: 'Sheffield Wednesday',
  events: [
    {
      name: 'Bruno Fernandes gets an assist',
      points: 7,
    },
    {
      name: 'Jamie Vardy bangs a goal in',
      points: 8,
    },
  ],
};

const { id, homeTeamName, awayTeamName, events } = mockFixture;
const mockNextRouter: Partial<nextRouter.NextRouter> = {
  query: { id },
};
const userId = 'userId';
const numberOfUsersPlayingFixture = 123;

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
      .spyOn(useUsersPlayingFixture, 'default')
      .mockReturnValue({ numberOfUsersPlayingFixture });

    render(<FixturePage />);
  });

  it('displays the users ID', () => {
    expect(screen.getByText(`User ID: ${userId}`)).toBeInTheDocument();
  });

  it('fetches the fixture', () => {
    expect(fixtureApi.getFixture).toHaveBeenCalledWith(id);
  });

  it('shows the title', () => {
    const firstHeading = screen.getAllByRole('heading')[0];
    expect(firstHeading).toHaveTextContent(
      `${homeTeamName} vs ${awayTeamName}`
    );
  });

  it('shows how many users are playing this fixture', () => {
    expect(
      screen.getByText(
        `${numberOfUsersPlayingFixture} users playing this fixture`
      )
    ).toBeInTheDocument();
  });

  it('shows events names and their points', () => {
    expect(screen.getByText(events[0].name)).toBeInTheDocument();
    expect(screen.getByText(events[0].points)).toBeInTheDocument();
    expect(screen.getByText(events[1].name)).toBeInTheDocument();
    expect(screen.getByText(events[1].points)).toBeInTheDocument();
  });

  it('lets the user select and deselect events', () => {
    const event = screen.getByText(events[0].name).parentElement.parentElement;

    expect(screen.getByText(`Selected 0/${events.length}`)).toBeInTheDocument();
    expect(event).not.toHaveTextContent('Selected');

    userEvent.click(event);

    expect(screen.getByText(`Selected 1/${events.length}`)).toBeInTheDocument();
    expect(event).toHaveTextContent('Selected');

    userEvent.click(event);

    expect(screen.getByText(`Selected 0/${events.length}`)).toBeInTheDocument();
    expect(event).not.toHaveTextContent('Selected');
  });
});
