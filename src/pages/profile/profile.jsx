import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { getUserInfo } from '~/firebase.js';

import ProfileNotFound from './components/profile-not-found';
import { Helmet } from 'react-helmet';
import ProfileHeader from './components/profile-header';

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);
  const navigate = useNavigate();
  const { username } = useParams();

  useEffect(() => {
    getUserInfo(username)
      .then(user => {
        setUser(user);
      })
      .catch(err => {
        setUser(false);
      });
  }, [username]);

  if (user === false) {
    return <ProfileNotFound />;
  }

  if (user === null) {
    return <div>Loading...</div>;
  }

  return (
    user && (
      <div>
        <Helmet>
          <title>
            {user.fullName} (@{user.username}) • Meridian
          </title>
        </Helmet>
        {<ProfileHeader user={user} />}
        <Outlet />
      </div>
    )
  );
};

export default Profile;
