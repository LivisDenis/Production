import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema';
import {
  fetchCommentsByArticleId,
} from '../services/fetchCommentsArticleById/fetchCommentsByArticleId';

const initialState: ArticleDetailsCommentsSchema = {
  isLoading: false,
  ids: [],
  entities: {},
};

export const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>((state) => (
  state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
));

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState: commentsAdapter.getInitialState(initialState),
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByArticleId.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
      state.isLoading = false;
      commentsAdapter.setAll(state, action.payload);
    });
    builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice;
export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
