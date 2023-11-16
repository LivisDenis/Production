import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlock } from 'entities/Article/model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string
  data: ArticleTextBlock
}

export const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
  const {
    className,
    data,
  } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      <div className={cls.paragraphs}>
        {data.paragraphs.map((paragraph) => <p>{paragraph}</p>)}
      </div>
    </div>
  );
};
