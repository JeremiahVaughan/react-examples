import CommentBox from "../comment-box";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Root from "../../root";
import {rest} from 'msw';
import {setupServer} from 'msw/node'
import React from "react";

const baseUrl = process.env.REACT_APP_BASE_URL
const server = setupServer(
  rest.post(baseUrl + '/comments', (req, res, ctx) => {
    return res(
      ctx.json(
        {
          id: 2,
          message: 'hello world2'
        }
      )
    )
  })
)

// Enable request interception.
beforeAll(() => server.listen())

// Reset handlers so that each test could alter them
// without affecting other, unrelated tests.
afterEach(() => server.resetHandlers())

// Don't forget to clean up afterwards.
afterAll(() => server.close())

const setup = () => {
  render(<Root>
    <CommentBox></CommentBox>
  </Root>);
}

it('has a textarea that the users can type in', () => {
  setup();
  const commentBox = screen.getByLabelText('Enter a Comment');
  let userEnteredText = 'hello world';
  userEvent.type(commentBox, userEnteredText);
  expect(commentBox).toHaveValue(userEnteredText)
})


it('the text area clears after the submit button is clicked', () => {
  setup();
  const commentBox = screen.getByLabelText('Enter a Comment');
  const submitButton = screen.getByText('Submit Comment');

  let userEnteredText = 'hello world';
  userEvent.type(commentBox, userEnteredText);
  expect(commentBox).toHaveValue(userEnteredText)

  userEvent.click(submitButton)
  expect(commentBox).toHaveValue("")
})
