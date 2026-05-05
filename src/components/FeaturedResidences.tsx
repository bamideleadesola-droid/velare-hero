import { motion, useReducedMotion, type Transition } from "framer-motion";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

const residences = [
  {
    count: "01/06",
    title: "The Atrium House",
    location: "Bel Air, Los Angeles",
    description:
      "A hillside residence shaped around light, water, and cinematic city views.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=88",
    details: ["5 suites", "7 baths", "8,200 ft²"],
  },
  {
    count: "02/06",
    title: "Villa Serein",
    location: "Palm Jumeirah, Dubai",
    description:
      "A waterside private home with layered terraces and a calm resort rhythm.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=88",
    details: ["4 suites", "Pool court", "6,450 ft²"],
  },
  {
    count: "03/06",
    title: "Casa Varenna",
    location: "Lake Como, Italy",
    description:
      "A contemporary lake residence with warm stone, glass, and quiet gardens.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=88",
    details: ["3 suites", "Private dock", "4,980 ft²"],
  },
  {
    count: "04/06",
    title: "Maison Verre",
    location: "Cap Ferrat, France",
    description:
      "A glass-framed retreat composed around sea air, limestone, and shade.",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=88",
    details: ["6 suites", "Sea terrace", "9,100 ft²"],
  },
  {
    count: "05/06",
    title: "Ridge Pavilion",
    location: "Sonoma, California",
    description:
      "A low-slung residence where timber, stone, and horizon lines stay quiet.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=88",
    details: ["4 suites", "Wine room", "5,760 ft²"],
  },
  {
    count: "06/06",
    title: "Villa Noma",
    location: "Milos, Greece",
    description:
      "A private island house with open courtyards and whitewashed calm.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=88",
    details: ["5 suites", "Cliff pool", "7,400 ft²"],
  },
] as const;

const collectionTerms = [
  { label: "Residences from", value: "$3.5M" },
  { label: "Interior scale", value: "4,800 ft²+" },
  { label: "Access", value: "Private viewings" },
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
  const [featured, ...galleryResidences] = residences;
  const galleryLoop = [...residences, ...residences];

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
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

        <motion.div
          {...reveal(0.08)}
          className="relative mt-10 overflow-hidden rounded-[26px] border border-[#151515]/10 bg-[#ebe6dc] p-3 md:mt-12"
        >
          <motion.div
            className="flex w-max gap-3"
            animate={shouldReduceMotion ? { x: 0 } : { x: ["0%", "-50%"] }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 34,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
          >
            {galleryLoop.map((residence, index) => (
              <figure
                key={`${residence.title}-${index}`}
                className="relative h-[132px] w-[220px] shrink-0 overflow-hidden rounded-[18px] bg-[#d8d1c4] md:h-[168px] md:w-[288px]"
              >
                <img
                  src={residence.image}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_28%,rgba(0,0,0,0.48)_100%)]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 font-sans text-[12px] font-semibold leading-none text-white">
                  {residence.title}
                </figcaption>
              </figure>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid gap-6 pt-10 lg:grid-cols-12 lg:pt-14">
          <motion.article {...reveal(0.12)} className="lg:col-span-6">
            <ResidenceImageCard residence={featured} isFeatured />
          </motion.article>

          <div className="grid gap-4 md:grid-cols-2 lg:col-span-6">
            {galleryResidences.map((residence, index) => (
              <motion.article
                key={residence.title}
                {...reveal(0.16 + index * 0.05)}
              >
                <ResidenceImageCard residence={residence} />
              </motion.article>
            ))}

            <motion.aside
              {...reveal(0.28)}
              className="rounded-[24px] border border-[#151515]/12 bg-[#ebe6dc] p-6 md:p-7"
            >
              <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#b89a68]">
                Collection Terms
              </p>
              <dl className="mt-6 space-y-4">
                {collectionTerms.map((term) => (
                  <div
                    key={term.label}
                    className="flex items-baseline justify-between gap-5 border-b border-[#151515]/10 pb-4 last:border-b-0 last:pb-0"
                  >
                    <dt className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.16em] text-[#7c735f]">
                      {term.label}
                    </dt>
                    <dd className="text-right font-display text-[24px] font-medium leading-none text-[#151515]">
                      {term.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href="#private-tour"
                className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#151515] px-6 font-sans text-[14px] font-semibold leading-none text-white transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#2a2a2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b89a68]"
              >
                Book a Private Viewing
                <ArrowIcon />
              </a>
            </motion.aside>
          </div>
        </div>
      </div>
    </section>
  );
}

type Residence = (typeof residences)[number];

function ResidenceImageCard({
  residence,
  isFeatured = false,
}: {
  residence: Residence;
  isFeatured?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[24px] bg-[#1d1d1d] ${
        isFeatured ? "min-h-[560px] md:min-h-[690px]" : "min-h-[310px]"
      }`}
    >
      <img
        src={residence.image}
        alt={`${residence.title} residence`}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        loading={isFeatured ? "eager" : "lazy"}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.2)_42%,rgba(0,0,0,0.72)_100%)]"
      />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6 lg:p-8">
        <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.22em] text-white/70">
          {residence.count}
        </p>
        <h3
          className={`mt-3 font-display font-medium leading-none tracking-normal ${
            isFeatured ? "text-[38px] md:text-[54px]" : "text-[28px]"
          }`}
        >
          {residence.title}
        </h3>
        <p className="mt-2 font-sans text-[13px] font-semibold leading-none text-white/72">
          {residence.location}
        </p>
        <p
          className={`mt-4 max-w-[560px] font-sans leading-[1.65] text-white/78 ${
            isFeatured ? "text-[15px]" : "line-clamp-2 text-[13px]"
          }`}
        >
          {residence.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {residence.details.map((detail) => (
            <span
              key={detail}
              className="rounded-full border border-white/28 bg-white/10 px-3.5 py-2 font-sans text-[11px] font-medium leading-none text-white backdrop-blur"
            >
              {detail}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
