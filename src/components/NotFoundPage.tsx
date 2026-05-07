import { motion, useReducedMotion, type Transition } from "framer-motion";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

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

export function NotFoundPage() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0, y = 24) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.78, delay, ease: easeOut },
  });

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#06131d] text-white">
      <section
        aria-labelledby="not-found-title"
        className="relative isolate min-h-screen overflow-hidden px-6 pb-20 pt-0 md:px-12 md:pb-24 lg:px-10"
      >
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=88"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-[58%_center] opacity-[0.5]"
          fetchPriority="high"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(3,7,18,0.98)_0%,rgba(23,12,47,0.9)_42%,rgba(88,28,135,0.42)_70%,rgba(6,19,29,0.3)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_76%_18%,rgba(198,168,125,0.22),transparent_28%)]"
        />
        <div aria-hidden="true" className="velare-grain absolute inset-0 z-0" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1460px] flex-col">
          <SiteHeader />

          <div className="grid flex-1 min-w-0 items-center gap-10 border-t border-white/14 py-16 md:py-20 lg:grid-cols-12 lg:gap-6">
            <motion.div {...reveal(0.06)} className="min-w-0 lg:col-span-7">
              <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d]">
                404
              </p>
              <h1
                id="not-found-title"
                className="mt-6 max-w-[330px] break-words font-display text-[42px] font-medium leading-[1.02] tracking-normal text-white sm:max-w-[760px] sm:text-[58px] md:text-[82px]"
              >
                This private address is not available.
              </h1>
              <p className="mt-7 max-w-[330px] font-sans text-[16px] leading-[1.75] text-white/70 sm:max-w-[540px] md:text-[18px]">
                The page may have moved, or the residence may be held by
                request. Return to the collection or contact the private office.
              </p>

              <div className="mt-8 flex w-[342px] max-w-full flex-col gap-4 sm:w-auto sm:flex-row">
                <a
                  href="/residences"
                  className="inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-white px-8 font-sans text-[15px] font-semibold leading-none tracking-normal text-[#0f2034] transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-white/[0.92] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  View Residences
                  <ArrowIcon />
                </a>
                <a
                  href="/contact"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/[0.72] bg-white/[0.08] px-8 font-sans text-[15px] font-medium leading-none tracking-normal text-white backdrop-blur transition-[background-color,transform,border-color] duration-300 ease-in-out hover:-translate-y-0.5 hover:border-white hover:bg-white/[0.18] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Contact Us
                  <ArrowIcon />
                </a>
              </div>
            </motion.div>

            <motion.aside
              {...reveal(0.14, 26)}
              className="w-[342px] max-w-full overflow-hidden rounded-[30px] border border-white/18 bg-white/[0.105] p-5 shadow-[0_28px_100px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl md:w-full md:p-7 lg:col-span-4 lg:col-start-9"
            >
              <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d]">
                Private Office
              </p>
              <p className="mt-5 font-display text-[34px] font-medium leading-[1.08] text-white">
                A quieter route is available.
              </p>
              <p className="mt-5 font-sans text-[14px] leading-[1.75] text-white/64">
                For off-market residences and direct introductions, the VELARÉ
                team can guide the next step.
              </p>
              <a
                href="mailto:private@velare.residences?subject=VELARÉ%20private%20office%20inquiry"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/22 px-5 font-sans text-[13px] font-semibold leading-none text-white transition-[background-color,transform,border-color] duration-300 ease-in-out hover:-translate-y-0.5 hover:border-white hover:bg-white/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                private@velare.residences
                <ArrowIcon />
              </a>
            </motion.aside>
          </div>

          <SiteFooter className="mb-8" />
        </div>
      </section>
    </main>
  );
}
