import { ReactNode } from 'react';

import { Popover as HPopover } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Popover.module.scss';

type PanelDirection = 'top right' | 'top left' | 'bottom right' | 'bottom left';

interface PopoverProps {
  className?: string;
  direction?: PanelDirection;
  trigger: ReactNode;
  children: ReactNode;
}

const mapDirectionClass: Record<PanelDirection, string> = {
  'top right': cls.directionTopRight,
  'top left': cls.directionTopLeft,
  'bottom right': cls.directionBottomRight,
  'bottom left': cls.directionBottomLeft,
};

export const Popover = (props: PopoverProps) => {
  const { className, direction = 'bottom left', trigger, children } = props;

  const panelOptionsClass = [mapDirectionClass[direction]];

  return (
    <HPopover className={classNames(cls.Popover, {}, [className])}>
      <HPopover.Button as='div' className={cls.popoverBtn}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={classNames(cls.panel, {}, panelOptionsClass)}>{children}</HPopover.Panel>
    </HPopover>
  );
};
