import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';
import { ValidateProfileErrors } from '../../consts/editableProfileCardConsts';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileErrors[]>>(
  'features/updateProfileData',
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
      const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);

      return response.data;
    } catch (e) {
      return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
    }
  },
);
