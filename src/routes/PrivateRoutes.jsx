import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <Navigate to={'/login'} state={{ form: location }} replace />;
  }
  return <div></div>;
};

export default PrivateRoutes;
