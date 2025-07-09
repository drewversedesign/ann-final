import Image from "next/image";
import Link from "next/link";
import { Award } from "lucide-react";
import { Button } from "./ui/button";

export default function TravelersChoice() {
  return (
    <section className="bg-[#004f32]">
      <div className="container mx-auto grid md:grid-cols-12 h-auto md:h-[500px] overflow-hidden">
        <div className="md:col-span-4 text-center py-8 flex flex-col items-center justify-center p-4 text-white">
          <Award className="h-16 w-16 lg:h-20 lg:w-20 mb-5 text-yellow-400" />
          <h2 className="font-headline font-bold text-3xl md:text-4xl">
            Travelers' Choice Best of the Best
          </h2>
          <Button asChild size="lg" className="mt-8 bg-white text-black hover:bg-gray-200 font-bold">
            <Link href="#">See the winners</Link>
          </Button>
        </div>
        <div className="md:col-span-8 h-80 md:h-full relative">
          <Image
            src="https://placehold.co/1000x600.png"
            alt="Traveler's Choice background"
            layout="fill"
            objectFit="cover"
            className="hidden md:block"
            data-ai-hint="travel award"
          />
          <Image
            src="https://placehold.co/600x400.png"
            alt="Traveler's Choice background"
            layout="fill"
            objectFit="cover"
            className="md:hidden"
            data-ai-hint="travel award"
          />
        </div>
      </div>
    </section>
  );
}
