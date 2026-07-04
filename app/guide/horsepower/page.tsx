import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "業務用エアコンのkW・馬力換算早見表｜10kWは何馬力？【一覧表・計算方法付き】",
  description:
    "業務用エアコンのkW⇔馬力換算を早見表で即答。1馬力≒2.8kW（メーカー公式の換算値）で、10kWは約3.6馬力（機種クラスは4馬力/P112形）。P形の機種クラス対応表と、坪数・用途から最適な馬力を計算する方法も解説。",
};

// kW→馬力 換算早見表（1馬力≒2.8kW・ダイキン公式の換算値。機種クラスはP形=冷房能力kW×10の公式規則）
const kwToHp = [
  { kw: "4.5kW", hp: "約1.6馬力", model: "1.8馬力（P45形）" },
  { kw: "5.6kW", hp: "約2.0馬力", model: "2.3馬力（P56形）" },
  { kw: "6.3kW", hp: "約2.3馬力", model: "2.5馬力（P63形）＝6.3kWそのもの" },
  { kw: "8.0kW", hp: "約2.9馬力", model: "3馬力（P80形）＝8.0kWそのもの" },
  { kw: "10kW", hp: "約3.6馬力", model: "4馬力（P112形・11.2kW）が目安" },
  { kw: "11.2kW", hp: "4馬力", model: "4馬力（P112形）＝11.2kWそのもの" },
  { kw: "12.5kW", hp: "約4.5馬力", model: "5馬力（P140形・14.0kW）が目安" },
  { kw: "14kW", hp: "5馬力", model: "5馬力（P140形）＝14.0kWそのもの" },
  { kw: "16kW", hp: "約5.7馬力", model: "6馬力（P160形）＝16.0kWそのもの" },
  { kw: "20kW", hp: "約7.1馬力", model: "8馬力（P224形・22.4kW）が目安" },
  { kw: "22.4kW", hp: "8馬力", model: "8馬力（P224形）＝22.4kWそのもの" },
  { kw: "25kW", hp: "約8.9馬力", model: "10馬力（P280形・28.0kW）が目安" },
  { kw: "28kW", hp: "10馬力", model: "10馬力（P280形）＝28.0kWそのもの" },
];

const hpGuide = [
  { hp: "2馬力（5.0kW・P50形）", area: "6〜10坪", usage: "個室オフィス・小型店舗・個人クリニック診察室" },
  { hp: "2.5馬力（6.3kW・P63形）", area: "8〜13坪", usage: "小規模会議室・小型飲食店・美容室" },
  { hp: "3馬力（8.0kW・P80形）", area: "10〜16坪", usage: "標準的なオフィス・中型飲食店・ブティック" },
  { hp: "4馬力（11.2kW・P112形）", area: "13〜20坪", usage: "大会議室・中規模レストラン・中型店舗" },
  { hp: "5馬力（14.0kW・P140形）", area: "16〜26坪", usage: "フロア全体・大型飲食店・ジム" },
  { hp: "6馬力（16.0kW・P160形）", area: "20〜33坪", usage: "大型フロア・工場作業エリア・大型店舗" },
  { hp: "8馬力（22.4kW・P224形）", area: "26〜43坪", usage: "工場・倉庫・大型商業施設の一区画" },
  { hp: "10馬力（28.0kW・P280形）", area: "33〜53坪", usage: "大型工場・倉庫・ホール・体育館（補助的に）" },
];

const heatLoadFactors = [
  { factor: "飲食店（厨房あり）", multiplier: "×1.5〜2.0", reason: "厨房の熱・油煙・水蒸気による負荷増大" },
  { factor: "南向き・西向き大窓", multiplier: "×1.2〜1.5", reason: "直射日光による熱負荷" },
  { factor: "高天井（4m以上）", multiplier: "×1.2〜1.4", reason: "温度成層による空調効率低下" },
  { factor: "多数の人が集まる場所", multiplier: "×1.2〜1.5", reason: "人体発熱（1人あたり約100W）" },
  { factor: "OA機器・サーバー多数", multiplier: "×1.1〜1.3", reason: "機器の発熱負荷" },
  { factor: "断熱性が低い古い建物", multiplier: "×1.2〜1.5", reason: "熱損失が大きい" },
];

