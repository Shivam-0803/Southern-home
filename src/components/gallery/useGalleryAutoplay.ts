import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

/** Autoplay interval for the gallery carousel. */
export const GALLERY_AUTOPLAY_DELAY = 2800;

/** Embla scroll animation duration. */
export const GALLERY_SCROLL_DURATION = 32;

export function useGalleryAutoplay() {
  return useRef(
    Autoplay({
      delay: GALLERY_AUTOPLAY_DELAY,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    })
  );
}
