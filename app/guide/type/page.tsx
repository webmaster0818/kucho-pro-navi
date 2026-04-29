import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "業務用エアコンの種類比較｜天井カセット・壁掛け・床置きの違い",
  description:
    "業務用エアコンの種類（天井カセット型・壁掛け型・床置き型・天井吊り型）の特徴・メリット・デメリットを徹底比較。用途・空間に合った選び方を解説。",
};

const TypeIcon = ({ name }: { name: string }) => {
  if (name.includes("4方向")) return <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/></svg>;
  if (name.includes("2方向")) return <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/></svg>;
  if (name.includes("壁掛け")) return <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="2" y="7" width="20" height="8" rx="2"/><line x1="8" y1="15" x2="8" y2="19"/><line x1="16" y1="15" x2="16" y2="19"/></svg>;
  if (name.includes("床置き")) return <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="7" y="2" width="10" height="16" rx="2"/><line x1="4" y1="20" x2="20" y2="20"/></svg>;
  if (name.includes("天井吊り")) return <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><line x1="12" y1="2" x2="12" y2="6"/><rect x="4" y="6" width="16" height="8" rx="2"/><line x1="8" y1="14" x2="6" y2="20"/><line x1="16" y1="14" x2="18" y2="20"/></svg>;
  return <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="2" y="7" width="20" height="8" rx="2"/></svg>;
};

const types = [
  {
    name: "天井カセット型（4方向）",
    description: "天井に埋め込み、4方向均等に風を送るタイプ。業務用の主流モデル。",
    pros: [
      "部屋全体を均一に冷暖房できる",
      "天井埋め込みでスペースを有効活用",
      "見た目がスッキリしておしゃれ",
      "大風量で広い空間に対応",
    ],
    cons: [
      "設置に天井開口工事が必要",
      "工事費が他のタイプより高め",
      "天井高が2.5m以上必要",
    ],
    bestFor: "オフィス・飲食店・小売店舗・クリニック",
    costRange: "本体・工事 30万〜80万円（1台）",
    maintenanceEase: "普通",
  },
  {
    name: "天井カセット型（2方向）",
    description: "2方向に風を送るコンパクトなカセット型。廊下や細長い空間に最適。",
    pros: [
      "細長い空間に最適な気流設計",
      "4方向より設置コストが低め",
      "コンパクトで天井開口が小さくて済む",
    ],
    cons: [
      "広い空間では温度むらが出やすい",
      "対応エリアが限られる",
    ],
    bestFor: "廊下・細長い店舗・個室・クリニック廊下",
    costRange: "本体・工事 25万〜60万円（1台）",
    maintenanceEase: "普通",
  },
  {
    name: "壁掛け型",
    description: "壁に取り付けるスタンダードなタイプ。家庭用の大型版。",
    pros: [
      "設置工事が簡単で低コスト",
      "天井工事が不要",
      "メンテナンスがしやすい",
      "移設・交換が比較的容易",
    ],
    cons: [
      "壁面スペースを占有する",
      "風向が偏りやすい",
      "大容量モデルは外観が目立つ",
    ],
    bestFor: "小規模店舗・事務所・バックヤード・学校教室",
    costRange: "本体・工事 15万〜40万円（1台）",
    maintenanceEase: "簡単",
  },
  {
    name: "床置き型",
    description: "床置きまたは低位置に設置するタイプ。床面から直接暖気・冷気を送る。",
    pros: [
      "暖房時に足元から暖かくできる",
      "天井・壁工事が不要",
      "設置場所の自由度が高い",
      "高天井の工場・倉庫に対応",
    ],
    cons: [
      "床面積を占有する",
      "冷房時は冷気が足元に溜まりやすい",
      "見た目が大型で圧迫感がある",
    ],
    bestFor: "工場・倉庫・ショールーム・ホテルロビー",
    costRange: "本体・工事 25万〜70万円（1台）",
    maintenanceEase: "簡単",
  },
  {
    name: "天井吊り型",
    description: "天井から吊り下げて設置するタイプ。高天井の大空間向け。",
    pros: [
      "高天井の大空間に対応",
      "床面を占有しない",
      "大容量モデルが揃っている",
    ],
    cons: [
      "設置に専門的な工事が必要",
      "工事費が高い",
      "メンテナンスに高所作業が必要",
    ],
    bestFor: "工場・倉庫・体育館・大型倉庫型小売店",
    costRange: "本体・工事 40万〜120万円（1台）",
    maintenanceEase: "難しい（高所作業）",
  },
];

export default function TypeGuidePage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "ガイド" },
            { label: "機種タイプ比較" },
          ]}
        />

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコンの種類比較ガイド
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          業務用エアコンには大きく分けて「天井カセット型」「壁掛け型」「床置き型」「天井吊り型」があります。それぞれの特徴・メリット・デメリットを詳しく比較し、用途に合った選び方を解説します。
        </p>

        {/* Quick Comparison */}
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#1E40AF] text-white">
                <th className="p-3 text-left">種類</th>
                <th className="p-3 text-center">設置費用</th>
                <th className="p-3 text-center">スペース効率</th>
                <th className="p-3 text-center">メンテ</th>
                <th className="p-3 text-center">おすすめ用途</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["天井カセット（4方向）", "高", "", "普通", "オフィス・店舗"],
                ["天井カセット（2方向）", "中", "", "普通", "廊下・個室"],
                ["壁掛け型", "低", "", "簡単", "小規模・学校"],
                ["床置き型", "中", "", "簡単", "工場・倉庫"],
                ["天井吊り型", "高", "", "難しい", "大型施設"],
              ].map(([type, cost, space, maint, use], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-3 font-medium text-gray-800">{type}</td>
                  <td className="p-3 text-center text-gray-600">{cost}</td>
                  <td className="p-3 text-center text-gray-600">{space}</td>
                  <td className="p-3 text-center text-gray-600">{maint}</td>
                  <td className="p-3 text-center text-gray-600 text-xs">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detailed Cards */}
        <div className="space-y-8">
          {types.map((type) => (
            <div key={type.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <TypeIcon name={type.name} />
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{type.name}</h2>
                  <p className="text-gray-600 text-sm">{type.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-bold text-[#059669] mb-2 text-sm">メリット</h3>
                  <ul className="space-y-1 text-xs text-gray-700">
                    {type.pros.map((p) => (
                      <li key={p} className="flex items-start gap-1">
                        <span className="text-[#059669]"></span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <h3 className="font-bold text-red-500 mb-2 text-sm">デメリット</h3>
                  <ul className="space-y-1 text-xs text-gray-700">
                    {type.cons.map((c) => (
                      <li key={c} className="flex items-start gap-1">
                        <span className="text-red-400"></span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 text-sm">
                <div className="flex-1 bg-[#F1F5F9] rounded-lg p-3">
                  <span className="text-gray-500 text-xs">おすすめ用途</span>
                  <p className="font-semibold text-gray-800">{type.bestFor}</p>
                </div>
                <div className="flex-1 bg-[#F1F5F9] rounded-lg p-3">
                  <span className="text-gray-500 text-xs">費用目安</span>
                  <p className="font-semibold text-[#1E40AF]">{type.costRange}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4 text-sm">
            どの機種タイプが適切か迷ったら、専門業者に相談しましょう
          </p>
          <Link
            href="/ranking/"
            className="inline-block bg-[#1E40AF] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            業者に相談する →
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
