import Link from "next/link";

/* Logo 1a "Wordmark corsivo": upright "Zolli" + italic bronze "way" */
export default function Wordmark({
  light = false,
  className = "text-3xl",
  href = "/",
}: {
  light?: boolean;
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={`font-serif font-medium tracking-[-0.01em] no-underline ${
        light ? "text-parchment" : "text-ink"
      } ${className}`}
    >
      Zolli
      <em className={light ? "italic text-gold" : "italic text-bronze"}>way</em>
    </Link>
  );
}

export function Monogram({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`font-serif font-medium ${light ? "text-parchment" : "text-ink"}`}
    >
      Z<em className={light ? "italic text-gold" : "italic text-bronze"}>w</em>
    </span>
  );
}
