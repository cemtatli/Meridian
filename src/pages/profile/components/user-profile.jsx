// eslint-disable-next-line react/prop-types
const UserProfile = ({ user }) => {
  return (
    <div className="absolute left-5 flex translate-y-5 flex-col items-start">
      <div className="text-lg"> {user?.fullName}</div>
    </div>
  );
};

export default UserProfile;
