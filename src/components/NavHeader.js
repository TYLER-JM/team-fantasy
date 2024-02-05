import Link from "next/link";
import AuthButton from "./AuthButton";
import styles from "../styles/NavHeader.module.css"
import { Inter, Fira_Sans } from "next/font/google";
import { useRouter } from "next/router";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const fira = Fira_Sans({subsets: ['latin'], weight: '200'})

export default function NavHeader() {
  const router = useRouter()
  const [displayed, setDisplayed] = useState(false);
  const links = [
    {path: '/', label: 'Home'},
    {path: '/standings', label: 'Standings'},
    // {path: '/rosters', label: 'Rosters'},
    // {path: '/games/upcoming', label: 'Upcoming Games'},
    // {path: '/games/past', label: 'Past Games'},
  ]

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