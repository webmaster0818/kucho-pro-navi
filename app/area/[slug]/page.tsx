import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import areasData from "@/data/areas.json";
import companiesData from "@/data/companies.json";

interface FAQ {
  question: string;
  answer: string;
}

interface Subsidy {
  name: string;
  org: string;
  url: string;
  facts: string[];
  status: string;
  cautions: string[];
}

interface AreaCompany {
  slug: string;
  /** その都道府県を対応エリアに挙げている公式サイトの記載（確認日は updated） */
  note: string;
  url: string;
}

interface Area {
  slug: string;
  pref: string;
  title: string;
  description: string;
  updated: string;
  subsidies: Subsidy[];
  companies: AreaCompany[];
  coldRegion: boolean;
  faqs: FAQ[];
}

const areas: Area[] = areasData as Area[];

const fmt = (d: string) => d.replace(/^(\d+)-0?(\d+)-0?(\d+)$/, "$1年$2月$3日");

export async function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    alternates: { canonical: `/area/${slug}/` },
    title: area.title,
    description: area.description,
  };
}

export default async function AreaPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) notFound();

  const listed = area.companies
    .map((ac) => {
      const c = companiesData.find((x) => x.slug === ac.slug && x.rankingListed !== false);
      return c ? { ...ac, name: c.name, tagline: c.tagline } : null;
    })
    .filter((x): x is AreaCompany & { name: string; tagline: string } => x !== null);
  const others = areas.filter((a) => a.slug !== area.slug);
  const checked = fmt(area.updated);

  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "都道府県別" }, { label: area.pref }]} />

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{area.title}</h1>
        <p className="text-gray-600 leading-relaxed mb-2 text-lg">{area.description}</p>
        <p className="text-xs text-gray-500 mb-8">
          最終更新：<time dateTime={area.updated}>{checked}</time>（補助金・対応エリアは同日に各公式サイトで確認）
        </p>

        {area.subsidies.map((s) => (
          <section key={s.url} className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-1">{s.name}</h2>
            <p className="text-sm text-gray-600 mb-4">実施：{s.org}</p>
            <ul className="space-y-3 mb-4">
              {s.facts.map((f) => (
                <li key={f} className="flex items-start gap-2 text-gray-700 leading-relaxed">
                  <span className="text-[#1E40AF] mt-0.5">•</span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="bg-white border border-blue-100 rounded-lg p-4 mb-3">
              <p className="text-sm font-bold text-gray-800 mb-1">受付の状況（{checked}確認）</p>
              <p className="text-sm text-gray-700 leading-relaxed">{s.status}</p>
            </div>
            {s.cautions.length > 0 && (
              <ul className="space-y-2 mb-3">
                {s.cautions.map((c) => (
                  <li key={c} className="text-sm text-gray-700 leading-relaxed flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-0.5">•</span>
                    {c}
                  </li>
                ))}
              </ul>
            )}
            <p className="text-xs text-gray-500">
              出典：
              <a href={s.url} target="_blank" rel="nofollow noopener" className="underline">
                {s.org}「{s.name}」
              </a>
              （{checked}確認）。申請の前に、最新の募集要領を公式サイトでご確認ください。
            </p>
          </section>
        ))}

        {area.coldRegion && (
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-3">寒冷地向けの機種</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              主要メーカーは寒冷地向けの業務用エアコンのシリーズを出しています。各社のシリーズは
              <Link href="/guide/cold-region/" className="text-[#1E40AF] underline">寒冷地向け業務用エアコンの比較</Link>
              にまとめています。
            </p>
          </section>
        )}

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{listed.length > 0 ? `${area.pref}を対応エリアに挙げている業者` : "依頼先の業者"}</h2>
          {listed.length > 0 ? (
            <>
              <p className="text-xs text-gray-500 mb-3">
                各業者の公式サイトの対応エリアの記載（{checked}確認）です。並びは順位ではありません。地域を限定せず全国で受け付ける業者・紹介サービスは
                <Link href="/ranking/" className="text-[#1E40AF] underline">総合ランキング</Link>
                に掲載しています。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {listed.map((c) => (
                  <div key={c.slug} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                    <p className="font-bold text-gray-800 mb-1">{c.name}</p>
                    <p className="text-xs text-gray-600 mb-2">{c.tagline}</p>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      {c.note}
                      <a href={c.url} target="_blank" rel="nofollow noopener" className="text-xs text-gray-500 underline ml-1">
                        公式サイト
                      </a>
                    </p>
                    <Link
                      href={`/company/${c.slug}/`}
                      className="block text-center bg-[#1E40AF] text-white text-sm py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      詳細を見る
                    </Link>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-sm text-gray-700 leading-relaxed">
              全国で受け付ける業者・紹介サービスは
              <Link href="/ranking/" className="text-[#1E40AF] underline">総合ランキング</Link>
              に掲載しています。
            </p>
          )}
        </section>

        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">費用と国の補助金</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            設置費用は、広さ・必要な馬力・台数・設置条件で変わります。メーカー公表の目安は
            <Link href="/guide/cost/" className="text-[#1E40AF] underline">費用相場ガイド</Link>
            に、国の補助金（SII の省エネ・非化石転換補助金など）の公募時期は
            <Link href="/guide/timing/" className="text-[#1E40AF] underline">補助金カレンダー</Link>
            に出典とあわせて掲載しています。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">よくある質問</h2>
          <div className="space-y-4">
            {area.faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
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
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">ほかの都道府県</h2>
          <ul className="flex flex-wrap gap-2 text-sm">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/area/${o.slug}/`} className="inline-block bg-blue-50 text-[#1E40AF] px-3 py-1 rounded hover:bg-blue-100">
                  {o.pref}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: area.faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            }),
          }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
