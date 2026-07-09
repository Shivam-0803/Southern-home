import { FAQS } from "@/lib/constants";
import { getFaqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AccordionItem } from "@/components/ui/AccordionItem";

export function FAQSection() {
  return (
    <section id="faq" className="relative bg-cream py-24 sm:py-32">
      <JsonLd data={getFaqSchema()} />
      <Container className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Fence contractor questions, answered."
          description="Everything homeowners in Shreveport ask us before their fence, gate, deck, or pergola project begins."
        />

        <Reveal delay={0.1}>
          <div className="rounded-[2rem] border border-ink/8 bg-card p-4 sm:p-8">
            {FAQS.map((faq) => (
              <AccordionItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
