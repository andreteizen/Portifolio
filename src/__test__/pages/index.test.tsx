import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '@/app/page'

describe('Main page', () => {
  it('Should render properly', () => {
    render(<Home />)

    const heroSection = screen.getByTestId('heroSection')

    expect(heroSection).toBeInTheDocument()
  })
})
