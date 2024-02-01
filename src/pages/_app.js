import Layout from "@/components/Layout";
import { AuthContext } from "@/context/AuthContext";
import "@/styles/globals.css";
import '@/styles/base.css'
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [session, setSession] = useState(null)
  const [user, setUser] = useState(null)

  function login(session, user) {
    console.log("LOGGING IN")
    setSession(session)
    setUser(user)
  }
  function logout() {
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
