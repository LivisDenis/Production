import { lazy } from 'react';

export const ArticleEditPageLazy = lazy(() => new Promise((res) => {
  // @ts-ignore
  setTimeout(() => res(import('./ArticleEditPage')), 400);
}));
