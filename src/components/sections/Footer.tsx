import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="bg-accent-stripe h-1.5 w-full" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-extrabold">{site.name}</p>
          <p className="mt-1 text-sm opacity-85">{site.tagline}</p>
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
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              <a href={site.contact.phoneHref} className="opacity-85 hover:opacity-100">
                {site.contact.phoneDisplay}
              </a>
            </li>
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
