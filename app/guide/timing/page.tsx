import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "業務用エアコンの入れ替え・設置はいつ発注すべき？工事が混む時期と2026年の補助金カレンダー【2026年7月】",
  description:
    "業務用エアコンの発注ベストタイミングを解説。夏本番前・故障多発期に工事枠が逼迫する仕組み、発注から設置までのリードタイム、2026年（令和8年度）に業務用空調で使える補助金の公募状況を、実施機関の公式情報をもとにカレンダー化しました。",
};

const monthCalendar = [
  { month: "1〜2月", demand: "やや落ち着き", note: "暖房故障の対応は入るが、更新工事は比較的組みやすい時期。次の夏に向けた計画発注に向く。", ease: "◎" },
  { month: "3〜4月", demand: "上昇", note: "新年度・改装に合わせた発注が増え始める。夏前の駆け込み前で、まだ枠を確保しやすい。", ease: "○" },
  { month: "5〜6月", demand: "混み始め", note: "梅雨明け・猛暑前の駆け込みで工事枠が急速に埋まる。夏に使う予定なら遅くともこの時期までに発注を。", ease: "△" },
  { month: "7〜8月", demand: "最繁忙", note: "猛暑で故障が集中し、工事が最も混む。緊急対応は割高・順番待ちになりやすく、計画更新には最も不向き。", ease: "×" },
  { month: "9〜10月", demand: "落ち着き（狙い目）", note: "夏の繁忙が明ける端境期。相見積もり・工事日程を落ち着いて調整でき、冬前の暖房更新にも間に合う。", ease: "◎" },
  { month: "11〜12月", demand: "冬前で上昇", note: "暖房シーズン前の第2のピーク。年末は工事が止まりやすいため、余裕を持った発注を。", ease: "○" },
];

// 2026年（令和8年度）業務用空調に使える補助金。すべて実施機関の公式情報で確認（基準日2026年7月）。
// 補助率・締切・予算残は各公募要領で最終確認が必要な箇所を「要公式確認」として残す。
const subsidies = [
  {
    name: "省エネ・非化石転換補助金（設備単位型／工場・事業場型）",
    org: "経済産業省／SII（環境共創イニシアチブ）",
    target: "業務用の高効率空調（電気式パッケージ・GHP・チリングユニット等）が中心対象",
    rate: "1/3〜（トップ性能枠は更新1/2）・上限1億円〜数億円 ※枠により異なる（要公式確認）",
    status: "2026年は1・2次が終了、次回（3次）は日程未公表。空調更新の本命のため公募告知の確認を推奨",
    source: "syouenehojyokin.sii.or.jp",
  },
  {
    name: "脱炭素ビルリノベ2026事業",
    org: "環境省／SII",
    target: "既存建築物の外皮高断熱化とあわせた高効率空調等の導入",
    rate: "補助率は公募要領で要公式確認",
    status: "公募中（〜2026年11月30日）。空調更新に使える国の制度として現実的な選択肢",
    source: "bl-renos.jp",
  },
  {
    name: "ゼロエミッション化に向けた省エネ設備導入・運用改善支援事業",
    org: "東京都／クールネット東京",
    target: "高効率空調を明示的に対象",
    rate: "最大3/4・上限4,500万円（他 2/3・上限2,500万／1,000万円）",
    status: "令和8年度 公募中（複数回受付・予算超過時は抽選）",
    source: "tokyo-co2down.jp",
  },
  {
    name: "各自治体の省エネ設備導入補助（神奈川県・横浜市・京都市・福岡市・埼玉県 ほか）",
    org: "各都道府県・市",
    target: "中小事業者の高効率空調等の導入",
    rate: "おおむね 1/3〜1/2・上限100万〜700万円（自治体・年度で異なる）",
    status: "2026年時点で公募中の自治体あり（例：神奈川県・横浜市・京都市・福岡市・埼玉県）。大阪府・愛知県は受付終了、大阪市は開始前など状況は様々",
    source: "各自治体公式サイト",
  },
  {
    name: "中小企業経営強化税制（設備投資減税）",
    org: "中小企業庁 ほか",
    target: "中小企業等経営強化法に基づく対象設備",
    rate: "即時償却 または 取得価格の税額控除",
    status: "補助金とは別枠の税制優遇。適用要件・期限は要公式確認",
    source: "中小企業庁",
  },
];

