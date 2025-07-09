import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Star, Heart } from "lucide-react"
import type { Place } from "@/lib/types"

interface PlaceCardProps {
  place: Place;
}

export function PlaceCard({ place }: PlaceCardProps) {
  return (
    <Link href={`/place/${place.id}`} className="group block h-full">
        <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="relative overflow-hidden rounded-t-lg">
                <Image 
                    src={place.images[0]} 
                    alt={place.name} 
                    width={400} 
                    height={300}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={`${place.type} ${place.country}`}
                />
                <button 
                    onClick={(e) => { e.preventDefault(); alert('Added to favorites!'); }}
                    className="absolute top-3 right-3 bg-white/70 backdrop-blur-sm rounded-full p-1.5 hover:bg-white transition-colors z-10"
                    aria-label="Add to favorites"
                >
                    <Heart className="w-5 h-5 text-gray-700" />
                </button>
            </div>
            <CardContent className="p-3 space-y-1 flex-grow flex flex-col">
                <CardTitle className="font-headline text-lg group-hover:text-primary transition-colors truncate">{place.name}</CardTitle>
                <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(place.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-1 text-xs text-muted-foreground">{place.rating.toFixed(1)}</span>
                </div>
                <CardDescription className="text-xs !mt-auto pt-1">{place.type} in {place.country}</CardDescription>
            </CardContent>
        </Card>
    </Link>
  )
}
