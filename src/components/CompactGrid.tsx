import { Card } from "@/components/ui/card"

interface GridItem {
  id: string
  title: string
  content: string
}

interface CompactGridProps {
  items: GridItem[]
}

export default function CompactGrid({ items }: CompactGridProps) {
  // Ensure we only show 4 items for 2x2 grid
  const gridItems = items.slice(0, 4)

  return (
    <div className="w-fit mx-auto">
      <div className="grid grid-cols-2 gap-1 w-64 h-64">
        {gridItems.map((item, index) => (
          <Card 
            key={item.id} 
            className="flex flex-col items-center justify-center p-3 text-center border border-border hover:bg-accent/50 transition-colors"
          >
            <h3 className="text-sm font-semibold mb-1 truncate w-full">{item.title}</h3>
            <p className="text-xs text-muted-foreground line-clamp-3">{item.content}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}