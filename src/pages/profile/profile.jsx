import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { getUserInfo } from '~/firebase.js';

import ProfileNotFound from './components/profile-not-found';
import { Helmet } from 'react-helmet';
import ProfileHeader from './components/profile-header';
import Loader from '~/components/loader';

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);
  const navigate = useNavigate();
  const { username } = useParams();

  useEffect(() => {
    setLoading(true);
    getUserInfo(username)
      .then(user => {
        setUser(user);
        setLoading(false);
      })
      .catch(err => {
        setUser(false);
        setLoading(false);
      });
  }, [username]);

  if (loading) {
    return <Loader />;
  }

  if (user === false) {
    return <ProfileNotFound />;
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
