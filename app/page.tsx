import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import companies from "@/data/companies.json";

const industryNav = [
  { slug: "restaurant", label: "飲食店", icon: "🍽️" },
  { slug: "office", label: "オフィス", icon: "🏢" },
  { slug: "factory", label: "工場・倉庫", icon: "🏭" },
  { slug: "clinic", label: "クリニック", icon: "🏥" },
  { slug: "shop", label: "小売店舗", icon: "🛍️" },
  { slug: "school", label: "学校", icon: "🏫" },
];

const faqs = [
  {
    q: "業務用エアコンの工事費はどのくらいかかりますか？",
    a: "規模や機種によって異なりますが、小規模オフィス（10〜20坪）で機器代・工事費込み30〜80万円が目安です。飲食店や工場など特殊な環境では追加費用が発生する場合があります。複数業者から見積もりを取ることで適正価格がわかります。",
  },
  {
    q: "業務用エアコンの寿命はどのくらいですか？",
    a: "適切なメンテナンスを行えば15〜20年程度使用できます。ただし10年を過ぎると部品供給が難しくなるケースもあり、省エネ性能も大幅に向上しているため、10〜15年を目安に交換を検討することをお勧めします。",
  },
  {
    q: "複数の業者に見積もりを依頼するメリットはありますか？",
    a: "非常に大きいメリットがあります。同じ工事内容でも業者によって20〜40%の価格差が生じることがあります。また複数の提案を比較することで、最適な機器選定や工事方法を選べます。最低3社から見積もりを取ることを推奨します。",
  },
  {
    q: "業務用エアコンにはどんな種類がありますか？",
    a: "主に天井カセット型（4方向・2方向）、壁掛け型、床置き型、天井吊り下げ型があります。店舗・オフィスでは天井カセット型が主流で、スペースを有効活用しながら均一に冷暖房できます。用途や天井高に合わせて最適なタイプを選ぶことが重要です。",
  },
  {
    q: "リース契約と購入はどちらがお得ですか？",
    a: "初期費用を抑えたい場合はリース、長期的なコストを重視する場合は購入が有利です。リースは月額固定費で資金繰りが安定しますが、総支払額は購入より高くなります。税務上の扱いや資金状況に合わせて選択しましょう。",
  },
];

export default function HomePage() {
  const top3 = companies.slice(0, 3);

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#1E40AF] to-[#1e3a8a] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              法人の空調問題を、
              <br />
              最適な業者で解決。
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              業務用エアコンの設置・交換・修理業者を徹底比較。業種・予算・地域から最適なパートナーを見つけましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ranking/"
                className="bg-[#F59E0B] hover:bg-amber-500 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                業者ランキングを見る
              </Link>
              <Link
                href="/guide/cost/"
                className="bg-white text-[#1E40AF] hover:bg-blue-50 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                費用相場を調べる
              </Link>
            </div>
          </div>
        </section>

        {/* Industry Nav */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              業種別に探す
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industryNav.map((item) => (
                <Link
                  key={item.slug}
                  href={`/industry/${item.slug}/`}
                  className="flex flex-col items-center p-4 rounded-xl border-2 border-gray-100 hover:border-[#1E40AF] hover:bg-blue-50 transition-all group"
                >
                  <span className="text-4xl mb-2">{item.icon}</span>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-[#1E40AF]">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TOP3 */}
        <section className="py-12 px-4 bg-[#F1F5F9]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              おすすめ業者 TOP3
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {top3.map((company, index) => (
                <div
                  key={company.slug}
                  className={`bg-white rounded-2xl shadow-sm border-2 p-6 ${
                    index === 0
                      ? "border-[#F59E0B]"
                      : index === 1
                      ? "border-gray-300"
                      : "border-orange-300"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-2xl font-black ${
                        index === 0
                          ? "text-[#F59E0B]"
                          : index === 1
                          ? "text-gray-400"
                          : "text-orange-400"
                      }`}
                    >
                      #{index + 1}
                    </span>
                    <h3 className="font-bold text-gray-800">{company.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{company.tagline}</p>
                  <ul className="space-y-1 mb-4">
                    {company.features.slice(0, 3).map((f) => (
                      <li key={f} className="text-xs text-gray-600 flex items-center gap-1">
                        <span className="text-[#059669]">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/company/${company.slug}/`}
                    className="block text-center bg-[#1E40AF] text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                  >
                    詳しく見る
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              業者比較一覧
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#1E40AF] text-white">
                    <th className="p-3 text-left">業者名</th>
                    <th className="p-3 text-left">対応エリア</th>
                    <th className="p-3 text-left">平均費用</th>
                    <th className="p-3 text-left">保証</th>
                    <th className="p-3 text-left">詳細</th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map((company, index) => (
                    <tr
                      key={company.slug}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="p-3 font-semibold text-gray-800">{company.name}</td>
                      <td className="p-3 text-gray-600">{company.coverage}</td>
                      <td className="p-3 text-gray-600">
                        ¥{company.avgCost.toLocaleString()}〜
                      </td>
                      <td className="p-3 text-gray-600 text-xs">{company.warranty}</td>
                      <td className="p-3">
                        <Link
                          href={`/company/${company.slug}/`}
                          className="text-[#1E40AF] hover:underline font-medium"
                        >
                          見る →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 px-4 bg-[#F1F5F9]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              よくある質問
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
                    <span className="text-[#1E40AF] font-black">Q.</span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed pl-6">
                    <span className="font-bold text-[#059669] mr-1">A.</span>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
