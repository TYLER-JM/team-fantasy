import Link from "next/link";
import AuthButton from "./AuthButton";
import styles from "./NavHeader.module.css"
import { Inter, Fira_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const fira = Fira_Sans({subsets: ['latin'], weight: '200'})

export default function NavHeader() {
  return (
    <nav className={`${styles.nav} ${inter.className}`}>
      <ul className={styles.nav__group}>
        <li className={styles.nav__item}>
          <Link href='/'>Home</Link>
        </li>
        <li className={styles.nav__item}>
          <Link href='/standings'>Standings</Link>
        </li>
        <li className={styles.nav__item}>
          <Link href='/rosters'>Rosters</Link>
        </li>
        <li className={styles.nav__item}>
          <Link href='/games/upcoming'>Upcoming Games</Link>
        </li>
        <li className={styles.nav__item}>
          <Link href='/games/past'>Past Games</Link>
        </li>
        <li className={styles.nav__item}><AuthButton /></li>
      </ul>
    </nav>
  )
}