import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';

interface AdminPanelProps {
    className?: string
}

const AdminPanel = ({ className }: AdminPanelProps) => {
  const { t } = useTranslation();

  return (
    <Page className={classNames('', {}, [className])}>
      {t('AdminPanel')}
    </Page>
  );
};

export default AdminPanel;
