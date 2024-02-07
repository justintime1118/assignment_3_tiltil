"use client";

import { useRouter } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextValue = {
  isSignedIn: boolean;
  signIn: () => void;
  signOut: () => void;
  signUp: () => void;
};

const initialValue: AuthContextValue = {
  isSignedIn: false,
  signIn: () => {},
  signOut: () => {},
  signUp: () => {},
};

const AuthContext = createContext<AuthContextValue>(initialValue);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signIn = () => {
    setIsSignedIn(true);
    alert("로그인 되었습니다");
  };
  const signOut = () => setIsSignedIn(false);
  const signUp = () => {
    setIsSignedIn(true);
    alert("회원가입에 성공하였습니다");
  };

  const value: AuthContextValue = {
    isSignedIn: isSignedIn,
    signIn: signIn,
    signOut: signOut,
    signUp: signUp,
  };
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.replace("/");
    }
  }, [router, isSignedIn]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
