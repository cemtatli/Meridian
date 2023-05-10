import { Community, MultiBubble, Search, UserLove, Flare } from 'iconoir-react';
import { Link } from 'react-router-dom';
import Button from '~/components/button';

const Presentation = [
  {
    icon: Search,
    desc: 'Explore Your Passions and Interests',
  },
  {
    icon: MultiBubble,
    desc: 'Join the Conversation',
  },
  {
    icon: UserLove,
    desc: 'Connect with Like-Minded People',
  },
  {
    icon: Flare,
    desc: 'Share Your Thoughts and Opinions',
  },
  {
    icon: Community,
    desc: 'Build Meaningful Connections',
  },
];

const LoginPresentation = () => {
  return (
    <section className="hidden w-1/2 flex-col items-center justify-center bg-gradient-to-bl from-ocean-500 via-ocean-400 to-ocean-700 text-white md:flex lg:w-3/5">
      <h3 className="mb-5 text-2xl font-bold tracking-tight">What is happening in the world?</h3>
      <nav className="flex w-4/5 flex-col gap-y-4">
        {Presentation.map((item, index) => (
          <div
            className="hover:scale- flex h-10 cursor-pointer items-center gap-x-4 rounded-xl bg-ocean-300 px-4 py-2 text-sm backdrop-opacity-80 transition-all duration-200 hover:bg-ocean-500"
            key={index}
          >
            <item.icon aria-hidden="true" height={24} width={24} />
            <span className={item.icon === UserLove ? 'font-semibold' : 'font-medium'}>
              {item.desc}
            </span>
          </div>
        ))}
        <Link to={'/auth/register'} className="mt-5">
          <Button>Join the Meridian Community Now</Button>
        </Link>
      </nav>
    </section>
  );
};

export default LoginPresentation;
