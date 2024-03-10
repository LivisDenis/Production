import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { useGetNotificationsQuery } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
    className?: string
}

export const NotificationList = (props: NotificationListProps) => {
  const {
    className,
  } = props;

  const { data: notifications, isLoading } = useGetNotificationsQuery(null, {
    pollingInterval: 10000,
  });

  return (
    <VStack align="start" gap="4" max className={classNames(cls.NotificationList, {}, [className])}>
      {notifications?.map((notification) => (
        <NotificationItem
          key={notification.id}
          item={notification}
        />
      ))}
      {isLoading && (
      <>
        <Skeleton height={80} width="100%" />
        <Skeleton height={80} width="100%" />
        <Skeleton height={80} width="100%" />
      </>
      )}
    </VStack>
  );
};
