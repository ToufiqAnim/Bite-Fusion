import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';
import { useNavigate } from 'react-router-dom';
const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="bg-orange-500 px-3 py-5 w-full"
      >
        Login with Google
      </button>
    </div>
  );
};

export default GoogleLogin;
