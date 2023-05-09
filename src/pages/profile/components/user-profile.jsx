const UserProfile = () => {
  const user = {
    user: 'Cem',
    username: '@cemtatli',
  };
  return (
    <div className="hidden flex-col items-start justify-center md:flex  ">
      <span className="ml-2 font-medium">{user.user}</span>
      <span className="ml-2 font-medium">{user.username}</span>
    </div>
  );
};

export default UserProfile;
