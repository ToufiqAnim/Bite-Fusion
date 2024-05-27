import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.config.js';

const UserInfo = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className="p-8 container border border-gray-200 rounded-lg shadow-lg mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex  mb-6 md:mb-0">
          <div className="avatar">
            <div className="bg-neutral text-neutral-content rounded-full w-32 h-32">
              {user?.photoURL ? (
                <img
                  src={user?.photoURL}
                  alt="User"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <span className="text-xs text-center">{user?.displayName}</span>
              )}
            </div>
          </div>
        </div>
        <div className="text-center md:text-left md:col-span-2">
          <h2 className="text-2xl font-bold">{user?.displayName}</h2>
          <p className="text-gray-500 mb-4">Frontend Developer</p>
          <div className="text-gray-600">
            <p>Email: {user?.email}</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
