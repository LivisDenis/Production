import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem<T extends string> {
    value: T
    content: string
}

interface TabsProps<T extends string> {
    className?: string
    tabs: TabItem<T>[]
    value: T
    onClickTab: (tab: T) => void
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const {
    className,
    tabs,
    value,
    onClickTab,
  } = props;

  const onChangeTab = (tab: T) => () => onClickTab(tab);

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          theme={value === tab.value ? CardTheme.NORMAL : CardTheme.OUTLINE}
          className={cls.tab}
          key={tab.value}
          onClick={onChangeTab(tab.value)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
