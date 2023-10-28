import {
  InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>{
    className?: string
    onChange?: (value: string) => void
    value?: string
    autofocus?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    onChange,
    value,
    autofocus,
    type = 'text',
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>();

  useEffect(() => {
    if (autofocus) {
      ref.current.focus();
    }
  }, [autofocus]);

  return (
    <input
      ref={ref}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={classNames(cls.Input, {}, [className])}
      {...otherProps}
    />
  );
});
