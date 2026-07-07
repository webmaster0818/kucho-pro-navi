import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンマートの口コミ・評判は？料金・対応エリアを徹底調査【2026年7月】｜空調プロナビ",
  description:
    "業務用エアコンの通販＋工事「エアコンマート」の口コミ・評判をまとめました。Yahoo!ショッピング・楽天のショップレビュー、新品・中古の取り扱い、料金や対応エリア、メリット・デメリット、向いている事業者まで中立的に解説します。",
  alternates: { canonical: "/company/aircon-mart" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "エアコンマートとは" },
  { id: "company", label: "基本情報" },
  { id: "good", label: "良い口コミ・評判" },
  { id: "bad", label: "気になる点・注意したいポイント" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている事業者・向いていない事業者" },
  { id: "price", label: "料金の考え方（新品・中古）" },
  { id: "flow", label: "問い合わせから設置までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "summary-last", label: "まとめ" },
];

const goodReviews = [
  {
    body:
      "本体価格が安く、工事費も納得できる金額でした。予算を抑えたかったので、トータルで安く済んで助かりました。",
    who: "購入者（★5）",
    source: "Yahoo!ショッピング 店舗評価（機器販売）",
  },
  {
    body:
      "設置工事の仕上げが綺麗で、見た目もすっきりしました。丁寧に作業してもらえて満足しています。",
    who: "購入者（★5）",
    source: "楽天 みんなのレビュー（店舗レビュー）",
  },
  {
    body:
      "納入が少し遅れた際も、状況をこまめに連絡してくれて丁寧に対応してもらえました。安心して待つことができました。",
    who: "購入者（★4）",
    source: "Yahoo!ショッピング 店舗評価（機器販売）",
  },
  {
    body:
      "複数回利用していますが、毎回満足しています。価格と対応のバランスが良く、リピートしています。",
    who: "リピート購入者（★5）",
    source: "楽天 みんなのレビュー（店舗レビュー）",
  },
];

const faqs = [
  {
    q: "エアコンマートは業務用エアコンの設置に対応していますか？",
    a: "はい。エアコンマートは業務用エアコンの通販と設置工事に対応するサービスです。本体を購入したうえで、工事もあわせて依頼することができます。",
  },
  {
    q: "中古の業務用エアコンも扱っていますか？",
    a: "はい。新品に加えて、整備済みで1年保証付きの中古業務用エアコンも取り扱っています。コストを抑えたい場合の選択肢になります。",
  },
  {
    q: "対応エリアや店舗はどこにありますか？",
    a: "大阪に実店舗があり、東京・神奈川にも拠点があります。通販を中心に、設置工事にも対応しています。エリアや時期によって対応条件が変わる場合があるため、注文前に確認しておくと安心です。",
  },
  {
    q: "口コミでの評価はどのくらいですか？",
    a: "Yahoo!ショッピングや楽天のショップレビューでは、価格の安さ、工事の仕上がり、納入が遅れた際の丁寧な対応などを評価する声が見られます。これらは機器販売（EC）に対する評価が中心です。",
  },
  {
    q: "どのくらいの取扱・施工実績がありますか？",
    a: "公式情報では、販売実績3万台・工事実績1万件超とされています。業務用エアコンの通販と工事を幅広く手がけてきたサービスです。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "エアコンマートの口コミ・評判は？料金・対応エリアを徹底調査",
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
          { label: "エアコンマートの口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        {/* Eyecatch / Header */}
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-3">
            業務用エアコン業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンマートの口コミ・評判は？
            <br className="hidden md:block" />
            料金・対応エリアを徹底調査
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
              alt="店舗やオフィスに設置される業務用エアコンのイメージ"
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
            店舗やオフィスの空調を入れ替えるとき、「どの業者に頼めば安心なのか」は悩ましいところです。
            この記事では、業務用エアコンの通販と工事を手がける
            <strong className="font-semibold text-slate-900">エアコンマート</strong>
            について、Yahoo!ショッピングや楽天のショップレビューで公開されている利用者の声、新品・中古の取り扱い、料金の考え方、対応エリア、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、各掲載サイトで公開されている内容を出典付きで引用・要約したものです。料金や対応内容は時期・地域・契約条件により変わるため、最新の情報は公式サイトや無料見積もりでご確認ください（調査時点：2026年6月）。
          </p>
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
              エアコンマートとは
            </h2>
            <p className="leading-8 text-slate-700">
              エアコンマートは、飲食店・オフィス・店舗など、事業者向けの
              <strong className="font-semibold">業務用エアコンの通販と設置工事</strong>
              を手がけるサービスです。新品に加え、整備済みで1年保証付きの中古機も扱っており、コストを抑えたい事業者にとって選択肢が広いのが特徴です。激安価格を打ち出しており、本体価格を抑えたいニーズに応えています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              大阪に実店舗を構え、東京・神奈川にも拠点があります。公式情報では、販売実績3万台・工事実績1万件超とされており、通販と工事の両面で実績を重ねてきたサービスです。
            </p>
          </section>

          {/* Company table */}
          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              基本情報
            </h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "エアコンマート（業務用エアコン通販＋工事）"],
                    ["公式サイト", "https://aircon-mart.com/"],
                    ["拠点", "大阪に実店舗／東京・神奈川に拠点"],
                    ["取り扱い", "新品＋中古（整備済み・1年保証付き）の業務用エアコン"],
                    ["事業内容", "業務用エアコンの通販＋設置工事"],
                    ["実績", "販売実績3万台／工事実績1万件超"],
                    ["特徴", "激安価格の訴求／コストを抑えた導入に対応"],
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
              出典：エアコンマート公式サイト。運営会社の正式名称は公式の会社概要でご確認ください。実績は公称値で、内容は変更される場合があります。
            </p>
          </section>

          {/* Good reviews */}
          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              良い口コミ・評判
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              Yahoo!ショッピングや楽天のショップレビューで多く見られたのは、
              <strong className="font-semibold">価格の安さと工事の仕上がり、対応の丁寧さ</strong>
              を評価する声です。本体・工事ともにコストを抑えられた、設置の仕上げが綺麗だった、納入が遅れた際もこまめに連絡があった、複数回利用しても満足、といった点が好意的に受け止められています。
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
              ※口コミはYahoo!ショッピング・楽天のショップレビューで公開されている内容を要約したものです。これらは機器販売（EC）に対する評価が中心で、件数・評価は変動します。出典を明記したうえで参考としてご覧ください。
            </p>
          </section>

          {/* Mid image */}
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image
              src="/images/hero-b.png"
              alt="天井に設置された業務用エアコンと整ったオフィス空間"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          {/* Bad reviews */}
          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              気になる点・注意したいポイント
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              通販を中心としたサービスのため、利用前に把握しておきたい一般的な注意点があります。レビューでは納入の遅れに触れる声も見られましたが、丁寧な連絡で対応されたという内容でした。気になる点も理解したうえで、注文前に納期や工事対応エリア、中古機の保証範囲を確認しておくと安心です。
            </p>
            <ul className="space-y-3 text-slate-700 text-[0.95rem] leading-7">
              <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                通販が中心のため、設置工事の対応可否や条件はエリア・時期によって変わることがあります。注文前の確認がおすすめです。
              </li>
              <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                中古機は整備済み・1年保証付きですが、保証範囲や状態は機種ごとに異なります。事前に内容を確認しておきましょう。
              </li>
              <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                繁忙期や取り寄せの場合、納入までに時間がかかることがあります。スケジュールに余裕を持って相談するのが安心です。
              </li>
            </ul>
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
                  <li>激安価格の訴求で、本体・工事のコストを抑えやすい</li>
                  <li>新品に加え、整備済み・1年保証付きの中古機も選べる</li>
                  <li>大阪の実店舗と東京・神奈川の拠点があり、通販＋工事に対応</li>
                  <li>販売3万台・工事1万件超の実績がある</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>通販中心のため、工事の対応条件はエリア・時期で変わることがある</li>
                  <li>中古機は保証範囲・状態が機種ごとに異なるため事前確認が必要</li>
                  <li>取り寄せや繁忙期は納入までに時間がかかる場合がある</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Fit */}
          <section id="fit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              向いている事業者・向いていない事業者
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いている事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>とにかく本体・工事のコストを抑えたい店舗・オフィス</li>
                  <li>新品にこだわらず、中古機も含めて検討したい事業者</li>
                  <li>大阪・東京・神奈川エリアで通販＋工事を依頼したい事業者</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>即日・最短で工事を終わらせたい繁忙期の急ぎ案件</li>
                  <li>全国どこでも手厚い訪問サポートを求める場合</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Price */}
          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              料金の考え方（新品・中古）
            </h2>
            <p className="leading-8 text-slate-700">
              業務用エアコンは、機種の馬力（能力）・台数・設置場所・既存機の撤去有無などで費用が大きく変わります。エアコンマートは
              <strong className="font-semibold">激安価格を打ち出しており、新品と中古の両方</strong>
              を扱っているため、予算に合わせて選びやすいのが特徴です。整備済み・1年保証付きの中古機を選べば、さらにコストを抑えることもできます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              正確な金額は、設置環境を踏まえた見積もりで把握するのが確実です。本体価格だけでなく、工事費・撤去費・保証範囲（特に中古機）を含めて、複数業者と横並びで比較するのがおすすめです。
            </p>
            <p className="mt-3 text-xs text-slate-400">
              ※料金は機種・台数・設置環境・新品／中古の別により異なります。最新の条件は公式サイトや見積もりでご確認ください。
            </p>
          </section>

          {/* Flow */}
          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              問い合わせから設置までの流れ
            </h2>
            <ol className="space-y-4">
              {[
                ["問い合わせ・相談", "公式サイトや通販ページから相談・注文。設置場所や希望機種、台数などを伝えます。"],
                ["機種の選定・見積もり", "新品・中古を含めて機種を選び、本体・工事費を含む見積もりを確認します。"],
                ["注文・契約", "機種と費用、保証内容を確認して注文・契約します。"],
                ["納品・設置工事", "機器を納品し、工事対応エリアでは設置工事を行います。"],
                ["引き渡し・アフター対応", "動作確認のうえ引き渡し。中古機は1年保証でアフターをサポートします。"],
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
              エアコンマートは、業務用エアコンの通販と工事を手がけるサービスで、激安価格と、新品・中古（整備済み・1年保証付き）の両方を扱う品ぞろえが強みです。Yahoo!ショッピングや楽天のショップレビューでは、価格の安さ、工事の仕上がり、納入が遅れた際の丁寧な対応を評価する声が目立ちました。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              一方で、通販が中心のため、工事の対応条件や中古機の保証範囲は事前の確認が大切です。業務用エアコンの導入は費用が大きいため、1社で決めず、複数業者から相見積もりを取り、料金・保証・対応エリアを比較して選ぶのが失敗を防ぐコツです。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">業務用エアコンの入れ替えを検討中の方へ</p>
              <p className="text-teal-100 text-sm mb-5">
                まずは見積もりで、新品・中古を含めた機種と費用の目安を確認してみましょう。
              </p>
              <a
                href="https://aircon-mart.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors"
              >
                エアコンマート公式サイトを見る
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
