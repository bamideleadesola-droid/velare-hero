const footerLinks = [
  { label: "Residences", href: "/residences" },
  { label: "Private Access", href: "/#private-tour" },
  { label: "Agents", href: "/#agents" },
  { label: "Invitation", href: "/#private-invitation" },
] as const;

export function SiteFooter({ className = "" }: { className?: string }) {
  return (
    <footer className={`border-t border-white/14 pt-8 ${className}`}>
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <a
          href="/"
          aria-label="VELARÉ home"
          className="font-sans text-[22px] font-semibold uppercase leading-none tracking-[0.2em] text-white outline-none focus-visible:rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a87d]"
        >
          VELARÉ
        </a>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.16em] text-white/54">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-colors duration-300 hover:text-[#c6a87d] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a87d]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="mailto:private@velare.residences"
          className="font-sans text-[13px] font-medium leading-none text-white/62 transition-colors duration-300 hover:text-[#c6a87d] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a87d]"
        >
          private@velare.residences
        </a>
      </div>
    </footer>
  );
}
