import {render, screen} from '@testing-library/react'
import {createServer} from "../../test/server";
import {MemoryRouter} from "react-router";
import AuthButtons from "./AuthButtons";
import {SWRConfig} from "swr";

async function renderComponent() {
  render(
    <MemoryRouter>
      <SWRConfig value={{ provider: () => new Map() }}>
        <AuthButtons/>
      </SWRConfig>
    </MemoryRouter>
  )
  await screen.findAllByRole('link')
}

// using describe to scope the tests (before all, before each, after all) so the tests are dependent on the correct instance if createServer
describe('when user is not signed in', () => {
  createServer([
    {
      path: '/api/user',
      res: () => {
        return {user: null}
      }
    }
  ])
  it('sign in and sign up are visible', async () => {
    await renderComponent()
    const signInButton = screen.getByRole('link', {
      name: /sign in/i
    })
    const signUpButton = screen.getByRole('link', {
      name: /sign up/i
    })
    expect(signInButton).toBeInTheDocument()
    expect(signInButton).toHaveAttribute('href', '/signin')
    expect(signUpButton).toBeInTheDocument()
    expect(signUpButton).toHaveAttribute('href', '/signup')
  })

  it('sign out is not visible', async () => {
    await renderComponent()
    const signOutButton = screen.queryByRole('link', {
      name: /sign out/i
    })
    expect(signOutButton).not.toBeInTheDocument()
  })
})


describe('when user is signed in', () => {
  createServer([
    {
      path: '/api/user',
      res: () => {
        return {user: {id: 3, email: 'asdf@asdf.com'}}
      }
    }
  ])

  it('then sign in and sign up are not visible', async () => {
    await renderComponent()
    const signInButton = screen.queryByRole('link', {
      name: /sign in/i
    })
    const signUpButton = screen.queryByRole('link', {
      name: /sign up/i
    })
    expect(signInButton).not.toBeInTheDocument()
    expect(signUpButton).not.toBeInTheDocument()
  })

  it('sign out is visible', async () => {
    await renderComponent()
    const signOutButton = screen.getByRole('link', {
      name: /sign out/i
    })
    expect(signOutButton).toBeInTheDocument()
    expect(signOutButton).toHaveAttribute('href', '/signout')
  })
})
