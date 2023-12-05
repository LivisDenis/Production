import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { SidebarLink } from 'widgets/Sidebar/ui/SidebarLink/SidebarLink';
import { getSidebarLinks } from 'widgets/Sidebar/model/selectors/getSidebarLinks';
import { useSelector } from 'react-redux';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const sidebarLinks = useSelector(getSidebarLinks);

  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, {}, [className])}>
      <div className={cls.links}>
        {sidebarLinks.map((link) => <SidebarLink key={link.path} link={link} />)}
      </div>
    </div>
  );
});
