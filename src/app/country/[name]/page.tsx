import { places } from "@/lib/data"
import { COUNTRIES } from "@/lib/types"
import { notFound } from "next/navigation"
import CountryDetails from "@/views/CountryDetails"
import type { Metadata } from "next";

type Props = {
  params: { name: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const awaitedParams = await params;
  const countryName = COUNTRIES.find(c => c.toLowerCase() === awaitedParams.name);

  if (!countryName) {
    return {
      title: 'Country Not Found'
    }
  }

  return {
    title: `Explore ${countryName}`,
    description: `Discover the best attractions, hotels, and restaurants in ${countryName}. Plan your perfect trip with Ann Tours and Travel.`,
    keywords: [`${countryName} travel`, `things to do in ${countryName}`, `hotels in ${countryName}`, `restaurants in ${countryName}`, 'safari', 'tourism'],
  }
}

export async function generateStaticParams() {
  return COUNTRIES.map((country) => ({
    name: country.toLowerCase(),
  }))
}

export default async function CountryPage({ params }: { params: { name: string } }) {
  const countryName = COUNTRIES.find(c => c.toLowerCase() === params.name);

  if (!countryName) {
    notFound()
  }

  const countryPlaces = places.filter(p => p.country.toLowerCase() === params.name)

  return <CountryDetails country={countryName} places={countryPlaces} />
}
