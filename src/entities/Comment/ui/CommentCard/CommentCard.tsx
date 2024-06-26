import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';

import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment: Comment;
}

export const CommentCard = (props: CommentCardProps) => {
  const { className, comment } = props;

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink to={getRouteProfile(String(comment.user.id))} className={cls.header}>
        {comment.user.avatar ? <Avatar className={cls.avatar} src={comment.user.avatar} size={30} /> : null}
        <Text subtitle={comment.user.username} />
      </AppLink>
      <Text text={comment.text} />
    </div>
  );
};
