# Kindergarten Demo

Build a modern, playful and colorful Kindergarten / Preschool website as a SINGLE-PAGE React + TypeScript + Tailwind CSS + Framer Motion project.

IMPORTANT:
- Match the uploaded Kindergarten logo's visual theme: deep purple/blue as primary, with orange, magenta, cyan and lime-green accents.
- Friendly, joyful, child-focused but still professional for parents.
- Do NOT use Lovable Cloud, database, backend, authentication or any Lovable-specific service.
- No Lovable dependency/files/folders/favicon/packages.
- Keep the project portable and deployable to GitHub + Vercel.
- Use only necessary dependencies.

ARCHITECTURE:
Create ONE central `src/data/site.ts` as the single source of truth for ALL business data, navigation, contact details, URLs, SEO text, gallery data and image imports. Import this data everywhere; never duplicate business information.

Business:
Phone: 7977119944
WhatsApp: 9930856060
Email: kindergartenkandivali@gmail.com
Address: B Wing 1st floor, Crystal lawns CHS, opp. Gaurav sweets, Mumbai, Maharashtra 400101.
Maps: https://maps.app.goo.gl/rMNY8jdQQDNvHewQ7
Instagram: add placeholder in site.ts for later.

SECTIONS:
Home, About, Activities/Features, Gallery, Instagram Feed, Contact, Footer.
Strong "Book a Visit / Admission Enquiry" CTA.
Booking form → generate pre-filled WhatsApp message; no backend.
Gallery: use tasteful dummy AI-generated school/kindergarten images with proper alt text.

INSTAGRAM:
Create a commented skeleton component for future Instagram feed API/manual integration on Home.
Clearly comment where Instagram credentials/API integration will be added later.

GOOGLE ADS:
Add clearly commented ad-placement placeholders in suitable sections without implementing Ads yet.

DESIGN:
Responsive for mobile, tablet, iPad, laptop, Mac and desktop.
Smooth Framer Motion scroll reveals, but keep animations lightweight.
Accessible semantic HTML, keyboard friendly, good contrast, optimized images.

SEO/LIGHTHOUSE:
Strong technical SEO, semantic headings, metadata, canonical URL placeholder, Open Graph metadata, descriptive image alt text, robots/sitemap-ready structure, fast loading, minimal JS, no layout shift.
Target Lighthouse ~100 for Performance, Accessibility and SEO where realistically achievable.

Do not overbuild. Keep code clean, reusable and production-ready.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://kindergarten-demo.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d7e4b44d-6b16-4cc3-9351-951c4ed85aea).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
