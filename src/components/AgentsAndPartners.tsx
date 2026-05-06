import { motion, useReducedMotion, type Transition } from "framer-motion";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

const agents = [
  {
    name: "Amara Vale",
    role: "Director of Private Residences",
    market: "Los Angeles / Monaco",
    portfolio: "72 private mandates",
    focus: "Coastal estates, quiet negotiations, ultra-prime acquisitions",
    image:
      "https://images.pexels.com/photos/33657182/pexels-photo-33657182.jpeg?auto=compress&cs=tinysrgb&w=900",
    objectPosition: "center 24%",
  },
  {
    name: "Elias Montfort",
    role: "Senior Property Advisor",
    market: "London / Dubai",
    portfolio: "58 client briefs",
    focus: "International buyers, investment residences, discreet viewings",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=88",
    objectPosition: "center 24%",
  },
  {
    name: "Noelle Ardent",
    role: "Client Experience Lead",
    market: "Paris / Lake Como",
    portfolio: "41 private tours",
    focus: "Family offices, relocation planning, arrival experiences",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=88",
    objectPosition: "center 18%",
  },
  {
    name: "Soren Bell",
    role: "Estate Strategy Partner",
    market: "New York / Aspen",
    portfolio: "36 market holds",
    focus: "Portfolio strategy, legacy homes, confidential introductions",
    image:
      "https://images.pexels.com/photos/10341262/pexels-photo-10341262.jpeg?auto=compress&cs=tinysrgb&w=900",
    objectPosition: "center 28%",
  },
  {
    name: "Mira Laurent",
    role: "Architecture Liaison",
    market: "Milan / Ibiza",
    portfolio: "29 design briefs",
    focus: "Design-led residences, interiors, atelier relationships",
    image:
      "https://images.pexels.com/photos/18165008/pexels-photo-18165008.jpeg?auto=compress&cs=tinysrgb&w=900",
    objectPosition: "center 22%",
  },
  {
    name: "Julian Reyes",
    role: "Private Client Advisor",
    market: "Miami / Mexico City",
    portfolio: "64 buyer profiles",
    focus: "Waterfront homes, lifestyle search, private shortlists",
    image:
      "https://images.pexels.com/photos/7648248/pexels-photo-7648248.jpeg?auto=compress&cs=tinysrgb&w=900",
    objectPosition: "center 34%",
  },
  {
    name: "Celeste Rowan",
    role: "Residences Consultant",
    market: "San Francisco / Napa",
    portfolio: "47 estate reviews",
    focus: "Hillside residences, vineyard estates, measured acquisitions",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=88",
    objectPosition: "center 18%",
  },
  {
    name: "Theo Laurent",
    role: "Global Access Lead",
    market: "Singapore / Hong Kong",
    portfolio: "52 private routes",
    focus: "Cross-border access, private offices, compressed timelines",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=88",
    objectPosition: "center 20%",
  },
] as const;

const partnerLogos = [
  {
    name: "Aureon Capital",
    sector: "Private Capital",
    variant: "aureon",
  },
  {
    name: "Maison Rowe",
    sector: "Design House",
    variant: "maison",
  },
  {
    name: "Halcyon Hotels",
    sector: "Hospitality",
    variant: "halcyon",
  },
  {
    name: "Caspian Office",
    sector: "Family Office",
    variant: "caspian",
  },
  {
    name: "Lumen Atelier",
    sector: "Interiors",
    variant: "lumen",
  },
  {
    name: "Northline Estates",
    sector: "Development",
    variant: "northline",
  },
] as const;

