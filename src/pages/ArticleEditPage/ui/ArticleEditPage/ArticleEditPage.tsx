import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleEditPage.module.scss';

interface ArticleDetailsEditPageProps {
    className?: string
}

const ArticleEditPage = (props: ArticleDetailsEditPageProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation('article-edit');
  const { id } = useParams<{id: string}>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames(cls.ArticleDetailsEditPage, {}, [className])}>
      {isEdit
        ? <Text title={t('Редактирование статьи')} />
        : <Text title={t('Создание статьи')} />}
    </Page>
  );
};

export default ArticleEditPage;
