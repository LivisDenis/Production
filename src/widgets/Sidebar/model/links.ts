import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/icon-home.svg';
import AboutIcon from 'shared/assets/icons/icon-about.svg';
import ProfileIcon from 'shared/assets/icons/icon-profile.svg';

export interface SidebarLinkType {
    path: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    text: string
}

export const SidebarLinkList: SidebarLinkType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'Главная',
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'Профиль',
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'О сайте',
  },
];
