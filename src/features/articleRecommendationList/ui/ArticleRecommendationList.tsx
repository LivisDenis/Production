import { useTranslation } from 'react-i18next';

import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { useArticleRecommendationsListQuery } from '../api/articleRecommendationsApi';

interface ArticleRecommendationsProps {
  className?: string;
}

export const ArticleRecommendationList = ({ className }: ArticleRecommendationsProps) => {
  const { t } = useTranslation('article-details');
  const { data: recommendations, isLoading: recommendationsIsLoading } = useArticleRecommendationsListQuery();

  return (
    <VStack align='start' gap='16' className={classNames('', {}, [className])}>
      <Text title={t('Рекомендации')} />
      <ArticleList target='_blank' isLoading={recommendationsIsLoading} articles={recommendations} />
    </VStack>
  );
};
