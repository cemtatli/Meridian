import { Outlet } from 'react-router-dom';
import Navbar from '~/components/navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main className="m-auto flex w-full max-w-screen-2xl flex-col ">
        <div className="h-screen-64">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
