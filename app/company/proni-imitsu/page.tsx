import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "PRONIアイミツの口コミ・評判は？業務用エアコン業者の一括見積もり・使い方を徹底調査【2026年最新】｜空調プロナビ",
  description:
    "BtoB一括見積もりサービス「PRONIアイミツ」（旧アイミツ／PRONI株式会社）の口コミ・評判をまとめました。業務用エアコン業者の紹介・マッチングの仕組み、無料で使える理由、向いている事業者、利用時の注意点を中立的に解説。2026年最新情報で紹介します。",
  alternates: { canonical: "/company/proni-imitsu" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "PRONIアイミツとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "howto", label: "業者紹介・マッチングの仕組み" },
  { id: "good", label: "良い口コミ・評判" },
  { id: "note", label: "利用前に知っておきたい注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている事業者・向いていない事業者" },
  { id: "price", label: "料金・無料で使える理由" },
  { id: "flow", label: "問い合わせから発注までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "summary-last", label: "まとめ" },
];

const goodReviews = [
  {
    body:
      "一度の問い合わせで複数の業者を紹介してもらえて、自分で何社も探す手間が省けました。比較しながら選べたのが良かったです。",
    who: "発注を行った事業者の利用体験",
    source: "PRONIアイミツ 利用者の発注体験レビュー",
  },
  {
    body:
      "断りの連絡を代行してもらえたので、検討しなかった業者へのやり取りに気を使わずに済みました。",
    who: "一括見積もりの利用者",
    source: "PRONIアイミツ マッチングサービス利用レビュー",
  },
];

const faqs = [
  {
    q: "PRONIアイミツは業者そのものですか？",
    a: "いいえ。PRONIアイミツは業者を紹介・マッチングするサービスで、施工や販売を直接行う業者ではありません。要望を伝えると、条件に合う業務用エアコン業者を複数紹介してもらえる仕組みです。実際の工事や販売は、紹介された各業者が担当します。",
  },
  {
    q: "利用に費用はかかりますか？",
    a: "発注者（依頼する側）はサービスを無料で利用できます。マッチングが成立した際に、受注する業者側が費用を負担するビジネスモデルのため、依頼者は無料で複数社の見積もりを取れます。",
  },
  {
    q: "業務用エアコンの業者も紹介してもらえますか？",
    a: "はい。PRONIアイミツは幅広い業種のBtoB発注に対応しており、業務用エアコンの設置・入れ替えを手がける業者の紹介にも対応しています。要望や予算、エリアを伝えることで、条件に合う業者を比較検討できます。",
  },
  {
    q: "気が進まない業者を断るときはどうすればいいですか？",
    a: "PRONIアイミツには断り連絡の代行があり、検討しなかった業者への連絡を任せられます。複数社とやり取りするうえでの心理的な負担を減らせるのが特徴です。",
  },
  {
    q: "運営会社はどこですか？",
    a: "PRONIアイミツは、PRONI株式会社（旧アイミツ）が運営するBtoB一括見積もり・ビジネスマッチングサービスです。累計のマッチング実績は30万件規模、優良パートナー企業は2,500社規模とされています。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "PRONIアイミツの口コミ・評判は？業務用エアコン業者の一括見積もり・使い方を徹底調査",
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
          { label: "PRONIアイミツの口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        {/* Eyecatch / Header */}
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-3">
            業務用エアコン 一括見積もりサービスレビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            PRONIアイミツの口コミ・評判は？
            <br className="hidden md:block" />
            業務用エアコン業者の一括見積もり・使い方を徹底調査
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
              alt="複数の業者を比較検討しながら業務用エアコンを選ぶイメージ"
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
            「業務用エアコンの入れ替えを頼みたいけれど、どの業者に声をかければいいかわからない」というとき、複数社をまとめて比較できる
            <strong className="font-semibold text-slate-900">PRONIアイミツ</strong>
            （旧アイミツ）が選択肢になります。PRONIアイミツは、自社で工事を行う業者ではなく、条件に合う業者を紹介する
            <strong className="font-semibold text-slate-900">BtoB一括見積もり・マッチングサービス</strong>
            です。この記事では、仕組み、利用者の声、無料で使える理由、向いている事業者、注意点を中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事は公開情報をもとに構成しています。サービスはマッチングであり、実際の施工・販売は紹介先の各業者が担当します。最新の対応内容は公式サイトでご確認ください（調査時点：2026年6月）。
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
              PRONIアイミツとは
            </h2>
            <p className="leading-8 text-slate-700">
              PRONIアイミツは、PRONI株式会社（旧アイミツ）が運営する
              <strong className="font-semibold">BtoB一括見積もり・ビジネスマッチングサービス</strong>
              です。業務用エアコンの設置・入れ替えをはじめ、幅広い業種の発注ニーズに対応しており、要望を伝えると条件に合う業者を複数紹介してもらえます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              累計のマッチング実績は30万件規模、紹介できる優良パートナー企業は2,500社規模とされています。発注者は無料で利用でき、検討しなかった業者への断り連絡を代行してくれるなど、複数社を比較検討しやすい仕組みが整っているのが特徴です。
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
                    ["サービス名", "PRONIアイミツ（旧アイミツ）"],
                    ["運営会社", "PRONI株式会社"],
                    ["サービス区分", "BtoB一括見積もり・ビジネスマッチング"],
                    ["対応業種", "業務用エアコンを含む幅広いBtoB発注"],
                    ["マッチング実績", "累計30万件規模"],
                    ["登録パートナー", "優良パートナー2,500社規模"],
                    ["発注者の費用", "無料（断り連絡の代行あり）"],
                    ["公式サイト", "https://imitsu.jp/"],
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
              出典：PRONIアイミツ公式サイト（会社・サービス情報）。実績数値・対応内容は変更される場合があります。
            </p>
          </section>

          {/* How to */}
          <section id="howto" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              業者紹介・マッチングの仕組み
            </h2>
            <p className="leading-8 text-slate-700 mb-5">
              PRONIアイミツは、自社で施工・販売を行うのではなく、
              <strong className="font-semibold">発注者と業者をつなぐマッチング</strong>
              が役割です。流れはシンプルで、要望を一度伝えるだけで複数社を比較検討できます。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-teal-600 font-bold">・</span>業務用エアコンの設置・入れ替えなど、希望条件・予算・エリアを伝える</li>
              <li className="flex gap-3"><span className="text-teal-600 font-bold">・</span>条件に合う業者を複数紹介してもらえる</li>
              <li className="flex gap-3"><span className="text-teal-600 font-bold">・</span>見積もりや提案を比較し、依頼先を選ぶ</li>
              <li className="flex gap-3"><span className="text-teal-600 font-bold">・</span>検討しなかった業者への断り連絡は代行してもらえる</li>
            </ul>
            <p className="mt-5 leading-8 text-slate-700">
              ミツモアやEMEAO!などと同じく、複数社の見積もりを一度に集めて比較したいときに使うサービスです。最終的な契約や工事は、紹介された各業者と直接やり取りして進めます。
            </p>
          </section>

          {/* Good reviews */}
          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              良い口コミ・評判
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              公開されている利用体験で評価されているのは、
              <strong className="font-semibold">一度の依頼で複数社を比較できる手軽さと、断り連絡の代行</strong>
              です。自分で何社も探して個別に問い合わせる手間が省け、やり取りの負担が軽くなる点が支持されています。
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
              ※掲載の声は一括見積もり・マッチングサービスの利用体験に対するものです。施工そのものの品質は、紹介された各業者によって異なります。
            </p>
          </section>

          {/* Mid image */}
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image
              src="/images/hero-b.png"
              alt="複数社の見積もりを比較しながら業務用エアコン業者を選ぶ様子"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          {/* Note */}
          <section id="note" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              利用前に知っておきたい注意点
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              PRONIアイミツはあくまで業者を紹介するサービスのため、
              <strong className="font-semibold">最終的な工事の品質・料金は紹介先の業者によって決まる</strong>
              点を理解しておくことが大切です。マッチング自体は便利でも、業者選びは依頼者側でしっかり比較する必要があります。
            </p>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-slate-700 leading-7">
                  ・紹介される業者の対応や料金には差があります。見積もりの内訳、保証、対応エリアを各社で比較して選びましょう。
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-slate-700 leading-7">
                  ・複数社から連絡が来るため、検討状況に応じて早めに断り連絡の代行を活用すると、やり取りがスムーズになります。
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-slate-700 leading-7">
                  ・契約・工事は紹介先の業者と直接結ぶことになるため、契約内容やアフター対応は各業者と直接確認してください。
                </p>
              </div>
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
                  <li>一度の依頼で複数社をまとめて比較できる</li>
                  <li>発注者は無料で利用できる</li>
                  <li>断り連絡を代行してもらえ、やり取りの負担が軽い</li>
                  <li>業者を自分で探す手間を大きく減らせる</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>自社で施工する業者ではなく、紹介・マッチングサービス</li>
                  <li>工事の品質・料金は紹介先の業者によって異なる</li>
                  <li>複数社から連絡が来るため、比較・選定の手間は残る</li>
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
                  <li>複数社の見積もりを比較して相場を把握したい事業者</li>
                  <li>自分で業者を探す時間や手間を省きたい場合</li>
                  <li>業者とのやり取りの負担をできるだけ減らしたい場合</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>依頼したい業者がすでに決まっている場合</li>
                  <li>本体だけを安く購入したい（業者紹介を必要としない）場合</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Price */}
          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              料金・無料で使える理由
            </h2>
            <p className="leading-8 text-slate-700">
              PRONIアイミツは、
              <strong className="font-semibold">発注者（依頼する側）は無料</strong>
              で利用できます。これは、マッチングが成立した際に受注する業者側が費用を負担するビジネスモデルのためで、依頼者は費用をかけずに複数社の見積もりを集められます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              実際の工事費用は、紹介された各業者の見積もりによって決まります。業務用エアコンは機種の馬力・台数・設置場所・既存機の撤去有無で費用が変わるため、紹介された複数社の見積もりを、本体価格・工事費・保証年数・アフター対応の観点で横並びに比較するのがおすすめです。
            </p>
            <p className="mt-3 text-xs text-slate-400">
              ※サービスの料金体系・対応内容は変更される場合があります。最新情報は公式サイトでご確認ください。
            </p>
          </section>

          {/* Flow */}
          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              問い合わせから発注までの流れ
            </h2>
            <ol className="space-y-4">
              {[
                ["要望の入力・相談", "業務用エアコンの希望条件・予算・エリアなどを伝えます。"],
                ["業者の紹介", "条件に合う業者を複数紹介してもらえます。"],
                ["見積もり・提案の比較", "各社の見積もりや提案を比較し、内容を確認します。"],
                ["発注先の決定", "条件の合う業者を選び、契約を進めます。検討外の業者は断り連絡を代行してもらえます。"],
                ["工事・アフター対応", "選んだ業者と直接、工事日程やアフター対応を進めます。"],
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
              PRONIアイミツは、PRONI株式会社が運営するBtoB一括見積もり・マッチングサービスで、業務用エアコン業者の紹介にも対応しています。一度の依頼で複数社を比較でき、発注者は無料、断り連絡の代行もあるため、業者探しの手間とやり取りの負担を大きく減らせるのが強みです。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              一方で、PRONIアイミツ自体は施工業者ではなく、工事の品質や料金は紹介先の業者によって変わります。紹介された複数社の見積もりを、料金・保証・対応エリアの観点でしっかり比較して選ぶことが、失敗を防ぐコツです。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">業務用エアコン業者を比較検討したい方へ</p>
              <p className="text-teal-100 text-sm mb-5">
                まずは無料の一括見積もりで、複数社の料金や提案を比べてみましょう。
              </p>
              <a
                href="https://imitsu.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors"
              >
                PRONIアイミツ公式サイトを見る
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
