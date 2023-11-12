import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarLinkType } from 'widgets/Sidebar/model/links';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';
import cls from './SidebarLink.module.scss';

interface SidebarLinkProps {
    link: SidebarLinkType
    theme?: AppLinkTheme
}

export const SidebarLink = memo((props: SidebarLinkProps) => {
  const {
    link,
    theme = AppLinkTheme.NORMAL,
  } = props;
  const { t } = useTranslation();
  const isAuth = useSelector(getAuthData);

  if (!isAuth && link.authOnly) return null;

  return (
    <AppLink className={cls.item} to={link.path} theme={theme}>
      <link.Icon className={cls.icon} />
      <span className={cls.link}>
        {t(link.text)}
      </span>
    </AppLink>
  );
});