const faqs = [
  {
    q: "業務用エアコンの発注から設置まで、どれくらいかかりますか？",
    a: "現地調査→見積り→発注→工事の流れで、一般的には2〜4週間程度が目安です。大型機・特注機は納期でさらに延び、7〜8月の繁忙期は工事枠の順番待ちでリードタイムが延びやすくなります。使いたい時期から逆算し、余裕を持って発注しましょう。",
  },
  {
    q: "いつ発注するのが一番お得ですか？",
    a: "故障してから夏場に慌てて発注するのが最も不利（割高・順番待ち）です。工事が空きやすい端境期（春の3〜4月、秋の9〜10月）に計画的に更新し、使える補助金の公募時期に合わせるのが理想です。",
  },
  {
    q: "補助金はいつ申請できますか？",
    a: "国のSII系補助金は補正予算のサイクルで春に開始し複数回公募されるため、公募開始のタイミングを逃さないことが重要です。自治体・東京都の制度は年度内に随時公募され、予算に達すると早期終了します。いずれも申請には工事前の交付決定が必要な場合が多いため、発注前に最新の公募要領を確認してください。",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function TimingGuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <Breadcrumb items={[{ label: "ガイド" }, { label: "発注タイミングと補助金カレンダー" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 leading-snug">
          業務用エアコンの入れ替え・設置はいつ発注すべき？工事が混む時期と2026年の補助金カレンダー
        </h1>
        <p className="text-xs text-slate-500 mb-6">確認日：2026年7月8日 ／ 最終更新日：2026年7月12日 ／ 空調プロナビ編集部</p>

        {/* 結論即答 */}
        <div className="bg-sky-50 border border-sky-100 rounded-xl p-5 mb-8">
          <p className="font-bold text-sky-800 mb-1">結論</p>
          <p className="text-sm text-slate-700 leading-relaxed">
            業務用エアコンは<strong>「壊れてから夏場に慌てて発注」が最も不利</strong>（割高・工事の順番待ち）です。工事枠が空きやすい<strong>端境期（春の3〜4月・秋の9〜10月）に計画的に更新</strong>し、
            <strong>使える補助金の公募時期に合わせる</strong>のがベストです。使いたい時期から発注・工事のリードタイム（目安2〜4週間＋繁忙期は延長）を逆算しましょう。
          </p>
        </div>

        {/* 月別カレンダー */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-3 border-l-4 border-sky-500 pl-3">工事枠が逼迫する時期（月別カレンダー）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            業務用空調の工事は、猛暑で故障が集中する<strong>7〜8月</strong>に最も混み合います。夏に使う予定なら、遅くとも<strong>5〜6月まで</strong>に発注しておくのが安全です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg min-w-[560px]">
              <thead>
                <tr className="bg-slate-50 text-left">
                  <th className="px-3 py-2.5 border-b border-slate-200 font-bold whitespace-nowrap">時期</th>
                  <th className="px-3 py-2.5 border-b border-slate-200 font-bold whitespace-nowrap">混み具合</th>
                  <th className="px-3 py-2.5 border-b border-slate-200 font-bold whitespace-nowrap text-center">発注しやすさ</th>
                  <th className="px-3 py-2.5 border-b border-slate-200 font-bold">状況</th>
                </tr>
              </thead>
              <tbody>
                {monthCalendar.map((m) => (
                  <tr key={m.month} className="border-b border-slate-100 last:border-0">
                    <td className="px-3 py-2.5 font-bold text-slate-800 whitespace-nowrap">{m.month}</td>
                    <td className="px-3 py-2.5 text-slate-700 whitespace-nowrap">{m.demand}</td>
                    <td className="px-3 py-2.5 text-center text-lg">{m.ease}</td>
                    <td className="px-3 py-2.5 text-slate-600 leading-relaxed">{m.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* リードタイム */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-3 border-l-4 border-sky-500 pl-3">発注から設置までのリードタイム</h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            一般的な流れは <strong>①現地調査 → ②見積り → ③発注 → ④工事</strong> で、目安は<strong>2〜4週間</strong>です。大型機・特注機は納期でさらに延び、7〜8月の繁忙期は工事枠の順番待ちでリードタイムが延びやすくなります。補助金を使う場合は、<strong>工事前に交付決定が必要な制度が多い</strong>ため、そのぶんの期間も見込んでおきましょう。費用の目安は
            <Link href="/cost-index/" className="text-sky-700 font-bold hover:underline">坪数×馬力×費用 早見インデックス</Link>
            で確認できます。
          </p>
        </section>

        {/* 補助金カレンダー */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-3 border-l-4 border-sky-500 pl-3">2026年（令和8年度）業務用空調に使える補助金</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            業務用空調の更新に使える主な補助金を、<strong>実施機関の公式情報で確認</strong>してまとめました（基準日2026年7月）。補助率・締切・予算残は各公募要領で変わるため、<strong>申請前に必ず公式の最新情報をご確認ください</strong>。補助金は予算に達すると早期終了します。
          </p>
          <div className="space-y-4">
            {subsidies.map((s) => (
              <div key={s.name} className="bg-white border border-slate-200 rounded-xl p-4">
                <p className="font-bold text-slate-900 mb-1 text-sm">{s.name}</p>
                <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-700">
                  <p><span className="text-slate-500">実施機関：</span>{s.org}</p>
                  <p><span className="text-slate-500">対象：</span>{s.target}</p>
                  <p><span className="text-slate-500">補助率・上限：</span>{s.rate}</p>
                  <p><span className="text-slate-500">出典：</span>{s.source}</p>
                </div>
                <p className="text-xs text-sky-800 bg-sky-50 rounded px-2 py-1.5 mt-2 leading-relaxed"><span className="font-bold">状況：</span>{s.status}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
            <p className="text-xs text-amber-900 leading-relaxed">
              <strong>注意（誤解の多い制度）：</strong>環境省の<strong>SHIFT事業</strong>は公募中ですが「空調システムの単純な高効率化改修は補助対象外」と公式に明記されており、電化・燃料転換等を伴わない空調更新単体では使えません。<strong>ものづくり補助金</strong>系（令和8年度は新事業進出・ものづくり商業サービス補助金へ統合）や<strong>省力化投資補助金</strong>も、単純な設備更新は対象外です。<strong>ZEB実証事業</strong>は建物単位のZEB化が前提で、空調単体更新の制度ではありません。「補助金が使える」とうたう情報でも、対象要件を必ず公募要領で確認してください。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-sky-500 pl-3">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white border border-slate-200 rounded-xl p-4">
                <summary className="font-bold cursor-pointer text-sm text-slate-800">{f.q}</summary>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 関連リンク */}
        <section className="bg-slate-50 rounded-xl border border-slate-200 p-5">
          <h2 className="text-base font-bold text-slate-900 mb-3">関連ガイド</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/cost-index/" className="text-sky-700 hover:underline">→ 坪数×馬力×費用 早見インデックス</Link></li>
            <li><Link href="/guide/cost/" className="text-sky-700 hover:underline">→ 業務用エアコンの費用相場と内訳</Link></li>
            <li><Link href="/ranking/" className="text-sky-700 hover:underline">→ 業務用エアコン業者ランキング・比較</Link></li>
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
