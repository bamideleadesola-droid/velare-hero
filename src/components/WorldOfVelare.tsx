import { motion, useReducedMotion, type Transition } from "framer-motion";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

const worldImageUrl =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=88";

const settingNotes = [
  {
    title: "Coastal Privacy",
    coordinate: "36.3932 N / 25.4615 E",
    description: "Protected coastline, warm light, measured arrival.",
  },
  {
    title: "City Proximity",
    coordinate: "34.0522 N / 118.2437 W",
    description: "Cultural access, discreet routes, softened edges.",
  },
  {
    title: "Hillside Calm",
    coordinate: "38.5025 N / 122.2654 W",
    description: "Terraced land, long views, intimate scale.",
  },
] as const;

export function WorldOfVelare() {
  const shouldReduceMotion = useReducedMotion();

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

        <motion.figure
          {...reveal(0.08)}
          className="relative mt-12 min-h-[560px] overflow-hidden rounded-[34px] bg-[#d8d1c4] shadow-[0_24px_80px_rgba(78,67,45,0.16)] md:mt-16 lg:min-h-[720px]"
        >
          <motion.img
            src={worldImageUrl}
            alt="Coastal setting at sunset"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            initial={false}
            animate={shouldReduceMotion ? undefined : { scale: [1, 1.03] }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 12,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }
            }
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.08)_38%,rgba(0,0,0,0.68)_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1 bg-[#b89a68]"
          />

          <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8 lg:p-12">
            <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.22em] text-white/66">
              Sea-facing calm
            </p>
            <h3 className="mt-4 max-w-[760px] font-display text-[44px] font-medium leading-none tracking-normal md:text-[72px]">
              Where place becomes privacy.
            </h3>
            <p className="mt-5 max-w-[560px] font-sans text-[15px] leading-[1.7] text-white/78">
              Horizon, approach, and atmosphere are considered before a
              residence is ever presented.
            </p>
          </figcaption>

          <div className="absolute right-6 top-6 hidden rounded-full border border-white/22 bg-black/12 px-5 py-3 font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.18em] text-white/78 backdrop-blur md:block">
            36.3932 N / 25.4615 E
          </div>
        </motion.figure>

        <motion.div
          {...reveal(0.16)}
          className="grid gap-8 border-b border-t border-[#151515]/15 py-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] lg:py-10"
        >
          <p className="max-w-[420px] font-sans text-[15px] leading-[1.75] text-[#6f685c]">
            The setting is never treated as a backdrop. It is the first design
            decision.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {settingNotes.map((note, index) => (
              <div key={note.title} className="border-t border-[#151515]/12 pt-5">
                <p className="font-sans text-[10px] font-semibold leading-none tracking-[0.18em] text-[#b89a68]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h4 className="mt-3 font-display text-[25px] font-medium leading-none text-[#151515]">
                  {note.title}
                </h4>
                <p className="mt-3 font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.14em] text-[#7c735f]">
                  {note.coordinate}
                </p>
                <p className="mt-4 font-sans text-[13px] leading-[1.65] text-[#625d54]">
                  {note.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
