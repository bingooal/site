import React from 'react';
import userEvent from '@testing-library/user-event';
import * as nextRouter from 'next/router';
import { render, screen } from '../testUtils';
import Fixtures from '../../pages/fixtures';
import * as fixtureApi from '../../domain/fixture/api/indexFrontEnd';

const mockFixtureData = {
  homeTeamName: 'Manchester United',
  awayTeamName: 'Chelsea',
  id: '234',
};

const mockPush = jest.fn();
const mockNextRouter: Partial<nextRouter.NextRouter> = { push: mockPush };
jest
  .spyOn(nextRouter, 'useRouter')
  .mockReturnValue(mockNextRouter as nextRouter.NextRouter);
jest.spyOn(fixtureApi, 'getFixtures').mockResolvedValue([mockFixtureData]);

describe('Fixtures page', () => {
  beforeEach(() => {
    render(<Fixtures />);
  });

  it('shows the title', () => {
    expect(screen.getByText('Fixtures')).toBeInTheDocument();
  });

  it('shows a fixture card with MU and Chelsea', async () => {
    expect(await screen.findByText('Manchester United')).toBeInTheDocument();
    expect(await screen.findByText('Chelsea')).toBeInTheDocument();
  });

  it('redirects to the fixture page when clicking a fixture', async () => {
    const fixtureComponent = await screen.findByText('Manchester United');

    userEvent.click(fixtureComponent);

    expect(mockPush).toBeCalledTimes(1);
    expect(mockPush).toBeCalledWith('fixtures/234', 'fixtures/234');
  });
});
