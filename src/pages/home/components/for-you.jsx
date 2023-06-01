import Post from '~/components/post';

const ForYou = () => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-y-5 p-5">
      <Post />
      <Post />
    </div>
  );
};

export default ForYou;
