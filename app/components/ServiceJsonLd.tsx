/* Server-safe structured data for service pages: Service + BreadcrumbList +
   FAQPage. All copy is factual and FCRA-safe — no performance or accuracy
   guarantees, no coverage absolutes. */

type Faq = { q: string; a: string };

type Props = {
  name: string; // short service name, e.g. "Motor Vehicle Records (MVR)"
  description: string;
  faqs?: Faq[];
  path: string; // canonical path, e.g. "/services/mvr"
};

const BASE = "https://atlasscreening.com";

export default function ServiceJsonLd({ name, description, faqs = [], path }: Props) {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Service",
      "@id": `${BASE}${path}#service`,
      name,
      description,
      url: `${BASE}${path}`,
      provider: { "@type": "Organization", name: "Atlas Screening", url: BASE },
      serviceType: name,
      areaServed: { "@type": "Country", name: "United States" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` },
        { "@type": "ListItem", position: 3, name, item: `${BASE}${path}` },
      ],
    },
  ];

  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  const schema = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
