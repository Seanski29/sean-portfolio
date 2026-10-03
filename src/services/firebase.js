import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc, getFirestore, serverTimestamp, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const adminEmail = import.meta.env.VITE_FIREBASE_ADMIN_EMAIL;

export const isFirebaseConfigured = Object.values(firebaseConfig).every(Boolean) && Boolean(adminEmail);

const app = isFirebaseConfigured ? initializeApp(firebaseConfig) : null;
export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;

const portfolioRef = () => doc(db, "portfolio", "main");

export async function loadCloudPortfolio() {
  if (!isFirebaseConfigured) return null;
  const snapshot = await getDoc(portfolioRef());
  return snapshot.exists() ? snapshot.data().content : null;
}

export async function saveCloudPortfolio(content) {
  if (!isFirebaseConfigured || !auth.currentUser) return;
  await setDoc(
    portfolioRef(),
    {
      content,
      updatedAt: serverTimestamp(),
      updatedBy: auth.currentUser.email,
    },
    { merge: true },
  );
}

export async function signInAdmin(password) {
  if (!isFirebaseConfigured) return null;
  return signInWithEmailAndPassword(auth, adminEmail, password);
}

export async function signOutAdmin() {
  if (!isFirebaseConfigured) return;
  await signOut(auth);
}

export function listenForAdmin(callback) {
  if (!isFirebaseConfigured) return () => {};
  return onAuthStateChanged(auth, (user) => {
    callback(Boolean(user && user.email === adminEmail));
  });
}
