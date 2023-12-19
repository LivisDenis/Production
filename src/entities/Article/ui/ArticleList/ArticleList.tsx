import { HTMLAttributeAnchorTarget } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string
    articles?: Article[]
    view?: ArticleView
    isLoading?: boolean
    target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 5 : 3)
  .fill(0)
  .map((_, i) => <ArticleListItemSkeleton key={i} view={view} />);

export const ArticleList = (props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    target,
    view = ArticleView.SMALL,
  } = props;

  const renderArticle = (article: Article) => (
    <ArticleListItem key={article.id} target={target} article={article} view={view} />
  );

  return (
    <div className={classNames(cls.ArticleList, {}, [className])}>
      {articles?.length
        ? articles.map(renderArticle)
        : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
};
