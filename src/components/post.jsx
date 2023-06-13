import { Reply, Heart, ChatBubble } from 'iconoir-react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { username } = useParams();

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
    <div className="flex w-full items-center justify-center">
      <div className="flex h-full w-full max-w-sm flex-col rounded-lg border border-gray-200 shadow dark:border-opacity-10  md:max-w-screen-md">
        <div className="p-4">
          <div className="flex items-center">
            <img className="h-10 w-10 rounded-full" src="./default-avatar.png" alt="Profil Fotoğrafı" />
            <div className="ml-3">
              <span className="text-sm font-bold">{username}</span>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-lg">Bu bir örnek tweettir.</p>
          </div>
          <div className="mt-16 flex justify-between">
            <div className="flex items-center text-sm text-red-500">
              <Heart className="mr-1 h-5 w-5 cursor-pointer" onClick={handleLike} />
              <span>{likeCount}</span>
            </div>
            <div className="flex items-center text-sm text-blue-500">
              <ChatBubble className="mr-1 h-5 w-5 cursor-pointer" onClick={handleComment} />
              <span>{commentCount}</span>
            </div>
            <div className="flex items-center text-sm text-green-500">
              <Reply className="mr-1 h-5 w-5 cursor-pointer" onClick={handleRetweet} />
              <span>{retweetCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
