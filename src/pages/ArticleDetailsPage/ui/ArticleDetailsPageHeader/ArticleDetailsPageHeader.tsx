import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import cls from './ArticleDetailsPageHeader.module.scss';
import { getCanEditArticle } from '../../module/selectors/article';
import { getRouteArticleEdit } from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
    className?: string
    id: string
}

export const ArticleDetailsPageHeader = (props: ArticleDetailsPageHeaderProps) => {
  const {
    className,
    id,
  } = props;
  const { t } = useTranslation('article-details');
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);

  const onClickEdit = () => {
    navigate(getRouteArticleEdit(id));
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
