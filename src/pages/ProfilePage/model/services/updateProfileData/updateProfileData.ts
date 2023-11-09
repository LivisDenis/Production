import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const {
      extra, rejectWithValue, getState,
    } = thunkApi;
    try {
      const formData = getState().profile?.form;
      const response = await extra.api.put<Profile>('/profile', formData);

      return response.data;
    } catch (e) {
      return rejectWithValue('Error');
    }
  },
);
