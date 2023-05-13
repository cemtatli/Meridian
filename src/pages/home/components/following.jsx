import { Helmet } from 'react-helmet';

const Following = () => {
  return (
    <div className="flex h-screen-128 w-full items-center justify-center px-5">
      <Helmet>
        <title>Meridian • Following</title>
      </Helmet>
      <span className="text-center text-sm font-medium">
        You are not following someone yet, as they follow you will see relevant content here.
      </span>
    </div>
  );
};

export default Following;
