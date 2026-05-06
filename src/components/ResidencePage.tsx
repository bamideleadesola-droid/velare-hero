import { AnimatePresence, motion, useReducedMotion, type Transition } from "framer-motion";
import { useMemo, useState } from "react";
import { residences, type Residence } from "./FeaturedResidences";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

const residenceMeta = [
  {
    market: "Los Angeles",
    type: "Hillside Estate",
    price: "$8.7M",
    availability: "Private review",
  },
  {
    market: "Dubai",
    type: "Waterfront Villa",
    price: "$6.4M",
    availability: "By request",
  },
  {
    market: "Lake Como",
    type: "Lake Residence",
    price: "$5.2M",
    availability: "Limited access",
  },
  {
    market: "Cap Ferrat",
    type: "Sea Retreat",
    price: "$11.8M",
    availability: "Private mandate",
  },
  {
    market: "Sonoma",
    type: "Ridge Pavilion",
    price: "$4.9M",
    availability: "Preview ready",
  },
  {
    market: "Milos",
    type: "Island House",
    price: "$7.6M",
    availability: "By invitation",
  },
] as const;

const filters = ["All", "Los Angeles", "Dubai", "Lake Como", "Europe", "California"] as const;

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

function LogoMark() {
  return (
    <svg
      aria-hidden="true"
      className="h-7 w-7 shrink-0"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M5 14.2 16 5l11 9.2v12.3H5V14.2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M11 26.5V16.2h10v10.3M13.8 16.2v-4.4h4.4v4.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function getMeta(index: number) {
  return residenceMeta[index % residenceMeta.length];
}

function matchesFilter(residence: Residence, index: number, filter: (typeof filters)[number]) {
  if (filter === "All") {
    return true;
  }

  const meta = getMeta(index);
  if (filter === "Europe") {
    return ["Lake Como", "Cap Ferrat", "Milos"].includes(meta.market);
  }

  if (filter === "California") {
    return ["Los Angeles", "Sonoma"].includes(meta.market);
  }

  return residence.location.includes(filter) || meta.market === filter;
}

export function ResidencePage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const collection = useMemo(
    () =>
      residences.map((residence, index) => ({
        residence,
        index,
        meta: getMeta(index),
      })),
    [],
  );

  const visibleResidences = collection.filter(({ residence, index }) =>
    matchesFilter(residence, index, activeFilter),
  );

  const selected = collection[selectedIndex] ?? collection[0];
  const heroResidence = residences[0];

  const reveal = (delay = 0, y = 24) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.78, delay, ease: easeOut },
  });

  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#141414]">
      <section
        aria-labelledby="residence-page-title"
        className="relative isolate overflow-hidden bg-[#06131d] px-6 pb-20 pt-6 text-white md:px-12 md:pb-24 lg:px-10 lg:pb-32"
      >
        <img
          src={heroResidence.image}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-[62%_center] opacity-[0.62]"
          fetchPriority="high"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(3,7,18,0.96)_0%,rgba(15,23,42,0.86)_38%,rgba(88,28,135,0.54)_66%,rgba(6,19,29,0.24)_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_78%_18%,rgba(198,168,125,0.24),transparent_28%)]"
        />
        <div aria-hidden="true" className="velare-grain pointer-events-none absolute inset-0 z-0" />

        <div className="relative z-10 mx-auto max-w-[1460px]">
          <header className="flex items-center justify-between gap-6 py-6">
            <a
              href="/"
              aria-label="VELARÉ home"
              className="flex items-center gap-3 font-sans text-[22px] font-semibold uppercase leading-none tracking-[0.18em] text-white outline-none focus-visible:rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a87d]"
            >
              <LogoMark />
              <span>VELARÉ</span>
            </a>

            <nav aria-label="Residence navigation" className="hidden md:block">
              <ul className="flex items-center gap-8 font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.16em] text-white/64">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 hover:text-[#c6a87d] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a87d]"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-[#c6a87d]" href="/residences">
                    Residences
                  </a>
                </li>
                <li>
                  <a
                    href="/#private-invitation"
                    className="transition-colors duration-300 hover:text-[#c6a87d] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a87d]"
                  >
                    Private Access
                  </a>
                </li>
              </ul>
            </nav>
          </header>

          <div className="grid gap-10 border-t border-white/14 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-6 lg:pt-28">
            <motion.div {...reveal()} className="lg:col-span-2">
              <div className="flex items-center gap-4 lg:block">
                <p className="font-sans text-[14px] font-semibold leading-none tracking-[0.28em] text-[#c6a87d]">
                  001
                </p>
                <span
                  aria-hidden="true"
                  className="block h-px w-10 bg-[#c6a87d]/65 lg:mt-5"
                />
              </div>
            </motion.div>

            <motion.div {...reveal(0.08)} className="lg:col-span-7">
              <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d]">
                Private Residence Collection
              </p>
              <h1
                id="residence-page-title"
                className="mt-6 max-w-[860px] font-display text-[52px] font-medium leading-[1.02] tracking-normal text-white md:text-[78px]"
              >
                Residences selected for privacy, proportion, and permanence.
              </h1>
            </motion.div>

            <motion.div {...reveal(0.16)} className="lg:col-span-3 lg:pt-11">
              <p className="max-w-[440px] font-sans text-[16px] leading-[1.75] text-white/68">
                Explore the VELARÉ collection through architecture, market
                character, and the private details that shape each residence.
              </p>
              <a
                href="#collection"
                className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#c6a87d] px-6 font-sans text-[14px] font-semibold leading-none text-[#111111] transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#d8bb91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a87d]"
              >
                View Collection
                <ArrowIcon />
              </a>
            </motion.div>
          </div>

          <motion.dl
            {...reveal(0.22, 18)}
            className="mt-16 grid gap-px overflow-hidden rounded-[26px] border border-white/14 bg-white/10 backdrop-blur-2xl md:grid-cols-3"
          >
            {[
              ["Collection", "06 residences"],
              ["Entry", "From $4.9M"],
              ["Access", "Private review"],
            ].map(([label, value]) => (
              <div key={label} className="bg-white/[0.055] p-6 md:p-7">
                <dt className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.2em] text-[#c6a87d]">
                  {label}
                </dt>
                <dd className="mt-4 font-display text-[30px] font-medium leading-none text-white md:text-[36px]">
                  {value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </section>

      <section
        id="collection"
        aria-labelledby="collection-title"
        className="px-6 py-20 md:px-12 md:py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-[1460px]">
          <motion.div
            {...reveal()}
            className="grid gap-10 border-b border-[#141414]/15 pb-12 lg:grid-cols-12 lg:gap-6 lg:pb-16"
          >
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 lg:block">
                <p className="font-sans text-[14px] font-semibold leading-none tracking-[0.28em] text-[#b89a68]">
                  002
                </p>
                <span
                  aria-hidden="true"
                  className="block h-px w-10 bg-[#b89a68]/60 lg:mt-5"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#b89a68]">
                Collection Index
              </p>
              <h2
                id="collection-title"
                className="mt-6 max-w-[720px] font-display text-[42px] font-medium leading-[1.04] tracking-normal md:text-[62px]"
              >
                Compare residences through market, scale, and atmosphere.
              </h2>
            </div>

            <p className="max-w-[470px] font-sans text-[16px] leading-[1.75] text-[#5f5a51] lg:col-span-4 lg:pt-11">
              Each card opens into a larger preview, keeping the page calm while
              still giving enough image-led detail to understand the residence.
            </p>
          </motion.div>

          <motion.div
            {...reveal(0.08, 18)}
            className="hide-scrollbar mt-8 flex gap-3 overflow-x-auto pb-1"
            role="group"
            aria-label="Filter residences"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`min-h-11 shrink-0 rounded-full border px-5 font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.14em] transition-[background-color,color,border-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b89a68] ${
                  activeFilter === filter
                    ? "border-[#151515] bg-[#151515] text-white"
                    : "border-[#151515]/16 bg-white/35 text-[#5f5a51] hover:border-[#151515]/40"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          <div className="grid gap-8 pt-10 lg:grid-cols-12 lg:pt-14">
            <motion.aside
              {...reveal(0.12)}
              className="relative overflow-hidden rounded-[30px] bg-[#111111] text-white shadow-[0_28px_90px_rgba(52,42,28,0.18)] lg:sticky lg:top-8 lg:col-span-5 lg:h-[720px]"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selected.residence.image}
                  src={selected.residence.image}
                  alt={`${selected.residence.title} residence preview`}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.035 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 1.01 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.72, ease: easeOut }
                  }
                />
              </AnimatePresence>
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.24)_42%,rgba(0,0,0,0.82)_100%)]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-[#c6a87d]"
              />

              <div className="relative flex min-h-[620px] flex-col justify-end p-6 md:min-h-[720px] md:p-8">
                <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.22em] text-white/64">
                  {selected.residence.count}
                </p>
                <h3 className="mt-3 font-display text-[44px] font-medium leading-none md:text-[58px]">
                  {selected.residence.title}
                </h3>
                <p className="mt-4 font-sans text-[13px] font-semibold leading-none text-[#c6a87d]">
                  {selected.residence.location}
                </p>
                <p className="mt-5 max-w-[520px] font-sans text-[15px] leading-[1.7] text-white/76">
                  {selected.residence.description}
                </p>

                <dl className="mt-7 grid gap-3 sm:grid-cols-3">
                  {selected.residence.details.map((detail) => (
                    <div
                      key={detail}
                      className="rounded-[16px] border border-white/16 bg-white/10 p-4 backdrop-blur"
                    >
                      <dt className="font-sans text-[9px] font-semibold uppercase leading-none tracking-[0.16em] text-white/48">
                        Detail
                      </dt>
                      <dd className="mt-2 font-display text-[22px] font-medium leading-none">
                        {detail}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.aside>

            <div className="grid gap-5 lg:col-span-7">
              {visibleResidences.map(({ residence, index, meta }, itemIndex) => (
                <ResidenceListCard
                  key={residence.title}
                  residence={residence}
                  meta={meta}
                  index={index}
                  isSelected={selected.index === index}
                  shouldReduceMotion={Boolean(shouldReduceMotion)}
                  onSelect={() => setSelectedIndex(index)}
                  delay={0.12 + itemIndex * 0.04}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#06131d] px-6 py-20 text-white md:px-12 md:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1460px] gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 lg:block">
              <p className="font-sans text-[14px] font-semibold leading-none tracking-[0.28em] text-[#c6a87d]">
                003
              </p>
              <span
                aria-hidden="true"
                className="block h-px w-10 bg-[#c6a87d]/65 lg:mt-5"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d]">
              Private Review
            </p>
            <h2 className="mt-6 max-w-[760px] font-display text-[42px] font-medium leading-[1.04] md:text-[62px]">
              Request the full residence brief.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pt-11">
            <p className="max-w-[470px] font-sans text-[16px] leading-[1.75] text-white/66">
              Full availability, pricing context, and private viewing windows are
              shared after a short introduction with the VELARÉ private office.
            </p>
            <a
              href="/#private-invitation"
              className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#c6a87d] px-6 font-sans text-[14px] font-semibold leading-none text-[#111111] transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#d8bb91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a87d]"
            >
              Request Private Access
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ResidenceListCard({
  residence,
  meta,
  index,
  isSelected,
  shouldReduceMotion,
  onSelect,
  delay,
}: {
  residence: Residence;
  meta: (typeof residenceMeta)[number];
  index: number;
  isSelected: boolean;
  shouldReduceMotion: boolean;
  onSelect: () => void;
  delay: number;
}) {
  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={
        shouldReduceMotion ? { duration: 0 } : { duration: 0.72, delay, ease: easeOut }
      }
      className={`group grid overflow-hidden rounded-[28px] border bg-[#fbfaf7]/74 shadow-[0_18px_60px_rgba(88,74,50,0.08)] transition-[border-color,transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(88,74,50,0.13)] md:grid-cols-[220px_minmax(0,1fr)] ${
        isSelected ? "border-[#b89a68]/70" : "border-[#151515]/10"
      }`}
    >
      <button
        type="button"
        onClick={onSelect}
        className="relative min-h-[280px] overflow-hidden text-left outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b89a68] md:min-h-full"
        aria-label={`Preview ${residence.title}`}
      >
        <img
          src={residence.image}
          alt={`${residence.title} residence`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
          loading="lazy"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.5)_100%)]"
        />
        <span className="absolute left-5 top-5 rounded-full border border-white/22 bg-white/14 px-3 py-2 font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.16em] text-white backdrop-blur">
          {String(index + 1).padStart(2, "0")}
        </span>
      </button>

      <div className="p-5 md:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.2em] text-[#b89a68]">
              {meta.type}
            </p>
            <h3 className="mt-3 font-display text-[34px] font-medium leading-none text-[#151515] md:text-[40px]">
              {residence.title}
            </h3>
            <p className="mt-3 font-sans text-[13px] font-semibold leading-none text-[#6f685c]">
              {residence.location}
            </p>
          </div>

          <div className="sm:text-right">
            <p className="font-display text-[30px] font-medium leading-none text-[#151515]">
              {meta.price}
            </p>
            <p className="mt-2 font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.16em] text-[#7c735f]">
              {meta.availability}
            </p>
          </div>
        </div>

        <p className="mt-5 max-w-[620px] font-sans text-[14px] leading-[1.65] text-[#625d54]">
          {residence.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {residence.details.map((detail) => (
            <span
              key={detail}
              className="rounded-full border border-[#151515]/12 bg-white/50 px-3 py-2 font-sans text-[11px] font-semibold leading-none text-[#514b43]"
            >
              {detail}
            </span>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {residence.detailScenes.map((scene) => (
            <figure
              key={scene.label}
              className="relative h-[112px] overflow-hidden rounded-[16px] bg-[#d8d1c4]"
            >
              <img
                src={scene.image}
                alt={`${residence.title} ${scene.label.toLowerCase()}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/62 to-transparent p-3 font-sans text-[9px] font-semibold uppercase leading-none tracking-[0.14em] text-white/74">
                {scene.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <button
          type="button"
          onClick={onSelect}
          className="mt-6 inline-flex min-h-11 items-center gap-3 rounded-full border border-[#151515]/16 px-5 font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.14em] text-[#151515] transition-[background-color,color,transform,border-color] duration-300 ease-in-out hover:-translate-y-0.5 hover:border-[#151515] hover:bg-[#151515] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b89a68]"
        >
          Review Residence
          <ArrowIcon />
        </button>
      </div>
    </motion.article>
  );
}
