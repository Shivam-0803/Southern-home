"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/lib/constants";
import {
  GALLERY_SCROLL_DURATION,
  useGalleryAutoplay,
} from "@/components/gallery/useGalleryAutoplay";

function GalleryCard({
  image,
  sizes,
}: {
  image: GalleryImage;
  sizes: string;
}) {
  return (
    <PhotoView src={image.src}>
      <div className="group relative aspect-[4/3] w-full cursor-grab overflow-hidden rounded-[1.75rem] bg-ink shadow-[0_20px_50px_rgba(11,11,10,0.14)] ring-1 ring-ink/5 active:cursor-grabbing">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          loading="lazy"
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-primary/0 opacity-70 transition-opacity duration-700 group-hover:opacity-90" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-ink backdrop-blur-sm">
          {image.category}
        </span>
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="flex items-center gap-2 rounded-full bg-primary/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
            <Expand className="h-3.5 w-3.5" />
            View Project
          </div>
        </div>
      </div>
    </PhotoView>
  );
}

export function GalleryCarousel({ images }: { images: GalleryImage[] }) {
  const autoplay = useGalleryAutoplay();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: false,
      duration: GALLERY_SCROLL_DURATION,
    },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing local dot-nav state from the embla instance on mount
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <PhotoProvider
      maskOpacity={0.94}
      speed={() => 400}
      easing={() => "cubic-bezier(0.16, 1, 0.3, 1)"}
    >
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y gap-5 md:gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className={cn(
                  "min-w-0 shrink-0 grow-0",
                  "basis-full",
                  "md:basis-[calc(100%/1.2)]",
                  "lg:basis-[calc(100%/1.4)]"
                )}
              >
                <GalleryCard
                  image={image}
                  sizes="(min-width: 1024px) 72vw, (min-width: 768px) 83vw, 100vw"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-9 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to gallery slide ${index + 1}`}
                onClick={() => emblaApi?.scrollTo(index)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  index === selectedIndex
                    ? "w-8 bg-primary"
                    : "w-3 bg-ink/15 hover:bg-ink/30"
                )}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/12 text-ink transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-white"
              aria-label="Previous gallery image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/12 text-ink transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-white"
              aria-label="Next gallery image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
}