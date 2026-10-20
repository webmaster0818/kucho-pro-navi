import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  alternates: { canonical: "/ranking/lease/" },
  title: "業務用エアコンのリース対応業者とメリット・デメリット【2026年10月】",
  description:
    "業務用エアコンをリースするメリット・デメリット（初期費用・経費処理・保守・中途解約・総支払額・所有権）を国税庁・リース事業協会・ダイキン公式の記載で整理し、公式サイトでリース対応を確認できた業者4社の対応エリアを掲載しています。",
};

// 公式サイトでリース（またはリース契約の取次）を確認できた業者のみ（2026年10月20日確認）
const LEASE_SLUGS = ["acn-aircon", "aircon-center-ac", "aircon-com", "aircon-sohonpo"];
const leaseCompanies = LEASE_SLUGS.map((slug) => companies.find((c) => c.slug === slug)).filter(
  (c): c is (typeof companies)[number] => Boolean(c),
);

const leaseSourceUrls: Record<string, string> = {
  "acn-aircon": "https://www.acn-aircon.com/",
  "aircon-center-ac": "https://www.e-aircon.jp/",
  "aircon-com": "https://www.airizm.com/",
  "aircon-sohonpo": "https://ac.fj-tec.co.jp/?p=3532",
};

const leaseFeatureIcons = [
  <svg key="0" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="9"/><text x="12" y="16" textAnchor="middle" fill="currentColor" stroke="none" fontSize="10" fontWeight="bold">¥</text></svg>,
  <svg key="1" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>,
  <svg key="2" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
  <svg key="3" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>,
];

const leaseFeatures = [
  {
    title: "初期費用を抑えられる",
    desc: "機器代・工事費をまとめて払う代わりに、月々のリース料で支払います。メーカー系のリースでは初期費用0円のプランもあります（例：ダイキンリース・クレジット）。",
  },
  {
    title: "リース料を経費として処理できる",
    desc: "税務上はリース資産を自社の資産として償却するのが原則ですが、賃借料として損金経理した金額は「償却費として損金経理をした金額」に含まれる扱いです（国税庁 No.5702）。処理方法は税理士・会計士にご確認ください。",
  },
  {
    title: "固定資産税・保険の手続きをリース会社が行う",
    desc: "物件はリース会社が取得し、固定資産税や動産総合保険等の保険料はリース料に含まれます（リース事業協会）。負担がなくなるのではなく、月額に組み込まれる点に注意が必要です。",
  },
  {
    title: "保守・修理込みのプランを選べる場合がある",
    desc: "通常のファイナンス・リースでは保守・修繕は利用者が負担しますが、故障時の修理が無償になるプランを用意するリース会社もあります（例：ダイキン「安心保証リース」）。",
  },
];

const leaseDemerits = [
  {
    title: "原則として中途解約できない",
    desc: "リース期間中の解約は原則禁止で、解約する場合は残リース料またはそれに相当する違約金を一括で支払う契約が一般的です（リース事業協会）。ダイキンのリースプランも途中解約は「×」です。",
  },
  {
    title: "総支払額は物件価格より高くなる",
    desc: "月額リース料は、物件価格に金利・固定資産税・保険料・リース会社の管理費・利益を加えてリース期間の月数で割ったものです（リース事業協会）。一括購入より支払総額は大きくなります。",
  },
  {
    title: "所有権はリース会社にある",
    desc: "物件はリース会社が取得するもので、期間満了時は再リースするか、利用者の負担でリース会社の指定場所へ返還します（リース事業協会）。自由に売却・廃棄はできません。",
  },
  {
    title: "保守なしの契約では修理費が自己負担",
    desc: "標準的なファイナンス・リースでは修繕義務は利用者にあり、ダイキンの「ビジネスリース」もメーカー保証期間外の修理は有償です。保守・修理の範囲は契約前に確認が必要です。",
  },
  {
    title: "契約期間が長い",
    desc: "業務用エアコンのリース期間は4〜9年程度（ダイキン ビジネスリース。機器・機種で異なる）など長期で、税務上もリース期間は耐用年数の70%以上で設定する必要があります（リース事業協会）。",
  },
];

