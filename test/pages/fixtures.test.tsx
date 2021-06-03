import userEvent from '@testing-library/user-event';
import * as nextRouter from 'next/router';
import React from 'react';
import * as fixtureApi from '../../src/domain/fixture/api/indexFrontend';
import FixturePreview from '../../src/domain/fixture/data/FixturePreview';
import Fixtures from '../../src/pages/fixtures';
import { now } from '../../src/services/date';
import { fixturePreview } from '../mockData';
import { render, screen, within } from '../testUtils';

const mockNextRouter: Partial<nextRouter.NextRouter> = { push: jest.fn() };

export const fixturePreviewsToday: FixturePreview[] = [
  { ...fixturePreview, date: now().format() },
];

export const fixturePreviewsYesterday: FixturePreview[] = [
  {
    ...fixturePreview,
    date: now().subtract(1, 'day').format(),
    homeTeamName: `${fixturePreview.homeTeamName} Yesterday`,
  },
];

describe('Fixtures page', () => {
  beforeEach(() => {
    jest
      .spyOn(nextRouter, 'useRouter')
      .mockReturnValue(mockNextRouter as nextRouter.NextRouter);

    jest
      .spyOn(fixtureApi, 'getFixtures')
      .mockImplementation(async (date: string) =>
        date === now().format()
          ? fixturePreviewsToday
          : fixturePreviewsYesterday
      );

    render(<Fixtures />);
  });

  it('shows the Bingooal header', () => {
    const header = screen.getByRole('banner');
    expect(within(header).getByText('Bingooal')).toBeInTheDocument();
  });

  it('shows the Today heading by default', () => {
    expect(screen.getByText('Today')).toBeInTheDocument();
  });

  it('shows a fixture', () => {
    expect(screen.getByText(fixturePreview.homeTeamName)).toBeInTheDocument();
  });

  it('redirects to the fixture page when clicking a fixture', () => {
    const fixtureComponent = screen.getByText(fixturePreview.homeTeamName);

    userEvent.click(fixtureComponent);

    expect(mockNextRouter.push).toBeCalledTimes(1);
    expect(mockNextRouter.push).toBeCalledWith(
      `fixtures/${fixturePreview.id}`,
      `fixtures/${fixturePreview.id}`
    );
  });

  it("lets the user see yesterday's fixtures", async () => {
    const previousDayButton = screen.getByLabelText('Previous');
    expect(previousDayButton).toBeInTheDocument();

    userEvent.click(previousDayButton);

    expect(
      await screen.findByText(fixturePreviewsYesterday[0].homeTeamName)
    ).toBeInTheDocument();
  });
});
