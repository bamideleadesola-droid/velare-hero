import { motion, useReducedMotion, type Transition } from "framer-motion";
import { useMemo, useState } from "react";
import { residences, type Residence } from "./FeaturedResidences";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

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
    <main className="min-h-screen overflow-x-hidden bg-[#f4f1ea] text-[#141414]">
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

        <div className="relative z-10 mx-auto w-full min-w-0 max-w-[1460px]">
          <SiteHeader activeItem="Residences" />

          <div className="grid min-w-0 gap-10 border-t border-white/14 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-6 lg:pt-28">
            <motion.div {...reveal(0.08)} className="min-w-0 lg:col-span-8">
              <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d]">
                Private Residence Collection
              </p>
              <h1
                id="residence-page-title"
                className="mt-6 max-w-[330px] break-words font-display text-[40px] font-medium leading-[1.02] tracking-normal text-white sm:max-w-full sm:text-[52px] md:max-w-[900px] md:text-[78px]"
              >
                Residences selected for privacy, proportion, and permanence.
              </h1>
            </motion.div>

            <motion.div {...reveal(0.16)} className="min-w-0 lg:col-span-4 lg:pt-11">
              <p className="max-w-[330px] font-sans text-[16px] leading-[1.75] text-white/68 sm:max-w-full md:max-w-[440px]">
                Explore the VELARÉ collection through architecture, market
                character, and the private details that shape each residence.
              </p>
              <a
                href="#collection"
                className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#581c87] px-6 font-sans text-[14px] font-semibold leading-none text-white shadow-[0_16px_38px_rgba(88,28,135,0.22)] transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#6d28a7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#581c87]"
              >
                View Collection
                <ArrowIcon />
              </a>
            </motion.div>
          </div>

          <motion.dl
            {...reveal(0.22, 18)}
            className="mt-16 grid w-[calc(100vw_-_48px)] max-w-full gap-px overflow-hidden rounded-[26px] border border-white/14 bg-white/10 backdrop-blur-2xl md:w-full md:grid-cols-3"
          >
            {[
              ["Total", "06 residences"],
              ["Active", "06 private"],
              ["Entry", "From $4.9M"],
            ].map(([label, value]) => (
              <div key={label} className="min-w-0 bg-white/[0.055] p-6 md:p-7">
                <dt className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.2em] text-[#c6a87d]">
                  {label}
                </dt>
                <dd className="mt-4 font-display text-[28px] font-medium leading-none text-white sm:text-[30px] md:text-[36px]">
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
        <div className="mx-auto w-full min-w-0 max-w-[1460px]">
          <motion.div
            {...reveal()}
            className="grid min-w-0 gap-10 border-b border-[#141414]/15 pb-12 lg:grid-cols-12 lg:gap-6 lg:pb-16"
          >
            <div className="min-w-0 lg:col-span-7">
              <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#581c87]">
                Developments
              </p>
              <h2
                id="collection-title"
                className="mt-6 max-w-[720px] font-display text-[42px] font-medium leading-[1.04] tracking-normal md:text-[62px]"
              >
                Current private opportunities.
              </h2>
            </div>

            <p className="max-w-[330px] font-sans text-[16px] leading-[1.75] text-[#5f5a51] sm:max-w-full lg:col-span-4 lg:col-start-9 lg:max-w-[470px] lg:pt-11">
              A quieter project view, led by image, market, value, and access.
            </p>
          </motion.div>

          <motion.div
            {...reveal(0.08, 18)}
            className="mt-8 w-[calc(100vw_-_48px)] max-w-full rounded-[30px] border border-[#581c87]/12 bg-[#fbfaf7]/78 p-4 shadow-[0_18px_60px_rgba(88,74,50,0.08)] md:w-full md:p-5"
          >
            <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
              <div className="grid gap-3 sm:grid-cols-3 xl:min-w-[620px]">
                <SummaryChip label="Newest Listings" value={`${visibleResidences.length} shown`} />
                <SummaryChip label="Access" value="Private review" />
                <SummaryChip label="Entry" value="From $4.9M" />
              </div>

              <label className="relative block min-w-full xl:min-w-[250px]">
                <span className="sr-only">Sort residences</span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value as SortOption)}
                  className="h-12 w-full appearance-none rounded-full border border-[#581c87]/16 bg-white/75 py-0 pl-5 pr-12 font-sans text-[13px] font-semibold text-[#151515] outline-none transition-colors duration-300 focus:border-[#581c87] xl:w-[250px]"
                >
                  {sortOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-5 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center text-[#581c87]">
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
                  className={`min-h-11 shrink-0 rounded-full border px-5 font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.14em] transition-[background-color,color,border-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#581c87] ${
                    activeFilter === filter
                      ? "border-[#581c87] bg-[#581c87] text-white shadow-[0_12px_32px_rgba(88,28,135,0.2)]"
                      : "border-[#581c87]/14 bg-white/40 text-[#5f5a51] hover:border-[#581c87]/35"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="mt-10 grid w-[calc(100vw_-_48px)] max-w-full gap-8 md:w-full lg:grid-cols-2">
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
        <div className="mx-auto grid w-full max-w-[1460px] gap-10 lg:grid-cols-12 lg:gap-6">
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
        <div className="mx-auto w-full max-w-[1460px]">
          <SiteFooter className="mt-20 md:mt-24" />
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
      className="group flex min-h-full flex-col overflow-hidden rounded-[34px] border border-[#581c87]/12 bg-[#fbfaf7]/86 shadow-[0_22px_70px_rgba(88,74,50,0.09)] transition-[border-color,transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-[#581c87]/34 hover:shadow-[0_34px_100px_rgba(88,28,135,0.13)]"
    >
      <a
        href="/#private-invitation"
        className="relative block min-h-[440px] overflow-hidden outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#581c87] md:min-h-[560px] xl:min-h-[620px]"
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
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(18,7,32,0.14)_34%,rgba(18,7,32,0.72)_100%)]"
        />
        <div className="absolute left-5 top-5 flex flex-wrap gap-2 md:left-6 md:top-6">
          <span className="rounded-full border border-white/22 bg-white/14 px-3 py-2 font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.16em] text-white backdrop-blur">
            {meta.type}
          </span>
          <span className="rounded-full border border-[#c6a87d]/45 bg-[#581c87]/40 px-3 py-2 font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.16em] text-[#f0d7b0] backdrop-blur">
            {meta.status}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
          <div className="rounded-[24px] border border-white/18 bg-white/[0.13] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.2em] text-[#c6a87d]">
                {String(index + 1).padStart(2, "0")} · {meta.market}
              </p>
              <p className="font-display text-[28px] font-medium leading-none text-white">
                {meta.price}
              </p>
            </div>
            <h3 className="mt-3 max-w-[560px] font-display text-[36px] font-medium leading-[0.98] md:text-[48px]">
              {residence.title}
            </h3>
            <p className="mt-3 font-sans text-[13px] font-medium leading-none text-white/68">
              {residence.location}
            </p>
          </div>
        </div>
      </a>

      <div className="flex flex-1 flex-col justify-between p-5 md:p-6">
        <div>
          <div className="grid gap-3 sm:grid-cols-3">
            <DetailStat label="Scale" value={residence.details[2] ?? meta.units} />
            <DetailStat label="Access" value={meta.available} />
            <DetailStat label="Release" value={meta.release} />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.16em] text-[#581c87]/72">
            {meta.availability}
          </p>
          <a
            href="/#private-invitation"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#581c87] px-6 font-sans text-[13px] font-semibold leading-none text-white shadow-[0_14px_34px_rgba(88,28,135,0.2)] transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#6d28a7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#581c87]"
          >
            Explore Project
            <ArrowIcon />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function SummaryChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[22px] border border-[#581c87]/12 bg-white/58 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.76)]">
      <p className="font-sans text-[9px] font-semibold uppercase leading-none tracking-[0.18em] text-[#581c87]/62">
        {label}
      </p>
      <p className="mt-2 font-display text-[23px] font-medium leading-none text-[#151515]">
        {value}
      </p>
    </div>
  );
}

function DetailStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[18px] border border-[#581c87]/10 bg-white/54 p-4">
      <p className="font-sans text-[9px] font-semibold uppercase leading-none tracking-[0.16em] text-[#581c87]/58">
        {label}
      </p>
      <p className="mt-3 font-display text-[22px] font-medium leading-none text-[#151515]">
        {value}
      </p>
    </div>
  );
}
