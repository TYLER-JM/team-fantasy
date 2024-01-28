import Layout from "@/components/Layout";
import { AuthContext } from "@/context/AuthContext";
import "@/styles/globals.css";
import '@/styles/base.css'
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [session, setSession] = useState(null)

  function login(value = 'ANON') {
    console.log("LOGGING IN")
    setSession({
      token: 'blah',
      user: {name: value, age: 41}
    })
  }
  function logout() {
    setSession(null)
  }

  const authState = {
    session,
    login,
    logout
  }
  return (
    <AuthContext.Provider value={authState}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContext.Provider>
  )
}
