import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  ArticleSortField,
  ArticleSortSelector,
  ArticleType,
  ArticleView,
  ArticleViewSelector,
  ArticleTypeTabs,
} from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types/sort';
import { Input } from '@/shared/ui/Input';
import { HStack } from '@/shared/ui/Stack';

import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from '../../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
  className?: string;
  view: ArticleView;
}

export const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
  const { className, view } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debounceFetchData = useDebounce(fetchData, 400);

  const onChangeSort = useCallback(
    (sort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(sort));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeOrder = useCallback(
    (order: SortOrder) => {
      dispatch(articlesPageActions.setOrder(order));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeType = useCallback(
    (type: ArticleType) => {
      dispatch(articlesPageActions.setType(type));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeSearch = useCallback(
    (value: string) => {
      dispatch(articlesPageActions.setSearch(value));
      dispatch(articlesPageActions.setPage(1));
      debounceFetchData();
    },
    [dispatch, debounceFetchData],
  );

  const onChangeView = (view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  };

  return (
    <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
      <Input className={cls.search} placeholder={t('Поиск')} onChange={onChangeSearch} value={search} />
      <HStack gap='24' justify='between' align='end'>
        <ArticleSortSelector onChangeSort={onChangeSort} onChangeOrder={onChangeOrder} sort={sort} order={order} />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </HStack>
      <ArticleTypeTabs className={cls.tabs} type={type} onChangeTab={onChangeType} />
    </div>
  );
};
