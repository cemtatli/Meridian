import { Helmet } from 'react-helmet';

import { Outlet } from 'react-router-dom';
import TabMenu from './components/tabmenu';

const HomeLayout = () => {
  return (
    <>
      <Helmet>
        <title>Meridian</title>
      </Helmet>
      <TabMenu />
      <div className="overflow-auto over">
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
