import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";

const CHECKED = "2026年7月7日";
const PRICE_CHECKED = "2026年10月25日";

export const metadata: Metadata = {
  title: "業務用エアコン 坪数×馬力×費用 早見インデックス 本体・工事費の確認値",
  description:
    "業務用エアコンの「坪数→必要馬力」と「馬力別の本体価格」を、ダイキンの資料と業務用エアコン専門店3社の公開価格（2026年10月25日確認）で一覧にしています。標準工事費と撤去・配管などの追加費用も、出典と条件を明記して掲載しています。",
  alternates: { canonical: "/cost-index/" },
};

const hpTable = [
  { hp: "1.5馬力", tsubo: "約5〜11坪", jo: "約10〜23畳", kw: "4.0kW（P40形）" },
  { hp: "2馬力", tsubo: "約7〜15坪", jo: "約13〜29畳", kw: "5.0kW（P50形）" },
  { hp: "2.5馬力", tsubo: "約8〜17坪", jo: "約16〜34畳", kw: "6.3kW" },
  { hp: "3馬力", tsubo: "約11〜23坪", jo: "約21〜46畳", kw: "8.0kW（P80形）" },
  { hp: "4馬力", tsubo: "約15〜32坪", jo: "約30〜64畳", kw: "11.2kW（P112形）" },
  { hp: "5馬力", tsubo: "約18〜40坪", jo: "約36〜80畳", kw: "14.0kW" },
  { hp: "6馬力", tsubo: "約21〜46坪", jo: "約42〜92畳", kw: "16.0kW" },
  { hp: "8馬力", tsubo: "約29〜59坪", jo: "約58〜118畳", kw: "22.4kW" },
  { hp: "10馬力", tsubo: "約37〜74坪", jo: "約74〜148畳", kw: "28.0kW" },
];

// 本体価格：各社公式の価格一覧（天井カセット形4方向・本体のみ・工事費別）を2026-10-25に確認した値。合算・推計はしない
const costTable = [
  { hp: "1.5馬力", ac: "165,000円", soh: "171,100円", acc: "196,020円" },
  { hp: "2馬力", ac: "177,100円", soh: "193,700円", acc: "230,032円" },
  { hp: "2.5馬力", ac: "192,500円", soh: "215,200円", acc: "238,062円" },
  { hp: "3馬力", ac: "205,700円", soh: "230,200円", acc: "248,160円" },
  { hp: "4馬力", ac: "234,300円", soh: "264,200円", acc: "296,472円" },
  { hp: "5馬力", ac: "272,800円", soh: "306,500円", acc: "339,130円" },
  { hp: "6馬力", ac: "295,900円", soh: "332,900円", acc: "368,082円" },
  { hp: "8馬力（ツイン）", ac: "466,400円", soh: "494,600円", acc: "590,040円" },
  { hp: "10馬力（ツイン）", ac: "553,300円", soh: "586,600円", acc: "700,260円" },
];

// 追加費用：比較ビズ（高所・配管延長・化粧カバー・電気工事・撤去）、ミツモア（フロン回収・破壊）。2026-10-25確認
const extras = [
  { item: "既設エアコンの撤去・廃棄", cost: "約4万〜20万円（シングルの壁掛形で約4万円、マルチの天井埋め込み型で約20万円）" },
  { item: "フロンガス回収・破壊", cost: "約1万5,000〜7万円" },
  { item: "配管延長（天井埋め込み型・基本工事の8mを超えた分）", cost: "1mあたり 2.5馬力まで3,500円、3〜4馬力4,500円" },
  { item: "化粧カバー（天井埋め込み型）", cost: "1mあたり 2.5馬力まで4,000円、3〜4馬力5,000円" },
  { item: "室外機の高所設置（2階以上）", cost: "約5,000〜10,000円" },
  { item: "電気工事（電源の容量が足りない場合）", cost: "約5,000円〜" },
];

