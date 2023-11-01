import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profileSchema';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkApi) => {
    const { dispatch, extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.get<Profile>('/profile');

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('Error');
    }
  },
);
