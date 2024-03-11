import { createSelector } from '@reduxjs/toolkit';
import { getAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import MainIcon from '../../../../shared/assets/icons/icon-home.svg';
import ArticleIcon from '../../../../shared/assets/icons/icon-article.svg';
import ProfileIcon from '../../../../shared/assets/icons/icon-profile.svg';
import AboutIcon from '../../../../shared/assets/icons/icon-about.svg';
import { SidebarLinkType } from '../../model/types/sidebar';

export const getSidebarLinks = createSelector(
  getAuthData,
  (userData) => {
    const sidebarLinks: SidebarLinkType[] = [
      {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная',
      },
      {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О сайте',
      },
    ];

    if (userData) {
      sidebarLinks.push(
        {
          path: RoutePath.articles,
          Icon: ArticleIcon,
          text: 'Статьи',
          authOnly: true,
        },
        {
          path: RoutePath.profile + userData.id,
          Icon: ProfileIcon,
          text: 'Профиль',
          authOnly: true,
        },
      );
    }

    return sidebarLinks;
  },
);
