import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import companiesData from "@/data/companies.json";

interface Company {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  features: string[];
  pros: string[];
  cons: string[];
  avgCost: number;
  warranty: string;
  coverage: string;
  officialUrl: string;
}

const companies: Company[] = companiesData;

export async function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const company = companies.find((c) => c.slug === slug);
  if (!company) return {};
  return {
    title: `${company.name}の口コミ・評判・料金`,
    description: `${company.name}の特徴・料金・口コミを徹底解説。${company.tagline}`,
  };
}

export default async function CompanyPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const company = companies.find((c) => c.slug === slug);
  if (!company) notFound();

  const rank = companies.findIndex((c) => c.slug === slug) + 1;

  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "ランキング", href: "/ranking/" },
            { label: company.name },
          ]}
        />

        {/* Hero */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-gray-100">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl font-black text-[#F59E0B]">
              #{rank}
            </span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {company.name}
              </h1>
              <p className="text-[#1E40AF] font-medium">{company.tagline}</p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">{company.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {company.features.map((f) => (
              <span
                key={f}
                className="bg-blue-50 text-[#1E40AF] text-xs font-semibold px-3 py-1 rounded-full"
              >
                {f}
              </span>
            ))}
          </div>
          <a
            href={company.officialUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block bg-[#F59E0B] hover:bg-amber-500 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            公式サイトを見る →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Info Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="font-bold text-gray-800 mb-4 text-lg">基本情報</h2>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-2 text-gray-500 font-medium w-1/3">平均費用</td>
                  <td className="py-2 font-semibold text-gray-800">
                    ¥{company.avgCost.toLocaleString()}〜
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-500 font-medium">保証内容</td>
                  <td className="py-2 text-gray-700">{company.warranty}</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-500 font-medium">対応エリア</td>
                  <td className="py-2 text-gray-700">{company.coverage}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Score */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="font-bold text-gray-800 mb-4 text-lg">総合評価</h2>
            {[
              { label: "価格", score: rank <= 3 ? 4.5 : 3.8 },
              { label: "対応スピード", score: rank <= 5 ? 4.2 : 3.6 },
              { label: "品質・実績", score: 4.0 },
              { label: "アフターサービス", score: rank <= 4 ? 4.3 : 3.7 },
            ].map((item) => (
              <div key={item.label} className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">{item.label}</span>
                  <span className="font-bold text-[#F59E0B]">{item.score}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#F59E0B] rounded-full"
                    style={{ width: `${(item.score / 5) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pros & Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 rounded-xl p-6 border border-green-100">
            <h2 className="font-bold text-[#059669] mb-4 text-lg">メリット</h2>
            <ul className="space-y-2">
              {company.pros.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-[#059669] font-bold mt-0.5">✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 rounded-xl p-6 border border-red-100">
            <h2 className="font-bold text-red-600 mb-4 text-lg">デメリット</h2>
            <ul className="space-y-2">
              {company.cons.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-red-500 font-bold mt-0.5">✗</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#1E40AF] rounded-2xl p-8 text-white text-center">
          <h2 className="text-xl font-bold mb-3">
            {company.name}に無料見積もりを依頼する
          </h2>
          <p className="text-blue-100 mb-6 text-sm">
            まずは無料で現地調査・お見積もりをご依頼ください。
          </p>
          <a
            href={company.officialUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block bg-[#F59E0B] hover:bg-amber-500 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            無料で見積もりを依頼 →
          </a>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/ranking/"
            className="text-[#1E40AF] hover:underline text-sm"
          >
            ← ランキング一覧に戻る
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
