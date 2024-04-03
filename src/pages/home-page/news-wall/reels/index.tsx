import {
  CustomCarouselPrevious,
  CustomCarouselNext,
} from "@/components/custom/carouse";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Reel from "./Reel";

import { useReels } from "./_custom-hooks";
import { ReelTyp } from "./_types";

const Reels = () => {
  const [reels] = useReels() as [ReelTyp[]];

  const renderReel = (reels: ReelTyp[]) =>
    reels?.map((reel, index) => (
      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
        <Reel reel={reel} />
      </CarouselItem>
    ));
  return (
    <div className="mt-5 w-[715px] px-16">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>{renderReel(reels)}</CarouselContent>
        <CustomCarouselPrevious />
        <CustomCarouselNext />
      </Carousel>
    </div>
  );
};

export default Reels;
