import ItinerariesList from "@/views/ItinerariesList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Curated African Safari Itineraries',
  description: 'Explore expertly crafted safari itineraries for Uganda, Kenya, Tanzania, Zanzibar, and Rwanda. Find your perfect adventure with Ann Tours and Travel.',
  keywords: ['safari itineraries', 'Africa travel packages', 'Uganda safari', 'Kenya safari', 'Tanzania safari', 'Rwanda gorilla trekking', 'Zanzibar holidays'],
};

export default function ItinerariesPage() {
    return <ItinerariesList />;
}
