import Link from "next/link";
import type { ReactNode } from "react";
import type { Seg } from "@/lib/i18n";

/* Render a dictionary segment array: strings, {em} italic-bronze, {b} bold */
export function EmText({ segs, dark = false }: { segs: Seg[]; dark?: boolean }) {
  return (
    <>
      {segs.map((s, i) => {
        if (typeof s === "string") return <span key={i}>{s}</span>;
        if ("em" in s)
          return (
            <em key={i} className={`italic ${dark ? "text-gold" : "text-bronze"}`}>
              {s.em}
            </em>
          );
        return (
          <strong key={i} className="font-medium">
            {s.b}
          </strong>
        );
      })}
    </>
  );
}

/* Kicker: short rule + uppercase bronze label */
export function Kicker({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`flex items-center gap-4 text-[11.5px] font-bold uppercase tracking-[0.24em] ${dark ? "text-dark-muted" : "text-bronze"}`}>
      <span className={`w-11 border-t ${dark ? "border-dark-muted" : "border-bronze"}`} />
      {children}
    </p>
  );
}

/* Double hairline rule used as a major section divider */
export function DoubleRule() {
  return (
    <div aria-hidden>
      <div className="border-t border-ink" />
      <div className="mt-[3px] border-t border-ink" />
    </div>
  );
}

/* Editorial section head: monospace "( 01 )" + big serif title */
export function SectionHead({
  n,
  title,
  children,
}: {
  n: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="grid items-baseline gap-4 md:grid-cols-[180px_1fr] md:gap-10">
      <span className="font-mono text-xs tracking-[0.2em] text-faint">( {n} )</span>
      <div className="flex flex-col gap-4">
        <h2 className="font-serif text-4xl font-normal tracking-[-0.015em] text-ink md:text-[54px] md:leading-[1.05]">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}

/* Italic bronze emphasis inside headings */
export function Em({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <em className={`italic ${dark ? "text-gold" : "text-bronze"}`}>{children}</em>;
}

/* Square solid button */
export function ButtonLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-block bg-bronze px-[30px] py-[15px] text-[12.5px] font-bold uppercase tracking-[0.14em] text-cream no-underline transition-opacity hover:opacity-90"
    >
      {children}
    </Link>
  );
}

/* Underline text CTA */
export function UnderlineLink({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-block self-start whitespace-nowrap border-b-2 pb-1 text-xs font-bold uppercase tracking-[0.13em] no-underline transition-colors ${
        dark
          ? "border-gold text-parchment hover:text-gold"
          : "border-bronze text-ink hover:text-bronze"
      }`}
    >
      {children}
    </Link>
  );
}

/* Striped photo placeholder with figure caption */
export function PhotoPlaceholder({
  label,
  fig,
  className = "h-[220px]",
  caption,
}: {
  label: string;
  fig?: string;
  className?: string;
  caption?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={`flex items-center justify-center border border-line ${className}`}
        style={{
          background: "repeating-linear-gradient(45deg,#efe8d6 0 16px,#e7dfc9 16px 32px)",
        }}
      >
        <span className="font-mono text-xs text-faint">[ fotografia: {label} ]</span>
      </div>
      {fig && (
        <div className="flex justify-between font-mono text-[11px] text-faint">
          <span>fig. {fig}</span>
          {caption && <span>{caption}</span>}
        </div>
      )}
    </div>
  );
}

/* Dotted leader row (contact hours) */
export function LeaderRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-2.5 text-[15px]">
      <span className="whitespace-nowrap text-muted">{label}</span>
      <span className="min-w-6 flex-1 border-b border-dotted border-[#b8ab8f]" />
      <strong className="text-right">{value}</strong>
    </div>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 text-bronze ${className}`} aria-label="5 stelle">
      {"★★★★★".split("").map((s, i) => (
        <span key={i}>{s}</span>
      ))}
    </span>
  );
}
