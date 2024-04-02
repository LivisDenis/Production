import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/articleRating';
import { ArticleRecommendationList } from '@/features/articleRecommendationList';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader';
import { Text, TextAlign } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

import { articlesDetailsPageReducer } from '../../module/slice';
import { ArticleDetailsComment } from '../ArticleDetailsComment/ArticleDetailsComment';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articlesDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <Page className={classNames('', {}, [className])}>
        <Text title={t('Статья не найдена')} align={TextAlign.CENTER} />
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames('', {}, [className])}>
        <ArticleDetailsPageHeader id={id} />
        <ArticleDetails id={id} />
        <ArticleRating articleId={id} />
        <ArticleRecommendationList className={cls.recommendations} />
        <ArticleDetailsComment id={id} className={cls.comments} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
