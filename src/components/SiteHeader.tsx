import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

const navItems = ["Home", "Residences", "Design", "Private Tours", "Agents"] as const;

export type NavItem = (typeof navItems)[number];

const navHrefByItem: Record<NavItem, string> = {
  Home: "/",
  Residences: "/residences",
  Design: "/design",
  "Private Tours": "/private-tour",
  Agents: "/agents",
};

const menuLinks = [
  ...navItems.map((item) => ({
    label: item,
    href: navHrefByItem[item],
  })),
  { label: "Contact", href: "/contact" },
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

export function SiteHeader({
  activeItem,
  className = "",
  ctaHref = "/contact",
}: {
  activeItem?: NavItem;
  className?: string;
  ctaHref?: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const menuId = useId();
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`relative z-20 flex items-center justify-between gap-6 py-8 ${className}`}
      >
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
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={navHrefByItem[item]}
                  className="group relative inline-flex py-2 outline-none transition-colors duration-300 hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  {item}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-2 left-0 h-px bg-white transition-all duration-300 ${
                      item === activeItem ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={ctaHref}
            className="hidden min-h-12 items-center gap-3 rounded-full border border-white/70 px-6 font-sans text-[15px] font-medium leading-none text-white transition-[background-color,transform,border-color] duration-300 ease-in-out hover:-translate-y-0.5 hover:border-white hover:bg-white/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:inline-flex"
          >
            Contact Us
            <ArrowIcon />
          </a>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className="relative z-[70] inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.16] text-white backdrop-blur transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-white/[0.24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-[5px] h-px w-5 bg-current transition-transform duration-300 ${
                  isMenuOpen ? "translate-y-1 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[11px] h-px w-5 bg-current transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[17px] h-px w-5 bg-current transition-transform duration-300 ${
                  isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {createPortal(
        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              id={menuId}
              role="dialog"
              aria-modal="true"
              aria-label="VELARÉ navigation"
              className="fixed inset-0 z-[60] overflow-y-auto bg-[#06131d]/94 px-6 py-6 text-white backdrop-blur-2xl md:px-12 lg:px-10"
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.28 }}
            >
              <div className="velare-grain pointer-events-none absolute inset-0" />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(198,168,125,0.22),transparent_28%),radial-gradient(circle_at_24%_78%,rgba(88,28,135,0.28),transparent_34%)]"
              />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
                className="fixed right-6 top-8 z-[80] inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.16] text-white backdrop-blur transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-white/[0.24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:right-12 lg:right-10"
              >
                <span className="relative h-5 w-5">
                  <span className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 rotate-45 bg-current" />
                  <span className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 -rotate-45 bg-current" />
                </span>
              </button>

            <div className="relative mx-auto flex min-h-full w-full max-w-[1460px] flex-col">
              <div className="flex items-center justify-between border-b border-white/14 py-8 pr-16">
                <a
                  href="/"
                  aria-label="VELARÉ home"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 font-sans text-[24px] font-semibold uppercase leading-none tracking-[0.18em] outline-none focus-visible:rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <LogoMark />
                  <span>VELARÉ</span>
                </a>
                <p className="hidden font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d] sm:block">
                  Private Navigation
                </p>
              </div>

              <div className="grid flex-1 gap-10 py-14 lg:grid-cols-12 lg:gap-6 lg:py-20">
                <nav
                  aria-label="Mobile navigation"
                  className="min-w-0 lg:col-span-7"
                >
                  <ul className="grid gap-3">
                    {menuLinks.map((link, index) => {
                      const isActive = currentPath === link.href;

                      return (
                        <motion.li
                          key={link.href}
                          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: shouldReduceMotion ? 0 : 0.5,
                            delay: shouldReduceMotion ? 0 : index * 0.04,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <a
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`group flex items-center justify-between gap-6 border-b border-white/12 py-5 outline-none transition-colors duration-300 hover:text-[#c6a87d] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                              isActive ? "text-[#c6a87d]" : "text-white"
                            }`}
                          >
                            <span className="font-display text-[42px] font-medium leading-none tracking-normal md:text-[64px]">
                              {link.label}
                            </span>
                            <span className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.16em] text-white/44 transition-colors duration-300 group-hover:text-[#c6a87d]">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </a>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>

                <aside className="min-w-0 lg:col-span-4 lg:col-start-9 lg:pt-4">
                  <div className="rounded-[30px] border border-white/16 bg-white/[0.105] p-6 shadow-[0_28px_100px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-2xl md:p-7">
                    <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.22em] text-[#c6a87d]">
                      Private Office
                    </p>
                    <p className="mt-5 font-display text-[34px] font-medium leading-[1.08]">
                      Begin with a private brief.
                    </p>
                    <p className="mt-5 font-sans text-[14px] leading-[1.75] text-white/64">
                      Share the market, timing, and level of privacy you expect.
                      The VELARÉ team will prepare the next step.
                    </p>
                    <a
                      href="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 font-sans text-[14px] font-semibold leading-none text-[#0f2034] transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-white/[0.92] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      Contact Us
                      <ArrowIcon />
                    </a>
                  </div>
                </aside>
              </div>
            </div>
          </motion.div>
          ) : null}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
}
