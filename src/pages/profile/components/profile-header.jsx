/* eslint-disable react/prop-types */
import Avatar from '~/components/avatar';
import TabMenu from './tab-menu';

const ProfileHeader = ({ user }) => {
  return (
    <div className="h-screen-64 w-full overflow-auto">
      <div className="flex h-full flex-col items-center">
        {/* ------ */}
        <div className="flex h-fit w-full flex-col gap-y-2 border-thunder-100 p-5 dark:border-opacity-20">
          <div className="w-full items-center justify-center">
            <div className="flex items-center justify-center gap-y-0.5 ">
              <Avatar ring={true} src={user?.avatar} />
            </div>
            <h2 className="pt-2 text-center text-lg font-bold text-primary-dark dark:text-white md:text-2xl">{user?.fullName}</h2>
            <div className="w-full text-center text-sm text-thunder-600  dark:text-white md:text-base">@{user?.username}</div>
            <div className="my-2.5 flex items-center justify-center text-sm">
              Joined&nbsp;<span className="font-semibold">{user?.joinDate}</span>
            </div>
          </div>

          <span className="text-center text-sm text-thunder-600  dark:text-white  md:text-base">{user?.bio}</span>
          {/* ------ */}

          {/* ------ */}
          <div className=" flex items-center justify-center gap-x-4">
            <div className="flex items-center gap-x-0.5">
              <span className="text-sm font-semibold text-gray-900 dark:text-white md:text-base">{user?.followers?.length}</span>
              <span className="text-sm text-thunder-700 dark:text-primary-light md:text-sm">followers</span>
            </div>
            <div className="flex items-center gap-x-0.5">
              <span className="text-sm font-semibold text-gray-900 dark:text-white md:text-base">{user?.following?.length}</span>
              <span className="text-sm text-thunder-700 dark:text-primary-light md:text-sm">following</span>
            </div>
            <div className="flex items-center gap-x-0.5">
              <span className="text-sm font-semibold text-gray-900 dark:text-white md:text-base">{user?.tweets?.length}</span>
              <span className="text-sm text-thunder-700 dark:text-primary-light md:text-sm">tweets</span>
            </div>
          </div>
          {/* ------ */}
          <TabMenu />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
