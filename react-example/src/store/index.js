import {configureStore} from "@reduxjs/toolkit";
import {addBook, booksSlice, removeBook} from "./slices/books-slice";
import {addMovie, moviesSlice, removeMovie} from "./slices/movies-slice";
import {addCar, carsReducer, changeSearchTerm, removeCar} from "./slices/cars-slice"
import {carCreationReducer, changeCost, changeName} from "./slices/car-creation-slice"
import {reset} from "./actions";
import {usersReducer} from "./slices/users-slice";
import {albumsApi} from "./apis/albums-api";
import {setupListeners} from "@reduxjs/toolkit/query";
import {booksApi} from "./apis/books-api";
import {photosApi} from "./apis/photos-api";

export const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
    movies: moviesSlice.reducer,
    cars: carsReducer,
    carCreationForm: carCreationReducer,
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(booksApi.middleware)
      .concat(photosApi.middleware);
  }),
})

setupListeners(store.dispatch);

// Debugging lines
// const startingState = store.getState();
// store.dispatch({
//   type: 'book/addBook',
//   payload: 'New Book!!!'
// });
// console.log(startingState)

export {
  reset,
  addBook,
  removeBook,
  addMovie,
  removeMovie,
  changeSearchTerm,
  addCar,
  removeCar,
  changeName,
  changeCost,
  carCreationReducer,
}

export * from './thunks/fetch-users';
export * from './thunks/add-user';
export * from './thunks/remove-user';
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation
} from './apis/albums-api';
export {
  useFetchBooksQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation
} from './apis/books-api';
export {
  useFetchPhotosQuery,
  useRemovePhotoMutation,
  useAddPhotoMutation
} from './apis/photos-api'
