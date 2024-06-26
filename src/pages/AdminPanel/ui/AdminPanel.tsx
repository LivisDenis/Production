import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface AdminPanelProps {
  className?: string;
}

const AdminPanel = ({ className }: AdminPanelProps) => {
  const { t } = useTranslation();

  return (
    <Page data-testid='AdminPanel' className={classNames('', {}, [className])}>
      {t('AdminPanel')}
    </Page>
  );
};

export default AdminPanel;
