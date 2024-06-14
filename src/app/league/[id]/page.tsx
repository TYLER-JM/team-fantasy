'use client'

import { useParams } from "next/navigation";

export default function LeagueDashboard() {
  const params = useParams()
  return (
    <div>you are on the index page of a league: ...</div>
  )
}