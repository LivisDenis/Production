import { FC, lazy } from 'react';
import { AddCommentFormProps } from 'features/addCommentForm/ui/AddCommentForm/AddCommentForm';

export const AddCommentFormLazy = lazy<FC<AddCommentFormProps>>(() => new Promise((res) => {
  // @ts-ignore
  setTimeout(() => res(import('./AddCommentForm')), 800);
}));
