import { useState } from 'react';
import TweetCard from './tweetcard';
import MediaTab from './media-tab';
import LikeMenu from './like-menu';

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState('tweets');
  return (
    <div className="mt-5">
      <ul className="flex w-full gap-x-6 border-b border-primary-dark border-opacity-10 text-sm dark:border-gray-200 dark:border-opacity-10">
        <li
          className={`cursor-pointer pb-2 ${
            activeTab === 'tweets' ? 'border-b-2 font-semibold text-blue-500' : 'border-opacity-20 dark:text-primary-light'
          }`}
          onClick={() => setActiveTab('tweets')}
        >
          Tweets
        </li>
        <li
          className={`cursor-pointer pb-2 ${
            activeTab === 'media' ? 'border-b-2 font-semibold text-blue-500' : 'border-opacity-20 dark:text-primary-light'
          }`}
          onClick={() => setActiveTab('media')}
        >
          Media
        </li>
        <li
          className={` cursor-pointer pb-2 ${
            activeTab === 'likes' ? 'border-b-2 font-semibold text-blue-500' : 'border-opacity-20 dark:text-primary-light'
          }`}
          onClick={() => setActiveTab('likes')}
        >
          Likes
        </li>
      </ul>
      <div className="pt-2.5 backdrop-blur">
        {activeTab === 'tweets' && <TweetCard />}
        {activeTab === 'media' && <MediaTab />}
        {activeTab === 'likes' && <LikeMenu />}
      </div>
    </div>
  );
};

export default TabMenu;
