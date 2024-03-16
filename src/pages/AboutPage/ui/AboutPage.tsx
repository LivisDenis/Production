import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <Page>
      {t('O нас')}
    </Page>
  );
};

export default AboutPage;
