import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { ArticleList } from 'entities/Article';
import { useArticleRecommendationsListQuery } from '../api/articleRecommendationsApi';

interface ArticleRecommendationsProps {
    className?: string
}

export const ArticleRecommendationList = ({ className }: ArticleRecommendationsProps) => {
  const { t } = useTranslation('article-details');
  const { data: recommendations, isLoading: recommendationsIsLoading } = useArticleRecommendationsListQuery();

  return (
    <VStack align="start" gap="16" className={classNames('', {}, [className])}>
      <Text title={t('Рекомендации')} />
      <ArticleList
        target="_blank"
        isLoading={recommendationsIsLoading}
        articles={recommendations}
      />
    </VStack>
  );
};
