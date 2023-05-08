import { Outlet } from 'react-router-dom';

import Sidebar from '~/components/sidebar';
import Header from '~/components/header';

const MainLayout = () => {
  return (
    <main>
      <section className="flex w-full items-start justify-center">
        <div className="flex w-full flex-col">
          <Header />
          <div className="h-screen-64 overflow-auto p-4 pb-0">
            <Outlet />
          </div>
        </div>
        <Sidebar />
      </section>
    </main>
  );
};

export default MainLayout;
