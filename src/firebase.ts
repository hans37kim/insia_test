import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut as fbSignOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp, query, where, orderBy } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const signOut = () => fbSignOut(auth);

// Helper error handler
export function handleFirestoreError(error: any, operationType: 'create' | 'update' | 'delete' | 'list' | 'get' | 'write') {
  if(error instanceof Error && error.message.includes('Missing or insufficient permissions')) {
      const authInfo = {
        userId: auth.currentUser?.uid || 'unauthenticated',
        email: auth.currentUser?.email || '',
        emailVerified: auth.currentUser?.emailVerified || false,
        isAnonymous: auth.currentUser?.isAnonymous || false,
        providerInfo: auth.currentUser?.providerData.map(p => ({ providerId: p.providerId, displayName: p.displayName || '', email: p.email || '' })) || []
      };
      const info = {
          error: error.message,
          operationType,
          path: null,
          authInfo
      };
      throw new Error(JSON.stringify(info));
  }
  throw error;
}
