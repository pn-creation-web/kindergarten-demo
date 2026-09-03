import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { buildWhatsAppLink, site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 lg:py-24">
      <Reveal>
        <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl">
          Come say hello
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-foreground/75">
          We'd love to show you around our centre in Kandivali, Mumbai.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Reveal className="grid gap-4">
          <address className="grid gap-4 not-italic">
            <a
              href={site.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-2xl border border-border p-5 transition-colors hover:bg-secondary"
            >
              <MapPin className="mt-0.5 size-5 shrink-0 text-orange" aria-hidden="true" />
              <span>
                <span className="block font-bold">Visit us</span>
                <span className="text-sm text-foreground/75">
                  {site.contact.addressLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </span>
                <span className="mt-1 block text-sm font-bold text-primary">
                  Open in Google Maps
                </span>
              </span>
            </a>

            <div className="grid gap-4 sm:grid-cols-2">
              {site.contact.numbers.map((n) => (
                <div
                  key={n.tel}
                  className="flex items-start gap-3 rounded-2xl border border-border p-5"
                >
                  <Phone className="mt-0.5 size-5 shrink-0 text-cyan" aria-hidden="true" />
                  <span>
                    <span className="block font-bold">{n.display}</span>
                    <span className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm font-semibold">
                      <a href={n.tel} className="text-primary hover:underline">
                        Call
                      </a>
                      <a
                        href={n.wa}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-lime hover:underline"
                      >
                        <MessageCircle className="size-4" aria-hidden="true" />
                        WhatsApp
                      </a>
                    </span>
                  </span>
                </div>
              ))}
              <a
                href={site.contact.emailHref}
                className="flex items-start gap-3 rounded-2xl border border-border p-5 transition-colors hover:bg-secondary sm:col-span-2"
              >
                <Mail className="mt-0.5 size-5 shrink-0 text-magenta" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block font-bold">Email</span>
                  <span className="block truncate text-sm text-foreground/75">
                    {site.contact.email}
                  </span>
                </span>
              </a>
            </div>
          </address>

          <div className="rounded-2xl border border-border p-5">
            <p className="flex items-center gap-2 font-bold">
              <Clock className="size-5 text-primary" aria-hidden="true" />
              Centre hours
            </p>
            <ul className="mt-3 grid gap-1 text-sm text-foreground/75">
              {site.contact.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4">
                  <span>{h.days}</span>
                  <span className="font-semibold">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <iframe
            title={`Map showing ${site.name} in Kandivali, Mumbai`}
            src="https://www.google.com/maps?q=Crystal%20Lawns%20CHS%20Kandivali%20Mumbai%20400101&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[360px] w-full rounded-[2rem] border border-border"
          />
        </Reveal>
      </div>
    </section>
  );
}
