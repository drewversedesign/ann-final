import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import type { Place } from "@/lib/types"

interface PlaceCardProps {
  place: Place;
}

export function PlaceCard({ place }: PlaceCardProps) {
  return (
    <Link href={`/place/${place.id}`} className="group block h-full">
        <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="overflow-hidden">
                <Image 
                    src={place.images[0]} 
                    alt={place.name} 
                    width={400} 
                    height={250} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={`${place.type} ${place.country}`}
                />
            </div>
            <CardHeader>
                <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">{place.name}</CardTitle>
                <CardDescription>{place.country} - {place.type}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3 mb-4">{place.description}</p>
                <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < Math.floor(place.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">{place.rating.toFixed(1)}</span>
                </div>
            </CardContent>
        </Card>
    </Link>
  )
}
