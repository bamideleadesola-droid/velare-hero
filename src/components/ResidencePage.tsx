import { motion, useReducedMotion, type Transition } from "framer-motion";
import { useMemo, useState } from "react";
import { residences, type Residence } from "./FeaturedResidences";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

const navItems = ["Home", "Residences", "Design", "Private Tours", "Agents"];

const navHrefByItem: Record<string, string> = {
  Home: "/",
  Residences: "/residences",
  Design: "/#residences",
  "Private Tours": "/#private-tour",
  Agents: "/#agents",
};

const residenceMeta = [
  {
    market: "Los Angeles",
    type: "Hillside Estate",
    price: "$8.7M",
    priceValue: 8.7,
    status: "Private Review",
    availability: "By appointment",
    units: "1 estate",
    available: "Private",
    progress: 72,
    release: "Newly released",
  },
  {
    market: "Dubai",
    type: "Waterfront Villa",
    price: "$6.4M",
    priceValue: 6.4,
    status: "By Request",
    availability: "Private mandate",
    units: "1 villa",
    available: "By request",
    progress: 58,
    release: "Limited access",
  },
  {
    market: "Lake Como",
    type: "Lake Residence",
    price: "$5.2M",
    priceValue: 5.2,
    status: "Private Review",
    availability: "Viewing window",
    units: "1 residence",
    available: "Limited",
    progress: 64,
    release: "Quiet release",
  },
  {
    market: "Cap Ferrat",
    type: "Sea Retreat",
    price: "$11.8M",
    priceValue: 11.8,
    status: "By Request",
    availability: "Private mandate",
    units: "1 retreat",
    available: "By request",
    progress: 82,
    release: "Ultra-prime",
  },
  {
    market: "Sonoma",
    type: "Ridge Pavilion",
    price: "$4.9M",
    priceValue: 4.9,
    status: "Preview Ready",
    availability: "Preview ready",
    units: "1 pavilion",
    available: "Open brief",
    progress: 44,
    release: "New brief",
  },
  {
    market: "Milos",
    type: "Island House",
    price: "$7.6M",
    priceValue: 7.6,
    status: "Private Review",
    availability: "By invitation",
    units: "1 island home",
    available: "Private",
    progress: 69,
    release: "Invitation only",
  },
] as const;

const filters = [
  "All Projects",
  "Private Review",
  "By Request",
  "Preview Ready",
  "Europe",
  "California",
] as const;

const sortOptions = ["Newest First", "Price High", "Price Low", "Name (A-Z)"] as const;

type Filter = (typeof filters)[number];
type SortOption = (typeof sortOptions)[number];

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

function ChevronIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path
        d="m7 10 5 5 5-5"
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
      className="h-8 w-8 shrink-0"
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

function ResidenceHeader() {
  return (
    <header className="relative z-20 flex items-center justify-between gap-6 py-8">
      <a
        href="/"
        aria-label="VELARÉ home"
        className="flex items-center gap-3 font-sans text-[24px] font-semibold uppercase leading-none tracking-[0.18em] text-white outline-none focus-visible:rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        <LogoMark />
        <span>VELARÉ</span>
      </a>

      <nav aria-label="Primary navigation" className="hidden lg:block">
        <ul className="flex items-center gap-10 font-sans text-[15px] font-medium leading-none tracking-normal text-white/90">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={navHrefByItem[item]}
                className="group relative inline-flex py-2 outline-none transition-colors duration-300 hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {item}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-2 left-0 h-px bg-white transition-all duration-300 ${
                    item === "Residences" ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-3">
        <a
          href="/#private-invitation"
          className="hidden min-h-12 items-center gap-3 rounded-full border border-white/70 px-6 font-sans text-[15px] font-medium leading-none text-white transition-[background-color,transform,border-color] duration-300 ease-in-out hover:-translate-y-0.5 hover:border-white hover:bg-white/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:inline-flex"
        >
          Contact Us
          <ArrowIcon />
        </a>
        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.16] text-white backdrop-blur transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-white/[0.24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <span className="flex flex-col gap-1.5">
            <span className="h-px w-5 bg-current" />
            <span className="h-px w-5 bg-current" />
            <span className="h-px w-5 bg-current" />
          </span>
        </button>
      </div>
    </header>
  );
}

function getMeta(index: number) {
  return residenceMeta[index % residenceMeta.length];
}

