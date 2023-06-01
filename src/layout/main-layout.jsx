import { Outlet } from 'react-router-dom';
import Navbar from '~/components/navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="m-auto flex h-full w-full max-w-screen-2xl flex-col ">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
