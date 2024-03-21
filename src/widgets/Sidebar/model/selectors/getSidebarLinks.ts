import { createSelector } from '@reduxjs/toolkit';
import { getAuthData } from '@/entities/User';
import MainIcon from '../../../../shared/assets/icons/icon-home.svg';
import ArticleIcon from '../../../../shared/assets/icons/icon-article.svg';
import ProfileIcon from '../../../../shared/assets/icons/icon-profile.svg';
import AboutIcon from '../../../../shared/assets/icons/icon-about.svg';
import { SidebarLinkType } from '../../model/types/sidebar';
import {
  getRouteMain, getRouteProfile, getRouteArticles, getRouteAbout,
} from '@/shared/const/router';

export const getSidebarLinks = createSelector(
  getAuthData,
  (userData) => {
    const sidebarLinks: SidebarLinkType[] = [
      {
        path: getRouteMain(),
        Icon: MainIcon,
        text: 'Главная',
      },
      {
        path: getRouteAbout(),
        Icon: AboutIcon,
        text: 'О сайте',
      },
    ];

    if (userData) {
      sidebarLinks.push(
        {
          path: getRouteArticles(),
          Icon: ArticleIcon,
          text: 'Статьи',
          authOnly: true,
        },
        {
          path: getRouteProfile(String(userData.id)),
          Icon: ProfileIcon,
          text: 'Профиль',
          authOnly: true,
        },
      );
    }

    return sidebarLinks;
  },
);
