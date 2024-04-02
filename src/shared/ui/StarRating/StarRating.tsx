import { useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import StarIcon from '../../assets/icons/icon-star.svg';
import { HStack } from '../Stack';
import cls from './StarRating.module.scss';

interface StarRatingProps {
  className?: string;
  onSelectStar?: (star: number) => void;
  star?: number;
  size?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = (props: StarRatingProps) => {
  const { className, size = 30, star = 0, onSelectStar } = props;
  const [starHover, setStarHover] = useState(star);
  const [starSelected, setStarSelected] = useState(Boolean(star));

  const onRatingClick = (starsCount: number) => () => {
    if (!starSelected) {
      setStarSelected(true);
      onSelectStar?.(starsCount);
      setStarHover(starsCount);
    }
  };

  const onEnter = (starsCount: number) => () => {
    if (!starSelected) {
      setStarHover(starsCount);
    }
  };

  const onLeave = () => {
    if (!starSelected) {
      setStarHover(0);
    }
  };

  return (
    <HStack gap='0' justify='center' className={classNames(cls.StarRating, {}, [className])}>
      {stars.map((star) => (
        <StarIcon
          key={star}
          onClick={onRatingClick(star)}
          onMouseEnter={onEnter(star)}
          onMouseLeave={onLeave}
          className={starSelected ? cls.starSelected : cls.starHover}
          fill={star <= starHover ? '#FFC107' : '#E8E8E8'}
          width={size}
          height={size}
        />
      ))}
    </HStack>
  );
};
