import { motion, useReducedMotion, type Transition } from "framer-motion";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

const agents = [
  {
    name: "Amara Vale",
    role: "Director of Private Residences",
    location: "Los Angeles / Monaco",
    expertise: "Ultra-prime acquisitions, private negotiations, coastal estates",
    image:
      "https://images.pexels.com/photos/36030481/pexels-photo-36030481.jpeg?auto=compress&cs=tinysrgb&w=1200",
    objectPosition: "center 38%",
  },
  {
    name: "Elias Montfort",
    role: "Senior Property Advisor",
    location: "London / Dubai",
    expertise: "Investment residences, discreet viewings, international buyers",
    image:
      "https://images.pexels.com/photos/19330260/pexels-photo-19330260.jpeg?auto=compress&cs=tinysrgb&w=1200",
    objectPosition: "center 30%",
  },
  {
    name: "Noelle Ardent",
    role: "Client Experience Lead",
    location: "Paris / Lake Como",
    expertise: "Private tours, family offices, lifestyle-led relocation",
    image:
      "https://images.pexels.com/photos/8171196/pexels-photo-8171196.jpeg?auto=compress&cs=tinysrgb&w=1200",
    objectPosition: "center 42%",
  },
] as const;

const partnerMarks = [
  "AUREON CAPITAL",
  "MAISON ROWE",
  "HALCYON HOTELS",
  "CASPIAN PRIVATE OFFICE",
  "LUMEN ATELIER",
  "NORTHLINE ESTATES",
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

export function AgentsAndPartners() {
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
      id="agents"
      aria-labelledby="agents-title"
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
              Our Agents
            </p>
            <h2
              id="agents-title"
              className="mt-6 max-w-[760px] font-display text-[42px] font-medium leading-[1.04] tracking-normal text-[#151515] md:text-[62px]"
            >
              Agents chosen for discretion, reach, and instinct.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pt-11">
            <p className="max-w-[470px] font-sans text-[16px] font-normal leading-[1.75] tracking-normal text-[#5f5a51]">
              Every VELARÉ agent works as a private office: attentive,
              connected, and precise about the homes that deserve your time.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-8 pt-12 lg:grid-cols-12 lg:items-start lg:pt-16">
          <motion.article
            {...reveal(0.08)}
            className="relative min-h-[620px] overflow-hidden rounded-[34px] bg-[#151515] shadow-[0_24px_80px_rgba(78,67,45,0.16)] lg:col-span-5"
          >
            <motion.img
              src={agents[0].image}
              alt={`${agents[0].name}, ${agents[0].role}`}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: agents[0].objectPosition }}
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
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.12)_42%,rgba(0,0,0,0.74)_100%)]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 bg-[#b89a68]"
            />

            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8 lg:p-10">
              <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.22em] text-white/66">
                Lead Advisor
              </p>
              <h3 className="mt-4 font-display text-[44px] font-medium leading-none tracking-normal md:text-[58px]">
                {agents[0].name}
              </h3>
              <p className="mt-3 font-sans text-[13px] font-semibold leading-none text-white/72">
                {agents[0].role}
              </p>
              <p className="mt-5 max-w-[440px] font-sans text-[14px] leading-[1.7] text-white/72">
                {agents[0].expertise}
              </p>
            </div>
          </motion.article>

          <motion.div
            {...reveal(0.14)}
            className="lg:col-span-7"
          >
            <div className="border-y border-[#151515]/15">
              {agents.slice(1).map((agent, index) => (
                <article
                  key={agent.name}
                  className="grid gap-5 border-b border-[#151515]/12 py-6 last:border-b-0 md:grid-cols-[176px_minmax(0,1fr)] md:items-center lg:py-8"
                >
                  <div className="relative h-[220px] overflow-hidden rounded-[24px] bg-[#d8d1c4] md:h-[176px]">
                    <img
                      src={agent.image}
                      alt={`${agent.name}, ${agent.role}`}
                      className="h-full w-full object-cover"
                      style={{ objectPosition: agent.objectPosition }}
                      loading="lazy"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-1 bg-[#b89a68]"
                    />
                  </div>

                  <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(180px,0.7fr)] md:items-end">
                    <div>
                      <p className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-[#b89a68]">
                        {String(index + 2).padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 font-display text-[34px] font-medium leading-none text-[#151515] md:text-[42px]">
                        {agent.name}
                      </h3>
                      <p className="mt-3 font-sans text-[13px] font-semibold leading-none text-[#6f685c]">
                        {agent.role}
                      </p>
                      <p className="mt-5 max-w-[460px] font-sans text-[14px] leading-[1.7] text-[#625d54]">
                        {agent.expertise}
                      </p>
                    </div>

                    <div className="border-t border-[#151515]/12 pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                      <p className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-[#7c735f]">
                        Office
                      </p>
                      <p className="mt-3 font-display text-[24px] font-medium leading-tight text-[#151515]">
                        {agent.location}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 border-b border-[#151515]/15 pb-8 md:flex-row md:items-center md:justify-between">
              <p className="max-w-[520px] font-sans text-[14px] leading-[1.7] text-[#6f685c]">
                Viewings, introductions, and availability are handled by the
                advisor best suited to the residence and the client.
              </p>
              <a
                href="mailto:private@velare.residences"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#151515] px-6 font-sans text-[14px] font-semibold leading-none text-white transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#2a2a2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b89a68]"
              >
                Meet The Advisors
                <ArrowIcon />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...reveal(0.2)}
          className="mt-16 border-y border-[#151515]/15 py-8 md:mt-20 lg:py-10"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.4fr)] lg:items-center">
            <div>
              <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#b89a68]">
                Trusted By
              </p>
              <p className="mt-4 max-w-[420px] font-sans text-[15px] leading-[1.75] text-[#6f685c]">
                Private offices, design houses, hospitality groups, and
                investment teams rely on VELARÉ for discreet residential access.
              </p>
            </div>

            <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              {partnerMarks.map((partner) => (
                <div
                  key={partner}
                  className="border-t border-[#151515]/12 pt-5 font-sans text-[13px] font-semibold uppercase leading-none tracking-[0.2em] text-[#151515]/72"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
