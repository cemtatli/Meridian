import Avatar from '~/components/avatar';
import Banner from './banner';

// eslint-disable-next-line react/prop-types
const ProfileHeader = ({ user }) => {
  return (
    <div className="h-screen-64 w-full overflow-auto">
      <div className="flex h-full flex-col items-center">
        <Banner />
        <div className="flex h-fit w-full flex-col border-b border-thunder-100 px-4 py-5">
          <div className="flex items-center justify-center gap-y-0.5 md:justify-start">
            <Avatar ring={true} src={user?.avatar} />
          </div>
          <h2 className="pt-2 text-center text-lg font-bold text-primary-dark dark:text-white md:text-start md:text-2xl">
            {user?.fullName}
          </h2>
          <span className="text-center text-sm text-thunder-500 dark:text-thunder-600 md:text-start md:text-base">
            @{user?.username}
          </span>
          <span className="text-center text-sm text-thunder-500 dark:text-thunder-600 md:text-start md:text-base">
            {user?.bio}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
