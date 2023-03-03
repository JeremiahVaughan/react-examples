import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {commentsApi} from "./apis/comments-api";

export const store = configureStore({
  reducer: {
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware => {
    return getDefaultMiddleware()
      .concat(commentsApi.middleware)
  })
});

setupListeners(store.dispatch);

export {useFetchCommentsQuery, useSaveCommentMutation} from './apis/comments-api'
