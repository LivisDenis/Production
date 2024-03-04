import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string
    item: Notification
}

export const NotificationItem = (props: NotificationItemProps) => {
  const {
    className,
    item,
  } = props;

  const content = (
    <Card
      theme={CardTheme.OUTLINE}
      className={classNames(cls.NotificationItem, {}, [className])}
    >
      <Text
        className={cls.notificationItem}
        subtitle={item.title}
        text={item.description}
      />
    </Card>
  );

  if (item.href) {
    return (
      <a href={item.href} className={cls.link} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
};
