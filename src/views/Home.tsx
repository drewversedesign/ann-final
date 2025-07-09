
"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { AttractionsListLoader } from "@/components/loaders";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { CompactGrid } from "@/components";


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

// Sample data for the compact grid
const gridData = [
  { id: '1', title: 'Safari Tours', content: 'Experience wildlife in their natural habitat' },
  { id: '2', title: 'Cultural Visits', content: 'Immerse in local traditions and customs' },
  { id: '3', title: 'Adventure Sports', content: 'Thrilling activities for adrenaline seekers' },
  { id: '4', title: 'Scenic Views', content: 'Breathtaking landscapes and photography' }
]

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
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
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3b/73/32/africa-is-for-us-the.jpg?w=700&h=400&s=1"
          alt="Safari sunset at Murchison Falls"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="safari murchison falls"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 container mx-auto px-4 py-16 md:py-24">
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

      {/* Compact 2x2 Grid Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-2xl font-bold mb-4">Quick Highlights</h2>
          <CompactGrid items={gridData} />
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
