import { lazy } from 'react';

export const ArticlesPageLazy = lazy(() => new Promise((res) => {
  // @ts-ignore
  setTimeout(() => res(import('./ArticlesPage')), 800);
}));
