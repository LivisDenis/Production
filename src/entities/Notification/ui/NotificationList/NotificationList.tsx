import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';

import { useGetNotificationsQuery } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = (props: NotificationListProps) => {
  const { className } = props;

  const { data: notifications, isLoading } = useGetNotificationsQuery(null, {
    pollingInterval: 10000,
  });

  return (
    <VStack align='start' gap='4' max className={classNames(cls.NotificationList, {}, [className])}>
      {notifications?.map((notification) => <NotificationItem key={notification.id} item={notification} />)}
      {isLoading && (
        <>
          <Skeleton height={80} width='100%' />
          <Skeleton height={80} width='100%' />
          <Skeleton height={80} width='100%' />
        </>
      )}
    </VStack>
  );
};
