import type { Metadata } from "next";
import { DoubleRule, EmText, Kicker, LeaderRow } from "@/components/ui";
import { getDict } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getDict(lang);
  return { title: t.contactPage.metaTitle, description: t.contactPage.metaDesc };
}

const inputClass =
  "w-full border border-line bg-cream px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-bronze";

export default async function Contatto({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getDict(lang);
  const p = t.contactPage;
  const c = t.contactShared;

  return (
    <>
      {/* Intro */}
      <section className="mx-auto flex max-w-[1200px] flex-col gap-10 px-5 pb-[72px] pt-14 md:px-8 md:pt-[84px]">
        <Kicker>{p.kicker}</Kicker>
        <h1 className="max-w-[16ch] text-balance font-serif text-5xl font-normal leading-none tracking-[-0.02em] text-ink md:text-[74px]">
          <EmText segs={p.h1} />
        </h1>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-faint">
          {p.note}
        </p>
      </section>

      {/* ( 01 ) Scriveteci */}
      <section className="mx-auto flex max-w-[1200px] flex-col px-5 pb-24 md:px-8">
        <DoubleRule />
        <div className="grid gap-10 pt-11 lg:grid-cols-5 lg:gap-16">
          {/* Form (demo) */}
          <div className="lg:col-span-3">
            <div className="grid items-baseline gap-4 md:grid-cols-[180px_1fr] md:gap-10">
              <span className="font-mono text-xs tracking-[0.2em] text-faint">( 01 )</span>
              <h2 className="font-serif text-4xl font-normal tracking-[-0.015em] text-ink md:text-[44px]">
                {p.formTitle}
              </h2>
            </div>
            <form className="mt-9 flex flex-col gap-5 md:ml-[220px]" action="#" method="post">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[13px] font-semibold text-body">{p.name}</span>
                  <input type="text" name="nome" required className={`mt-1.5 ${inputClass}`} />
                </label>
                <label className="block">
                  <span className="text-[13px] font-semibold text-body">{p.email}</span>
                  <input type="email" name="email" required className={`mt-1.5 ${inputClass}`} />
                </label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[13px] font-semibold text-body">{p.phone}</span>
                  <input type="tel" name="telefono" className={`mt-1.5 ${inputClass}`} />
                </label>
                <label className="block">
                  <span className="text-[13px] font-semibold text-body">{p.iam}</span>
                  <select name="tipo" required className={`mt-1.5 ${inputClass}`}>
                    <option value="">{p.select}</option>
                    <option value="azienda">{p.company}</option>
                    <option value="candidato">{p.candidate}</option>
                  </select>
                </label>
              </div>
              <label className="block">
                <span className="text-[13px] font-semibold text-body">{p.message}</span>
                <textarea
                  name="messaggio"
                  rows={5}
                  required
                  placeholder={p.msgPlaceholder}
                  className={`mt-1.5 ${inputClass} placeholder:text-faint`}
                />
              </label>
              <p className="text-xs leading-[1.7] text-muted">
                {p.privacyPre}
                <a
                  href={`/${lang}/protezione-dei-dati`}
                  className="text-bronze underline"
                >
                  {p.privacyLink}
                </a>
                {p.privacyPost}
              </p>
              <button
                type="submit"
                className="self-start bg-bronze px-[30px] py-[15px] text-[12.5px] font-bold uppercase tracking-[0.14em] text-cream transition-opacity hover:opacity-90"
              >
                {p.submit}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-9 lg:col-span-2">
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
            </div>
            <div className="flex flex-col gap-[18px]">
              <h3 className="border-b border-ink pb-3 font-serif text-[22px] font-medium text-ink">
                {p.reachH}
              </h3>
              <LeaderRow label={p.station} value={p.stationV} />
              <LeaderRow label={p.highway} value={p.highwayV} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
