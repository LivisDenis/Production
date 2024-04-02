import { createSelector } from '@reduxjs/toolkit';

import { getArticleDetailsData } from '@/entities/Article';
import { getAuthData } from '@/entities/User';

export const getCanEditArticle = createSelector(getAuthData, getArticleDetailsData, (user, article) => {
  if (!user || !article) {
    return false;
  }

  return user.id === article.user.id;
});
