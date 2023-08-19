import cls from './Navbar.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "@/shared/ui/AppLink/AppLink";
import {RoutePath} from "@/shared/config/routeConfig/routeConfig";

interface NavbarProps {
    styles?: string
}

export const Navbar = ({styles}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [styles])}>
            <div className={cls.links}>
                <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY}>Главная</AppLink>
                <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>About</AppLink>
            </div>
        </div>
    );
};
