import { LogOut } from 'iconoir-react';
import { logout } from '~/firebase.js';

const Logout = () => {
  return (
    <button title="logout" onClick={logout}>
      <LogOut />
    </button>
  );
};

export default Logout;
