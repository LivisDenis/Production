import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { Text } from 'shared/ui/Text/Text';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { Page } from 'shared/ui/Page/Page';
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slice/articlesPageSlice';
import {
  getArticlesPageError, getArticlesPageHasMore,
  getArticlesPageIsLoading, getArticlesPageNum,
  getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);
  const page = useSelector(getArticlesPageNum);
  const hasMore = useSelector(getArticlesPageHasMore);
  const articles = useSelector(getArticles.selectAll);

  const onLoadNextPart = () => {
    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1));
      dispatch(fetchArticlesList({
        page: page + 1,
      }));
    }
  };

  useEffect(() => {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({
      page: 1,
    }));
  }, [dispatch]);

  const onChangeView = (view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  };

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
        <Text title={t('Статьи')} className={cls.title} />
        <ArticleViewSelector
          view={view}
          onViewClick={onChangeView}
        />
        <ArticleList
          articles={articles}
          isLoading={isLoading}
          view={view}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
