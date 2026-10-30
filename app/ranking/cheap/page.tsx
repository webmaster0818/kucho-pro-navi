import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import allCompanies from "@/data/companies.json";

// rankingListed: false の会社（空調エキスパート＝問い合わせ先がエアコンフロンティアと同じ）は順位・おすすめに並べない。会社ページは残す
const companies = allCompanies.filter((c) => c.rankingListed !== false);

export const metadata: Metadata = {
  alternates: { canonical: "/ranking/cheap/" },
  title: "業務用エアコン格安業者ランキング【最安値比較2026】",
  description:
    "業務用エアコンを格安で導入する方法（専門店の通販価格・室内機の形・整備済みの中古・相見積もりと補助金）と、ダイキン公表の工事費込み相場をご説明し、低価格で依頼できる業者をランキング形式でご紹介します。",
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
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
          <p className="text-gray-800 leading-relaxed">
            業務用エアコンを格安で導入する方法は、<strong>①専門店の通販価格で本体を買う、②設置費用の安い室内機の形を選ぶ、③整備済みの中古を選ぶ、④相見積もり・補助金・リースを使う</strong>の4つです。工事費込みの総額は、ダイキン公表の目安で5馬力以下が50万〜70万円、6馬力以上が100万〜150万円（1セットあたり・税込）のため、見積もりをこの目安と比べると安さを判断できます。
          </p>
          <ul className="text-sm text-gray-700 space-y-2 mt-3">
            <li>
              <strong>専門店の通販価格：</strong>業務用エアコン専門店は、公式サイトに馬力・形状ごとの本体価格を掲載しています。空調センターのように販売専門で取付工事を行わない店もあるため、本体価格だけでなく工事費を含めた総額で比べてください。本体価格と工事費は<Link href="/cost-index/" className="text-[#1E40AF] underline">費用早見インデックス</Link>にまとめています。
            </li>
            <li>
              <strong>室内機の形：</strong>ダイキンは、壁掛形が業務用エアコンの中で設置費用を最も抑えられ、天井埋込カセット形は最も高額になる場合があるとしています。また、省エネタイプは標準タイプより本体価格が高い一方、電気代を抑えられるとしています。
            </li>
            <li>
              <strong>整備済みの中古：</strong>中古を販売する専門店もあります。エアコンマートは、中古エアコンはすべて分解洗浄・試運転整備をおこなったものを販売するとしています。
            </li>
            <li>
              <strong>相見積もり・補助金・リース：</strong>同じ条件で複数社の見積もりを比べます。高効率空調への更新は、国や自治体の補助金の対象になる場合があります（<Link href="/guide/timing/" className="text-[#1E40AF] underline">補助金カレンダー</Link>）。初期費用を分けて払う場合は<Link href="/ranking/lease/" className="text-[#1E40AF] underline">リース</Link>も選択肢です。
            </li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">
            出典：<a href="https://www.ac.daikin.co.jp/customercenter/useful/article/49" target="_blank" rel="noopener noreferrer" className="underline">ダイキン工業「業務用エアコンの価格相場は？工事費込みでいくらが目安？」</a>、<a href="https://www.tokyo-aircon.net/" target="_blank" rel="noopener noreferrer" className="underline">空調センター公式サイト</a>、<a href="https://aircon-mart.com/" target="_blank" rel="noopener noreferrer" className="underline">エアコンマート公式サイト</a>（2026年10月30日確認）
          </p>
        </div>

        <p className="text-gray-600 mb-8 leading-relaxed">
          以下では、初期費用を抑えて業務用エアコンを導入したい方に向けて、業者をランキング形式で掲載しています。掲載順は平均費用の低い順です。
        </p>

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
