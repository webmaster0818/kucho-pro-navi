import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import companies from "@/data/companies.json";

const industryNav = [
  { slug: "restaurant", label: "飲食店", iconSrc: "/images/icon-restaurant.png", color: "bg-orange-50 border-orange-200 hover:border-orange-400 hover:bg-orange-100", iconBg: "bg-orange-100" },
  { slug: "office", label: "オフィス", iconSrc: "/images/icon-office.png", color: "bg-blue-50 border-blue-200 hover:border-blue-400 hover:bg-blue-100", iconBg: "bg-blue-100" },
  { slug: "factory", label: "工場・倉庫", iconSrc: "/images/icon-factory.png", color: "bg-gray-50 border-gray-200 hover:border-gray-400 hover:bg-gray-100", iconBg: "bg-gray-100" },
  { slug: "clinic", label: "クリニック", iconSrc: "/images/icon-clinic.png", color: "bg-green-50 border-green-200 hover:border-green-400 hover:bg-green-100", iconBg: "bg-green-100" },
  { slug: "shop", label: "小売店舗", iconSrc: "/images/icon-shop.png", color: "bg-purple-50 border-purple-200 hover:border-purple-400 hover:bg-purple-100", iconBg: "bg-purple-100" },
  { slug: "school", label: "学校", iconSrc: "/images/icon-school.png", color: "bg-yellow-50 border-yellow-200 hover:border-yellow-400 hover:bg-yellow-100", iconBg: "bg-yellow-100" },
];

