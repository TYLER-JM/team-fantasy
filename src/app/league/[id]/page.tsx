export default function LeagueDashboard({ params }: { params: { id: string } }) {
  return (
    <div>you are on the index page of a league: {params.id} </div>
  )
}