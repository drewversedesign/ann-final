import { places } from "@/lib/data"
import { notFound } from "next/navigation"
import PlaceDetails from "@/views/PlaceDetails"
import type { Metadata } from "next";

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const place = places.find(p => p.id === params.id)

  if (!place) {
    return {
      title: 'Place Not Found'
    }
  }

  return {
    title: place.name,
    description: `Details about ${place.name}, a ${place.type} in ${place.country}. ${place.description}`,
    openGraph: {
      title: place.name,
      description: place.description,
      images: [
        {
          url: place.images[0],
          width: 800,
          height: 600,
          alt: place.name,
        },
      ],
    },
  }
}

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
