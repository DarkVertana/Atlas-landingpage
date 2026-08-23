import type { ReactNode } from "react";
import Reveal from "../Reveal";
import SectionHeader from "./SectionHeader";

/* "What's included" for every service page. An editorial, hairline-ruled spec
   list — NOT a grid of boxed cards. Features read as horizontal entries in two
   columns divided by thin rules; each entry's icon fills on hover and a short
   accent rule slides in on the left. Generic over any feature count, so every
   service page shares one intentional treatment. */

export type Feature = {
  title: string;
  desc: string;
  icon: ReactNode;
};

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  features: Feature[];
};

export default function FeatureGrid({ eyebrow = "What's included", title, intro, features }: Props) {
  return (
    <section className="bg-white py-14 sm:py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow={eyebrow} title={title} intro={intro} className="mb-12" />

        <div className="grid gap-x-14 md:grid-cols-2">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 2) * 60 + Math.floor(i / 2) * 40}
              className="group relative flex items-start gap-5 border-t border-gray-200 py-7 first:border-t-0 md:[&:nth-child(2)]:border-t-0"
            >
              {/* left accent rule slides in on hover */}
              <span className="absolute left-0 top-7 h-9 w-[3px] origin-top scale-y-0 rounded-full bg-[#058B74] transition-transform duration-300 group-hover:scale-y-100" />

              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#058B74]/8 text-[#058B74] ring-1 ring-inset ring-[#058B74]/10 transition-all duration-300 group-hover:bg-[#058B74] group-hover:text-white group-hover:ring-[#058B74]">
                {f.icon}
              </span>

              <div className="min-w-0 pt-0.5">
                <h3 className="text-[15px] font-semibold text-[#01463A] transition-colors duration-300 group-hover:text-[#058B74]">
                  {f.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-gray-500">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
