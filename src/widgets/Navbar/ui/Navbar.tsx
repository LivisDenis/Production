import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Modal } from 'shared/ui/Modal';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit.')}
        </Modal>
        <Button onClick={() => setIsOpen(true)} theme={ButtonTheme.BACKGROUND}>{t('Login')}</Button>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
