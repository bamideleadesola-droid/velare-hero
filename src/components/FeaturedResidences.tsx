import { motion, useReducedMotion, type Transition } from "framer-motion";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

const sectionStats = [
  { label: "Residences from", value: "$3.5M" },
  { label: "Interior scale", value: "4,800 ft²" },
  { label: "Private terms", value: "By request" },
] as const;

const residences = [
  {
    count: "01/03",
    title: "The Atrium House",
    location: "Bel Air, Los Angeles",
    description:
      "A hillside residence shaped around light, water, and cinematic city views.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=88",
    details: ["5 suites", "7 baths", "8,200 ft²"],
  },
  {
    count: "02/03",
    title: "Villa Serein",
    location: "Palm Jumeirah, Dubai",
    description:
      "A waterside private home with layered terraces and a calm resort rhythm.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=88",
    details: ["4 suites", "Pool court", "6,450 ft²"],
  },
  {
    count: "03/03",
    title: "Casa Varenna",
    location: "Lake Como, Italy",
    description:
      "A contemporary lake residence with warm stone, glass, and quiet gardens.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=88",
    details: ["3 suites", "Private dock", "4,980 ft²"],
  },
] as const;

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FeaturedResidences() {
  const shouldReduceMotion = useReducedMotion();
  const [featured, ...secondaryResidences] = residences;

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.24 },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.8, delay, ease: easeOut },
  });

  return (
    <section
      id="residences"
      aria-labelledby="featured-residences-title"
      className="bg-[#f4f1ea] px-6 py-20 text-[#141414] md:px-12 md:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1460px]">
        <motion.div
          {...reveal()}
          className="grid gap-10 border-b border-[#141414]/15 pb-12 lg:grid-cols-12 lg:gap-6 lg:pb-16"
        >
          <div className="lg:col-span-2">
            <p className="font-sans text-[13px] font-medium leading-none tracking-[0.28em] text-[#7c735f]">
              002
            </p>
          </div>
          <div className="lg:col-span-6">
            <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#b89a68]">
              Featured Residences
            </p>
            <h2
              id="featured-residences-title"
              className="mt-6 max-w-[720px] font-display text-[42px] font-medium leading-[1.04] tracking-normal text-[#151515] md:text-[62px]"
            >
              A curated collection shaped by place, privacy, and proportion.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-11">
            <p className="max-w-[460px] font-sans text-[16px] font-normal leading-[1.75] tracking-normal text-[#5f5a51]">
              Each VELARÉ residence is selected for architectural clarity,
              spatial calm, and the rare atmosphere that makes a private home
              feel quietly complete.
            </p>
          </div>
        </motion.div>

        <motion.dl
          {...reveal(0.08)}
          className="grid border-b border-[#141414]/15 py-6 sm:grid-cols-3"
        >
          {sectionStats.map((stat) => (
            <div
              key={stat.label}
              className="border-[#141414]/12 py-5 sm:border-l sm:px-8 first:sm:border-l-0 first:sm:pl-0"
            >
              <dt className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.18em] text-[#7c735f]">
                {stat.label}
              </dt>
              <dd className="mt-3 font-display text-[30px] font-medium leading-none tracking-normal text-[#151515]">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>

        <div className="grid gap-8 pt-12 lg:grid-cols-12 lg:gap-6 lg:pt-16">
          <motion.article
            {...reveal(0.12)}
            className="lg:col-span-7"
          >
            <div className="group relative min-h-[520px] overflow-hidden rounded-[24px] bg-[#1d1d1d] md:min-h-[640px]">
              <img
                src={featured.image}
                alt={`${featured.title} exterior`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.16)_44%,rgba(0,0,0,0.7)_100%)]"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8 lg:p-10">
                <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-white/70">
                  {featured.count}
                </p>
                <h3 className="mt-4 font-display text-[38px] font-medium leading-none tracking-normal md:text-[52px]">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-[540px] font-sans text-[15px] leading-[1.7] text-white/78">
                  {featured.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.details.map((detail) => (
                    <span
                      key={detail}
                      className="rounded-full border border-white/28 bg-white/10 px-4 py-2 font-sans text-[12px] font-medium leading-none text-white backdrop-blur"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

          <motion.div
            {...reveal(0.2)}
            className="grid gap-4 lg:col-span-5"
          >
            <div className="rounded-[24px] border border-[#151515]/12 bg-[#ebe6dc] p-6 md:p-8">
              <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#b89a68]">
                Residence Index
              </p>
              <h3 className="mt-5 font-display text-[34px] font-medium leading-[1.08] tracking-normal text-[#151515]">
                Homes with quiet drama and considered detail.
              </h3>
              <a
                href="#private-tour"
                className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#151515] px-6 font-sans text-[14px] font-semibold leading-none text-white transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#2a2a2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b89a68]"
              >
                Book a Private Viewing
                <ArrowIcon />
              </a>
            </div>

            {secondaryResidences.map((residence) => (
              <article
                key={residence.title}
                className="group grid grid-cols-[112px_minmax(0,1fr)] overflow-hidden rounded-[22px] border border-[#151515]/12 bg-[#f8f6f1] md:grid-cols-[168px_minmax(0,1fr)]"
              >
                <div className="relative min-h-[150px] overflow-hidden">
                  <img
                    src={residence.image}
                    alt={`${residence.title} residence`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.18em] text-[#8c806b]">
                    {residence.count}
                  </p>
                  <h4 className="mt-3 font-display text-[25px] font-medium leading-none tracking-normal text-[#151515]">
                    {residence.title}
                  </h4>
                  <p className="mt-2 font-sans text-[13px] font-semibold leading-none text-[#6b6254]">
                    {residence.location}
                  </p>
                  <p className="mt-4 line-clamp-2 font-sans text-[13px] leading-[1.55] text-[#625d54]">
                    {residence.description}
                  </p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
