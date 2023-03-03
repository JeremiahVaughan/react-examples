import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const booksApi = createApi({
                               reducerPath: 'books',
                               baseQuery: fetchBaseQuery({
                                                             baseUrl: 'http://localhost:3001',
                                                         }),
                               endpoints(builder) {
                                   return {
                                       fetchBooks: builder.query({
                                                                     providesTags: (result, error, book) => {
                                                                         return [{type: "Book"}];
                                                                     },
                                                                     query: () => {
                                                                         return {
                                                                             url: '/books',
                                                                             method: 'GET'
                                                                         };
                                                                     },
                                                                 }),
                                       addBook: builder.mutation({
                                                                     invalidatesTags: (result, error, book) => {
                                                                         return [{type: "Book"}];
                                                                     },
                                                                     query: (book) => {
                                                                         return {
                                                                             url: '/books',
                                                                             method: 'POST',
                                                                             body: {
                                                                                 title: book.title
                                                                             }
                                                                         }
                                                                     }
                                                                 }),
                                       updateBook: builder.mutation({
                                                                        invalidatesTags: (result, error, book) => {
                                                                            return [{type: "Book"}];
                                                                        },
                                                                        query: (book) => {
                                                                            return {
                                                                                url: `/books/${book.id}`,
                                                                                method: 'PUT',
                                                                                body: {
                                                                                    title: book.title
                                                                                }
                                                                            }
                                                                        }
                                                                    }),
                                       deleteBook: builder.mutation({
                                                                        invalidatesTags: (result, error, book) => {
                                                                            return [{type: "Book"}];
                                                                        },
                                                                        query: (book) => {
                                                                            return {
                                                                                url: `/books/${book.id}`,
                                                                                method: 'DELETE',
                                                                            }
                                                                        }
                                                                    })
                                   }
                               }
                           });

export const {
    useFetchBooksQuery,
    useAddBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation
} = booksApi;
export {booksApi};
