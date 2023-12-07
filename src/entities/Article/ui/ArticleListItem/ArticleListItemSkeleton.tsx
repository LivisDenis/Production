import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string
    view?: ArticleView
}

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
  const {
    className,
    view = ArticleView.SMALL,
  } = props;

  if (view === ArticleView.BIG) {
    return (
      <Card className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <div className={cls.infoWrapper}>
          <div className={cls.author}>
            <Skeleton width={30} height={30} borderRadius="50%" />
            <Skeleton width={90} height={14} />
          </div>
          <Skeleton width={90} height={14} />
        </div>
        <Skeleton height={200} className={cls.image} />
        <Skeleton height={22} width={250} className={cls.titleSkeleton} />
        <Skeleton height={100} className={cls.textBlock} />
        <div className={cls.footer}>
          <Skeleton width={140} height={27} />
          <Skeleton width={90} height={14} />
        </div>
      </Card>
    );
  }

  return (
    <Card className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <Skeleton height={153} className={cls.image} />
      <div className={cls.infoWrapper}>
        <Skeleton width={120} height={12} className={cls.types} />
        <Skeleton width={30} height={12} />
      </div>
      <Skeleton className={cls.title} width={100} height={14} />
    </Card>
  );
};
