import { motion, useReducedMotion, type Transition } from "framer-motion";

const luxuryPosterUrl =
  "https://images.unsplash.com/photo-1757356657991-c3fd6e2e812e?auto=format&fit=crop&w=2400&q=90";

const luxuryVideoUrl =
  "https://videos.pexels.com/video-files/32456138/13842188_3840_2160_60fps.mp4";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

const navItems = ["Home", "Residences", "Design", "Private Tours", "Agents"];

const navHrefByItem: Record<string, string> = {
  Home: "/",
  Residences: "/residences",
  Design: "#residences",
  "Private Tours": "/private-tour",
  Agents: "#agents",
};

const stats = [
  {
    value: "50+",
    label: "Private Residences",
    note: "Curated portfolio",
    icon: "building",
  },
  {
    value: "$3.5M",
    label: "Residence Value",
    note: "Signature market",
    icon: "value",
  },
  {
    value: "100+",
    label: "Private Tours",
    note: "By invitation",
    icon: "people",
  },
] as const;

type RevealConfig = {
  y: number;
  duration: number;
  delay: number;
};

function useRevealMotion() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = ({ y, duration, delay }: RevealConfig) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration, delay, ease: easeOut },
  });

  return { shouldReduceMotion, reveal };
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

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
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

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="m10 8 6 4-6 4V8Z" fill="currentColor" />
    </svg>
  );
}

