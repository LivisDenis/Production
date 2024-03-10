import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/icon-copy.svg';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string
  code: string
}

export const Code = (props: CodeProps) => {
  const {
    className,
    code,
  } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(code);
  }, [code]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button onClick={onCopy} theme={ButtonTheme.CLEAR} className={cls.copyBtn}>
        <CopyIcon />
      </Button>
      <code>{code}</code>
    </pre>
  );
};
