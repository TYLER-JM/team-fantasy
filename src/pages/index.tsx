import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <section>
        <ul>
          <li><Link href="/league/123">My Special NHL League</Link></li>
          <li><Link href="league/456">MLB League</Link></li>
        </ul>
      </section>
      <section>
        <ul>
          <li>invitation from Larry</li>
          <li>invitation from Curly</li>
          <li>invitation from Moe</li>
        </ul>
      </section>
    </div>
  );
}
