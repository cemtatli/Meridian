import { Link } from 'react-router-dom';

export default function ProfileNotFound() {
  return (
    <div className="flex h-full items-center justify-center">
      <p className="text-lg font-medium text-thunder-700 dark:text-primary-light">
        There is no such account. Try another search.
      </p>
      <Link className="ml-2 font-medium text-primary-ocean hover:underline" to="/">
        Go back to Home.
      </Link>
    </div>
  );
}
