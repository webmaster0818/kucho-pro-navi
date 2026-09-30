import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { KW_CLASSES, kwNeighbors, type KwClass } from "@/data/kw-classes";
import { getHpClass } from "@/data/horsepower-classes";

export default function KwClassArticle({ c }: { c: KwClass }) {
  const { prev, next } = kwNeighbors(c.slug);
  const hp = c.hpSlug ? getHpClass(c.hpSlug) : undefined;
  const exact = c.kw === c.classKw;

  const faqs = [
    {
      q: `${c.kw}は何馬力ですか？`,
      a: exact
        ? `${c.kw}は1馬力≒2.8kWで換算すると${c.calcHp}です。業務用エアコンの機種クラスでは${c.classHp}（${c.classModel}）が${c.kw}そのものにあたります。`
        : `${c.kw}は1馬力≒2.8kWで換算すると${c.calcHp}です。ただし業務用エアコンは連続した能力ではなくクラスで展開されるため、実際に選ぶ機種は${c.classHp}（${c.classModel}・${c.classKw}）が目安になります。`,
    },
    {
      q: `${c.kw}ちょうどの業務用エアコンはありますか？`,
      a: exact
        ? `あります。${c.classModel}が冷房能力${c.classKw}のクラスです。P形の型番は「冷房能力kW×10」の規則なので、${c.classModel}＝${c.classKw}と読み替えられます。`
        : `${c.kw}ちょうどのクラスはありません。業務用エアコンはP形（冷房能力kW×10）のクラス単位で展開されるため、${c.kw}が必要な場合は能力が下回らない${c.classKw}の${c.classModel}を選ぶのが基本です。`,
    },
    {
      q: `なぜ「${c.calcHp}」と「${c.classHp}」の2つの数字が出てくるのですか？`,
      a: `${c.calcHp}は1馬力≒2.8kWで割った計算上の値、${c.classHp}は実際に販売されている機種クラス（${c.classModel}）の呼び方です。見積書や仕様書では機種クラス側の表記が使われるため、業者とやり取りするときは型番（${c.classModel}）で確認すると行き違いがありません。`,
    },
    ...(c.area
      ? [
          {
            q: `${c.kw}クラスは何坪まで対応できますか？`,
            a: `${c.kw}に対応する機種クラス${c.classHp}（${c.classModel}）の目安は${c.area}です。ただし厨房の有無・窓の向き・天井高・人の多さ・機器の発熱・建物の断熱性で必要能力は変わるため、目安として扱ってください。`,
          },
        ]
      : []),
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "ガイド" },
            { label: "馬力選びガイド", href: "/guide/horsepower/" },
            { label: `${c.kw}は何馬力` },
          ]}
        />

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {c.kw}は何馬力？｜業務用エアコンの換算{c.calcHp}・機種クラスは{c.classHp}（{c.classModel}）
        </h1>

        <div className="bg-[#1E40AF] text-white rounded-xl p-6 mb-8">
          <p className="text-sm opacity-90 mb-2">結論</p>
          <p className="text-xl font-bold mb-3">
            {c.kw} ＝ 換算{c.calcHp} ／ 選ぶ機種クラスは{c.classHp}（{c.classModel}・{c.classKw}）
          </p>
          <p className="text-sm leading-relaxed">
            馬力の換算式は <strong>馬力 = 冷房能力kW ÷ 2.8</strong> です（1馬力≒2.8kW／メーカー公式の換算値）。
            {exact
              ? `${c.kw}はそのまま${c.classModel}のクラスにあたります。`
              : `ただし業務用エアコンは連続した能力ではなくクラスで展開されるため、${c.kw}が必要なときは能力が下回らない${c.classKw}の${c.classModel}を選ぶのが基本です。`}
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">{c.kw}に出てくる2つの数字</h2>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            「{c.kw}は何馬力か」を調べると、数値が2種類出てきて混乱しやすい部分です。用途が違うので、分けて考えると整理できます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1E40AF] text-white">
                  <th className="p-3 text-left">考え方</th>
                  <th className="p-3 text-left">{c.kw}の場合</th>
                  <th className="p-3 text-left">使う場面</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 font-semibold text-[#1E40AF]">換算値（÷2.8）</td>
                  <td className="p-3 font-medium text-gray-800">{c.calcHp}</td>
                  <td className="p-3 text-gray-600">おおよその能力を把握するとき</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-semibold text-[#1E40AF]">機種クラス（P形）</td>
                  <td className="p-3 font-medium text-gray-800">
                    {c.classHp}（{c.classModel}・{c.classKw}）
                  </td>
                  <td className="p-3 text-gray-600">実際に機種を選ぶとき・見積もりを取るとき</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 leading-relaxed">
            P形の型番は「冷房能力kW×10」の規則です（{c.classModel} ＝ {c.classKw}）。見積書や仕様書ではこの型番で書かれることが多いため、業者とやり取りするときは型番で確認すると行き違いがありません。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">{c.kw}クラスの適用面積と主な用途</h2>
          {c.area ? (
            <>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="mb-3">
                  <span className="font-semibold text-[#1E40AF]">適用面積の目安：</span>
                  {c.area}
                  <span className="text-gray-500 text-sm">（機種クラス{c.classHp}・{c.classModel}の目安）</span>
                </p>
                <p>
                  <span className="font-semibold text-[#1E40AF]">主な用途：</span>
                  {c.usage}
                </p>
              </div>
              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                これは標準的な条件での目安です。同じ坪数でも、下の条件に当てはまると必要な能力は上がります。
              </p>
            </>
          ) : (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-sm text-amber-900 leading-relaxed">{c.areaNote}</p>
            </div>
          )}
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">必要な能力が上振れする条件</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>・厨房がある飲食店（熱・油煙・水蒸気の負荷が大きい）</li>
            <li>・南向き・西向きの大きな窓がある（直射日光の熱負荷）</li>
            <li>・天井が高い（4m以上。温度のむらが出やすい）</li>
            <li>・人が多く集まる場所（人体の発熱が積み上がる）</li>
            <li>・OA機器やサーバーが多い（機器の発熱）</li>
            <li>・断熱性の低い古い建物（熱の出入りが大きい）</li>
          </ul>
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            これらに当てはまる場合、計算上は{c.kw}で足りていても、実際にはひとつ上のクラスが必要になることがあります。補正の考え方と計算例は
            <Link href="/guide/horsepower/" className="text-[#1E40AF] underline">
              馬力選びガイド
            </Link>
            にまとめています。
          </p>
        </section>

        {hp && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">対応する馬力クラスを詳しく見る</h2>
            <Link
              href={`/guide/horsepower/${hp.slug}/`}
              className="block border border-gray-200 rounded-xl p-5 hover:border-[#1E40AF] transition"
            >
              <p className="text-xs text-gray-500 mb-1">{c.kw}で選ぶ機種クラス</p>
              <p className="font-bold text-[#1E40AF] mb-1">
                {hp.hp}（{hp.classKw}・{hp.model}）
              </p>
              <p className="text-sm text-gray-600">適用面積 {hp.area}／{hp.usage}</p>
            </Link>
          </section>
        )}

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">前後のkWと比べる</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {prev && (
              <Link
                href={`/guide/horsepower/${prev.slug}/`}
                className="block border border-gray-200 rounded-xl p-5 hover:border-[#1E40AF] transition"
              >
                <p className="text-xs text-gray-500 mb-1">ひとつ小さい能力</p>
                <p className="font-bold text-[#1E40AF] mb-1">{prev.kw}は何馬力？</p>
                <p className="text-sm text-gray-600">
                  換算{prev.calcHp}／機種クラス{prev.classHp}（{prev.classModel}）
                </p>
              </Link>
            )}
            {next && (
              <Link
                href={`/guide/horsepower/${next.slug}/`}
                className="block border border-gray-200 rounded-xl p-5 hover:border-[#1E40AF] transition"
              >
                <p className="text-xs text-gray-500 mb-1">ひとつ大きい能力</p>
                <p className="font-bold text-[#1E40AF] mb-1">{next.kw}は何馬力？</p>
                <p className="text-sm text-gray-600">
                  換算{next.calcHp}／機種クラス{next.classHp}（{next.classModel}）
                </p>
              </Link>
            )}
          </div>
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

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">kWから馬力を調べる（一覧）</h2>
          <div className="flex flex-wrap gap-2">
            {KW_CLASSES.map((k) => (
              <Link
                key={k.slug}
                href={`/guide/horsepower/${k.slug}/`}
                className={`px-4 py-2 rounded-lg text-sm border transition ${
                  k.slug === c.slug
                    ? "bg-[#1E40AF] text-white border-[#1E40AF]"
                    : "border-gray-200 text-gray-700 hover:border-[#1E40AF]"
                }`}
              >
                {k.kw}は何馬力？
              </Link>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-5 leading-relaxed">
            逆に「◯馬力は何kWか」を調べたい場合や、坪数・用途から必要な能力を計算したい場合は
            <Link href="/guide/horsepower/" className="text-[#1E40AF] underline">
              kW・馬力換算早見表と選び方ガイド
            </Link>
            をご覧ください。
          </p>
        </section>

        <div className="text-center mb-10">
          <Link
            href="/ranking/"
            className="inline-block bg-[#1E40AF] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            能力選定を相談できる業者を探す →
          </Link>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed">
          出典: ダイキン公式「1馬力≒2.8kW」（ac.daikin.co.jp 業務用エアコンコラム）／P形と馬力の対応は三菱電機Mr.SLIM形名検索・パナソニック公式コラム・ダイキン公式で確認（いずれも2026年7月4日確認）。換算値・機種クラス・適用面積は当サイトの
          <Link href="/guide/horsepower/" className="underline">
            kW・馬力換算早見表
          </Link>
          と同一の掲載値です。
          <br />
          ※チラー（冷却水熱源機）など一部の機種カテゴリでは「1馬力=2.5kW」の換算が使われる場合があります（東芝キヤリア空調機器ハンドブックで確認）。本ページは店舗・オフィス用パッケージエアコンの換算です。
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
