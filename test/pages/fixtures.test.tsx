import React from 'react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import * as nextRouter from 'next/router'
import { render, screen } from '../testUtils'
import Fixtures from '../../pages/fixtures'

const mockPush = jest.fn()
const mockNextRouter: Partial<nextRouter.NextRouter> = { push: mockPush }
jest
  .spyOn(nextRouter, 'useRouter')
  .mockReturnValue(mockNextRouter as nextRouter.NextRouter)

describe('Fixtures page', () => {
  beforeEach(() => {
    render(<Fixtures />)
  })

  it('shows the title', () => {
    expect(screen.getByText('Fixtures')).toBeInTheDocument()
  })

  it('shows a fixture card with MU and Chelsea', () => {
    expect(screen.getByText('Manchester United')).toBeInTheDocument()
    expect(screen.getByText('Chelsea')).toBeInTheDocument()
  })

  it('redirects to the fixture page when clicking a fixture', () => {
    const muFixture = screen.getByText('Manchester United')

    userEvent.click(muFixture)

    expect(mockPush).toBeCalledTimes(1)
    expect(mockPush).toBeCalledWith('fixtures/id', 'fixtures/id')
  })
})
