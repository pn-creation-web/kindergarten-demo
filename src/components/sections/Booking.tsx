import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { buildWhatsAppLink, site } from "@/data/site";

/**
 * Admission enquiry / visit booking.
 * No backend: the form composes a pre-filled WhatsApp message and opens wa.me.
 */
export function Booking() {
  const [form, setForm] = useState({
    parent: "",
    child: "",
    age: "",
    interest: site.booking.interests[0],
    date: "",
    message: "",
  });

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = [
      `Hello ${site.name}! I'd like to book a visit / enquire about admission.`,
      ``,
      `Parent: ${form.parent}`,
      `Child: ${form.child}${form.age ? ` (${form.age} yrs)` : ""}`,
      `Interested in: ${form.interest}`,
      form.date ? `Preferred visit date: ${form.date}` : "",
      form.message ? `Message: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(buildWhatsAppLink(text), "_blank", "noopener,noreferrer");
  }

  const field =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary";

  return (
    <section id="booking" className="scroll-mt-20 bg-secondary/50 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl">
            {site.booking.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-foreground/75">
            {site.booking.subheading}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <form
            onSubmit={handleSubmit}
            className="mt-8 grid gap-4 rounded-[2rem] bg-card p-6 shadow-playful sm:p-8 md:grid-cols-2"
          >
            <div>
              <label htmlFor="parent" className="mb-1.5 block text-sm font-bold">
                Parent's name
              </label>
              <input
                id="parent"
                name="parent"
                required
                autoComplete="name"
                value={form.parent}
                onChange={(e) => set("parent")(e.target.value)}
                className={field}
              />
            </div>
            <div>
              <label htmlFor="child" className="mb-1.5 block text-sm font-bold">
                Child's name
              </label>
              <input
                id="child"
                name="child"
                required
                value={form.child}
                onChange={(e) => set("child")(e.target.value)}
                className={field}
              />
            </div>
            <div>
              <label htmlFor="age" className="mb-1.5 block text-sm font-bold">
                Child's age (years)
              </label>
              <input
                id="age"
                name="age"
                type="number"
                min={1}
                max={12}
                value={form.age}
                onChange={(e) => set("age")(e.target.value)}
                className={field}
              />
            </div>
            <div>
              <label htmlFor="interest" className="mb-1.5 block text-sm font-bold">
                Interested in
              </label>
              <select
                id="interest"
                name="interest"
                value={form.interest}
                onChange={(e) => set("interest")(e.target.value)}
                className={field}
              >
                {site.booking.interests.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="date" className="mb-1.5 block text-sm font-bold">
                Preferred visit date (optional)
              </label>
              <input
                id="date"
                name="date"
                type="date"
                value={form.date}
                onChange={(e) => set("date")(e.target.value)}
                className={field}
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="mb-1.5 block text-sm font-bold">
                Anything we should know? (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={form.message}
                onChange={(e) => set("message")(e.target.value)}
                className={field}
              />
            </div>
            <button
              type="submit"
              className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Send enquiry on WhatsApp
            </button>
            <p className="md:col-span-2 text-center text-xs text-muted-foreground">
              Your details open in WhatsApp as a ready-to-send message. Nothing is stored on this
              website.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
