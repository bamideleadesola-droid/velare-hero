import { motion, useReducedMotion, type Transition } from "framer-motion";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

const designImageUrl =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=88";

const principles = [
  {
    number: "01",
    title: "Architectural Clarity",
    copy: "Homes shaped by light, material, and timeless restraint.",
  },
  {
    number: "02",
    title: "Private Atmosphere",
    copy: "Residences composed for quiet arrival, discretion, and ease.",
  },
  {
    number: "03",
    title: "Considered Living",
    copy: "Details that make everyday life feel composed and intentional.",
  },
] as const;

export function DesignPhilosophy() {
  const shouldReduceMotion = useReducedMotion();

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
      id="design"
      aria-labelledby="design-philosophy-title"
      className="bg-[#f4f1ea] px-6 pb-20 pt-6 text-[#141414] md:px-12 md:pb-24 lg:px-10 lg:pb-32"
    >
      <div className="mx-auto max-w-[1460px] border-t border-[#141414]/15 pt-16 md:pt-20 lg:pt-24">
        <motion.div
          {...reveal()}
          className="grid gap-10 lg:grid-cols-12 lg:gap-6"
        >
          <div className="lg:col-span-2">
            <p className="font-sans text-[13px] font-medium leading-none tracking-[0.28em] text-[#7c735f]">
              003
            </p>
          </div>

          <div className="lg:col-span-6">
            <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#581c87]">
              The VELARÉ Standard
            </p>
            <h2
              id="design-philosophy-title"
              className="mt-6 max-w-[760px] font-display text-[42px] font-medium leading-[1.04] tracking-normal text-[#151515] md:text-[62px]"
            >
              Design that feels quiet before it feels impressive.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pt-11">
            <p className="max-w-[470px] font-sans text-[16px] font-normal leading-[1.75] tracking-normal text-[#5f5a51]">
              Every VELARÉ residence is selected for proportion, privacy, light,
              and a sense of calm that cannot be manufactured.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-8 pt-12 lg:grid-cols-12 lg:items-stretch lg:gap-6 lg:pt-16">
          <motion.div
            {...reveal(0.08)}
            className="relative min-h-[460px] overflow-hidden rounded-[28px] bg-[#1d1d1d] md:min-h-[620px] lg:col-span-7"
          >
            <motion.img
              src={designImageUrl}
              alt="Warm minimalist interior with considered architectural detail"
              className="absolute inset-0 h-full w-full object-cover"
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.035 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              animate={shouldReduceMotion ? undefined : { scale: [1, 1.025] }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      opacity: { duration: 1, ease: easeOut },
                      scale: {
                        duration: 9,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      },
                    }
              }
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.12)_42%,rgba(0,0,0,0.54)_100%)]"
            />
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-full w-1 bg-[#581c87]"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8 lg:p-10">
              <p className="max-w-[560px] font-display text-[32px] font-medium leading-[1.08] tracking-normal md:text-[44px]">
                Light, proportion, and restraint set the tone before decoration
                begins.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...reveal(0.14)}
            className="flex flex-col justify-between border-y border-[#141414]/15 lg:col-span-5"
          >
            {principles.map((principle, index) => (
              <motion.article
                key={principle.title}
                className="group grid gap-5 border-b border-[#141414]/15 py-8 last:border-b-0 md:grid-cols-[80px_minmax(0,1fr)] lg:py-10"
                initial={shouldReduceMotion ? false : { opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.7, delay: 0.18 + index * 0.08, ease: easeOut }
                }
              >
                <p className="font-sans text-[12px] font-semibold leading-none tracking-[0.2em] text-[#581c87]">
                  {principle.number}
                </p>
                <div>
                  <h3 className="font-display text-[30px] font-medium leading-none tracking-normal text-[#151515] md:text-[34px]">
                    {principle.title}
                  </h3>
                  <p className="mt-4 max-w-[430px] font-sans text-[14px] leading-[1.7] text-[#625d54]">
                    {principle.copy}
                  </p>
                  <div
                    aria-hidden="true"
                    className="mt-6 h-px w-10 bg-[#581c87]/50 transition-all duration-500 ease-out group-hover:w-24"
                  />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
