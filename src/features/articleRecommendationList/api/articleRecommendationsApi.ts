import { rtkApi } from '@/shared/api/rtkApi';
import { Article } from '@/entities/Article';

const articleRecommendationsApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    articleRecommendationsList: builder.query<Article[], void>({
      query: () => ({
        url: '/articles',
        params: {
          _limit: 5,
        },
      }),
    }),
  }),
});

export const { useArticleRecommendationsListQuery } = articleRecommendationsApi;
