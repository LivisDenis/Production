import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import cls from './ArticleDetailsPageHeader.module.scss';
import { getCanEditArticle } from '../../module/selectors/article';
import { RoutePath } from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader = (props: ArticleDetailsPageHeaderProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation('article-details');
  const { id } = useParams<{id: string}>();
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);

  const onClickEdit = () => {
    navigate(`${RoutePath.articles}/${id}/edit`);
  };

  return (
    <HStack justify="between" className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
      {canEdit
          && (
          <Button
            onClick={onClickEdit}
            theme={ButtonTheme.OUTLINE}
            className={cls.btn}
          >
            {t('Редактировать')}
          </Button>
          )}
    </HStack>
  );
};
