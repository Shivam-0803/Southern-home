import { GALLERY_IMAGES } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GalleryCarousel } from "@/components/gallery/GalleryCarousel";

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Work"
          align="center"
          title="A straight line, every time."
          description="Real fence lines, real gates, real jobs across Shreveport, Louisiana — swipe through a look at our recent work."
        />

        <Reveal delay={0.15} className="mt-16">
          <GalleryCarousel images={GALLERY_IMAGES} />
        </Reveal>
      </Container>
    </section>
  );
}
