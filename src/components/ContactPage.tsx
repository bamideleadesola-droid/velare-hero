import { motion, useReducedMotion, type Transition } from "framer-motion";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

const contactPosterUrl =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=90";

const contactVideoUrl =
  "https://videos.pexels.com/video-files/32456138/13842188_3840_2160_60fps.mp4";

const inquiryTypes = [
  "Private residence",
  "Private tour",
  "Agent introduction",
  "Design consultation",
  "Partnership",
] as const;

const marketOptions = [
  "Los Angeles",
  "Monaco",
  "London",
  "Dubai",
  "Paris",
  "Lake Como",
  "New York",
  "Singapore",
] as const;

const contactDetails = [
  { label: "Response", value: "Within 24h" },
  { label: "Office", value: "Private desk" },
  { label: "Access", value: "By request" },
] as const;

const contactRoutes = [
  {
    title: "Private Office",
    label: "Residences",
    text: "For confidential mandates, acquisition briefs, and collection access.",
    action: "private@velare.residences",
    href: "mailto:private@velare.residences?subject=Private%20office%20inquiry",
  },
  {
    title: "Viewing Desk",
    label: "Tours",
    text: "For private tour timing, arrival details, and residence preparation.",
    action: "tour@velare.residences",
    href: "mailto:tour@velare.residences?subject=Private%20tour%20inquiry",
  },
  {
    title: "Partnerships",
    label: "Brand",
    text: "For interior studios, hospitality groups, and private office referrals.",
    action: "partners@velare.residences",
    href: "mailto:partners@velare.residences?subject=VELARÉ%20partnership%20inquiry",
  },
] as const;

