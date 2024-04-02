import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RatingCard } from '@/entities/Rating';
import { getAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';

import { useGetArticleRatingsQuery, useArticleRatingMutation } from '../api/articleRatingApi';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = (props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation();
  const userData = useSelector(getAuthData);
  const { data, isLoading } = useGetArticleRatingsQuery(articleId);
  const [rateArticle] = useArticleRatingMutation();

  const handleRateArticle = (rate: number, feedback?: string) => {
    const ratingData = {
      rate,
      articleId,
      userId: String(userData!.id),
    };

    try {
      if (feedback) {
        rateArticle({
          ...ratingData,
          feedback,
        });
      } else {
        rateArticle(ratingData);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onAccept = (rate: number, feedback?: string) => {
    handleRateArticle(rate, feedback);
  };

  const onCancel = (rate: number) => {
    handleRateArticle(rate);
  };

  if (isLoading) {
    return <Skeleton height={132} width='100%' />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      className={classNames('', {}, [className])}
      title={t('Оцените статью')}
      feedbackTitle={t('Напишите отзыв')}
      rate={rating?.rate}
      onAccept={onAccept}
      onCancel={onCancel}
    />
  );
};

export default ArticleRating;
