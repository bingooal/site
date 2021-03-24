import userEvent from '@testing-library/user-event';
import * as nextRouter from 'next/router';
import React from 'react';
import * as fixtureApi from '../../src/domain/fixture/api/indexFrontend';
import { mockFixturePreviews } from '../../src/domain/fixture/data/FixturePreview';
import Fixtures from '../../src/pages/fixtures';
import { render, screen } from '../testUtils';

const mockNextRouter: Partial<nextRouter.NextRouter> = { push: jest.fn() };
const { id, homeTeamName } = mockFixturePreviews[0];

describe('Fixtures page', () => {
  beforeEach(() => {
    jest
      .spyOn(nextRouter, 'useRouter')
      .mockReturnValue(mockNextRouter as nextRouter.NextRouter);
    jest
      .spyOn(fixtureApi, 'getFixtures')
      .mockResolvedValue(mockFixturePreviews);

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

    expect(mockNextRouter.push).toBeCalledTimes(1);
    expect(mockNextRouter.push).toBeCalledWith(
      `fixtures/${id}`,
      `fixtures/${id}`
    );
  });
});
