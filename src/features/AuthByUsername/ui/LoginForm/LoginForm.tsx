import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        autofocus
        value={value}
        onChange={(value) => setValue(value)}
        placeholder={t('Введите имя')}
      />
      <Input
        placeholder={t('Введите пароль')}
      />
      <Button theme={ButtonTheme.BACKGROUND} className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};