const cityMarkets = [
  {
    city: "Los Angeles",
    region: "Coastal estates and hillside privacy",
    image:
      "https://images.pexels.com/photos/28738232/pexels-photo-28738232.jpeg?auto=compress&cs=tinysrgb&w=1600",
    objectPosition: "center 58%",
  },
  {
    city: "Monaco",
    region: "Marina residences and private arrivals",
    image:
      "https://images.pexels.com/photos/18341129/pexels-photo-18341129.jpeg?auto=compress&cs=tinysrgb&w=1600",
    objectPosition: "center 42%",
  },
  {
    city: "London",
    region: "Heritage addresses and discreet access",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=88",
    objectPosition: "center 42%",
  },
  {
    city: "Dubai",
    region: "Waterfront towers and resort-scale villas",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=88",
    objectPosition: "center 44%",
  },
  {
    city: "Paris",
    region: "Quiet streets, cultural access, private homes",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1600&q=88",
    objectPosition: "center 45%",
  },
  {
    city: "Lake Como",
    region: "Waterline villas and gardened calm",
    image:
      "https://images.pexels.com/photos/19873394/pexels-photo-19873394.jpeg?auto=compress&cs=tinysrgb&w=1600",
    objectPosition: "center 52%",
  },
  {
    city: "New York",
    region: "Penthouses, townhouses, and private offices",
    image:
      "https://images.pexels.com/photos/33324218/pexels-photo-33324218.jpeg?auto=compress&cs=tinysrgb&w=1600",
    objectPosition: "center 42%",
  },
  {
    city: "Singapore",
    region: "Garden city living and cross-border access",
    image:
      "https://images.pexels.com/photos/30471856/pexels-photo-30471856.jpeg?auto=compress&cs=tinysrgb&w=1600",
    objectPosition: "center 46%",
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

function LogoMark({ variant }: { variant: (typeof partnerLogos)[number]["variant"] }) {
  if (variant === "maison") {
    return (
      <svg aria-hidden="true" className="h-10 w-10" viewBox="0 0 48 48" fill="none">
        <path d="M9 35V13h30v22" stroke="currentColor" strokeWidth="1.6" />
        <path d="M15 35V19h8v16M25 35V19h8v16" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 35h34" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  if (variant === "halcyon") {
    return (
      <svg aria-hidden="true" className="h-10 w-10" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 27c5.2-5.4 11.2-5.4 18 0 2.8 2.2 4.8 2.2 6 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M24 11v26" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  if (variant === "caspian") {
    return (
      <svg aria-hidden="true" className="h-10 w-10" viewBox="0 0 48 48" fill="none">
        <path d="M14 12h20l6 12-16 14L8 24l6-12Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M14 12 24 38 34 12M8 24h32" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }

  if (variant === "lumen") {
    return (
      <svg aria-hidden="true" className="h-10 w-10" viewBox="0 0 48 48" fill="none">
        <path d="M24 8v32M8 24h32M13 13l22 22M35 13 13 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="7" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  if (variant === "northline") {
    return (
      <svg aria-hidden="true" className="h-10 w-10" viewBox="0 0 48 48" fill="none">
        <path d="M9 35 21 13l8 14 5-8 5 16" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M8 35h32" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-10 w-10" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 33 24 14l8 19M19 27h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PartnerLogo({
  partner,
}: {
  partner: (typeof partnerLogos)[number];
}) {
  return (
    <div className="flex h-28 min-w-[280px] items-center gap-4 border border-white/12 bg-white/[0.055] px-6 text-white backdrop-blur">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#c6a87d]/50 bg-[#c6a87d]/10 text-[#c6a87d]">
        <LogoMark variant={partner.variant} />
      </div>
      <div>
        <p className="font-display text-[22px] font-medium leading-none tracking-normal">
          {partner.name}
        </p>
        <p className="mt-3 font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.2em] text-white/52">
          {partner.sector}
        </p>
      </div>
    </div>
  );
}

function CityCard({ city }: { city: (typeof cityMarkets)[number] }) {
  return (
    <article className="relative h-[420px] min-w-[82vw] overflow-hidden rounded-[30px] bg-[#06131d] shadow-[0_24px_80px_rgba(52,42,28,0.16)] md:h-[500px] md:min-w-[560px] lg:min-w-[660px]">
      <img
        src={city.image}
        alt={`${city.city} luxury market`}
        className="h-full w-full object-cover"
        style={{ objectPosition: city.objectPosition }}
        loading="eager"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,19,29,0.02)_0%,rgba(6,19,29,0.16)_38%,rgba(6,19,29,0.82)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-[#c6a87d]"
      />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
        <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d]">
          Market
        </p>
        <h3 className="mt-4 font-display text-[50px] font-medium leading-none md:text-[72px]">
          {city.city}
        </h3>
        <p className="mt-4 max-w-[420px] font-sans text-[14px] leading-[1.7] text-white/72">
          {city.region}
        </p>
      </div>
    </article>
  );
}

type EditorialIntroProps = {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  titleId?: string;
  tone?: "light" | "dark";
};

function EditorialIntro({
  index,
  eyebrow,
  title,
  description,
  titleId,
  tone = "light",
}: EditorialIntroProps) {
  const isDark = tone === "dark";

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
      <div className="lg:col-span-2">
        <div className="flex items-center gap-4 lg:block">
          <p
            className={`font-sans text-[14px] font-semibold leading-none tracking-[0.28em] ${
              isDark ? "text-[#c6a87d]" : "text-[#b89a68]"
            }`}
          >
            {index}
          </p>
          <span
            aria-hidden="true"
            className={`block h-px w-10 lg:mt-5 ${
              isDark ? "bg-[#c6a87d]/65" : "bg-[#b89a68]/60"
            }`}
          />
        </div>
      </div>

      <div className="lg:col-span-6">
        <p
          className={`font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] ${
            isDark ? "text-[#c6a87d]" : "text-[#b89a68]"
          }`}
        >
          {eyebrow}
        </p>
        <h2
          id={titleId}
          className={`mt-6 max-w-[780px] font-display text-[42px] font-medium leading-[1.04] tracking-normal md:text-[62px] ${
            isDark ? "text-white" : "text-[#151515]"
          }`}
        >
          {title}
        </h2>
      </div>

      <div className="lg:col-span-4 lg:pt-11">
        <p
          className={`max-w-[470px] font-sans text-[16px] font-normal leading-[1.75] tracking-normal ${
            isDark ? "text-white/64" : "text-[#5f5a51]"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export function AgentsAndPartners() {
  const shouldReduceMotion = useReducedMotion();
  const marqueePartners = [...partnerLogos, ...partnerLogos];
  const cityLoop = [...cityMarkets, ...cityMarkets];

  const reveal = (delay = 0, y = 24) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.78, delay, ease: easeOut },
  });

  return (
    <section
      id="agents"
      aria-labelledby="agents-title"
      className="overflow-x-hidden bg-[#f4f1ea] px-6 py-16 text-[#141414] md:px-12 md:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1460px]">
        <motion.div
          {...reveal()}
          className="border-b border-[#141414]/15 pb-10 lg:pb-14"
        >
          <EditorialIntro
            index="004"
            eyebrow="Our Agents"
            title="A private roster with local instinct and global reach."
            titleId="agents-title"
            description="More than a sales team, each VELARÉ agent is a point of access: composed, responsive, and deeply connected to the markets they represent."
          />
        </motion.div>

        <div className="grid gap-x-6 gap-y-8 pt-10 md:grid-cols-2 lg:pt-14 xl:grid-cols-4">
          {agents.map((agent) => (
            <motion.article
              key={agent.name}
              initial={false}
              className="group rounded-[28px] border border-[#c6a87d]/25 bg-[#fbfaf7]/70 p-3 shadow-[0_18px_54px_rgba(88,74,50,0.08)] transition-[border-color,transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-[#c6a87d]/55 hover:shadow-[0_24px_70px_rgba(88,74,50,0.12)]"
            >
              <div className="relative aspect-[4/3.62] overflow-hidden rounded-[22px] bg-[#d8d1c4]">
                <img
                  src={agent.image}
                  alt={`${agent.name}, ${agent.role}`}
                  className="h-full w-full object-cover grayscale-[18%] saturate-[0.82] transition duration-700 ease-out group-hover:scale-[1.035] group-hover:grayscale-0 group-hover:saturate-100"
                  style={{ objectPosition: agent.objectPosition }}
                  loading="lazy"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,19,29,0)_30%,rgba(6,19,29,0.72)_100%)]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-[#b89a68]"
                />
                <p className="absolute bottom-5 left-5 right-5 font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-white/75">
                  {agent.market}
                </p>
              </div>

              <div className="px-1 pb-2 pt-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-[30px] font-medium leading-none text-[#151515]">
                    {agent.name}
                  </h3>
                  <p className="max-w-[96px] text-right font-sans text-[10px] font-semibold uppercase leading-[1.35] tracking-[0.14em] text-[#9a7b4b]">
                    {agent.portfolio}
                  </p>
                </div>

                <p className="mt-3 font-sans text-[13px] font-semibold leading-none text-[#6f685c]">
                  {agent.role}
                </p>
                <p className="mt-3 font-sans text-[13px] leading-[1.55] text-[#625d54] md:min-h-[62px]">
                  {agent.focus}
                </p>

                <a
                  href={`mailto:private@velare.residences?subject=${encodeURIComponent(
                    `Private introduction with ${agent.name}`,
                  )}`}
                  className="mt-4 inline-flex min-h-10 items-center justify-center gap-3 rounded-full border border-[#151515]/18 px-5 font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.14em] text-[#151515] transition-[background-color,color,transform,border-color] duration-300 ease-in-out hover:-translate-y-0.5 hover:border-[#151515] hover:bg-[#151515] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b89a68]"
                >
                  Contact
                  <ArrowIcon />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          {...reveal(0.14)}
          className="mt-16 border-y border-[#151515]/15 py-10 md:mt-20 lg:py-12"
        >
          <EditorialIntro
            index="005"
            eyebrow="Market Coverage"
            title="Cities selected for privacy, pace, and permanence."
            description="From hillside architecture to waterfront addresses, VELARÉ agents move through markets where the right residence is rarely public for long."
          />

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
              {cityLoop.map((city, index) => (
                <CityCard key={`${city.city}-${index}`} city={city} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        {...reveal(0.2)}
        className="-mx-6 mt-16 bg-[#06131d] px-6 py-16 text-white md:-mx-12 md:mt-20 md:px-12 md:py-20 lg:-mx-10 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-[1460px]">
          <EditorialIntro
            index="006"
            eyebrow="Brands & Companies"
            title="Trusted by private offices, designers, and hospitality groups."
            description="The VELARÉ network moves through quiet referrals: capital partners, hotel groups, interior ateliers, and family offices that value discretion as much as access."
            tone="dark"
          />

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
              {marqueePartners.map((partner, index) => (
                <PartnerLogo key={`${partner.name}-${index}`} partner={partner} />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
