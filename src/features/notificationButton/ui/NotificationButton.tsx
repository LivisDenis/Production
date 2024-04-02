import { useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { NotificationList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/icon-notification.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';
import { Popover } from '@/shared/ui/Popups';

import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = (props: NotificationButtonProps) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onCloseDrawer = () => {
    setIsOpen(false);
  };

  const onOpenDrawer = () => {
    setIsOpen(true);
  };

  const trigger = (
    <Button onClick={onOpenDrawer} className={cls.notificationIcon} theme={ButtonTheme.CLEAR}>
      <Icon Svg={NotificationIcon} />
    </Button>
  );

  return (
    <>
      <BrowserView renderWithFragment>
        <Popover
          className={classNames(cls.NotificationButton, {}, [className])}
          direction='bottom left'
          trigger={trigger}
        >
          <NotificationList className={cls.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList className={cls.notifications} />
        </Drawer>
      </MobileView>
    </>
  );
};
