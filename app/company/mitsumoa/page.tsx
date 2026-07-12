import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ミツモア（みつもあ）の口コミ・評判は？業務用エアコンの一括見積もり・料金・手数料の仕組み【2026年7月】",
  description:
    "AIマッチングの相見積もりサービス「ミツモア（みつもあ／mitsumoa）」（運営：株式会社ミツモア）の口コミ・評判をまとめました。業務用エアコンの一括見積もりでの使い方、料金や手数料の仕組み、メリット・デメリット、向いている事業者まで中立的に解説します。",
  alternates: { canonical: "/company/mitsumoa" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "ミツモアとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "良い口コミ・評判" },
  { id: "bad", label: "気になる口コミ・評判" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている事業者・向いていない事業者" },
  { id: "price", label: "料金・一括見積もりの仕組み" },
  { id: "flow", label: "見積もり依頼から施工までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "summary-last", label: "まとめ" },
];

const goodReviews = [
  {
    body:
      "依頼内容を入力するだけで複数の業者から見積もりが届き、一度に比較できたので相場感を掴みやすかったです。",
    who: "相見積もりを利用した方",
    source: "みん評 掲載のミツモア 利用者口コミ",
  },
  {
    body:
      "チャットで気軽に細かい点を質問できたので、業者の対応の丁寧さを依頼前に確認できて安心でした。",
    who: "チャット相談を活用した方",
    source: "オヨビー（ミツモア 正直レビュー）",
  },
  {
    body:
      "スマホで質問に答えるだけで最短すぐに見積もりが集まり、業者探しの手間が大きく省けました。",
    who: "スマホから依頼した利用者",
    source: "駅探PICKS（ミツモアのリアルな口コミ）",
  },
  {
    body:
      "複数社が競い合う形になるので、適正な価格で依頼できた実感があります。GoogleやApp Storeの評価が高いのも納得でした。",
    who: "価格面を評価した方",
    source: "みん評 掲載のミツモア 利用者口コミ",
  },
];

const badReviews = [
  {
    body:
      "見積もり依頼を出すと複数の業者から連絡が来るので、対応する数が多く感じました。早めに候補を絞ると進めやすいです。",
    who: "連絡量について指摘した方（要約）",
    source: "駅探PICKS（ミツモアのリアルな口コミ）",
  },
  {
    body:
      "業者とのやり取りは基本的に当事者間で進める形なので、契約条件や作業範囲は自分でしっかり確認する必要があると感じました。",
    who: "やり取りの進め方を指摘した方（要約）",
    source: "オヨビー（ミツモア 正直レビュー）",
  },
];

const faqs = [
  {
    q: "ミツモアで業務用エアコンの見積もりは取れますか？",
    a: "はい。ミツモアは空調・エアコン工事を含む各分野の業者から相見積もりを取れるサービスで、店舗・オフィス向けの業務用エアコンの設置・入れ替えにも対応する業者を探せます。ただし大型・特殊な案件は、地域によって対応業者が限られる場合があります。",
  },
  {
    q: "利用料金はかかりますか？手数料の仕組みは？",
    a: "依頼者（利用者）は無料で見積もりを依頼できます。手数料は成約時に業者側が支払う仕組みで、多くの生活カテゴリでは成約額の20%前後とされています。利用者の支払いは、最終的に契約した業者の工事料金です。",
  },
  {
    q: "見積もりはどのくらいで届きますか？",
    a: "一問一答形式で依頼内容を入力すると、AIマッチングにより最短1分ほどで最大5社程度の見積もりが届くとされています。届いた見積もりを比較し、チャットで質問しながら業者を選べます。",
  },
  {
    q: "業者とのトラブル時はミツモアが対応してくれますか？",
    a: "ミツモアは見積もり提供プラットフォームの性質上、契約に関するやり取りには直接介入しないとしています。契約条件・作業範囲・保証はチャットで事前に確認し、書面で残しておくと安心です。",
  },
  {
    q: "運営会社はどこですか？",
    a: "「ミツモア」は、2017年設立の株式会社ミツモアが運営するAIマッチングの相見積もりプラットフォームです。約600種類のサービスを扱い、累計依頼数は550万件規模とされています。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ミツモアの口コミ・評判は？業務用エアコンの一括見積もり・料金の仕組みを徹底解説",
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
          { label: "ミツモアの口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        {/* Eyecatch / Header */}
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-3">
            業務用エアコン業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            ミツモアの口コミ・評判は？
            <br className="hidden md:block" />
            業務用エアコンの一括見積もり・料金の仕組みを徹底解説
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
            店舗やオフィスの業務用エアコンを入れ替えるとき、「適正価格が分からない」「複数社を比べたいが手間がかかる」という悩みに応えるのが、AIマッチングの相見積もりサービス
            <strong className="font-semibold text-slate-900">ミツモア</strong>
            （『みつもあ』『mitsumoa』とも表記されます。運営：株式会社ミツモア）です。この記事では、業務用エアコンの一括見積もりという視点で、実際に公開されている利用者の口コミ、料金や手数料の仕組み、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、各掲載サイトで公開されている内容を出典付きで引用・要約したものです。料金や対応内容は時期・地域・登録業者により変わるため、最新の情報は見積もり依頼やチャットでご確認ください（調査時点：2026年6月）。
          </p>
        </div>


        {/* 結論即答 */}
        <div className="max-w-3xl mx-auto px-5 pt-8">
          <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-6">
            <p className="font-bold text-teal-800 mb-2">結論：ミツモアの評判は？業務用エアコンで使える？</p>
            <p className="text-[0.95rem] leading-7 text-slate-700">
              ミツモアは<strong className="font-semibold">AIマッチング型の相見積もりサービス</strong>（運営：株式会社ミツモア）で、業務用エアコンの入れ替えにも利用できます。公開されている口コミでは<strong className="font-semibold">複数見積もりの手軽さ・チャットで依頼前に業者の対応を確認できる点・相場感の掴みやすさ</strong>を評価する声が中心です。一方、複数業者から連絡が来るため対応数が多く感じるという声もあり、早めに候補を絞るのがコツです。詳しくは<a href="#good" className="text-teal-700 underline underline-offset-4">実際の口コミ</a>と<a href="#price" className="text-teal-700 underline underline-offset-4">料金・手数料の仕組み</a>をご覧ください。
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
              ミツモアとは
            </h2>
            <p className="leading-8 text-slate-700">
              ミツモアは、依頼内容を一問一答形式で入力するだけで、
              <strong className="font-semibold">AIマッチングにより最大5社程度の相見積もりが届くプラットフォーム</strong>
              です。届いた見積もりを比較し、チャットで質問しながら業者を選べるのが特徴で、業務用エアコンの設置・入れ替えに対応する業者からも見積もりを取れます。複数社が競い合う形になるため、適正価格を把握しやすい点が支持されています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              運営は、2017年設立の株式会社ミツモア。約600種類のサービスを扱い、累計依頼数は550万件規模に成長しています。自社で施工するのではなく、登録業者と依頼者をマッチングするプラットフォームである点が、専門の自社施工業者とは異なる特徴です。
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
                    ["サービス名", "ミツモア（AIマッチング相見積もり）"],
                    ["運営会社", "株式会社ミツモア"],
                    ["設立", "2017年"],
                    ["サービス形態", "AIマッチング型 相見積もりプラットフォーム"],
                    ["取扱サービス数", "約600種類"],
                    ["累計依頼数", "550万件規模"],
                    ["利用料金", "依頼者は無料（手数料は成約時に業者側が負担）"],
                    ["対応エリア", "全国（登録業者の所在による）"],
                    ["保証", "各業者による（契約時に確認）"],
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
              出典：ミツモア公式・会社説明資料、株式会社ミツモア 企業情報。サービス数・依頼数等は変更される場合があります。
            </p>
          </section>

          {/* Good reviews */}
          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              良い口コミ・評判
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              公開されている口コミで多く見られたのは、
              <strong className="font-semibold">複数業者を一度に比較できる手軽さと、相場感の掴みやすさ</strong>
              を評価する声です。入力するだけで見積もりが集まること、チャットで気軽に質問できること、複数社が競い合うことで適正価格に近づける点などが好意的に受け止められています。GoogleやApp Storeでも高めの評価を獲得しています。
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
              ※口コミは各種サービス全般に対する利用者の声を含みます。実際の作業は登録業者が担当するため、評価は依頼内容や担当業者によって異なります。出典を明記したうえで参考としてご覧ください。
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
              一方で、相見積もりサービスの性質上、
              <strong className="font-semibold">複数業者からの連絡量や、当事者間でのやり取りの進め方</strong>
              に関する指摘も見られました。これはマッチング型サービス全般に共通する傾向でもあります。気になる点も把握したうえで、早めに候補を絞り、契約条件や作業範囲をチャットで確認しておくと進めやすくなります。
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
                  <li>入力するだけで最大5社程度の相見積もりが届く</li>
                  <li>複数社の比較で相場感を掴みやすく、適正価格に近づける</li>
                  <li>チャットで気軽に質問でき、依頼前に対応を確認できる</li>
                  <li>依頼者は無料で利用できる</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>複数業者から連絡が来るため、候補を早めに絞る必要がある</li>
                  <li>契約・トラブル対応は当事者間で進めるため、条件確認は自己責任</li>
                  <li>大型・特殊な案件は地域によって対応業者が限られることがある</li>
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
                  <li>複数社の相見積もりで適正価格を確かめたい店舗・オフィス</li>
                  <li>スマホやチャットで手軽に業者選びを進めたい事業者</li>
                  <li>自分で条件を比較・交渉して納得して決めたい方</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>業者とのやり取りを最小限にし、窓口に一任したい事業者</li>
                  <li>大型施設の空調設計や特殊案件をまとめて任せたい場合</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Price */}
          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              料金・一括見積もりの仕組み
            </h2>
            <p className="leading-8 text-slate-700">
              ミツモアは、依頼者が
              <strong className="font-semibold">無料で見積もり依頼でき、手数料は成約時に業者側が負担する仕組み</strong>
              です。多くの生活カテゴリでは成約額の20%前後の手数料が業者にかかるとされています。利用者が支払うのは最終的に契約した業者の工事料金で、業務用エアコンであれば機種の馬力・台数・設置環境・既存機の撤去有無などで費用が変わります。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              複数社の見積もりが横並びで届くため相場感を掴みやすい一方、契約条件や作業範囲は当事者間で確認する必要があります。チャットで内訳・追加費用・保証を確認し、納得したうえで契約するのがおすすめです。
            </p>
            <p className="mt-3 text-xs text-slate-400">
              ※手数料の割合はカテゴリにより異なります。最新の料金・条件は見積もり時にご確認ください。
            </p>
          </section>

          {/* Flow */}
          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              見積もり依頼から施工までの流れ
            </h2>
            <ol className="space-y-4">
              {[
                ["依頼内容を入力", "一問一答形式で、設置場所・希望機種・台数などを入力します。"],
                ["AIマッチングで見積もり受信", "条件に合う業者から、最短すぐに最大5社程度の見積もりが届きます。"],
                ["チャットで比較・相談", "届いた見積もりを比較し、チャットで作業範囲・追加費用・保証を確認します。"],
                ["業者の決定・契約", "条件と料金に納得したら業者を選び、契約・日程を調整します。"],
                ["施工・引き渡し", "業者が訪問し設置・入れ替え工事を実施。完了後に支払い・引き渡しとなります。"],
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
              ミツモアは、株式会社ミツモアが運営するAIマッチングの相見積もりプラットフォームで、入力するだけで複数社の見積もりが届き、相場感を掴みながら適正価格で業者を選べることが強みです。口コミでは比較の手軽さとチャットの便利さを評価する声が目立つ一方、複数業者からの連絡量や、当事者間でのやり取りの進め方を指摘する声もありました。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              業務用エアコンの導入は費用が大きいため、届いた見積もりを横並びで比較し、料金・作業範囲・保証・対応エリアを確認して選ぶのが失敗を防ぐコツです。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">業務用エアコンの一括見積もりを取りたい方へ</p>
              <p className="text-teal-100 text-sm mb-5">
                まずは無料で見積もり依頼し、複数社の料金を比較してみましょう。
              </p>
              <a
                href="https://meetsmore.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors"
              >
                ミツモア 公式サイトを見る
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
