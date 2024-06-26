import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text } from '@/shared/ui/Text';

import { ArticleView, ArticleBlockType } from '../../model/consts/articleConsts';
import type { Article, ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  view: ArticleView;
  article: Article;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, view, article, target } = props;
  const { t } = useTranslation();

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    return (
      <Card className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <div className={cls.infoWrapper}>
          <div className={cls.author}>
            <Avatar size={30} src={article.user.avatar} />
            <Text className={cls.name} text={article.user.username} />
          </div>
          <Text text={article.createdAt} />
        </div>
        <AppImage
          fallback={<Skeleton height={200} width='100%' />}
          className={cls.image}
          src={article.img}
          alt={article.title}
        />
        <Text title={article.title} className={cls.title} />
        {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} withoutTitleBlock />}
        <div className={cls.footer}>
          <AppLink target={target} to={getRouteArticleDetails(article.id)}>
            <Button theme={ButtonTheme.OUTLINE}>{t('Читать далее...')}</Button>
          </AppLink>
          <Text text={String(article.views)} />
        </div>
      </Card>
    );
  }

  return (
    <AppLink target={target} to={getRouteArticleDetails(article.id)}>
      <Card className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <AppImage
          fallback={<Skeleton height={153} width='100%' />}
          className={cls.image}
          src={article.img}
          alt={article.title}
        />
        <div className={cls.infoWrapper}>
          <Text className={cls.types} text={article.type.join(', ')} />
          <Text text={String(article.views)} />
        </div>
        <Text className={cls.title} text={article.title} />
      </Card>
    </AppLink>
  );
});
