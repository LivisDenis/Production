import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/icon-home.svg';
import AboutIcon from 'shared/assets/icons/icon-about.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();

  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, {}, [className])}>
      <div className={cls.links}>
        <AppLink className={cls.item} to={RoutePath.main} theme={AppLinkTheme.NORMAL}>
          <MainIcon className={cls.icon} />
          <span className={cls.link}>
            {t('Главная')}
          </span>
        </AppLink>
        <AppLink className={cls.item} to={RoutePath.about} theme={AppLinkTheme.NORMAL}>
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>
            {t('О сайте')}
          </span>
        </AppLink>
      </div>
    </div>
  );
};
