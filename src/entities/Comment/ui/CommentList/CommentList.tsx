import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import { CommentCardSkeleton } from '../CommentCard/CommentCardSkeleton';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading: boolean
}

export const CommentList = (props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentList, {}, [className])}>
        {Array.from(new Array(4)).map((_, i) => (
          <CommentCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {
        comments?.length
          ? comments.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
            />
          ))
          : <Text align={TextAlign.CENTER} subtitle={t('Комментарии отсутствуют')} />
      }
    </div>
  );
};
