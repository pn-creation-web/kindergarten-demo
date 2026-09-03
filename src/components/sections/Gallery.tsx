import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 lg:py-24">
      <Reveal>
        <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl">
          A peek into our days
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-foreground/75">
          Bright classrooms, busy hands and lots of laughter.
        </p>
      </Reveal>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {site.gallery.map((item, i) => (
          <Reveal as="li" key={item.caption} delay={(i % 3) * 0.05}>
            <figure className="group overflow-hidden rounded-2xl bg-card shadow-sm">
              <img
                src={item.src}
                alt={item.alt}
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="px-4 py-3 text-sm font-bold text-primary">
                {item.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
