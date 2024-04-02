import { ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  children: ReactNode;
}

export const Drawer = (props: DrawerProps) => {
  const { className, isOpen, children, onClose } = props;

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.closing]: !isOpen,
  };

  return (
    <Portal>
      <Overlay onClose={onClose} isClose={!isOpen} />
      <div className={classNames(cls.Drawer, mods, [className, 'app_drawer'])}>
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
