import { Helmet } from 'react-helmet';
import Post from '~/components/post';

const Following = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-start overflow-auto px-5">
      <Helmet>
        <title>Meridian • Following</title>
      </Helmet>
      <Post />
    </div>
  );
};

export default Following;
