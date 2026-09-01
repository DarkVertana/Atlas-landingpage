import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CTASection from "../../components/CTASection";
import ServicePricing from "../../components/ServicePricing";
import Reveal from "../../components/Reveal";
import FeatureGrid from "../../components/ui/FeatureGrid";
import ServiceHero from "../../components/ui/ServiceHero";
import ProductShowcase from "../../components/ProductShowcase";
import ServiceJsonLd from "../../components/ServiceJsonLd";
import { INDUSTRIES } from "../data";
import { ICONS } from "../icons";

export function generateStaticParams() {
  return Object.keys(INDUSTRIES).map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const data = INDUSTRIES[slug];
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/industries/${data.slug}` },
  };
}

export default async function IndustryPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const data = INDUSTRIES[slug];
  if (!data) notFound();

  const features = data.features.map((f) => ({
    title: f.title,
    desc: f.desc,
    icon: ICONS[f.icon],
  }));

  return (
    <main id="main" className="bg-white text-[#01463A]">
      <ServiceJsonLd
        name={data.name}
        description={data.metaDescription}
        faqs={data.faqs}
        path={`/industries/${data.slug}`}
      />

      <ServiceHero
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        description={data.hero.description}
        image={data.hero.image}
      />

      <FeatureGrid
        eyebrow="What matters here"
        title={data.featuresTitle}
        intro={data.featuresIntro}
        features={features}
      />

      <ProductShowcase
        eyebrow={data.showcase.eyebrow}
        title={data.showcase.title}
        highlight={data.showcase.highlight}
        description={data.showcase.description}
        bullets={data.showcase.bullets}
        image="/assets/app/customer-dashboard.webp"
        imageAlt={`Atlas Screening dashboard for ${data.name.toLowerCase()}`}
        badges={[
          { label: "Identity verified", tone: "clear", position: "-top-4 -left-4" },
          { label: "Report ready", tone: "info", position: "top-1/2 -right-5" },
          { label: "Real-time status", tone: "info", position: "-bottom-4 left-10" },
        ]}
      />

      <ServicePricing />

      {/* FAQ */}
      <section className="bg-white py-14 sm:py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <Reveal as="h2" className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              Questions from {data.name.toLowerCase()}.
            </Reveal>
            <Reveal as="p" delay={80} className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              How screening works for your team, what returns quickly, and where
              compliance is handled for you.
            </Reveal>
          </div>

          <div className="space-y-3">
            {data.faqs.map((faq, i) => (
              <Reveal
                key={faq.q}
                as="details"
                delay={i * 60}
                className="group rounded-2xl border border-gray-200 bg-white hover:border-[#058B74]/40 hover:shadow-md hover:shadow-[#058B74]/5 open:border-[#058B74]/40 open:shadow-md open:shadow-[#058B74]/5 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2">
                  <span className="text-sm md:text-base font-semibold text-[#01463A] group-hover:text-[#058B74] group-open:text-[#058B74] transition-colors">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#058B74]/10 text-[#058B74] flex items-center justify-center ring-1 ring-inset ring-[#058B74]/10 transition-all duration-300 group-open:rotate-45 group-open:bg-[#058B74] group-open:text-white group-open:ring-[#058B74]">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M8 3v10M3 8h10" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 -mt-1 text-sm text-gray-500 leading-relaxed">
                  {faq.a}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
