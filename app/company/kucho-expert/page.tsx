import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "空調エキスパートの口コミ・評判は？業務用エアコンの料金・対応エリアを解説【2026年7月】",
  description:
    "業務用エアコン専門サイト「空調エキスパート」の口コミ・評判をまとめました。運営会社や対応エリア、リースの仕組み、メリット・デメリット、向いている事業者まで、良い点・気になる点の両面から中立的に解説します。",
  alternates: { canonical: "/company/kucho-expert" },
};

const UPDATED = "2026年7月12日";

const toc = [
  { id: "summary", label: "空調エキスパートとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "良い口コミ・評判" },
  { id: "bad", label: "気になる口コミ・評判" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている事業者・向いていない事業者" },
  { id: "price", label: "料金・リースの仕組み" },
  { id: "flow", label: "問い合わせから設置までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "summary-last", label: "まとめ" },
];

const goodReviews = [
  {
    body:
      "スタッフの対応がとてもよかったので、満足しています。価格もお手頃でした。",
    who: "業務用エアコンの設置を依頼した利用者",
    source: "業務用エアコン比較サイト（aircon-businessuse.com）掲載の利用者の声",
  },
  {
    body:
      "電話対応・施工ともに大変満足しています。問い合わせにもすぐに対応してくれました。",
    who: "業務用エアコンの設置を依頼した利用者",
    source: "業務用エアコン比較サイト（aircon-businessuse.com）掲載の利用者の声",
  },
  {
    body:
      "技術者の気配りを感じる、とてもいい仕上がりになっています。現場のスタッフの雰囲気もよく、安心して任せられました。",
    who: "業務用エアコンの設置を依頼した利用者",
    source: "業務用エアコン比較サイト（aircon-businessuse.com）掲載の利用者の声",
  },
];

const faqs = [
  {
    q: "空調エキスパートは業務用エアコンの設置に対応していますか？",
    a: "はい。空調エキスパートは業務用エアコンの販売・設計提案・設置工事を専門に手がけるサービスです。事務所・店舗・工場など、規模を問わず相談でき、見積もり前の機種選びも専門の技術者がサポートします。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "公式サイトでは全国対応とされています。各地域の指定工事協力店が施工を担当する体制のため、地域や時期によって対応スピードに差が出る場合があります。詳しい対応可否は問い合わせ時に確認するのが確実です。",
  },
  {
    q: "料金やリースの目安は？",
    a: "本体＋工事の販売に加え、初期費用を抑えられるリース契約にも対応しています。第三者の紹介記事では、機器と工事の総額が60万円程度の場合、8年リースで月々8,600円〜という参考値が示されていますが、機種・台数・契約条件で変わるため、正式な金額は無料見積もりで確認してください。",
  },
  {
    q: "保証はありますか？",
    a: "メーカー保証に加え、有償の延長保証を選べるとされています。リース契約に保証を組み込めるプランもあります。保証範囲や年数は契約内容で異なるため、見積もり時に確認してください。",
  },
  {
    q: "運営会社はどこですか？",
    a: "空調エキスパートは、もともと昭和24年（1949年）創業の建築設備会社・株式会社テクノ菱和が運営していたサービスです。2025年4月にサイトがアトム冷熱工業株式会社（神奈川県横浜市・前身は1946年創業）へ譲渡され、現在は同社が運営しています。いずれも空調設備の設計・施工・保守を長く手がけてきた事業者です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "空調エキスパートの口コミ・評判は？業務用エアコンの料金・対応エリアを解説【2026年7月】",
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
          { label: "空調エキスパートの口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        {/* Eyecatch / Header */}
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-3">
            業務用エアコン業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            空調エキスパートの口コミ・評判は？
            <br className="hidden md:block" />
            業務用エアコンの料金・対応エリアを解説
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>空調プロナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-07-12">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image
              src="/images/hero-a.png"
              alt="オフィスや施設に設置される業務用エアコンのイメージ"
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
            オフィスや施設の空調を入れ替えるとき、「専門知識のある業者にしっかり提案してほしい」と考える事業者は少なくありません。
            この記事では、業務用エアコンの設計提案から施工までを手がける
            <strong className="font-semibold text-slate-900">空調エキスパート</strong>
            について、公開されている利用者の声、料金やリースの仕組み、対応エリア、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。
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
              空調エキスパートとは
            </h2>
            <p className="leading-8 text-slate-700">
              空調エキスパートは、事務所・店舗・病院・学校・工場など、事業者向けの
              <strong className="font-semibold">業務用エアコン</strong>
              の販売・設計提案・設置工事を専門に手がけるサービスです。もともとは昭和24年（1949年）創業の建築設備会社、株式会社テクノ菱和が運営していました。病院や複合商業施設、学校といった建物で空調・衛生設備工事を長年手がけてきたノウハウを活かし、小規模な工事から特殊な現場まで対応できるのが特徴です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              なお同サービスは、2025年4月にサイトがアトム冷熱工業株式会社（神奈川県横浜市・前身は1946年創業）へ譲渡され、現在は同社が運営しています。ダイキン・三菱電機・三菱重工・日立・東芝・パナソニック・日本ピーマックなど主要メーカーの機種を幅広く扱い、本体＋工事の販売だけでなく、初期費用を抑えられるリース契約にも対応しています。
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
                    ["サービス名", "空調エキスパート（業務用エアコン専門サイト）"],
                    ["運営会社", "アトム冷熱工業株式会社（前運営：株式会社テクノ菱和）"],
                    ["運営移管", "2025年4月にテクノ菱和からアトム冷熱工業へサイト譲渡"],
                    ["対応エリア", "全国（各地域の指定工事協力店が施工を担当）"],
                    ["取扱メーカー", "ダイキン／三菱電機／三菱重工／日立／東芝／パナソニック／日本ピーマック ほか"],
                    ["施工実績", "年間10,000件以上（運営移管前の実績を含む）"],
                    ["保証", "メーカー保証＋有償の延長保証"],
                    ["受付時間", "平日 9:00〜18:00"],
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
              出典：空調エキスパート公式サイト（会社概要）および第三者の紹介サイト。運営会社・受付時間等は変更される場合があります。最新情報は公式サイトでご確認ください。
            </p>
          </section>

          {/* Good reviews */}
          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              良い口コミ・評判
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              紹介サイトに掲載されている利用者の声で多く見られたのは、
              <strong className="font-semibold">スタッフの対応の丁寧さと、仕上がりの品質</strong>
              を評価する声です。電話対応や問い合わせへのレスポンスが早い、技術者の気配りが感じられる、といった点が好意的に受け止められています。
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
              ※上記は第三者の業務用エアコン比較サイトに「利用者の声」として掲載されている内容を引用・要約したものです。独立した口コミ投稿サイトでの件数は限られているため、出典を明記したうえで参考としてご覧ください。
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
              気になる口コミ・評判
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              一方で、独立した口コミ投稿サイトでの件数はまだ多くなく、評価の母数が限られている点には注意が必要です。
              また、施工は地域の指定工事協力店が担当するため、需要が集中する繁忙期は対応スピードや日程調整に差が出る可能性があります。
              気になる点も把握したうえで、見積もり段階でスケジュールや担当体制を確認しておくと安心です。
            </p>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-slate-700 leading-7 text-[0.95rem]">
                公開されている口コミは肯定的なものが中心で、明確に不利な指摘は確認できませんでした。ただし、口コミの絶対数が少ないため、ここでは無理に否定的な口コミを掲載せず、一般的な注意点として「繁忙期の日程」「地域による対応差」「見積もり内容の確認」を挙げるにとどめます。
              </p>
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
                  <li>建築設備会社のノウハウを背景にした提案力が期待できる</li>
                  <li>主要メーカーを横断して機種を選べる</li>
                  <li>本体＋工事の販売に加え、初期費用を抑えるリースに対応</li>
                  <li>小規模な工事から特殊な現場まで幅広く相談できる</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>施工は地域の指定工事協力店が担当するため、対応に地域差が出ることがある</li>
                  <li>独立した口コミサイトでの評価件数がまだ少ない</li>
                  <li>機種・台数・契約条件で料金が変わるため、相見積もりでの比較が前提</li>
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
                  <li>機種選びから相談し、提案を受けて決めたい事業者</li>
                  <li>初期費用を抑えてリースで導入したい店舗・オフィス</li>
                  <li>病院・学校・施設など、設備工事の実績を重視したい現場</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>とにかく即日・最短で工事を終わらせたい急ぎの案件</li>
                  <li>口コミの件数の多さを最重視して業者を選びたい場合</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Price */}
          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              料金・リースの仕組み
            </h2>
            <p className="leading-8 text-slate-700">
              業務用エアコンは、機種の馬力（能力）・台数・設置場所・既存機の撤去有無などで費用が大きく変わります。空調エキスパートでは、本体＋工事をまとめて購入する方法と、初期費用を抑えられる
              <strong className="font-semibold">リース契約</strong>
              の両方が選べます。第三者の紹介記事では、機器と工事の総額が60万円程度の場合、8年リースで月々8,600円〜という参考値が示されていますが、これはあくまで条件次第の目安です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              正確な金額は、無料の現地調査と見積もりで把握するのが確実です。複数業者から相見積もりを取り、本体価格・工事費・保証年数・アフター対応を横並びで比較するのがおすすめです。
            </p>
            <p className="mt-3 text-xs text-slate-400">
              ※月額の参考値は第三者サイト掲載の情報に基づきます。最新の料金・リース条件は公式の見積もりでご確認ください。
            </p>
          </section>

          {/* Flow */}
          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              問い合わせから設置までの流れ
            </h2>
            <ol className="space-y-4">
              {[
                ["問い合わせ・相談", "電話またはWebフォームから相談。設置場所や希望機種、台数などを伝えます。"],
                ["機種提案・現地調査・見積もり", "専門の技術者が設置環境を確認し、用途に合った機種と費用を提案。見積もりは無料です。"],
                ["プラン・契約方法の決定", "購入かリースか、機種・保証内容を比較して決定します。"],
                ["工事日程の調整・設置工事", "地域の指定工事協力店が訪問し、設置工事を行います。"],
                ["引き渡し・アフター対応", "動作確認のうえ引き渡し。保証やメンテナンスでアフターをサポートします。"],
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
              空調エキスパートは、建築設備会社のノウハウを背景に、業務用エアコンの提案から施工までを手がけるサービスです。主要メーカーを横断して機種を選べること、購入・リースの両方に対応していることが強みで、紹介サイトの利用者の声では対応の丁寧さや仕上がりの品質を評価する声が見られました。一方で、独立した口コミサイトでの評価件数はまだ少なく、繁忙期の日程や地域による対応差には注意したいところです。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              業務用エアコンの導入は費用が大きいため、1社で決めず、複数業者から相見積もりを取り、料金・保証・対応エリアを比較して選ぶのが失敗を防ぐコツです。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">業務用エアコンの入れ替えを検討中の方へ</p>
              <p className="text-teal-100 text-sm mb-5">
                まずは無料の現地調査・見積もりで、機種と費用の目安を確認してみましょう。
              </p>
              <a
                href="https://kucho-ex.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors"
              >
                空調エキスパート公式サイトを見る
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
                { href: "/cost-index/", label: "坪数×馬力×費用 早見インデックス" },
                { href: "/guide/timing/", label: "発注タイミングと2026年の補助金カレンダー" },
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
