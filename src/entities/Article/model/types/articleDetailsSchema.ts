import { Article } from './article';

export interface ArticleDetailsSchema {
    data?: Article
    form?: Article
    error?: string
    isLoading: boolean
}
