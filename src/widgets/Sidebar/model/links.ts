import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/icon-home.svg';
import AboutIcon from 'shared/assets/icons/icon-about.svg';
import ProfileIcon from 'shared/assets/icons/icon-profile.svg';
import ArticleIcon from 'shared/assets/icons/icon-article.svg';

export interface SidebarLinkType {
    path: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    text: string
    authOnly?: boolean
}

export const SidebarLinkList: SidebarLinkType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'Главная',
  },
  {
    path: RoutePath.articles,
    Icon: ArticleIcon,
    text: 'Статьи',
    authOnly: true,
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'Профиль',
    authOnly: true,
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'О сайте',
  },
];
