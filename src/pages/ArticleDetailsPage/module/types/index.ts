import { ArticleDetailsRecommendationsSchema } from '../types/articleDetailsRecommendationsSchema';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

export interface ArticlesDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema
    recommendations: ArticleDetailsRecommendationsSchema
}
