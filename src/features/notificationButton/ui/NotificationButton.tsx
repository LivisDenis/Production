import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import NotificationIcon from 'shared/assets/icons/icon-notification.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = (props: NotificationButtonProps) => {
  const {
    className,
  } = props;

  return (
    <Popover
      className={classNames(cls.NotificationButton, {}, [className])}
      direction="bottom left"
      trigger={(
        <Button className={cls.notificationIcon} theme={ButtonTheme.CLEAR}>
          <NotificationIcon />
        </Button>
        )}
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  );
};
