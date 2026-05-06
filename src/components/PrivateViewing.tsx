import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
} from "framer-motion";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];
const rotationIntervalMs = 3600;

const experiences = [
  {
    count: "01",
    title: "Coastal Arrival",
    label: "Approach",
    location: "Private sunset route",
    description:
      "Begin with a quiet arrival sequence, framed around light, privacy, and the first impression of the residence.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=88",
  },
  {
    count: "02",
    title: "Interior Walkthrough",
    label: "Residence",
    location: "Material and spatial review",
    description:
      "Move through the rooms at a measured pace, with attention to proportion, views, finishes, and daily rhythm.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=88",
  },
  {
    count: "03",
    title: "Evening Advisory",
    label: "Consultation",
    location: "Private next steps",
    description:
      "Close the visit with a discreet advisory conversation around availability, terms, and the path forward.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=88",
  },
] as const;

const viewingRoute = [
  "Preference briefing",
  "Curated route",
  "Private viewing",
  "Discreet advisory",
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

export function PrivateViewing() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperience = experiences[activeIndex];

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setActiveIndex((activeIndex + 1) % experiences.length);
    }, rotationIntervalMs);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, shouldReduceMotion]);

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.22 },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.8, delay, ease: easeOut },
  });

  return (
    <section
      id="private-tour"
      aria-labelledby="private-viewing-title"
      className="bg-[#06131d] px-6 pb-20 pt-0 text-white md:px-12 md:pb-24 lg:px-10 lg:pb-32"
    >
      <div className="mx-auto max-w-[1460px] border-t border-white/15 pt-16 md:pt-20 lg:pt-24">
        <motion.div
          {...reveal()}
          className="grid gap-10 lg:grid-cols-12 lg:gap-6"
        >
          <div className="lg:col-span-2">
            <p className="font-sans text-[13px] font-medium leading-none tracking-[0.28em] text-[#c6a87d]">
              003
            </p>
          </div>

          <div className="lg:col-span-6">
            <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d]">
              Private Viewings
            </p>
            <h2
              id="private-viewing-title"
              className="mt-6 max-w-[780px] font-display text-[42px] font-medium leading-[1.04] tracking-normal text-white md:text-[62px]"
            >
              A private route into the residences that matter.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pt-11">
            <p className="max-w-[470px] font-sans text-[16px] font-normal leading-[1.75] tracking-normal text-white/68">
              Each viewing is arranged around timing, privacy, and the way you
              want to experience a home before it becomes yours.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6 pt-12 lg:grid-cols-12 lg:items-stretch lg:pt-16">
          <motion.div
            {...reveal(0.08)}
            className="relative min-h-[560px] overflow-hidden rounded-[30px] bg-[#1d1d1d] md:min-h-[680px] lg:col-span-8"
          >
            <AnimatePresence initial={false}>
              <motion.img
                key={activeExperience.image}
                src={activeExperience.image}
                alt={`${activeExperience.title} private viewing scene`}
                className="absolute inset-0 h-full w-full object-cover"
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.035 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 1.01 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.85, ease: easeOut }
                }
              />
            </AnimatePresence>

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,12,20,0.82)_0%,rgba(24,35,48,0.44)_42%,rgba(0,0,0,0.08)_100%)]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(198,168,125,0.34),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.08)_42%,rgba(0,0,0,0.72)_100%)]"
            />
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-full w-1 bg-[#c6a87d]"
            />

            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8 lg:p-10">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeExperience.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.55, ease: easeOut }
                  }
                >
                  <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.24em] text-white/68">
                    {activeExperience.count} / {activeExperience.label}
                  </p>
                  <h3 className="mt-4 max-w-[680px] font-display text-[42px] font-medium leading-none tracking-normal md:text-[62px]">
                    {activeExperience.title}
                  </h3>
                  <p className="mt-3 font-sans text-[13px] font-semibold leading-none text-white/70">
                    {activeExperience.location}
                  </p>
                  <p className="mt-5 max-w-[580px] font-sans text-[15px] leading-[1.7] text-white/78">
                    {activeExperience.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.aside
            {...reveal(0.14)}
            className="flex min-h-[560px] flex-col justify-between rounded-[30px] border border-white/12 bg-white/[0.07] p-3 shadow-[0_26px_80px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl md:p-4 lg:col-span-4 lg:min-h-[680px]"
          >
            <div className="space-y-3">
              {experiences.map((experience, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={experience.title}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(index)}
                    className={`group grid w-full grid-cols-[84px_minmax(0,1fr)] gap-4 rounded-[22px] border p-3 text-left outline-none transition-[background-color,border-color,box-shadow,transform] duration-300 ease-in-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a87d] ${
                      isActive
                        ? "border-[#c6a87d]/45 bg-white/[0.13] shadow-[0_18px_48px_rgba(198,168,125,0.15)]"
                        : "border-white/12 bg-white/[0.055]"
                    }`}
                  >
                    <span className="relative h-[92px] overflow-hidden rounded-[18px] bg-white/10">
                      <img
                        src={experience.image}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_10%,rgba(0,0,0,0.42)_100%)]"
                      />
                      <span className="absolute bottom-2 left-2 font-sans text-[10px] font-semibold tracking-[0.16em] text-white">
                        {experience.count}
                      </span>
                    </span>
                    <span className="min-w-0">
                      <span className="block font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-[#c6a87d]">
                        {experience.label}
                      </span>
                      <span className="mt-2 block font-display text-[24px] font-medium leading-none text-white">
                        {experience.title}
                      </span>
                      <span className="mt-3 line-clamp-2 block font-sans text-[12px] leading-[1.55] text-white/58">
                        {experience.description}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 rounded-[24px] border border-white/12 bg-[#081925]/72 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
              <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.2em] text-[#c6a87d]">
                Viewing Route
              </p>
              <ol className="mt-5 space-y-3">
                {viewingRoute.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-center gap-3 font-sans text-[13px] font-medium text-white/86"
                  >
                    <span className="h-px w-6 bg-[#c6a87d]/65" />
                    <span className="text-[10px] tracking-[0.16em] text-white/45">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <a
                href="mailto:private@velare.residences"
                className="mt-6 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#c6a87d] px-6 font-sans text-[14px] font-semibold leading-none text-[#111111] transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#d8bb91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a87d]"
              >
                Request a Private Tour
                <ArrowIcon />
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
