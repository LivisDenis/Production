import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { AddCommentForm } from 'features/addCommentForm';
import { Page } from 'widgets/Page/Page';
import { addCommentForArticle } from '../../module/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../module/services/fetchCommentsArticleById/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../../module/selectors/comments';
import { getArticleComments } from '../../module/slice/articleDetailsCommentsSlice';
import {
  getArticleRecommendations,
} from '../../module/slice/articleDetailsRecommendationsSlice';
import {
  fetchArticlesRecommendations,
} from '../../module/services/fetchArticlesRecommendations/fetchArticlesRecommendations';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleRecommendationsIsLoading } from '../../module/selectors/recommendations';
import { articlesDetailsPageReducer } from '../../module/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articlesDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation('article-details');
  const { id } = useParams<{id: string}>();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticlesRecommendations());
  }, [dispatch, id]);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  if (!id) {
    return (
      <Page className={classNames('', {}, [className])}>
        <Text title={t('Статья не найдена')} align={TextAlign.CENTER} />
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames('', {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <Text className={cls.comment_title} title={t('Рекомендации')} />
        <ArticleList
          target="_blank"
          isLoading={recommendationsIsLoading}
          className={cls.recommendations}
          articles={recommendations}
        />
        <Text className={cls.comment_title} title={t('Комментарии')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList
          comments={comments}
          isLoading={commentsIsLoading}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
