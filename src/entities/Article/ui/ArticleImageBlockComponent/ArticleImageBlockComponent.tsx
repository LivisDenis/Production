import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string
  data: ArticleImageBlock
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
  const {
    className,
    data,
  } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      {data.title}
    </div>
  );
};
