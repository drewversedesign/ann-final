
"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { AttractionsListLoader } from "@/components/loaders";
import React from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Award, Leaf, Map, Search, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhereTo = dynamic(() => import('@/components/WhereTo'));
const FeaturedItineraries = dynamic(() => import('@/components/FeaturedItineraries'), { 
    loading: () => <div className="py-16 lg:py-24 bg-secondary"><AttractionsListLoader count={3} /></div> 
});
const TravelersChoice = dynamic(() => import('@/components/TravelersChoice'));
const Trending = dynamic(() => import('@/components/Trending'));

const whyChooseUs = [
  {
    icon: <Map className="w-8 h-8 text-primary" />,
    title: "Expert Local Knowledge",
    description: "Our guides are locals with deep knowledge of the culture, history, and wildlife of each destination."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Bespoke Itineraries",
    description: "We craft personalized journeys tailored to your interests, budget, and travel style for a unique adventure."
  },
  {
    icon: <Leaf className="w-8 h-8 text-primary" />,
    title: "Sustainable Tourism",
    description: "We are committed to responsible travel that benefits local communities and conserves the environment."
  }
];

export default function Home() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${searchTerm.trim()}`);
    }
  };
  
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center text-center text-white">
        <Image
          src="https://raw.githubusercontent.com/drewversedesign/ann-pics/main/Explore%20East%20Africa%20with%20Ann%20Tours%20.png"
          alt="Safari animals collage"
          fill
          className="object-cover z-0"
          data-ai-hint="safari animals"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 z-10" />
        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 animate-fade-in-down">
            Unforgettable
          </h1>
          <form onSubmit={handleSearch} className="w-full max-w-2xl bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-2xl flex items-center gap-2 animate-zoom-in mt-8">
            <Search className="h-6 w-6 text-muted-foreground ml-4" />
            <Input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Where to next? Search for destinations..."
              className="bg-transparent border-none focus-visible:ring-0 text-foreground h-12 text-base w-full"
            />
            <Button type="submit" size="lg" className="rounded-full font-bold px-8 h-12 text-base shrink-0">
              Search
            </Button>
          </form>
        </div>
      </section>

      <WhereTo />
      
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Travel With Us?</h2>
            <p className="mt-2 text-lg text-muted-foreground">The Ann Tours and Travel Difference</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item) => (
              <Card key={item.title} className="text-center p-8 border-2 border-transparent hover:border-primary hover:shadow-2xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-headline text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <FeaturedItineraries />
      <TravelersChoice />
      <Trending />
    </div>
  );
}
