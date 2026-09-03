import { Instagram } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

/**
 * INSTAGRAM FEED — SKELETON ONLY (no API calls, no credentials today)
 * ------------------------------------------------------------------
 * Two future integration options:
 *
 * 1) Instagram Basic Display / Graph API
 *    - Create a Meta app, connect the Instagram Business account.
 *    - Store the long-lived access token OUTSIDE this file, e.g. an env var
 *      (VITE_INSTAGRAM_TOKEN is public — prefer a serverless proxy on Vercel:
 *      /api/instagram) and fetch:
 *        GET https://graph.instagram.com/me/media
 *            ?fields=id,caption,media_url,permalink,media_type,thumbnail_url
 *            &access_token=<TOKEN>
 *    - Map the response into the `posts` array shape below.
 *
 * 2) Manual mode — paste post image URLs + permalinks into site.ts and render
 *    them here (zero API, zero maintenance risk).
 *
 * The layout below reserves the exact grid the real posts will occupy, so
 * enabling the feed later causes no layout shift.
 */

type InstagramPost = {
  id: string;
  permalink: string;
  imageUrl: string;
  caption: string;
};

// TODO: replace with API/manual data. Empty = graceful "follow us" fallback.
const posts: InstagramPost[] = [];

export function InstagramFeed() {
  return (
    <section id="instagram" className="scroll-mt-20 bg-secondary/50 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl">
            Follow our everyday moments
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-foreground/75">
            Celebrations, craft days and classroom updates — all on Instagram.
          </p>
        </Reveal>

        {posts.length > 0 ? (
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {posts.map((post) => (
              <li key={post.id}>
                <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                  <img
                    src={post.imageUrl}
                    alt={post.caption}
                    width={600}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full rounded-2xl object-cover"
                  />
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <Reveal delay={0.05}>
            <div className="mt-10 flex flex-col items-center gap-4 rounded-[2rem] bg-card p-10 text-center shadow-sm">
              <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-magenta/12 text-magenta">
                <Instagram className="size-7" aria-hidden="true" />
              </span>
              <p className="font-bold text-foreground">{site.social.instagram.handle}</p>
              <a
                href={site.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-magenta px-6 py-3 font-bold text-magenta-foreground transition-transform hover:scale-105"
              >
                Follow us on Instagram
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
