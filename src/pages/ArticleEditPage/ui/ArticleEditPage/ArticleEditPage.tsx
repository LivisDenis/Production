import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';
import { Text } from '@/shared/ui/Text/Text';
import cls from './ArticleEditPage.module.scss';

const ArticleEditPage = () => {
  const { t } = useTranslation('article-edit');
  const { id } = useParams<{id: string}>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames(cls.ArticleDetailsEditPage)}>
      {isEdit
        ? <Text title={t('Редактирование статьи')} />
        : <Text title={t('Создание статьи')} />}
    </Page>
  );
};

export default ArticleEditPage;
