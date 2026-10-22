import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/cost/" },
  title: "業務用エアコンの費用相場は工事費込み50〜70万円（5馬力以下）｜交換費用の内訳",
  description:
    "業務用エアコンの費用相場は、機器代金と工事代金を合わせて5馬力以下で50〜70万円、6馬力以上で100〜150万円です（ダイキン公表の税込目安・2026年10月22日確認）。交換時の撤去費や追加工事、修理費の目安もご説明します。",
};

const DAIKIN_URL = "https://www.ac.daikin.co.jp/customercenter/useful/article/49";
const CHECKED = "2026年10月22日";

const faqs = [
  {
    q: "業務用エアコンの費用相場は、工事費込みでいくらですか？",
    a: "ダイキンの公表値では、機器代金と工事代金を合わせた1セットあたりの目安（税込）は、5馬力以下（一般事務所で70㎡以下が目安）で50万〜70万円、6馬力以上（同80㎡以上）で100万〜150万円です。2023年4月〜2024年3月にダイキンへ問い合わせがあり成約した案件の販売価格をもとにした数値で、配管の長さや室外機の設置場所によって変わります（2026年10月22日に公式サイトで確認）。",
  },
  {
    q: "交換（入れ替え）の場合も、同じ相場ですか？",
    a: "ダイキンの目安価格は、新規の取り付けと入れ替えを区別せずに集計されています。入れ替えの場合は、既設機の撤去・廃棄費用、冷媒配管の洗浄費用、冷媒の処理費用が別にかかることがあり、ダイキンは機器の種類や台数により数万円〜数十万円としています。",
  },
  {
    q: "工事費が目安より高くなるのは、どのような場合ですか？",
    a: "ダイキンは、室内機と室外機の距離が遠い場合（配管が長くなる）、室外機を屋上や壁面に設置する場合（クレーン等が必要）、新設で三相200Vの電源工事が必要な場合、入れ替えで撤去・廃棄が発生する場合、古い建物でアスベストの事前調査が必要な場合を挙げています。",
  },
  {
    q: "当ページの規模別の表と、メーカーの相場が違うのはなぜですか？",
    a: "規模別の表は、機器代と基本工事費の目安で、配管延長・電気工事・足場などの追加費用を含みません。ダイキンの数値は、成約案件の販売価格（税込）を集計したものです。馬力ごとの専門店の公開価格は、出典つきの早見インデックスに掲載しています。金額は案件ごとに異なるため、現地調査のうえで複数社の見積もりを比較してください。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const costTable = [
  { size: "〜10坪（小型店舗・個室）", unit: "2.5〜4馬力", cost: "20万〜50万円" },
  { size: "10〜20坪（小規模オフィス）", unit: "4〜6馬力", cost: "40万〜80万円" },
  { size: "20〜50坪（中規模店舗）", unit: "6〜10馬力", cost: "80万〜160万円" },
  { size: "50〜100坪（大型店舗）", unit: "10〜20馬力", cost: "150万〜300万円" },
  { size: "100坪以上（工場・大型施設）", unit: "20馬力以上", cost: "300万円〜" },
];

const repairCosts = [
  { work: "ガス補充（フロン充填）", cost: "3万〜8万円" },
  { work: "コンプレッサー交換", cost: "15万〜30万円" },
  { work: "ファンモーター交換", cost: "5万〜12万円" },
  { work: "基板（電装部品）修理", cost: "4万〜15万円" },
  { work: "ドレンポンプ修理・交換", cost: "3万〜8万円" },
  { work: "フィルター清掃（プロ）", cost: "1万〜3万円" },
];

// 補助金は年度・公募回で条件が変わるため概要のみ。最新の公募状況・対象要件は必ず公式で確認（詳細は発注タイミングと補助金カレンダーのガイド参照）。
const subsidyInfo = [
  {
    name: "省エネ・非化石転換補助金（経産省／SII）",
    desc: "業務用の高効率空調（電気式パッケージ・GHP等）の更新が主な対象で、空調更新で中心となる制度です。2026年は4次公募を受付中です（〜10月30日。2026年10月17日に公式サイトで確認）",
    amount: "補助率1/3〜（トップ性能枠1/2）",
  },
  {
    name: "脱炭素ビルリノベ事業（環境省／SII）",
    desc: "既存建築物の断熱化とあわせた高効率空調の導入が対象です。2026年は公募中です（〜11月30日。予算額に達した場合は期間内でも受付終了。2026年10月17日に公式サイトで確認）",
    amount: "補助率は要公式確認",
  },
  {
    name: "東京都・各自治体の省エネ設備補助",
    desc: "クール・ネット東京では高効率空調に最大3/4を補助しています。ほかの自治体にも独自の補助制度があります（公募の状況は自治体・年度で異なります）",
    amount: "上限 100万〜4,500万円",
  },
  {
    name: "中小企業経営強化税制（設備投資減税）",
    desc: "中小企業等経営強化法に基づく即時償却・税額控除です。補助金とは別枠の制度です",
    amount: "即時償却／税額控除",
  },
];

export default function CostGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "ガイド" },
            { label: "費用相場ガイド" },
          ]}
        />

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコン費用相場ガイド
        </h1>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
          <p className="text-gray-800 leading-relaxed">
            業務用エアコンの費用相場は、機器代金と工事代金を合わせて<strong>5馬力以下で50万〜70万円、6馬力以上で100万〜150万円</strong>です（1セットあたり・税込）。これはダイキンが公表している目安で、5馬力以下は一般事務所で70㎡以下、6馬力以上は80㎡以上が目安とされています。新規の取り付けと交換（入れ替え）を区別せずに集計された数値です。
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mt-3">
            交換の場合は、既設機の撤去・廃棄や冷媒の処理に数万円〜数十万円が別にかかることがあります。配管が長い場合や、室外機の設置にクレーンが必要な場合も費用が上がります。
          </p>
          <p className="text-xs text-gray-500 mt-3">
            出典：<a href={DAIKIN_URL} target="_blank" rel="noopener noreferrer" className="underline">ダイキン工業「業務用エアコンの価格相場は？工事費込みでいくらが目安？」</a>（スカイエアの目安。2023年4月〜2024年3月の成約案件の販売価格をもとに集計。{CHECKED}確認）
          </p>
        </div>
        <p className="text-gray-600 mb-8 leading-relaxed">
          実際の費用は、機器のサイズ・機種タイプ・設置環境・業者によって大きく異なります。馬力ごとの本体価格と標準工事費は<Link href="/cost-index/" className="text-[#1E40AF] underline">坪数×馬力×費用 早見インデックス</Link>に出典つきで掲載しています。以下では、規模別の目安、費用の内訳、修理費の目安、補助金をご説明します。
        </p>

        {/* Installation Cost */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            規模別の新規設置・交換の費用目安
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1E40AF] text-white">
                  <th className="p-3 text-left">設置場所・規模</th>
                  <th className="p-3 text-left">目安馬力</th>
                  <th className="p-3 text-left">費用目安（機器+工事）</th>
                </tr>
              </thead>
              <tbody>
                {costTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 text-gray-700">{row.size}</td>
                    <td className="p-3 text-gray-600">{row.unit}</td>
                    <td className="p-3 font-semibold text-[#1E40AF]">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            ※上記は機器代・基本工事費の目安です。配管延長・電気工事・足場設置が必要な場合は追加費用が発生します。
          </p>
        </section>

        {/* Cost Breakdown */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">費用の内訳</h2>
          <div className="space-y-4">
            {[
              { item: "機器本体代", ratio: "50〜60%", desc: "室内機・室外機の機器代。馬力・グレードにより大きく変わります" },
              { item: "基本工事費", ratio: "20〜30%", desc: "取り付け・配管・電気接続などの標準工事費" },
              { item: "配管・電気工事", ratio: "10〜20%", desc: "配管延長・電気幹線工事が必要な場合に加算されます" },
              { item: "既設機撤去費", ratio: "5〜10%", desc: "古い機器の取り外し・廃棄費用" },
              { item: "その他（足場・養生等）", ratio: "5%前後", desc: "高所作業や特殊環境での追加費用" },
            ].map((item) => (
              <div key={item.item} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="bg-blue-100 text-[#1E40AF] text-xs font-bold px-2 py-1 rounded">
                    {item.ratio}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm">{item.item}</div>
                  <div className="text-gray-500 text-xs">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Repair Costs */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">修理・メンテナンスの費用目安</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="p-3 text-left">工事・修理内容</th>
                  <th className="p-3 text-left">費用目安</th>
                </tr>
              </thead>
              <tbody>
                {repairCosts.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 text-gray-700">{row.work}</td>
                    <td className="p-3 font-semibold text-gray-800">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Subsidy */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">使える補助金・助成金</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subsidyInfo.map((subsidy) => (
              <div key={subsidy.name} className="bg-white rounded-xl border border-gray-100 p-5">
                <h3 className="font-bold text-gray-800 mb-1 text-sm">{subsidy.name}</h3>
                <p className="text-gray-600 text-xs mb-2">{subsidy.desc}</p>
                <span className="bg-green-100 text-[#059669] text-xs font-bold px-2 py-1 rounded">
                  目安: {subsidy.amount}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※補助金の条件・金額・公募状況は年度ごとに変更され、予算到達で早期終了します。対象要件（空調単体が対象か）と最新情報は各省庁・自治体公式サイトでご確認ください。
            <Link href="/guide/timing/" className="text-[#059669] font-bold hover:underline">2026年の補助金カレンダーと発注タイミング →</Link>
          </p>
        </section>

        {/* Tips */}
        <section className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-amber-800 mb-4">費用を抑える5つのポイント</h2>
          <ol className="space-y-3 text-sm text-amber-700">
            <li className="flex gap-2">
              <span className="font-black">1.</span>
              <span><strong>相見積もりを3社以上取る</strong> — 同じ工事内容でも20〜40%の価格差が生じることがあります</span>
            </li>
            <li className="flex gap-2">
              <span className="font-black">2.</span>
              <span><strong>閑散期（春・秋）に依頼する</strong> — 夏・冬の直前は繁忙期のため、割高になりやすい傾向があります</span>
            </li>
            <li className="flex gap-2">
              <span className="font-black">3.</span>
              <span><strong>補助金・税制優遇を活用する</strong> — 省エネ設備補助金により、費用の1/3〜1/2が補助される場合があります</span>
            </li>
            <li className="flex gap-2">
              <span className="font-black">4.</span>
              <span><strong>必要台数・馬力を正確に計算する</strong> — 過剰な能力にならないよう、専門家の助言を受けることをおすすめします</span>
            </li>
            <li className="flex gap-2">
              <span className="font-black">5.</span>
              <span><strong>リースや分割払いを活用する</strong> — 初期費用を分散し、資金繰りの負担を軽減できます</span>
            </li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white rounded-xl border border-gray-100 p-5">
                <h3 className="font-bold text-gray-800 text-sm mb-2">{f.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典：<a href={DAIKIN_URL} target="_blank" rel="noopener noreferrer" className="underline">ダイキン工業「業務用エアコンの価格相場は？工事費込みでいくらが目安？」</a>（{CHECKED}確認）
          </p>
        </section>

        <div className="text-center">
          <Link
            href="/ranking/"
            className="inline-block bg-[#1E40AF] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            業者ランキングを見る →
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
