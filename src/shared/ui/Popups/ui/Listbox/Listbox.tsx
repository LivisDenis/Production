import { ReactNode } from 'react';
import { Listbox as ListMenu } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '../../../Stack';
import cls from './Listbox.module.scss';

export interface ListboxOption<T extends string> {
  value: T
  content: ReactNode
}

type OptionsDirection = 'top' | 'bottom'

interface ListboxProps<T extends string> {
  className?: string
  options?: ListboxOption<T>[]
  readonly?: boolean
  onChange?: (value: T) => void
  direction?: OptionsDirection
  label?: string
  value?: T
}

const optionsDirectionClass: Record<OptionsDirection, string> = {
  top: cls.optionsTop,
  bottom: cls.optionsBottom,
};

export const Listbox = <T extends string>(props: ListboxProps<T>) => {
  const {
    className,
    options,
    readonly,
    onChange,
    label,
    value,
    direction = 'bottom',
  } = props;

  return (
    <div className={classNames('', {}, [className])}>
      <ListMenu disabled={readonly} value={value} onChange={onChange}>
        <VStack gap="0">
          {label && <span className={cls.label}>{label}</span>}
          <div className={cls.optionsWrapper}>
            <ListMenu.Button className={cls.btn}>{value}</ListMenu.Button>
            <ListMenu.Options className={classNames(cls.options, {}, [optionsDirectionClass[direction]])}>
              {options?.map((person) => (
                <ListMenu.Option
                  key={person.value}
                  value={person.value}
                >
                  {({ active }) => (
                    <p
                      className={classNames(cls.option, {
                        [cls.activeOption]: active,
                      }, [])}
                    >
                      {person.content}
                    </p>
                  )}
                </ListMenu.Option>
              ))}
            </ListMenu.Options>
          </div>
        </VStack>
      </ListMenu>
    </div>
  );
};
