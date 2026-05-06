import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Transition,
} from "framer-motion";
import { useRef } from "react";
import { SiteFooter } from "./SiteFooter";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

const invitationImageUrl =
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2400&q=90";

const invitationVideoUrl =
  "https://videos.pexels.com/video-files/32456138/13842188_3840_2160_60fps.mp4";

const invitationDetails = [
  {
    label: "Private Office",
    value: "By appointment",
  },
  {
    label: "Response",
    value: "Within 24 hours",
  },
  {
    label: "Markets",
    value: "LA / London / Dubai",
  },
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

function ChevronIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
    >
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

function SectionMarker() {
  return (
    <div className="flex items-center gap-4 lg:block">
      <p className="font-sans text-[14px] font-semibold leading-none tracking-[0.28em] text-[#c6a87d]">
        007
      </p>
      <span
        aria-hidden="true"
        className="block h-px w-10 bg-[#c6a87d]/65 lg:mt-5"
      />
    </div>
  );
}

export function PrivateInvitation() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-24px", "24px"]);

  const reveal = (delay = 0, y = 24) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.82, delay, ease: easeOut },
  });

  return (
    <section
      ref={sectionRef}
      id="private-invitation"
      aria-labelledby="private-invitation-title"
      className="relative isolate overflow-hidden bg-[#06131d] px-6 py-20 text-white md:px-12 md:py-24 lg:px-10 lg:py-32"
    >
      {shouldReduceMotion ? (
        <img
          src={invitationImageUrl}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -inset-y-8 left-0 z-0 h-[calc(100%+64px)] w-full object-cover object-[58%_center] opacity-[0.58]"
          loading="lazy"
        />
      ) : (
        <motion.video
          aria-hidden="true"
          className="pointer-events-none absolute -inset-y-8 left-0 z-0 h-[calc(100%+64px)] w-full object-cover object-[58%_center] opacity-[0.58]"
          poster={invitationImageUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          initial={false}
          style={{ y: backgroundY }}
          animate={{ scale: [1, 1.03] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <source src={invitationVideoUrl} type="video/mp4" />
        </motion.video>
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(3,7,18,0.96)_0%,rgba(15,23,42,0.84)_34%,rgba(49,20,93,0.54)_64%,rgba(6,19,29,0.38)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_78%_20%,rgba(198,168,125,0.26),transparent_28%),radial-gradient(circle_at_22%_70%,rgba(20,184,166,0.16),transparent_32%)]"
      />
      <div
        aria-hidden="true"
        className="velare-grain pointer-events-none absolute inset-0 z-0"
      />

      <div className="relative z-10 mx-auto max-w-[1460px]">
        <motion.div
          {...reveal()}
          className="grid gap-10 border-t border-white/14 pt-16 lg:grid-cols-12 lg:gap-6 lg:pt-24"
        >
          <div className="lg:col-span-2">
            <SectionMarker />
          </div>

          <div className="lg:col-span-6">
            <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d]">
              Private Invitation
            </p>
            <h2
              id="private-invitation-title"
              className="mt-6 max-w-[760px] font-display text-[42px] font-medium leading-[1.04] tracking-normal text-white md:text-[62px]"
            >
              Begin with a private conversation.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pt-11">
            <p className="max-w-[470px] font-sans text-[16px] font-normal leading-[1.75] tracking-normal text-white/68">
              A quiet introduction to the residences, markets, and advisors best
              aligned with your way of living.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-8 pt-12 lg:grid-cols-12 lg:items-end lg:pt-16">
          <motion.div
            {...reveal(0.08, 28)}
            className="max-w-[660px] lg:col-span-6 lg:col-start-3"
          >
            <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.24em] text-white/50">
              VELARÉ Private Office
            </p>
            <h3 className="mt-5 font-display text-[36px] font-medium leading-[1.08] tracking-normal text-white md:text-[52px]">
              The next residence should feel already understood.
            </h3>
            <p className="mt-6 max-w-[540px] font-sans text-[15px] leading-[1.75] text-white/66">
              Share the markets, atmosphere, and level of privacy you are
              seeking. The first reply is considered, direct, and personally
              held.
            </p>

            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {invitationDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="border-l border-[#c6a87d]/45 pl-4"
                >
                  <dt className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-[#c6a87d]">
                    {detail.label}
                  </dt>
                  <dd className="mt-3 font-display text-[24px] font-medium leading-none text-white">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.form
            {...reveal(0.14, 28)}
            action="mailto:private@velare.residences"
            className="relative overflow-hidden rounded-[30px] border border-white/18 bg-white/[0.095] p-5 shadow-[0_28px_100px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl md:p-7 lg:col-span-4"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c6a87d] to-transparent"
            />
            <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d]">
              Request Access
            </p>
            <p className="mt-5 max-w-[320px] font-display text-[30px] font-medium leading-[1.08] text-white">
              Tell us where the search begins.
            </p>

            <div className="mt-7 grid gap-4">
              <label className="block">
                <span className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-white/48">
                  Name
                </span>
                <input
                  name="name"
                  type="text"
                  className="mt-3 h-12 w-full rounded-full border border-white/14 bg-white/[0.08] px-5 font-sans text-[14px] text-white outline-none transition-colors duration-300 placeholder:text-white/34 focus:border-[#c6a87d] focus:bg-white/[0.12]"
                  placeholder="Private client"
                />
              </label>

              <label className="block">
                <span className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-white/48">
                  Preferred Market
                </span>
                <div className="relative mt-3">
                  <select
                    name="market"
                    className="h-12 w-full appearance-none rounded-full border border-white/14 bg-[#102332] py-0 pl-5 pr-14 font-sans text-[14px] text-white outline-none transition-colors duration-300 focus:border-[#c6a87d] focus:bg-[#142b3b]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a market
                    </option>
                    <option>Los Angeles</option>
                    <option>London</option>
                    <option>Dubai</option>
                    <option>Monaco</option>
                    <option>Paris</option>
                    <option>Lake Como</option>
                  </select>
                  <span className="pointer-events-none absolute right-5 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center text-[#c6a87d]">
                    <ChevronIcon />
                  </span>
                </div>
              </label>

              <label className="block">
                <span className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-white/48">
                  Private Note
                </span>
                <textarea
                  name="note"
                  rows={4}
                  className="mt-3 w-full resize-none rounded-[22px] border border-white/14 bg-white/[0.08] px-5 py-4 font-sans text-[14px] leading-[1.6] text-white outline-none transition-colors duration-300 placeholder:text-white/34 focus:border-[#c6a87d] focus:bg-white/[0.12]"
                  placeholder="Residence type, timeline, or market preference"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#c6a87d] px-6 font-sans text-[14px] font-semibold leading-none text-[#111111] transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#d8bb91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a87d]"
            >
              Request Private Access
              <ArrowIcon />
            </button>
          </motion.form>
        </div>

        <SiteFooter className="mt-20 md:mt-24" />
      </div>
    </section>
  );
}
