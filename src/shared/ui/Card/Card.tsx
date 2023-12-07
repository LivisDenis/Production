import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './Card.module.scss';

interface CardProps {
    className?: string
    children: ReactNode
}

export const Card = (props: CardProps) => {
  const {
    className,
    children,
  } = props;

  return (
    <div className={classNames(cls.Card, {}, [className])}>
      {children}
    </div>
  );
};
