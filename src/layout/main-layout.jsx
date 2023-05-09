import { Outlet } from 'react-router-dom';

import Sidebar from '~/components/sidebar';
import Header from '~/components/header';

const MainLayout = () => {
  return (
    <main>
      <Header />
      <section className="flex w-full items-start justify-center">
        <Sidebar />
        <div className="flex h-screen w-full flex-col overflow-auto p-4 pb-0">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default MainLayout;