function matchesFilter(residence: Residence, index: number, filter: Filter) {
  if (filter === "All Projects") {
    return true;
  }

  const meta = getMeta(index);
  if (filter === "Europe") {
    return ["Lake Como", "Cap Ferrat", "Milos"].includes(meta.market);
  }

  if (filter === "California") {
    return ["Los Angeles", "Sonoma"].includes(meta.market);
  }

  return residence.location.includes(filter) || meta.status === filter;
}

export function ResidencePage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<Filter>("All Projects");
  const [sortBy, setSortBy] = useState<SortOption>("Newest First");

  const collection = useMemo(
    () =>
      residences.map((residence, index) => ({
        residence,
        index,
        meta: getMeta(index),
      })),
    [],
  );

  const visibleResidences = useMemo(() => {
    const filtered = collection.filter(({ residence, index }) =>
      matchesFilter(residence, index, activeFilter),
    );

    return [...filtered].sort((a, b) => {
      if (sortBy === "Price High") {
        return b.meta.priceValue - a.meta.priceValue;
      }

      if (sortBy === "Price Low") {
        return a.meta.priceValue - b.meta.priceValue;
      }

      if (sortBy === "Name (A-Z)") {
        return a.residence.title.localeCompare(b.residence.title);
      }

      return a.index - b.index;
    });
  }, [activeFilter, collection, sortBy]);

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
        className="relative isolate overflow-hidden bg-[#06131d] px-6 pb-20 pt-0 text-white md:px-12 md:pb-24 lg:px-10 lg:pb-32"
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
          <ResidenceHeader />

          <div className="grid gap-10 border-t border-white/14 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-6 lg:pt-28">
            <motion.div {...reveal(0.08)} className="lg:col-span-8">
              <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d]">
                Private Residence Collection
              </p>
              <h1
                id="residence-page-title"
                className="mt-6 max-w-[900px] font-display text-[52px] font-medium leading-[1.02] tracking-normal text-white md:text-[78px]"
              >
                Residences selected for privacy, proportion, and permanence.
              </h1>
            </motion.div>

            <motion.div {...reveal(0.16)} className="lg:col-span-4 lg:pt-11">
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
              ["Total", "06 residences"],
              ["Active", "06 private"],
              ["Entry", "From $4.9M"],
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
            <div className="lg:col-span-7">
              <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#b89a68]">
                Developments
              </p>
              <h2
                id="collection-title"
                className="mt-6 max-w-[720px] font-display text-[42px] font-medium leading-[1.04] tracking-normal md:text-[62px]"
              >
                Current private opportunities.
              </h2>
            </div>

            <p className="max-w-[470px] font-sans text-[16px] leading-[1.75] text-[#5f5a51] lg:col-span-4 lg:col-start-9 lg:pt-11">
              Browse the active collection with a project-style view: market,
              status, availability, starting value, and residence scale.
            </p>
          </motion.div>

          <motion.div
            {...reveal(0.08, 18)}
            className="mt-8 rounded-[28px] border border-[#151515]/10 bg-[#fbfaf7]/72 p-4 shadow-[0_18px_60px_rgba(88,74,50,0.08)] md:p-5"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.2em] text-[#b89a68]">
                  {visibleResidences.length} Property Developments
                </p>
                <p className="mt-2 font-sans text-[13px] leading-none text-[#6f685c]">
                  06 total · 06 active · Private access by request
                </p>
              </div>

              <label className="relative block min-w-full lg:min-w-[240px]">
                <span className="sr-only">Sort residences</span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value as SortOption)}
                  className="h-12 w-full appearance-none rounded-full border border-[#151515]/14 bg-white/70 py-0 pl-5 pr-12 font-sans text-[13px] font-semibold text-[#151515] outline-none transition-colors duration-300 focus:border-[#b89a68] lg:w-[240px]"
                >
                  {sortOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-5 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center text-[#b89a68]">
                  <ChevronIcon />
                </span>
              </label>
            </div>

            <div
              className="hide-scrollbar mt-5 flex gap-3 overflow-x-auto pb-1"
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
            </div>
          </motion.div>

          <div className="mt-10 grid gap-6">
            {visibleResidences.map(({ residence, index, meta }, itemIndex) => (
              <DevelopmentCard
                key={residence.title}
                residence={residence}
                meta={meta}
                index={index}
                shouldReduceMotion={Boolean(shouldReduceMotion)}
                delay={0.1 + itemIndex * 0.04}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#06131d] px-6 py-20 text-white md:px-12 md:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1460px] gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7">
            <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d]">
              Private Review
            </p>
            <h2 className="mt-6 max-w-[760px] font-display text-[42px] font-medium leading-[1.04] md:text-[62px]">
              Request the full residence brief.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:pt-11">
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

function DevelopmentCard({
  residence,
  meta,
  index,
  shouldReduceMotion,
  delay,
}: {
  residence: Residence;
  meta: (typeof residenceMeta)[number];
  index: number;
  shouldReduceMotion: boolean;
  delay: number;
}) {
  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={
        shouldReduceMotion ? { duration: 0 } : { duration: 0.72, delay, ease: easeOut }
      }
      className="group overflow-hidden rounded-[30px] border border-[#151515]/10 bg-[#fbfaf7]/82 shadow-[0_18px_60px_rgba(88,74,50,0.08)] transition-[border-color,transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-[#b89a68]/48 hover:shadow-[0_28px_90px_rgba(88,74,50,0.14)] lg:grid lg:grid-cols-[minmax(360px,0.92fr)_minmax(0,1.08fr)]"
    >
      <a
        href="/#private-invitation"
        className="relative block min-h-[360px] overflow-hidden outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b89a68] lg:min-h-[450px]"
        aria-label={`Request details for ${residence.title}`}
      >
        <img
          src={residence.image}
          alt={`${residence.title} residence`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
          loading="lazy"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.24)_38%,rgba(0,0,0,0.7)_100%)]"
        />
        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/22 bg-white/14 px-3 py-2 font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.16em] text-white backdrop-blur">
            {meta.type}
          </span>
          <span className="rounded-full border border-[#c6a87d]/45 bg-[#c6a87d]/18 px-3 py-2 font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.16em] text-[#f0d7b0] backdrop-blur">
            {meta.status}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
          <p className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.2em] text-white/58">
            {String(index + 1).padStart(2, "0")} · {meta.release}
          </p>
          <h3 className="mt-3 font-display text-[42px] font-medium leading-none md:text-[54px]">
            {residence.title}
          </h3>
        </div>
      </a>

      <div className="flex flex-col justify-between p-6 md:p-8">
        <div>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.2em] text-[#b89a68]">
                {meta.market}
              </p>
              <p className="mt-3 font-sans text-[14px] font-semibold leading-none text-[#6f685c]">
                {residence.location}
              </p>
            </div>

            <div className="sm:text-right">
              <p className="font-display text-[34px] font-medium leading-none text-[#151515]">
                {meta.price}
              </p>
              <p className="mt-2 font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.16em] text-[#7c735f]">
                Starting from
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-[660px] font-sans text-[15px] leading-[1.75] text-[#5f5a51]">
            {residence.description}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <DetailStat label="Total Units" value={meta.units} />
            <DetailStat label="Available" value={meta.available} />
            <DetailStat label="Access" value={meta.availability} />
          </div>

          <div className="mt-7">
            <div className="flex items-center justify-between gap-4">
              <p className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-[#7c735f]">
                Collection Availability
              </p>
              <p className="font-sans text-[11px] font-semibold leading-none text-[#151515]">
                {meta.progress}%
              </p>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#151515]/10">
              <motion.div
                className="h-full rounded-full bg-[#b89a68]"
                initial={shouldReduceMotion ? false : { width: 0 }}
                whileInView={{ width: `${meta.progress}%` }}
                viewport={{ once: true, amount: 0.5 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 1.1, delay: 0.12, ease: easeOut }
                }
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="/#private-invitation"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#151515] px-6 font-sans text-[13px] font-semibold leading-none text-white transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#2a2a2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b89a68]"
          >
            Explore Project
            <ArrowIcon />
          </a>
          <a
            href={`mailto:private@velare.residences?subject=${encodeURIComponent(
              `Private brief for ${residence.title}`,
            )}`}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#151515]/16 px-6 font-sans text-[13px] font-semibold leading-none text-[#151515] transition-[background-color,color,transform,border-color] duration-300 ease-in-out hover:-translate-y-0.5 hover:border-[#151515] hover:bg-[#151515] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b89a68]"
          >
            Request Brief
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function DetailStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[18px] border border-[#151515]/10 bg-white/48 p-4">
      <p className="font-sans text-[9px] font-semibold uppercase leading-none tracking-[0.16em] text-[#7c735f]">
        {label}
      </p>
      <p className="mt-3 font-display text-[22px] font-medium leading-none text-[#151515]">
        {value}
      </p>
    </div>
  );
}
