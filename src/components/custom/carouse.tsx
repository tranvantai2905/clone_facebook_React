import React from "react";
import { Button } from "../ui/button";
import { useCarousel } from "../ui/carousel";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CustomCarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute  h-14 w-14 rounded-full bg-white outline-slate-600",
        orientation === "horizontal"
          ? "left-3 top-1/2 -translate-y-1/2"
          : "left-1/2 top-12 -translate-x-1/2 rotate-90",
        canScrollPrev === true ? "visible" : "invisible",
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-5 w-5" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CustomCarouselPrevious.displayName = "CustomCarouselPrevious";

const CustomCarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-14 w-14 rounded-full",
        orientation === "horizontal"
          ? "right-3 top-1/2 -translate-y-1/2"
          : "bottom-3 left-1/2 -translate-x-1/2 rotate-90",
        canScrollNext === true ? "visible" : "invisible",
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-5 w-5" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
CustomCarouselNext.displayName = "CustomCarouselNext";

export { CustomCarouselPrevious, CustomCarouselNext };
