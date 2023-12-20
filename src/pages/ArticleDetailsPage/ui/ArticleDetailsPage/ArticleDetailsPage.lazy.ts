import { lazy } from 'react';

export const ArticleDetailsPageLazy = lazy(() => new Promise((res) => {
  // @ts-ignore
  setTimeout(() => res(import('./ArticleDetailsPage')), 400);
}));
