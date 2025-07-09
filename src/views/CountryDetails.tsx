"use client"

import type { Place } from "@/lib/types"
import HotelCard from "@/components/HotelCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useMemo } from "react"

interface CountryDetailsProps {
  country: string
  places: Place[]
}

export default function CountryDetails({ country, places }: CountryDetailsProps) {
  const attractions = useMemo(() => places.filter(p => p.type === 'Attraction'), [places])
  const hotels = useMemo(() => places.filter(p => p.type === 'Hotel'), [places])
  const restaurants = useMemo(() => places.filter(p => p.type === 'Restaurant'), [places])

  const placeTypes = [
    { name: "Attractions", data: attractions, count: attractions.length },
    { name: "Hotels", data: hotels, count: hotels.length },
    { name: "Restaurants", data: restaurants, count: restaurants.length },
  ].filter(pt => pt.count > 0);

  if (placeTypes.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Explore {country}</h1>
        <p className="mt-8 text-lg text-muted-foreground">No places found for {country} yet. Check back soon!</p>
      </div>
    )
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Explore {country}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the best places to visit, stay, and eat in {country}.
          </p>
        </div>

        <Tabs defaultValue={placeTypes[0].name.toLowerCase()} className="w-full">
          <TabsList className="flex flex-wrap h-auto justify-center">
            {placeTypes.map(pt => (
              <TabsTrigger key={pt.name} value={pt.name.toLowerCase()}>{pt.name} ({pt.count})</TabsTrigger>
            ))}
          </TabsList>
          
          {placeTypes.map(pt => (
            <TabsContent key={pt.name} value={pt.name.toLowerCase()}>
              <div className="mt-8 flex flex-col gap-6">
                {pt.data.map(place => (
                  <HotelCard key={place.id} place={place} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
