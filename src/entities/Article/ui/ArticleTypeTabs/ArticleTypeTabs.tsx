import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/consts/articleConsts';

interface ArticleTypeTabsProps {
    className?: string
    onChangeTab: (tab: ArticleType) => void
    type: ArticleType
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
  const {
    className,
    onChangeTab,
    type,
  } = props;
  const { t } = useTranslation('articles-page');

  const typesTab = useMemo<TabItem<ArticleType>[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('Все'),
    },
    {
      value: ArticleType.IT,
      content: t('Айти'),
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('Экономика'),
    },
    {
      value: ArticleType.POLITICS,
      content: t('Политика'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t('Наука'),
    },
  ], [t]);

  return (
    <Tabs
      value={type}
      tabs={typesTab}
      onClickTab={onChangeTab}
      className={classNames('', {}, [className])}
    />
  );
};
