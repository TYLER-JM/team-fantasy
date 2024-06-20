
import Link from 'next/link'
// import styles from '@/styles/layout.module.css'
// import { useContext } from 'react';
// import { AuthContext } from '@/app/context/AuthContext';
// import { AuthState } from '@/types/AuthTypes';

export default function Home() {

  return (
    <div className="container">
      <Link className='link' href='/dashboard'>Dashboard</Link>
      or login      
    </div>
  );
}
