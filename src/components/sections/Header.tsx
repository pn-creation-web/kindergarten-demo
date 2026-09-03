import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled ? "border-border bg-background/95 backdrop-blur" : "border-transparent bg-background"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2" aria-label={`${site.name} home`}>
          <img
            src={site.logo}
            alt={site.logoAlt}
            width={340}
            height={72}
            className="h-10 w-auto rounded-md"
          />
          <span className="hidden leading-none md:block">
            <span className="font-display block text-xl font-extrabold text-primary">
              {site.name}
            </span>
            <span className="hidden text-[11px] font-semibold text-muted-foreground sm:block">
              {site.tagline}
            </span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.contact.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-border px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-secondary sm:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.contact.phoneDisplay}
          </a>
          <a
            href="#booking"
            className="shadow-playful hidden rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-transform hover:scale-105 md:inline-flex"
          >
            Book a Visit
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-primary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background lg:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col p-2">
            {[...site.nav, { label: "Book a Visit", href: "#booking" }].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 font-semibold text-foreground/90 hover:bg-secondary hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
