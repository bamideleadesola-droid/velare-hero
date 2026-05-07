import { motion, useReducedMotion, type Transition } from "framer-motion";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

const heroImageUrl =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90";

const designPrinciples = [
  {
    title: "Architecture",
    label: "Proportion",
    text: "Long lines, measured thresholds, and views framed before the room is furnished.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=88",
    objectPosition: "center 48%",
  },
  {
    title: "Interior",
    label: "Material",
    text: "Stone, timber, linen, glass, and bronze are selected for quiet permanence.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=88",
    objectPosition: "center 50%",
  },
  {
    title: "Landscape",
    label: "Arrival",
    text: "Gardens, water, shade, and routes are composed as part of the residence itself.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=88",
    objectPosition: "center 58%",
  },
] as const;

const designProcess = [
  {
    count: "01",
    title: "Site Reading",
    text: "Light, privacy, slope, climate, and approach are studied before any visible gesture is made.",
  },
  {
    count: "02",
    title: "Spatial Editing",
    text: "Rooms are reduced to what holds daily life with clarity, proportion, and calm.",
  },
  {
    count: "03",
    title: "Material Direction",
    text: "Palettes are built for touch, age, reflection, and the quiet temperature of the home.",
  },
  {
    count: "04",
    title: "Final Atmosphere",
    text: "Lighting, furniture, art, and garden views are aligned into one settled experience.",
  },
] as const;

const materials = [
  {
    name: "Warm Stone",
    note: "Honed, veined, softly reflective",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=86",
  },
  {
    name: "Dark Timber",
    note: "Architectural, grounding, quiet",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=86",
  },
  {
    name: "Soft Linen",
    note: "Tactile, muted, residential",
    image:
      "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1200&q=86",
  },
  {
    name: "Bronzed Glass",
    note: "Filtered light and evening depth",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=86",
  },
] as const;

