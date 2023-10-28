import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profileSchema';

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
