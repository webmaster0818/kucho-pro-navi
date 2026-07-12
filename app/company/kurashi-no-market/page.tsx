import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "くらしのマーケットの口コミ・評判は？業務用エアコン工事の料金・仕組みを徹底解説",
  description:
    "口コミで業者を選べるマッチングプラットフォーム「くらしのマーケット」（運営：みんなのマーケット株式会社）の口コミ・評判をまとめました。業務用エアコン工事での使い方、料金の透明性、メリット・デメリット、向いている事業者まで中立的に解説します。",
  alternates: { canonical: "/company/kurashi-no-market" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "くらしのマーケットとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "良い口コミ・評判" },
  { id: "bad", label: "気になる口コミ・評判" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている事業者・向いていない事業者" },
  { id: "price", label: "料金・マッチングの仕組み" },
  { id: "flow", label: "予約から施工までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "summary-last", label: "まとめ" },
];

const goodReviews = [
  {
    body:
      "口コミやプロフィールをじっくり見て業者を選べたので、初めての依頼でも安心してお願いできました。",
    who: "クリーニング・設置を依頼した利用者",
    source: "みん評 掲載のくらしのマーケット 利用者口コミ",
  },
  {
    body:
      "料金が事前に明確に表示されていて、当日に追加費用を取られる心配がなかったのが良かったです。",
    who: "料金の透明性を評価した方",
    source: "おそうじ合衆国（くらしのマーケット 正直レビュー）",
  },
  {
    body:
      "予約前にメッセージで作業内容を細かく質問できたので、当日のイメージがしやすく、スムーズに進みました。",
    who: "事前メッセージを活用した方",
    source: "アポカレッジ!（くらしのマーケットの実態）",
  },
  {
    body:
      "実際に利用した人の口コミが星評価とコメントで見られるので、業者の人柄や仕事ぶりを想像しやすかったです。",
    who: "口コミを参考に選んだ利用者",
    source: "みん評 掲載のくらしのマーケット 利用者口コミ",
  },
];

const badReviews = [
  {
    body:
      "予約時に確認した金額と、当日案内された金額に差がありました。作業範囲をもう少し細かく擦り合わせておけばよかったです。",
    who: "費用面の指摘をした利用者（要約）",
    source: "みん評 掲載のくらしのマーケット 利用者口コミ",
  },
  {
    body:
      "業者によって作業の丁寧さに差があると感じました。口コミ件数や評価をしっかり確認してから選ぶのが大事だと思います。",
    who: "品質のばらつきを指摘した方（要約）",
    source: "カジナビ（くらしのマーケットのデメリット調査）",
  },
];

const faqs = [
  {
    q: "くらしのマーケットで業務用エアコンの工事は依頼できますか？",
    a: "はい。くらしのマーケットには空調・エアコン関連の工事業者が多数登録されており、店舗・オフィス向けの業務用エアコンの設置や取り外しにも対応する業者を探せます。ただし大型・多台数の案件は対応できる業者が限られる場合があります。",
  },
  {
    q: "料金はどのくらいですか？追加費用はかかりますか？",
    a: "くらしのマーケットは各業者が料金を事前に明示する仕組みで、料金の透明性が高いのが特徴です。ただし設置環境や追加部材によって当日に費用が変わることもあるため、予約前にメッセージで作業範囲と追加費用の有無を確認しておくと安心です。",
  },
  {
    q: "業者の質はどう見極めればよいですか？",
    a: "各業者ページに利用者の星評価と口コミが掲載されています。口コミの件数・内容・評価の傾向を確認し、料金の安さだけでなく対応エリアや作業実績も合わせて比較するのがおすすめです。",
  },
  {
    q: "予約のキャンセルや支払いはどうなっていますか？",
    a: "当日キャンセルに対応する業者や、後払いに対応する業者もあります。条件は業者ごとに異なるため、予約時に各業者ページの記載とメッセージで確認してください。",
  },
  {
    q: "運営会社はどこですか？",
    a: "「くらしのマーケット」は、みんなのマーケット株式会社が運営するマッチングプラットフォームです。2025年時点でカテゴリ数400種類以上、累計出店者数10万店以上の国内最大規模のサービスとされています。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "くらしのマーケットの口コミ・評判は？業務用エアコン工事の料金・仕組みを徹底解説",
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
          { label: "くらしのマーケットの口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        {/* Eyecatch / Header */}
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-3">
            業務用エアコン業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            くらしのマーケットの口コミ・評判は？
            <br className="hidden md:block" />
            業務用エアコン工事の料金・仕組みを徹底解説
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
            店舗やオフィスのエアコン工事を頼むとき、「業者の評判が分からず不安」という方に支持されているのが、口コミを見て業者を選べるマッチングプラットフォーム
            <strong className="font-semibold text-slate-900">くらしのマーケット</strong>
            （運営：みんなのマーケット株式会社）です。この記事では、業務用エアコン工事という視点で、実際に公開されている利用者の口コミ、料金の透明性やマッチングの仕組み、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、各掲載サイトで公開されている内容を出典付きで引用・要約したものです。料金や対応内容は時期・地域・出店業者により変わるため、最新の情報は各業者ページや事前メッセージでご確認ください（調査時点：2026年6月）。
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
              くらしのマーケットとは
            </h2>
            <p className="leading-8 text-slate-700">
              くらしのマーケットは、ハウスクリーニングやエアコン工事、不用品回収など暮らしのサービスを、
              <strong className="font-semibold">実際の利用者口コミを見ながら選べるマッチングプラットフォーム</strong>
              です。各業者が料金を事前に明示し、利用者が口コミ・評価・対応エリアを比較して直接予約できる仕組みが特徴。業務用エアコンの設置・取り外しに対応する業者も登録されており、店舗・オフィス向けの工事も探せます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              運営は、みんなのマーケット株式会社。2025年時点でカテゴリ数400種類以上、累計出店者数10万店以上という国内最大規模のサービスに成長しています。料金の透明性と口コミの可視化で、業者選びのミスマッチを減らせる点が支持されています。
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
                    ["サービス名", "くらしのマーケット（暮らしのサービスマッチング）"],
                    ["運営会社", "みんなのマーケット株式会社"],
                    ["サービス形態", "口コミ型マッチングプラットフォーム（利用者が業者を直接予約）"],
                    ["カテゴリ数", "400種類以上（2025年時点）"],
                    ["累計出店者数", "10万店以上（国内最大規模）"],
                    ["料金", "各業者が事前に明示（料金の透明性が高い）"],
                    ["対応エリア", "全国（出店業者の所在による）"],
                    ["特徴", "実利用者の口コミ・星評価、事前メッセージ"],
                    ["保証", "各業者による（業者ページで確認可能）"],
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
              出典：くらしのマーケット公式サイト、みんなのマーケット株式会社 企業情報。カテゴリ数・出店者数等は変更される場合があります。
            </p>
          </section>

          {/* Good reviews */}
          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              良い口コミ・評判
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              公開されている口コミで多く見られたのは、
              <strong className="font-semibold">口コミと料金を見て自分で業者を選べる安心感</strong>
              を評価する声です。料金が事前に明示されていること、予約前にメッセージで質問できること、実利用者の星評価で業者の人柄や仕事ぶりが想像しやすいことなどが好意的に受け止められています。みん評などでは平均4.6〜4.9点と高評価が目立ちます。
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
              ※口コミは暮らしのサービス全般に対する利用者の声を含みます。実際の作業は出店業者が担当するため、評価は依頼内容や担当業者によって異なります。出典を明記したうえで参考としてご覧ください。
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
              一方で、出店業者が多いマッチングサービスの性質上、
              <strong className="font-semibold">業者による作業品質の差や、当日の費用に関する認識のずれ</strong>
              を指摘する声も見られました。これはプラットフォーム型サービス全般に共通する傾向でもあります。気になる点も把握したうえで、口コミ件数や評価をよく確認し、予約前にメッセージで作業範囲・追加費用を擦り合わせておくと安心です。
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
                  <li>実利用者の口コミ・星評価を見て業者を選べる</li>
                  <li>料金が事前に明示され、透明性が高い</li>
                  <li>予約前にメッセージで作業内容を直接やり取りできる</li>
                  <li>当日キャンセルや後払いに対応する業者もある</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>出店業者ごとに作業品質や対応に差が出ることがある</li>
                  <li>大型・多台数の業務用案件は対応業者が限られる場合がある</li>
                  <li>設置環境次第で当日費用が変わることがあり、事前確認が必要</li>
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
                  <li>口コミと料金を比較して、自分で業者を選びたい店舗・事務所</li>
                  <li>1〜数台の設置・取り外しを明朗な料金で頼みたい事業者</li>
                  <li>予約前に業者と直接やり取りして納得してから決めたい方</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>大型施設の空調設計や多拠点の一括導入を相談したい事業者</li>
                  <li>メーカー横断の本体仕入れ・リースまでまとめたい場合</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Price */}
          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              料金・マッチングの仕組み
            </h2>
            <p className="leading-8 text-slate-700">
              くらしのマーケットは、各業者が
              <strong className="font-semibold">作業内容ごとの料金を事前に明示する仕組み</strong>
              で、利用者は料金・口コミ・対応エリアを比較して直接予約します。業務用エアコンの場合、機種の馬力・台数・設置場所・既存機の撤去有無などで費用が変わりますが、基本料金が見えやすいため相場感を掴みやすいのが特徴です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              ただし設置環境や追加部材によって当日に費用が変わることもあるため、予約前にメッセージで作業範囲と追加費用の有無を確認しておくと安心です。料金を抑えたい場合は、複数業者の料金・口コミ・保証を横並びで比較するのがおすすめです。
            </p>
            <p className="mt-3 text-xs text-slate-400">
              ※料金は出店業者ごとに異なります。最新の金額・作業範囲は各業者ページと事前メッセージでご確認ください。
            </p>
          </section>

          {/* Flow */}
          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              予約から施工までの流れ
            </h2>
            <ol className="space-y-4">
              {[
                ["業者を検索・比較", "エリアと作業内容で業者を検索。料金・口コミ・星評価を見比べて候補を絞ります。"],
                ["メッセージで事前相談", "予約前に業者へメッセージで作業範囲や追加費用、設置環境を確認します。"],
                ["予約", "内容と料金に納得したら、希望日時を選んで直接予約します。"],
                ["当日・施工", "業者が訪問し、設置・取り外し工事を実施。当日の作業内容を確認します。"],
                ["完了・口コミ投稿", "作業完了後に支払い。利用後は口コミを投稿でき、次の利用者の参考になります。"],
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
              くらしのマーケットは、みんなのマーケットが運営する国内最大規模の口コミ型マッチングプラットフォームで、実利用者の口コミを見ながら料金が明示された業者を直接選べることが強みです。口コミでは選びやすさと料金の透明性を評価する声が目立つ一方、業者による作業品質の差や、当日費用の認識ずれを指摘する声もありました。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              業務用エアコンの設置は費用が大きいため、口コミと料金を1社で決めず、複数業者を比較し、作業範囲・追加費用・保証を事前に確認して選ぶのが失敗を防ぐコツです。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">業務用エアコン工事を検討中の方へ</p>
              <p className="text-teal-100 text-sm mb-5">
                まずは口コミと料金を見比べて、エリア対応の業者を探してみましょう。
              </p>
              <a
                href="https://curama.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors"
              >
                くらしのマーケット 公式サイトを見る
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
