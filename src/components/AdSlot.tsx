/**
 * GOOGLE ADS PLACEHOLDER
 * ----------------------
 * Reserved, fixed-height ad container so inserting ads later causes NO layout
 * shift (CLS-safe). Nothing is loaded today.
 *
 * To enable Google AdSense later:
 * 1. Add the AdSense script tag to the document head.
 * 2. Replace the inner placeholder below with:
 *      <ins className="adsbygoogle" style={{ display: "block" }}
 *           data-ad-client="ca-pub-XXXXXXXXXXXX"
 *           data-ad-slot={slotId}
 *           data-ad-format="auto"
 *           data-full-width-responsive="true" />
 *    and push to window.adsbygoogle inside a useEffect.
 */
export function AdSlot({ slotId, className = "" }: { slotId: string; className?: string }) {
  return (
    <div
      className={`mx-auto w-full max-w-5xl px-4 ${className}`}
      data-ad-slot-placeholder={slotId}
      aria-hidden="true"
    >
      <div className="flex h-[90px] items-center justify-center rounded-xl border border-dashed border-border/70 bg-muted/40 text-xs tracking-widest text-muted-foreground uppercase">
        Ad space
      </div>
    </div>
  );
}
