import { useState } from 'react';
import Avatar from '~/components/avatar';

const ProfileHeader = ({ user }) => {
  const [activeTab, setActiveTab] = useState('tweets');

  return (
    <header className="flex w-full items-center justify-center gap-x-5 px-4 py-4 sm:py-8">
      <div>
        <div className="mb-4 flex w-full items-center gap-4">
          <Avatar src={user?.avatar} />
          <div className="flex flex-col">
            <h1 className="text-base font-semibold md:text-2xl">{user?.fullName}</h1>
            <p className="text-sm text-gray-600 dark:text-primary-light md:text-base">
              @{user?.username}
            </p>
          </div>
        </div>

        <nav className=" flex items-center justify-center gap-4 text-gray-600 dark:text-primary-light">
          <div className="mr-2 text-sm md:mr-8">
            <span className="font-semibold dark:text-primary-light">{user?.followers?.length}</span>{' '}
            followers
          </div>
          <div className="mr-2 text-sm md:mr-8">
            <span className="font-semibold dark:text-primary-light">{user?.following?.length}</span>{' '}
            following
          </div>
          <div className="mr-2 text-sm md:mr-8">
            <span className="font-semibold dark:text-primary-light">{user?.tweets?.length}</span>{' '}
            tweets
          </div>
        </nav>
        <div className="mt-4 text-sm text-gray-600 dark:text-primary-light">
          <div className="mb-2">
            Joined&nbsp;<span className="font-semibold">{user?.joinDate}</span>
          </div>
          <ul className="mt-4 flex border-b border-gray-200">
            <li
              className={`mr-8 cursor-pointer pb-2 ${
                activeTab === 'tweets' ? 'text-primary border-b-2 font-bold' : 'dark:text-gray-300'
              }`}
              onClick={() => setActiveTab('tweets')}
            >
              Tweets
            </li>
            <li
              className={`mr-8 cursor-pointer pb-2 ${
                activeTab === 'media' ? 'text-primary border-b-2 font-bold' : 'dark:text-gray-300'
              }`}
              onClick={() => setActiveTab('media')}
            >
              Media
            </li>
            <li
              className={`mr-8 cursor-pointer pb-2 ${
                activeTab === 'likes' ? 'text-primary border-b-2 font-bold' : 'dark:text-gray-300'
              }`}
              onClick={() => setActiveTab('likes')}
            >
              Likes
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
