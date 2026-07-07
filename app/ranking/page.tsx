import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "業務用エアコン業者ランキング【2026年7月】",
  description:
    "業務用エアコン設置・工事業者の総合ランキング。価格・品質・対応スピード・保証を徹底比較しておすすめ10社をランキング形式で紹介。",
};

const rankMedals = ["", "", ""];

export default function RankingPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "総合ランキング" }]} />

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコン業者ランキング【2026年7月】
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          全国の業務用エアコン設置・工事業者を価格・品質・対応スピード・保証内容などを総合的に評価し、ランキング形式で紹介します。費用・エリア・用途に合った業者選びの参考にしてください。
        </p>

        <div className="flex gap-4 mb-8">
          <Link
            href="/ranking/cheap/"
            className="flex-1 text-center bg-white border-2 border-[#1E40AF] text-[#1E40AF] py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors"
          >
            格安ランキング
          </Link>
          <Link
            href="/ranking/lease/"
            className="flex-1 text-center bg-white border-2 border-[#059669] text-[#059669] py-2 px-4 rounded-lg text-sm font-semibold hover:bg-green-50 transition-colors"
          >
            リースランキング
          </Link>
        </div>

        <div className="space-y-6">
          {companies.map((company, index) => (
            <div
              key={company.slug}
              className={`bg-white rounded-2xl shadow-sm border-2 p-6 ${
                index === 0
                  ? "border-[#F59E0B]"
                  : index === 1
                  ? "border-gray-300"
                  : index === 2
                  ? "border-orange-300"
                  : "border-gray-100"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex items-center gap-3 md:w-8">
                  <span className="text-2xl">
                    {index < 3 ? rankMedals[index] : `${index + 1}`}
                  </span>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{company.name}</h2>
                  <p className="text-[#1E40AF] text-sm font-medium mb-2">{company.tagline}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{company.description.slice(0, 100)}...</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {company.features.slice(0, 4).map((f) => (
                      <span
                        key={f}
                        className="bg-blue-50 text-[#1E40AF] text-xs font-medium px-2 py-1 rounded"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-500 mb-4">
                    <span> 平均費用: ¥{company.avgCost.toLocaleString()}〜</span>
                    <span> 対応: {company.coverage}</span>
                  </div>
                  <Link
                    href={`/company/${company.slug}/`}
                    className="inline-block bg-[#1E40AF] hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg text-sm transition-colors"
                  >
                    詳しく見る →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
