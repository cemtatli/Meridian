import Logout from '~/components/logout';
import ThemeChanger from '~/components/theme-changer';

const Settings = () => {
  return (
    <div className="h-screen-64 w-full overflow-auto ">
      <div className="flex w-full flex-col items-center justify-center">
        <h3 className="mb-5 py-2 text-lg font-bold text-primary-dark dark:text-primary-light">Settings</h3>
        <label className="flex w-full cursor-pointer items-center justify-center gap-x-2.5 border-b border-primary-dark border-opacity-20 py-2 text-sm dark:border-white dark:border-opacity-20">
          <ThemeChanger />
          Theme Change
        </label>
        <label className="flex h-10 w-full cursor-pointer items-center justify-center gap-x-2.5 border-b border-primary-dark border-opacity-20 py-2 text-sm dark:border-white dark:border-opacity-20">
          <Logout />
          Log out
        </label>
        <span className="flex h-10 w-full cursor-pointer items-center justify-center gap-x-2.5 border-b border-primary-dark border-opacity-20 py-2 text-sm dark:border-white dark:border-opacity-20">
          Edit Bio
        </span>
      </div>
    </div>
  );
};

export default Settings;
