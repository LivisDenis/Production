import { classNames } from '@/shared/lib/classNames/classNames';

import './Loader.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
  <div className={classNames('', {}, [className])}>
    <div className='lds-ellipsis'>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);
