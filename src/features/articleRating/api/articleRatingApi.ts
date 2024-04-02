import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface ArticleRatingProps extends Omit<Rating, 'id'> {
  articleId: string;
  userId: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getArticleRatings: builder.query<Rating[], string>({
      query: (articleId) => ({
        url: '/article-ratings',
        params: {
          articleId,
        },
      }),
    }),
    articleRating: builder.mutation<Rating, ArticleRatingProps>({
      query: (articleRating) => ({
        url: '/article-ratings',
        method: 'POST',
        body: articleRating,
      }),
    }),
  }),
});

export const { useGetArticleRatingsQuery, useArticleRatingMutation } = articleRatingApi;
