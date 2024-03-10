import { useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import NotificationIcon from '@/shared/assets/icons/icon-notification.svg';
import { NotificationList } from '@/entities/Notification';
import { Popover } from '@/shared/ui/Popups';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = (props: NotificationButtonProps) => {
  const {
    className,
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onCloseDrawer = () => {
    setIsOpen(false);
  };

  const onOpenDrawer = () => {
    setIsOpen(true);
  };

  const trigger = (
    <Button onClick={onOpenDrawer} className={cls.notificationIcon} theme={ButtonTheme.CLEAR}>
      <NotificationIcon />
    </Button>
  );

  return (
    <>
      <BrowserView renderWithFragment>
        <Popover
          className={classNames(cls.NotificationButton, {}, [className])}
          direction="bottom left"
          trigger={trigger}
        >
          <NotificationList className={cls.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer
          isOpen={isOpen}
          onClose={onCloseDrawer}
        >
          <NotificationList className={cls.notifications} />
        </Drawer>
      </MobileView>
    </>
  );
};
