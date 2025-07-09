
"use client"

import { useEffect, useState } from "react";
import { places } from "@/lib/data";
import type { Place } from "@/lib/types";
import HotelCard from "@/components/HotelCard";
import { PlaceListLoader } from "@/components/loaders";

export default function AttractionsListPage() {
    const [attractions, setAttractions] = useState<Place[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const allAttractions = places.filter(place => place.type === 'Attraction');
        setAttractions(allAttractions);
        setIsLoading(false);
    }, [])

    return ( 
       <div className="bg-background">
            <div className="container mx-auto text-center my-10">
                <h1 className="font-headline text-3xl md:text-4xl font-bold">
                    Attractions and Things to Do
                </h1>
            </div>
            
            <main className="container mx-auto px-4 pb-16">
                { isLoading ? (
                    <PlaceListLoader count={5} />
                ) : (
                    <div className="flex flex-col gap-6">
                        {attractions.map((attraction) => (
                            <HotelCard key={attraction.id} place={attraction} />
                        ))}
                    </div>
                ) }
            </main>
       </div>
     );
}