function StatIcon({ type }: { type: (typeof stats)[number]["icon"] }) {
  if (type === "value") {
    return (
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3v18M16.5 7.5c-.8-1.1-2.2-1.8-4.1-1.8-2.3 0-4 1.1-4 2.9 0 4.2 8.4 1.9 8.4 6.4 0 1.9-1.7 3.3-4.4 3.3-2.1 0-3.7-.8-4.8-2.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "people") {
    return (
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
        <path
          d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.5 19c.6-3.1 2.2-4.8 4.5-4.8s3.9 1.7 4.5 4.8M11.5 19c.6-3.1 2.2-4.8 4.5-4.8s3.9 1.7 4.5 4.8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 20V8.5L12 4l7 4.5V20M8.5 20v-8h7v8M4 20h16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function VelareHero() {
  const { shouldReduceMotion, reveal } = useRevealMotion();

  return (
    <section
      aria-labelledby="velare-hero-title"
      className="min-h-screen bg-[#e7f8ff] p-0 text-white md:p-6 lg:p-10"
    >
      <motion.div
        className="relative isolate mx-auto min-h-screen max-w-[1460px] overflow-hidden bg-[#0369a1] shadow-[0_28px_90px_rgba(0,132,199,0.28)] md:min-h-[calc(100vh-48px)] md:rounded-[28px] lg:min-h-[820px]"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 0.9, ease: easeOut }
        }
      >
        <motion.div
          className="absolute inset-0"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 1.2, delay: 0.2, ease: easeOut }
          }
        >
          {shouldReduceMotion ? (
            <img
              src={luxuryPosterUrl}
              alt="Modern luxury residence with glass architecture at dusk"
              className="h-full w-full object-cover object-[64%_center]"
              fetchPriority="high"
            />
          ) : (
            <motion.video
              aria-hidden="true"
              className="h-full w-full object-cover object-[64%_center]"
              poster={luxuryPosterUrl}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              initial={false}
              animate={{ scale: [1, 1.025] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <source src={luxuryVideoUrl} type="video/mp4" />
            </motion.video>
          )}
        </motion.div>

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.9)_0%,rgba(49,20,93,0.76)_31%,rgba(0,118,147,0.42)_61%,rgba(7,14,35,0.18)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.42)_0%,rgba(88,28,135,0.1)_34%,rgba(3,7,18,0.72)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(217,70,239,0.24),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(245,158,11,0.22),transparent_26%),radial-gradient(circle_at_48%_78%,rgba(20,184,166,0.18),transparent_34%)]"
        />
        <div aria-hidden="true" className="velare-grain absolute inset-0" />

        <header className="relative z-20 flex items-center justify-between gap-6 px-6 py-8 md:px-12 lg:px-14">
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
              {navItems.map((item, index) => (
                <li key={item}>
                  <a
                    href={navHrefByItem[item]}
                    className="group relative inline-flex py-2 outline-none transition-colors duration-300 hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    {item}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-2 left-0 h-px bg-white transition-all duration-300 ${
                        index === 0 ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#private-invitation"
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

        <div className="relative z-10 flex min-h-[calc(100vh-112px)] flex-col justify-end px-6 pb-16 pt-16 md:min-h-[680px] md:px-12 lg:px-14 lg:pb-16">
          <div className="max-w-[790px]">
            <motion.p
              {...reveal({ y: 16, duration: 0.7, delay: 0.1 })}
              className="inline-flex min-h-10 items-center rounded-full border border-white/[0.28] bg-white/[0.14] px-5 font-sans text-[12px] font-medium uppercase leading-none tracking-[0.18em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur"
            >
              PRIVATE RESIDENCES
            </motion.p>

            <motion.h1
              id="velare-hero-title"
              {...reveal({ y: 24, duration: 0.9, delay: 0.2 })}
              className="mt-8 max-w-[660px] font-display text-[40px] font-medium leading-[1.02] tracking-normal text-white md:text-[58px] lg:text-[68px]"
            >
              A New Standard of Living
            </motion.h1>

            <motion.p
              {...reveal({ y: 20, duration: 0.8, delay: 0.35 })}
              className="mt-6 max-w-[560px] font-sans text-[16px] font-normal leading-[1.7] tracking-normal text-white/[0.86] md:text-[18px]"
            >
              Crafted spaces designed for those who value elegance, clarity, and
              timeless experience.
            </motion.p>

            <motion.div
              {...reveal({ y: 16, duration: 0.7, delay: 0.5 })}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="/residences"
                className="inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-white px-8 font-sans text-[15px] font-semibold leading-none tracking-normal text-[#0f2034] transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-white/[0.92] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Explore Residences
                <ArrowIcon />
              </a>
              <a
                href="/private-tour"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/[0.72] bg-white/[0.08] px-8 font-sans text-[15px] font-medium leading-none tracking-normal text-white backdrop-blur transition-[background-color,transform,border-color] duration-300 ease-in-out hover:-translate-y-0.5 hover:border-white hover:bg-white/[0.18] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <PlayIcon />
                Book a Private Tour
              </a>
            </motion.div>
          </div>

          <motion.dl
            {...reveal({ y: 18, duration: 0.8, delay: 0.65 })}
            className="mt-10 grid max-w-[620px] grid-cols-1 gap-1.5 rounded-[20px] border border-white/[0.18] bg-white/[0.095] p-1.5 shadow-[0_18px_56px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl sm:grid-cols-3 lg:mt-12"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-[15px] border border-white/[0.15] bg-[linear-gradient(135deg,rgba(255,255,255,0.17),rgba(255,255,255,0.05))] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] transition-[background-color,transform,border-color] duration-300 ease-in-out hover:-translate-y-0.5 hover:border-white/[0.3] hover:bg-white/[0.13]"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
                />
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.3] bg-white/[0.9] text-[#581c87] shadow-[0_8px_22px_rgba(15,23,42,0.18)]">
                    <StatIcon type={stat.icon} />
                  </div>
                  <span className="rounded-full border border-white/[0.2] bg-white/[0.1] px-2 py-1 font-sans text-[9px] font-medium uppercase leading-none tracking-[0.12em] text-white/[0.72]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <dt className="mt-3 font-display text-[26px] font-medium leading-none tracking-normal text-white md:text-[30px]">
                  {stat.value}
                </dt>
                <dd className="mt-1.5 font-sans text-[12px] font-semibold leading-[1.25] tracking-normal text-white">
                  {stat.label}
                </dd>
                <dd className="mt-1 font-sans text-[9px] font-medium uppercase leading-none tracking-[0.12em] text-white/[0.56]">
                  {stat.note}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </motion.div>
    </section>
  );
}
