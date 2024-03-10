import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string
    block: ArticleTextBlock
    withoutTitleBlock?: boolean
}

export const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
  const {
    className,
    block,
    withoutTitleBlock,
  } = props;

  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      {(block.title && !withoutTitleBlock) && <Text title={block.title} className={cls.title} />}
      <div className={cls.paragraphs}>
        {block.paragraphs.map((paragraph) => <Text key={paragraph} text={paragraph} />)}
      </div>
    </div>
  );
};
