import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import {
  fetchCommentsByArticleId,
} from '../fetchCommentsArticleById/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetails/addCommentForArticle',
  async (text, thunkApi) => {
    const {
      extra, rejectWithValue, getState, dispatch,
    } = thunkApi;

    const article = getArticleDetailsData(getState());
    const userData = getAuthData(getState());

    if (!text || !userData || !article) {
      return rejectWithValue('No data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (e) {
      return rejectWithValue('Error');
    }
  },
);
