import {
  InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>{
    className?: string
    onChange?: (value: string) => void
    value?: string | number
    autofocus?: boolean
    label?: string
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    onChange,
    value,
    autofocus,
    label,
    type = 'text',
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  return (
    label
      ? (
        <div className={cls.wrapper}>
          <span className={cls.label}>{label}</span>
          <input
            ref={ref}
            type={type}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className={classNames(cls.Input, {}, [className])}
            {...otherProps}
          />
        </div>
      )
      : (
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className={classNames(cls.Input, {}, [className])}
          {...otherProps}
        />
      )
  );
});