const officeMarkets = [
  {
    city: "Los Angeles",
    region: "Hillside estates and coastal residences",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=88",
    objectPosition: "center 52%",
  },
  {
    city: "London",
    region: "Townhouses, penthouses, and private mandates",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=88",
    objectPosition: "center 50%",
  },
  {
    city: "Dubai",
    region: "Waterfront villas and resort-led residences",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=88",
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

function SelectChevron() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#c6a87d]"
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

function ContactForm() {
  return (
    <form
      action="mailto:private@velare.residences"
      method="post"
      encType="text/plain"
      className="relative w-[342px] max-w-full overflow-hidden rounded-[30px] border border-white/18 bg-white/[0.105] p-5 shadow-[0_28px_100px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl md:w-full md:p-7"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c6a87d] to-transparent"
      />
      <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d]">
        Send a Brief
      </p>
      <p className="mt-5 max-w-[360px] font-display text-[32px] font-medium leading-[1.08] text-white">
        Tell us what should be handled privately.
      </p>

      <div className="mt-7 grid gap-4">
        <label className="block">
          <span className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-white/48">
            Name
          </span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-3 h-12 w-full rounded-full border border-white/14 bg-white/[0.08] px-5 font-sans text-[14px] text-white outline-none transition-colors duration-300 placeholder:text-white/34 focus:border-[#c6a87d] focus:bg-white/[0.12]"
            placeholder="Private client"
          />
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-white/48">
              Email
            </span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-3 h-12 w-full rounded-full border border-white/14 bg-white/[0.08] px-5 font-sans text-[14px] text-white outline-none transition-colors duration-300 placeholder:text-white/34 focus:border-[#c6a87d] focus:bg-white/[0.12]"
              placeholder="name@example.com"
            />
          </label>

          <label className="block">
            <span className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-white/48">
              Phone
            </span>
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              className="mt-3 h-12 w-full rounded-full border border-white/14 bg-white/[0.08] px-5 font-sans text-[14px] text-white outline-none transition-colors duration-300 placeholder:text-white/34 focus:border-[#c6a87d] focus:bg-white/[0.12]"
              placeholder="+1 000 000 0000"
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-white/48">
              Inquiry
            </span>
            <div className="relative mt-3">
              <select
                name="inquiry"
                className="h-12 w-full appearance-none rounded-full border border-white/14 bg-[#102332] py-0 pl-5 pr-12 font-sans text-[14px] text-white outline-none transition-colors duration-300 focus:border-[#c6a87d] focus:bg-[#142b3b]"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select inquiry
                </option>
                {inquiryTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
              <SelectChevron />
            </div>
          </label>

          <label className="block">
            <span className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-white/48">
              Market
            </span>
            <div className="relative mt-3">
              <select
                name="market"
                className="h-12 w-full appearance-none rounded-full border border-white/14 bg-[#102332] py-0 pl-5 pr-12 font-sans text-[14px] text-white outline-none transition-colors duration-300 focus:border-[#c6a87d] focus:bg-[#142b3b]"
                defaultValue=""
              >
                <option value="" disabled>
                  Preferred market
                </option>
                {marketOptions.map((market) => (
                  <option key={market}>{market}</option>
                ))}
              </select>
              <SelectChevron />
            </div>
          </label>
        </div>

        <label className="block">
          <span className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-white/48">
            Message
          </span>
          <textarea
            name="message"
            rows={5}
            required
            className="mt-3 w-full resize-none rounded-[22px] border border-white/14 bg-white/[0.08] px-5 py-4 font-sans text-[14px] leading-[1.6] text-white outline-none transition-colors duration-300 placeholder:text-white/34 focus:border-[#c6a87d] focus:bg-white/[0.12]"
            placeholder="Residence type, timeline, privacy needs, or partnership context"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-4 rounded-full bg-white px-8 font-sans text-[15px] font-semibold leading-none tracking-normal text-[#0f2034] shadow-[0_16px_38px_rgba(15,23,42,0.18)] transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-white/[0.92] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        Send Private Brief
        <ArrowIcon />
      </button>
    </form>
  );
}

function RouteCard({
  route,
  index,
  shouldReduceMotion,
}: {
  route: (typeof contactRoutes)[number];
  index: number;
  shouldReduceMotion: boolean;
}) {
  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.72, delay: index * 0.05, ease: easeOut }
      }
      className="group flex min-h-[300px] w-[342px] max-w-full flex-col justify-between rounded-[28px] border border-[#581c87]/12 bg-[#fbfaf7]/86 p-6 shadow-[0_20px_64px_rgba(88,74,50,0.08)] transition-[border-color,transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-[#581c87]/34 hover:shadow-[0_30px_90px_rgba(88,28,135,0.12)] md:w-full md:p-7"
    >
      <div>
        <div className="flex items-center justify-between gap-4">
          <p className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.2em] text-[#581c87]">
            {route.label}
          </p>
          <span className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.16em] text-[#c6a87d]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h2 className="mt-8 font-display text-[38px] font-medium leading-none text-[#151515]">
          {route.title}
        </h2>
        <p className="mt-5 max-w-[300px] font-sans text-[14px] leading-[1.75] text-[#625d54]">
          {route.text}
        </p>
      </div>

      <a
        href={route.href}
        className="mt-8 inline-flex min-h-12 w-fit items-center gap-3 rounded-full border border-[#151515]/18 px-5 font-sans text-[12px] font-semibold leading-none text-[#151515] transition-[background-color,color,transform,border-color] duration-300 ease-in-out hover:-translate-y-0.5 hover:border-[#151515] hover:bg-[#151515] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#581c87]"
      >
        {route.action}
        <ArrowIcon />
      </a>
    </motion.article>
  );
}

function OfficeMarketCard({ market }: { market: (typeof officeMarkets)[number] }) {
  return (
    <article className="relative h-[420px] min-w-[310px] overflow-hidden rounded-[30px] bg-[#06131d] shadow-[0_24px_80px_rgba(52,42,28,0.16)] md:h-[500px] md:min-w-[520px] lg:min-w-[610px]">
      <img
        src={market.image}
        alt={`${market.city} contact market`}
        className="h-full w-full object-cover"
        style={{ objectPosition: market.objectPosition }}
        loading="lazy"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,19,29,0.02)_0%,rgba(18,7,32,0.2)_42%,rgba(6,19,29,0.86)_100%)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-[#c6a87d]" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
        <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d]">
          Office Market
        </p>
        <h3 className="mt-4 font-display text-[48px] font-medium leading-none md:text-[68px]">
          {market.city}
        </h3>
        <p className="mt-4 max-w-[390px] font-sans text-[14px] leading-[1.7] text-white/72">
          {market.region}
        </p>
      </div>
    </article>
  );
}

