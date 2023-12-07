import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from 'entities/Article';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string
    articles?: Article[]
    view?: ArticleView
    isLoading?: boolean
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 10 : 3)
  .fill(0)
  .map((_, i) => <ArticleListItemSkeleton key={i} view={view} />);

export const ArticleList = (props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
  } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className])}>
        {getSkeletons(view)}
      </div>
    );
  }

  const renderArticle = (article: Article) => (
    <ArticleListItem article={article} view={view} />
  );

  return (
    <div className={classNames(cls.ArticleList, {}, [className])}>
      {articles?.length
        ? articles.map(renderArticle)
        : null}
    </div>
  );
};
