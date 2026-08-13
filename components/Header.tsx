"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Wordmark from "./Wordmark";
import type { Dict } from "@/lib/i18n";
import { langs } from "@/lib/i18n";

export default function Header({
  lang,
  nav,
}: {
  lang: string;
  nav: Dict["nav"];
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const items = [
    { href: `/${lang}`, label: nav.home, exact: true },
    { href: `/${lang}/chi-siamo`, label: nav.about },
    { href: `/${lang}/aziende`, label: nav.services },
    { href: `/${lang}/lavoro`, label: nav.jobs },
    { href: `/${lang}/recensioni`, label: nav.reviews },
    { href: `/${lang}/contatto`, label: nav.contact },
  ];

  // Same path in another locale, for the IT·DE·EN switcher
  const switchTo = (l: string) => {
    const rest = pathname.replace(/^\/(it|de|en)(?=\/|$)/, "");
    return `/${l}${rest}`;
  };

  return (
    <>
      {/* Utility bar */}
      <div className="bg-ink text-dark-muted">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] md:px-8">
          <span>Zolliway · Chiasso</span>
          <div className="flex items-center gap-6">
            <a
              href="tel:+41912246888"
              className="hidden text-dark-muted no-underline hover:text-parchment sm:inline"
            >
              +41 (0)91 224 68 88
            </a>
            <span className="flex gap-2.5">
              {langs.map((l) => (
                <Link
                  key={l}
                  href={switchTo(l)}
                  className={`uppercase no-underline transition-colors ${
                    l === lang
                      ? "text-parchment"
                      : "text-dark-muted hover:text-parchment"
                  }`}
                >
                  {l}
                </Link>
              ))}
            </span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 border-b border-ink bg-cream/95 backdrop-blur">
        <div className="mx-auto flex h-[78px] max-w-[1200px] items-center justify-between gap-8 px-5 md:px-8">
          <Wordmark className="text-[30px]" href={`/${lang}`} />

          <nav className="hidden items-center gap-[22px] lg:flex">
            {items.map((item) => {
              const active = item.exact
                ? pathname === item.href
                : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap text-xs uppercase tracking-[0.14em] no-underline transition-colors ${
                    active
                      ? "font-bold text-ink"
                      : "font-semibold text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>

        {open && (
          <nav className="border-t border-line bg-cream px-5 pb-6 pt-2 lg:hidden">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line py-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted no-underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
