import { Outlet } from 'react-router-dom';

import Sidebar from '~/components/sidebar';
import Header from '~/components/header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="mx-auto flex h-screen max-w-screen-2xl">
        <Sidebar />
        <div className="h-screen w-full flex-1 overflow-y-auto px-4">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
