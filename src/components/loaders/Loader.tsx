import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const Loader = ({ className }: { className?: string }) => {
    return (
        <div className="flex justify-center items-center w-full h-full py-12">
            <Loader2 className={cn("h-10 w-10 animate-spin text-primary", className)} />
        </div>
    );
};

export default Loader;
