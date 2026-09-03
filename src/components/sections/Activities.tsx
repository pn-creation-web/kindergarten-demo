import { Bike, Blocks, BookOpen, Music, Palette, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

const icons: Record<string, LucideIcon> = {
  Blocks,
  Palette,
  Music,
  BookOpen,
  Bike,
  ShieldCheck,
};

const tints: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  orange: "bg-orange/15 text-orange",
  magenta: "bg-magenta/12 text-magenta",
  cyan: "bg-cyan/15 text-cyan",
  lime: "bg-lime/20 text-lime-foreground",
};

export function Activities() {
  return (
    <section id="activities" className="scroll-mt-20 bg-secondary/50 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl">
            Activities that make learning joyful
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-foreground/75">
            Every week is packed with hands-on experiences designed for little hands, big
            imaginations and growing confidence.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.features.map((f, i) => {
            const Icon = icons[f.icon] ?? Blocks;
            return (
              <Reveal
                as="li"
                key={f.title}
                delay={i * 0.04}
                className="rounded-2xl bg-card p-6 shadow-sm transition-transform hover:-translate-y-1"
              >
                <span
                  className={`inline-flex size-12 items-center justify-center rounded-2xl ${tints[f.color] ?? tints['primary']}`}
                >
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-extrabold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-foreground/75">{f.description}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
