import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from '../ArticleDetails/ArticleDetails.module.scss';

export const ArticleDetailsSkeleton = () => (
  <div className={classNames(cls.ArticleDetails, {}, [])}>
    <Skeleton height={32} />
    <div className={cls.info_block}>
      <div className={cls.author}>
        <Skeleton width={20} height={20} borderRadius="50%" />
        <Skeleton height={20} width={60} />
      </div>
      <div className={cls.stats}>
        <Skeleton height={20} width={80} />
        ·
        <Skeleton height={20} width={80} />
      </div>
    </div>
    <Skeleton height={185} className={cls.image} />
    <div className={cls.content_block}>
      <Skeleton height={48} />
      <Skeleton height={96} />
      <Skeleton height={288} />
    </div>
  </div>
);
