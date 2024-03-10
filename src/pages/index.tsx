import Link from 'next/link'
import styles from '../styles/layout.module.css'

export default function Home() {
  return (
    <div className="container">
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
    </div>
  );
}
