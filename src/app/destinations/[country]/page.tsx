import { places } from "@/lib/data"
import type { Place } from "@/lib/types"
import { notFound } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HotelCard from "@/components/HotelCard"

export async function generateStaticParams() {
  const countries = [...new Set(places.map((p) => p.country.toLowerCase()))]
  return countries.map((country) => ({
    country,
  }))
}

export default function DestinationPage({ params }: { params: { country: string } }) {
  const countryName = params.country.charAt(0).toUpperCase() + params.country.slice(1)
  const countryPlaces = places.filter(p => p.country.toLowerCase() === params.country.toLowerCase())

  if (countryPlaces.length === 0) {
    notFound()
  }

  const attractions = countryPlaces.filter(p => p.type === 'Attraction')
  const hotels = countryPlaces.filter(p => p.type === 'Hotel')
  const restaurants = countryPlaces.filter(p => p.type === 'Restaurant')

  const renderPlaceList = (list: Place[], type: string) => {
    if (list.length === 0) {
      return <p className="text-muted-foreground mt-8 text-center">No {type.toLowerCase()} found for {countryName}.</p>
    }
    return (
      <div className="flex flex-col gap-6">
        {list.map(place => (
          <HotelCard key={place.id} place={place} />
        ))}
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Explore {countryName}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover the best attractions, hotels, and restaurants {countryName} has to offer.
        </p>
      </div>

      <Tabs defaultValue="attractions" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="attractions">Attractions</TabsTrigger>
          <TabsTrigger value="hotels">Hotels</TabsTrigger>
          <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
        </TabsList>
        <TabsContent value="attractions">
          {renderPlaceList(attractions, "Attractions")}
        </TabsContent>
        <TabsContent value="hotels">
          {renderPlaceList(hotels, "Hotels")}
        </TabsContent>
        <TabsContent value="restaurants">
          {renderPlaceList(restaurants, "Restaurants")}
        </TabsContent>
      </Tabs>
    </div>
  )
}
