import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const PlaceCardLoader = () => {
    return (
        <Card className="flex flex-col overflow-hidden">
            <Skeleton className="w-full h-48" />
            <CardHeader>
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent className="flex-grow space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <div className="flex items-center pt-2">
                    <Skeleton className="h-5 w-20" />
                </div>
            </CardContent>
            <CardFooter>
                <Skeleton className="h-10 w-full" />
            </CardFooter>
        </Card>
    )
}

export default PlaceCardLoader;
