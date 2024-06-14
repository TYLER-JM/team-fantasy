import Main from "@/components/Main"
import NavHeader from "@/components/NavHeaderApp"
import AuthProvider from "@/app/context/AuthContext"

import '@/styles/base.css';
import "@/styles/globals.css";
import "@/styles/forms.css";
import "@/styles/animations.css";

export const metadata = {
  title: 'Team Fantasy',
  description: 'Team fantasy management platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <NavHeader />
          <Main>{children}</Main>
          <div>this is the App router footer</div>
        </AuthProvider>
      </body>
    </html>
  )
}
