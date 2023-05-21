import { Helmet } from 'react-helmet';

const Notifications = () => {
  return (
    <>
      <Helmet>
        <title>Meridian • Notifications</title>
      </Helmet>
      <div className="flex h-full w-full items-center justify-center px-4">
        <span className="text-center text-sm font-medium">
          There are no notifications yet. When a notification arrives, it will appear here.
        </span>
      </div>
    </>
  );
};

export default Notifications;
