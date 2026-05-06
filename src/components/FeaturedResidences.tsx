import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Transition,
} from "framer-motion";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];
const rotationIntervalMs = 2000;

export const residences = [
  {
    count: "01/06",
    title: "The Atrium House",
    location: "Bel Air, Los Angeles",
    description:
      "A hillside residence shaped around light, water, and cinematic city views.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=88",
    details: ["5 suites", "7 baths", "8,200 ft²"],
    detailScenes: [
      {
        label: "Private suite",
        value: "5 suites",
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=86",
      },
      {
        label: "Bath detail",
        value: "7 baths",
        image:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=86",
      },
      {
        label: "Interior scale",
        value: "8,200 ft²",
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=86",
      },
    ],
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
    detailScenes: [
      {
        label: "Private suite",
        value: "4 suites",
        image:
          "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=86",
      },
      {
        label: "Pool detail",
        value: "Pool court",
        image:
          "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=86",
      },
      {
        label: "Interior scale",
        value: "6,450 ft²",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=86",
      },
    ],
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
    detailScenes: [
      {
        label: "Private suite",
        value: "3 suites",
        image:
          "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=900&q=86",
      },
      {
        label: "Dock access",
        value: "Private dock",
        image:
          "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=900&q=86",
      },
      {
        label: "Interior scale",
        value: "4,980 ft²",
        image:
          "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=900&q=86",
      },
    ],
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
    detailScenes: [
      {
        label: "Private suite",
        value: "6 suites",
        image:
          "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=900&q=86",
      },
      {
        label: "Terrace detail",
        value: "Sea terrace",
        image:
          "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=900&q=86",
      },
      {
        label: "Interior scale",
        value: "9,100 ft²",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=86",
      },
    ],
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
    detailScenes: [
      {
        label: "Private suite",
        value: "4 suites",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=86",
      },
      {
        label: "Cellar detail",
        value: "Wine room",
        image:
          "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=900&q=86",
      },
      {
        label: "Interior scale",
        value: "5,760 ft²",
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=86",
      },
    ],
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
    detailScenes: [
      {
        label: "Private suite",
        value: "5 suites",
        image:
          "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&w=900&q=86",
      },
      {
        label: "Pool detail",
        value: "Cliff pool",
        image:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=86",
      },
      {
        label: "Interior scale",
        value: "7,400 ft²",
        image:
          "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=900&q=86",
      },
    ],
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
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const featured = residences[featuredIndex];
  const residenceItems = useMemo(
    () => residences.map((residence, index) => ({ residence, index })),
    [],
  );
  const galleryLoop = [...residences, ...residences];

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setFeaturedIndex((featuredIndex + 1) % residences.length);
    }, rotationIntervalMs);

    return () => window.clearTimeout(timeout);
  }, [featuredIndex, shouldReduceMotion]);

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

        <div className="grid gap-6 pt-10 lg:grid-cols-12 lg:items-stretch lg:pt-14">
          <motion.article {...reveal(0.12)} className="lg:col-span-7 lg:h-full">
            <FeaturedResidenceCard
              residence={featured}
              shouldReduceMotion={Boolean(shouldReduceMotion)}
            />
          </motion.article>

          <div className="grid gap-4 md:grid-cols-2 lg:col-span-5 lg:min-h-[720px] lg:grid-rows-3">
            {residenceItems.map(({ residence, index }, itemIndex) => (
              <motion.button
                key={residence.title}
                type="button"
                className="block h-full w-full rounded-[24px] text-left outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#581c87]"
                onClick={() => setFeaturedIndex(index)}
                layout
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.5, delay: itemIndex * 0.03, ease: easeOut }
                }
                aria-pressed={index === featuredIndex}
                aria-label={`Preview ${residence.title}`}
              >
                <ResidenceImageCard
                  residence={residence}
                  isActive={index === featuredIndex}
                />
              </motion.button>
            ))}
          </div>
        </div>

        <motion.aside
          {...reveal(0.18)}
          className="relative mt-8 overflow-hidden rounded-[28px] border border-white/45 bg-white/[0.34] p-4 shadow-[0_24px_80px_rgba(78,67,45,0.16),inset_0_1px_0_rgba(255,255,255,0.62)] backdrop-blur-2xl md:mt-10 md:p-5"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(198,168,125,0.28),transparent_28%),linear-gradient(120deg,rgba(255,255,255,0.42),rgba(255,255,255,0.08))]"
          />
          <div className="relative grid gap-8 rounded-[22px] border border-[#151515]/10 bg-[#f8f6f1]/35 p-6 md:grid-cols-[minmax(0,1fr)_minmax(440px,0.95fr)] md:p-8 lg:p-10">
            <div>
              <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#b89a68]">
                Collection Terms
              </p>
              <h3 className="mt-5 max-w-[480px] font-display text-[34px] font-medium leading-[1.08] tracking-normal text-[#151515] md:text-[42px]">
                Private terms with room to breathe.
              </h3>
              <p className="mt-5 max-w-[430px] font-sans text-[14px] leading-[1.7] text-[#665f52]">
                Availability, viewings, and purchase conversations are arranged
                with the same discretion as the residences themselves.
              </p>
            </div>

            <div>
              <dl className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
                {collectionTerms.map((term) => (
                  <div
                    key={term.label}
                    className="rounded-[18px] border border-[#151515]/10 bg-white/[0.34] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.48)]"
                  >
                    <dt className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.16em] text-[#7c735f]">
                      {term.label}
                    </dt>
                    <dd className="mt-3 font-display text-[25px] font-medium leading-none text-[#151515]">
                      {term.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href="#private-tour"
                className="mt-5 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#151515] px-6 font-sans text-[14px] font-semibold leading-none text-white transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#2a2a2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b89a68]"
              >
                Book a Private Viewing
                <ArrowIcon />
              </a>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

export type Residence = (typeof residences)[number];

function FeaturedResidenceCard({
  residence,
  shouldReduceMotion,
}: {
  residence: Residence;
  shouldReduceMotion: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-18px", "18px"]);

  return (
    <div
      ref={cardRef}
      className="group relative h-full min-h-[620px] overflow-hidden rounded-[26px] bg-[#1d1d1d] md:min-h-[720px]"
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={residence.image}
          src={residence.image}
          alt={`${residence.title} residence`}
          className="absolute -inset-y-6 left-0 h-[calc(100%+48px)] w-full object-cover"
          loading="eager"
          style={shouldReduceMotion ? undefined : { y: imageY }}
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 1.01 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.75, ease: easeOut }
          }
        />
      </AnimatePresence>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.2)_38%,rgba(0,0,0,0.76)_100%)]"
      />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-7 lg:p-9">
        <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.22em] text-white/70">
          {residence.count}
        </p>
        <h3 className="mt-3 font-display text-[40px] font-medium leading-none tracking-normal md:text-[56px]">
          {residence.title}
        </h3>
        <p className="mt-3 font-sans text-[13px] font-semibold leading-none text-white/75">
          {residence.location}
        </p>
        <p className="mt-4 max-w-[590px] font-sans text-[15px] leading-[1.65] text-white/80">
          {residence.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {residence.details.map((detail) => (
            <span
              key={detail}
              className="rounded-full border border-white/28 bg-white/10 px-3.5 py-2 font-sans text-[11px] font-medium leading-none text-white backdrop-blur"
            >
              {detail}
            </span>
          ))}
        </div>

        <div className="hide-scrollbar mt-5 overflow-x-auto pb-1">
          <div className="flex min-w-max gap-3">
            {residence.detailScenes.map((scene) => (
              <figure
                key={`${residence.title}-${scene.label}`}
                className="relative h-[92px] w-[156px] shrink-0 overflow-hidden rounded-[16px] border border-white/18 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur md:h-[108px] md:w-[184px]"
              >
                <img
                  src={scene.image}
                  alt={`${residence.title} ${scene.label.toLowerCase()}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.62)_100%)]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-3">
                  <span className="block font-sans text-[9px] font-semibold uppercase leading-none tracking-[0.15em] text-white/62">
                    {scene.label}
                  </span>
                  <span className="mt-1.5 block font-display text-[18px] font-medium leading-none text-white">
                    {scene.value}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ResidenceImageCard({
  residence,
  isActive = false,
}: {
  residence: Residence;
  isActive?: boolean;
}) {
  return (
    <div
      className={`group relative h-full min-h-[232px] overflow-hidden rounded-[24px] bg-[#1d1d1d] md:min-h-[224px] lg:min-h-0 ${
        isActive
          ? "shadow-[0_0_0_2px_#581c87,0_0_0_7px_rgba(88,28,135,0.12)]"
          : ""
      }`}
    >
      <img
        src={residence.image}
        alt={`${residence.title} residence`}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
        loading="lazy"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.01)_0%,rgba(0,0,0,0.08)_48%,rgba(0,0,0,0.58)_100%)]"
      />
      <div className="absolute left-3 top-3">
        <span
          aria-hidden="true"
          className={`h-2 w-2 rounded-full ${
            isActive ? "bg-[#581c87] shadow-[0_0_18px_rgba(88,28,135,0.72)]" : "bg-white/50"
          }`}
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-3.5 text-white md:p-4">
        <p className="font-sans text-[8px] font-semibold uppercase leading-none tracking-[0.18em] text-white/62">
          {residence.count}
        </p>
        <h3 className="mt-1.5 font-display text-[19px] font-medium leading-none tracking-normal md:text-[21px]">
          {residence.title}
        </h3>
        <p className="mt-1.5 font-sans text-[9px] font-semibold leading-none text-white/68">
          {residence.location}
        </p>
        <p className="mt-2 line-clamp-1 font-sans text-[9px] leading-[1.4] text-white/62">
          {residence.description}
        </p>
        <div className="mt-2.5 flex flex-wrap gap-1">
          {residence.details.map((detail) => (
            <span
              key={detail}
              className="rounded-full border border-white/22 bg-white/10 px-2 py-1.5 font-sans text-[8px] font-medium leading-none text-white/90 backdrop-blur"
            >
              {detail}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
