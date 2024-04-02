import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getRouteArticleCreate } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { VStack } from '@/shared/ui/Stack';

import { getSidebarLinks } from '../../model/selectors/getSidebarLinks';
import { SidebarLink } from '../SidebarLink/SidebarLink';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const sidebarLinks = useSelector(getSidebarLinks);
  const { t } = useTranslation();

  const linkList = useMemo(
    () => sidebarLinks.map((link) => <SidebarLink key={link.path} link={link} />),
    [sidebarLinks],
  );

  return (
    <VStack justify='between' data-testid='sidebar' className={classNames(cls.Sidebar, {}, [className])}>
      <VStack align='start' gap='8' max>
        {linkList}
      </VStack>
      <AppLink className={cls.create} theme={AppLinkTheme.PRIMARY} to={getRouteArticleCreate()}>
        {t('Создать статью')}
      </AppLink>
    </VStack>
  );
});
