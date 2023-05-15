import Logout from '~/components/logout';
import ThemeChanger from '~/components/theme-changer';

const Settings = () => {
  return (
    <div className="h-screen-64 w-full overflow-auto ">
      <div className="flex flex-col gap-y-2.5">
        <label className="flex h-10 w-full cursor-pointer items-center justify-start gap-x-2.5 border-b py-2">
          Theme Change
          <ThemeChanger />
        </label>
        <label className="flex h-10 w-full cursor-pointer items-center justify-start gap-x-2.5 border-b py-2">
          Log out
          <Logout />
        </label>
      </div>
    </div>
  );
};

export default Settings;
