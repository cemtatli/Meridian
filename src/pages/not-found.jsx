import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-y-5">
      <h1 className="text-center text-3xl font-bold text-thunder-800 dark:text-white">Oops! Page not found</h1>
      <p className="-mt-2.5 text-center font-medium text-thunder-500 dark:text-thunder-400">
        The page you are looking for doesn&apos;t exist.
      </p>
      <Link to="/" className="text-primary-ocean font-semibold">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
