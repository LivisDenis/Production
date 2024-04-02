import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { NotificationButton } from '@/features/notificationButton';
import { getRouteAdminPanel, getRouteArticles } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LangSwitcher } from '@/shared/ui/LangSwitcher';
import { HStack } from '@/shared/ui/Stack';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
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
    navigate(getRouteArticles());
  };

  return (
    <HStack gap='16' justify='end' className={classNames(cls.Navbar, {}, [className])}>
      {hasRequiredRole && <AppLink to={getRouteAdminPanel()}>{t('Админ панель')}</AppLink>}
      {!authData && (
        <>
          {isOpen && <LoginModal isOpen={isOpen} onClose={onCloseModal} />}
          <Button onClick={onOpenModal} theme={ButtonTheme.BACKGROUND}>
            {t('Войти')}
          </Button>
        </>
      )}
      {authData && (
        <>
          <NotificationButton />
          <Button onClick={onLogout} theme={ButtonTheme.BACKGROUND}>
            {t('Выйти')}
          </Button>
        </>
      )}
      <ThemeSwitcher />
      <LangSwitcher />
    </HStack>
  );
});
