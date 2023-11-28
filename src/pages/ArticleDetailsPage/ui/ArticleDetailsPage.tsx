import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import {
  fetchCommentsByArticleId,
} from '../module/services/fetchCommentsArticleById/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../module/selectors/comments';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../module/slice/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation('article-details');
  const { id } = useParams<{id: string}>();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  if (!id) {
    return (
      <div className={classNames('', {}, [className])}>
        <Text title={t('Статья не найдена')} align={TextAlign.CENTER} />
      </div>
    );
  }

  return (
    <div className={classNames('', {}, [className])}>
      <ArticleDetails id={id} />
      <Text className={cls.comment_title} title={t('Комментарии')} />
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <CommentList
          comments={comments}
          isLoading={commentsIsLoading}
        />
      </DynamicModuleLoader>
    </div>
  );
};

export default ArticleDetailsPage;
