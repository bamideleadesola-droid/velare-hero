import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
} from "framer-motion";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];
const rotationIntervalMs = 4600;

const places = [
  {
    count: "01",
    title: "Coastal Privacy",
    eyebrow: "Sea-facing calm",
    coordinate: "36.3932 N / 25.4615 E",
    description:
      "Residences arranged around horizon, approach, and the quiet threshold between public arrival and private life.",
    note: "Protected coastline, warm light, measured arrival.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=88",
  },
  {
    count: "02",
    title: "City Proximity",
    eyebrow: "Near the cultural center",
    coordinate: "34.0522 N / 118.2437 W",
    description:
      "A city address with enough distance to feel composed, connected to dining, art, and private movement.",
    note: "Cultural access, discreet routes, softened edges.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2200&q=88",
  },
  {
    count: "03",
    title: "Hillside Calm",
    eyebrow: "Above the everyday",
    coordinate: "38.5025 N / 122.2654 W",
    description:
      "Homes shaped by elevation, long views, and the sensory stillness that comes from landscape-led living.",
    note: "Terraced land, long views, intimate scale.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2200&q=88",
  },
] as const;

export function WorldOfVelare() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const activePlace = places[activeIndex];

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setActiveIndex((activeIndex + 1) % places.length);
    }, rotationIntervalMs);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, shouldReduceMotion]);

  const reveal = (delay = 0, y = 28) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.22 },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.8, delay, ease: easeOut },
  });

  return (
    <section
      id="world"
      aria-labelledby="world-of-velare-title"
      className="bg-[#f4f1ea] px-6 py-20 text-[#141414] md:px-12 md:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1460px]">
        <motion.div
          {...reveal()}
          className="grid gap-10 border-b border-[#141414]/15 pb-12 lg:grid-cols-12 lg:gap-6 lg:pb-16"
        >
          <div className="lg:col-span-2">
            <p className="font-sans text-[13px] font-medium leading-none tracking-[0.28em] text-[#7c735f]">
              004
            </p>
          </div>

          <div className="lg:col-span-6">
            <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#b89a68]">
              World Of VELARÉ
            </p>
            <h2
              id="world-of-velare-title"
              className="mt-6 max-w-[760px] font-display text-[42px] font-medium leading-[1.04] tracking-normal text-[#151515] md:text-[62px]"
            >
              Residences shaped by the world around them.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pt-11">
            <p className="max-w-[470px] font-sans text-[16px] font-normal leading-[1.75] tracking-normal text-[#5f5a51]">
              VELARÉ begins with place: the quality of light, the privacy of
              arrival, and the atmosphere that makes a residence feel inevitable.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-8 pt-12 lg:grid-cols-12 lg:items-stretch lg:pt-16">
          <motion.div
            {...reveal(0.08)}
            className="flex flex-col justify-between border-y border-[#151515]/15 py-5 lg:col-span-4 lg:min-h-[640px] lg:py-7"
          >
            <div>
              <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.22em] text-[#b89a68]">
                Place Index
              </p>
              <div className="mt-7">
                {places.map((place, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={place.title}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveIndex(index)}
                      className="group grid w-full grid-cols-[48px_minmax(0,1fr)] gap-4 border-t border-[#151515]/12 py-6 text-left outline-none last:border-b focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b89a68]"
                    >
                      <span
                        className={`font-sans text-[11px] font-semibold leading-none tracking-[0.18em] transition-colors duration-300 ${
                          isActive ? "text-[#b89a68]" : "text-[#7c735f]"
                        }`}
                      >
                        {place.count}
                      </span>
                      <span className="min-w-0">
                        <span className="flex items-center gap-4">
                          <span className="font-display text-[30px] font-medium leading-none text-[#151515] md:text-[34px]">
                            {place.title}
                          </span>
                          <span
                            aria-hidden="true"
                            className={`h-px flex-1 transition-colors duration-300 ${
                              isActive ? "bg-[#b89a68]" : "bg-[#151515]/12"
                            }`}
                          />
                        </span>
                        <span className="mt-3 block font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.15em] text-[#7c735f]">
                          {place.coordinate}
                        </span>
                        <span className="mt-4 block max-w-[380px] font-sans text-[13px] leading-[1.65] text-[#625d54]">
                          {place.note}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="mt-10 max-w-[360px] font-sans text-[13px] leading-[1.7] text-[#7c735f]">
              The setting is never treated as a backdrop. It is the first design
              decision.
            </p>
          </motion.div>

          <motion.figure
            {...reveal(0.14)}
            className="relative min-h-[560px] overflow-hidden rounded-[32px] bg-[#d8d1c4] shadow-[0_24px_80px_rgba(78,67,45,0.16)] lg:col-span-8 lg:min-h-[640px]"
          >
            <AnimatePresence initial={false}>
              <motion.img
                key={activePlace.image}
                src={activePlace.image}
                alt={`${activePlace.title} setting`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
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
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.1)_42%,rgba(0,0,0,0.64)_100%)]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 bg-[#b89a68]"
            />

            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8 lg:p-10">
              <AnimatePresence mode="wait" initial={false}>
                <motion.figcaption
                  key={activePlace.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.55, ease: easeOut }
                  }
                >
                  <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.22em] text-white/66">
                    {activePlace.eyebrow}
                  </p>
                  <h3 className="mt-4 max-w-[680px] font-display text-[42px] font-medium leading-none tracking-normal md:text-[64px]">
                    {activePlace.title}
                  </h3>
                  <p className="mt-4 max-w-[560px] font-sans text-[15px] leading-[1.7] text-white/78">
                    {activePlace.description}
                  </p>
                </motion.figcaption>
              </AnimatePresence>
            </div>

            <div className="absolute right-6 top-6 hidden rounded-full border border-white/22 bg-black/12 px-5 py-3 font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.18em] text-white/78 backdrop-blur md:block">
              {activePlace.coordinate}
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
