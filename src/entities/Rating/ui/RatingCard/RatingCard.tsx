import { useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Drawer } from '@/shared/ui/Drawer';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { HStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Text, TextAlign } from '@/shared/ui/Text';

import cls from './RatingCard.module.scss';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  rate?: number;
  onAccept?: (rate: number, feedback?: string) => void;
  onCancel?: (rate: number) => void;
}

export const RatingCard = (props: RatingCardProps) => {
  const { className, title, feedbackTitle, rate = 0, onAccept, onCancel, hasFeedback = true } = props;
  const { t } = useTranslation();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [starsCount, setStarsCount] = useState(rate);

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const onSelectStars = (star: number) => {
    setStarsCount(star);

    if (hasFeedback) {
      setIsOpenModal(true);
    } else {
      onAccept?.(star);
    }
  };

  const acceptHandler = () => {
    if (feedback) {
      onCloseModal();
      onAccept?.(starsCount, feedback);
    }
  };

  const cancelHandler = () => {
    onCloseModal();
    onCancel?.(starsCount);
  };

  return (
    <Card className={classNames(cls.RatingCard, {}, [className])}>
      <Text title={starsCount ? t('Спасибо за оценку!') : title} align={TextAlign.CENTER} className={cls.title} />
      <StarRating onSelectStar={onSelectStars} star={starsCount} />
      <BrowserView>
        <Modal isOpen={isOpenModal} onClose={onCloseModal} lazy>
          <Text align={TextAlign.CENTER} title={feedbackTitle} />
          <Input value={feedback} onChange={setFeedback} placeholder={t('Оставьте свой отзыв')} className={cls.input} />
          <HStack justify='end' gap='16'>
            <Button onClick={cancelHandler} theme={ButtonTheme.OUTLINE}>
              {t('Закрыть')}
            </Button>
            <Button onClick={acceptHandler}>{t('Отправить')}</Button>
          </HStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer onClose={cancelHandler} isOpen={isOpenModal}>
          <Text align={TextAlign.CENTER} title={feedbackTitle} />
          <Input value={feedback} onChange={setFeedback} placeholder={t('Оставьте свой отзыв')} className={cls.input} />
          <Button max onClick={acceptHandler} className={cls.mobileBtn}>
            {t('Отправить')}
          </Button>
        </Drawer>
      </MobileView>
    </Card>
  );
};
