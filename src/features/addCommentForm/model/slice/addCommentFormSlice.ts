import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
  text: '',
};

export const addCommentFromSlice = createSlice({
  name: 'addCommentFrom',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { actions: addCommentFromActions } = addCommentFromSlice;
export const { reducer: addCommentFromReducer } = addCommentFromSlice;
