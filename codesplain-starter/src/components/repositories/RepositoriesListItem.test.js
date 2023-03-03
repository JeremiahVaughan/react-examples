import {render, screen} from '@testing-library/react';
import RepositoriesListItem from "./RepositoriesListItem";
import {MemoryRouter} from "react-router";

it('should display a link for the repository', async () => {
  const repository = {
    full_name: 'some junk',
    language: 'Typescript',
    description: 'Real Junky',
    owner: {
      login: 'some login'
    },
    name: 'junk',
    html_url: 'https://google.com'
  }

  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository}/>
    </MemoryRouter>
  )

  await screen.findByRole('img', {
    name: 'Typescript'
  })

  const link = await screen.findByRole('link', {
    name: new RegExp(repository.owner.login)
  })

  expect(link).toHaveAttribute('href', `/repositories/${repository.full_name}`)

})