const sources = [
  { label: "馬力・能力（形番・kW）の目安", title: "ダイキン「業務用エアコンの選び方」", url: "https://www.ac.daikin.co.jp/customercenter/useful/article/28" },
  { label: "飲食店向けの馬力の目安", title: "ダイキン「飲食店様向け 業務用エアコンの選び方」", url: "https://www.ac.daikin.co.jp/customercenter/useful/article/32" },
  { label: "メーカー公表の費用の目安（機器＋工事）", title: "ダイキン「業務用エアコンの価格相場は？工事費込みでいくらが目安？」", url: "https://www.ac.daikin.co.jp/customercenter/useful/article/49", checked: "2026年10月25日" },
  { label: "本体価格・標準型（税込・工事費別）", title: "エアコンセンターAC「業務用エアコンの価格一覧」", url: "https://www.e-aircon.jp/isyo/price-list.html", checked: "2026年10月25日" },
  { label: "本体価格・標準型（特別価格・工事費別）", title: "エアコン総本店「業務用エアコンの価格一覧」", url: "https://www.1981airconsohonten.jp/price-list/", checked: "2026年10月25日" },
  { label: "本体価格・標準省エネ（ACC特化見積り・税別）", title: "ACC「業務用エアコン料金一覧」", url: "https://www.e-acc.co.jp/price-list", checked: "2026年10月25日" },
  { label: "設置標準工事費（天井カセット形4方向・入れ替えの参考価格）", title: "エアコンセンターAC「工事費について」", url: "https://www.e-aircon.jp/kouji/kouji-price.html", checked: "2026年10月25日" },
  { label: "追加費用（撤去・廃棄、配管延長、化粧カバー、室外機の高所設置、電気工事）", title: "比較ビズまとめ「業務用エアコンの設置工事費用は4万円〜21万円」", url: "https://www.biz.ne.jp/matome/2004015/", checked: "2026年10月25日" },
  { label: "追加費用（フロンガス回収・破壊）", title: "ミツモア「業務用エアコン(天カセ)の工事費用相場！取り付け・撤去・交換はいくら？馬力ごとに解説」", url: "https://meetsmore.com/services/air-conditioner-installation/media/126644", checked: "2026年10月25日" },
];

