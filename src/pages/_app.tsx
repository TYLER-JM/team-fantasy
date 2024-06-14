import { AppProps } from "next/app";
import { Session, User } from "@supabase/supabase-js";

import Layout from "@/components/Layout";
import { AuthContext } from "@/context/AuthContext";
import { useState } from "react";

import '@/styles/base.css';
import "@/styles/globals.css";
import "@/styles/forms.css";
import "@/styles/animations.css";

export default function App({ Component, pageProps }: AppProps) {
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
  
  return (
    <AuthContext.Provider value={authState}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContext.Provider>
  )
}
