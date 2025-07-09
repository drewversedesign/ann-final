import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";
import { places } from "@/lib/data";
import { COUNTRIES } from "@/lib/types";

export default function Home() {
  const featuredDestinations = COUNTRIES.slice(0, 5).map(country => ({
    name: country,
    image: `https://placehold.co/600x400.png`,
    description: `Explore the wonders of ${country}.`,
    href: `/destinations/${country.toLowerCase()}`
  }));

  const popularTours = places.filter(p => p.rating >= 4.5).slice(0, 3);

  return (
    <div className="flex flex-col min-h-dvh">
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Safari sunset"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="safari sunset"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">Discover Your Next Adventure</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Ann Tours and Travel offers curated safari experiences across the heart of Africa. Unforgettable journeys await.
          </p>
          <Button asChild size="lg" className="mt-8 font-bold text-lg">
            <Link href={`/destinations/${COUNTRIES[0].toLowerCase()}`}>Explore Tours</Link>
          </Button>
        </div>
      </section>

      <section id="destinations" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Featured Destinations</h2>
            <p className="mt-2 text-lg text-muted-foreground">Find your wild side in one of our stunning locations.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {featuredDestinations.map((dest) => (
              <Link href={dest.href} key={dest.name} className="group block">
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
                  <Image src={dest.image} alt={dest.name} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={`${dest.name} landscape`} />
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{dest.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{dest.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Popular Tour Packages</h2>
            <p className="mt-2 text-lg text-muted-foreground">Handpicked experiences loved by our travelers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTours.map((tour) => (
              <Card key={tour.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <Image src={tour.images[0]} alt={tour.name} width={600} height={400} className="w-full h-56 object-cover" data-ai-hint="safari animals" />
                <CardHeader>
                  <CardTitle className="font-headline">{tour.name}</CardTitle>
                  <CardDescription>{tour.country}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">{tour.description}</p>
                  <div className="flex items-center mt-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(tour.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">{tour.rating.toFixed(1)}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/place/${tour.id}`}>View Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
