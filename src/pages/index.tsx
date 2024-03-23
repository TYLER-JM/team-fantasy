import Link from 'next/link'
import styles from '../styles/layout.module.css'
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

export default function Home() {
  const auth = useContext(AuthContext)

  return (
    <div className="container">
      {auth.user ?
        <div className={styles.row}>
          <section className={styles.col6}>
            <div className="card">
              <h3>Leagues:</h3>
              <ul>
                <li><Link className='link' href="/league/123">My Special NHL League <span>&rarr;</span></Link></li>
                <li><Link className='link' href="league/456">MLB League <span>&rarr;</span></Link></li>
              </ul>
            </div>
          </section>
          <section className={styles.col6}>
            <div className="card">
              <h3>Invitations:</h3>
              <ul>
                <li>invitation from Larry</li>
                <li>invitation from Curly</li>
                <li>invitation from Moe</li>
              </ul>
            </div>
          </section>
        </div>
        :
        <div className={styles.row}>
          <section className={styles.col6}>
            Please login to continue
          </section>
        </div>
      }
      
    </div>
  );
}
