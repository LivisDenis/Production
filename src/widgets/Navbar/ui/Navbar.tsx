import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Modal } from 'shared/ui/Modal';
import { Portal } from 'shared/ui/Portal/Portal';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
        <Portal>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit.')}
          </Modal>
        </Portal>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
