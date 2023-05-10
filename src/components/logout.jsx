import { LogOut } from 'iconoir-react';
import { logout } from '~/firebase.js';

const Logout = () => {
  return (
    <button
      onClick={logout}
      className=" mb-5 mt-auto flex h-10 items-center gap-x-2 px-2 font-medium hover:rounded-full hover:bg-ocean-100 hover:text-primary-ocean hover:duration-300 hover:dark:bg-primary-light/10 md:px-4"
    >
      <LogOut />
    </button>
  );
};

export default Logout;