const heroNotes = [
  { label: "Rooms", value: "Edited" },
  { label: "Light", value: "Layered" },
  { label: "Finish", value: "Quiet" },
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

function SectionIntro({
  eyebrow,
  title,
  description,
  titleId,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  description: string;
  titleId?: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <div
      className={`grid min-w-0 gap-8 border-b pb-10 md:gap-10 lg:grid-cols-12 lg:gap-6 lg:pb-14 ${
        isDark ? "border-white/14" : "border-[#141414]/15"
      }`}
    >
      <div className="min-w-0 lg:col-span-7">
        <p
          className={`font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] ${
            isDark ? "text-[#c6a87d]" : "text-[#581c87]"
          }`}
        >
          {eyebrow}
        </p>
        <h2
          id={titleId}
          className={`mt-6 max-w-[330px] break-words font-display text-[42px] font-medium leading-[1.04] tracking-normal sm:max-w-[760px] md:text-[62px] ${
            isDark ? "text-white" : "text-[#151515]"
          }`}
        >
          {title}
        </h2>
      </div>

      <p
        className={`max-w-[330px] font-sans text-[16px] leading-[1.75] sm:max-w-[470px] lg:col-span-4 lg:col-start-9 lg:pt-11 ${
          isDark ? "text-white/64" : "text-[#5f5a51]"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

function PrincipleCard({
  principle,
  index,
  shouldReduceMotion,
}: {
  principle: (typeof designPrinciples)[number];
  index: number;
  shouldReduceMotion: boolean;
}) {
  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.72, delay: index * 0.05, ease: easeOut }
      }
      className="group w-[342px] max-w-full overflow-hidden rounded-[30px] border border-[#581c87]/12 bg-[#fbfaf7]/82 shadow-[0_20px_64px_rgba(88,74,50,0.09)] transition-[border-color,transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-[#581c87]/34 hover:shadow-[0_30px_90px_rgba(88,28,135,0.12)] md:w-full"
    >
      <div className="relative min-h-[460px] overflow-hidden">
        <img
          src={principle.image}
          alt={`${principle.title} design detail`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
          style={{ objectPosition: principle.objectPosition }}
          loading="lazy"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,19,29,0.02)_0%,rgba(18,7,32,0.18)_42%,rgba(18,7,32,0.82)_100%)]"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 text-white md:p-5">
          <div className="rounded-[24px] border border-white/18 bg-white/[0.13] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl">
            <p className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.2em] text-[#c6a87d]">
              {principle.label}
            </p>
            <h3 className="mt-4 font-display text-[42px] font-medium leading-none">
              {principle.title}
            </h3>
            <p className="mt-4 font-sans text-[14px] leading-[1.65] text-white/72">
              {principle.text}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function MaterialCard({ material }: { material: (typeof materials)[number] }) {
  return (
    <article className="relative h-[360px] min-w-[300px] overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.06] text-white shadow-[0_24px_80px_rgba(0,0,0,0.18)] md:h-[420px] md:min-w-[420px]">
      <img
        src={material.image}
        alt={`${material.name} material direction`}
        className="absolute inset-0 h-full w-full object-cover opacity-80"
        loading="lazy"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,19,29,0.06)_0%,rgba(6,19,29,0.24)_42%,rgba(6,19,29,0.88)_100%)]"
      />
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <p className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.2em] text-[#c6a87d]">
          Material
        </p>
        <h3 className="mt-4 font-display text-[38px] font-medium leading-none">
          {material.name}
        </h3>
        <p className="mt-3 font-sans text-[14px] leading-[1.6] text-white/68">
          {material.note}
        </p>
      </div>
    </article>
  );
}

export function DesignPage() {
  const shouldReduceMotion = useReducedMotion();
  const materialLoop = [...materials, ...materials];

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
        aria-labelledby="design-page-title"
        className="relative isolate overflow-hidden bg-[#06131d] px-6 pb-20 pt-0 text-white md:px-12 md:pb-24 lg:px-10 lg:pb-32"
      >
        <img
          src={heroImageUrl}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-[58%_center] opacity-[0.62]"
          fetchPriority="high"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(3,7,18,0.98)_0%,rgba(23,12,47,0.88)_40%,rgba(88,28,135,0.5)_68%,rgba(6,19,29,0.24)_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_76%_16%,rgba(198,168,125,0.22),transparent_28%),radial-gradient(circle_at_18%_78%,rgba(88,28,135,0.25),transparent_34%)]"
        />
        <div aria-hidden="true" className="velare-grain pointer-events-none absolute inset-0 z-0" />

        <div className="relative z-10 mx-auto w-full max-w-[1460px]">
          <SiteHeader activeItem="Design" />

          <div className="grid min-w-0 gap-10 border-t border-white/14 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-6 lg:pt-28">
            <motion.div {...reveal(0.06)} className="min-w-0 lg:col-span-7">
              <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d]">
                VELARÉ Design
              </p>
              <h1
                id="design-page-title"
                className="mt-6 max-w-[330px] break-words font-display text-[42px] font-medium leading-[1.02] tracking-normal text-white sm:max-w-[760px] sm:text-[58px] md:text-[82px]"
              >
                Designed living, resolved to its quietest form.
              </h1>
              <p className="mt-7 max-w-[330px] font-sans text-[16px] leading-[1.75] text-white/70 sm:max-w-[560px] md:text-[18px]">
                VELARÉ residences are shaped through architecture, interiors,
                materials, and arrival experiences that feel composed before
                they feel decorated.
              </p>

              <div className="mt-8 flex w-[342px] max-w-full flex-col gap-4 sm:w-auto sm:flex-row">
                <a
                  href="#design-principles"
                  className="inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-white px-8 font-sans text-[15px] font-semibold leading-none tracking-normal text-[#0f2034] transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-white/[0.92] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Explore Design
                  <ArrowIcon />
                </a>
                <a
                  href="/private-tour"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/[0.72] bg-white/[0.08] px-8 font-sans text-[15px] font-medium leading-none tracking-normal text-white backdrop-blur transition-[background-color,transform,border-color] duration-300 ease-in-out hover:-translate-y-0.5 hover:border-white hover:bg-white/[0.18] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Book a Private Tour
                  <ArrowIcon />
                </a>
              </div>
            </motion.div>

            <motion.aside
              {...reveal(0.14, 26)}
              className="w-[342px] max-w-full overflow-hidden rounded-[32px] border border-white/18 bg-white/[0.105] p-4 shadow-[0_28px_100px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl md:w-full md:p-5 lg:col-span-4 lg:col-start-9"
            >
              <div className="relative min-h-[440px] overflow-hidden rounded-[26px]">
                <img
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=88"
                  alt="VELARÉ residence interior with warm architectural light"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,19,29,0)_34%,rgba(6,19,29,0.78)_100%)]"
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.2em] text-[#c6a87d]">
                    Design Study
                  </p>
                  <p className="mt-4 font-display text-[34px] font-medium leading-[1.05] text-white">
                    Proportion first. Decoration last.
                  </p>
                </div>
              </div>

              <dl className="mt-4 grid gap-px overflow-hidden rounded-[22px] border border-white/12 bg-white/[0.08] sm:grid-cols-3">
                {heroNotes.map((note) => (
                  <div key={note.label} className="bg-white/[0.055] p-4">
                    <dt className="font-sans text-[9px] font-semibold uppercase leading-none tracking-[0.18em] text-[#c6a87d]">
                      {note.label}
                    </dt>
                    <dd className="mt-3 font-display text-[22px] font-medium leading-none text-white">
                      {note.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.aside>
          </div>
        </div>
      </section>

      <section
        id="design-principles"
        aria-labelledby="design-principles-title"
        className="px-6 py-20 md:px-12 md:py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-[1460px]">
          <motion.div {...reveal()}>
            <SectionIntro
              eyebrow="Design Principles"
              title="A language of proportion, material, and quiet light."
              titleId="design-principles-title"
              description="Every residence begins with restraint: fewer gestures, stronger spaces, and details that make daily living feel considered without asking for attention."
            />
          </motion.div>

          <div className="mt-10 grid w-full gap-6 md:grid-cols-3">
            {designPrinciples.map((principle, index) => (
              <PrincipleCard
                key={principle.title}
                principle={principle}
                index={index}
                shouldReduceMotion={Boolean(shouldReduceMotion)}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="design-process-title"
        className="px-6 pb-20 md:px-12 md:pb-24 lg:px-10 lg:pb-32"
      >
        <div className="mx-auto grid w-full max-w-[1460px] min-w-0 gap-10 lg:grid-cols-12 lg:gap-6">
          <motion.div {...reveal()} className="min-w-0 lg:col-span-5">
            <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#581c87]">
              Design Method
            </p>
            <h2
              id="design-process-title"
              className="mt-6 max-w-[330px] break-words font-display text-[42px] font-medium leading-[1.04] tracking-normal md:max-w-[620px] md:text-[62px]"
            >
              The process is edited before the residence is revealed.
            </h2>
          </motion.div>

          <motion.div
            {...reveal(0.08)}
            className="relative min-h-[500px] w-[342px] max-w-full overflow-hidden rounded-[34px] border border-[#581c87]/12 bg-[#06131d] shadow-[0_24px_80px_rgba(88,74,50,0.13)] md:w-full lg:col-span-7 lg:min-h-[560px]"
          >
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=88"
              alt="Modern residence with timber and glass design language"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(18,7,32,0.24)_44%,rgba(18,7,32,0.8)_100%)]"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 text-white md:p-7">
              <div className="rounded-[24px] border border-white/18 bg-white/[0.12] p-4 backdrop-blur-2xl md:rounded-[26px] md:p-6">
                <p className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.2em] text-[#c6a87d]">
                  Arrival Sequence
                </p>
                <p className="mt-4 max-w-[620px] break-words font-display text-[30px] font-medium leading-[1.05] md:text-[48px]">
                  A residence should feel resolved before the first room is
                  explained.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.ol
            {...reveal(0.12, 18)}
            className="grid w-[342px] max-w-full gap-4 md:w-full lg:col-span-12 lg:grid-cols-4"
          >
            {designProcess.map((step) => (
              <li
                key={step.title}
                className="min-w-0 rounded-[26px] border border-[#581c87]/12 bg-[#fbfaf7]/82 p-6 shadow-[0_18px_54px_rgba(88,74,50,0.08)]"
              >
                <p className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-[#581c87]">
                  {step.count}
                </p>
                <h3 className="mt-5 font-display text-[31px] font-medium leading-none">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-[300px] break-words font-sans text-[14px] leading-[1.75] text-[#665f52]">
                  {step.text}
                </p>
              </li>
            ))}
          </motion.ol>
        </div>
      </section>

      <section className="bg-[#06131d] px-6 py-20 text-white md:px-12 md:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto w-full max-w-[1460px]">
          <motion.div {...reveal(0.08)}>
            <SectionIntro
              eyebrow="Material Library"
              title="Textures selected for atmosphere, age, and touch."
              description="The palette stays warm, architectural, and tactile: natural surfaces that hold light without becoming loud."
              tone="dark"
            />
          </motion.div>

          <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
            <motion.div
              className="flex w-max gap-5"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      x: ["0%", "-50%"],
                    }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 42,
                      repeat: Infinity,
                      ease: "linear",
                    }
              }
            >
              {materialLoop.map((material, index) => (
                <MaterialCard key={`${material.name}-${index}`} material={material} />
              ))}
            </motion.div>
          </div>

          <div className="mt-20 grid min-w-0 gap-8 border-t border-white/14 pt-10 lg:grid-cols-12 lg:gap-6">
            <div className="min-w-0 lg:col-span-7">
              <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d]">
                Private Brief
              </p>
              <h2 className="mt-6 max-w-[330px] break-words font-display text-[42px] font-medium leading-[1.04] text-white md:max-w-[780px] md:text-[62px]">
                Let the design brief begin with how you want to live.
              </h2>
            </div>
            <div className="min-w-0 lg:col-span-4 lg:col-start-9 lg:pt-11">
              <p className="max-w-[330px] break-words font-sans text-[16px] leading-[1.75] text-white/66 md:max-w-[470px]">
                Share the atmosphere, pace, and privacy you want. The VELARÉ
                private office will prepare a design-led viewing route.
              </p>
              <a
                href="/private-tour"
                className="mt-8 inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-white px-8 font-sans text-[15px] font-semibold leading-none tracking-normal text-[#0f2034] transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-white/[0.92] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Book a Private Tour
                <ArrowIcon />
              </a>
            </div>
          </div>

          <SiteFooter className="mt-20 md:mt-24" />
        </div>
      </section>
    </main>
  );
}
