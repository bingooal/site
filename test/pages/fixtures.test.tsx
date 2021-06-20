import userEvent from '@testing-library/user-event';
import * as nextRouter from 'next/router';
import * as nextImage from 'next/image';
import React from 'react';
import * as fixtureApi from '../../src/domain/fixture/api/indexFrontend';
import FixturePreview from '../../src/domain/fixture/data/FixturePreview';
import Fixtures from '../../src/pages/fixtures';
import { now, format } from '../../src/services/date';
import { fixturePreview } from '../mockData';
import { render, screen, within } from '../testUtils';

const mockNextRouter: Partial<nextRouter.NextRouter> = {
  push: jest.fn(),
  query: {},
  pathname: '/fixtures',
};

const todayDateString = format(now());
const yesterdayDateString = format(now().subtract(1, 'day'));

export const fixturePreviewsToday: FixturePreview[] = [
  { ...fixturePreview, date: todayDateString },
];

export const fixturePreviewsYesterday: FixturePreview[] = [
  {
    ...fixturePreview,
    date: yesterdayDateString,
    homeTeamName: `${fixturePreview.homeTeamName} Yesterday`,
  },
];

describe('Fixtures page', () => {
  beforeEach(() => {
    jest
      .spyOn(nextImage, 'default')
      .mockImplementation(({ src }: nextImage.ImageProps) => (
        <img src={src} alt="" />
      ));

    jest
      .spyOn(nextRouter, 'useRouter')
      .mockReturnValue(mockNextRouter as nextRouter.NextRouter);

    jest
      .spyOn(fixtureApi, 'getFixtures')
      .mockImplementation(async (date: string) =>
        date === todayDateString
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
    const previousDayButton = screen.getByLabelText('Previous Day');
    expect(previousDayButton).toBeInTheDocument();

    userEvent.click(previousDayButton);

    expect(mockNextRouter.push).toBeCalledTimes(1);
    expect(mockNextRouter.push).toBeCalledWith(
      `${mockNextRouter.pathname}?date=${yesterdayDateString}`
    );
  });
});
