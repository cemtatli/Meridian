import Avatar from '~/components/avatar';
import TaBMenu from './tab-menu';

const ProfileHeader = ({ user }) => {
  return (
    <div className="px-4 py-5 sm:px-6 md:py-4 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center justify-center gap-2 text-center md:mb-0 md:flex-row md:justify-between">
          <Avatar src={user?.avatar} />
          <div className="ml-4">
            <h2 className="text-center text-lg font-bold text-gray-900 dark:text-white md:text-2xl">
              {user?.fullName}
            </h2>
            <p className="text-center text-sm text-thunder-500 dark:text-gray-400 md:text-base">
              @{user?.username}
            </p>
          </div>
        </div>
        <div className="flex items-center md:mt-0">
          <div className="mr-4">
            <span className="text-sm font-semibold text-gray-900 dark:text-white md:text-base">
              {user?.followers?.length}
            </span>
            <span className="text-xs text-thunder-500 dark:text-primary-light md:text-sm">
              {' '}
              followers
            </span>
          </div>
          <div className="mr-4">
            <span className="text-sm font-semibold text-gray-900 dark:text-white md:text-base">
              {user?.following?.length}
            </span>
            <span className="text-xs text-thunder-500 dark:text-primary-light md:text-sm">
              {' '}
              following
            </span>
          </div>
          <div>
            <span className="text-sm font-semibold text-gray-900 dark:text-white md:text-base">
              {user?.tweets?.length}
            </span>
            <span className="text-xs text-thunder-500 dark:text-primary-light md:text-sm">
              {' '}
              tweets
            </span>
          </div>
        </div>
        <div className="text-sm">
          Joined&nbsp;<span className="font-semibold">{user?.joinDate}</span>
        </div>
      </div>
      <div className="mt-8 md:mt-12">
        <TaBMenu />
      </div>
    </div>
  );
};

export default ProfileHeader;
