"use client";

import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const placesToGo = [
  "Las Vegas Hotels", "Destin Hotels", "Myrtle Beach Hotels", "Gatlinburg Hotels", "Walt Disney World Hotels",
  "Orlando Hotels", "Ocean City Hotels", "Panama City Beach Hotels", "Branson Hotels", "Seattle Hotels",
  "Turks and Caicos Hotels", "Mazatlan Hotels", "Amalfi Coast Hotels", "Miami Beach Hotels", "Fort Lauderdale Hotels",
  "South Padre Island Hotels", "Jackson Hotels", "Yosemite National Park Hotels", "South Lake Tahoe Hotels"
];

const thingsToDo = [
  "Things to Do in Atlanta", "Things to Do in Austin", "Things to Do in Denver", "Things to Do in Kansas City",
  "Things to Do in Gatlinburg", "Things to Do in Asheville", "Things to Do in Pigeon Forge", "Things to Do in Philadelphia",
  "Things to Do in Santa Barbara", "Things to Do in Myrtle Beach", "Things to Do in Jacksonville", "Things to Do in Colorado",
  "Things to Do in Lake Tahoe (California)", "Things to Do in Fredericksburg", "Things to Do in California", "Things to Do in Puerto Rico",
  "Things to Do in Rome", "Things to Do in Venice", "Things to Do in Edinburgh", "Things to Do in Niagara Falls"
];

const placesToStay = [
  "Beaches Turks & Caicos", "Moon Palace Cancun", "Majestic Elegance Costa Mujeres", "Hyatt Ziva Cancun", "Moon Palace Jamaica", "Dreams Punta Cana Resort & Spa",
  "Disney's Grand Floridian Resort & Spa", "Majestic Mirage Punta Cana", "Planet Hollywood Cancun", "Barcelo Aruba", "Sheraton Waikiki", "Finest Playa Mujeres", "Hyatt Ziva Cap Cana",
  "JW Marriott Marco Island Beach Resort", "Wyndham Alltra Cancun", "Atelier Playa Mujeres", "Hotel Riu Palace Cabo San Lucas", "Grand Hyatt Baha Mar", "The Venetian Resort", "Hyatt Ziva Puerto Vallarta",
  "Barcelo Maya Riviera", "Grand Velas Riviera Maya", "Hard Rock Hotel Cancun", "The Ritz-Carlton Orlando, Grande Lakes", "Sandos Caracol Eco Resort", "Hyatt Ziva Los Cabos", "Grand Fiesta Americana Coral Beach",
  "Hard Rock Hotel Riviera Maya", "Andaz Maui At Wailea Resort", "Caribe Hilton", "Live Aqua Beach Resort Cancun", "Iberostar Selection Cancun", "Hyatt Zilara Cancun", "Hilton Playa del Carmen",
  "Ka'anapali Beach Hotel", "Paris Las Vegas", "Planet Hollywood Resort & Casino", "Club Med Sandpiper Bay", "Hyatt Zilara Cap Cana", "Beloved Playa Mujeres", "Hilton Hawaiian Village Waikiki Beach Resort"
];

const renderLinks = (links: string[]) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 pt-6">
    {links.map((item) => (
      <Link key={item} href="#" className="text-sm text-muted-foreground hover:underline hover:text-primary">
        {item}
      </Link>
    ))}
  </div>
);

export default function Trending() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8">
          Trending in Travel
        </h2>
        <Tabs defaultValue="places-to-go">
          <TabsList className="grid w-full grid-cols-1 sm:w-auto sm:grid-cols-3">
            <TabsTrigger value="places-to-go">Places to Go</TabsTrigger>
            <TabsTrigger value="things-to-do">Things to Do</TabsTrigger>
            <TabsTrigger value="places-to-stay">Places to Stay</TabsTrigger>
          </TabsList>
          <TabsContent value="places-to-go">
            {renderLinks(placesToGo)}
          </TabsContent>
          <TabsContent value="things-to-do">
            {renderLinks(thingsToDo)}
          </TabsContent>
          <TabsContent value="places-to-stay">
            {renderLinks(placesToStay)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
