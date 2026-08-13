import type { Metadata } from "next";
import {
  DoubleRule,
  EmText,
  Kicker,
  PhotoPlaceholder,
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
  return { title: t.services.metaTitle, description: t.services.metaDesc };
}

export default async function Aziende({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getDict(lang);
  const s = t.services;

  return (
    <>
      {/* Introduzione */}
      <section className="mx-auto flex max-w-[1200px] flex-col gap-10 px-5 pb-[88px] pt-14 md:px-8 md:pt-[84px]">
        <Kicker>{s.kicker}</Kicker>
        <h1 className="font-serif text-5xl font-normal leading-none tracking-[-0.02em] text-ink md:text-[74px]">
          {s.h1}
        </h1>
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-[72px]">
          <div className="flex flex-col gap-6">
            <p className="text-pretty font-serif text-2xl leading-[1.45] text-deep">
              <EmText segs={s.lede} />
            </p>
            <p className="text-pretty font-serif text-[21px] italic leading-[1.6] text-bronze">
              {s.list}
            </p>
            <p className="text-[15.5px] leading-[1.75] text-body">{s.values}</p>
          </div>
          <div className="flex flex-col gap-6">
            <PhotoPlaceholder label={s.photo} fig="01" className="h-[240px]" />
            <p className="text-[14.5px] leading-[1.85] text-body">{s.longP}</p>
          </div>
        </div>
      </section>

      {/* ( 01 ) Servizi per le risorse umane */}
      <section className="mx-auto flex max-w-[1200px] flex-col px-5 pb-24 md:px-8">
        <DoubleRule />
        <div className="grid items-baseline gap-4 pb-2 pt-11 md:grid-cols-[180px_1fr] md:gap-10">
          <span className="font-mono text-xs tracking-[0.2em] text-faint">( 01 )</span>
          <h2 className="font-serif text-4xl font-normal tracking-[-0.015em] text-ink md:text-[54px]">
            <EmText segs={s.sectionTitle} />
          </h2>
        </div>
        <div className="mt-9">
          {s.rows.map((r, i) => (
            <div
              key={r.t}
              className={`grid items-start gap-4 border-t border-line py-9 md:grid-cols-[180px_1fr_1fr_1fr_auto] md:gap-10 ${
                i === s.rows.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="font-serif text-[26px] italic leading-[1.2] text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-[27px] font-medium leading-[1.2] text-ink">
                  {r.t}
                </h3>
                {r.sub && (
                  <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-faint">
                    {r.sub}
                  </span>
                )}
              </div>
              <p className="text-sm leading-[1.75] text-body">{r.a}</p>
              <p className="text-sm leading-[1.75] text-muted">{r.b}</p>
              <UnderlineLink
                href={i === s.rows.length - 1 ? `/${lang}/recensioni` : `/${lang}/contatto`}
              >
                {t.common.more}
              </UnderlineLink>
            </div>
          ))}
        </div>
      </section>

      {/* Banner preziosi */}
      <section className="bg-ink text-parchment">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-5 py-20 md:px-8 md:py-[110px]">
          <Kicker dark>Zolliway</Kicker>
          <h2 className="max-w-[22ch] text-balance font-serif text-4xl font-normal leading-[1.08] tracking-[-0.015em] md:text-[56px]">
            <EmText segs={s.banner} dark />
          </h2>
        </div>
      </section>
    </>
  );
}
