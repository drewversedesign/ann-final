import { places } from "@/lib/data";
import { PlaceCard } from "@/components/place-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { Place } from "@/lib/types";

export default function ToEat() {
  const restaurants = places.filter(p => p.type === 'Restaurant');

  if (!restaurants.length) {
    return null;
  }

  return (
    <section className="w-full py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Places to Eat</h2>
            <p className="mt-2 text-lg text-muted-foreground">Explore top-rated restaurants and culinary experiences.</p>
        </div>
        <Carousel 
          opts={{
            align: "start",
            loop: restaurants.length > 3,
          }}
          className="w-full px-10"
        >
          <CarouselContent className="-ml-4">
            {restaurants.map((place) => (
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
