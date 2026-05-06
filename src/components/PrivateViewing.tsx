import { motion, useReducedMotion, type Transition } from "framer-motion";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

const privateAccessImageUrl =
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=88";

const accessSteps = [
  {
    count: "01",
    title: "Preference",
    description: "A private brief sets pace, location, light, and lifestyle.",
  },
  {
    count: "02",
    title: "Shortlist",
    description: "Only residences that match the brief are prepared for review.",
  },
  {
    count: "03",
    title: "Viewing",
    description: "The visit is arranged quietly, with the residence fully ready.",
  },
  {
    count: "04",
    title: "Advisory",
    description: "Availability and next steps are handled with discretion.",
  },
] as const;

const accessNotes = [
  "By appointment only",
  "Private office liaison",
  "Availability disclosed after brief",
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
              Private Access
            </p>
            <h2
              id="private-viewing-title"
              className="mt-6 max-w-[780px] font-display text-[42px] font-medium leading-[1.04] tracking-normal text-white md:text-[62px]"
            >
              A quieter way to enter the world of VELARÉ.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pt-11">
            <p className="max-w-[470px] font-sans text-[16px] font-normal leading-[1.75] tracking-normal text-white/68">
              Private access is not a gallery of options. It is a considered
              path into the right residence, shaped before the first viewing.
            </p>
          </div>
        </motion.div>

        <motion.div
          {...reveal(0.08)}
          className="relative mt-12 min-h-[780px] overflow-hidden rounded-[34px] border border-white/12 bg-[#091924] shadow-[0_28px_96px_rgba(0,0,0,0.34)] md:mt-16 lg:min-h-[760px]"
        >
          <motion.img
            src={privateAccessImageUrl}
            alt="Private luxury residence prepared for an appointment"
            className="absolute inset-0 h-full w-full object-cover object-[66%_center]"
            loading="lazy"
            initial={false}
            animate={shouldReduceMotion ? undefined : { scale: [1, 1.035] }}
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
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,12,20,0.94)_0%,rgba(3,12,20,0.78)_38%,rgba(3,12,20,0.22)_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,12,20,0.34)_0%,rgba(3,12,20,0.08)_42%,rgba(3,12,20,0.9)_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-1 bg-[#c6a87d]"
          />
          <div aria-hidden="true" className="velare-grain absolute inset-0" />

          <div className="relative z-10 flex min-h-[780px] flex-col justify-between p-6 md:p-10 lg:min-h-[760px] lg:p-14">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="max-w-[640px] lg:col-span-6">
                <motion.p
                  {...reveal(0.14, 18)}
                  className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.24em] text-white/58"
                >
                  Private Office
                </motion.p>
                <motion.h3
                  {...reveal(0.2, 22)}
                  className="mt-5 font-display text-[38px] font-medium leading-[1.02] tracking-normal text-white md:text-[70px]"
                >
                  By appointment, with every detail already understood.
                </motion.h3>
                <motion.p
                  {...reveal(0.28, 18)}
                  className="mt-6 max-w-[510px] font-sans text-[15px] leading-[1.75] text-white/72 md:text-[16px]"
                >
                  The private office prepares the experience before you arrive,
                  so the viewing feels calm, precise, and personally held.
                </motion.p>

                <motion.a
                  {...reveal(0.36, 16)}
                  href="mailto:private@velare.residences"
                  className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#c6a87d] px-6 font-sans text-[14px] font-semibold leading-none text-[#111111] transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#d8bb91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a87d]"
                >
                  Request Private Access
                  <ArrowIcon />
                </motion.a>
              </div>

              <motion.div
                {...reveal(0.24, 20)}
                className="border-t border-white/20 pt-6 lg:col-span-4 lg:col-start-9 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"
              >
                <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d]">
                  Access Notes
                </p>
                <ul className="mt-6 space-y-4">
                  {accessNotes.map((note) => (
                    <li
                      key={note}
                      className="flex items-center gap-4 font-sans text-[13px] font-medium leading-none text-white/82"
                    >
                      <span className="h-px w-8 bg-[#c6a87d]/70" />
                      {note}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div {...reveal(0.32, 18)} className="mt-16">
              <div className="relative overflow-hidden border-t border-white/22 pt-6">
                {!shouldReduceMotion && (
                  <motion.span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-px bg-[#c6a87d]"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                )}
                <ol className="grid gap-8 md:grid-cols-4">
                  {accessSteps.map((step, index) => (
                    <motion.li
                      key={step.title}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : {
                              duration: 0.65,
                              delay: 0.12 + index * 0.08,
                              ease: easeOut,
                            }
                      }
                    >
                      <p className="font-sans text-[10px] font-semibold leading-none tracking-[0.18em] text-[#c6a87d]">
                        {step.count}
                      </p>
                      <h4 className="mt-3 font-display text-[25px] font-medium leading-none text-white md:text-[28px]">
                        {step.title}
                      </h4>
                      <p className="mt-4 max-w-[250px] font-sans text-[12px] leading-[1.65] text-white/62">
                        {step.description}
                      </p>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </motion.div>
          </div>

          <p className="absolute right-7 top-7 hidden origin-top-right rotate-180 font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.28em] text-white/42 [writing-mode:vertical-rl] lg:block">
            VELARÉ Private Office
          </p>
        </motion.div>
      </div>
    </section>
  );
}
