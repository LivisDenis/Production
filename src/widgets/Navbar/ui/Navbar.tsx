import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const authData = useSelector(getAuthData);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(userActions.logout());
  };

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        {!authData && (
        <>
          <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
          <Button onClick={() => setIsOpen(true)} theme={ButtonTheme.BACKGROUND}>{t('Войти')}</Button>
        </>
        )}
        {authData && <Button onClick={onLogout} theme={ButtonTheme.BACKGROUND}>{t('Выйти')}</Button>}
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
