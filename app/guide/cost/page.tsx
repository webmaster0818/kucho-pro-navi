import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "業務用エアコンの費用相場はいくら？本体価格・工事費の内訳【2026年7月】",
  description:
    "業務用エアコンの設置・交換・修理にかかる費用相場を徹底解説。規模・業種・機種タイプ別の費用目安から、費用を抑えるコツまで詳しく紹介。",
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
    desc: "業務用の高効率空調（電気式パッケージ・GHP等）の更新が中心対象。空調更新の本命。2026年は複数回公募のため公募時期の確認を",
    amount: "補助率1/3〜（トップ性能枠1/2）",
  },
  {
    name: "脱炭素ビルリノベ事業（環境省／SII）",
    desc: "既存建築物の断熱化とあわせた高効率空調の導入。2026年は公募中（〜11/30・要公式確認）",
    amount: "補助率は要公式確認",
  },
  {
    name: "東京都・各自治体の省エネ設備補助",
    desc: "東京都クールネット東京は高効率空調に最大3/4。神奈川県・横浜市・京都市等でも公募中（自治体・年度で異なる）",
    amount: "上限 100万〜4,500万円",
  },
  {
    name: "中小企業経営強化税制（設備投資減税）",
    desc: "中小企業等経営強化法に基づく即時償却・税額控除。補助金とは別枠",
    amount: "即時償却／税額控除",
  },
];

export default function CostGuidePage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "ガイド" },
            { label: "費用相場ガイド" },
          ]}
        />

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコン費用相場ガイド【2026年7月】
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          業務用エアコンの設置・工事費用は、機器のサイズ・機種タイプ・設置環境・業者によって大きく異なります。このページでは費用の内訳や相場、費用を抑えるためのポイントを詳しく解説します。
        </p>

        {/* Installation Cost */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            新規設置・交換の費用相場
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
              { item: "機器本体代", ratio: "50〜60%", desc: "室内機・室外機の機器代。馬力・グレードで大きく変わる" },
              { item: "基本工事費", ratio: "20〜30%", desc: "取り付け・配管・電気接続などの標準工事費" },
              { item: "配管・電気工事", ratio: "10〜20%", desc: "配管延長、電気幹線工事が必要な場合に加算" },
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
            <Link href="/guide/timing/" className="text-[#059669] font-bold hover:underline">2026年の補助金カレンダーと発注タイミングはこちら →</Link>
          </p>
        </section>

        {/* Tips */}
        <section className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-amber-800 mb-4">費用を抑える5つのポイント</h2>
          <ol className="space-y-3 text-sm text-amber-700">
            <li className="flex gap-2">
              <span className="font-black">1.</span>
              <span><strong>相見積もりを3社以上取る</strong> — 同じ工事内容でも20〜40%の価格差が生じることがある</span>
            </li>
            <li className="flex gap-2">
              <span className="font-black">2.</span>
              <span><strong>閑散期（春・秋）に依頼する</strong> — 夏・冬直前は繁忙期で割高になりやすい</span>
            </li>
            <li className="flex gap-2">
              <span className="font-black">3.</span>
              <span><strong>補助金・税制優遇を活用する</strong> — 省エネ設備補助金で費用の1/3〜1/2を補助できる場合も</span>
            </li>
            <li className="flex gap-2">
              <span className="font-black">4.</span>
              <span><strong>必要台数・馬力を正確に計算する</strong> — 過剰スペックにならないよう専門家のアドバイスを受ける</span>
            </li>
            <li className="flex gap-2">
              <span className="font-black">5.</span>
              <span><strong>リースや分割払いを活用する</strong> — 初期費用を分散させてキャッシュフローを改善</span>
            </li>
          </ol>
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
