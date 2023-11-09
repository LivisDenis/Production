import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    borderRadius?: number

}

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    src,
    size,
    borderRadius,
  } = props;

  const styles = useMemo<CSSProperties>(() => ({
    width: size || 155,
    height: size || 193,
    borderRadius: borderRadius || 0,
  }), [borderRadius, size]);

  return (
    <div className={classNames(cls.Avatar, {}, [className])}>
      <img style={styles} src={src} alt={src} />
    </div>
  );
};
