import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { addCommentFromActions, addCommentFromReducer } from '../../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFromReducer,
};

const AddCommentForm = (props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useSelector(getAddCommentFormText) ?? '';

  const onChangeCommentText = useCallback(
    (value: string) => {
      dispatch(addCommentFromActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text);
    onChangeCommentText('');
  }, [onChangeCommentText, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input placeholder={t('Введите текст')} value={text} onChange={onChangeCommentText} className={cls.input} />
        <Button onClick={onSendHandler} className={cls.btn} theme={ButtonTheme.OUTLINE}>
          {t('Отправить')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
