import { ArticleDetailsRecommendationsSchema } from './articleDetailsRecommendationsSchema';
import { ArticleDetailsCommentsSchema } from './articleDetailsCommentsSchema';

export interface ArticlesDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema
    recommendations: ArticleDetailsRecommendationsSchema
}
