import { Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import AppRouter from 'app/providers/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <div className="content-page">
          <Sidebar />
          <div className="page-wrapper">
            <Navbar />
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
