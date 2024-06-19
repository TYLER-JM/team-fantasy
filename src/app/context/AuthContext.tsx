'use client'

import { createContext, useEffect, useState } from "react";
import { Session, User } from "@supabase/supabase-js";
import { AuthState } from "@/types/AuthTypes";
import { createClient } from "@/utils/supabase/client";

export const AuthContext = createContext<AuthState | null>(null)
// export const AuthContext = createContext({})

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [session, setSession] = useState<Session|null>(null)
  const [user, setUser] = useState<User|null>(null)


  useEffect(() => {
    const supabase = createClient()

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
    })

    // const getInitialSession = async () => {
    //   const { data: { session } } = await supabase.auth.getSession()
    //   setSession(session)
    //   setUser(session?.user ?? null)
    // }

    // getInitialSession()

    return () => {
      authListener?.subscription.unsubscribe()
    }
  }, [])


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