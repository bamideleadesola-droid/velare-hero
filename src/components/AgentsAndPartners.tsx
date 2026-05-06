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
    <div className="flex h-28 min-w-[280px] items-center gap-4 border border-[#151515]/12 bg-[#fbfaf7]/45 px-6 text-[#151515] backdrop-blur">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#b89a68]/40 bg-[#f4f1ea] text-[#b89a68]">
        <LogoMark variant={partner.variant} />
      </div>
      <div>
        <p className="font-display text-[22px] font-medium leading-none tracking-normal">
          {partner.name}
        </p>
        <p className="mt-3 font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.2em] text-[#7c735f]">
          {partner.sector}
        </p>
      </div>
    </div>
  );
}

export function AgentsAndPartners() {
  const shouldReduceMotion = useReducedMotion();
  const marqueePartners = [...partnerLogos, ...partnerLogos];

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
      className="bg-[#f4f1ea] px-6 py-16 text-[#141414] md:px-12 md:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1460px]">
        <motion.div
          {...reveal()}
          className="grid gap-8 border-b border-[#141414]/15 pb-10 lg:grid-cols-12 lg:gap-6 lg:pb-14"
        >
          <div className="lg:col-span-2">
            <p className="font-sans text-[13px] font-medium leading-none tracking-[0.28em] text-[#7c735f]">
              004
            </p>
          </div>

          <div className="lg:col-span-6">
            <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#b89a68]">
              Our Agents
            </p>
            <h2
              id="agents-title"
              className="mt-6 max-w-[780px] font-display text-[36px] font-medium leading-[1.04] tracking-normal text-[#151515] md:text-[58px]"
            >
              A private roster with local instinct and global reach.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pt-11">
            <p className="max-w-[470px] font-sans text-[16px] font-normal leading-[1.75] tracking-normal text-[#5f5a51]">
              More than a sales team, each VELARÉ agent is a point of access:
              composed, responsive, and deeply connected to the markets they
              represent.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-x-6 gap-y-10 pt-10 md:grid-cols-2 lg:pt-14 xl:grid-cols-4">
          {agents.map((agent, index) => (
            <motion.article
              key={agent.name}
              initial={false}
              className="group border-t border-[#151515]/15 pt-5"
            >
              <div className="relative aspect-[4/4.25] overflow-hidden rounded-[22px] bg-[#d8d1c4]">
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

              <div className="mt-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-[#b89a68]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-[31px] font-medium leading-none text-[#151515]">
                      {agent.name}
                    </h3>
                  </div>
                  <p className="mt-1 max-w-[92px] text-right font-sans text-[10px] font-semibold uppercase leading-[1.45] tracking-[0.14em] text-[#7c735f]">
                    {agent.portfolio}
                  </p>
                </div>

                <p className="mt-4 font-sans text-[13px] font-semibold leading-none text-[#6f685c]">
                  {agent.role}
                </p>
                <p className="mt-4 font-sans text-[13px] leading-[1.65] text-[#625d54] md:min-h-[70px]">
                  {agent.focus}
                </p>

                <a
                  href={`mailto:private@velare.residences?subject=${encodeURIComponent(
                    `Private introduction with ${agent.name}`,
                  )}`}
                  className="mt-5 inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-[#151515]/18 px-5 font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.14em] text-[#151515] transition-[background-color,color,transform,border-color] duration-300 ease-in-out hover:-translate-y-0.5 hover:border-[#151515] hover:bg-[#151515] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b89a68]"
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
          className="mt-16 grid gap-6 border-y border-[#151515]/15 py-7 md:mt-20 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] md:items-center lg:py-8"
        >
          <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#b89a68]">
            Market Coverage
          </p>
          <p className="font-display text-[25px] font-medium leading-tight text-[#151515] md:text-[34px]">
            Los Angeles / Monaco / London / Dubai / Paris / Lake Como / New
            York / Singapore
          </p>
        </motion.div>

        <motion.div {...reveal(0.2)} className="mt-16 md:mt-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.45fr)] lg:items-end">
            <div>
              <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#b89a68]">
                Brands & Companies
              </p>
              <h3 className="mt-5 max-w-[520px] font-display text-[34px] font-medium leading-[1.04] text-[#151515] md:text-[50px]">
                Trusted by private offices, design houses, and hospitality
                groups.
              </h3>
            </div>

            <p className="max-w-[560px] font-sans text-[15px] leading-[1.75] text-[#6f685c] lg:justify-self-end">
              The VELARÉ network moves through quiet referrals: capital
              partners, hotel groups, interior ateliers, and family offices
              that value discretion as much as access.
            </p>
          </div>

          <div className="relative mt-10 overflow-hidden border-y border-[#151515]/15 py-6 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
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
        </motion.div>
      </div>
    </section>
  );
}
