import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";

const CHECKED = "2026年7月7日";

export const metadata: Metadata = {
  title: "業務用エアコン 坪数×馬力×費用 早見インデックス【2026年7月】本体・工事費を実確認",
  description:
    "業務用エアコンの「坪数→必要馬力」「馬力別の本体価格＋工事費」を、メーカー資料と業務用エアコン専門店の公開価格から当サイトが2026年7月7日に確認して一覧化。1馬力≒2.8kWの換算、飲食店など用途別の補正、撤去・配管などの追加費用まで出典つきでまとめた早見インデックスです（月次更新）。",
  alternates: { canonical: "/cost-index/" },
};

const hpTable = [
  { hp: "1.5馬力", tsubo: "約5〜11坪", jo: "約10〜23畳", kw: "4.0kW（P40形）" },
  { hp: "2馬力", tsubo: "約7〜15坪", jo: "約13〜29畳", kw: "5.0kW（P50形）" },
  { hp: "2.5馬力", tsubo: "約8〜17坪", jo: "約16〜34畳", kw: "6.3kW" },
  { hp: "3馬力", tsubo: "約11〜23坪", jo: "約21〜46畳", kw: "8.0kW（P80形）" },
  { hp: "4馬力", tsubo: "約15〜32坪", jo: "約30〜64畳", kw: "10.0kW" },
  { hp: "5馬力", tsubo: "約18〜40坪", jo: "約36〜80畳", kw: "14.0kW" },
  { hp: "6馬力", tsubo: "約21〜46坪", jo: "約42〜92畳", kw: "16.0kW" },
  { hp: "8馬力", tsubo: "約29〜59坪", jo: "約58〜118畳", kw: "22.4kW" },
  { hp: "10馬力", tsubo: "約37〜74坪", jo: "約74〜148畳", kw: "28.0kW" },
];

const costTable = [
  { hp: "1.5馬力", body: "約14〜20万円", total: "約22〜33万円" },
  { hp: "2馬力", body: "約16〜23万円", total: "約24〜36万円" },
  { hp: "2.5馬力", body: "約17〜24万円", total: "約25〜37万円" },
  { hp: "3馬力", body: "約19〜25万円", total: "約28〜38万円" },
  { hp: "4馬力", body: "約21〜30万円", total: "約30〜43万円" },
  { hp: "5馬力", body: "約25〜34万円", total: "約34〜47万円" },
  { hp: "6馬力", body: "約27〜37万円", total: "約36〜50万円" },
  { hp: "8馬力（ツイン）", body: "約40〜59万円", total: "約51〜72万円" },
  { hp: "10馬力（ツイン）", body: "約48〜70万円", total: "約59〜83万円" },
];

const extras = [
  { item: "既設エアコンの撤去・処分", cost: "約4〜20万円" },
  { item: "フロン回収・破壊", cost: "約1.5〜7万円" },
  { item: "配管延長", cost: "約3,500〜4,500円/m" },
  { item: "化粧カバー", cost: "約4,000〜5,000円/m" },
  { item: "室外機の高所設置", cost: "約5,000〜10,000円（クレーンは別途）" },
  { item: "電気工事（動力200V三相・専用回路）", cost: "約5,000円〜（新規三相引込は別途）" },
];

