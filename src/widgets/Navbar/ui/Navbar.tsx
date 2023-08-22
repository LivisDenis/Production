import cls from './Navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import { LangSwitcher } from '@/shared/ui/LangSwitcher';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <div>
      <LangSwitcher />
      <ThemeSwitcher />
    </div>
    <div className={cls.links}>
      <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY}>Главная</AppLink>
      <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>About</AppLink>
    </div>
  </div>
);
