import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const commentsApi = createApi({
  reducerPath: 'comments',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL
  }),
  tagTypes: ['Comments'],
  endpoints(builder) {
    return {
      fetchComments: builder.query({
        providesTags: () => {
          return [{type: 'Comments'}]
        },
        query: () => {
          return {
            url: '/comments',
            method: 'GET',
          };
        },
      }),
      saveComment: builder.mutation({
        invalidatesTags: () => {
          return [{type: 'Comments'}];
        },
        query(comment) {
          return {
            url: '/comments',
            method: 'POST',
            body: {
              message: comment.message
            }
          }
        }
      })
    };
  },
})


export const {useFetchCommentsQuery, useSaveCommentMutation} = commentsApi
export { commentsApi };
