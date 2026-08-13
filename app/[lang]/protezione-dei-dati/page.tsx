import type { Metadata } from "next";
import { DoubleRule, Kicker } from "@/components/ui";
import { getDict } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getDict(lang);
  return { title: t.legal.privacyTitle };
}

export default async function ProtezioneDeiDati({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getDict(lang);
  const l = t.legal;

  return (
    <section className="mx-auto flex max-w-[1200px] flex-col gap-10 px-5 pb-24 pt-14 md:px-8 md:pt-[84px]">
      <Kicker>{l.kicker}</Kicker>
      <h1 className="font-serif text-5xl font-normal leading-none tracking-[-0.02em] text-ink md:text-[74px]">
        {l.privacyTitle}
      </h1>
      <DoubleRule />
      <div className="flex flex-col">
        {l.privacySections.map((s, i) => (
          <div
            key={s.t}
            className={`grid gap-4 py-10 md:grid-cols-[180px_1fr] md:gap-10 ${
              i > 0 ? "border-t border-line" : ""
            }`}
          >
            <h2 className="m-0 font-serif text-[22px] font-medium leading-[1.3] text-ink">
              {s.t}
            </h2>
            <p className="m-0 max-w-[74ch] text-[15px] leading-[1.9] text-body">
              {s.p}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
