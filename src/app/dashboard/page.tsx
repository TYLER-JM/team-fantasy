import Link from 'next/link'
import styles from '@/styles/layout.module.css'
import { createClient } from '@/utils/supabase/server';

export default async function Dashboard() {
  const supabase = createClient()
  const {data} = await supabase.auth.getUser()
  const { data: leagues }  = await supabase
    .from('fantasy_leagues')
    .select('*')
    .eq('commissioner_id', data.user?.id)

  return (
    <div className="container">
        <div className={styles.row}>
          <section className={styles.col6}>
            <div className="card">
              <h3>Leagues:</h3>
              <ul>
                {leagues && leagues.map(league => (
                  <li key={league.id}><Link className='link' href={`league/${league.id}`}>{league.name} <span>&rarr;</span></Link></li>
                ))}
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
