import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { HP_CLASSES, getHpClass, neighbors } from "@/data/horsepower-classes";
import { KW_CLASSES, getKwClass } from "@/data/kw-classes";
import KwClassArticle from "@/components/KwClassArticle";

type Props = { params: Promise<{ hp: string }> };

export function generateStaticParams() {
  return [
    ...HP_CLASSES.map((h) => ({ hp: h.slug })),
    ...KW_CLASSES.map((k) => ({ hp: k.slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { hp } = await params;

  // kW→馬力の逆引きページ
  const kw = getKwClass(hp);
  if (kw) {
    const exact = kw.kw === kw.classKw;
    return {
      alternates: { canonical: `/guide/horsepower/${kw.slug}/` },
      title: `${kw.kw}は何馬力？業務用エアコンの換算は${kw.calcHp}・機種クラスは${kw.classHp}（${kw.classModel}）`,
      description: `業務用エアコンの${kw.kw}は、1馬力≒2.8kWで換算すると${kw.calcHp}です。${
        exact
          ? `機種クラスでは${kw.classHp}（${kw.classModel}）が${kw.kw}そのものにあたります。`
          : `実際に選ぶ機種クラスは${kw.classHp}（${kw.classModel}・${kw.classKw}）が目安で、換算値とずれる理由も説明します。`
      }${kw.area ? `適用面積の目安は${kw.area}、主な用途は${kw.usage}です。` : ""}メーカー公式の換算値をもとに解説します。`,
    };
  }

  const c = getHpClass(hp);
  if (!c) return {};
  return {
    alternates: { canonical: `/guide/horsepower/${c.slug}/` },
    title: c.title ?? `業務用エアコン${c.hp}は何kW？｜${c.classKw}（${c.model}）・適用${c.area}の目安`,
    description: `業務用エアコンの${c.hp}は、機種クラスで${c.classKw}（${c.model}）です。1馬力≒2.8kWの単純換算では${c.calcKw}で、実際に選ぶ機種クラスとの違いも説明します。適用面積は${c.area}、主な用途は${c.usage}です。必要馬力が上振れする条件もご説明します。`,
  };
}

export default async function HpClassPage({ params }: Props) {
  const { hp } = await params;

  const kw = getKwClass(hp);
  if (kw) return <KwClassArticle c={kw} />;

  const c = getHpClass(hp);
  if (!c) notFound();
  const { prev, next } = neighbors(c.slug);

  const faqs = [
    {
      q: `業務用エアコンの${c.hp}は何kWですか？`,
      a: c.sameAsClass
        ? `${c.hp}の機種クラスは${c.classKw}（${c.model}）です。1馬力≒2.8kWで単純換算しても${c.calcKw}となり、機種クラスの冷房能力と一致します。`
        : `${c.hp}の機種クラスは${c.classKw}（${c.model}）です。1馬力≒2.8kWで単純に計算すると${c.calcKw}になりますが、機種は連続した能力ではなくクラスで展開されるため、実際に選ぶのは${c.classKw}の${c.model}になります。`,
    },
    { q: `${c.hp}は何坪まで対応できますか？`, a: `目安は${c.area}です。ただし坪数だけでは決まらず、厨房の有無・窓の向き・天井高・人の多さ・機器の発熱・建物の断熱性で必要能力は変わります。下記の「必要な馬力が上振れする条件」をご確認ください。` },
    { q: `${c.hp}はどんな場所で使われますか？`, a: `${c.usage}などで使われることが多いクラスです。同じ面積でも用途によって熱負荷が変わるため、実際の選定は現地調査のうえでご判断ください。` },
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ガイド" }, { label: "馬力選びガイド", href: "/guide/horsepower/" }, { label: `${c.hp}` }]} />

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコン{c.hp}は何kW？｜{c.classKw}（{c.model}）と適用面積の目安
        </h1>

        <div className="bg-[#1E40AF] text-white rounded-xl p-6 mb-8">
          <p className="text-sm opacity-90 mb-2">冷房能力と機種クラスの要点</p>
          <p className="text-xl font-bold mb-3">
            {c.hp} ＝ 機種クラス {c.classKw}（{c.model}）
          </p>
          <p className="text-sm leading-relaxed">
            1馬力≒2.8kWで単純に計算すると <strong>{c.calcKw}</strong> です。
            {c.sameAsClass
              ? "この値は機種クラスの冷房能力と一致します。"
              : `機種は連続した能力ではなくクラスで展開されるため、実際に選ぶのは${c.classKw}の${c.model}になります。`}
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">2つの「{c.hp}」の違い</h2>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            業務用エアコンの馬力を調べると、2種類の数値が示されます。それぞれ用途が異なるため、以下のとおり分けてご説明します。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1E40AF] text-white">
                  <th className="p-3 text-left">考え方</th>
                  <th className="p-3 text-left">{c.hp}の値</th>
                  <th className="p-3 text-left">使う場面</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 font-semibold text-[#1E40AF]">換算値（÷2.8）</td>
                  <td className="p-3 font-medium text-gray-800">{c.calcKw}</td>
                  <td className="p-3 text-gray-600">おおよその能力を把握するとき</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-semibold text-[#1E40AF]">機種クラス（P形）</td>
                  <td className="p-3 font-medium text-gray-800">{c.classKw}（{c.model}）</td>
                  <td className="p-3 text-gray-600">実際に機種を選ぶとき・見積もりを取るとき</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 leading-relaxed">
            P形の型番は「冷房能力kW×10」の規則です（{c.model} ＝ {c.classKw}）。見積書や仕様書ではこの型番で記載されることが多いため、業者とのやり取りでは型番で確認することをおすすめします。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">{c.hp}の適用面積と主な用途</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="mb-3"><span className="font-semibold text-[#1E40AF]">適用面積の目安：</span>{c.area}</p>
            <p><span className="font-semibold text-[#1E40AF]">主な用途：</span>{c.usage}</p>
          </div>
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            この面積は標準的な条件での目安です。同じ坪数でも、以下の条件に当てはまる場合は必要な能力が上がります。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">必要な馬力が上振れする条件</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>・厨房がある飲食店（熱・油煙・水蒸気の負荷が大きい）</li>
            <li>・南向き・西向きの大きな窓がある（直射日光の熱負荷）</li>
            <li>・天井が高い（4m以上。温度のむらが出やすい）</li>
            <li>・人が多く集まる場所（人体の発熱が加わる）</li>
            <li>・OA機器やサーバーが多い（機器の発熱）</li>
            <li>・断熱性の低い古い建物（熱の出入りが大きい）</li>
          </ul>
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            これらに当てはまる場合、{c.area}の範囲内でも{c.hp}では能力が不足することがあります。
            補正の考え方と計算例は
            <Link href="/guide/horsepower/" className="text-[#1E40AF] underline">馬力選びガイド</Link>
            にまとめています。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">前後のクラスとの比較</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {prev && (
              <Link href={`/guide/horsepower/${prev.slug}/`} className="block border border-gray-200 rounded-xl p-5 hover:border-[#1E40AF] transition">
                <p className="text-xs text-gray-500 mb-1">ひとつ下のクラス</p>
                <p className="font-bold text-[#1E40AF] mb-1">{prev.hp}（{prev.classKw}・{prev.model}）</p>
                <p className="text-sm text-gray-600">適用面積 {prev.area}</p>
              </Link>
            )}
            {next && (
              <Link href={`/guide/horsepower/${next.slug}/`} className="block border border-gray-200 rounded-xl p-5 hover:border-[#1E40AF] transition">
                <p className="text-xs text-gray-500 mb-1">ひとつ上のクラス</p>
                <p className="font-bold text-[#1E40AF] mb-1">{next.hp}（{next.classKw}・{next.model}）</p>
                <p className="text-sm text-gray-600">適用面積 {next.area}</p>
              </Link>
            )}
          </div>
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            判断に迷う場合は、上のクラスを選ぶことで能力不足を避けられます。ただし本体価格と電気代が上がるため、現地調査で熱負荷を確認したうえでご判断ください。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="border border-gray-200 rounded-xl p-5">
                <p className="font-bold text-gray-900 mb-2">{f.q}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">馬力クラス一覧</h2>
          <div className="flex flex-wrap gap-2">
            {HP_CLASSES.map((h) => (
              <Link
                key={h.slug}
                href={`/guide/horsepower/${h.slug}/`}
                className={`px-4 py-2 rounded-lg text-sm border transition ${
                  h.slug === c.slug ? "bg-[#1E40AF] text-white border-[#1E40AF]" : "border-gray-200 text-gray-700 hover:border-[#1E40AF]"
                }`}
              >
                {h.hp}
              </Link>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-5 leading-relaxed">
            kWから馬力を逆に調べたい場合や、坪数・用途から必要な馬力を計算したい場合は
            <Link href="/guide/horsepower/" className="text-[#1E40AF] underline">kW・馬力換算早見表と選び方ガイド</Link>
            をご覧ください。
          </p>
        </section>

        <p className="text-xs text-gray-500 leading-relaxed">
          出典: ダイキン公式「1馬力≒2.8kW」（ac.daikin.co.jp 業務用エアコンコラム）／P形と馬力の対応は三菱電機Mr.SLIM形名検索・パナソニック公式コラム・ダイキン公式で確認（いずれも2026年7月4日確認）。適用面積と用途の目安は当サイトの馬力選びガイドと同一の基準です。
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
