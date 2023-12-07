import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Card } from 'shared/ui/Card/Card';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
  Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string
    view: ArticleView
    article: Article
}

export const ArticleListItem = (props: ArticleListItemProps) => {
  const {
    className,
    view,
    article,
  } = props;
  const { t } = useTranslation();

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <Card className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <div className={cls.infoWrapper}>
          <div className={cls.author}>
            <Avatar size={30} src={article.user.avatar} />
            <Text className={cls.name} text={article.user.username} />
          </div>
          <Text text={article.createdAt} />
        </div>
        <img className={cls.image} src={article.img} alt={article.title} />
        {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
        <div className={cls.footer}>
          <Button theme={ButtonTheme.OUTLINE}>{t('Читать далее...')}</Button>
          <Text text={String(article.views)} />
        </div>
      </Card>
    );
  }

  return (
    <Card className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <img className={cls.image} src={article.img} alt={article.title} />
      <div className={cls.infoWrapper}>
        <Text className={cls.types} text={article.type.join(', ')} />
        <Text text={String(article.views)} />
      </div>
      <Text className={cls.title} text={article.title} />
    </Card>
  );
};
