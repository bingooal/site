import userEvent from '@testing-library/user-event';
import * as nextRouter from 'next/router';
import React from 'react';
import * as fixtureApi from '../../src/domain/fixture/api/indexFrontend';
import Fixtures from '../../src/pages/fixtures';
import { render, screen } from '../testUtils';

const mockNextRouter: Partial<nextRouter.NextRouter> = { push: jest.fn() };
const mockFixturePreview = {
  id: '593329',
  homeTeamName: 'Stoke City',
  awayTeamName: 'Derby',
  homeTeamLogo: 'https://media.api-sports.io/football/teams/33.png',
  awayTeamLogo: 'https://media.api-sports.io/football/teams/747.png',
};
const { id, homeTeamName } = mockFixturePreview;

describe('Fixtures page', () => {
  beforeEach(() => {
    jest
      .spyOn(nextRouter, 'useRouter')
      .mockReturnValue(mockNextRouter as nextRouter.NextRouter);
    jest
      .spyOn(fixtureApi, 'getFixtures')
      .mockResolvedValue([mockFixturePreview]);

    render(<Fixtures />);
  });

  it('shows the Fixtures heading', () => {
    expect(
      screen.getByRole('heading', { name: 'Fixtures' })
    ).toBeInTheDocument();
  });

  it('shows the Today heading', () => {
    expect(screen.getByRole('heading', { name: 'Today' })).toBeInTheDocument();
  });

  it('shows a fixture', () => {
    const fixtureComponent = screen.getByText(homeTeamName, { exact: false });
    expect(fixtureComponent).toBeInTheDocument();
  });

  it('redirects to the fixture page when clicking a fixture', () => {
    const fixtureComponent = screen.getByText(homeTeamName, { exact: false });

    userEvent.click(fixtureComponent);

    expect(mockNextRouter.push).toBeCalledTimes(1);
    expect(mockNextRouter.push).toBeCalledWith(
      `fixtures/${id}`,
      `fixtures/${id}`
    );
  });
});
