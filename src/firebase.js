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

export const login = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    toast.error(err.code);
  }
};

export const register = async ({ email, password, full_name, username }) => {
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
          notifications: [],
        });
        await updateProfile(auth.currentUser, {
          displayName: full_name,
        });
        toast(`Aramıza hoşgeldin, ${username}`);
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
