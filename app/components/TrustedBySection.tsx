"use client";

export default function TrustedBySection() {
  const logos = [
    { name: "OpenAI", src: "/assets/logos/openai.svg" },
    { name: "Amazon", src: "/assets/logos/amazon.svg" },
    { name: "NVIDIA", src: "/assets/logos/nvidia.svg" },
    { name: "Ford", src: "/assets/logos/ford.svg" },
    { name: "Coinbase", src: "/assets/logos/coinbase.svg" },
    { name: "Google", src: "/assets/logos/google.svg" },
    { name: "Shopify", src: "/assets/logos/shopify.svg" },
    { name: "Mindbody", src: "/assets/logos/mindbody.svg" },
    { name: "MetLife", src: "/assets/logos/metlife.svg" },
    { name: "Figma", src: "/assets/logos/figma.svg" },
  ];

  // Duplicate for seamless loop
  const allLogos = [...logos, ...logos];

  return (
    <section className="relative bg-white pt-6 pb-14 sm:pt-8 sm:pb-20 overflow-hidden">
      <div className="text-center mb-10 sm:mb-12">
        <p className="text-sm font-semibold tracking-widest uppercase text-gray-400">
          Trusted by leading companies worldwide
        </p>
      </div>

      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex items-center animate-marquee group/track">
          {allLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center px-6 md:px-8 group/item"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 md:h-10 w-auto object-contain grayscale opacity-40 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
