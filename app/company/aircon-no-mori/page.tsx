import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンの森の口コミ・評判は？料金・対応エリア・工事の流れを徹底調査【2026年7月】｜空調プロナビ",
  description:
    "激安エアコン通販「エアコンの森」（運営：株式会社サンゲート）の口コミ・評判をまとめました。実際の利用者の声、価格・配送スピード、工事手配の仕組み、対応エリア、メリット・デメリットまで中立的に解説します。",
  alternates: { canonical: "/company/aircon-no-mori" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "エアコンの森とは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "良い口コミ・評判" },
  { id: "bad", label: "気になる口コミ・評判" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "price", label: "料金・工事手配の仕組み" },
  { id: "flow", label: "注文から設置までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "summary-last", label: "まとめ" },
];

const goodReviews = [
  {
    body:
      "スピード・対応とも大手量販店以上でした。注文後の連絡も早く、安心してお任せできました。",
    who: "購入者（★5）",
    source: "楽天 みんなのレビュー",
  },
  {
    body:
      "価格がリーズナブルで大満足です。他店より安く手に入り、配送もスムーズでした。",
    who: "購入者（★5）",
    source: "楽天 みんなのレビュー",
  },
  {
    body:
      "他で見つからなかった機種をこの価格で買えて助かりました。発送も思ったより早かったです。",
    who: "購入者（★5）",
    source: "価格.com 利用者の口コミ",
  },
  {
    body:
      "問い合わせへの返信が丁寧で、機種選びの相談にも親切に答えてもらえました。",
    who: "購入者（★5）",
    source: "Yahoo!ショッピング 店舗評価",
  },
];

const badReviews = [
  {
    body:
      "繁忙期に注文したところ、工事の日程が3週間ほど先になりました。急ぎの方は時期に余裕を持った方が良さそうです。",
    who: "購入者（★2相当の指摘を要約）",
    source: "楽天 みんなのレビュー",
  },
  {
    body:
      "発送後はキャンセルできないため、機種や数量は注文前にしっかり確認しておく必要がありました。",
    who: "購入者（★2）",
    source: "価格.com 利用者の口コミ",
  },
];

const faqs = [
  {
    q: "エアコンの森は業務用エアコンも扱っていますか？",
    a: "家庭用エアコンの通販を中心に展開していますが、業務用エアコンの取り扱いもあります。設置場所や能力に合った機種を相談したうえで注文するのがおすすめです。",
  },
  {
    q: "工事も依頼できますか？",
    a: "本体の販売に加えて、設置工事の手配にも対応しています。地域の提携工事店が施工を担当する体制のため、エリアや時期によって対応スピードに差が出る場合があります。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "通販のため本体配送は全国に対応していますが、工事手配の可否は地域によって異なります。注文前に設置先の住所で工事に対応できるか確認しておくと安心です。",
  },
  {
    q: "繁忙期の納期はどのくらいですか？",
    a: "夏前など需要が集中する時期は、工事日程が3週間ほど先になることがあると口コミでも指摘されています。シーズン前の早めの注文がおすすめです。",
  },
  {
    q: "運営会社はどこですか？",
    a: "「エアコンの森」は、2008年に設立された株式会社サンゲートが運営する激安エアコン通販サイトです。低価格と配送スピードを強みに展開しています。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "エアコンの森の口コミ・評判は？料金・対応エリア・工事の流れを徹底調査",
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
  author: { "@type": "Organization", name: "空調プロナビ編集部" },
  publisher: { "@type": "Organization", name: "空調プロナビ" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function Stars({ n }: { n: number }) {
  return (
    <span className="text-amber-500 tracking-tight" aria-hidden>
      {"★".repeat(n)}
      <span className="text-slate-300">{"★".repeat(5 - n)}</span>
    </span>
  );
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumb
        items={[
          { label: "ランキング", href: "/ranking/" },
          { label: "エアコンの森の口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        {/* Eyecatch / Header */}
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-3">
            エアコン通販・業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンの森の口コミ・評判は？
            <br className="hidden md:block" />
            料金・対応エリア・工事の流れを徹底調査
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>空調プロナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-06-10">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image
              src="/images/hero-a.png"
              alt="店舗やオフィスに設置されるエアコンのイメージ"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>

        {/* Lead */}
        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンを少しでも安く、早く手に入れたいとき、通販という選択肢が気になる方は多いはずです。
            この記事では、激安エアコン通販として知られる
            <strong className="font-semibold text-slate-900">エアコンの森</strong>
            （運営：株式会社サンゲート）について、実際に公開されている利用者の口コミ、価格や配送スピード、工事手配の仕組み、対応エリア、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、各掲載サイトで公開されている内容を出典付きで引用・要約したものです。料金や対応内容は時期・地域・在庫状況により変わるため、最新の情報は公式サイトや注文前の確認でご確認ください（調査時点：2026年6月）。
          </p>
        </div>


        {/* 結論即答 */}
        <div className="max-w-3xl mx-auto px-5 pt-8">
          <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-6">
            <p className="font-bold text-teal-800 mb-2">結論：エアコンの森の評判は？</p>
            <p className="text-[0.95rem] leading-7 text-slate-700">
              エアコンの森は<strong className="font-semibold">激安エアコン通販</strong>（運営：株式会社サンゲート）で、公開されている口コミでは<strong className="font-semibold">価格の安さ・発送や連絡の速さを評価する声が中心</strong>です。一方、繁忙期は工事日程が数週間先になったという声もあり、急ぎの導入は時期に余裕を持つのがポイントです。詳しくは<a href="#good" className="text-teal-700 underline underline-offset-4">実際の口コミ</a>と<a href="#price" className="text-teal-700 underline underline-offset-4">料金の仕組み</a>をご覧ください。
            </p>
          </div>
        </div>

        {/* TOC */}
        <nav aria-label="目次" className="max-w-3xl mx-auto px-5 mt-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
            <p className="text-sm font-bold text-slate-700 mb-3 tracking-wide">目次</p>
            <ol className="space-y-2 text-[0.95rem] text-slate-700">
              {toc.map((t, i) => (
                <li key={t.id} className="flex gap-3">
                  <span className="text-teal-600 font-semibold tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <a href={`#${t.id}`} className="hover:text-teal-700 hover:underline underline-offset-4">
                    {t.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          {/* Summary */}
          <section id="summary" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              エアコンの森とは
            </h2>
            <p className="leading-8 text-slate-700">
              エアコンの森は、家庭用を中心に
              <strong className="font-semibold">エアコン本体を低価格で販売する通販サイト</strong>
              です。運営は、2008年に設立された株式会社サンゲート。低価格と配送スピードを強みに、本体販売に加えて設置工事の手配にも対応しています。家庭用が中心ですが、業務用エアコンの取り扱いもあります。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              「とにかく安く買いたい」「すぐに届けてほしい」というニーズに応える品揃えと価格設定が特徴で、楽天・Yahoo!ショッピング・価格.comなどでも多くの利用者の声が寄せられています。
            </p>
          </section>

          {/* Company table */}
          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              運営会社・基本情報
            </h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "エアコンの森（激安エアコン通販）"],
                    ["運営会社", "株式会社サンゲート"],
                    ["設立", "2008年"],
                    ["取り扱い", "家庭用エアコン中心（業務用も取り扱い）＋工事手配"],
                    ["対応エリア", "本体配送は全国／工事手配は地域により対応（要確認）"],
                    ["強み", "低価格・配送スピード"],
                    ["販売チャネル", "公式サイト／楽天／Yahoo!ショッピング ほか"],
                    ["公式サイト", "https://www.airconnomori.com/"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">
                        {k}
                      </th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              出典：エアコンの森公式サイト（会社情報）。取り扱い内容・対応エリア等は変更される場合があります。
            </p>
          </section>

          {/* Good reviews */}
          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              良い口コミ・評判
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              公開されている口コミで多く見られたのは、
              <strong className="font-semibold">価格の安さと配送・対応のスピード</strong>
              を評価する声です。「大手量販店以上に早かった」「リーズナブルで大満足」といった、コストパフォーマンスを高く評価するコメントが目立ちました。
            </p>
            <div className="grid gap-4">
              {goodReviews.map((r, i) => (
                <figure key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
                  <Stars n={5} />
                  <blockquote className="mt-3 text-slate-800 leading-7">「{r.body}」</blockquote>
                  <figcaption className="mt-3 text-sm text-slate-500">
                    {r.who}
                    <span className="block text-xs text-slate-400 mt-0.5">出典：{r.source}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-400">
              ※楽天・Yahoo!ショッピング・価格.comの評価は、主に本体販売（通販）に対するものです。設置工事そのものの評価とは限らないため、出典を明記したうえで参考としてご覧ください。
            </p>
          </section>

          {/* Mid image */}
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image
              src="/images/hero-b.png"
              alt="壁に設置されたエアコンと整った室内空間"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          {/* Bad reviews */}
          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              気になる口コミ・評判
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              一方で、
              <strong className="font-semibold">繁忙期の工事日程と、発送後のキャンセル不可</strong>
              に関する声も見られました。夏前など需要が集中する時期は工事まで時間がかかることがあるようです。気になる点も把握したうえで、注文前にスケジュールや機種・数量を確認しておくと安心です。
            </p>
            <div className="grid gap-4">
              {badReviews.map((r, i) => (
                <figure key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <Stars n={2} />
                  <blockquote className="mt-3 text-slate-700 leading-7">「{r.body}」</blockquote>
                  <figcaption className="mt-3 text-sm text-slate-500">
                    {r.who}
                    <span className="block text-xs text-slate-400 mt-0.5">出典：{r.source}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* Merit / Demerit */}
          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              メリット・デメリット
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-teal-100 bg-teal-50/60 p-6">
                <h3 className="font-bold text-teal-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>本体価格が安く、コストパフォーマンスが高い</li>
                  <li>配送スピードが速く、急ぎのときに頼りやすい</li>
                  <li>本体販売に加えて工事手配にも対応している</li>
                  <li>楽天・Yahoo!ショッピングなど普段使いのモールでも購入できる</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>繁忙期は工事日程が3週間ほど先になることがある</li>
                  <li>発送後はキャンセルできないため、注文前の確認が必須</li>
                  <li>工事は地域の提携工事店が担当するため、対応に地域差が出ることがある</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Fit */}
          <section id="fit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              向いている人・向いていない人
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いている人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>とにかく本体を安く手に入れたい人</li>
                  <li>機種が決まっていて、自分で選んで注文できる人</li>
                  <li>シーズン前に余裕を持って準備できる人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>繁忙期に最短で工事まで終わらせたい急ぎの人</li>
                  <li>機種選びから工事まで一括で手厚く相談したい人</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Price */}
          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              料金・工事手配の仕組み
            </h2>
            <p className="leading-8 text-slate-700">
              エアコンの森は、本体を低価格で販売する通販が中心で、設置工事は
              <strong className="font-semibold">地域の提携工事店に手配する仕組み</strong>
              です。本体価格の安さが大きな魅力ですが、設置には別途工事費がかかるため、トータルの費用は「本体＋工事費」で考える必要があります。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              正確な総額を把握するには、設置場所の条件（配管の長さ、既存機の撤去有無など）を伝えたうえで、工事費まで含めた見積もりを確認するのが確実です。他社の通販・工事業者と比べて、本体価格・工事費・納期を横並びで比較するのがおすすめです。
            </p>
            <p className="mt-3 text-xs text-slate-400">
              ※料金・在庫・納期は時期や設置条件によって変わります。最新の情報は公式サイトや注文前の確認でご確認ください。
            </p>
          </section>

          {/* Flow */}
          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              注文から設置までの流れ
            </h2>
            <ol className="space-y-4">
              {[
                ["機種選び・相談", "設置場所や能力に合わせて機種を選びます。不明点は問い合わせて相談できます。"],
                ["注文・工事手配", "本体を注文し、必要に応じて設置工事を手配します。工事可否は地域により異なります。"],
                ["配送・日程調整", "本体が配送され、工事日程を調整します。繁忙期は早めの調整がおすすめです。"],
                ["設置工事", "地域の提携工事店が訪問し、設置工事を行います。"],
                ["動作確認・引き渡し", "動作確認のうえ引き渡し。保証やアフターの内容を確認しておきましょう。"],
              ].map(([t, d], i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 grid place-items-center w-9 h-9 rounded-full bg-teal-600 text-white font-bold text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">{t}</p>
                    <p className="text-slate-600 text-[0.95rem] leading-7">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              よくある質問
            </h2>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map((f, i) => (
                <details key={i} className="group py-4">
                  <summary className="flex cursor-pointer items-start gap-3 font-semibold text-slate-800 list-none">
                    <span className="text-teal-600">Q.</span>
                    <span>{f.q}</span>
                  </summary>
                  <p className="mt-3 pl-7 text-slate-600 leading-7 text-[0.95rem]">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section id="summary-last" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              まとめ
            </h2>
            <p className="leading-8 text-slate-700">
              エアコンの森は、株式会社サンゲートが運営する激安エアコン通販で、本体価格の安さと配送スピードが強みです。口コミでは「大手量販店以上に早い」「リーズナブルで満足」といった声が目立つ一方、繁忙期の工事日程や発送後のキャンセル不可には注意したいという声もありました。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              本体を安く買える反面、設置には工事費がかかります。1社で決めず、本体価格・工事費・納期・保証を複数業者で比較し、トータルコストで判断するのが失敗を防ぐコツです。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">エアコンを安く・早く導入したい方へ</p>
              <p className="text-teal-100 text-sm mb-5">
                まずは機種と本体価格の目安を確認し、工事費まで含めて比較してみましょう。
              </p>
              <a
                href="https://www.airconnomori.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors"
              >
                エアコンの森 公式サイトを見る
              </a>
            </div>
          </section>

          {/* Related */}
          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/ranking", label: "業務用エアコン業者ランキング" },
                { href: "/ranking/lease", label: "リースで選ぶ業務用エアコン" },
                { href: "/guide/cost", label: "業務用エアコンの費用相場" },
                { href: "/guide/type", label: "業務用エアコンの種類と選び方" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:border-teal-300 hover:bg-slate-50 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
