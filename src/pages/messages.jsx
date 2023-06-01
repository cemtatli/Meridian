import { Helmet } from 'react-helmet';

const Messages = () => {
  return (
    <>
      <Helmet>
        <title>Meridian • Messages</title>
      </Helmet>
      <div className="flex h-screen w-full items-center justify-center">
        <span className="text-center text-sm font-medium">
          You don&apos;t have any messages yet. When you receive a message, it will appear here.
        </span>
      </div>
    </>
  );
};

export default Messages;
