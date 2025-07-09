
"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { AttractionsListLoader } from "@/components/loaders";
import React from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";


const WhereTo = dynamic(() => import('@/components/WhereTo'));
const ToVisit = dynamic(() => import('@/components/ToVisit'), { 
    loading: () => <div className="py-16 lg:py-24"><AttractionsListLoader count={3} /></div> 
});
const ToStay = dynamic(() => import('@/components/ToStay'), { 
    loading: () => <div className="py-16 lg:py-24 bg-secondary"><AttractionsListLoader count={3} /></div> 
});
const ToEat = dynamic(() => import('@/components/ToEat'), { 
    loading: () => <div className="py-16 lg:py-24"><AttractionsListLoader count={3} /></div> 
});
const TravelersChoice = dynamic(() => import('@/components/TravelersChoice'));
const Trending = dynamic(() => import('@/components/Trending'));


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
          src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/15/71/49/6b.jpg"
          alt="Safari animals"
          fill
          className="object-cover z-0"
          data-ai-hint="safari animals"
          priority
        />
        
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">Discover Your Next Adventure</h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed">
            Ann Tours and Travel offers curated safari experiences across the heart of Africa. Unforgettable journeys await.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSearch} className="flex gap-3 bg-white rounded-full p-3 shadow-2xl">
                <div className="relative w-full">
                    <Input
                        type="search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search destinations, hotels, or attractions..."
                        className="pl-6 w-full bg-transparent border-none focus-visible:ring-0 text-foreground h-14 text-base md:text-lg"
                    />
                </div>
                <Button type="submit" size="lg" className="rounded-full font-bold px-8 h-14 text-base md:text-lg">Search</Button>
            </form>
          </div>
        </div>
      </section>

      <WhereTo />
      <ToVisit />
      <ToStay />
      <ToEat />
      <TravelersChoice />
      <Trending />
    </div>
  );
}
