import Post from '~/components/post';

const ForYou = () => {
  return (
    <div className="mb-16 flex h-full w-full flex-col items-center gap-y-5">
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default ForYou;
