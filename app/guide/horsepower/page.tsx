import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "業務用エアコンの馬力（HP）選び方ガイド【計算方法付き】",
  description:
    "業務用エアコンの馬力（HP・kW）の選び方を徹底解説。坪数・用途・熱負荷から最適な馬力を計算する方法と、馬力別の費用目安を紹介。",
};

const hpGuide = [
  { hp: "2馬力（5kW）", area: "6〜10坪", usage: "個室オフィス・小型店舗・個人クリニック診察室" },
  { hp: "2.5馬力（6.3kW）", area: "8〜13坪", usage: "小規模会議室・小型飲食店・美容室" },
  { hp: "3馬力（7.5kW）", area: "10〜16坪", usage: "標準的なオフィス・中型飲食店・ブティック" },
  { hp: "4馬力（10kW）", area: "13〜20坪", usage: "大会議室・中規模レストラン・中型店舗" },
  { hp: "5馬力（12.5kW）", area: "16〜26坪", usage: "フロア全体・大型飲食店・ジム" },
  { hp: "6馬力（15kW）", area: "20〜33坪", usage: "大型フロア・工場作業エリア・大型店舗" },
  { hp: "8馬力（20kW）", area: "26〜43坪", usage: "工場・倉庫・大型商業施設の一区画" },
  { hp: "10馬力（25kW）", area: "33〜53坪", usage: "大型工場・倉庫・ホール・体育館（補助的に）" },
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
          業務用エアコンの馬力（HP）選び方ガイド
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          業務用エアコンの性能は「馬力（HP）」または「kW」で表されます。馬力が不足すると冷暖房効果が得られず、過剰だと電気代の無駄になります。最適な馬力の選び方を詳しく解説します。
        </p>

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
            <p>①基本計算: 30坪 × 0.4馬力 = 12馬力</p>
            <p>②厨房ありの補正: 12馬力 × 1.5 = 18馬力</p>
            <p>③南向き大窓: 18馬力 × 1.2 = 21.6馬力</p>
            <p className="font-bold text-green-800 text-base border-t border-green-200 pt-2">
              → 22馬力程度の空調能力が必要。10馬力×2台 or 12馬力+10馬力の組み合わせを検討
            </p>
          </div>
        </section>

        {/* Warning */}
        <section className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <h2 className="font-bold text-red-700 mb-3">馬力選びの注意点</h2>
          <ul className="text-sm text-red-600 space-y-2">
            <li>⚠ <strong>小さすぎる馬力：</strong>冷暖房が追いつかず、フル稼働で電気代が高くなる。機器寿命も縮む</li>
            <li>⚠ <strong>大きすぎる馬力：</strong>頻繁なオン・オフで効率が悪く、機器代・電気代ともに無駄になる</li>
            <li>⚠ <strong>自己判断は禁物：</strong>実際には建物の断熱性・気密性・窓の方角なども考慮が必要。専門業者による熱負荷計算を依頼することを強く推奨</li>
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
