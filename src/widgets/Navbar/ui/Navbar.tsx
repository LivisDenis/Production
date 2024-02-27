import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { HStack } from 'shared/ui/Stack';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const authData = useSelector(getAuthData);
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const hasRequiredRole = isManager || isAdmin;

  const onCloseModal = () => {
    setIsOpen(false);
  };

  const onOpenModal = () => {
    setIsOpen(true);
  };

  const onLogout = () => {
    dispatch(userActions.logout());
    navigate(RoutePath.articles);
  };

  return (
    <HStack gap="16" justify="end" className={classNames(cls.Navbar, {}, [className])}>
      {hasRequiredRole && (
      <AppLink to={RoutePath.admin_panel}>{t('Админ панель')}</AppLink>
      )}
      {!authData && (
        <>
          {isOpen && <LoginModal isOpen={isOpen} onClose={onCloseModal} />}
          <Button onClick={onOpenModal} theme={ButtonTheme.BACKGROUND}>{t('Войти')}</Button>
        </>
      )}
      {authData && <Button onClick={onLogout} theme={ButtonTheme.BACKGROUND}>{t('Выйти')}</Button>}
      <ThemeSwitcher />
      <LangSwitcher />
    </HStack>
  );
});
