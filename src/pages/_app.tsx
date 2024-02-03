import { AppProps } from "next/app";
import { Session, User } from "@supabase/supabase-js";

import Layout from "@/components/Layout";
import { AuthContext } from "@/context/AuthContext";
import { useState } from "react";

import '@/styles/base.css'
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [session, setSession] = useState(null)
  const [user, setUser] = useState(null)

  function login(session: Session, user: User):void {
    console.log("LOGGING IN")
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
