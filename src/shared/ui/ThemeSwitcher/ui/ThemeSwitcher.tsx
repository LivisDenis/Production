import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import ThemeIcon from 'shared/assets/icons/theme.svg';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
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
