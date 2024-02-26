import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    NORMAL = 'normal',
    SECONDARY = 'secondary',
    ERROR = 'error',
}

export enum TextAlign {
    CENTER='center',
    START='start',
    END='end',
}

interface TextProps {
    className?: string
    title?: string
    subtitle?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
    'data-testid'?: string
}

export const Text = memo((props: TextProps) => {
  const {
    text,
    title,
    subtitle,
    className,
    align = TextAlign.START,
    theme = TextTheme.NORMAL,
    'data-testid': dataTestId = 'Text',
  } = props;

  const additional = [
    className,
    cls[theme],
    cls[align],
  ];

  return (
    <div className={classNames(cls.title, {}, additional)}>
      {title && <p data-testid={`${dataTestId}.Title`} className={cls.title}>{title}</p>}
      {subtitle && <p data-testid={`${dataTestId}.Subtitle`} className={cls.subtitle}>{subtitle}</p>}
      {text && <p data-testid={`${dataTestId}.Text`} className={cls.text}>{text}</p>}
    </div>
  );
});
