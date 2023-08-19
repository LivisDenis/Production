import cls from './AppLink.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    styles?: string
    theme?: AppLinkTheme
    children: string
}

export const AppLink = (props: AppLinkProps) => {
    const {
        styles,
        to,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [styles, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
