import { Link } from 'react-router-dom';
import Button from '~/components/button';

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-50 px-5 dark:bg-gray-900">
      <h1 className="mb-4 text-center text-4xl font-bold text-gray-700 dark:text-white">
        Oops! Page not found
      </h1>
      <p className="mb-8 text-center  font-medium text-gray-500 dark:text-gray-400">
        The page you are looking for doesn&apos;t exist.
      </p>
      <Link to="/">
        <Button size="h-10">Go to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
