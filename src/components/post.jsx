import { Reply, Heart } from 'iconoir-react';
import { useState } from 'react';

const Post = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [retweetCount, setRetweetCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleRetweet = () => {
    setRetweetCount(retweetCount + 1);
  };

  const handleComment = () => {
    setCommentCount(commentCount + 1);
  };

  return (
    <div className="flex h-[200px] w-full items-center justify-center">
      <div className="flex h-full w-full max-w-sm flex-col rounded-lg border border-gray-200 bg-white shadow md:max-w-screen-md">
        <div className="p-4">
          <div className="flex items-center">
            <img className="h-10 w-10 rounded-full" src="https://placekitten.com/100/100" alt="Profil Fotoğrafı" />
            <div className="ml-3">
              <span className="text-sm font-bold">Kullanıcı Adı</span>
              <span className="text-sm text-gray-500">‧ Zaman</span>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-lg">Bu bir örnek tweettir.</p>
          </div>
          <div className="mt-16 flex justify-between">
            <div className="flex items-center text-sm text-red-500">
              <Heart className="mr-1 h-4 w-4 cursor-pointer" onClick={handleLike} />
              <span>{likeCount}</span>
            </div>
            <div className="flex items-center text-sm text-blue-500">
              <Reply className="mr-1 h-4 w-4 cursor-pointer" onClick={handleComment} />
              <span>{commentCount}</span>
            </div>
            <div className="flex items-center text-sm text-green-500">
              <Reply className="mr-1 h-4 w-4 cursor-pointer" onClick={handleRetweet} />
              <span>{retweetCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
