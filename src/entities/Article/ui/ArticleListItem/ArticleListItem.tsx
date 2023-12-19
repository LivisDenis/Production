import { HTMLAttributeAnchorTarget } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Card } from 'shared/ui/Card/Card';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
  Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string
    view: ArticleView
    article: Article
    target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = (props: ArticleListItemProps) => {
  const {
    className,
    view,
    article,
    target,
  } = props;
  const { t } = useTranslation();

  const navigatePath = RoutePath.article_details + article.id;

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
        <Text title={article.title} className={cls.title} />
        {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} withoutTitleBlock />}
        <div className={cls.footer}>
          <AppLink target={target} to={navigatePath}>
            <Button theme={ButtonTheme.OUTLINE}>{t('Читать далее...')}</Button>
          </AppLink>
          <Text text={String(article.views)} />
        </div>
      </Card>
    );
  }

  return (
    <AppLink target={target} to={navigatePath}>
      <Card className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <img className={cls.image} src={article.img} alt={article.title} />
        <div className={cls.infoWrapper}>
          <Text className={cls.types} text={article.type.join(', ')} />
          <Text text={String(article.views)} />
        </div>
        <Text className={cls.title} text={article.title} />
      </Card>
    </AppLink>
  );
};
