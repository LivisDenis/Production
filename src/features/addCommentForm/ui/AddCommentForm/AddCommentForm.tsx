import { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { addCommentFromReducer } from 'features/addCommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { addCommentFromActions } from '../../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';

export interface AddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFromReducer,
};

const AddCommentForm = (props: AddCommentFormProps) => {
  const {
    className,
    onSendComment,
  } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useSelector(getAddCommentFormText) || '';

  const onChangeCommentText = useCallback((value: string) => {
    dispatch(addCommentFromActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    if (text) {
      onSendComment(text);
      onChangeCommentText('');
    }
  }, [onChangeCommentText, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input placeholder={t('Введите текст')} value={text} onChange={onChangeCommentText} className={cls.input} />
        <Button onClick={onSendHandler} className={cls.btn} theme={ButtonTheme.OUTLINE}>{t('Отправить')}</Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
