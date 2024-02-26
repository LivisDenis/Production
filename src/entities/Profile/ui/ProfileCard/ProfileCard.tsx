import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Currency, CurrencySelect } from 'entities/CurrencySelect';
import { HStack } from 'shared/ui/Stack';
import { Profile } from '../../model/types/profileSchema';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    data?: Profile
    readonly?: boolean
    error?: string
    isLoading?: boolean
    canEdit?: boolean
    onEdit?: () => void
    onSaveEdit?: () => void
    onCancelEdit?: () => void
    onChangeUsername?: (value?: string) => void
    onChangeFirstname?: (value?: string) => void
    onChangeLastname?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeCurrency?: (value?: Currency) => void
    onChangeAvatar?: (value?: string) => void
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const {
    data,
    readonly,
    isLoading,
    error,
    onSaveEdit,
    onCancelEdit,
    onChangeUsername,
    onEdit,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeCurrency,
    onChangeAvatar,
    canEdit,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfilePage, {}, [cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfilePage, {}, [cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          subtitle={t('Перезагрузите страницу')}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [])}>
      <HStack gap="16" align="start">
        <Avatar src={data?.avatar} borderRadius={7} />
        <div>
          <Text subtitle={t('Личные данные')} className={cls.subtitle} />
          <HStack gap="16" className={cls.content}>
            <Input
              data-testid="EditableProfileCard.Firstname"
              label={t('Имя')}
              value={data?.firstname}
              onChange={onChangeFirstname}
              readOnly={readonly}
            />
            <Input
              data-testid="EditableProfileCard.Lastname"
              label={t('Фамилия')}
              value={data?.lastname}
              onChange={onChangeLastname}
              readOnly={readonly}
            />
            <Input label={t('Дата рождения')} value={data?.age} onChange={onChangeAge} readOnly={readonly} />
            <Input label={t('Город')} value={data?.city} onChange={onChangeCity} readOnly={readonly} />
          </HStack>
        </div>
      </HStack>
      <div className={cls.wrapper}>
        <Text subtitle={t('Настройки профиля')} className={cls.subtitle} />
        <HStack gap="16" className={cls.content}>
          <Input label={t('Имя пользователя')} value={data?.username} onChange={onChangeUsername} readOnly={readonly} />
          <Input label={t('Ссылка на аватар')} value={data?.avatar} onChange={onChangeAvatar} readOnly={readonly} />
          <CurrencySelect label={t('Валюта')} value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
        </HStack>
      </div>
      {canEdit && (
      <HStack gap="24" justify="end" className={cls.buttons}>
        {readonly
          ? <Button data-testid="EditableProfileCard.Edit" onClick={onEdit} theme={ButtonTheme.OUTLINE}>{t('Редактировать')}</Button>
          : (
            <>
              <Button data-testid="EditableProfileCard.Cancel" onClick={onCancelEdit} theme={ButtonTheme.OUTLINE}>{t('Отмена')}</Button>
              <Button data-testid="EditableProfileCard.Save" onClick={onSaveEdit}>{t('Сохранить')}</Button>
            </>
          )}
      </HStack>
      )}
    </div>
  );
});
