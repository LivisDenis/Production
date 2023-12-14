import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { ProfileCard, ValidateProfileErrors } from 'entities/Profile';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Currency } from 'entities/CurrencySelect';
import { useParams } from 'react-router-dom';
import { getAuthData } from 'entities/User';
import { Page } from 'widgets/Page/Page';
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { profileActions, profileReducer } from '../model/slice/profileSlice';
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../model/services/updateProfileData/updateProfileData';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../model/selectors/getProfileValidateErrors/getProfileValidateErrors';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const userData = useSelector(getAuthData);
  const canEdit = userData?.id === formData?.id;
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const error = useSelector(getProfileError);
  const validateErrors = useSelector(getProfileValidateErrors);
  const { id } = useParams<{id: string}>();

  const validateErrorsTranslate = {
    [ValidateProfileErrors.NO_DATA]: t('Данные не указаны'),
    [ValidateProfileErrors.INCORRECT_CITY]: t('Некорректный регион'),
    [ValidateProfileErrors.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
    [ValidateProfileErrors.INCORRECT_AVATAR_LINK]: t('Некорректная ссылка на аватар'),
    [ValidateProfileErrors.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  }, [dispatch, id]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ firstname: value || '' }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value?.match(/^\d+$/) || 0) }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((value?: Currency) => {
    dispatch(profileActions.updateProfile({ currency: value }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch]);

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
      <Page className={classNames('', {})}>
        <Text title={t('Профиль')} />
        {validateErrors?.length && validateErrors.map((err) => (
          <Text
            key={err}
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
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ProfilePage);
