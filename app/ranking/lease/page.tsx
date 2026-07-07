import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "業務用エアコンリース対応業者ランキング【2026年7月】",
  description:
    "業務用エアコンのリース・レンタル対応業者を徹底比較。初期費用ゼロで導入できるリースプランの仕組みやメリット・デメリットも詳しく解説。",
};

const leaseCompanies = companies.filter((_, i) => i !== 2);

const leaseFeatureIcons = [
  <svg key="0" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="9"/><text x="12" y="16" textAnchor="middle" fill="currentColor" stroke="none" fontSize="10" fontWeight="bold">¥</text></svg>,
  <svg key="1" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>,
  <svg key="2" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
  <svg key="3" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>,
];

const leaseFeatures = [
  {
    title: "初期費用ゼロ",
    desc: "機器代・工事費をリース料として月額払いに分散。まとまった資金が不要。",
  },
  {
    title: "経費計上が簡単",
    desc: "リース料は全額経費計上可能。購入と異なり減価償却の手間が不要。",
  },
  {
    title: "メンテナンス込みプランあり",
    desc: "月額料金にメンテナンス費用を含めることができ、管理が楽。",
  },
  {
    title: "最新機器への乗り換えが容易",
    desc: "リース期間終了後に最新モデルへ更新しやすく、常に効率的な運転が可能。",
  },
];

export default function LeaseRankingPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "ランキング", href: "/ranking/" },
            { label: "リースランキング" },
          ]}
        />

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコンリース対応業者ランキング【2026年7月】
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          初期費用を抑えて業務用エアコンを導入したい場合、リース契約が有力な選択肢です。リース対応の優良業者をランキング形式で紹介し、リース導入のメリット・デメリットも詳しく解説します。
        </p>

        {/* Lease Features */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">リース導入のメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {leaseFeatures.map((feat, i) => (
              <div key={feat.title} className="flex gap-3">
                {leaseFeatureIcons[i]}
                <div>
                  <div className="font-bold text-gray-800 text-sm mb-1">{feat.title}</div>
                  <div className="text-gray-600 text-xs">{feat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison: Lease vs Purchase */}
        <div className="bg-[#F1F5F9] rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">リース vs 購入 比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1E40AF] text-white">
                  <th className="p-3 text-left">比較項目</th>
                  <th className="p-3 text-center">リース</th>
                  <th className="p-3 text-center">購入</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["初期費用", "少ない（ゼロも可）", "大きい"],
                  ["総支払額", "割高", "割安"],
                  ["経費処理", "月額費用として計上", "減価償却が必要"],
                  ["所有権", "リース会社", "自社"],
                  ["機器更新", "期間終了後に容易", "自社負担で更新"],
                  ["メンテナンス", "込みプランあり", "別途手配が必要"],
                ].map(([item, lease, purchase]) => (
                  <tr key={item} className="bg-white">
                    <td className="p-3 font-medium text-gray-700">{item}</td>
                    <td className="p-3 text-center text-[#059669]">{lease}</td>
                    <td className="p-3 text-center text-gray-600">{purchase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          {leaseCompanies.map((company, index) => (
            <div
              key={company.slug}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#059669] bg-opacity-10 rounded-full font-black text-[#059669] text-xl flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{company.name}</h2>
                  <p className="text-[#1E40AF] text-sm font-medium mb-3">{company.tagline}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {company.features.slice(0, 4).map((f) => (
                      <span
                        key={f}
                        className="bg-green-50 text-[#059669] text-xs font-medium px-2 py-1 rounded"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                     対応エリア: {company.coverage}
                  </div>
                  <Link
                    href={`/company/${company.slug}/`}
                    className="inline-block bg-[#059669] hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg text-sm transition-colors"
                  >
                    リース詳細を見る →
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
