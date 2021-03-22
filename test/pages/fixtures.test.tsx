import userEvent from '@testing-library/user-event';
import * as nextRouter from 'next/router';
import React from 'react';
import * as fixtureApi from '../../src/domain/fixture/api/indexFrontEnd';
import { mockFixturePreviews } from '../../src/domain/fixture/data/FixturePreview';
import Fixtures from '../../src/pages/fixtures';
import { render, screen } from '../testUtils';

const mockPush = jest.fn();
const mockNextRouter: Partial<nextRouter.NextRouter> = { push: mockPush };
jest
  .spyOn(nextRouter, 'useRouter')
  .mockReturnValue(mockNextRouter as nextRouter.NextRouter);
jest.spyOn(fixtureApi, 'getFixtures').mockResolvedValue(mockFixturePreviews);

const { id, homeTeamName } = mockFixturePreviews[0];

describe('Fixtures page', () => {
  beforeEach(() => {
    render(<Fixtures />);
  });

  it('shows the title', () => {
    expect(screen.getByRole('heading')).toHaveTextContent('Fixtures');
  });

  it('shows a fixture', () => {
    expect(
      screen.getByText(homeTeamName, { exact: false })
    ).toBeInTheDocument();
  });

  it('redirects to the fixture page when clicking a fixture', () => {
    const fixtureComponent = screen.getByText(homeTeamName, {
      exact: false,
    });

    userEvent.click(fixtureComponent);

    expect(mockPush).toBeCalledTimes(1);
    expect(mockPush).toBeCalledWith(`fixtures/${id}`, `fixtures/${id}`);
  });
});
