import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/service/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';
import { loginActions } from '../../model/slice/loginSlice';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState);

  const onChangeUsername = (value: string) => {
    dispatch(loginActions.setUsername(value));
  };
  const onChangePassword = (value: string) => {
    dispatch(loginActions.setPassword(value));
  };

  const onLoginSubmit = () => {
    dispatch(loginByUsername({ username, password }));
  };

  return (
    <div className={classNames('', {}, [className])}>
      <Text title={t('Авторизация')} />
      <div className={cls.LoginForm}>
        <Input
          autofocus
          value={username}
          onChange={onChangeUsername}
          placeholder={t('Введите имя')}
        />
        <Input
          value={password}
          onChange={onChangePassword}
          placeholder={t('Введите пароль')}
        />
        {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
        <Button disabled={isLoading} theme={ButtonTheme.BACKGROUND} onClick={onLoginSubmit} className={cls.loginBtn}>
          {t('Войти')}
        </Button>
      </div>
    </div>
  );
};
