import { motion, useReducedMotion, type Transition } from "framer-motion";
import { useState, type FormEvent } from "react";
import { residences, type Residence } from "./FeaturedResidences";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import {
  buildMailtoHref,
  getFormValue,
  submitContactRequest,
  type ContactPayload,
} from "../utils/contact";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

const tourPosterUrl =
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=90";

const tourVideoUrl =
  "https://videos.pexels.com/video-files/32456138/13842188_3840_2160_60fps.mp4";

const tourDetails = [
  { label: "Response", value: "Within 24h" },
  { label: "Format", value: "In-person / private virtual" },
  { label: "Access", value: "By appointment" },
] as const;

const tourSteps = [
  {
    count: "01",
    title: "Private Brief",
    text: "Share the market, pace, atmosphere, and level of privacy you expect.",
  },
  {
    count: "02",
    title: "Curated Route",
    text: "The private office prepares a calm shortlist and a viewing sequence.",
  },
  {
    count: "03",
    title: "Held Arrival",
    text: "Every residence is prepared before arrival, with access handled quietly.",
  },
] as const;

const markets = [
  "Los Angeles",
  "Dubai",
  "Lake Como",
  "Cap Ferrat",
  "Sonoma",
  "Milos",
] as const;

const tourResidenceMeta = [
  {
    market: "Los Angeles",
    price: "$8.7M",
    access: "Private Review",
  },
  {
    market: "Dubai",
    price: "$6.4M",
    access: "By Request",
  },
  {
    market: "Lake Como",
    price: "$5.2M",
    access: "Viewing Window",
  },
  {
    market: "Cap Ferrat",
    price: "$11.8M",
    access: "Private Mandate",
  },
  {
    market: "Sonoma",
    price: "$4.9M",
    access: "Preview Ready",
  },
  {
    market: "Milos",
    price: "$7.6M",
    access: "Invitation Only",
  },
] as const;

const compactTourDetail: Record<string, string> = {
  "Pool court": "Pool",
  "Private dock": "Dock",
  "Sea terrace": "Terrace",
  "Cliff pool": "Cliff pool",
};

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

