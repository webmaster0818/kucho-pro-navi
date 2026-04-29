import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import industriesData from "@/data/industries.json";
import companiesData from "@/data/companies.json";

interface FAQ {
  question: string;
  answer: string;
}

interface EstimatedCost {
  small: string;
  medium: string;
  large: string;
}

interface Industry {
  slug: string;
  title: string;
  description: string;
  challenges: string[];
  recommendations: string[];
  estimatedCost: EstimatedCost;
  recommendedCompanies: string[];
  faqs: FAQ[];
}

const industries: Industry[] = industriesData as Industry[];

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};
  return {
    title: industry.title,
    description: industry.description,
  };
}

export default async function IndustryPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  const relatedCompanies = companiesData.filter((c) =>
    industry.recommendedCompanies.includes(c.slug)
  );

  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "業種別ガイド" },
            { label: industry.title },
          ]}
        />

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {industry.title}
        </h1>
        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
          {industry.description}
        </p>

        {/* Challenges */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-[#F59E0B]">⚠</span> この業種特有の空調課題
          </h2>
          <ul className="space-y-2">
            {industry.challenges.map((c) => (
              <li key={c} className="flex items-start gap-2 text-gray-700">
                <span className="text-[#F59E0B] mt-0.5">•</span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Recommendations */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-[#059669]">✓</span> 推奨される空調対策
          </h2>
          <ul className="space-y-2">
            {industry.recommendations.map((r) => (
              <li key={r} className="flex items-start gap-2 text-gray-700">
                <span className="text-[#059669] font-bold mt-0.5">→</span>
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Cost Estimate */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">費用目安</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(industry.estimatedCost).map(([size, cost]) => (
              <div key={size} className="bg-[#F1F5F9] rounded-lg p-4 text-center">
                <div className="text-sm text-gray-500 mb-1">
                  {size === "small" ? "小規模" : size === "medium" ? "中規模" : "大規模"}
                </div>
                <div className="font-bold text-gray-800 text-sm">{cost}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Companies */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">おすすめ業者</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedCompanies.map((company, index) => (
              <div
                key={company.slug}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#F59E0B] font-black">#{index + 1}</span>
                  <span className="font-bold text-gray-800">{company.name}</span>
                </div>
                <p className="text-xs text-gray-600 mb-3">{company.tagline}</p>
                <Link
                  href={`/company/${company.slug}/`}
                  className="block text-center bg-[#1E40AF] text-white text-sm py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  詳細を見る
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">よくある質問</h2>
          <div className="space-y-4">
            {industry.faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
                  <span className="text-[#1E40AF] font-black">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-6">
                  <span className="font-bold text-[#059669] mr-1">A.</span>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1E40AF] rounded-2xl p-8 text-white text-center">
          <h2 className="text-xl font-bold mb-3">
            まずは無料で見積もり比較
          </h2>
          <p className="text-blue-100 mb-6 text-sm">
            複数業者に一括依頼して最安値を見つけましょう
          </p>
          <Link
            href="/ranking/"
            className="inline-block bg-[#F59E0B] hover:bg-amber-500 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            業者ランキングを見る →
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
