import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from '../ArticleDetails/ArticleDetails.module.scss';

export const ArticleDetailsSkeleton = () => (
  <div className={classNames(cls.ArticleDetails, {}, [])}>
    <Skeleton height={32} />
    <HStack justify="between" className={cls.info_block}>
      <div className={cls.author}>
        <Skeleton width={20} height={20} borderRadius="50%" />
        <Skeleton height={20} width={60} />
      </div>
      <div className={cls.stats}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <Skeleton height={20} width={80} />
        ·
        <Skeleton height={20} width={80} />
      </div>
    </HStack>
    <Skeleton height={185} className={cls.image} />
    <VStack gap="24">
      <Skeleton height={48} />
      <Skeleton height={96} />
      <Skeleton height={288} />
    </VStack>
  </div>
);
