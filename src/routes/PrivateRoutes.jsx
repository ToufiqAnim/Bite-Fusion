import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <Navigate to={'/login'} />;
  }
  return children;
};

export default PrivateRoutes;
