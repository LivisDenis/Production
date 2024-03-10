import { ChangeEvent, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOptions<T extends string> {
    value: T
    content: string
}

interface SelectProps<T extends string> {
    className?: string
    readonly?: boolean
    label?: string
    value?: T
    options?: SelectOptions<T>[]
    onChange?: (value: T) => void
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className,
    value,
    onChange,
    options,
    readonly,
    label,
  } = props;

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  const optionsList = useMemo(() => options?.map((opt) => (
    <option key={opt.value} value={opt.value}>{opt.content}</option>
  )), [options]);

  return (
    <div className={cls.wrapper}>
      {label && <span className={cls.label}>{label}</span>}
      <select
        disabled={readonly}
        onChange={onChangeSelect}
        value={value}
        className={classNames(cls.Select, {}, [className])}
      >
        {optionsList}
      </select>
    </div>
  );
};
