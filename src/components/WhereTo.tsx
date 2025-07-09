"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Search } from "lucide-react"

export default function WhereTo() {
    const [term, setTerm] = useState('')
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (term.trim()) {
            router.push(`/search?q=${term.trim()}`)
        }
    }

    return ( 
        <div className="container mx-auto py-16 lg:py-24 relative flex justify-center items-center">
            <Image 
                src="https://placehold.co/1200x400.png" 
                alt="A map with a magnifying glass"
                data-ai-hint="travel map"
                width={1200}
                height={400}
                className="object-cover w-full h-auto max-h-[22em] rounded-lg shadow-lg" 
            />
            <div className="absolute w-[85%] md:w-10/12">
                <form className="relative" onSubmit={handleSubmit}>
                    <label htmlFor="where-to-search" className="sr-only">Where to?</label>
                    <Search className="h-6 w-6 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input 
                        id="where-to-search"
                        type="text" 
                        placeholder="Where to?"
                        className="bg-background rounded-full w-full pl-14 pr-4 py-4 text-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-primary" 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </form>
            </div>
        </div>
     );
}
