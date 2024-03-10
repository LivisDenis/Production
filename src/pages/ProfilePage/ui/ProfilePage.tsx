import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';
import { Text } from '@/shared/ui/Text/Text';
import { EditableProfileCard } from '@/features/editableProfileCard';

const ProfilePage = () => {
  const { id } = useParams<{id: string}>();
  const { t } = useTranslation('profile');

  if (!id) {
    return <Text title={t('Профиль не найден')} />;
  }

  return (
    <Page className={classNames('', {})}>
      <EditableProfileCard id={id} />
    </Page>
  );
};

export default memo(ProfilePage);
