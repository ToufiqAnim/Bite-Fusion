import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyARoVYPqyuvHTk4qAGxPwyaS2sW1n4mlnw',
  authDomain: 'bite-fusion.firebaseapp.com',
  projectId: 'bite-fusion',
  storageBucket: 'bite-fusion.appspot.com',
  messagingSenderId: '253108551606',
  appId: '1:253108551606:web:0d6cd26c46330e13e10b17',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
