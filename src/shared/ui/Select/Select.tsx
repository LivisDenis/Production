import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import { Currency } from 'entities/CurrencySelect';
import cls from './Select.module.scss';

interface SelectOptions {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    readonly?: boolean
    label?: string
    value?: Currency
    options?: SelectOptions[]
    onChange?: (value: string) => void
}

export const Select = (props: SelectProps) => {
  const {
    className,
    value,
    onChange,
    options,
    readonly,
    label,
  } = props;

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const optionsList = useMemo(() => options?.map((opt: SelectOptions) => (
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
