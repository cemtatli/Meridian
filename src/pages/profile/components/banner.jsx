import Avatar from '~/components/avatar';
import UserProfile from './user-profile';

const Banner = () => {
  return (
    <>
      <div className="relative h-2/6 w-full rounded-xl bg-primary-ocean/50">
        <div className="absolute bottom-0 left-2.5 translate-y-2.5">
          <Avatar ring={true} />
        </div>
        <div className="absolute bottom-0 right-3/4">
          <UserProfile />
        </div>
      </div>
    </>
  );
};

export default Banner;
