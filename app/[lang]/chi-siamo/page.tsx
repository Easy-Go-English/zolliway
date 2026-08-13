import type { Metadata } from "next";
import {
  DoubleRule,
  EmText,
  Kicker,
  SectionHead,
  UnderlineLink,
} from "@/components/ui";
import { getDict } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getDict(lang);
  return { title: t.about.metaTitle, description: t.about.metaDesc };
}

export default async function ChiSiamo({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getDict(lang);
  const a = t.about;

  return (
    <>
      {/* Intro */}
      <section className="mx-auto flex max-w-[1200px] flex-col gap-10 px-5 pb-[88px] pt-14 md:px-8 md:pt-[84px]">
        <Kicker>{a.kicker}</Kicker>
        <h1 className="max-w-[16ch] text-balance font-serif text-5xl font-normal leading-none tracking-[-0.02em] text-ink md:text-[74px]">
          <EmText segs={a.h1} />
        </h1>
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-[72px]">
          <p className="max-w-[34ch] font-serif text-2xl leading-[1.45] text-deep">
            {a.lede}
          </p>
          <div className="flex flex-col gap-6">
            <p className="text-[15.5px] leading-[1.85] text-body">{a.p1}</p>
            <p className="text-[15.5px] leading-[1.85] text-body">{a.p2}</p>
          </div>
        </div>
      </section>

      {/* Metodo */}
      <section className="mx-auto max-w-[1200px] px-5 pb-24 md:px-8">
        <DoubleRule />
        <div className="grid gap-10 pt-11 md:grid-cols-3 md:gap-0">
          {a.method.map((m, i) => (
            <div
              key={m.t}
              className={`flex flex-col gap-3.5 ${
                i === 0
                  ? "md:pr-10"
                  : i === 1
                    ? "md:border-l md:border-line md:px-10"
                    : "md:border-l md:border-line md:pl-10"
              }`}
            >
              <span className="font-serif text-[19px] italic text-bronze">
                {["I.", "II.", "III."][i]}
              </span>
              <h3 className="font-serif text-[25px] font-medium text-ink">{m.t}</h3>
              <p className="text-sm leading-[1.75] text-muted">{m.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ( 01 ) Riconoscimenti — dark band */}
      <section className="bg-ink text-parchment">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-13 px-5 py-16 md:px-8 md:py-24">
          <div className="grid items-baseline gap-4 md:grid-cols-[180px_1fr] md:gap-10">
            <span className="font-mono text-xs tracking-[0.2em] text-dark-muted">( 01 )</span>
            <h2 className="max-w-[20ch] text-balance font-serif text-4xl font-normal leading-[1.08] tracking-[-0.015em] md:text-[54px]">
              <EmText segs={a.awardsTitle} dark />
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-[180px_1fr]">
            <span className="hidden md:block" />
            <div className="grid gap-10 md:grid-cols-3 md:gap-0">
              {a.awards.map((award, i) => (
                <div
                  key={award.title}
                  className={`flex flex-col gap-3 ${
                    i === 0
                      ? "md:pr-10"
                      : i === 1
                        ? "md:border-l md:border-dark-muted/30 md:px-10"
                        : "md:border-l md:border-dark-muted/30 md:pl-10"
                  }`}
                >
                  <span className="font-serif text-[44px] leading-none italic text-gold">
                    {award.year}
                  </span>
                  <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-dark-muted">
                    {award.by}
                  </p>
                  <p className="text-[15px] leading-[1.7] text-dark-body">
                    {award.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ( 02 ) Referenze */}
      <section className="mx-auto flex max-w-[1200px] flex-col gap-13 px-5 py-16 md:px-8 md:py-24">
        <SectionHead n="02" title={<EmText segs={a.refTitle} />}>
          <p className="max-w-[52ch] text-pretty font-serif text-[21px] leading-[1.5] text-body">
            {a.refLede}
          </p>
        </SectionHead>
        <div className="grid gap-10 md:grid-cols-[180px_1fr]">
          <span className="hidden md:block" />
          <div>
            <div className="grid border-t border-line sm:grid-cols-2 md:grid-cols-3">
              {a.sectors.map((sector) => (
                <div
                  key={sector}
                  className="border-b border-line px-1 py-6 text-sm font-medium text-body"
                >
                  {sector}
                </div>
              ))}
            </div>
            <div className="mt-10">
              <UnderlineLink href={`/${lang}/aziende`}>{a.refCta}</UnderlineLink>
            </div>
          </div>
        </div>
      </section>

      {/* Impegno sociale rimando */}
      <section className="border-y border-line bg-cream-deep">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 py-16 md:px-8 md:py-20">
          <Kicker>{a.socialKicker}</Kicker>
          <div className="grid items-start gap-10 md:grid-cols-[1fr_auto] md:gap-[72px]">
            <p className="max-w-[30ch] text-balance font-serif text-3xl font-normal leading-[1.2] text-ink md:text-[40px]">
              <EmText segs={a.socialTitle} />
            </p>
            <div className="flex max-w-[52ch] flex-col gap-6">
              <p className="text-[15px] leading-[1.85] text-body">{a.socialP}</p>
              <UnderlineLink href={`/${lang}#sociale`}>{a.socialCta}</UnderlineLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
