import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    NORMAL = 'normal',
    SECONDARY = 'secondary',
    ERROR = 'error',
}

interface TextProps {
    className?: string
    title?: string
    subtitle?: string
    text?: string
    theme?: TextTheme
}

export const Text = memo((props: TextProps) => {
  const {
    text,
    title,
    subtitle,
    className,
    theme = TextTheme.NORMAL,
  } = props;

  const additional = [
    className,
    cls[theme],
  ];

  return (
    <div className={classNames(cls.title, {}, additional)}>
      {title && <p className={cls.title}>{title}</p>}
      {subtitle && <p className={cls.subtitle}>{subtitle}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
