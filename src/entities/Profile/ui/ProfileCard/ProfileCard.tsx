import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Currency, CurrencySelect } from 'entities/CurrencySelect';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    data?: Profile
    readonly?: boolean
    error?: string
    isLoading?: boolean
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
      <div className={cls.with_avatar}>
        <Avatar src={data?.avatar} borderRadius={7} />
        <div>
          <Text subtitle={t('Личные данные')} className={cls.subtitle} />
          <div className={cls.content}>
            <Input label={t('Имя')} value={data?.firstname} onChange={onChangeFirstname} readOnly={readonly} />
            <Input label={t('Фамилия')} value={data?.lastname} onChange={onChangeLastname} readOnly={readonly} />
            <Input label={t('Дата рождения')} value={data?.age} onChange={onChangeAge} readOnly={readonly} />
            <Input label={t('Город')} value={data?.city} onChange={onChangeCity} readOnly={readonly} />
          </div>
        </div>
      </div>
      <div className={cls.wrapper}>
        <Text subtitle={t('Настройки профиля')} className={cls.subtitle} />
        <div className={cls.content}>
          <Input label={t('Имя пользователя')} value={data?.username} onChange={onChangeUsername} readOnly={readonly} />
          <Input label={t('Ссылка на аватар')} value={data?.avatar} onChange={onChangeAvatar} readOnly={readonly} />
          <CurrencySelect label={t('Валюта')} value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
        </div>
      </div>
      <div className={cls.buttons}>
        {readonly
          ? <Button onClick={onEdit} theme={ButtonTheme.OUTLINE}>{t('Редактировать')}</Button>
          : (
            <>
              <Button onClick={onCancelEdit} theme={ButtonTheme.OUTLINE}>{t('Отмена')}</Button>
              <Button onClick={onSaveEdit}>{t('Сохранить')}</Button>
            </>
          )}
      </div>
    </div>
  );
});
