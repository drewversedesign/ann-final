import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import type { Place } from "@/lib/types"

interface PlaceCardProps {
  place: Place;
}

export function PlaceCard({ place }: PlaceCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Image 
        src={place.images[0]} 
        alt={place.name} 
        width={400} 
        height={250} 
        className="w-full h-48 object-cover" 
        data-ai-hint={`${place.type} ${place.country}`}
      />
      <CardHeader>
        <CardTitle className="font-headline text-xl">{place.name}</CardTitle>
        <CardDescription>{place.country} - {place.type}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{place.description}</p>
        <div className="flex items-center mt-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`w-5 h-5 ${i < Math.floor(place.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
          ))}
          <span className="ml-2 text-sm text-muted-foreground">{place.rating.toFixed(1)}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/place/${place.id}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
