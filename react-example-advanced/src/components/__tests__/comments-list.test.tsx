import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Root from "../../root";
import CommentBox from "../comment-box";
import CommentList from "../comment-list";
import React from "react";
import {setupServer} from "msw/node";
import {rest} from "msw";


const baseUrl = process.env.REACT_APP_BASE_URL


const setup = () => {
  render(<Root>
    <CommentBox></CommentBox>
    <CommentList></CommentList>
  </Root>);
}


it('should produce a comment in the comments list when complete', async () => {
  let server = setupServer(
    rest.get(baseUrl + '/comments', (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: 1,
            message: 'hello world1'
          },
        ])
      )
    }),
  )
  server.listen()

  setup()

  const alreadyExistingComment = 'hello world1'
  const elementWithAlreadyExistingComment = await screen.findByText(alreadyExistingComment)
  expect(elementWithAlreadyExistingComment).toBeInTheDocument()

  let userEnteredText = 'hello world2';
  const elementThatShouldNotExistYet = screen.queryByText(userEnteredText)
  expect(elementThatShouldNotExistYet).not.toBeInTheDocument()



  server.resetHandlers()
  server.close()

  const server2 = setupServer(
    rest.post(baseUrl + '/comments', (req, res, ctx) => {
      return res(
        ctx.json(
          {
            id: 2,
            message: 'hello world2'
          }
        )
      )
    }),
    rest.get(baseUrl + '/comments', (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: 1,
            message: 'hello world1'
          },
          {
            id: 2,
            message: 'hello world2'
          }
        ])
      )
    }),
  )
  server2.listen()

  const commentBox = screen.getByLabelText('Enter a Comment');
  const submitButton = screen.getByText('Submit Comment');

  userEvent.type(commentBox, userEnteredText);
  userEvent.click(submitButton)

  const result = await screen.findByText(userEnteredText)

  expect(result).toBeInTheDocument()

  server2.resetHandlers()
  server2.close()
})
