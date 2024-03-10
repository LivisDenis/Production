import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading, getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchArticlesNextPart',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const isLoading = getArticlesPageIsLoading(getState());
    const hasMore = getArticlesPageHasMore(getState());
    const page = getArticlesPageNum(getState());

    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1));
      dispatch(fetchArticlesList({}));
    }
  },
);
