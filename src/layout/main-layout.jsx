import { Outlet } from 'react-router-dom';
import Navbar from '~/components/navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="m-auto flex  h-screen w-full max-w-screen-2xl flex-col border-ocean-950 border-opacity-10 bg-transparent backdrop-blur-xl dark:border-white dark:border-opacity-10 md:static md:gap-x-16 md:border md:border-t-0 md:border-transparent">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
