import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/addCommentForm';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from '@/shared/ui/Text';

import { getArticleCommentsIsLoading } from '../../module/selectors/comments';
import { addCommentForArticle } from '../../module/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../module/services/fetchCommentsArticleById/fetchCommentsByArticleId';
import { getArticleComments } from '../../module/slice/articleDetailsCommentsSlice';

interface ArticleDetailsCommentProps {
  className?: string;
  id: string;
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

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  return (
    <div className={classNames('', {}, [className])}>
      <Text title={t('Комментарии')} />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList comments={comments} isLoading={commentsIsLoading} />
    </div>
  );
};
