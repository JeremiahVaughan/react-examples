import {createSlice} from "@reduxjs/toolkit";
import {reset} from "../actions";

export const booksSlice = createSlice({
  name: 'book',
  initialState: [],
  reducers: {
    addBook(state, action) {
      // Uses immer under the hood so we can modify state directly.
      state.push(action.payload);
    },
    removeBook(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    resetBooks(state, action) {
      // Immer won't know if we assign a new value as its only understands modifications to existing objects.
      // So instead we have to return the value.
      return [];
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    })
  }


})

export const { addBook, removeBook } = booksSlice.actions;
