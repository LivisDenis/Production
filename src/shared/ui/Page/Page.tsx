import { MutableRefObject, ReactNode, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './Page.module.scss';

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page = ({ className, children, onScrollEnd }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  return (
    <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
      <div className={cls.contentPage}>
        {children}
      </div>
      <div ref={triggerRef} />
    </section>
  );
};
