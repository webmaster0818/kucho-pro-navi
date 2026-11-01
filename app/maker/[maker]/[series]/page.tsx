import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { SERIES_PAGES, getMaker, getSeriesPage } from "@/data/makers";
import { DataTable, Dealers, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

type Props = { params: Promise<{ maker: string; series: string }> };

export function generateStaticParams() {
  return SERIES_PAGES.map((p) => ({ maker: p.maker, series: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { maker, series } = await params;
  const p = getSeriesPage(maker, series);
  if (!p) return {};
  return {
    alternates: { canonical: `/maker/${p.maker}/${p.slug}/` },
    title: p.title,
    description: p.description,
  };
}

export default async function SeriesPageView({ params }: Props) {
  const { maker, series } = await params;
  const p = getSeriesPage(maker, series);
  const m = getMaker(maker);
  if (!p || !m) notFound();

  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "メーカー別", href: "/maker/" },
            { label: m.name, href: `/maker/${m.slug}/` },
            { label: p.name },
          ]}
        />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{p.h1}</h1>
        <UpdatedNote />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">{p.answer}</p>
        </div>

        {p.sections.map((s) => (
          <section key={s.heading} className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-3">{s.heading}</h2>
            {s.items && (
              <ul className="space-y-2">
                {s.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
                    <span className="text-[#1E40AF] mt-0.5">•</span>
                    {i}
                  </li>
                ))}
              </ul>
            )}
            {s.body && <p className="text-sm text-gray-700 leading-relaxed">{s.body}</p>}
          </section>
        ))}

        {p.table && <DataTable caption={p.table.caption} head={p.table.head} rows={p.table.rows} note={p.table.note} />}

        <Faqs faqs={p.faqs} />

        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">関連ページ</h2>
          <ul className="space-y-2 text-sm">
            {p.related.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="text-[#1E40AF] underline">{r.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <Dealers makerName={m.name} />

        <Sources sources={p.sources} />
      </main>
      <SiteFooter />
    </>
  );
}
