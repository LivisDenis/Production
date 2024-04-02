import React, { ButtonHTMLAttributes, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  children: React.ReactNode;
  size?: ButtonSize;
  square?: boolean;
  max?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.BACKGROUND,
    size = ButtonSize.M,
    square,
    max,
    disabled,
    ...otherProps
  } = props;

  const mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.max]: max,
  };

  return (
    <button type='button' className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])} {...otherProps}>
      {children}
    </button>
  );
});
