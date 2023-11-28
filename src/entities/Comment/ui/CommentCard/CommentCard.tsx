import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
    className?: string
    comment: Comment
}

export const CommentCard = (props: CommentCardProps) => {
  const { className, comment } = props;

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <div className={cls.header}>
        {comment.user.avatar ? <Avatar className={cls.avatar} src={comment.user.avatar} size={30} /> : null}
        <Text subtitle={comment.user.username} />
      </div>
      <Text text={comment.text} />
    </div>
  );
};
