import { classNames } from 'shared/lib/classNames/classNames';
import { Listbox } from 'shared/ui/Popups';
import { Currency } from '../model/types/currency';

interface SelectCurrencyProps {
    className?: string
    label?: string
    onChange?: (value: Currency) => void
    value?: Currency
    readonly?: boolean
}

const options = [
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.UAH, content: Currency.UAH },
];

export const CurrencySelect = (props: SelectCurrencyProps) => {
  const {
    className,
    onChange,
    readonly,
    value,
    label,
  } = props;

  const onChangeCurrency = (value: Currency) => {
    onChange?.(value);
  };

  return (
    <Listbox
      className={classNames('', {}, [className])}
      onChange={onChangeCurrency}
      readonly={readonly}
      options={options}
      value={value}
      label={label}
      direction="top"
    />
  );
};
