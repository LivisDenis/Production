import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOptions } from '@/shared/ui/Select/Select';
import { SortOrder } from '@/shared/types';
import { HStack } from '@/shared/ui/Stack';
import { ArticleSortField } from '../../model/consts/articleConsts';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string
    sort: ArticleSortField
    order: SortOrder
    onChangeOrder?: (newOrder: SortOrder) => void
    onChangeSort?: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
  const {
    className,
    onChangeSort,
    onChangeOrder,
    sort,
    order,
  } = props;
  const { t } = useTranslation('articles-page');

  const orderOptions = useMemo<SelectOptions<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('Возрастанию'),
    },
    {
      value: 'desc',
      content: t('Убыванию'),
    },
  ], [t]);

  const sortOptions = useMemo<SelectOptions<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.ALL,
      content: t('Все'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('Названию'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('Просмотрам'),
    },
    {
      value: ArticleSortField.CREATED_AT,
      content: t('Дате создания'),
    },
  ], [t]);

  return (
    <HStack gap="16" className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        label={t('Сортировать по')}
        onChange={onChangeOrder}
        value={order}
        options={orderOptions}
        className={cls.select}
      />
      <Select
        label={t('Сортировать по')}
        onChange={onChangeSort}
        value={sort}
        options={sortOptions}
        className={cls.select}
      />
    </HStack>
  );
};
