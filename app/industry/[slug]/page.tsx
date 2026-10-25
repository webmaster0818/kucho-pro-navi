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

interface Industry {
  slug: string;
  title: string;
  description: string;
  challenges: string[];
  recommendations: string[];
  recommendedCompanies: string[];
  faqs: FAQ[];
  updated?: string;
  keyFacts?: string[];
  sources?: { label: string; url: string }[];
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
    alternates: { canonical: `/industry/${slug}/` },
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

        {industry.keyFacts && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">要点（公的機関の公表資料による）</h2>
            <ul className="space-y-3">
              {industry.keyFacts.map((f) => (
                <li key={f} className="flex items-start gap-2 text-gray-700 leading-relaxed">
                  <span className="text-[#1E40AF] mt-0.5">•</span>
                  {f}
                </li>
              ))}
            </ul>
            {industry.updated && (
              <p className="mt-4 text-xs text-gray-500">
                最終更新：<time dateTime={industry.updated}>{industry.updated.replace(/^(\d+)-0?(\d+)-0?(\d+)$/, "$1年$2月$3日")}</time>
              </p>
            )}
          </div>
        )}

        {/* Challenges */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-[#F59E0B]"></span> この業種に特有の空調課題
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
            <span className="text-[#059669]"></span> 推奨される空調対策
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

        {/* Cost */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">費用について</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            設置費用は、広さ・必要な馬力・台数・設置条件で大きく変わります。金額は業者の見積もりで確認してください。メーカー公表の目安は
            <Link href="/guide/cost/" className="text-[#1E40AF] underline">費用相場ガイド</Link>
            、馬力別の専門店の掲載価格は
            <Link href="/cost-index/" className="text-[#1E40AF] underline">早見インデックス</Link>
            に出典とあわせて掲載しています。
          </p>
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

        {industry.sources && (
          <div className="mb-8 text-xs text-gray-500 leading-relaxed">
            <p className="font-bold mb-1">出典（{industry.updated ?? ""}確認）</p>
            <ul className="space-y-1">
              {industry.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="nofollow noopener" className="underline">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {industry.updated && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: industry.faqs.map((f) => ({
                  "@type": "Question",
                  name: f.question,
                  acceptedAnswer: { "@type": "Answer", text: f.answer },
                })),
              }),
            }}
          />
        )}

        <div className="bg-[#1E40AF] rounded-2xl p-8 text-white text-center">
          <h2 className="text-xl font-bold mb-3">
            無料見積もりによる比較のご案内
          </h2>
          <p className="text-blue-100 mb-6 text-sm">
            複数業者に見積もりを依頼し、費用と内容を比較することをおすすめします
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
