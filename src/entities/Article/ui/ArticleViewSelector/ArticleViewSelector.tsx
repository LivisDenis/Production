import { classNames } from 'shared/lib/classNames/classNames';
import TiledIcon from 'shared/assets/icons/icon-tiled.svg';
import ListIcon from 'shared/assets/icons/icon-list.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '../../model/types/article';

interface ArticleViewSelectorProps {
    className?: string
    view: ArticleView
    onViewClick: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    Icon: TiledIcon,
  },
  {
    view: ArticleView.BIG,
    Icon: ListIcon,
  },
];

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
  const {
    className,
    onViewClick,
    view,
  } = props;

  const onClick = (view: ArticleView) => () => {
    onViewClick(view);
  };

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button key={viewType.view} theme={ButtonTheme.CLEAR} onClick={onClick(viewType.view)} className={cls.btn}>
          <viewType.Icon className={classNames('', { [cls.noSelected]: viewType.view !== view }, [])} />
        </Button>
      ))}
    </div>
  );
};
