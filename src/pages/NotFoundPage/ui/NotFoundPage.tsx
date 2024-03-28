import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <Page data-testid="NotFoundPage" className={classNames(cls.NotFoundPage)}>
      {t('Страница не найдена')}
    </Page>
  );
};
