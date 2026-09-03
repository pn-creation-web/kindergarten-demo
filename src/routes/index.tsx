import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Activities } from "@/components/sections/Activities";
import { Gallery } from "@/components/sections/Gallery";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { Booking } from "@/components/sections/Booking";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { AdSlot } from "@/components/AdSlot";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: site.seo.title },
      { name: "description", content: site.seo.description },
      { name: "keywords", content: site.seo.keywords },
      { property: "og:title", content: site.seo.title },
      { property: "og:description", content: site.seo.description },
      { property: "og:type", content: site.seo.ogType },
      { property: "og:locale", content: site.seo.locale },
      { property: "og:site_name", content: site.name },
      { property: "og:url", content: site.seo.canonical },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: site.seo.title },
      { name: "twitter:description", content: site.seo.description },
    ],
    // Canonical URL placeholder — update site.seo.canonical with the production domain.
    links: [{ rel: "canonical", href: site.seo.canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Preschool",
          name: site.name,
          description: site.seo.description,
          telephone: `+91${site.contact.phone}`,
          email: site.contact.email,
          hasMap: site.contact.mapsUrl,
          address: {
            "@type": "PostalAddress",
            streetAddress: "B Wing 1st floor, Crystal Lawns CHS, opp. Gaurav Sweets",
            addressLocality: "Mumbai",
            addressRegion: "Maharashtra",
            postalCode: "400101",
            addressCountry: "IN",
          },
          openingHours: ["Mo-Fr 08:00-18:30", "Sa 09:00-13:00"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-full bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60]"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        {/* Google Ads placeholder — see src/components/AdSlot.tsx */}
        <AdSlot slotId="home-top" className="py-8" />
        <About />
        <Activities />
        <AdSlot slotId="mid-content" className="py-8" />
        <Gallery />
        <InstagramFeed />
        <Booking />
        <Contact />
        <AdSlot slotId="pre-footer" className="pb-12" />
      </main>
      <Footer />
    </>
  );
}
