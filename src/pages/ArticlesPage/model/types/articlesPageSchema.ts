import {
  Article, ArticleView, ArticleType, ArticleSortField,
} from 'entities/Article';
import { EntityState } from '@reduxjs/toolkit';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article>{
    isLoading: boolean
    error?: string

    // filters
    view: ArticleView
    order: SortOrder
    sort: ArticleSortField
    type: ArticleType
    search: string

    // pagination
    page: number
    limit: number
    hasMore: boolean

    _inited: boolean
}
