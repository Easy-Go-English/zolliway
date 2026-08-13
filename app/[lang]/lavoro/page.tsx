import type { Metadata } from "next";
import Link from "next/link";
import { DoubleRule, EmText, Kicker, UnderlineLink } from "@/components/ui";
import { jobs } from "@/lib/data";
import { getDict } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getDict(lang);
  return { title: t.jobsPage.metaTitle, description: t.jobsPage.metaDesc };
}

export default async function Lavoro({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getDict(lang);
  const j = t.jobsPage;

  return (
    <>
      {/* Intro */}
      <section className="mx-auto flex max-w-[1200px] flex-col gap-10 px-5 pb-[72px] pt-14 md:px-8 md:pt-[84px]">
        <Kicker>{j.kicker}</Kicker>
        <h1 className="max-w-[15ch] text-balance font-serif text-5xl font-normal leading-none tracking-[-0.02em] text-ink md:text-[74px]">
          <EmText segs={j.h1} />
        </h1>
        <div className="grid items-end gap-8 md:grid-cols-2 md:gap-[72px]">
          <p className="max-w-[34ch] font-serif text-2xl leading-[1.4] text-body">
            {j.serifLede}
          </p>
          <p className="max-w-[52ch] text-[15.5px] leading-[1.75] text-body">
            {j.introText}
          </p>
        </div>
      </section>

      {/* ( 01 ) Posizioni aperte */}
      <section className="mx-auto flex max-w-[1200px] flex-col px-5 pb-24 md:px-8">
        <DoubleRule />
        <div className="grid items-baseline gap-4 pb-2 pt-11 md:grid-cols-[180px_1fr] md:gap-10">
          <span className="font-mono text-xs tracking-[0.2em] text-faint">( 01 )</span>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-serif text-4xl font-normal tracking-[-0.015em] text-ink md:text-[54px]">
              <EmText segs={j.sectionTitle} />
            </h2>
            <span className="font-mono text-xs text-faint">
              {jobs.length} {j.activeLabel}
            </span>
          </div>
        </div>
        <div className="mt-9">
          {jobs.map((job, i) => (
            <Link
              key={job.slug}
              href={`/${lang}/lavoro/${job.slug}`}
              className={`group grid items-start gap-3 border-t border-line py-8 no-underline md:grid-cols-[180px_1.2fr_1fr_auto] md:gap-10 ${
                i === jobs.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="font-mono text-xs leading-[1.6] text-faint">
                Job ID {job.id}
                <br />
                {job.category}
              </span>
              <h3 className="font-serif text-[27px] font-medium leading-[1.2] text-ink transition-colors group-hover:text-bronze">
                {job.title}
              </h3>
              <div className="flex flex-col gap-1 text-sm leading-[1.7]">
                <span className="text-body">
                  {job.location} – {job.region}
                </span>
                <span className="text-muted">
                  {job.contract} · {job.workload}
                </span>
              </div>
              <span className="whitespace-nowrap border-b-2 border-bronze pb-1 text-xs font-bold uppercase tracking-[0.13em] text-ink transition-colors group-hover:text-bronze">
                {j.details}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Talent pool — dark band */}
      <section id="candidatura" className="scroll-mt-24 bg-ink text-parchment">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:gap-[88px] md:px-8 md:py-24">
          <div className="flex flex-col gap-6">
            <Kicker dark>{j.talentKicker}</Kicker>
            <h2 className="text-balance font-serif text-4xl font-normal leading-[1.06] tracking-[-0.015em] md:text-[50px]">
              <EmText segs={j.talentH2} dark />
            </h2>
            <p className="font-serif text-3xl italic text-parchment">{j.precious}</p>
          </div>
          <div className="flex flex-col justify-center gap-6">
            {j.steps.map((step, i) => (
              <div key={i} className="flex gap-5">
                <span className="font-serif text-[26px] italic leading-[1.2] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-[1.85] text-dark-body">{step}</p>
              </div>
            ))}
            <UnderlineLink href={`/${lang}/contatto`} dark>
              {j.talentCta}
            </UnderlineLink>
          </div>
        </div>
      </section>

      {/* ( 02 ) Risorse utili */}
      <section className="mx-auto flex max-w-[1200px] flex-col gap-13 px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-baseline gap-4 md:grid-cols-[180px_1fr] md:gap-10">
          <span className="font-mono text-xs tracking-[0.2em] text-faint">( 02 )</span>
          <h2 className="font-serif text-4xl font-normal tracking-[-0.015em] text-ink md:text-[54px]">
            <EmText segs={j.resTitle} />
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-[180px_1fr]">
          <span className="hidden md:block" />
          <div className="grid gap-10 border-t border-line pt-11 md:grid-cols-2 md:gap-0">
            <div className="flex flex-col gap-3.5 md:pr-12">
              <h3 className="font-serif text-[25px] font-medium text-ink">{j.cvH}</h3>
              <p className="text-sm leading-[1.85] text-body">{j.cvP}</p>
            </div>
            <div className="flex flex-col gap-3.5 md:border-l md:border-line md:pl-12">
              <h3 className="font-serif text-[25px] font-medium text-ink">{j.langH}</h3>
              <p className="text-sm leading-[1.85] text-body">{j.langP}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
