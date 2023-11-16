import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetails/getArticleDetails';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
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
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} data={block} />;
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} data={block} />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} data={block} />;
      default:
        return null;
    }
  }, []);

  if (isLoading) {
    return (
      <ArticleDetailsSkeleton />
    );
  }

  if (error) {
    return (
      <Text
        title={t('Произошла ошибка при загрузке статьи.')}
        align={TextAlign.CENTER}
        theme={TextTheme.ERROR}
      />
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        <Text title={article?.title} subtitle={article?.subtitle} />
        <div className={cls.info_block}>
          <div className={cls.author}>
            <Avatar size={20} borderRadius="50%" />
            Author
          </div>
          <div className={cls.stats}>
            <span>{article?.createdAt}</span>
            ·
            <span>{`${article?.views} просмотров`}</span>
          </div>
        </div>
        <img className={cls.image} src={article?.img} alt={article?.img} />
        <div className={cls.content_block}>
          {article?.blocks.map(renderBlock)}
        </div>
      </div>
    </DynamicModuleLoader>
  );
};
