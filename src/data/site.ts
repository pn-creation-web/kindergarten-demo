/**
 * SINGLE SOURCE OF TRUTH
 * ----------------------
 * All business data, navigation, contact details, URLs, SEO copy, gallery data
 * and image imports live here. Never duplicate this information elsewhere.
 */

import heroImg from "@/assets/hero.jpg";
import classroomImg from "@/assets/classroom.jpg";
import artImg from "@/assets/art.jpg";
import playgroundImg from "@/assets/playground.jpg";
import storytimeImg from "@/assets/storytime.jpg";
import musicImg from "@/assets/music.jpg";
import blocksImg from "@/assets/blocks.jpg";

export type NavItem = { label: string; href: string };
export type GalleryItem = { src: string; alt: string; caption: string };
export type Feature = { title: string; description: string; icon: string; color: string };

const phone = "7977119944";
const whatsapp = "9930856060";

export const site = {
  name: "Kindergarten",
  tagline: "Preschool, Daycare & Activities Centre",
  shortDescription:
    "A joyful, safe and nurturing preschool, daycare and activities centre in Kandivali, Mumbai for children aged 1.5 to 6 years.",

  /** SEO ------------------------------------------------------------------ */
  seo: {
    title: "Kindergarten Kandivali | Preschool, Daycare & Activities Centre",
    description:
      "Kindergarten Kandivali is a playful, safe preschool, daycare and activities centre in Mumbai for ages 1.5-6. Book a visit or send an admission enquiry today.",
    // TODO: replace with the final production domain once deployed (e.g. https://kindergartenkandivali.com)
    canonical: "/",
    ogType: "website",
    locale: "en_IN",
    keywords:
      "preschool Kandivali, daycare Mumbai, playgroup Kandivali, nursery school, activities centre for kids",
  },

  /** Contact -------------------------------------------------------------- */
  contact: {
    phone,
    phoneDisplay: "+91 79771 19944",
    phoneHref: `tel:+91${phone}`,
    whatsapp,
    whatsappDisplay: "+91 99308 56060",
    whatsappHref: `https://wa.me/91${whatsapp}`,
    email: "kindergartenkandivali@gmail.com",
    emailHref: "mailto:kindergartenkandivali@gmail.com",
    address:
      "B Wing 1st floor, Crystal lawns CHS, opp. Gaurav sweets, Mumbai, Maharashtra 400101",
    addressLines: [
      "B Wing, 1st Floor, Crystal Lawns CHS,",
      "Opp. Gaurav Sweets, Kandivali,",
      "Mumbai, Maharashtra 400101",
    ],
    mapsUrl: "https://maps.app.goo.gl/rMNY8jdQQDNvHewQ7",
    hours: [
      { days: "Monday – Friday", time: "8:00 AM – 6:30 PM" },
      { days: "Saturday", time: "9:00 AM – 1:00 PM" },
      { days: "Sunday", time: "Closed" },
    ],
  },

  /** Social ---------------------------------------------------------------- */
  social: {
    // TODO: replace with the real Instagram profile URL / handle when available.
    instagram: {
      handle: "@kindergartenkandivali",
      url: "https://instagram.com/",
    },
  },

  /** Navigation ------------------------------------------------------------ */
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Activities", href: "#activities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Instagram", href: "#instagram" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],

  /** Hero ------------------------------------------------------------------ */
  hero: {
    image: heroImg,
    imageAlt:
      "Happy preschool children laughing and running with colourful balloons in a bright classroom",
    eyebrow: "Ages 1.5 – 6 years • Kandivali, Mumbai",
    heading: "Where little minds learn through big play",
    subheading:
      "A warm, safe and colourful space for preschool, daycare and after-school activities — built around curiosity, kindness and confident first steps.",
    stats: [
      { value: "10+", label: "Years of care" },
      { value: "1:8", label: "Teacher ratio" },
      { value: "500+", label: "Happy families" },
    ],
  },

  /** About ----------------------------------------------------------------- */
  about: {
    heading: "A second home for your child",
    image: storytimeImg,
    imageAlt:
      "Kindergarten teacher reading a picture book to a circle of attentive young children on a colourful rug",
    paragraphs: [
      "At Kindergarten Kandivali, we believe children learn best when they feel safe, seen and celebrated. Our play-based curriculum blends structured learning with free exploration so every child grows at their own happy pace.",
      "Small groups, trained and caring teachers, CCTV-monitored premises and a bright, child-proofed centre mean parents can relax while their little ones discover, create and make friends.",
    ],
    highlights: [
      "Play-based, age-appropriate curriculum",
      "Trained, caring and background-verified staff",
      "Hygienic, child-safe and CCTV-monitored premises",
      "Regular parent updates and open-house days",
    ],
    programs: [
      { name: "Playgroup", age: "1.5 – 2.5 yrs", note: "Gentle first steps away from home" },
      { name: "Nursery", age: "2.5 – 3.5 yrs", note: "Language, motor skills & routines" },
      { name: "Jr. & Sr. KG", age: "3.5 – 6 yrs", note: "School readiness and early literacy" },
      { name: "Daycare", age: "1.5 – 10 yrs", note: "Safe full-day and after-school care" },
    ],
  },

  /** Activities / Features -------------------------------------------------- */
  features: [
    {
      title: "Play-Based Learning",
      description:
        "Hands-on activities that build language, numeracy and problem solving without ever feeling like a lesson.",
      icon: "Blocks",
      color: "primary",
    },
    {
      title: "Art & Craft",
      description: "Painting, clay and messy play that grow creativity and fine motor control.",
      icon: "Palette",
      color: "orange",
    },
    {
      title: "Music & Movement",
      description: "Rhymes, dance and rhythm sessions that build confidence and coordination.",
      icon: "Music",
      color: "magenta",
    },
    {
      title: "Story Time & Phonics",
      description: "Daily stories and phonics games that spark a lifelong love of reading.",
      icon: "BookOpen",
      color: "cyan",
    },
    {
      title: "Outdoor & Sports Play",
      description: "Safe active play that develops strength, balance and healthy habits.",
      icon: "Bike",
      color: "lime",
    },
    {
      title: "Safe Daycare",
      description: "Nutritious meals, nap time and warm supervision through the full day.",
      icon: "ShieldCheck",
      color: "primary",
    },
  ] satisfies Feature[],

  /** Gallery ---------------------------------------------------------------- */
  gallery: [
    {
      src: classroomImg,
      alt: "Bright kindergarten classroom with colourful child-sized tables, chairs and wall art",
      caption: "Our classrooms",
    },
    {
      src: artImg,
      alt: "Four preschool children laughing while painting with bright colours at a wooden table",
      caption: "Art & craft",
    },
    {
      src: playgroundImg,
      alt: "Children playing on a colourful outdoor playground slide and climbing frame on a sunny day",
      caption: "Outdoor play",
    },
    {
      src: musicImg,
      alt: "Young children dancing with tambourines during a music and movement session",
      caption: "Music & movement",
    },
    {
      src: blocksImg,
      alt: "Two toddlers building a tower with colourful wooden blocks on a daycare floor",
      caption: "Building & logic",
    },
    {
      src: storytimeImg,
      alt: "Teacher reading a storybook to a small group of children seated on a colourful rug",
      caption: "Story time",
    },
  ] satisfies GalleryItem[],

  /** Booking / enquiry ------------------------------------------------------ */
  booking: {
    heading: "Book a visit or send an admission enquiry",
    subheading:
      "Tell us a little about your child and we'll reply on WhatsApp with available visit slots.",
    interests: ["Playgroup", "Nursery", "Jr. KG", "Sr. KG", "Daycare", "Activities Centre"],
  },

  footerNote: "Preschool • Daycare • Activities Centre — Kandivali, Mumbai",
} as const;

/** Build a pre-filled WhatsApp deep link (no backend required). */
export function buildWhatsAppLink(message: string): string {
  return `${site.contact.whatsappHref}?text=${encodeURIComponent(message)}`;
}
