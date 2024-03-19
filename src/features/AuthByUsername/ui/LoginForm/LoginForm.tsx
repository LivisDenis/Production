import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text, TextTheme } from '@/shared/ui/Text';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginByUsername } from '../../model/service/loginByUsername';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { RoutePath } from '@/shared/const/router';

export interface LoginFormProps {
    className?: string
    onSuccess: () => void
}

const initialReducers: ReducersList = {
  loginUser: loginReducer,
};

const LoginForm = ({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = (value: string) => {
    dispatch(loginActions.setUsername(value));
  };
  const onChangePassword = (value: string) => {
    dispatch(loginActions.setPassword(value));
  };

  const onLoginSubmit = async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
      navigate(RoutePath.articles);
    }
  };

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
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
    </DynamicModuleLoader>
  );
};

export default LoginForm;
