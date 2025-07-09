
import { places } from "@/lib/data"
import { COUNTRIES } from "@/lib/types"
import { notFound } from "next/navigation"
import CountryDetails from "@/views/CountryDetails"

export async function generateStaticParams() {
  return COUNTRIES.map((country) => ({
    name: country.toLowerCase(),
  }))
}

export default function CountryPage({ params }: { params: { name: string } }) {
}
export default async function CountryPage({ params }: { params: { name: string } }) {
  const countryName = COUNTRIES.find(c => c.toLowerCase() === params.name);

  if (!countryName) {
    notFound()
  }

  const countryPlaces = places.filter(p => p.country.toLowerCase() === params.name)

  return <CountryDetails country={countryName} places={countryPlaces} />
}
