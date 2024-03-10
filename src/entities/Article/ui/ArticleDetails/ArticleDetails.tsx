import { useTranslation } from 'react-i18next';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { VStack, HStack } from '@/shared/ui/Stack';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetails/getArticleDetails';
import type { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../../ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../../ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { ArticleDetailsSkeleton } from '../ArticleDetailsSkeleton/ArticleDetailsSkeleton';

interface ArticleDetailsProps {
    className?: string
    id: string
}

const reducers:ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = (props: ArticleDetailsProps) => {
  const {
    className,
    id,
  } = props;
  const { t } = useTranslation('article-details');
  const dispatch = useAppDispatch();
  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} block={block} />;
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} block={block} />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} block={block} />;
      default:
        return null;
    }
  }, []);

  if (error) {
    return (
      <Text
        title={t('Произошла ошибка при загрузке статьи')}
        align={TextAlign.CENTER}
        theme={TextTheme.ERROR}
      />
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      {isLoading
        ? <ArticleDetailsSkeleton />
        : (
          <div className={classNames(cls.ArticleDetails, {}, [className])}>
            <Text title={article?.title} subtitle={article?.subtitle} />
            <HStack justify="between" className={cls.info_block}>
              <div className={cls.author}>
                <Avatar size={20} borderRadius="50%" src={article?.user.avatar} />
                {article?.user.username}
              </div>
              <div className={cls.stats}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <span>{article?.createdAt}</span>
                ·
                <span>{`${article?.views} просмотров`}</span>
              </div>
            </HStack>
            <img className={cls.image} src={article?.img} alt={article?.img} />
            <VStack gap="24">
              {article?.blocks.map(renderBlock)}
            </VStack>
          </div>
        )}
    </DynamicModuleLoader>
  );
};
