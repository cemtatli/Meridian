import Avatar from '~/components/avatar';
import UserProfile from './user-profile';

const Banner = () => {
  return (
    <>
      <div className="relative h-[280px] w-full rounded-xl bg-zinc-300">
        <div className="absolute bottom-0 left-2.5 translate-y-5 ">
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