export default function HorsepowerGuidePage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "ガイド" },
            { label: "馬力選びガイド" },
          ]}
        />

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコンのkW・馬力換算早見表と選び方ガイド
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          <strong>業務用エアコンの馬力は「1馬力≒冷房能力2.8kW」で換算します</strong>（ダイキン公式の換算値）。たとえば10kWは約3.6馬力で、機種クラスでは4馬力（P112形・11.2kW）が目安です。まず下の早見表で換算し、そのあと坪数・用途からの選び方を確認してください。
        </p>

        {/* kW→馬力 換算早見表 */}
        <section id="conversion" className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">kW→馬力 換算早見表</h2>
          <p className="text-gray-600 text-sm mb-4">
            換算式: <strong>馬力 = 冷房能力kW ÷ 2.8</strong>。機種は連続的なkW値ではなくクラス（P形＝冷房能力kW×10の型番）で展開されるため、「換算した馬力」と「実際に選ぶ機種クラス」をあわせて掲載しています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1E40AF] text-white">
                  <th className="p-3 text-left">冷房能力</th>
                  <th className="p-3 text-left">換算馬力（÷2.8）</th>
                  <th className="p-3 text-left">選ぶ機種クラスの目安</th>
                </tr>
              </thead>
              <tbody>
                {kwToHp.map((row, i) => (
                  <tr key={row.kw} id={`kw-${row.kw.replace("kW", "").replace(".", "-")}`} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-semibold text-[#1E40AF]">{row.kw}</td>
                    <td className="p-3 text-gray-800 font-medium">{row.hp}</td>
                    <td className="p-3 text-gray-600">{row.model}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-xs text-gray-500 mt-3 leading-relaxed space-y-1">
            <p>
              出典: ダイキン公式「1馬力≒2.8kW」（ac.daikin.co.jp 業務用エアコンコラム）／P形と馬力の対応は三菱電機Mr.SLIM形名検索・パナソニック公式コラム・ダイキン公式で確認（いずれも2026年7月4日確認）。
            </p>
            <p>
              ※チラー（冷却水熱源機）など一部の機種カテゴリでは「1馬力=2.5kW」の換算が使われる場合があります（東芝キヤリア空調機器ハンドブックで確認）。本表は店舗・オフィス用パッケージエアコンの換算です。
            </p>
          </div>
        </section>

        {/* Basic Formula */}
        <section className="bg-[#1E40AF] text-white rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">馬力計算の基本式</h2>
          <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-4 text-center">
            <p className="text-lg font-mono font-bold">
              必要馬力 = 坪数 × 0.3〜0.4 × 熱負荷係数
            </p>
          </div>
          <div className="text-sm text-blue-100 space-y-1">
            <p>• 標準的なオフィス・住居: 坪数 × 0.3馬力</p>
            <p>• 飲食店・人が多い場所: 坪数 × 0.4〜0.5馬力</p>
            <p>• 工場・高天井: 坪数 × 0.4〜0.6馬力</p>
          </div>
        </section>

        {/* HP Guide Table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">馬力別 適用面積・用途一覧</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1E40AF] text-white">
                  <th className="p-3 text-left">馬力（kW）</th>
                  <th className="p-3 text-left">目安面積</th>
                  <th className="p-3 text-left">主な用途</th>
                </tr>
              </thead>
              <tbody>
                {hpGuide.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-semibold text-[#1E40AF]">{row.hp}</td>
                    <td className="p-3 text-gray-600">{row.area}</td>
                    <td className="p-3 text-gray-700">{row.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Heat Load Factors */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">熱負荷係数（補正係数）</h2>
          <p className="text-gray-600 text-sm mb-4">
            以下の条件に該当する場合は、計算した馬力に係数を掛けて余裕を持たせることを推奨します。
          </p>
          <div className="space-y-3">
            {heatLoadFactors.map((item) => (
              <div
                key={item.factor}
                className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col md:flex-row md:items-center gap-3"
              >
                <div className="flex-1">
                  <div className="font-semibold text-gray-800 text-sm">{item.factor}</div>
                  <div className="text-gray-500 text-xs">{item.reason}</div>
                </div>
                <div className="flex-shrink-0">
                  <span className="bg-amber-100 text-amber-700 font-bold text-sm px-3 py-1 rounded-lg">
                    {item.multiplier}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Calculation Example */}
        <section className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-green-800 mb-4">計算例：30坪の飲食店の場合</h2>
          <div className="space-y-2 text-sm text-green-700">
            <p>基本計算: 30坪 × 0.4馬力 = 12馬力</p>
            <p>厨房ありの補正: 12馬力 × 1.5 = 18馬力</p>
            <p>南向き大窓: 18馬力 × 1.2 = 21.6馬力</p>
            <p className="font-bold text-green-800 text-base border-t border-green-200 pt-2">
              → 22馬力程度の空調能力が必要。10馬力×2台 or 12馬力+10馬力の組み合わせを検討
            </p>
          </div>
        </section>

        {/* Warning */}
        <section className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <h2 className="font-bold text-red-700 mb-3">馬力選びの注意点</h2>
          <ul className="text-sm text-red-600 space-y-2">
            <li> <strong>小さすぎる馬力：</strong>冷暖房が追いつかず、フル稼働で電気代が高くなる。機器寿命も縮む</li>
            <li> <strong>大きすぎる馬力：</strong>頻繁なオン・オフで効率が悪く、機器代・電気代ともに無駄になる</li>
            <li> <strong>自己判断は禁物：</strong>実際には建物の断熱性・気密性・窓の方角なども考慮が必要。専門業者による熱負荷計算を依頼することを強く推奨</li>
          </ul>
        </section>

        <div className="text-center">
          <Link
            href="/ranking/"
            className="inline-block bg-[#1E40AF] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            馬力を相談できる業者を探す →
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
