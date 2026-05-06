const navItems = ["Home", "Residences", "Design", "Private Tours", "Agents"] as const;

type NavItem = (typeof navItems)[number];

const navHrefByItem: Record<NavItem, string> = {
  Home: "/",
  Residences: "/residences",
  Design: "/#residences",
  "Private Tours": "/private-tour",
  Agents: "/agents",
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
  ctaHref = "/#private-invitation",
}: {
  activeItem?: NavItem;
  className?: string;
  ctaHref?: string;
}) {
  return (
    <header className={`relative z-20 flex items-center justify-between gap-6 py-8 ${className}`}>
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
  );
}
