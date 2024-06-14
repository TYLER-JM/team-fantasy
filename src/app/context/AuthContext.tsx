'use client'

import { createContext, useState } from "react";
import { Session, User } from "@supabase/supabase-js";
// import { AuthState } from "@/types/AuthTypes";

// export const AuthContext = createContext<AuthState|{}>({})
export const AuthContext = createContext({})

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [session, setSession] = useState<Session|null>(null)
  const [user, setUser] = useState<User|null>(null)

  function login(session: Session, user: User):void {
    setSession(session)
    setUser(user)
  }
  function logout():void {
    setSession(null)
    setUser(null)
  }

  const authState = {
    session,
    user,
    loading: false,
    login,
    logout,
  }
  return <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
}