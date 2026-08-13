import Link from "next/link";
import {
  ButtonLink,
  DoubleRule,
  EmText,
  Kicker,
  LeaderRow,
  PhotoPlaceholder,
  SectionHead,
  UnderlineLink,
} from "@/components/ui";
import { getDict } from "@/lib/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getDict(lang);
  const h = t.home;
  const c = t.contactShared;
  const pillarHrefs = ["#distinguerci", "#approccio", "#sociale"];

  return (
    <>
      {/* Hero aziende */}
      <section className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-14 md:grid-cols-[1.1fr_0.9fr] md:gap-[72px] md:px-8 md:py-[84px]">
        <div className="flex flex-col items-start gap-7">
          <Kicker>{h.kicker}</Kicker>
          <h1 className="max-w-[16ch] text-balance font-serif text-5xl font-normal leading-[1.05] tracking-[-0.02em] text-ink md:text-[64px]">
            <EmText segs={h.h1} />
          </h1>
          <p className="max-w-[38ch] font-serif text-[22px] leading-[1.45] text-body">
            {h.heroSerif}
          </p>
          <p className="max-w-[52ch] text-[15.5px] leading-[1.75] text-body">
            {h.heroText}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-8">
            <ButtonLink href={`/${lang}/aziende`}>{h.heroBtn}</ButtonLink>
            <UnderlineLink href={`/${lang}/lavoro`}>{h.band.cta}</UnderlineLink>
          </div>
        </div>
        <PhotoPlaceholder
          label={h.heroPhoto}
          fig="01"
          caption={h.heroCaption}
          className="h-[280px] md:h-[440px]"
        />
      </section>

      {/* Pilastri */}
      <section className="mx-auto max-w-[1200px] px-5 pb-[88px] pt-[72px] md:px-8">
        <DoubleRule />
        <div className="grid gap-10 pt-11 md:grid-cols-3 md:gap-0">
          {h.pillars.map((p, i) => (
            <div
              key={p.t}
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
              <h3 className="font-serif text-[25px] font-medium text-ink">{p.t}</h3>
              <p className="flex-1 text-sm leading-[1.75] text-muted">{p.d}</p>
              <UnderlineLink href={pillarHrefs[i]}>{t.common.more}</UnderlineLink>
            </div>
          ))}
        </div>
      </section>

      {/* Banda candidati */}
      <section className="bg-ink text-parchment">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:gap-[88px] md:px-8 md:py-24">
          <div className="flex flex-col gap-6">
            <Kicker dark>{h.band.kicker}</Kicker>
            <h2 className="text-balance font-serif text-4xl font-normal leading-[1.06] tracking-[-0.015em] md:text-[50px]">
              <EmText segs={h.band.h2} dark />
            </h2>
            <p className="font-serif text-[21px] text-dark-muted">{h.band.sub}</p>
          </div>
          <div className="flex flex-col justify-center gap-[26px]">
            <p className="text-[15px] leading-[1.85] text-dark-body">{h.band.text}</p>
            <p className="font-serif text-3xl italic text-parchment">
              {h.band.precious}
            </p>
            <UnderlineLink href={`/${lang}/lavoro`} dark>
              {h.band.cta}
            </UnderlineLink>
          </div>
        </div>
      </section>

      {/* ( 01 ) Vogliamo distinguerci */}
      <section id="distinguerci" className="scroll-mt-24">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-5 py-16 md:px-8 md:py-24">
          <SectionHead n="01" title={<EmText segs={h.distinguish.title} />}>
            <p className="max-w-[52ch] text-pretty font-serif text-[21px] leading-[1.5] text-body">
              {h.distinguish.lede}
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-faint">
              {h.distinguish.note}
            </p>
          </SectionHead>
          <div className="grid border-t border-line md:grid-cols-2">
            <div className="flex flex-col gap-[18px] pt-11 md:pr-12">
              <PhotoPlaceholder label={h.distinguish.employerPhoto} fig="02" />
              <h3 className="font-serif text-[29px] font-medium text-ink">
                <EmText segs={h.distinguish.employerH} />
              </h3>
              <p className="max-w-[50ch] text-[15px] leading-[1.8] text-body">
                {h.distinguish.employerP}
              </p>
            </div>
            <div className="flex flex-col gap-[18px] pt-11 md:border-l md:border-line md:pl-12">
              <PhotoPlaceholder label={h.distinguish.employeePhoto} fig="03" />
              <h3 className="font-serif text-[29px] font-medium text-ink">
                <EmText segs={h.distinguish.employeeH} />
              </h3>
              <p className="max-w-[50ch] text-[15px] leading-[1.8] text-body">
                {h.distinguish.employeeP}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ( 02 ) Un approccio vincente */}
      <section id="approccio" className="scroll-mt-24">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-13 px-5 pb-24 md:px-8">
          <div className="border-t border-ink" />
          <SectionHead n="02" title={<EmText segs={h.approach.title} />}>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-faint">
              {h.approach.tagline}
            </p>
          </SectionHead>
          <div className="grid gap-10 md:grid-cols-[180px_1fr]">
            <span className="hidden md:block" />
            <div className="grid gap-10 md:grid-cols-3 md:gap-0">
              {h.approach.steps.map((text, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-[18px] ${
                    i === 0
                      ? "md:pr-10"
                      : i === 1
                        ? "md:border-l md:border-line md:px-10"
                        : "md:border-l md:border-line md:pl-10"
                  }`}
                >
                  <span className="font-serif text-[44px] leading-none italic text-gold">
                    {i + 1}
                  </span>
                  <p className="text-[15px] leading-[1.8] text-body">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ( 03 ) Impegno sociale */}
      <section
        id="sociale"
        className="scroll-mt-24 border-y border-line bg-cream-deep"
      >
        <div className="mx-auto flex max-w-[1200px] flex-col gap-16 px-5 py-16 md:px-8 md:py-24">
          <SectionHead n="03" title={<EmText segs={h.social.title} />}>
            <div className="mt-4 flex max-w-[62ch] flex-col gap-3.5">
              <p className="-indent-[0.45em] text-pretty font-serif text-2xl italic leading-[1.4] text-deep md:text-[31px]">
                {h.social.quote}
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-faint">
                {h.social.quoteBy}
              </p>
            </div>
          </SectionHead>

          <div className="grid gap-6 border-t border-line pt-11 md:grid-cols-[180px_1fr] md:gap-10">
            <h3 className="font-serif text-[22px] font-medium leading-[1.3] text-ink">
              {h.social.whyH}
            </h3>
            <p className="max-w-[74ch] text-[15px] leading-[1.9] text-body">
              {h.social.whyP}
            </p>
          </div>

          <div className="grid gap-6 border-t border-line pt-11 md:grid-cols-[180px_1fr] md:gap-10">
            <div className="flex flex-col gap-[18px]">
              <h3 className="font-serif text-[22px] font-medium leading-[1.3] text-ink">
                {h.social.chosenH}
              </h3>
              <PhotoPlaceholder label={h.social.chosenLogo} className="h-[72px]" />
            </div>
            <p className="max-w-[74ch] text-[15px] leading-[1.9] text-body">
              {h.social.chosenP}
            </p>
          </div>

          <div className="grid gap-6 border-t border-line pt-11 md:grid-cols-[180px_1fr] md:gap-10">
            <h3 className="font-serif text-[22px] font-medium leading-[1.3] text-ink">
              {h.social.helpH}
            </h3>
            <p className="max-w-[74ch] text-[15px] leading-[1.9] text-body">
              {h.social.helpP}
            </p>
          </div>

          <div className="grid gap-6 border-t border-line pt-11 md:grid-cols-[180px_1fr] md:gap-10">
            <h3 className="font-serif text-[22px] font-medium leading-[1.3] text-ink">
              {h.social.infoH}
            </h3>
            <div className="flex flex-col gap-[26px]">
              <p className="max-w-[74ch] text-[15px] leading-[1.9] text-body">
                {h.social.infoP}
              </p>
              <UnderlineLink href="https://swiss-ability.org/cosa-puoi-fare/azienda/azienda-zolliway/">
                {h.social.infoCta}
              </UnderlineLink>
            </div>
          </div>
        </div>
      </section>

      {/* ( 04 ) Contattaci */}
      <section id="contatto" className="scroll-mt-24">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-13 px-5 py-16 md:px-8 md:py-24">
          <SectionHead n="04" title={h.contact.title}>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-faint">
              {h.contact.note}
            </p>
          </SectionHead>
          <div className="grid gap-10 md:grid-cols-[180px_1fr]">
            <span className="hidden md:block" />
            <div className="grid gap-12 md:grid-cols-2">
              <div className="flex flex-col gap-[18px]">
                <h3 className="border-b border-ink pb-3 font-serif text-[22px] font-medium text-ink">
                  {c.phoneH}
                </h3>
                <LeaderRow label={c.weekdays} value={c.hours} />
                <LeaderRow label={c.saturday} value={c.closed} />
                <LeaderRow label={c.sunday} value={c.closed} />
              </div>
              <div className="flex flex-col gap-[18px]">
                <h3 className="border-b border-ink pb-3 font-serif text-[22px] font-medium text-ink">
                  {c.contactsH}
                </h3>
                <div className="flex flex-col gap-1 text-[15px]">
                  <span className="text-muted">{c.addressLabel}</span>
                  <strong>{c.address}</strong>
                </div>
                <div className="flex flex-col gap-1 text-[15px]">
                  <span className="text-muted">{c.telLabel}</span>
                  <strong>
                    <a href="tel:+41912246888" className="text-ink no-underline">
                      {c.tel}
                    </a>
                  </strong>
                </div>
                <Link
                  href={`/${lang}/contatto`}
                  className="mt-2 inline-block self-start border-b-2 border-bronze pb-1 text-xs font-bold uppercase tracking-[0.13em] text-ink no-underline hover:text-bronze"
                >
                  {h.contact.formCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
