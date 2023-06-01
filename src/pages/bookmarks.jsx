import { Helmet } from 'react-helmet';

const Bookmarks = () => {
  return (
    <>
      <Helmet>
        <title>Meridian • Bookmarks</title>
      </Helmet>
      <div className="flex h-screen w-full items-center justify-center">
        <span className="text-center text-sm font-medium">
          You don&apos;t have any bookmarked posts yet. When you bookmark one, it will show up here.
        </span>
      </div>
    </>
  );
};

export default Bookmarks;
