import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidateProfileErrors } from 'entities/Profile';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileErrors[]>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const {
      extra, rejectWithValue, getState,
    } = thunkApi;

    const formData = getState().profile?.form;

    const error = validateProfileData(formData);

    if (error.length) {
      return rejectWithValue(error);
    }

    try {
      const response = await extra.api.put<Profile>('/profile', formData);

      return response.data;
    } catch (e) {
      return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
    }
  },
);
