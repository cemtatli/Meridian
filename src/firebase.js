import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import { toast } from 'sonner';
import { userHandle } from './utils';
import { Navigate } from 'react-router-dom';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

onAuthStateChanged(auth, async user => {
  if (user) {
    const dbUser = await getDoc(doc(db, 'users', user.uid));
    let data = {
      uid: user.uid,
      fullName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      ...dbUser.data(),
    };
    userHandle(data);
  } else {
    userHandle(false);
  }
});

export const getUserInfo = async uname => {
  const username = await getDoc(doc(db, 'usernames', uname));

  if (username.exists()) {
    return (await getDoc(doc(db, 'users', username.data().user_id))).data();
  } else {
    /*  toast.error('Kullanıcı bulunamadı!'); */
    throw new Error('Kullanıcı bulunamadı!');
  }
};

export const login = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    toast.error(err.code);
  }
};

export const register = async ({ email, password, full_name, username }) => {
  // Get the current date
  const currentDate = new Date();

  // Get the month and year of the current date
  const month = currentDate.toLocaleString('en-US', { month: 'long' }); // returns the full name of the current month (e.g. "May")
  const year = currentDate.getFullYear(); // returns the current year (e.g. 2023)

  // Format the join date string as "Month Year"
  const joinDate = `${month} ${year}`;

  try {
    const user = await getDoc(doc(db, 'usernames', username));
    if (user.exists()) {
      toast.error(`${username} kullanıcı adı başkası tarafından kullanılıyor.`);
    } else {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      if (response.user) {
        await setDoc(doc(db, 'usernames', username), {
          user_id: response.user.uid,
        });
        await setDoc(doc(db, 'users', response.user.uid), {
          fullName: full_name,
          username: username,
          followers: [],
          following: [],
          bookmarks: [],
          notifications: [],
          email: email,
          website: '',
          bio: '',
          tweets: '',
          joinDate,
        });
        await updateProfile(auth.currentUser, {
          displayName: full_name,
        });
        return response.user;
      }
    }
  } catch (err) {
    toast.error(err.code);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    toast.error(err.code);
  }
};
