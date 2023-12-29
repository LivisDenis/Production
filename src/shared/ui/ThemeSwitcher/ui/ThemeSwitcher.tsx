import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import ThemeIcon from 'shared/assets/icons/theme.svg';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button } from '../../Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  const themeFill = theme === Theme.DARK ? '#FDFDFD' : '#252525';

  return (
    <Button onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
      <ThemeIcon fill={themeFill} fillRule="evenodd" />
    </Button>
  );
});