const faqs = [
  {
    q: "店舗・事務所の広さに対して、何馬力が必要ですか？",
    a: "上の「坪数→馬力」早見表が目安です。ただし馬力の選定は、用途（事務所か飲食店か工場か）・天井高・断熱性・機械の発熱で大きく変わります。とくに飲食店の厨房は熱負荷が高く、同じ広さでも1ランク上の馬力が必要になることがあります。正確な選定は、現地調査のうえで行うことをおすすめします。",
  },
  {
    q: "1馬力は何kW（何坪）ですか？",
    a: "冷房能力でおおむね1馬力≒2.8kWが換算の目安です（正確には小馬力ほどやや小さく2.5〜2.8kWの幅があります）。メーカーの形番は『形の数字＝冷房最大能力kW』を表し、例えば1.5馬力＝P40形（4.0kW）、3馬力＝P80形（8.0kW）です。坪数の目安は用途により変わるため、範囲としてご覧ください。",
  },
  {
    q: "この表の金額は工事費・追加費用を含めた総額ですか？",
    a: "含みません。本表は業務用エアコン専門店3社が公式サイトに掲載している本体価格（天井カセット形4方向・本体のみ・工事費別）です。工事費は別途で、例えばエアコンセンターACは天井カセット形4方向の設置標準工事費を88,000円〜（既存機器の入れ替えの参考価格・撤去処分などは別途）としています。総額は現地調査のうえで業者の見積もりで確認してください。",
  },
  {
    q: "メーカー公表の相場と差があるのはなぜですか？",
    a: "数値の範囲が違うためです。ダイキンの目安（5馬力以下で50万〜70万円、6馬力以上で100万〜150万円・税込）は、機器代金と工事代金を合わせた1セットあたりの金額で、2023年4月〜2024年3月の成約案件の販売価格をもとに集計されています。本表は専門店の本体のみの掲載価格です。価格は各社で改定されるため、契約前に最新の見積もりで確認してください。",
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
  headline: "業務用エアコン 坪数×馬力×費用 早見インデックス",
  description: "坪数→必要馬力と、馬力別の本体価格（専門店3社の公開価格）を出典つきで一覧にした早見インデックスです。",
  author: { "@type": "Organization", name: "空調プロナビ編集部" },
  publisher: { "@type": "Organization", name: "空調プロナビ" },
  datePublished: "2026-07-07",
  dateModified: "2026-10-25",
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
          業務用エアコン 坪数×馬力×費用 早見インデックス
        </h1>
        <p className="text-sm text-slate-500 mb-1">最終更新日：{PRICE_CHECKED}</p>
        <p className="text-xs text-slate-400 mb-6">金額の確認日：{PRICE_CHECKED}（各社公式サイト）／馬力・坪数の目安の確認日：{CHECKED}</p>

        <div className="bg-sky-50 border border-sky-200 rounded-xl p-5 mb-8">
          <p className="font-bold text-sky-900 mb-2">当ページの掲載内容について</p>
          <p className="text-sm text-slate-700 leading-relaxed">
            業務用エアコンの「広さ（坪数）→必要な馬力」の目安と、<strong>馬力別の本体価格（業務用エアコン専門店3社の公式サイトの掲載価格）</strong>を一覧にしています。金額は<strong>{PRICE_CHECKED}に各社の公式サイトで確認</strong>した値で、税込・税別などの条件は各社の表記どおりです。価格は各社で改定されるため、契約前に最新の見積もりで確認してください。
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
          ※ 換算の目安は1馬力≒2.8kWです（小馬力ほどやや小さく、2.5〜2.8kWの幅があります）。坪数は<strong>事務所・店舗を中心とした目安</strong>であり、用途・天井高・断熱・発熱により変わります。
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-slate-700 leading-relaxed">
          <strong className="text-amber-900">用途により必要馬力は変わります：</strong>飲食店の厨房は熱負荷が高く、同じ広さでも1ランク上の馬力が必要になる傾向があります（例：3馬力は事務所で約11〜23坪が目安ですが、ダイキンの飲食店向けの目安では3馬力相当（P80形）は約22〜42㎡（約6.7〜12.7坪）です）。天井高が2.5mを超える空間や、体育館・工場など機械の発熱がある空間も、床面積だけで選ぶと能力が不足します。詳しくは<Link href="/guide/horsepower/" className="text-sky-700 underline">馬力の選び方</Link>をご覧ください。
        </div>

        {/* 馬力→費用 */}
        <h2 className="text-xl font-bold text-slate-900 mb-3">② 馬力別 本体価格（専門店3社の掲載価格）</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 mb-2">
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="px-3 py-3 text-left font-bold">馬力</th>
                <th className="px-3 py-3 text-left font-bold">エアコンセンターAC<br /><span className="font-normal text-xs">標準型・税込</span></th>
                <th className="px-3 py-3 text-left font-bold">エアコン総本店<br /><span className="font-normal text-xs">標準型・特別価格</span></th>
                <th className="px-3 py-3 text-left font-bold">ACC<br /><span className="font-normal text-xs">標準省エネ・税別</span></th>
              </tr>
            </thead>
            <tbody>
              {costTable.map((r, i) => (
                <tr key={r.hp} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                  <td className="px-3 py-2.5 font-bold text-slate-800">{r.hp}</td>
                  <td className="px-3 py-2.5 text-slate-700">{r.ac}</td>
                  <td className="px-3 py-2.5 text-slate-700">{r.soh}</td>
                  <td className="px-3 py-2.5 text-slate-700">{r.acc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mb-4">
          ※ 天井カセット形4方向（1.5〜6馬力はシングル、8・10馬力はツイン）の本体価格（室内機・室外機・リモコン）で、工事費は含みません。エアコンセンターACは「AC特別価格（税込・工事費別）」の標準型で、見積もり時にさらに値引きした最終価格を案内するとしています。エアコン総本店は「特別価格」の標準型です（定価は税込と表記）。ACCは「ACC特化見積り（税別）」の標準省エネです。{PRICE_CHECKED}に各社公式サイトで確認。
        </p>
        <p className="text-sm text-slate-700 leading-relaxed mb-8">
          工事費は本体とは別にかかります。エアコンセンターACは、天井カセット形4方向の設置標準工事費を<strong>88,000円〜</strong>としています（既存機器を入れ替える場合の参考価格。撤去処分・真空引きなどは別途）。工事費は設置条件で変わるため、総額は業者の見積もりで確認してください。
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
          ※ 既設機の撤去・配管延長・電源（動力三相）工事などは物件の条件により変わります。総額は必ず現地見積もりにてご確認ください。
        </p>

        {/* 出典 */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8 text-xs text-slate-500 leading-relaxed">
          <p className="font-bold text-slate-600 mb-1">出典</p>
          メーカー資料：ダイキン（馬力選定・費用の目安・飲食店向けの選び方）／本体価格・工事費：エアコンセンターAC・エアコン総本店・ACC の公式サイト／追加費用：比較ビズ・ミツモア。金額は{PRICE_CHECKED}に確認しました。数値は各社で改定されるため、見積もりの際に各社の公式サイトで最新情報を確認してください。
          <p className="font-bold text-slate-600 mt-3 mb-1">出典ページ</p>
          <ul className="list-disc pl-5 space-y-1">
            {sources.map((s) => (
              <li key={s.url}>
                {s.label}：
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 break-all">
                  {s.title}
                </a>
                {"checked" in s && s.checked ? `（${s.checked}確認）` : null}
              </li>
            ))}
          </ul>
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
