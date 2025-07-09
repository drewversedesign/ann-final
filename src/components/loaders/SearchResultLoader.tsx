import { Skeleton } from "@/components/ui/skeleton";
import { CommandGroup, CommandItem, CommandList } from "@/components/ui/command";

const SearchResultLoader = ({ count = 3 }: { count?: number }) => {
    return (
        <CommandList>
            <CommandGroup>
                {Array.from({ length: count }).map((_, i) => (
                    <CommandItem key={i} className="flex justify-between items-center py-2">
                        <Skeleton className="h-4 w-2/4" />
                        <Skeleton className="h-3 w-1/4" />
                    </CommandItem>
                ))}
            </CommandGroup>
        </CommandList>
    );
};

export default SearchResultLoader;
