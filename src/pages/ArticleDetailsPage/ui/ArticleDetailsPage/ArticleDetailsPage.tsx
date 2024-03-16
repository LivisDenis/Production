import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text/Text';
import { ArticleDetails } from '@/entities/Article';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { ArticleRecommendationList } from '@/features/articleRecommendationList';
import { articlesDetailsPageReducer } from '../../module/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComment } from '../ArticleDetailsComment/ArticleDetailsComment';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleRating } from '@/features/articleRating';

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articlesDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation('article-details');
  const { id } = useParams<{id: string}>();

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
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleRating articleId={id} />
        <ArticleRecommendationList className={cls.recommendations} />
        <ArticleDetailsComment id={id} className={cls.comments} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
