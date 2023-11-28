import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './CommentCard.module.scss';

interface CommentCardSkeletonProps {
    className?: string
}

export const CommentCardSkeleton = (props: CommentCardSkeletonProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <div className={cls.header}>
        <Skeleton className={cls.avatar} borderRadius="50%" height={30} width={30} />
        <Skeleton height={25} width={100} />
      </div>
      <Skeleton height={25} width="100%" />
    </div>
  );
};
