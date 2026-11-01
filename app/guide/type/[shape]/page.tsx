import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { SHAPE_PAGES, getShapePage } from "@/data/shapes";
import { DataTable, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

type Props = { params: Promise<{ shape: string }> };

export function generateStaticParams() {
  return SHAPE_PAGES.map((p) => ({ shape: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { shape } = await params;
  const p = getShapePage(shape);
  if (!p) return {};
  return {
    alternates: { canonical: `/guide/type/${p.slug}/` },
    title: p.title,
    description: p.description,
  };
}

export default async function ShapePageView({ params }: Props) {
  const { shape } = await params;
  const p = getShapePage(shape);
  if (!p) notFound();
  const others = SHAPE_PAGES.filter((s) => s.slug !== p.slug);

  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[{ label: "ガイド" }, { label: "機種タイプ比較", href: "/guide/type/" }, { label: p.name }]}
        />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{p.h1}</h1>
        <UpdatedNote />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">{p.answer}</p>
        </div>

        <DataTable
          caption="各社の名称と形式"
          head={["メーカー", "公式の名称", "形式"]}
          rows={p.models.map((m) => [m.maker, m.name, m.code])}
          note="各社の公式ページに掲載されている名称・形式です（「—」は形式の記載を確認していないもの）。容量ごとの設定は各社のカタログで確認してください。"
        />

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

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">能力（馬力）と費用の調べ方</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            室内機の形が決まったら、部屋の広さと用途から必要な能力を確認します。P形と馬力の対応、広さの目安は
            <Link href="/guide/horsepower/" className="text-[#1E40AF] underline">馬力選びガイド</Link>
            にまとめています。メーカーは本体価格を公表していないため、費用は業者の見積もりで確認してください。目安は
            <Link href="/guide/cost/" className="text-[#1E40AF] underline">費用相場ガイド</Link>
            に出典とあわせて掲載しています。
          </p>
        </section>

        <Faqs faqs={p.faqs} />

        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">関連ページ</h2>
          <ul className="space-y-2 text-sm">
            {p.related.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="text-[#1E40AF] underline">{r.label}</Link>
              </li>
            ))}
            {others
              .filter((o) => !p.related.some((r) => r.href === `/guide/type/${o.slug}/`))
              .map((o) => (
                <li key={o.slug}>
                  <Link href={`/guide/type/${o.slug}/`} className="text-[#1E40AF] underline">{o.name}</Link>
                </li>
              ))}
            <li>
              <Link href="/maker/" className="text-[#1E40AF] underline">メーカー別の室外ユニット（シリーズ）一覧</Link>
            </li>
          </ul>
        </div>

        <Sources sources={p.sources} />
      </main>
      <SiteFooter />
    </>
  );
}
