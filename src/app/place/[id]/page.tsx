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

  const keywords = [place.name, place.type, place.country, 'Ann Tours and Travel', 'African safari'];
  if (place.type === 'Hotel') keywords.push('accommodation', 'booking');
  if (place.type === 'Restaurant') keywords.push('dining', 'food');
  if (place.type === 'Attraction') keywords.push('tourism', 'sightseeing');


  return {
    title: `${place.name} | ${place.country}`,
    description: `Explore ${place.name}, a premier ${place.type.toLowerCase()} in ${place.country}. Get details, see photos, and plan your visit with Ann Tours and Travel. ${place.description}`,
    keywords: keywords,
    openGraph: {
      title: `${place.name} | Ann Tours and Travel`,
      description: `Explore ${place.name}, a premier ${place.type.toLowerCase()} in ${place.country}.`,
      url: `/place/${place.id}`,
      images: [
        {
          url: place.images[0],
          width: 800,
          height: 600,
          alt: `A stunning view of ${place.name}`,
        },
      ],
      type: 'article',
      siteName: 'Ann Tours and Travel',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${place.name} | Ann Tours and Travel`,
      description: `Explore ${place.name}, a premier ${place.type.toLowerCase()} in ${place.country}.`,
      images: [place.images[0]],
    }
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
