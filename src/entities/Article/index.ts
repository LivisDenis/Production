export type { Article } from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export { getArticleDetailsData } from './model/selectors/getArticleDetails/getArticleDetails';
export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export { articleDetailsReducer } from './model/slice/articleDetailsSlice';
export { fetchArticleById } from './model/services/fetchArticleById/fetchArticleById';
