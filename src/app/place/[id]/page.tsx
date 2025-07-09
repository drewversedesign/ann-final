import { places } from "@/lib/data"
import { notFound } from "next/navigation"
import PlaceDetails from "@/views/PlaceDetails"

export async function generateStaticParams() {
  return places.map((place) => ({
    id: place.id,
  }))
}

export default function PlaceDetailsPage({ params }: { params: { id:string } }) {
  const place = places.find(p => p.id === params.id)

  if (!place) {
    notFound()
  }

  return <PlaceDetails place={place} />
}
