import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { SidebarLinkList } from 'widgets/Sidebar/model/links';
import { SidebarLink } from 'widgets/Sidebar/ui/SidebarLink/SidebarLink';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => (
  <div data-testid="sidebar" className={classNames(cls.Sidebar, {}, [className])}>
    <div className={cls.links}>
      {SidebarLinkList.map((link) => <SidebarLink key={link.path} link={link} />)}
    </div>
  </div>
));