export function ContactPage() {
  const shouldReduceMotion = useReducedMotion();
  const marketLoop = [...officeMarkets, ...officeMarkets];

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
        aria-labelledby="contact-page-title"
        className="relative isolate overflow-hidden bg-[#06131d] px-6 pb-20 pt-0 text-white md:px-12 md:pb-24 lg:px-10 lg:pb-32"
      >
        {shouldReduceMotion ? (
          <img
            src={contactPosterUrl}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-[58%_center] opacity-[0.58]"
            fetchPriority="high"
          />
        ) : (
          <motion.video
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-[58%_center] opacity-[0.58]"
            poster={contactPosterUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            initial={false}
            animate={{ scale: [1, 1.03] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <source src={contactVideoUrl} type="video/mp4" />
          </motion.video>
        )}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(3,7,18,0.97)_0%,rgba(32,15,58,0.9)_38%,rgba(88,28,135,0.54)_66%,rgba(6,19,29,0.28)_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_76%_18%,rgba(198,168,125,0.25),transparent_28%),radial-gradient(circle_at_22%_76%,rgba(88,28,135,0.28),transparent_34%)]"
        />
        <div aria-hidden="true" className="velare-grain pointer-events-none absolute inset-0 z-0" />

        <div className="relative z-10 mx-auto w-full max-w-[1460px]">
          <SiteHeader ctaHref="/contact" />

          <div className="grid min-w-0 gap-10 border-t border-white/14 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-6 lg:pt-28">
            <motion.div {...reveal(0.06)} className="min-w-0 lg:col-span-7">
              <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d]">
                Contact VELARÉ
              </p>
              <h1
                id="contact-page-title"
                className="mt-6 max-w-[330px] break-words font-display text-[42px] font-medium leading-[1.02] tracking-normal text-white sm:max-w-[760px] sm:text-[58px] md:text-[82px]"
              >
                Speak with the private office.
              </h1>
              <p className="mt-7 max-w-[330px] font-sans text-[16px] leading-[1.75] text-white/70 sm:max-w-[560px] md:text-[18px]">
                For residences, private tours, partnerships, and confidential
                mandates, the VELARÉ team responds with calm discretion.
              </p>

              <div className="mt-8 flex w-[342px] max-w-full flex-col gap-4 sm:w-auto sm:flex-row">
                <a
                  href="mailto:private@velare.residences?subject=VELARÉ%20private%20office%20inquiry"
                  className="inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-white px-8 font-sans text-[15px] font-semibold leading-none tracking-normal text-[#0f2034] transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-white/[0.92] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Email Private Office
                  <ArrowIcon />
                </a>
                <a
                  href="#contact-form"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/[0.72] bg-white/[0.08] px-8 font-sans text-[15px] font-medium leading-none tracking-normal text-white backdrop-blur transition-[background-color,transform,border-color] duration-300 ease-in-out hover:-translate-y-0.5 hover:border-white hover:bg-white/[0.18] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Send a Private Brief
                  <ArrowIcon />
                </a>
              </div>

              <dl className="mt-10 grid w-[342px] max-w-full gap-px overflow-hidden rounded-[24px] border border-white/16 bg-white/[0.095] backdrop-blur-2xl sm:grid-cols-3 md:w-full">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="min-w-0 bg-white/[0.055] p-5">
                    <dt className="font-sans text-[9px] font-semibold uppercase leading-none tracking-[0.18em] text-[#c6a87d]">
                      {detail.label}
                    </dt>
                    <dd className="mt-3 font-display text-[24px] font-medium leading-none text-white">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            <motion.div
              id="contact-form"
              {...reveal(0.14, 26)}
              className="min-w-0 scroll-mt-24 lg:col-span-5"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="contact-routes-title"
        className="px-6 py-20 md:px-12 md:py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-[1460px]">
          <motion.div
            {...reveal()}
            className="grid min-w-0 gap-10 border-b border-[#141414]/15 pb-12 lg:grid-cols-12 lg:gap-6 lg:pb-16"
          >
            <div className="min-w-0 lg:col-span-7">
              <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#581c87]">
                Direct Lines
              </p>
              <h2
                id="contact-routes-title"
                className="mt-6 max-w-[330px] break-words font-display text-[42px] font-medium leading-[1.04] tracking-normal sm:max-w-[760px] md:text-[62px]"
              >
                The right desk receives the brief first.
              </h2>
            </div>
            <p className="max-w-[330px] font-sans text-[16px] leading-[1.75] text-[#5f5a51] sm:max-w-[470px] lg:col-span-4 lg:col-start-9 lg:pt-11">
              Every message is routed through the private office before a
              viewing, introduction, or partnership conversation is arranged.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {contactRoutes.map((route, index) => (
              <RouteCard
                key={route.title}
                route={route}
                index={index}
                shouldReduceMotion={Boolean(shouldReduceMotion)}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="office-markets-title"
        className="px-6 pb-20 md:px-12 md:pb-24 lg:px-10 lg:pb-32"
      >
        <div className="mx-auto w-full max-w-[1460px]">
          <motion.div
            {...reveal()}
            className="grid min-w-0 gap-10 border-b border-[#141414]/15 pb-12 lg:grid-cols-12 lg:gap-6 lg:pb-16"
          >
            <div className="min-w-0 lg:col-span-7">
              <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#581c87]">
                Office Reach
              </p>
              <h2
                id="office-markets-title"
                className="mt-6 max-w-[330px] break-words font-display text-[42px] font-medium leading-[1.04] tracking-normal sm:max-w-[760px] md:text-[62px]"
              >
                Conversations move quietly across global markets.
              </h2>
            </div>
            <p className="max-w-[330px] font-sans text-[16px] leading-[1.75] text-[#5f5a51] sm:max-w-[470px] lg:col-span-4 lg:col-start-9 lg:pt-11">
              VELARÉ keeps the first step measured: one private brief, one
              aligned desk, and only the opportunities that fit.
            </p>
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
                      duration: 46,
                      repeat: Infinity,
                      ease: "linear",
                    }
              }
            >
              {marketLoop.map((market, index) => (
                <OfficeMarketCard key={`${market.city}-${index}`} market={market} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#06131d] px-6 py-20 text-white md:px-12 md:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1460px] min-w-0 gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="min-w-0 lg:col-span-7">
            <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d]">
              Private Access
            </p>
            <h2 className="mt-6 max-w-[330px] break-words font-display text-[42px] font-medium leading-[1.04] md:max-w-[780px] md:text-[62px]">
              Begin where the brief becomes precise.
            </h2>
          </div>
          <div className="min-w-0 lg:col-span-4 lg:col-start-9 lg:pt-11">
            <p className="max-w-[330px] break-words font-sans text-[16px] leading-[1.75] text-white/66 md:max-w-[470px]">
              Send the first note, and the private office will prepare a
              considered response around market, timing, and discretion.
            </p>
            <a
              href="mailto:private@velare.residences?subject=VELARÉ%20private%20office%20inquiry"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-white px-8 font-sans text-[15px] font-semibold leading-none tracking-normal text-[#0f2034] transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-white/[0.92] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Email Private Office
              <ArrowIcon />
            </a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[1460px]">
          <SiteFooter className="mt-20 md:mt-24" />
        </div>
      </section>
    </main>
  );
}
