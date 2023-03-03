import {render, screen, within} from '@testing-library/react';
import UserList from "./user-list";

const renderComponent = () => {
  const users = [
    {name: 'jane', email: 'jane@jane.com'},
    {name: 'sam', email: 'sam@sam.com'},
  ]
  render(<UserList users={users}/>)
  return {users}
}


it('render one row per user', () => {
  renderComponent()
  // const { container } = render(<UserList users={users}/>)

  const rows = within(screen.getByTestId("users")).getAllByRole('row');

  // Alternative to adding a test id
  // eslint-disable-next-line
  // const rows = container.querySelectorAll('tbody tr')
  const janeEntry = screen.getByRole('row', {name: /jane jane@jane\.com/i})

  expect(janeEntry).toBeInTheDocument()
  expect(rows).toHaveLength(2)
})

it('render the email and name of each user', () => {
  const {users} = renderComponent()

  // used for obtaining an interactive UI for discovering which element queries to use
  // screen.logTestingPlaygroundURL()

  for (let user of users) {
    const name = screen.getByRole('cell', {name: user.name})
    const email = screen.getByRole('cell', {name: user.email})

    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
  }

})
