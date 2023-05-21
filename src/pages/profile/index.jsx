import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserInfo } from '~/firebase.js';
import ProfileNotFound from './components/profile-not-found';
import { Helmet } from 'react-helmet';
import ProfileHeader from './components/profile-header';
import Loader from '~/components/loader';

const ProfileLayout = () => {
  const [user, setUser] = useState(null);
  const { username } = useParams();

  useEffect(() => {
    getUserInfo(username)
      .then((user) => {
        setUser(user);
      })
      .catch(() => {
        setUser(false);
      });
  }, [username]);

  console.log(user);
  if (user === false) {
    return <ProfileNotFound />;
  }

  if (user === null) {
    return <Loader />;
  }

  return (
    <div className="w-full">
      <Helmet>
        <title>
          {user.fullName} (@{user.username}) • Meridian
        </title>
      </Helmet>
      <ProfileHeader user={user} />
    </div>
  );
};

export default ProfileLayout;
