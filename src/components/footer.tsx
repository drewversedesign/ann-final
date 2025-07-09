import Link from "next/link"
import { Palmtree, Twitter, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Palmtree className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl font-headline">Safari Navigator</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your gateway to unforgettable African adventures.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/destinations/kenya" className="text-sm hover:text-primary transition-colors">Tours</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li><Link href="/destinations/uganda" className="text-sm hover:text-primary transition-colors">Uganda</Link></li>
              <li><Link href="/destinations/kenya" className="text-sm hover:text-primary transition-colors">Kenya</Link></li>
              <li><Link href="/destinations/tanzania" className="text-sm hover:text-primary transition-colors">Tanzania</Link></li>
              <li><Link href="/destinations/zanzibar" className="text-sm hover:text-primary transition-colors">Zanzibar</Link></li>
              <li><Link href="/destinations/rwanda" className="text-sm hover:text-primary transition-colors">Rwanda</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter"><Twitter className="w-6 h-6 hover:text-primary transition-colors" /></Link>
              <Link href="#" aria-label="Facebook"><Facebook className="w-6 h-6 hover:text-primary transition-colors" /></Link>
              <Link href="#" aria-label="Instagram"><Instagram className="w-6 h-6 hover:text-primary transition-colors" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Safari Navigator by Ann Tours and Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
