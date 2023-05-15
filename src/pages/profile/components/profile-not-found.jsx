import { Link } from 'react-router-dom';

export default function ProfileNotFound() {
  return (
    <div className="flex h-screen-64 flex-col items-center justify-center">
      <p className="text-center text-base font-medium text-thunder-700  dark:text-primary-light md:text-lg">
        There is no such account. Try another search.
      </p>
      <Link className=" text-primary-ocean mt-2.5 text-sm font-medium hover:underline md:text-base" to="/">
        Go back to Home.
      </Link>
    </div>
  );
}
