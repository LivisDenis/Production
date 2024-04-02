import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Currency } from '@/entities/CurrencySelect';
import { ProfileCard } from '@/entities/Profile';
import { getAuthData } from '@/entities/User';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextTheme } from '@/shared/ui/Text';

import { ValidateProfileErrors } from '../model/consts/editableProfileCardConsts';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../model/services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from '../model/slice/profileSlice';

interface EditableProfileCardProps {
  id: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard = (props: EditableProfileCardProps) => {
  const { id } = props;
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const userData = useSelector(getAuthData);
  const canEdit = userData?.id === formData?.id;
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);
  const error = useSelector(getProfileError);

  const validateErrorsTranslate = {
    [ValidateProfileErrors.NO_DATA]: t('Данные не указаны'),
    [ValidateProfileErrors.INCORRECT_CITY]: t('Некорректный регион'),
    [ValidateProfileErrors.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
    [ValidateProfileErrors.INCORRECT_AVATAR_LINK]: t('Некорректная ссылка на аватар'),
    [ValidateProfileErrors.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
  };

  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
      if (id) {
        dispatch(fetchProfileData(id));
      }
    }
  }, [dispatch, id]);

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }));
    },
    [dispatch],
  );

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ firstname: value || '' }));
    },
    [dispatch],
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || '' }));
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value?.match(/^\d+$/) || 0) }));
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }));
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (value?: Currency) => {
      dispatch(profileActions.updateProfile({ currency: value }));
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }));
    },
    [dispatch],
  );

  const onEdit = () => {
    dispatch(profileActions.onEdit(false));
  };

  const onCancelEdit = () => {
    dispatch(profileActions.onCancelEdit());
  };

  const onSaveEdit = () => {
    dispatch(updateProfileData());
  };

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Text title={t('Профиль')} />
      {validateErrors?.length &&
        validateErrors.map((err) => (
          <Text
            key={err}
            data-testid='EditableProfileCard.Error'
            theme={TextTheme.ERROR}
            text={validateErrorsTranslate[err]}
          />
        ))}
      <ProfileCard
        data={formData}
        readonly={readonly}
        isLoading={isLoading}
        error={error}
        onSaveEdit={onSaveEdit}
        onChangeUsername={onChangeUsername}
        onEdit={onEdit}
        onCancelEdit={onCancelEdit}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeCurrency={onChangeCurrency}
        onChangeAvatar={onChangeAvatar}
        canEdit={canEdit}
      />
    </DynamicModuleLoader>
  );
};
