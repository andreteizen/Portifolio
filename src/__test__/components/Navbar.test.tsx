import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Navbar } from '@/components/Navbar'

describe('Main page', () => {
  it('Should render properly', () => {
    render(<Navbar.Item href={'#aboutme'} text="About me" />)

    const navbar = screen.getByText('About me')

    expect(navbar).toHaveTextContent('About me')
  })
})
