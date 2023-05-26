import { Link } from 'react-router-dom';
import Button from '~/components/button';

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-y-5">
      <h1 className="text-center text-2xl font-bold text-thunder-800 dark:text-white">Oops! Page not found</h1>
      <p className="-mt-2.5 text-center text-sm font-medium text-thunder-500 dark:text-thunder-400">
        The page you are looking for doesn&apos;t exist.
      </p>
      <Link to="/" className="text-primary-ocean text-sm font-semibold">
        <Button size={'h-8'} className="text-sm">
          Go to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