const rankBadge = [
  { label: "1位", bg: "bg-amber-400", text: "text-white", border: "border-amber-400", shadow: "shadow-amber-100" },
  { label: "2位", bg: "bg-slate-400", text: "text-white", border: "border-slate-300", shadow: "shadow-slate-100" },
  { label: "3位", bg: "bg-orange-400", text: "text-white", border: "border-orange-300", shadow: "shadow-orange-100" },
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
        {/* Hero - full-width with background image and overlay */}
        <section
          className="relative min-h-[520px] md:min-h-[600px] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/hero-a.png')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          {/* Navy blue gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(30,64,175,0.88) 0%, rgba(30,58,138,0.80) 60%, rgba(30,64,175,0.65) 100%)",
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-20">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 mb-6 text-sm text-white/90 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
              法人・店舗向け業務用エアコン専門ポータル
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white drop-shadow-lg">
              法人の空調問題を、
              <br />
              <span className="text-amber-300">最適な業者</span>で解決。
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              業務用エアコンの設置・交換・修理業者を徹底比較。<br className="hidden md:block" />
              業種・予算・地域から最適なパートナーを見つけましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ranking/"
                className="bg-[#F59E0B] hover:bg-amber-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg shadow-amber-900/30 hover:shadow-xl hover:-translate-y-0.5"
              >
                業者ランキングを見る →
              </Link>
              <Link
                href="/guide/cost/"
                className="bg-white/15 backdrop-blur-sm border-2 border-white/60 text-white hover:bg-white hover:text-[#1E40AF] font-bold py-4 px-8 rounded-xl text-lg transition-all"
              >
                費用相場を調べる
              </Link>
            </div>
            {/* Stats bar */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10 text-white/80 text-sm">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-white">150<span className="text-base font-bold">社+</span></span>
                <span>掲載業者数</span>
              </div>
              <div className="w-px bg-white/20 hidden md:block"></div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-white">3<span className="text-base font-bold">社</span></span>
                <span>無料見積り比較</span>
              </div>
              <div className="w-px bg-white/20 hidden md:block"></div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-white">全国<span className="text-base font-bold">対応</span></span>
                <span>対応エリア</span>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Nav - colored icon cards */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                業種別に探す
              </h2>
              <p className="text-gray-500 text-sm">お客様の業種に合わせた最適な業者をご紹介</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industryNav.map((item) => (
                <Link
                  key={item.slug}
                  href={`/industry/${item.slug}/`}
                  className={`flex flex-col items-center p-5 rounded-2xl border-2 transition-all group ${item.color}`}
                >
                  <div className={`w-14 h-14 rounded-xl ${item.iconBg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <img src={item.iconSrc} alt="" className="w-8 h-8 inline-block" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-[#1E40AF] text-center leading-tight">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TOP3 - Professional ranking cards */}
        <section className="py-14 px-4 bg-[#F1F5F9]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                おすすめ業者 TOP3
              </h2>
              <p className="text-gray-500 text-sm">編集部が厳選した信頼性の高い業者</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {top3.map((company, index) => (
                <div
                  key={company.slug}
                  className={`bg-white rounded-2xl border-2 p-6 relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl ${rankBadge[index].border} shadow-md ${rankBadge[index].shadow}`}
                >
                  {/* Rank badge */}
                  <div className={`absolute top-0 right-0 ${rankBadge[index].bg} ${rankBadge[index].text} text-xs font-black px-3 py-1 rounded-bl-xl`}>
                    {rankBadge[index].label}
                  </div>
                  {/* Rank number */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-4xl font-black leading-none ${
                        index === 0
                          ? "text-amber-400"
                          : index === 1
                          ? "text-slate-400"
                          : "text-orange-400"
                      }`}
                    >
                      #{index + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-800 text-base leading-tight">{company.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed border-l-2 border-gray-200 pl-3">{company.tagline}</p>
                  <ul className="space-y-2 mb-5">
                    {company.features.slice(0, 3).map((f) => (
                      <li key={f} className="text-xs text-gray-700 flex items-start gap-2 bg-gray-50 rounded-lg px-3 py-2">
                        <span className="text-emerald-500 font-bold mt-0.5 shrink-0"></span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/company/${company.slug}/`}
                    className={`block text-center py-2.5 px-4 rounded-xl text-sm font-bold transition-all ${
                      index === 0
                        ? "bg-[#1E40AF] text-white hover:bg-blue-700 shadow-md shadow-blue-200"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    詳しく見る →
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/ranking/"
                className="inline-flex items-center gap-2 text-[#1E40AF] font-semibold hover:underline text-sm"
              >
                すべてのランキングを見る →
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                業者比較一覧
              </h2>
              <p className="text-gray-500 text-sm">主要業者のサービス内容を一目で比較</p>
            </div>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#1E40AF] text-white">
                    <th className="p-4 text-left font-semibold">業者名</th>
                    <th className="p-4 text-left font-semibold">対応エリア</th>
                    <th className="p-4 text-left font-semibold">平均費用</th>
                    <th className="p-4 text-left font-semibold">保証</th>
                    <th className="p-4 text-left font-semibold">詳細</th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map((company, index) => (
                    <tr
                      key={company.slug}
                      className={`border-t border-gray-100 hover:bg-blue-50/40 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}
                    >
                      <td className="p-4 font-semibold text-gray-800">{company.name}</td>
                      <td className="p-4 text-gray-600">{company.coverage}</td>
                      <td className="p-4 text-gray-600 font-medium">
                        ¥{company.avgCost.toLocaleString()}〜
                      </td>
                      <td className="p-4 text-gray-600 text-xs">{company.warranty}</td>
                      <td className="p-4">
                        <Link
                          href={`/company/${company.slug}/`}
                          className="inline-flex items-center gap-1 text-[#1E40AF] hover:text-blue-800 font-semibold text-xs bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors"
                        >
                          詳しく見る
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
        <section className="py-14 px-4 bg-[#F1F5F9]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                よくある質問
              </h2>
              <p className="text-gray-500 text-sm">業務用エアコンに関するご質問</p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <div className="p-5">
                    <h3 className="font-bold text-gray-800 mb-3 flex items-start gap-3">
                      <span className="shrink-0 w-7 h-7 rounded-full bg-[#1E40AF] text-white text-xs font-black flex items-center justify-center mt-0.5">Q</span>
                      <span>{faq.q}</span>
                    </h3>
                    <div className="flex items-start gap-3 pl-0">
                      <span className="shrink-0 w-7 h-7 rounded-full bg-emerald-500 text-white text-xs font-black flex items-center justify-center mt-0.5">A</span>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-14 px-4 bg-[#1E40AF]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              まず無料で業者を比較しましょう
            </h2>
            <p className="text-blue-200 mb-8 text-sm md:text-base leading-relaxed">
              最大3社から無料で見積もりを取得。費用感を把握してから業者を選べます。
            </p>
            <Link
              href="/ranking/"
              className="inline-block bg-[#F59E0B] hover:bg-amber-500 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              おすすめ業者ランキングを見る →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
