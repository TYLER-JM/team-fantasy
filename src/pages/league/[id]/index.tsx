import { useRouter } from "next/router";

export default function LeagueDashboard() {
  const router = useRouter()
  return (
    <div>you are on the index page of a league: {router.query.id}</div>
  )
}