export function PrivateTourPage() {
  const shouldReduceMotion = useReducedMotion();

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
        aria-labelledby="private-tour-title"
        className="relative isolate overflow-hidden bg-[#06131d] px-6 pb-20 pt-0 text-white md:px-12 md:pb-24 lg:px-10 lg:pb-32"
      >
        {shouldReduceMotion ? (
          <img
            src={tourPosterUrl}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-[58%_center] opacity-[0.58]"
            fetchPriority="high"
          />
        ) : (
          <motion.video
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-[58%_center] opacity-[0.58]"
            poster={tourPosterUrl}
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
            <source src={tourVideoUrl} type="video/mp4" />
          </motion.video>
        )}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(3,7,18,0.97)_0%,rgba(32,15,58,0.88)_38%,rgba(88,28,135,0.54)_66%,rgba(6,19,29,0.3)_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_72%_20%,rgba(198,168,125,0.24),transparent_28%),radial-gradient(circle_at_22%_72%,rgba(88,28,135,0.26),transparent_34%)]"
        />
        <div
          aria-hidden="true"
          className="velare-grain pointer-events-none absolute inset-0 z-0"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1460px]">
          <SiteHeader activeItem="Private Tours" />

          <div className="grid min-w-0 gap-10 border-t border-white/14 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-6 lg:pt-28">
            <motion.div {...reveal(0.08)} className="min-w-0 lg:col-span-7">
              <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d]">
                Private Tour
              </p>
              <h1
                id="private-tour-title"
                className="mt-6 max-w-[330px] break-words font-display text-[40px] font-medium leading-[1.02] tracking-normal text-white sm:max-w-[720px] sm:text-[56px] md:text-[78px]"
              >
                A private viewing shaped before you arrive.
              </h1>
              <p className="mt-7 max-w-[330px] font-sans text-[16px] leading-[1.75] text-white/70 sm:max-w-[560px] md:text-[18px]">
                Tell us how you want to live, and the VELARÉ private office will
                prepare a considered route through the residences that fit.
              </p>

              <dl
                className="mt-10 grid w-[342px] max-w-full gap-px overflow-hidden rounded-[24px] border border-white/16 bg-white/[0.095] backdrop-blur-2xl sm:grid-cols-3 md:w-full"
              >
                {tourDetails.map((detail) => (
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
              {...reveal(0.16, 26)}
              className="min-w-0 lg:col-span-4 lg:col-start-9"
            >
              <TourRequestForm />
            </motion.div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="tour-residences-title"
        className="px-6 py-20 md:px-12 md:py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-[1460px]">
          <motion.div
            {...reveal()}
            className="grid min-w-0 gap-10 border-b border-[#141414]/15 pb-12 lg:grid-cols-12 lg:gap-6 lg:pb-16"
          >
            <div className="min-w-0 lg:col-span-7">
              <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#581c87]">
                Tour Residences
              </p>
              <h2
                id="tour-residences-title"
                className="mt-6 max-w-[330px] break-words font-display text-[42px] font-medium leading-[1.04] tracking-normal sm:max-w-[760px] md:text-[62px]"
              >
                Select the residences you want prepared.
              </h2>
            </div>

            <p className="max-w-[330px] font-sans text-[16px] leading-[1.75] text-[#5f5a51] sm:max-w-[470px] lg:col-span-4 lg:col-start-9 lg:pt-11">
              A concise set of private opportunities can be arranged into a
              calm viewing route by the VELARÉ private office.
            </p>
          </motion.div>

          <div className="mt-10 grid w-full gap-6 md:grid-cols-2 xl:grid-cols-3">
            {residences.map((residence, index) => (
              <TourResidenceCard
                key={residence.title}
                residence={residence}
                meta={tourResidenceMeta[index % tourResidenceMeta.length]}
                shouldReduceMotion={Boolean(shouldReduceMotion)}
                delay={0.08 + index * 0.04}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="tour-rhythm-title"
        className="px-6 pb-20 md:px-12 md:pb-24 lg:px-10 lg:pb-32"
      >
        <div className="mx-auto grid w-full max-w-[1460px] min-w-0 gap-10 lg:grid-cols-12 lg:gap-6">
          <motion.div {...reveal()} className="min-w-0 lg:col-span-5">
            <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#581c87]">
              Private Office Rhythm
            </p>
            <h2
              id="tour-rhythm-title"
              className="mt-6 max-w-[330px] break-words font-display text-[42px] font-medium leading-[1.04] tracking-normal md:max-w-[620px] md:text-[62px]"
            >
              No open-house energy. No unnecessary attention.
            </h2>
          </motion.div>

          <motion.div
            {...reveal(0.08)}
            className="relative min-h-[500px] w-[342px] max-w-full overflow-hidden rounded-[34px] border border-[#581c87]/12 bg-[#06131d] shadow-[0_24px_80px_rgba(88,74,50,0.13)] md:w-full lg:col-span-7 lg:min-h-[520px]"
          >
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=88"
              alt="Warm contemporary residence interior prepared for a private viewing"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(18,7,32,0.28)_44%,rgba(18,7,32,0.78)_100%)]"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 text-white md:p-7">
              <div className="rounded-[24px] border border-white/18 bg-white/[0.12] p-4 backdrop-blur-2xl md:rounded-[26px] md:p-6">
                <p className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.2em] text-[#c6a87d]">
                  Prepared Viewing
                </p>
                <p className="mt-4 max-w-[620px] break-words font-display text-[30px] font-medium leading-[1.05] md:text-[48px]">
                  The residence is ready before the conversation becomes a visit.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.ol
            {...reveal(0.12, 18)}
            className="grid w-[342px] max-w-full gap-4 md:w-full lg:col-span-12 lg:grid-cols-3"
          >
            {tourSteps.map((step) => (
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
                <p className="mt-4 max-w-[300px] break-words font-sans text-[14px] leading-[1.75] text-[#665f52] md:max-w-[390px]">
                  {step.text}
                </p>
              </li>
            ))}
          </motion.ol>
        </div>
      </section>

      <section className="bg-[#06131d] px-6 py-20 text-white md:px-12 md:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1460px] min-w-0 gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="min-w-0 lg:col-span-7">
            <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d]">
              Private Access
            </p>
            <h2 className="mt-6 max-w-[330px] break-words font-display text-[42px] font-medium leading-[1.04] md:max-w-[780px] md:text-[62px]">
              Begin with a private brief.
            </h2>
          </div>
          <div className="min-w-0 lg:col-span-4 lg:col-start-9 lg:pt-11">
            <p className="max-w-[330px] break-words font-sans text-[16px] leading-[1.75] text-white/66 md:max-w-[470px]">
              A VELARÉ advisor will respond with a considered first step, shaped
              around your market, timing, and privacy requirements.
            </p>
            <a
              href="mailto:private@velare.residences?subject=Private%20tour%20request"
              className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#581c87] px-6 font-sans text-[14px] font-semibold leading-none text-white shadow-[0_16px_38px_rgba(88,28,135,0.22)] transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#6d28a7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a87d]"
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

function TourResidenceCard({
  residence,
  meta,
  shouldReduceMotion,
  delay,
}: {
  residence: Residence;
  meta: (typeof tourResidenceMeta)[number];
  shouldReduceMotion: boolean;
  delay: number;
}) {
  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.72, delay, ease: easeOut }
      }
      className="group flex min-h-full w-[342px] max-w-full flex-col overflow-hidden rounded-[30px] border border-[#581c87]/12 bg-[#fbfaf7]/86 shadow-[0_20px_64px_rgba(88,74,50,0.09)] transition-[border-color,transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-[#581c87]/34 hover:shadow-[0_30px_90px_rgba(88,28,135,0.13)] md:w-full"
    >
      <a
        href={`mailto:private@velare.residences?subject=${encodeURIComponent(
          `Private tour request for ${residence.title}`,
        )}`}
        aria-label={`Request a private tour for ${residence.title}`}
        className="relative block min-h-[392px] overflow-hidden outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#581c87] md:min-h-[460px]"
      >
        <img
          src={residence.image}
          alt={`${residence.title} residence`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
          loading="lazy"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(18,7,32,0.16)_38%,rgba(18,7,32,0.76)_100%)]"
        />
        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/22 bg-white/14 px-3 py-2 font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.16em] text-white backdrop-blur">
            {meta.market}
          </span>
          <span className="rounded-full border border-[#c6a87d]/45 bg-[#581c87]/42 px-3 py-2 font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.16em] text-[#f0d7b0] backdrop-blur">
            {meta.access}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4 text-white md:p-5">
          <div className="rounded-[22px] border border-white/18 bg-white/[0.13] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl md:rounded-[24px] md:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.2em] text-[#c6a87d]">
                {residence.count}
              </p>
              <p className="font-display text-[24px] font-medium leading-none text-white md:text-[26px]">
                {meta.price}
              </p>
            </div>
            <h3 className="mt-3 font-display text-[30px] font-medium leading-[0.98] text-white md:text-[40px]">
              {residence.title}
            </h3>
            <p className="mt-3 font-sans text-[12px] font-medium leading-none text-white/68 md:text-[13px]">
              {residence.location}
            </p>
          </div>
        </div>
      </a>

      <div className="flex flex-1 flex-col justify-between p-4 md:p-5">
        <div className="grid grid-cols-3 gap-2.5 md:gap-3">
          {residence.details.map((detail, index) => (
            <div
              key={detail}
              className="min-w-0 rounded-[14px] border border-[#581c87]/10 bg-white/54 p-2.5 md:rounded-[16px] md:p-3"
            >
              <p className="truncate font-sans text-[8px] font-semibold uppercase leading-none tracking-[0.12em] text-[#581c87]/58 md:text-[9px] md:tracking-[0.14em]">
                {["Suites", "Feature", "Scale"][index]}
              </p>
              <p className="mt-2 whitespace-nowrap font-display text-[14px] font-medium leading-none text-[#151515] md:text-[17px]">
                {compactTourDetail[detail] ?? detail}
              </p>
            </div>
          ))}
        </div>

        <a
          href={`mailto:private@velare.residences?subject=${encodeURIComponent(
            `Private tour request for ${residence.title}`,
          )}`}
          className="mt-5 inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-[#581c87] px-5 font-sans text-[13px] font-semibold leading-none text-white shadow-[0_14px_34px_rgba(88,28,135,0.2)] transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#6d28a7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#581c87]"
        >
          Select for Tour
          <ArrowIcon />
        </a>
      </div>
    </motion.article>
  );
}

