import { Profile, ValidateProfileErrors } from 'entities/Profile';

export const validateProfileData = (profile?: Profile): ValidateProfileErrors[] => {
  if (!profile) {
    return [ValidateProfileErrors.NO_DATA];
  }
  const {
    firstname,
    lastname,
    avatar,
    city,
  } = profile;

  const errors: ValidateProfileErrors[] = [];

  if (!firstname || !lastname) {
    errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
  }

  if (!avatar) {
    errors.push(ValidateProfileErrors.INCORRECT_AVATAR_LINK);
  }

  if (!city) {
    errors.push(ValidateProfileErrors.INCORRECT_CITY);
  }

  return errors;
};
