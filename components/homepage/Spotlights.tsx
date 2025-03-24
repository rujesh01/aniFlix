"use client";
import { SpotlightAnimes } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  AudioLinesIcon,
  Calendar,
  CaptionsIcon,
  Clock,
  InfoIcon,
  Play,
  PlayCircleIcon,
} from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";

interface SpotlightsProps {
  spotlightAnimes: SpotlightAnimes[];
}

const Spotlights = ({ spotlightAnimes }: SpotlightsProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section>
      <Carousel
        className="relative 2xl:container mx-auto"
        plugins={[
          Autoplay({
            delay: 9000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          {spotlightAnimes.map((anime) => (
            <CarouselItem key={anime.id} className="">
              <div className="relative h-[290px]  w-full sm:h-[500px] lg:h-[650px]">
                <Image src={anime.poster} alt={anime.name} fill />
                <div className="absolute  inset-0 bg-gradient-to-r from-black/90 to-transparent" />
                <div className="z-10 flex gap-2 flex-col absolute bottom-0 max-w-3/4 left-0 right-0 p-4">
                  <span>#{anime.rank} Rank</span>
                  <h1 className="text-lg sm:text-xl md:text-4xl font-black ">
                    {anime.name}
                  </h1>
                  <div className="flex flex-wrap  gap-3">
                    <Badge>
                      <PlayCircleIcon /> {anime.otherInfo[0]}.
                    </Badge>
                    <Badge>
                      <Clock /> {anime.otherInfo[1]}.
                    </Badge>

                    <Badge>
                      <Calendar /> {anime.otherInfo[2]}{" "}
                    </Badge>
                    <Badge variant={"secondary"}>{anime.otherInfo[3]}</Badge>
                    <Badge>
                      <CaptionsIcon />
                      {anime.episodes.sub} /
                      <AudioLinesIcon size={20} />
                      {anime.episodes.dub}
                    </Badge>
                  </div>
                  <p className="text-sm hidden md:block line-clamp-3 sm:line-clamp-5 ">
                    {anime.description}
                  </p>
                  <div className="flex gap-3">
                    <Button asChild>
                      <Link href={`/watch/${anime.id}`}>
                        <Play size={20} />
                        Watch Now
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link href={`/info`}>
                        <InfoIcon size={20} />
                        More Info
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-[-40px] right-1/2  ">
          <CarouselPrevious />
          {current}/{count}
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
};

export default Spotlights;
