import { useState } from 'react';

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState('tweets');
  return (
    <div className="mt-8 text-sm md:mt-12">
      <ul className="flex gap-4 border-b border-gray-200">
        <li
          className={`cursor-pointer pb-2 ${
            activeTab === 'tweets' ? 'border-b-2 font-semibold text-blue-500' : 'text-thunder-500'
          }`}
          onClick={() => setActiveTab('tweets')}
        >
          Tweets
        </li>
        <li
          className={`cursor-pointer pb-2 ${
            activeTab === 'media' ? 'border-b-2 font-semibold text-blue-500' : 'text-thunder-500'
          }`}
          onClick={() => setActiveTab('media')}
        >
          Media
        </li>
        <li
          className={` cursor-pointer pb-2 ${
            activeTab === 'likes' ? 'border-b-2 font-semibold text-blue-500' : 'text-thunder-400'
          }`}
          onClick={() => setActiveTab('likes')}
        >
          Likes
        </li>
      </ul>
      <div className="mt-8">
        {activeTab === 'tweets' && <div>Burada kullanıcının tweetlerini görüntüleyebilirsiniz</div>}
        {activeTab === 'media' && <div> Burada kullanıcının medyasını görüntüleyebilirsiniz</div>}
        {activeTab === 'likes' && <div>Burada kullanıcının beğenilerini görüntüleyebilirsiniz</div>}
      </div>
    </div>
  );
};

export default TabMenu;
