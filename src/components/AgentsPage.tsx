import { motion, useReducedMotion, type Transition } from "framer-motion";
import {
  agents,
  cityMarkets,
  partnerLogos,
  PartnerLogo,
} from "./AgentsAndPartners";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

const heroImageUrl =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90";

const agentStats = [
  { label: "Private Advisors", value: "8" },
  { label: "Global Markets", value: "16+" },
  { label: "Response Window", value: "24h" },
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
    <div className="grid min-w-0 gap-8 border-b pb-10 md:gap-10 lg:grid-cols-12 lg:gap-6 lg:pb-14">
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

function AgentProfileCard({
  agent,
  index,
  shouldReduceMotion,
}: {
  agent: (typeof agents)[number];
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
          : { duration: 0.72, delay: 0.04 * index, ease: easeOut }
      }
      className="group w-[342px] max-w-full rounded-[30px] border border-[#581c87]/12 bg-[#fbfaf7]/82 p-3 shadow-[0_20px_64px_rgba(88,74,50,0.09)] transition-[border-color,transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-[#581c87]/34 hover:shadow-[0_30px_90px_rgba(88,28,135,0.12)] md:w-full"
    >
      <div className="relative aspect-[4/4.35] overflow-hidden rounded-[24px] bg-[#d8d1c4]">
        <img
          src={agent.image}
          alt={`${agent.name}, ${agent.role}`}
          className="h-full w-full object-cover grayscale-[12%] saturate-[0.86] transition duration-700 ease-out group-hover:scale-[1.035] group-hover:grayscale-0 group-hover:saturate-100"
          style={{ objectPosition: agent.objectPosition }}
          loading="lazy"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,19,29,0)_36%,rgba(6,19,29,0.7)_100%)]"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <p className="w-fit rounded-full border border-white/24 bg-white/12 px-3 py-2 font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.16em] backdrop-blur">
            {agent.market}
          </p>
        </div>
      </div>

      <div className="px-1 pb-2 pt-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="font-display text-[31px] font-medium leading-none text-[#151515]">
              {agent.name}
            </h3>
            <p className="mt-3 font-sans text-[13px] font-semibold leading-none text-[#6f685c]">
              {agent.role}
            </p>
          </div>
          <p className="max-w-[92px] shrink-0 text-right font-sans text-[10px] font-semibold uppercase leading-[1.35] tracking-[0.14em] text-[#581c87]">
            {agent.portfolio}
          </p>
        </div>

        <p className="mt-4 font-sans text-[13px] leading-[1.6] text-[#625d54]">
          {agent.focus}
        </p>

        <a
          href={`mailto:private@velare.residences?subject=${encodeURIComponent(
            `Private introduction with ${agent.name}`,
          )}`}
          className="mt-5 inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-[#151515]/18 px-5 font-sans text-[12px] font-semibold leading-none text-[#151515] transition-[background-color,color,transform,border-color] duration-300 ease-in-out hover:-translate-y-0.5 hover:border-[#151515] hover:bg-[#151515] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#581c87]"
        >
          Request Introduction
          <ArrowIcon />
        </a>
      </div>
    </motion.article>
  );
}

function MarketTile({ city }: { city: (typeof cityMarkets)[number] }) {
  return (
    <article className="relative h-[420px] min-w-[310px] overflow-hidden rounded-[30px] bg-[#06131d] shadow-[0_24px_80px_rgba(52,42,28,0.16)] md:h-[500px] md:min-w-[560px] lg:min-w-[640px]">
      <img
        src={city.image}
        alt={`${city.city} luxury market`}
        className="h-full w-full object-cover"
        style={{ objectPosition: city.objectPosition }}
        loading="lazy"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,19,29,0.02)_0%,rgba(6,19,29,0.18)_38%,rgba(6,19,29,0.86)_100%)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-[#c6a87d]" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
        <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d]">
          Market
        </p>
        <h3 className="mt-4 font-display text-[46px] font-medium leading-none md:text-[68px]">
          {city.city}
        </h3>
        <p className="mt-4 max-w-[400px] font-sans text-[14px] leading-[1.7] text-white/72">
          {city.region}
        </p>
      </div>
    </article>
  );
}

