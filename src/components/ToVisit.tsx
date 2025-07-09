"use client"

import { useContext } from "react";
import { MainContext } from "@/context/MainContext";
import { PlaceCard } from "@/components/place-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AttractionsListLoader } from "./loaders";

export default function ToVisit() {
  const context = useContext(MainContext);
  
  if (!context) {
    return null;
  }

  const { attractions, isLoading } = context;

  if (isLoading) {
    return <AttractionsListLoader count={4} />;
  }

  if (!attractions.length) {
    return null;
  }

  return (
    <section className="w-full py-16 lg:py-24">
       <div className="container mx-auto px-4">
        <div className="mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Place to Visit</h2>
            <p className="mt-2 text-lg text-muted-foreground">These are some places you might want to visit.</p>
        </div>
        <Carousel 
          opts={{
            align: "start",
            loop: attractions.length > 3,
          }}
          className="w-full px-10"
        >
          <CarouselContent className="-ml-4">
            {attractions.map((place) => (
              <CarouselItem key={place.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full">
                  <PlaceCard place={place} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
