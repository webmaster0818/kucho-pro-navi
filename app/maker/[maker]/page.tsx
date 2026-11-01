import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { MAKERS, SERIES_PAGES, getMaker } from "@/data/makers";
import { DataTable, Dealers, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

type Props = { params: Promise<{ maker: string }> };

export function generateStaticParams() {
  return MAKERS.map((m) => ({ maker: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { maker } = await params;
  const m = getMaker(maker);
  if (!m) return {};
  return {
    alternates: { canonical: `/maker/${m.slug}/` },
    title: m.title,
    description: m.description,
  };
}

export default async function MakerPage({ params }: Props) {
  const { maker } = await params;
  const m = getMaker(maker);
  if (!m) notFound();
  const seriesPages = SERIES_PAGES.filter((p) => p.maker === m.slug);

  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "メーカー別", href: "/maker/" }, { label: m.name }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {m.name}の業務用エアコン{m.brand ? `（${m.brand}）` : ""}のシリーズと違い
        </h1>
        <UpdatedNote />
        <p className="text-gray-700 leading-relaxed mb-8">{m.lead}</p>

        <h2 className="text-xl font-bold text-gray-800 mb-4">室外機のシリーズ</h2>
        <div className="space-y-4 mb-8">
          {m.series.map((s) => (
            <div key={s.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <h3 className="font-bold text-gray-900 text-lg">{s.name}</h3>
              <p className="text-sm text-[#1E40AF] font-semibold mt-1">{s.position}</p>
              {s.capacity && <p className="text-xs text-gray-500 mt-1">容量：{s.capacity}</p>}
              <p className="text-sm text-gray-700 leading-relaxed mt-2">{s.summary}</p>
              {s.page && (
                <p className="mt-2 text-sm">
                  <Link href={`/maker/${m.slug}/${s.page}/`} className="text-[#1E40AF] underline">
                    {s.name}の詳しい特長を見る
                  </Link>
                </p>
              )}
            </div>
          ))}
        </div>

        {m.table && <DataTable caption="シリーズ別の比較" head={m.table.head} rows={m.table.rows} note={m.table.note} />}

        {m.points.map((p) => (
          <section key={p.heading} className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-3">{p.heading}</h2>
            <p className="text-gray-700 leading-relaxed text-sm">{p.body}</p>
          </section>
        ))}

        {m.indoor && (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-3">室内機（室内ユニット）の形</h2>
            <p className="text-sm text-gray-700 mb-3">{m.indoor.intro}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
              {m.indoor.items.map((i) => (
                <li key={i} className="bg-gray-50 rounded px-3 py-2">{i}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mt-3">
              形ごとの向き・不向きは
              <Link href="/guide/type/" className="text-[#1E40AF] underline">機種タイプ比較</Link>
              で説明しています。
            </p>
          </section>
        )}

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">必要な能力（馬力）と費用の調べ方</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            容量（P形）と馬力の対応、広さの目安は
            <Link href="/guide/horsepower/" className="text-[#1E40AF] underline">馬力選びガイド</Link>
            にまとめています（1馬力≒2.8kW）。メーカーは本体価格を公表していないため、費用は業者の見積もりで確認してください。目安は
            <Link href="/guide/cost/" className="text-[#1E40AF] underline">費用相場ガイド</Link>
            に出典とあわせて掲載しています。
          </p>
        </section>

        <Dealers makerName={m.name} />

        <Faqs faqs={m.faqs} />

        {seriesPages.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-3">シリーズ別のページ</h2>
            <ul className="space-y-2 text-sm">
              {seriesPages.map((p) => (
                <li key={p.slug}>
                  <Link href={`/maker/${m.slug}/${p.slug}/`} className="text-[#1E40AF] underline">{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="text-sm mb-8">
          <Link href="/maker/" className="text-[#1E40AF] underline">ほかのメーカーのシリーズ一覧を見る</Link>
        </p>

        <Sources sources={m.sources} />
      </main>
      <SiteFooter />
    </>
  );
}
