import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClose?: () => void;
  isClose?: boolean;
}

export const Overlay = (props: OverlayProps) => {
  const { className, onClose, isClose } = props;

  return <div onClick={onClose} className={classNames(cls.Overlay, { [cls.isClosing]: isClose }, [className])} />;
};
