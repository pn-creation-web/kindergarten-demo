import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import { buildWhatsAppLink, site } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-secondary/50">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full bg-background px-3 py-1.5 text-xs font-bold text-primary shadow-sm sm:text-sm"
          >
            <Sparkles className="size-4 text-orange" aria-hidden="true" />
            {site.hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-4 text-4xl leading-tight font-extrabold text-primary sm:text-5xl lg:text-6xl"
          >
            {site.hero.heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-4 max-w-xl text-base text-foreground/80 sm:text-lg"
          >
            {site.hero.subheading}
          </motion.p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#booking"
              className="shadow-playful rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              Book a Visit
            </a>
            <a
              href={buildWhatsAppLink(
                `Hi ${site.name}! I'd like to know more about admissions and daycare.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-bold text-lime-foreground transition-transform hover:scale-105"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>

          <dl className="mt-9 grid max-w-md grid-cols-3 gap-4">
            {site.hero.stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-background p-3 text-center shadow-sm">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="font-display block text-2xl font-extrabold text-magenta">
                    {s.value}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="bg-accent-stripe absolute -inset-2 rounded-[2rem] opacity-20 blur-xl" aria-hidden="true" />
          <img
            src={site.hero.image}
            alt={site.hero.imageAlt}
            width={1600}
            height={1000}
            fetchPriority="high"
            decoding="async"
            className="relative aspect-[8/5] w-full rounded-[2rem] object-cover shadow-playful"
          />
        </div>
      </div>
    </section>
  );
}
