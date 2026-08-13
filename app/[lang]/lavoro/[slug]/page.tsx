import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink, EmText, UnderlineLink } from "@/components/ui";
import { jobs } from "@/lib/data";
import { getDict } from "@/lib/i18n";

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return {};
  return {
    title: job.title,
    description: job.summary,
  };
}

export default async function JobDetail({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) notFound();
  const t = getDict(lang);
  const d = t.jobDetail;

  return (
    <>
      {/* Head */}
      <section className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 pb-16 pt-14 md:px-8 md:pt-[84px]">
        <Link
          href={`/${lang}/lavoro`}
          className="self-start text-xs font-bold uppercase tracking-[0.13em] text-bronze no-underline hover:text-ink"
        >
          {d.back}
        </Link>
        <div className="grid items-baseline gap-4 md:grid-cols-[180px_1fr] md:gap-10">
          <span className="font-mono text-xs leading-[1.6] tracking-[0.1em] text-faint">
            Job ID {job.id}
            <br />
            {job.category}
          </span>
          <div className="flex flex-col gap-6">
            <h1 className="max-w-[18ch] text-balance font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-ink md:text-[64px]">
              {job.title}
            </h1>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-faint">
              {job.location} – {job.region} — {job.contract} — {job.workload}
            </p>
            <p className="max-w-[52ch] font-serif text-[21px] leading-[1.5] text-body">
              {job.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="mx-auto flex max-w-[1200px] flex-col px-5 pb-24 md:px-8">
        {(
          [
            [d.tasks, job.tasks],
            [d.profile, job.profile],
            [d.offer, job.offer],
          ] as const
        ).map(([heading, items]) => (
          <div
            key={heading}
            className="grid gap-6 border-t border-line py-10 md:grid-cols-[180px_1fr] md:gap-10"
          >
            <h2 className="font-serif text-[22px] font-medium leading-[1.3] text-ink">
              {heading}
            </h2>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 text-[15px] leading-[1.8] text-body"
                >
                  <span aria-hidden className="font-serif italic text-gold">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* CTA — dark band */}
      <section className="bg-ink text-parchment">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:gap-[88px] md:px-8 md:py-24">
          <h2 className="max-w-[18ch] text-balance font-serif text-4xl font-normal leading-[1.08] tracking-[-0.015em] md:text-[50px]">
            <EmText segs={d.ctaH} dark />
          </h2>
          <div className="flex flex-col justify-center gap-6">
            <p className="text-[15px] leading-[1.85] text-dark-body">
              {d.ctaP(job.id)}
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <ButtonLink href={`/${lang}/contatto`}>{d.apply}</ButtonLink>
              <UnderlineLink href={`/${lang}/lavoro`} dark>
                {d.other}
              </UnderlineLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
