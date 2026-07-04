import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "電気工事110番の口コミ・評判は？エアコン工事・緊急対応の料金と仕組みを解説",
  description:
    "生活トラブル対応サービス「電気工事110番」（運営：シェアリングテクノロジー）の口コミ・評判をまとめました。エアコン工事・緊急対応の仕組み、料金、対応エリア、メリット・デメリット、向いている事業者まで中立的に解説します。",
  alternates: { canonical: "/company/denki-koujikouji-110" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "電気工事110番とは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "良い口コミ・評判" },
  { id: "bad", label: "気になる口コミ・評判" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている事業者・向いていない事業者" },
  { id: "price", label: "料金・利用の仕組み" },
  { id: "flow", label: "問い合わせから作業完了までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "summary-last", label: "まとめ" },
];

const goodReviews = [
  {
    body:
      "問い合わせへの対応が早く、急ぎのトラブルでもすぐ動いてもらえました。電話での説明も丁寧で、初めてでも相談しやすかったです。",
    who: "利用者（緊急対応の体験談）",
    source: "セーフリー 掲載の電気工事110番口コミ",
  },
  {
    body:
      "作業員の方が丁寧で、料金の説明も明確でした。夜間でも対応してもらえて助かりました。",
    who: "利用者（電気・空調トラブル）",
    source: "第三者メディア掲載の電気工事110番口コミ",
  },
  {
    body:
      "見積もりが無料で、クレジットカード払いにも対応していたので利用しやすかったです。取り付け作業もスムーズでした。",
    who: "利用者（エアコン関連工事）",
    source: "第三者メディア掲載の電気工事110番口コミ",
  },
];

const faqs = [
  {
    q: "電気工事110番とはどんなサービスですか？",
    a: "電気工事110番は、漏電修理・コンセント工事・エアコン工事・換気扇工事などの電気まわりのトラブルに、全国・24時間365日の受付で対応するWebサービスです。受付後、加盟している地域の業者が現場に伺う仕組みです。",
  },
  {
    q: "業務用エアコンの工事にも対応していますか？",
    a: "電気工事と空調工事を扱うサービスのため、エアコンの設置・修理に関する相談に対応しています。ただし大型の業務用機種や特殊な設置環境は、現場や加盟店によって対応可否が分かれることがあるため、問い合わせ時に内容を具体的に伝えて確認するのが確実です。",
  },
  {
    q: "料金はどのくらいですか？",
    a: "作業内容によって異なり、見積もりは無料とされています。出張費や部品代が別途かかる場合があるため、作業前に総額と作業範囲を必ず確認しましょう。緊急・深夜対応では割増料金が発生することがあります。",
  },
  {
    q: "本当に24時間・全国どこでも対応してもらえますか？",
    a: "受付は24時間365日対応とされていますが、実際の訪問時間や対応可否は地域や時間帯、加盟店の状況によって変わります。地方や深夜帯はすぐに駆けつけられないこともあるため、対応可能時間を事前に確認しておくと安心です。",
  },
  {
    q: "運営会社はどこですか？",
    a: "電気工事110番は、東証グロース市場に上場するシェアリングテクノロジー株式会社が運営するWebサービスのひとつです。生活トラブル全般のマッチング・受付を手がけており、加盟店ネットワークを通じてサービスを提供しています。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "電気工事110番の口コミ・評判は？エアコン工事・緊急対応の料金と仕組みを解説",
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
          { label: "電気工事110番の口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        {/* Eyecatch / Header */}
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-3">
            生活トラブル対応サービスレビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            電気工事110番の口コミ・評判は？
            <br className="hidden md:block" />
            エアコン工事・緊急対応の料金と仕組みを解説
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
              alt="エアコンや電気のトラブルに駆けつける作業員のイメージ"
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
            「エアコンが急に止まった」「電気まわりのトラブルをすぐ直したい」——そんなときに頼れるのが、24時間受付の生活トラブル対応サービスです。
            この記事では、電気・空調トラブルに対応する
            <strong className="font-semibold text-slate-900">電気工事110番</strong>
            （運営：シェアリングテクノロジー株式会社）について、公開されている利用者の声、料金や仕組み、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、各掲載サイトで公開されている内容を出典付きで引用・要約したものです。電気工事110番は受付窓口となるサービスで、実際の作業は加盟店が行います。最新情報は公式サイトや見積もりでご確認ください（調査時点：2026年6月）。
          </p>
        </div>


        {/* 結論即答 */}
        <div className="max-w-3xl mx-auto px-5 pt-8">
          <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-6">
            <p className="font-bold text-teal-800 mb-2">結論：電気工事110番の評判は？</p>
            <p className="text-[0.95rem] leading-7 text-slate-700">
              電気工事110番は<strong className="font-semibold">24時間受付の電気・空調トラブル対応窓口</strong>（運営：シェアリングテクノロジー株式会社・実作業は加盟店）です。口コミでは対応の速さ・料金説明の明確さを評価する声がある一方、<strong className="font-semibold">地方・深夜帯の駆けつけ時間や加盟店ごとの対応差</strong>を指摘する声もあります。作業範囲と料金内訳を着手前に確認するのが安心です。詳しくは<a href="#good" className="text-teal-700 underline underline-offset-4">実際の口コミ</a>と<a href="#price" className="text-teal-700 underline underline-offset-4">料金の仕組み</a>をご覧ください。
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
              電気工事110番とは
            </h2>
            <p className="leading-8 text-slate-700">
              電気工事110番は、漏電修理・分電盤工事・コンセント工事・インターホン工事・
              <strong className="font-semibold">エアコン工事</strong>
              ・換気扇工事など、電気まわりのトラブルに全国・24時間365日の受付で対応するWebサービスです。運営は、東証グロース市場に上場するシェアリングテクノロジー株式会社。生活トラブル全般のマッチング・受付を手がけており、加盟店ネットワークを通じてサービスを提供しています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              急なトラブルに素早く動ける受付体制と、電気工事と空調をあわせて相談できる点が特徴です。累計の問い合わせ実績も豊富で、上場企業が運営する安心感があります。
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
                    ["サービス名", "電気工事110番"],
                    ["サービス種別", "電気・空調トラブルの受付／加盟店マッチング"],
                    ["運営会社", "シェアリングテクノロジー株式会社（東証グロース上場）"],
                    ["受付", "24時間365日（全国）"],
                    ["対応エリア", "全国（加盟店ネットワークによる）"],
                    ["対応内容", "漏電・コンセント・インターホン・エアコン・換気扇 ほか"],
                    ["見積もり", "無料（出張費・部品代は別途の場合あり）"],
                    ["特徴", "緊急・夜間対応／上場企業運営／加盟店が施工を担当"],
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
              出典：電気工事110番公式サイト（運営会社情報）。受付体制・対応エリア等は変更される場合があります。
            </p>
          </section>

          {/* Good reviews */}
          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              良い口コミ・評判
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              公開されている口コミで多く見られたのは、
              <strong className="font-semibold">対応の速さと、作業員の丁寧さ・料金説明の明確さ</strong>
              を評価する声です。急ぎのトラブルでもすぐ動いてもらえた、夜間でも対応してもらえた、見積もりが無料で相談しやすい、といった点が好意的に受け止められています。
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
              ※上記は第三者メディアに掲載された口コミをもとに要約したものです。出典を明記したうえで参考としてご覧ください。評価は依頼内容や対応した加盟店によって異なります。
            </p>
          </section>

          {/* Mid image */}
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image
              src="/images/hero-b.png"
              alt="エアコンの設置・修理を行う作業のイメージ"
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
              一方で、加盟店型のサービスならではの注意点を挙げる声もありました。実際の作業は地域の加盟店が担当するため、
              <strong className="font-semibold">対応の質や時間帯ごとの対応可否に差が出ることがある</strong>
              という指摘です。また、出張費や部品代を含めた総額は作業前にしっかり確認しておきたい、という声も見られました。
            </p>
            <div className="grid gap-4">
              {[
                {
                  body:
                    "受付は24時間とのことでしたが、地方・深夜帯はすぐに来てもらえないこともありました。対応可能な時間を事前に聞いておくと安心です。",
                  who: "利用者（緊急対応の体験談）",
                  source: "第三者メディア掲載の電気工事110番口コミ",
                },
                {
                  body:
                    "加盟店によって対応の印象に差があると感じました。作業範囲と料金の内訳は、着手前に細かく確認しておくのがよいと思います。",
                  who: "利用者（電気・空調トラブル）",
                  source: "セーフリー 掲載の電気工事110番口コミ",
                },
              ].map((r, i) => (
                <figure key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <Stars n={3} />
                  <blockquote className="mt-3 text-slate-700 leading-7">「{r.body}」</blockquote>
                  <figcaption className="mt-3 text-sm text-slate-500">
                    {r.who}
                    <span className="block text-xs text-slate-400 mt-0.5">出典：{r.source}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-400">
              ※加盟店型のサービスでは、見積もり内容・作業範囲・総額（出張費・部品代を含む）を着手前に確認しておくとトラブルを避けやすくなります。これはこの種のサービス全般に共通する一般的な注意点です。
            </p>
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
                  <li>24時間365日受付で、急なトラブルに相談しやすい</li>
                  <li>電気工事と空調をあわせて相談できる</li>
                  <li>見積もり無料・クレジットカード払いにも対応</li>
                  <li>東証グロース上場企業が運営する安心感</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>実際の作業は加盟店が担当し、対応に地域差・店舗差が出ることがある</li>
                  <li>緊急・深夜対応では割増料金が発生する場合がある</li>
                  <li>計画的・大型の業務用工事は専門業者の方が向く場合がある</li>
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
                  <li>急なエアコン・電気トラブルをすぐ解決したい店舗・事業者</li>
                  <li>営業時間外や夜間の対応を相談したい場合</li>
                  <li>電気工事もまとめて1か所に相談したい方</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>計画的に複数台・大型の業務用機を入れ替えたい場合</li>
                  <li>長期保証や省エネ提案など専門的な設計を重視する場合</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Price */}
          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              料金・利用の仕組み
            </h2>
            <p className="leading-8 text-slate-700">
              電気工事110番では、作業内容に応じて料金が決まり、
              <strong className="font-semibold">見積もりは無料</strong>
              とされています。出張費や部品代が別途かかる場合があり、緊急・深夜帯の対応では割増料金が発生することがあります。実際の作業は受付後に手配される加盟店が担当します。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              安心して利用するためのコツは、作業に着手する前に「総額（出張費・部品代込み）」と「作業範囲」を明確にしてもらうことです。急ぎでない計画的な工事であれば、複数業者から相見積もりを取り、料金・保証・対応を比較するのがおすすめです。
            </p>
            <p className="mt-3 text-xs text-slate-400">
              ※料金は作業内容・地域・時間帯・加盟店によって異なります。正式な金額は見積もりで確認してください。
            </p>
          </section>

          {/* Flow */}
          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              問い合わせから作業完了までの流れ
            </h2>
            <ol className="space-y-4">
              {[
                ["問い合わせ・相談", "電話またはWebフォームから、トラブル内容や設置・修理の希望を伝えます。24時間受付です。"],
                ["加盟店の手配・訪問", "内容に応じて地域の加盟店を手配。担当者が現場に伺います。"],
                ["現地確認・見積もり", "状況を確認し、作業内容と総額（出張費・部品代込み）を提示。見積もりは無料です。"],
                ["作業の実施", "内容に納得したうえで作業を実施。エアコン・電気工事をあわせて対応できます。"],
                ["完了確認・支払い", "動作を確認して完了。クレジットカード払いにも対応しています。"],
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
              電気工事110番は、東証グロース上場のシェアリングテクノロジーが運営する電気・空調トラブルの受付サービスで、24時間365日の受付体制、電気工事と空調をまとめて相談できること、緊急時のスピード対応が強みです。口コミでは対応の速さと作業員の丁寧さ、料金説明の明確さを評価する声が目立ちます。一方で、実際の作業は加盟店が担当するため、対応の質や時間帯ごとの可否に差が出ることがある点は理解しておきましょう。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              急なトラブルには頼りになる一方、計画的・大型の業務用エアコン工事では、専門業者を含めて複数社から相見積もりを取り、料金・保証・対応を比較して選ぶのが失敗を防ぐコツです。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">急なエアコン・電気トラブルでお困りの方へ</p>
              <p className="text-teal-100 text-sm mb-5">
                まずは無料の見積もりで、作業内容と総額の目安を確認してみましょう。
              </p>
              <a
                href="https://www.sharing-tech.co.jp/denki/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors"
              >
                電気工事110番 公式サイトを見る
              </a>
            </div>
          </section>

          {/* Related */}
          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/ranking", label: "業務用エアコン業者ランキング" },
                { href: "/ranking/cheap", label: "費用を抑えて選ぶ業務用エアコン" },
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
