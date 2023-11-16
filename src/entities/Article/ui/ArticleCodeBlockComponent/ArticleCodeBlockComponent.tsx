import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string
  data: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
  const {
    className,
    data,
  } = props;

  return (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
      {data.code}
    </div>
  );
};
