import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "新空調の口コミ・評判は？名古屋の業務用エアコン専門店の料金・対応エリアを解説",
  description:
    "名古屋の業務用エアコン専門店「新空調（有限会社新空調）」の口コミ・評判をまとめました。実際の利用者の声、料金やリース・中古機の仕組み、対応エリア、メリット・デメリット、向いている事業者まで中立的に解説します。",
  alternates: { canonical: "/company/shin-kucho" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "新空調とは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "良い口コミ・評判" },
  { id: "bad", label: "気になる口コミ・評判" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている事業者・向いていない事業者" },
  { id: "price", label: "料金・リース・中古の仕組み" },
  { id: "flow", label: "問い合わせから設置までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "summary-last", label: "まとめ" },
];

const goodReviews = [
  {
    body:
      "対応がとてもスピーディーで、見積もりから工事までスムーズに進みました。地元の業者さんなので相談しやすく、安心してお任せできました。",
    who: "飲食店・愛知県名古屋市",
    source: "新空調公式サイト「施工実績・お客様の声」",
  },
  {
    body:
      "説明が丁寧で、こちらの予算や使い方に合わせて機種を提案してくれました。無理に高い機種を勧められることもなく、納得して決められました。",
    who: "事業者・愛知県（業務用エアコン入れ替え）",
    source: "新空調公式サイト「選ばれる5つの理由」掲載の利用者の声",
  },
  {
    body:
      "中古の業務用エアコンも扱っていて、初期費用をかなり抑えられました。職人さんの工事も丁寧で仕上がりに満足しています。",
    who: "店舗オーナー・名古屋市近郊",
    source: "新空調公式サイト「中古をお探しの方へ」関連ページ",
  },
];

const faqs = [
  {
    q: "新空調はどこの会社ですか？",
    a: "新空調は、愛知県名古屋市北区に拠点を置く有限会社新空調が運営する業務用エアコンの専門店です。約20年にわたり、業務用エアコンの販売・交換・修理・リース・工事を手がけてきた地域密着型の業者です。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "名古屋市全域を中心に、愛知県を主な対応エリアとしています。家庭用エアコンについては名古屋市北区・春日井市・守山区などにも対応しています。エリア外の場合は問い合わせ時に確認するのが確実です。",
  },
  {
    q: "中古の業務用エアコンも扱っていますか？",
    a: "はい。新空調では新品だけでなく中古の業務用エアコンも取り扱っています。初期費用を抑えたい事業者向けに、状態を確認したうえで提案してもらえます。",
  },
  {
    q: "即日対応はしてもらえますか？",
    a: "在庫状況や工事スケジュールに空きがあれば、即日の設置や修理に対応できる場合があります。ただし部品の取り寄せが必要なケースなどでは日数がかかることがあるため、急ぎの場合は事前に相談してください。",
  },
  {
    q: "保証はありますか？",
    a: "工事に対する施工保証と、機器のメーカー保証が用意されています。保証内容や年数は機種・契約条件によって異なるため、見積もり時に確認しておくと安心です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "新空調の口コミ・評判は？名古屋の業務用エアコン専門店の料金・対応エリアを解説",
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
          { label: "新空調の口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        {/* Eyecatch / Header */}
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-3">
            業務用エアコン業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            新空調の口コミ・評判は？
            <br className="hidden md:block" />
            名古屋の業務用エアコン専門店の料金・対応エリアを解説
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
              alt="名古屋の店舗やオフィスに設置される業務用エアコンのイメージ"
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
            名古屋エリアで業務用エアコンの入れ替えを考えるとき、「地元で信頼できる業者はどこか」は気になるポイントです。
            この記事では、名古屋の業務用エアコン専門店として知られる
            <strong className="font-semibold text-slate-900">新空調</strong>
            （運営：有限会社新空調）について、公開されている利用者の声、料金や中古・リースの仕組み、対応エリア、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、公式サイトなどで公開されている内容を出典付きで引用・要約したものです。料金や対応内容は時期・地域・契約条件により変わるため、最新の情報は公式サイトや無料見積もりでご確認ください（調査時点：2026年6月）。
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
              新空調とは
            </h2>
            <p className="leading-8 text-slate-700">
              新空調は、飲食店・オフィス・店舗・施設など事業者向けの
              <strong className="font-semibold">業務用エアコン</strong>
              の販売・交換・修理・リース・工事を手がける名古屋の専門店です。運営は、愛知県名古屋市北区に拠点を構える有限会社新空調。約20年にわたって地域密着で空調設備を扱ってきた実績があり、業務用だけでなく家庭用エアコンの取り付け・交換工事にも対応しています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              主要メーカーの新品機種に加え、初期費用を抑えやすい中古の業務用エアコンも取り扱っているのが特徴です。地元の業者ならではの相談のしやすさと、職人による丁寧な施工を強みとしています。
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
                    ["サービス名", "新空調（業務用エアコン専門店）"],
                    ["運営会社", "有限会社新空調"],
                    ["所在地", "愛知県名古屋市北区"],
                    ["事業内容", "業務用エアコンの販売・交換・修理・リース・工事、家庭用エアコン工事"],
                    ["対応エリア", "名古屋市全域を中心とした愛知県エリア"],
                    ["取扱機種", "主要メーカーの新品／中古の業務用エアコン"],
                    ["保証", "施工保証＋機器メーカー保証（内容は契約により異なる）"],
                    ["特徴", "地域密着・即日対応可（在庫・スケジュール次第）・中古取扱あり"],
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
              出典：新空調公式サイト（会社概要）。所在地・対応エリア等は変更される場合があります。最新情報は公式サイトでご確認ください。
            </p>
          </section>

          {/* Good reviews */}
          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              良い口コミ・評判
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              公開されている声で多く見られたのは、
              <strong className="font-semibold">地域密着ならではの相談のしやすさと、対応・施工の丁寧さ</strong>
              を評価する内容です。予算や使い方に合わせて機種を提案してくれる、無理に高い機種を勧めない、見積もりから工事までスムーズ、といった点が好意的に受け止められています。
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
              ※上記は公式サイトに掲載されている施工実績やお客様の声をもとに要約したものです。自社で収集・掲載された内容のため、出典を明記したうえで参考としてご覧ください。
            </p>
          </section>

          {/* Mid image */}
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image
              src="/images/hero-b.png"
              alt="天井に設置された業務用エアコンと整った店舗空間"
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
              新空調は地域密着の中小規模の専門店であるため、ネット上に出回っている第三者の口コミ件数はそれほど多くありません。気になる点として現実的に意識しておきたいのは、
              <strong className="font-semibold">対応エリアが愛知県中心に限られること</strong>
              と、繁忙期は在庫や工事日程の都合で希望日に間に合わないことがある点です。全国対応の大手と比べると守備範囲は狭いため、エリア外の事業者には不向きです。
            </p>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-slate-700 leading-7 text-[0.95rem]">
                明確な悪評として広く拡散している事例は調査時点で見当たりませんでしたが、一般的な注意点として、見積もり段階で「対応エリアに含まれるか」「希望日に工事できるか」「中古機の場合の保証範囲」を事前に確認しておくと安心です。
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
                  <li>名古屋・愛知の地域密着で相談しやすく、対応が早い</li>
                  <li>新品だけでなく中古機も扱い、初期費用を抑えやすい</li>
                  <li>販売・交換・修理・リース・工事をワンストップで依頼できる</li>
                  <li>約20年の実績と職人による丁寧な施工</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>対応エリアが愛知県中心で、遠方の事業者は依頼しづらい</li>
                  <li>第三者サイトの口コミ件数は大手ほど多くない</li>
                  <li>繁忙期は在庫・工事日程の都合で希望日に間に合わないことがある</li>
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
                  <li>名古屋・愛知エリアの店舗・オフィス・施設</li>
                  <li>中古機も含めて初期費用を抑えたい事業者</li>
                  <li>地元の業者に直接相談しながら進めたい方</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>愛知県外・全国の複数拠点をまとめて任せたい企業</li>
                  <li>大手メーカー直系の手厚い長期保証を最優先したい場合</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Price */}
          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              料金・リース・中古の仕組み
            </h2>
            <p className="leading-8 text-slate-700">
              業務用エアコンは、機種の馬力（能力）・台数・設置場所・既存機の撤去有無などで費用が大きく変わります。新空調では、本体＋工事をまとめて購入する方法のほか、初期費用を抑えやすい
              <strong className="font-semibold">中古機の活用やリース契約</strong>
              にも対応しています。中古機は状態を確認したうえで提案されるため、コスト重視の事業者にとって選択肢が広い点が特徴です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              正確な金額は、無料の現地調査と見積もりで把握するのが確実です。複数業者から相見積もりを取り、本体価格・工事費・保証年数・アフター対応を横並びで比較するのがおすすめです。
            </p>
            <p className="mt-3 text-xs text-slate-400">
              ※料金・中古在庫・リース条件は時期により変動します。最新の内容は公式の見積もりでご確認ください。
            </p>
          </section>

          {/* Flow */}
          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              問い合わせから設置までの流れ
            </h2>
            <ol className="space-y-4">
              {[
                ["問い合わせ・相談", "電話またはWebフォームから相談。設置場所や希望機種、台数、新品か中古かの希望などを伝えます。"],
                ["現地調査・見積もり", "担当者が設置環境を確認し、機種と費用を提案。現地調査・見積もりは無料です。"],
                ["プラン・契約方法の決定", "新品か中古か、購入かリースか、保証内容を比較して決定します。"],
                ["工事日程の調整・設置工事", "職人が訪問し、設置工事を行います。在庫・日程次第で即日対応も可能です。"],
                ["引き渡し・アフター対応", "動作確認のうえ引き渡し。施工保証や修理対応でアフターをサポートします。"],
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
              新空調は、名古屋・愛知エリアで約20年の実績を持つ業務用エアコンの専門店で、地域密着の相談のしやすさ、新品・中古・リースを横断して選べること、販売から修理までワンストップで頼めることが強みです。口コミでは丁寧な対応と提案力を評価する声が目立ちます。一方で、対応エリアが愛知県中心に限られる点は事前に確認しておきたいポイントです。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              業務用エアコンの導入は費用が大きいため、1社で決めず、複数業者から相見積もりを取り、料金・保証・対応エリアを比較して選ぶのが失敗を防ぐコツです。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">名古屋・愛知で業務用エアコンを検討中の方へ</p>
              <p className="text-teal-100 text-sm mb-5">
                まずは無料の現地調査・見積もりで、機種と費用の目安を確認してみましょう。
              </p>
              <a
                href="https://www.ecoaircon.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors"
              >
                新空調 公式サイトを見る
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
