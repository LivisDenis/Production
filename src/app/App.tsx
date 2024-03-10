import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import AppRouter from '@/app/providers/router/ui/AppRouter';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, userActions } from '@/entities/User';

const App = () => {
  const inited = useSelector(getUserInited);
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.className = theme;
    dispatch(userActions.initAuthData());

    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <div className="wrapper">
          <Sidebar />
          <div className="page-wrapper">
            <Navbar />
            {inited && <AppRouter />}
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
