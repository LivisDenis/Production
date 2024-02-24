import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { EditableProfileCard } from 'features/editableProfileCard';

const ProfilePage = () => {
  const { id } = useParams<{id: string}>();

  return (
    <Page className={classNames('', {})}>
      <EditableProfileCard id={id} />
    </Page>
  );
};

export default memo(ProfilePage);
