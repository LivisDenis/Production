import { classNames } from 'shared/lib/classNames/classNames';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cls from './Flex.module.scss';

type FlexAlign = 'start' | 'center' | 'end';
type FlexJustify = 'start' | 'center' | 'end' | 'between';
type FlexDirection = 'row' | 'column';
type FlexGap = '0' | '4' | '8' | '16' | '24' | '32';

type DivProp = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.rowDirection,
  column: cls.columnDirection,
};

const gapClasses: Record<FlexGap, string> = {
  0: cls.gap0,
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  24: cls.gap24,
  32: cls.gap32,
};

export interface FlexProps extends DivProp {
    className?: string
    children: ReactNode
    align?: FlexAlign
    justify?: FlexJustify
    direction?: FlexDirection
    gap?: FlexGap
    max?: boolean
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap = '8',
    max = false,
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gapClasses[gap],
  ];

  const mods = {
    [cls.max]: max,
  };

  return (
    <div className={classNames(cls.Flex, mods, classes)}>
      {children}
    </div>
  );
};