export function AgentsPage() {
  const shouldReduceMotion = useReducedMotion();
  const marketLoop = [...cityMarkets, ...cityMarkets];
  const partnerLoop = [...partnerLogos, ...partnerLogos];

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
        aria-labelledby="agents-page-title"
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
          className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(3,7,18,0.98)_0%,rgba(23,12,47,0.9)_38%,rgba(88,28,135,0.52)_68%,rgba(6,19,29,0.26)_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_74%_18%,rgba(198,168,125,0.22),transparent_28%),radial-gradient(circle_at_24%_78%,rgba(88,28,135,0.24),transparent_34%)]"
        />
        <div aria-hidden="true" className="velare-grain pointer-events-none absolute inset-0 z-0" />

        <div className="relative z-10 mx-auto w-full max-w-[1460px]">
          <SiteHeader activeItem="Agents" />

          <div className="grid min-w-0 gap-10 border-t border-white/14 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-6 lg:pt-28">
            <motion.div {...reveal(0.06)} className="min-w-0 lg:col-span-7">
              <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d]">
                VELARÉ Agents
              </p>
              <h1
                id="agents-page-title"
                className="mt-6 max-w-[330px] break-words font-display text-[42px] font-medium leading-[1.02] tracking-normal text-white sm:max-w-[760px] sm:text-[58px] md:text-[82px]"
              >
                Private access, held by people who know the room.
              </h1>
              <p className="mt-7 max-w-[330px] font-sans text-[16px] leading-[1.75] text-white/70 sm:max-w-[560px] md:text-[18px]">
                Work with advisors who understand quiet mandates, global
                markets, and the difference between availability and access.
              </p>

              <div className="mt-8 flex w-[342px] max-w-full flex-col gap-4 sm:w-auto sm:flex-row">
                <a
                  href="#agent-roster"
                  className="inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-white px-8 font-sans text-[15px] font-semibold leading-none tracking-normal text-[#0f2034] transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-white/[0.92] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Meet the Roster
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

              <dl className="mt-10 grid w-[342px] max-w-full gap-px overflow-hidden rounded-[24px] border border-white/16 bg-white/[0.095] backdrop-blur-2xl sm:grid-cols-3 md:w-full">
                {agentStats.map((stat) => (
                  <div key={stat.label} className="min-w-0 bg-white/[0.055] p-5">
                    <dt className="font-sans text-[9px] font-semibold uppercase leading-none tracking-[0.18em] text-[#c6a87d]">
                      {stat.label}
                    </dt>
                    <dd className="mt-3 font-display text-[30px] font-medium leading-none text-white">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            <motion.aside
              {...reveal(0.14, 26)}
              className="w-[342px] max-w-full overflow-hidden rounded-[32px] border border-white/18 bg-white/[0.105] p-4 shadow-[0_28px_100px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl md:w-full md:p-5 lg:col-span-4 lg:col-start-9"
            >
              <div className="relative aspect-[4/4.4] overflow-hidden rounded-[26px]">
                <img
                  src={agents[0].image}
                  alt={`${agents[0].name}, ${agents[0].role}`}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: agents[0].objectPosition }}
                  loading="eager"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,19,29,0)_38%,rgba(6,19,29,0.78)_100%)]"
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.2em] text-[#c6a87d]">
                    Private Desk
                  </p>
                  <p className="mt-3 font-display text-[34px] font-medium leading-none text-white">
                    {agents[0].name}
                  </p>
                  <p className="mt-3 font-sans text-[13px] leading-none text-white/68">
                    {agents[0].role}
                  </p>
                </div>
              </div>

              <div className="grid gap-px overflow-hidden rounded-[22px] border border-white/12 bg-white/[0.08] mt-4 sm:grid-cols-2">
                <div className="bg-white/[0.055] p-4">
                  <p className="font-sans text-[9px] font-semibold uppercase leading-none tracking-[0.18em] text-[#c6a87d]">
                    Market
                  </p>
                  <p className="mt-3 font-display text-[22px] font-medium leading-none">
                    {agents[0].market}
                  </p>
                </div>
                <div className="bg-white/[0.055] p-4">
                  <p className="font-sans text-[9px] font-semibold uppercase leading-none tracking-[0.18em] text-[#c6a87d]">
                    Mandates
                  </p>
                  <p className="mt-3 font-display text-[22px] font-medium leading-none">
                    {agents[0].portfolio}
                  </p>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <section
        id="agent-roster"
        aria-labelledby="agent-roster-title"
        className="px-6 py-20 md:px-12 md:py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-[1460px]">
          <motion.div {...reveal()}>
            <SectionIntro
              eyebrow="Our Agents"
              title="A composed roster for residences that rarely need a public stage."
              titleId="agent-roster-title"
              description="Each advisor is selected for market memory, discretion, and the ability to hold a private brief from first call to final arrival."
            />
          </motion.div>

          <div className="mt-10 grid w-full gap-6 md:grid-cols-2 xl:grid-cols-4">
            {agents.map((agent, index) => (
              <AgentProfileCard
                key={agent.name}
                agent={agent}
                index={index}
                shouldReduceMotion={Boolean(shouldReduceMotion)}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="agent-markets-title"
        className="px-6 pb-20 md:px-12 md:pb-24 lg:px-10 lg:pb-32"
      >
        <div className="mx-auto w-full max-w-[1460px]">
          <motion.div {...reveal(0.06)}>
            <SectionIntro
              eyebrow="Market Coverage"
              title="A quieter map of the world’s most considered addresses."
              titleId="agent-markets-title"
              description="VELARÉ advisors move through a focused set of cities where architecture, privacy, and timing matter more than volume."
            />
          </motion.div>

          <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_7%,black_93%,transparent)]">
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
                      duration: 52,
                      repeat: Infinity,
                      ease: "linear",
                    }
              }
            >
              {marketLoop.map((city, index) => (
                <MarketTile key={`${city.city}-${index}`} city={city} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#06131d] px-6 py-20 text-white md:px-12 md:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto w-full max-w-[1460px]">
          <motion.div {...reveal(0.08)}>
            <SectionIntro
              eyebrow="Private Network"
              title="Trusted by private offices, designers, and hospitality groups."
              description="The VELARÉ agent network moves through quiet referrals and long-held relationships, where reputation is part of the service."
              tone="dark"
            />
          </motion.div>

          <div className="relative mt-10 overflow-hidden border-y border-white/12 py-6 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
            <motion.div
              className="flex w-max gap-4"
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
                      duration: 34,
                      repeat: Infinity,
                      ease: "linear",
                    }
              }
            >
              {partnerLoop.map((partner, index) => (
                <PartnerLogo key={`${partner.name}-${index}`} partner={partner} />
              ))}
            </motion.div>
          </div>

          <SiteFooter className="mt-20 md:mt-24" />
        </div>
      </section>
    </main>
  );
}
