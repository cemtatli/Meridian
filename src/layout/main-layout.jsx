import { Outlet } from 'react-router-dom';
import Header from '~/components/header';

import Sidebar from '~/components/sidebar';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="m-auto flex h-screen-64 w-full max-w-screen-2xl ">
        <div className="col-span-2 grid h-full w-full overflow-auto">
          <Outlet />
        </div>
        <Sidebar />
      </main>
    </>
  );
};

export default MainLayout;
