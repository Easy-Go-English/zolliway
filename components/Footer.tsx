import Link from "next/link";
import Wordmark from "./Wordmark";
import type { Dict } from "@/lib/i18n";

const social = [
  ["https://www.facebook.com/Zolliway/", "Facebook"],
  ["https://twitter.com/zolliway", "X"],
  ["https://www.linkedin.com/company/zolliway/", "LinkedIn"],
  ["https://www.instagram.com/zolliway/", "Instagram"],
];

export default function Footer({
  lang,
  nav,
}: {
  lang: string;
  nav: Dict["nav"];
}) {
  return (
    <footer className="bg-ink text-dark-muted">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-7 px-5 py-12 md:px-8">
        <div className="flex flex-wrap items-baseline justify-between gap-8">
          <Wordmark light className="text-[26px]" href={`/${lang}`} />
          <nav className="flex flex-wrap gap-6">
            {[
              [`/${lang}`, nav.home],
              [`/${lang}/impressum`, nav.impressum],
              [`/${lang}/protezione-dei-dati`, nav.privacy],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-dark-muted no-underline transition-colors hover:text-parchment"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-8 border-t border-dark-muted/30 pt-6 text-xs">
          <div className="flex items-center gap-2">
            {social.map(([href, label], i) => (
              <span key={href} className="flex items-center gap-2">
                {i > 0 && <span>·</span>}
                <a
                  href={href}
                  className="text-dark-muted no-underline transition-colors hover:text-parchment"
                >
                  {label}
                </a>
              </span>
            ))}
          </div>
          <div className="flex gap-2 font-semibold">
            {[
              ["it", "Italiano"],
              ["de", "Deutsch"],
              ["en", "English"],
            ].map(([l, name], i) => (
              <span key={l} className="flex items-center gap-2">
                {i > 0 && <span>·</span>}
                <Link
                  href={`/${l}`}
                  className={`no-underline ${
                    l === lang
                      ? "text-parchment"
                      : "text-dark-muted transition-colors hover:text-parchment"
                  }`}
                >
                  {name}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
