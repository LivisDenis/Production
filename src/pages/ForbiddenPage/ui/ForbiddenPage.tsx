import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

import cls from './ForbiddenPage.module.scss';

const ForbiddenPage = () => {
  const { t } = useTranslation();

  return (
    <Page data-testid='ForbiddenPage' className={cls.ForbiddenPage}>
      {t('У вас нет доступа к этой странице')}
    </Page>
  );
};

export default ForbiddenPage;
