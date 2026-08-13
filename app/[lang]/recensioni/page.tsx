import type { Metadata } from "next";
import { DoubleRule, EmText, Kicker, Stars, UnderlineLink } from "@/components/ui";
import { reviews } from "@/lib/data";
import { getDict } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getDict(lang);
  return { title: t.reviewsPage.metaTitle, description: t.reviewsPage.metaDesc };
}

export default async function Recensioni({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getDict(lang);
  const r = t.reviewsPage;

  return (
    <>
      {/* Intro */}
      <section className="mx-auto flex max-w-[1200px] flex-col gap-10 px-5 pb-[72px] pt-14 md:px-8 md:pt-[84px]">
        <Kicker>{r.kicker}</Kicker>
        <h1 className="max-w-[16ch] text-balance font-serif text-5xl font-normal leading-none tracking-[-0.02em] text-ink md:text-[74px]">
          <EmText segs={r.h1} />
        </h1>
        <div className="grid items-end gap-8 md:grid-cols-2 md:gap-[72px]">
          <p className="font-serif text-2xl leading-[1.4] text-body">
            <Stars className="mr-3" />
            {r.stats}
          </p>
          <p className="max-w-[52ch] text-[15.5px] leading-[1.75] text-body">
            {r.introText}
          </p>
        </div>
      </section>

      {/* ( 01 ) Le voci */}
      <section className="mx-auto flex max-w-[1200px] flex-col px-5 pb-24 md:px-8">
        <DoubleRule />
        <div className="grid items-baseline gap-4 pb-2 pt-11 md:grid-cols-[180px_1fr] md:gap-10">
          <span className="font-mono text-xs tracking-[0.2em] text-faint">( 01 )</span>
          <h2 className="font-serif text-4xl font-normal tracking-[-0.015em] text-ink md:text-[54px]">
            <EmText segs={r.sectionTitle} />
          </h2>
        </div>
        <div className="mt-9">
          {reviews.map((review, i) => (
            <figure
              key={`${review.name}-${review.date}`}
              className={`m-0 grid gap-6 border-t border-line py-10 md:grid-cols-[180px_1fr] md:gap-10 ${
                i === reviews.length - 1 ? "border-b" : ""
              }`}
            >
              <figcaption className="flex flex-col gap-1.5">
                <span className="font-serif text-[22px] font-medium text-ink">
                  {review.name}
                </span>
                <span className="font-mono text-[11px] text-faint">{review.date}</span>
                <Stars className="text-sm" />
              </figcaption>
              <div className="flex max-w-[74ch] flex-col gap-5">
                <blockquote className="m-0 font-serif text-[22px] italic leading-[1.5] text-deep">
                  “{review.text}”
                </blockquote>
                {review.reply && (
                  <p className="m-0 border-l-2 border-gold pl-5 text-sm leading-[1.8] text-muted">
                    <span className="mr-2 text-[11px] font-bold uppercase tracking-[0.16em] text-bronze">
                      Zolliway
                    </span>
                    {review.reply}
                  </p>
                )}
              </div>
            </figure>
          ))}
        </div>
        <p className="pt-8 font-mono text-[11px] text-faint">{r.note}</p>
      </section>

      {/* CTA — dark band */}
      <section className="bg-ink text-parchment">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:gap-[88px] md:px-8 md:py-24">
          <div className="flex flex-col gap-6">
            <Kicker dark>{r.ctaKicker}</Kicker>
            <h2 className="max-w-[20ch] text-balance font-serif text-4xl font-normal leading-[1.08] tracking-[-0.015em] md:text-[50px]">
              <EmText segs={r.ctaH2} dark />
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <p className="text-[15px] leading-[1.85] text-dark-body">{r.ctaP}</p>
            <UnderlineLink href={`/${lang}/contatto`} dark>
              {r.cta}
            </UnderlineLink>
          </div>
        </div>
      </section>
    </>
  );
}
