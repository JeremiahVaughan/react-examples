import { render, screen } from '@testing-library/react';
import UserForm from "./user-form";
import userEvent from "@testing-library/user-event";


it('shows two inputs and a button', () => {
  render(<UserForm onUserAdd={() => {}} />)

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2)
  expect(button).toBeInTheDocument()
})

it('is executing the callback when the button is pressed', () => {
  const expectedName = 'Jack'
  const expectedEmail = 'jack@gmail.com'

  const mockFunction = jest.fn();
  render(<UserForm onUserAdd={mockFunction}></UserForm>)
  const nameInput = screen.getByLabelText(/name/i)
  const emailInput = screen.getByRole('textbox', {name: 'Email'})
  userEvent.type(nameInput, expectedName)
  userEvent.type(emailInput, expectedEmail)

  const button = screen.getByRole('button');
  userEvent.click(button)
  expect(mockFunction).toHaveBeenCalled()
  expect(mockFunction).toHaveBeenCalledTimes(1)
  expect(mockFunction).toHaveBeenCalledWith({ name: expectedName, email: expectedEmail})
})

it('empties the two inputs when the form is submitted', () => {
  render(<UserForm onUserAdd={() => {}} />)

  const nameInput = screen.getByLabelText(/name/i)
  const emailInput = screen.getByRole('textbox', {name: 'Email'})
  const button = screen.getByRole('button');

  userEvent.click(nameInput)
  userEvent.keyboard('dog')
  userEvent.click(emailInput)
  userEvent.keyboard('dog@dog.com')

  userEvent.click(button)

  expect(nameInput).toHaveValue('')
  expect(emailInput).toHaveValue('')
})
