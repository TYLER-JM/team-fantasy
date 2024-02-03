import Head from "next/head";
import NavHeader from "./NavHeader";
import Main from "./Main";


export default function Layout({children}) {
  return (
    <>
      <Head>
        <title>Team Fantasy</title>
        <meta name="description" content="a web app for managing a team-based fantasy league" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavHeader />
      <Main>{children}</Main>
      {/* <main>{children}</main> */}
      <div>this is the footer</div>
    </>
  )
}