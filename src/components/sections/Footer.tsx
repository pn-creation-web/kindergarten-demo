import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="bg-accent-stripe h-1.5 w-full" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <img
            src={site.logo}
            alt={site.logoAlt}
            width={1920}
            height={394}
            loading="lazy"
            className="h-12 w-auto rounded-xl bg-white/95 px-3 py-2"
          />
          <p className="mt-4 max-w-sm text-sm opacity-80">{site.shortDescription}</p>
        </div>

        <nav aria-label="Footer">
          <p className="font-bold">Explore</p>
          <ul className="mt-3 grid gap-2 text-sm">
            {site.nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="opacity-85 hover:opacity-100 hover:underline">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-bold">Get in touch</p>
          <ul className="mt-3 grid gap-2 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a
                href={site.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-85 hover:opacity-100 hover:underline"
              >
                {site.contact.address}
              </a>
            </li>
            {site.contact.numbers.map((n) => (
              <li key={n.tel} className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                <a href={n.tel} className="opacity-85 hover:opacity-100">
                  {n.display}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0" aria-hidden="true" />
              <a href={site.contact.emailHref} className="break-all opacity-85 hover:opacity-100">
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="size-4 shrink-0" aria-hidden="true" />
              <a
                href={site.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-85 hover:opacity-100"
              >
                {site.social.instagram.handle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs opacity-75 sm:px-6">
          © {new Date().getFullYear()} {site.name}. {site.footerNote}
        </p>
      </div>
    </footer>
  );
}
