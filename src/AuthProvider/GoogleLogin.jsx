import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';

const GoogleLogin = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="bg-orange-500 px-3 py-5 w-full text-white"
      >
        Login with Google
      </button>
    </div>
  );
};

export default GoogleLogin;
