
"use client"

import { useEffect, useState } from "react";
import { places } from "@/lib/data";
import type { Place } from "@/lib/types";
import HotelCard from "@/components/HotelCard";
import { PlaceListLoader } from "@/components/loaders";

export default function RestaurantsList() {
    const [restaurants, setRestaurants] = useState<Place[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const allRestaurants = places.filter(place => place.type === 'Restaurant');
        setRestaurants(allRestaurants);
        setIsLoading(false);
    }, [])

    return ( 
       <div className="bg-background">
            <div className="container mx-auto text-center my-10">
                <h1 className="font-headline text-3xl md:text-4xl font-bold">
                    Restaurants and Places to Eat
                </h1>
            </div>
            
            <main className="container mx-auto px-4 pb-16">
                { isLoading ? (
                    <PlaceListLoader count={5} />
                ) : (
                    <div className="flex flex-col gap-6">
                        {restaurants.map((restaurant) => (
                            <HotelCard key={restaurant.id} place={restaurant} />
                        ))}
                    </div>
                ) }
            </main>
       </div>
     );
}
