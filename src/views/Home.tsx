import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { AttractionsListLoader } from "@/components/loaders";

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
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">Discover Your Next Adventure</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Ann Tours and Travel offers curated safari experiences across the heart of Africa. Unforgettable journeys await.
          </p>
          <Button asChild size="lg" className="mt-8 font-bold text-lg">
            <Link href="/attractions">Explore Tours</Link>
          </Button>
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
