import userEvent from '@testing-library/user-event';
import * as nextRouter from 'next/router';
import React from 'react';
import * as fixtureApi from '../../src/domain/fixture/api/indexFrontend';
import Fixtures from '../../src/pages/fixtures';
import { fixturePreview } from '../mockData';
import { render, screen, within } from '../testUtils';

const mockNextRouter: Partial<nextRouter.NextRouter> = { push: jest.fn() };

describe('Fixtures page', () => {
  beforeEach(() => {
    jest
      .spyOn(nextRouter, 'useRouter')
      .mockReturnValue(mockNextRouter as nextRouter.NextRouter);
    jest.spyOn(fixtureApi, 'getFixtures').mockResolvedValue([fixturePreview]);

    render(<Fixtures />);
  });

  it('shows the Bingooal header', () => {
    const header = screen.getByRole('banner');
    expect(within(header).getByText('Bingooal')).toBeInTheDocument();
  });

  it('shows the Today heading', () => {
    expect(screen.getByRole('heading', { name: 'Today' })).toBeInTheDocument();
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
});