function TourRequestForm() {
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "success" | "fallback"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: ContactPayload = {
      source: "Private tour page",
      name: getFormValue(formData, "name"),
      email: getFormValue(formData, "email"),
      market: getFormValue(formData, "market"),
      timing: getFormValue(formData, "timing"),
      inquiry: "Private tour",
      message: getFormValue(formData, "notes"),
    };

    setSubmitState("submitting");
    setStatusMessage("Sending your viewing request...");

    const result = await submitContactRequest(payload);

    if (result.ok) {
      form.reset();
      setSubmitState("success");
      setStatusMessage(result.message);
      return;
    }

    setSubmitState("fallback");
    setStatusMessage(result.message);
    window.location.href = buildMailtoHref(payload);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-[342px] max-w-full overflow-hidden rounded-[30px] border border-white/18 bg-white/[0.105] p-5 shadow-[0_28px_100px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl md:w-full md:p-7"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c6a87d] to-transparent"
      />
      <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d]">
        Request a Viewing
      </p>
      <p className="mt-5 max-w-[340px] font-display text-[32px] font-medium leading-[1.08] text-white">
        Tell us where the private tour begins.
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
            Preferred Market
          </span>
          <div className="relative mt-3">
            <select
              name="market"
              className="h-12 w-full appearance-none rounded-full border border-white/14 bg-[#102332] py-0 pl-5 pr-12 font-sans text-[14px] text-white outline-none transition-colors duration-300 focus:border-[#c6a87d] focus:bg-[#142b3b]"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select a market
              </option>
              {markets.map((market) => (
                <option key={market}>{market}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-5 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-b border-r border-[#c6a87d]" />
          </div>
        </label>

        <label className="block">
          <span className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-white/48">
            Timing
          </span>
          <input
            name="timing"
            type="text"
            className="mt-3 h-12 w-full rounded-full border border-white/14 bg-white/[0.08] px-5 font-sans text-[14px] text-white outline-none transition-colors duration-300 placeholder:text-white/34 focus:border-[#c6a87d] focus:bg-white/[0.12]"
            placeholder="This month / flexible"
          />
        </label>

        <label className="block">
          <span className="font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-white/48">
            Notes
          </span>
          <textarea
            name="notes"
            rows={4}
            required
            className="mt-3 w-full resize-none rounded-[22px] border border-white/14 bg-white/[0.08] px-5 py-4 font-sans text-[14px] leading-[1.6] text-white outline-none transition-colors duration-300 placeholder:text-white/34 focus:border-[#c6a87d] focus:bg-white/[0.12]"
            placeholder="Residence style, markets, privacy needs"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={submitState === "submitting"}
        className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-4 rounded-full bg-white px-8 font-sans text-[15px] font-semibold leading-none tracking-normal text-[#0f2034] shadow-[0_16px_38px_rgba(15,23,42,0.18)] transition-[background-color,transform,opacity] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-white/[0.92] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {submitState === "submitting" ? "Sending Request" : "Submit Request"}
        <ArrowIcon />
      </button>
      {statusMessage ? (
        <p
          aria-live="polite"
          className="mt-4 font-sans text-[12px] font-medium leading-[1.6] text-white/66"
        >
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}
