import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';

const initialState: ArticlesPageSchema = {
  isLoading: false,
  ids: [],
  entities: {},
  view: ArticleView.SMALL,
  page: 1,
  hasMore: true,
};

export const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>((state) => (
  state.articlesPage || articlesAdapter.getInitialState()
));

export const articlesPageSlice = createSlice({
  name: 'articlesPage',
  initialState: articlesAdapter.getInitialState(initialState),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.SMALL ? 15 : 5;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticlesList.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchArticlesList.fulfilled, (state, action) => {
      state.isLoading = false;
      articlesAdapter.addMany(state, action.payload);
      state.hasMore = action.payload.length > 0;
    });
    builder.addCase(fetchArticlesList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
