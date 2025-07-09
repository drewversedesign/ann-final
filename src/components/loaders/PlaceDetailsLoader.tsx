import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const PlaceDetailsLoader = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <Skeleton className="h-12 w-3/4 rounded-md" />
            <div className="flex items-center gap-4 mt-4">
              <Skeleton className="h-5 w-24 rounded-md" />
              <Skeleton className="h-5 w-16 rounded-md" />
            </div>
          </div>
          <Skeleton className="w-full h-[50vh] rounded-lg" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-1/4 rounded-md" />
            <Skeleton className="h-5 w-full rounded-md" />
            <Skeleton className="h-5 w-full rounded-md" />
            <Skeleton className="h-5 w-3/4 rounded-md" />
          </div>
        </div>
        <div className="lg:col-span-1 space-y-8">
          <Card className="p-6">
            <Skeleton className="h-6 w-1/3 mb-4 rounded-md" />
            <Skeleton className="w-full h-64 rounded-lg" />
          </Card>
          <Card className="p-6 space-y-4">
            <Skeleton className="h-6 w-1/2 mb-4 rounded-md" />
            <div className="flex items-center gap-3">
              <Skeleton className="w-5 h-5 rounded-full" />
              <Skeleton className="w-32 h-5 rounded-md" />
            </div>
            <div className="flex items-center gap-3">
              <Skeleton className="w-5 h-5 rounded-full" />
              <Skeleton className="w-24 h-5 rounded-md" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default PlaceDetailsLoader;
