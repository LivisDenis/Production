import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import { getSidebarLinks } from '../../model/selectors/getSidebarLinks';
import { SidebarLink } from '../SidebarLink/SidebarLink';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const sidebarLinks = useSelector(getSidebarLinks);
  const { t } = useTranslation();

  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, {}, [className])}>
      <div className={cls.links}>
        {sidebarLinks.map((link) => <SidebarLink key={link.path} link={link} />)}
      </div>
      <AppLink className={cls.create} theme={AppLinkTheme.PRIMARY} to={RoutePath.article_create}>
        {t('Создать статью')}
      </AppLink>
    </div>
  );
});
