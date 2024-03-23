import Link from "next/link";
import AuthButton from "./AuthButton";
import styles from "../styles/NavHeader.module.css"
import { Inter, Fira_Sans } from "next/font/google";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });
const fira = Fira_Sans({subsets: ['latin'], weight: '200'})

export default function NavHeader() {
  const auth = useContext(AuthContext)
  const router = useRouter()
  const [displayed, setDisplayed] = useState(false);
  let links = [{path: '/', label: 'Home'},]

  if (auth.user && router.pathname.startsWith('/league')) {
    links = [
      ...links,
      {path: `/league/${router.query.id}/bets`, label: 'Bets'},
      {path: `/league/${router.query.id}/standings`, label: 'Standings'},
      {path: `/league/${router.query.id}/rosters`, label: 'Rosters'},
      {path: `/league/${router.query.id}/games/upcoming`, label: 'Upcoming Games'},
    ]
  } else if (auth.user) {
    links = [
      {path: '/', label: 'Home'},
      {path: '/profile', label: 'Profile'},
      {path: '/invitations', label: 'Invitations'},
      {path: '/create-league', label: 'Create League!'},
    ]
  }

  return (
    <>
      <nav className={`${styles.nav} ${inter.className}`}>
        <ul className={`${styles.nav__group} ${displayed ? styles.displayed : ''}`}>
          {links.map(link => 
            <li key={Math.random()} className={`${styles.nav__item} ${styles.nav__itemLink} ${router.pathname.endsWith(link.path) && styles.active}`}>
              <Link onClick={() => setDisplayed(d => !d)} className={styles.nav__link} href={link.path}>{link.label}</Link>
            </li>
          )}
          <li className={styles.nav__item}>
            <AuthButton />
          </li>
          <li className={`${styles.nav__item} ${styles.nav__button}`}>
            <div onClick={() => setDisplayed(d => !d)} ><span className={`${styles.nav__icon} ${displayed ? styles.expanded : ''}`}></span></div>
          </li>

        </ul>
      </nav>
    </>
  )
}