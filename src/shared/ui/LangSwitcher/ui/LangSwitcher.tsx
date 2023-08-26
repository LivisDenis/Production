import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const onToggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button onClick={onToggle} className={classNames('', {}, [className])}>
      {t('Язык')}
    </Button>
  );
};
