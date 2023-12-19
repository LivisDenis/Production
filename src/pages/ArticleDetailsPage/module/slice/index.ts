import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer } from '../slice/articleDetailsCommentsSlice';
import { articleDetailsRecommendationsReducer } from '../slice/articleDetailsRecommendationsSlice';
import { ArticlesDetailsPageSchema } from '../types/index';

export const articlesDetailsPageReducer = combineReducers<ArticlesDetailsPageSchema>({
  recommendations: articleDetailsRecommendationsReducer,
  comments: articleDetailsCommentsReducer,
});
