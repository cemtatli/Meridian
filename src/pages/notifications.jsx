import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { getNotifications } from '~/firebase';

const Notifications = () => {
  const [notifications, setNotifications] = useState(null);

  useEffect(() => {
    getNotifications(notifications)
      .then((notifications) => {
        setNotifications(notifications);
      })
      .catch(() => {
        setNotifications(false);
      });
  }, [notifications]);

  return (
    <>
      <Helmet>
        <title>Meridian • Notifications</title>
      </Helmet>
      <div className="flex h-full w-full items-center justify-center px-4">
        {notifications?.notifications?.length === 0 ? (
          <span className="text-center text-sm font-medium">
            There are no notifications yet. When a notification arrives, it will appear here.
          </span>
        ) : (
          ////
          <ul>
            {notifications?.notifications?.map((notification) => (
              <li key={notification.id}>{notification.message}</li>
            ))}
          </ul>
        )}
        <span className="text-center text-sm font-medium">
          There are no notifications yet. When a notification arrives, it will appear here.
        </span>
      </div>
    </>
  );
};

export default Notifications;