const faqs = [
  {
    q: "うちの広さだと何馬力が必要ですか？",
    a: "上の「坪数→馬力」早見表が目安です。ただし馬力の選定は、用途（事務所か飲食店か工場か）・天井高・断熱性・機械の発熱で大きく変わります。とくに飲食店の厨房は熱負荷が高く、同じ広さでも1ランク上の馬力が必要になることがあります。正確な選定は現地調査で行うのが確実です。",
  },
  {
    q: "1馬力は何kW（何坪）ですか？",
    a: "冷房能力でおおむね1馬力≒2.8kWが換算の目安です（正確には小馬力ほどやや小さく2.5〜2.8kWの幅があります）。メーカーの形番は『形の数字＝冷房最大能力kW』を表し、例えば1.5馬力＝P40形（4.0kW）、3馬力＝P80形（8.0kW）です。坪数の目安は用途で変わるため、あくまでレンジとしてご覧ください。",
  },
  {
    q: "この費用は『コミコミ』ですか？",
    a: "本表の本体価格は業務用エアコン専門店の公開価格（本体のみ・工事費別）を、工事費は標準取付工事費（天井カセット4方向シングルの目安）を集計したものです。合計欄は本体＋標準工事の概算で、既設撤去・配管延長・化粧カバー・電源工事などの追加費用は含みません。実際の総額は必ず現地見積もりでご確認ください。",
  },
  {
    q: "メーカー公式の相場と差があるのはなぜですか？",
    a: "メーカー公式が示す相場（例：5馬力以下で機器＋工事50〜70万円、6馬力以上100〜150万円）は定価・大型案件寄りの概算で、専門店の実売価格とは差が出ます。本表は専門店の公開価格を中心にレンジで示しています。数値は各社随時改定されるため、契約前に各社の最新見積もりで確認してください。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "業務用エアコン 坪数×馬力×費用 早見インデックス【2026年7月】",
  description: "坪数→必要馬力、馬力別の本体価格＋工事費を専門店・メーカー資料から実確認して一覧化した早見インデックス。",
  author: { "@type": "Organization", name: "空調プロナビ編集部" },
  publisher: { "@type": "Organization", name: "空調プロナビ" },
  datePublished: "2026-07-07",
  dateModified: "2026-07-07",
};

export default function CostIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "坪数×馬力×費用 早見インデックス" }]} />

        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mt-4 mb-2 leading-snug">
          業務用エアコン 坪数×馬力×費用 早見インデックス【2026年7月】
        </h1>
        <p className="text-sm text-slate-500 mb-1">最終更新日：{CHECKED}</p>
        <p className="text-xs text-slate-400 mb-6">費用・目安の確認日：{CHECKED}（メーカー資料・専門店の公開価格を毎月見直し・更新）</p>

        <div className="bg-sky-50 border border-sky-200 rounded-xl p-5 mb-8">
          <p className="font-bold text-sky-900 mb-2">このページについて</p>
          <p className="text-sm text-slate-700 leading-relaxed">
            業務用エアコンの「広さ（坪数）→必要な馬力」と「馬力別の本体価格＋工事費」を、<strong>メーカー資料（ダイキン等）と業務用エアコン専門店の公開価格</strong>から当サイトが<strong>{CHECKED}に確認</strong>して一覧化しました。「30〜80万円が目安」といった粗い数字ではなく、馬力刻みのレンジで示しています。数値は各社随時改定されるため、契約前に各社の最新見積もりでご確認ください。
          </p>
        </div>

        {/* 坪数→馬力 */}
        <h2 className="text-xl font-bold text-slate-900 mb-3">① 坪数・畳数 → 必要馬力の目安</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 mb-2">
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="px-3 py-3 text-left font-bold">馬力</th>
                <th className="px-3 py-3 text-left font-bold">坪数の目安</th>
                <th className="px-3 py-3 text-left font-bold">畳数の目安</th>
                <th className="px-3 py-3 text-left font-bold">冷房能力（形番）</th>
              </tr>
            </thead>
            <tbody>
              {hpTable.map((r, i) => (
                <tr key={r.hp} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                  <td className="px-3 py-2.5 font-bold text-slate-800">{r.hp}</td>
                  <td className="px-3 py-2.5 text-slate-700">{r.tsubo}</td>
                  <td className="px-3 py-2.5 text-slate-700">{r.jo}</td>
                  <td className="px-3 py-2.5 text-slate-600">{r.kw}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mb-4">
          ※ 換算目安は1馬力≒2.8kW（小馬力ほどやや小さく2.5〜2.8kWの幅）。坪数は<strong>事務所〜店舗系を中心とした目安</strong>で、用途・天井高・断熱・発熱で変わります。
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-slate-700 leading-relaxed">
          <strong className="text-amber-900">用途で必要馬力は変わります：</strong>飲食店の厨房は熱負荷が高く、同じ広さでも1ランク上の馬力が必要になりがちです（例：3馬力は事務所系で約11〜23坪でも、飲食店向けでは約6〜11坪が目安）。天井2.5m超・体育館や工場の機械発熱がある空間も、床面積だけで選ぶと能力不足になります。詳しくは<Link href="/guide/horsepower/" className="text-sky-700 underline">馬力の選び方</Link>へ。
        </div>

        {/* 馬力→費用 */}
        <h2 className="text-xl font-bold text-slate-900 mb-3">② 馬力別 本体価格＋工事費の目安</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 mb-2">
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="px-3 py-3 text-left font-bold">馬力</th>
                <th className="px-3 py-3 text-left font-bold">本体価格（専門店・工事費別）</th>
                <th className="px-3 py-3 text-left font-bold">本体＋標準工事の概算</th>
              </tr>
            </thead>
            <tbody>
              {costTable.map((r, i) => (
                <tr key={r.hp} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                  <td className="px-3 py-2.5 font-bold text-slate-800">{r.hp}</td>
                  <td className="px-3 py-2.5 text-slate-700">{r.body}</td>
                  <td className="px-3 py-2.5 text-sky-700 font-bold">{r.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mb-4">
          ※ 天井カセット形4方向シングルの目安。本体は業務用エアコン専門店の公開価格（本体のみ）を集計、工事費は標準取付工事費 約8〜13万円を加えた概算です。8・10馬力はツイン構成が基本。<strong>ツインは本体・工事とも概ね2〜3割高</strong>、形状は壁掛＜天吊＜床置＜天カセの順で高くなる傾向です。
        </p>

        {/* 追加費用 */}
        <h2 className="text-xl font-bold text-slate-900 mb-3">③ 別途かかりやすい追加費用</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 mb-2">
          <table className="w-full text-sm min-w-[420px]">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="px-3 py-3 text-left font-bold">項目</th>
                <th className="px-3 py-3 text-left font-bold">目安</th>
              </tr>
            </thead>
            <tbody>
              {extras.map((r, i) => (
                <tr key={r.item} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                  <td className="px-3 py-2.5 font-medium text-slate-800">{r.item}</td>
                  <td className="px-3 py-2.5 text-slate-700">{r.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mb-8">
          ※ 既設の撤去・配管延長・電源（動力三相）工事などは物件条件で変わります。総額は必ず現地見積もりで確認してください。
        </p>

        {/* 出典 */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8 text-xs text-slate-500 leading-relaxed">
          <p className="font-bold text-slate-600 mb-1">出典（{CHECKED}確認）</p>
          メーカー資料：ダイキン（馬力選定・費用相場・飲食店向け選び方）／業務用エアコン専門店の公開価格：エアコンコム・エアコン総本店・エアコンセンターAC・ACC ほか／追加費用：比較ビズ・ミツモア。数値は各社随時改定されるため、実際の見積り時に各社サイトで再確認してください。
        </div>

        {/* 内部リンク */}
        <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-slate-900 mb-2">費用と業者を比較する</h2>
          <div className="flex flex-wrap gap-2">
            <Link href="/ranking/" className="px-4 py-2 bg-sky-700 text-white rounded-lg text-sm font-bold">業者ランキングを見る →</Link>
            <Link href="/guide/cost/" className="px-4 py-2 bg-white border border-sky-300 text-sky-700 rounded-lg text-sm font-medium">費用相場の内訳</Link>
            <Link href="/guide/horsepower/" className="px-4 py-2 bg-white border border-sky-300 text-sky-700 rounded-lg text-sm font-medium">馬力の選び方</Link>
            <Link href="/guide/type/" className="px-4 py-2 bg-white border border-sky-300 text-sky-700 rounded-lg text-sm font-medium">形状の選び方</Link>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-xl font-bold text-slate-900 mb-4">よくある質問</h2>
        <div className="space-y-3 mb-4">
          {faqs.map((f, i) => (
            <details key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <summary className="px-5 py-4 cursor-pointer font-medium text-slate-800 text-sm">Q. {f.q}</summary>
              <div className="px-5 pb-4 text-sm text-slate-700 leading-relaxed">A. {f.a}</div>
            </details>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
