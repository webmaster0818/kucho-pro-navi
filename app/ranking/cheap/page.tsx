import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "業務用エアコン格安業者ランキング【最安値比較2026】",
  description:
    "業務用エアコン工事の費用を抑えたい方向け。格安・低価格で高品質な工事業者をランキング形式で紹介。初期費用を最小限に抑える方法も解説。",
};

const cheapRanking = [...companies]
  .sort((a, b) => a.avgCost - b.avgCost)
  .slice(0, 7);

export default function CheapRankingPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "ランキング", href: "/ranking/" },
            { label: "格安ランキング" },
          ]}
        />

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコン格安業者ランキング【最安値比較2026】
        </h1>
        <p className="text-gray-600 mb-6 leading-relaxed">
          初期費用を抑えて業務用エアコンを導入したい方向けに、コストパフォーマンスに優れた業者を厳選してランキング。平均費用が低い順に並べています。
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-amber-800 mb-2">費用を抑えるポイント</h2>
          <ul className="text-sm text-amber-700 space-y-1">
            <li> 複数業者に一括見積もりを依頼して相見積もり</li>
            <li> 繁忙期（夏・冬直前）を避けて閑散期に依頼</li>
            <li> 省エネ補助金・税制優遇を活用</li>
            <li> 中古・リファービッシュ機器の活用を検討</li>
          </ul>
        </div>

        <div className="space-y-6">
          {cheapRanking.map((company, index) => (
            <div
              key={company.slug}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#F1F5F9] rounded-full font-black text-[#1E40AF] text-xl flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{company.name}</h2>
                  <p className="text-[#1E40AF] text-sm font-medium mb-2">{company.tagline}</p>
                  <div className="inline-block bg-green-100 text-[#059669] font-bold text-lg px-4 py-1 rounded-lg mb-3">
                    平均 ¥{company.avgCost.toLocaleString()}〜
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {company.features.slice(0, 3).map((f) => (
                      <span
                        key={f}
                        className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    {company.pros.slice(0, 2).map((p) => (
                      <li key={p} className="flex items-center gap-1">
                        <span className="text-[#059669]"></span> {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/company/${company.slug}/`}
                    className="inline-block bg-[#1E40AF] hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg text-sm transition-colors"
                  >
                    詳細・見積もり →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/ranking/" className="text-[#1E40AF] hover:underline text-sm">
            ← 総合ランキングに戻る
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
