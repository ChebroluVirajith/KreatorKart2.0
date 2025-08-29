import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { UserData, UserFormData } from '../types/auth';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { 
  getAuth, 
  onAuthStateChanged, 
  signOut, 
  Auth, 
  GoogleAuthProvider, 
  signInWithPopup
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, updateDoc, Firestore } from 'firebase/firestore';

/**
 * @author ChebroluVirajith
 * @lastModified 2025-08-05 16:30:00
 * Corrected AuthContext with full Firebase Google Sign-In and persistence.
 */

declare const __app_id: string;
declare const __firebase_config: string;
declare const __initial_auth_token: string;

interface AuthContextType {
  user: UserData | null;
  googleSignup: () => Promise<boolean>;
  logout: () => void;
  updateUser: (newUserData: UserData) => void;
  isAuthenticated: boolean;
  authReady: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authReady, setAuthReady] = useState(false);
  
  const [app, setApp] = useState(null);
  const [db, setDb] = useState(null);
  const [auth, setAuth] = useState(null);

  // You must fill this with your own project's configuration
  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBC9c9q4WzWGDCQyGDE91_nwpU_pbaCUdg",
    authDomain: "kreator-kart.firebaseapp.com",
    projectId: "kreator-kart",
    storageBucket: "kreator-kart.firebasestorage.app",
    messagingSenderId: "643732483592",
    appId: "1:643732483592:web:dd0e20fe85f472c4956bbd",
  };

  const appId = FIREBASE_CONFIG.projectId || 'default-app-id';

  useEffect(() => {
    try {
      const initializedApp = initializeApp(FIREBASE_CONFIG);
      setApp(initializedApp);
      setDb(getFirestore(initializedApp));
      setAuth(getAuth(initializedApp));
      console.log("AuthContext: Firebase initialized successfully.");
    } catch (error) {
      console.error("AuthContext: Firebase initialization failed. Error:", error);
      setAuthReady(true);
    }
  }, []);

  useEffect(() => {
    if (!auth || !db) {
      if (!authReady) setAuthReady(true);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      console.log("AuthContext: Auth state changed. Firebase User:", firebaseUser ? firebaseUser.email : 'null');
      if (firebaseUser) {
        const userId = firebaseUser.uid;
        const userDocRef = doc(db, 'artifacts', appId, 'users', userId, 'profile', userId);
        
        try {
          const userDocSnap = await getDoc(userDocRef);
          let currentUserData;

          if (userDocSnap.exists()) {
            currentUserData = userDocSnap.data();
          } else {
            currentUserData = {
              id: userId,
              email: firebaseUser.email || '',
              name: firebaseUser.displayName || 'Creator',
              username: firebaseUser.displayName?.replace(/\s+/g, '').toLowerCase() || 'creator',
              bio: '',
              phone: '',
              socialLinks: {
                instagram: '',
                youtube: '',
                tiktok: ''
              }
            };
            await setDoc(userDocRef, currentUserData);
          }
          
          setUser(currentUserData);
          setIsAuthenticated(true);
        } catch (error) {
          console.error("AuthContext: Error fetching or creating user profile:", error);
          setUser(null);
          setIsAuthenticated(false);
        }
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
      setAuthReady(true);
    });

    return () => unsubscribe();
  }, [auth, db, appId]);
  
  const googleSignup = async () => {
    if (!auth) {
      console.error("AuthContext: 'googleSignup' called but Firebase Auth not initialized.");
      return false;
    }
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      return true;
    } catch (error) {
      console.error("AuthContext: Error during Google Sign-In:", error.code, error.message);
      return false;
    }
  };
  
  const updateUser = async (newUserData) => {
    if (!user || !user.id || !db) {
      console.error("AuthContext: Cannot update profile. User not logged in or Firestore not initialized.");
      return;
    }
    try {
      const userDocRef = doc(db, 'artifacts', appId, 'users', user.id, 'profile', user.id);
      await updateDoc(userDocRef, { ...newUserData });
      setUser(newUserData);
    } catch (error) {
      console.error("AuthContext: Error updating user profile:", error);
    }
  };

  const logout = async () => {
    if (!auth) return;
    await signOut(auth);
  };
  
  const authContextValue = useMemo(() => ({
    user,
    googleSignup,
    logout,
    updateUser,
    isAuthenticated,
    authReady,
  }), [user, isAuthenticated, authReady]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};