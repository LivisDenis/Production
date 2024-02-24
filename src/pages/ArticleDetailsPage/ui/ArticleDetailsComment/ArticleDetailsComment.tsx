import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/addCommentForm';
import { CommentList } from 'entities/Comment';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  fetchCommentsByArticleId,
} from '../../module/services/fetchCommentsArticleById/fetchCommentsByArticleId';
import { getArticleComments } from '../../module/slice/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../module/selectors/comments';
import { addCommentForArticle } from '../../module/services/addCommentForArticle/addCommentForArticle';

interface ArticleDetailsCommentProps {
    className?: string
    id: string
}

export const ArticleDetailsComment = ({ className, id }: ArticleDetailsCommentProps) => {
  const { t } = useTranslation('article-details');
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchCommentsByArticleId(id));
    }
  }, [dispatch, id]);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  return (
    <div className={classNames('', {}, [className])}>
      <Text title={t('Комментарии')} />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList
        comments={comments}
        isLoading={commentsIsLoading}
      />
    </div>
  );
};
