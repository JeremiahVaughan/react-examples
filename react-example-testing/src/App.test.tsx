import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

it('can receive a new user and show it on a list', () => {
  render(<App />)

  const nameInput = screen.getByLabelText(/name/i)
  const emailInput = screen.getByRole('textbox', {name: 'Email'})
  const button = screen.getByRole('button')

  userEvent.click(nameInput)
  userEvent.keyboard('jane')
  userEvent.click(emailInput)
  userEvent.keyboard('jane@jane.com')

  userEvent.click(button)

  const name = screen.getByRole('cell', {name: 'jane'});
  const email = screen.getByRole('cell', {
    name: /jane@jane\.com/i
  })
  expect(name).toBeInTheDocument()
  expect(email).toBeInTheDocument()
})
