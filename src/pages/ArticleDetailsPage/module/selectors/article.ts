import { createSelector } from '@reduxjs/toolkit';
import { getAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';

export const getCanEditArticle = createSelector(
  getAuthData,
  getArticleDetailsData,
  (user, article) => {
    if (!user || !article) {
      return false;
    }

    return user.id === article.user.id;
  },
);
