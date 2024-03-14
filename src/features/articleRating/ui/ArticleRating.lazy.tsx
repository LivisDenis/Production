import { lazy, Suspense } from 'react';
import { ArticleRatingProps } from './ArticleRating';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
  <Suspense fallback={<Skeleton height={132} width="100%" />}>
    <ArticleRatingLazy {...props} />
  </Suspense>
);
