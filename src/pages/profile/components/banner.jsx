import Avatar from '~/components/avatar';
import UserProfile from './user-profile';

const Banner = ({ user }) => {
  return (
    <>
      <div className="relative h-32 w-full bg-primary-ocean/40 md:h-72">
        <div className="absolute bottom-0 left-2.5 translate-y-2.5">
          <Avatar ring={true} />
        </div>
        <UserProfile user={user} />
      </div>
    </>
  );
};

export default Banner;
