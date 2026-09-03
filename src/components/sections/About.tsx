import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <img
            src={site.about.image}
            alt={site.about.imageAlt}
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            className="aspect-[3/2] w-full rounded-[2rem] object-cover shadow-playful"
          />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            {site.about.heading}
          </h2>
          {site.about.paragraphs.map((p) => (
            <p key={p} className="mt-4 text-foreground/80">
              {p}
            </p>
          ))}
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {site.about.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm font-semibold">
                <Check className="mt-0.5 size-5 shrink-0 text-lime" aria-hidden="true" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <h3 className="mt-16 text-center text-2xl font-extrabold text-primary">Our programmes</h3>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {site.about.programs.map((p, i) => (
          <Reveal
            as="li"
            key={p.name}
            delay={i * 0.05}
            className="rounded-2xl border border-border bg-card p-5 transition-transform hover:-translate-y-1"
          >
            <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-bold text-primary">
              {p.age}
            </span>
            <h4 className="mt-3 text-lg font-extrabold text-foreground">{p.name}</h4>
            <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
