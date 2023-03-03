import RepositoriesSummary from "./RepositoriesSummary";
import { render, screen } from '@testing-library/react';

const renderComponent = () => {
  const repository = {
    language: 'Javascript',
    stargazers_count: 5,
    open_issues: 6,
    forks: 7
  }
  render(<RepositoriesSummary repository={repository}/>)
  return {repository}
}

it('displays information about the repository', () => {
  const {repository} = renderComponent()

  for (let key in repository) {
    const value = repository[key]
    const element = screen.getByText(new RegExp(value))

    expect(element).toBeInTheDocument()
  }
})


// it('shows a file icon with the correct icon', async () => {
//   renderComponent()
//
//
//   const icon = await screen.findByRole('img', {name: 'Javascript'})
//
//   expect(icon).toHaveClass('js-icon')
// })

// it('shows a link to the code editor page', async () => {
//   renderComponent()
//
//   await screen.findByRole('link')
// })