const sources = [
  { label: "国税庁 タックスアンサー No.5702 リース取引についての取扱いの概要（平成20年4月1日以後契約分）", href: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/hojin/5702.htm" },
  { label: "公益社団法人リース事業協会「リース契約の特徴」", href: "https://www.leasing.or.jp/information/finance.html" },
  { label: "ダイキン工業「ビジネスリース｜ダイキンリース・クレジット」", href: "https://www.ac.daikin.co.jp/lease/business" },
];

export default function LeaseRankingPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "ランキング", href: "/ranking/" },
            { label: "リース対応業者とメリット・デメリット" },
          ]}
        />

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコンのリース対応業者とメリット・デメリット【2026年10月】
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          初期費用を抑えて業務用エアコンを導入したい場合、リース契約が選択肢になります。当ページでは、業務用エアコンをリースするメリット・デメリットを国税庁・公益社団法人リース事業協会・メーカー（ダイキン）の公式情報で整理し、公式サイトでリース対応を確認できた業者を掲載しています（2026年10月20日確認）。
        </p>

        {/* Merits */}
        <section id="merit-demerit" className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-2">業務用エアコンをリースするメリット・デメリット</h2>
          <p className="text-gray-600 text-sm mb-5 leading-relaxed">
            ここでいうリースは、利用者が選んだ機器をリース会社が購入して貸し出す「ファイナンス・リース」です。レンタルやサブスクリプションとは契約の性質が異なります。
          </p>
          <h3 className="font-bold text-gray-800 mb-3">メリット</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {leaseFeatures.map((feat, i) => (
              <div key={feat.title} className="flex gap-3">
                {leaseFeatureIcons[i]}
                <div>
                  <div className="font-bold text-gray-800 text-sm mb-1">{feat.title}</div>
                  <div className="text-gray-600 text-xs leading-relaxed">{feat.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <h3 className="font-bold text-gray-800 mt-6 mb-3">デメリット・注意点</h3>
          <ul className="space-y-3">
            {leaseDemerits.map((d) => (
              <li key={d.title} className="rounded-lg bg-gray-50 border border-gray-100 p-3">
                <div className="font-bold text-gray-800 text-sm mb-1">{d.title}</div>
                <div className="text-gray-600 text-xs leading-relaxed">{d.desc}</div>
              </li>
            ))}
          </ul>
        </section>

        {/* Comparison: Lease vs Purchase */}
        <div className="bg-[#F1F5F9] rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">リースと購入の比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1E40AF] text-white">
                  <th className="p-3 text-left">比較項目</th>
                  <th className="p-3 text-center">リース（ファイナンス・リース）</th>
                  <th className="p-3 text-center">一括購入</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["初期費用", "抑えられる（0円のプランもある）", "機器代・工事費をまとめて支払う"],
                  ["総支払額", "物件価格＋金利・固定資産税・保険料・管理費等", "物件価格（＋自社で払う税・保険）"],
                  ["税務上の扱い", "原則は自社資産として償却。賃借料として損金経理した額は償却費に含まれる", "減価償却"],
                  ["所有権", "リース会社", "自社"],
                  ["中途解約・売却", "原則不可（残リース料相当の支払い）", "自由"],
                  ["保守・修理", "原則利用者負担。修理込みプランがある会社も", "自社で手配"],
                  ["期間満了時", "再リースまたは返還", "—"],
                ].map(([item, lease, purchase]) => (
                  <tr key={item} className="bg-white">
                    <td className="p-3 font-medium text-gray-700">{item}</td>
                    <td className="p-3 text-center text-gray-700">{lease}</td>
                    <td className="p-3 text-center text-gray-600">{purchase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-xs text-gray-500 leading-relaxed">
            <p className="font-semibold">出典（2026年10月20日確認）</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              {sources.map((src) => (
                <li key={src.href}>
                  <a href={src.href} target="_blank" rel="noopener noreferrer" className="text-[#1E40AF] hover:underline">
                    {src.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-2">※税務・会計処理は契約内容や契約日により異なります。実際の処理は税理士・会計士にご確認ください。</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-2">リースに対応する業者（公式サイトで確認できた4社）</h2>
        <p className="text-gray-600 text-sm mb-5 leading-relaxed">
          公式サイトにリース対応（またはリース契約の手続き）の記載がある業者のみを掲載しています。東京都内で検討する場合、4社とも対応エリアに東京を含みます（エアコン総本舗は東京・神奈川・埼玉・千葉・群馬・静岡・山梨）。リース料率・期間・審査の条件は各社・リース会社によって異なるため、見積もり時にご確認ください。
        </p>

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
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{company.name}</h3>
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
                  <div className="text-xs text-gray-400 mb-4">
                    リース対応の確認元：
                    <a href={leaseSourceUrls[company.slug]} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {company.name} 公式サイト
                    </a>
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
