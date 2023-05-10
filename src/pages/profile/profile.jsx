import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserInfo } from '~/firebase.js';
import Banner from './components/banner';
import UserProfile from './components/user-profile';

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

  return (
    <div className="">
      <Banner user={user} />
    </div>
  );
};

export default Profile;
