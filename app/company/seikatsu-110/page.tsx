import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "生活110番は怪しい？口コミ・評判と業務用エアコンでの使い方・加盟店の仕組み【2026年】",
  description:
    "生活トラブル総合サービス「生活110番」（運営：シェアリングテクノロジー株式会社）の口コミ・評判をまとめました。業務用エアコンの設置・修理で使えるのか、加盟店紹介型の仕組み、料金、メリット・デメリット、向いている事業者まで中立的に解説します。",
  alternates: { canonical: "/company/seikatsu-110" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "生活110番とは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "良い口コミ・評判" },
  { id: "bad", label: "気になる口コミ・評判" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている事業者・向いていない事業者" },
  { id: "price", label: "料金・加盟店紹介の仕組み" },
  { id: "flow", label: "問い合わせから施工までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "summary-last", label: "まとめ" },
];

const goodReviews = [
  {
    body:
      "夜遅い時間に焦って電話したのに、対応がとても丁寧で優しく、30分以内にスタッフが来てくれました。急ぎのトラブルで本当に助かりました。",
    who: "鍵トラブルで利用した方（深夜23時頃）",
    source: "みん評 掲載の生活110番 利用者口コミ",
  },
  {
    body:
      "見積りと説明がわかりやすく、安心してお願いできました。対応も早く、丁寧な対応で助かりました。",
    who: "解体・駆除作業を依頼した方",
    source: "みん評 掲載の生活110番 利用者口コミ",
  },
  {
    body:
      "目的にあった業者を紹介してもらえて、作業も丁寧、料金も納得できる範囲でした。何をどこに頼めばいいか分からなかったので助かりました。",
    who: "生活トラブルを相談した利用者",
    source: "駅探PICKS（生活110番のリアルな口コミ）",
  },
  {
    body:
      "24時間いつでも受付してくれるので、急なトラブルでもまず電話して相談できる安心感があります。",
    who: "緊急対応を利用した方",
    source: "カジナビ 掲載の生活110番 口コミ",
  },
];

const badReviews = [
  {
    body:
      "紹介してもらった業者の作業後に、事前説明のなかった追加費用を案内されました。最初に費用の範囲をもう少し詳しく確認しておけばよかったです。",
    who: "設置作業を依頼した方（指摘を要約）",
    source: "おかたづけろぐ 掲載の生活110番 口コミ",
  },
  {
    body:
      "紹介される業者には当たりはずれがあるように感じました。依頼の時期や地域によっては、対応まで少し日数がかかることもありました。",
    who: "利用者（傾向に関する指摘を要約）",
    source: "駅探PICKS（生活110番のリアルな口コミ）",
  },
];

const faqs = [
  {
    q: "生活110番は怪しい・危ないサービスですか？",
    a: "違法・詐欺的なサービスではありません。運営は東証グロース上場のシェアリングテクノロジー株式会社で、全国の加盟店を紹介する『マッチング型』のサービスです。『怪しい』と検索されるのは、①『110番』という名称、②自社で施工せず加盟店を紹介する仕組みが分かりにくい、③紹介される加盟店ごとに料金・品質に差が出る、といった点が理由と考えられます。仕組みを理解したうえで、契約前に見積もりの内訳・作業範囲・加盟店名を確認すれば、業務用エアコンの相談先として問題なく利用できます。",
  },
  {
    q: "電気工事110番やエアコン110番とは違うのですか？",
    a: "『生活110番』『電気工事110番』『エアコン110番』は、いずれもシェアリングテクノロジー株式会社が運営する『110番シリーズ』の生活トラブル解決サービスです。分野ごとに窓口が分かれていますが、実際の作業は提携する加盟店が行う紹介型の仕組みという点は共通です。業務用エアコンの設置・修理を依頼したい場合は、対応できる加盟店を紹介してもらえるか事前に確認するとよいでしょう。",
  },
  {
    q: "生活110番は業務用エアコンの設置や修理に対応していますか？",
    a: "はい。生活110番は電気工事や空調設備を含む生活トラブル全般を扱う紹介サービスで、業務用エアコンの設置・修理・メンテナンスにも対応しています。実際の施工は、相談内容に応じて紹介される加盟店（提携業者）が担当します。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "全国に対応しています。全国7,400社以上の加盟店ネットワークから、地域や内容に合った業者を紹介する仕組みです。ただし加盟店の所在状況によっては、地域や時期で対応スピードに差が出る場合があります。",
  },
  {
    q: "料金の目安は？追加費用はかかりますか？",
    a: "料金は紹介される加盟店ごとに異なり、機種・台数・設置環境によって変わります。生活110番自体は無料で相談・見積もり依頼ができますが、配管カバーなどの追加作業で費用が発生することもあるため、契約前に見積もりの内訳と作業範囲を確認しておくと安心です。",
  },
  {
    q: "見積もり後にキャンセルできますか？",
    a: "見積もり内容に納得がいかない場合はキャンセルが可能とされています。複数業者の見積もりを比較したうえで判断したい場合にも使いやすい仕組みです。",
  },
  {
    q: "運営会社はどこですか？上場企業ですか？",
    a: "「生活110番」は、愛知県名古屋市に本社を置くシェアリングテクノロジー株式会社が運営しています。2017年に東証マザーズ（現グロース）へ上場した企業で、暮らしのお困りごとを加盟店とマッチングするWEB事業を展開しています。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "生活110番は怪しい？口コミ・評判と業務用エアコンでの使い方・加盟店の仕組み【2026年】",
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
          { label: "生活110番の口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        {/* Eyecatch / Header */}
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-3">
            業務用エアコン業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            生活110番の口コミ・評判は？
            <br className="hidden md:block" />
            業務用エアコンの依頼で使える？料金・加盟店の仕組みを解説
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
            店舗やオフィスの空調トラブル、あるいは業務用エアコンの設置を「どこに頼めばいいのか分からない」というとき、生活トラブル全般の窓口として知られるのが
            <strong className="font-semibold text-slate-900">生活110番</strong>
            （運営：シェアリングテクノロジー株式会社）です。この記事では、業務用エアコンの依頼に使えるのかという視点で、実際に公開されている利用者の口コミ、加盟店紹介型の仕組み、料金、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、各掲載サイトで公開されている内容を出典付きで引用・要約したものです。料金や対応内容は時期・地域・加盟店により変わるため、最新の情報は公式サイトや無料見積もりでご確認ください（調査時点：2026年6月）。
          </p>
        </div>


        {/* 結論即答 */}
        <div className="max-w-3xl mx-auto px-5 pt-8">
          <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-6">
            <p className="font-bold text-teal-800 mb-2">結論：生活110番は業務用エアコンの依頼に使える？</p>
            <p className="text-[0.95rem] leading-7 text-slate-700">
              生活110番は<strong className="font-semibold">業務用エアコンの設置・修理にも対応する加盟店紹介型の総合窓口</strong>（運営：シェアリングテクノロジー株式会社・24時間365日受付）です。一つの窓口で空調以外のトラブルもまとめて相談できるのが強みですが、<strong className="font-semibold">実際の施工は紹介された加盟店が行うため、料金・品質は加盟店により変わります</strong>。紹介後の見積もり内容の確認が重要で、空調専門性を最優先するなら専門業者との相見積もりがおすすめです。詳しくは<a href="#good" className="text-teal-700 underline underline-offset-4">実際の口コミ</a>と<a href="#price" className="text-teal-700 underline underline-offset-4">料金の仕組み</a>をご覧ください。
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
              生活110番とは
            </h2>
            <p className="leading-8 text-slate-700">
              生活110番は、水回り・電気・鍵・害虫駆除などの生活トラブル全般を扱う
              <strong className="font-semibold">総合マッチングサービス</strong>
              です。利用者からの相談を受け、内容や地域に合った加盟店（提携業者）を紹介する「加盟店紹介型」の仕組みが特徴で、業務用エアコンの設置・修理・メンテナンスにも対応しています。空調以外の設備トラブルもまとめて一つの窓口に相談できる点が、店舗・オフィスの運営者にとって使いやすいポイントです。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              運営は、名古屋市に本社を構えるシェアリングテクノロジー株式会社。全国7,400社以上の加盟店ネットワークを持ち、24時間365日の受付体制を整えています。自社で施工するのではなく、各地域のプロをマッチングするプラットフォームである点が、専門の自社施工業者とは異なる特徴です。
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
                    ["サービス名", "生活110番（生活トラブル総合マッチング）"],
                    ["運営会社", "シェアリングテクノロジー株式会社"],
                    ["本社所在地", "愛知県名古屋市中村区名駅 JPタワー名古屋19F"],
                    ["上場区分", "東証グロース上場（2017年上場）"],
                    ["サービス形態", "加盟店紹介型（自社施工ではなくマッチング）"],
                    ["加盟店数", "全国7,400社以上"],
                    ["対応エリア", "全国（加盟店が施工を担当）"],
                    ["受付時間", "24時間365日受付"],
                    ["保証", "各加盟店による"],
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
              出典：生活110番公式サイト（運営会社）、シェアリングテクノロジー株式会社 企業情報。加盟店数・受付時間等は変更される場合があります。
            </p>
          </section>

          {/* Good reviews */}
          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              良い口コミ・評判
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              公開されている口コミで多く見られたのは、
              <strong className="font-semibold">受付対応の丁寧さと、急ぎのトラブルへのスピード感</strong>
              を評価する声です。24時間受付で電話相談ができる安心感、見積りや説明のわかりやすさ、目的に合った業者を紹介してもらえた点などが好意的に受け止められています。
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
              ※口コミは生活トラブル全般に対する利用者の声を含みます。実際の施工は紹介される加盟店が担当するため、評価は依頼内容や担当業者によって異なります。出典を明記したうえで参考としてご覧ください。
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
              一方で、加盟店紹介型のサービスである性質上、
              <strong className="font-semibold">紹介される業者によって対応にばらつきが出ること</strong>
              や、追加費用の事前説明に関する指摘も見られました。これはマッチング型サービス全般に共通する傾向でもあります。気になる点も把握したうえで、契約前に見積もりの内訳・作業範囲・追加費用の有無を確認しておくと安心です。
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
                  <li>空調以外の設備トラブルもまとめて一つの窓口に相談できる</li>
                  <li>24時間365日受付で、急なトラブルにも電話で相談しやすい</li>
                  <li>全国7,400社以上の加盟店から地域に合った業者を紹介してくれる</li>
                  <li>見積もりに納得いかない場合はキャンセルできる</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>施工は加盟店が担当するため、対応品質に業者差が出ることがある</li>
                  <li>業務用エアコン専門業者と比べると、専門性や提案力に差が出る場合がある</li>
                  <li>追加費用の有無は事前に内訳を確認しておく必要がある</li>
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
                  <li>空調を含む生活・設備トラブルをまとめて相談したい店舗・事務所</li>
                  <li>急なエアコン不調で、まず電話で相談したい事業者</li>
                  <li>どこに頼めばいいか分からず、業者紹介から任せたい方</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>大型施設や複数台の本格的な空調設計まで相談したい事業者</li>
                  <li>施工業者を自分で指名・固定して継続依頼したい場合</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Price */}
          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              料金・加盟店紹介の仕組み
            </h2>
            <p className="leading-8 text-slate-700">
              生活110番は、利用者からの相談を受けて、内容・地域に合った
              <strong className="font-semibold">加盟店を無料で紹介する仕組み</strong>
              です。料金は紹介される加盟店ごとに設定されており、業務用エアコンであれば機種の馬力・台数・設置環境・既存機の撤去有無などで費用が変わります。相談・見積もり依頼は無料で、紹介された業者の見積もりに納得してから契約する流れです。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              配管カバーなどの追加作業で費用が発生するケースもあるため、契約前に見積もりの内訳と作業範囲を確認しておくと安心です。料金を抑えたい場合は、複数業者から相見積もりを取り、本体価格・工事費・保証内容を横並びで比較するのがおすすめです。
            </p>
            <p className="mt-3 text-xs text-slate-400">
              ※料金は加盟店ごとに異なります。最新の金額・作業範囲は無料の見積もりでご確認ください。
            </p>
          </section>

          {/* Flow */}
          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              問い合わせから施工までの流れ
            </h2>
            <ol className="space-y-4">
              {[
                ["電話・Webで相談", "24時間365日受付の窓口に相談。設置場所や希望機種、台数、トラブル内容などを伝えます。"],
                ["加盟店の紹介・現地調査", "内容と地域に合った加盟店を紹介。担当業者が設置環境を確認します。"],
                ["見積もりの確認", "紹介された加盟店から見積もりを受け取り、内訳・作業範囲・追加費用を確認します。"],
                ["契約・施工", "見積もりに納得したら契約。加盟店が訪問し、設置・修理工事を行います。"],
                ["引き渡し・アフター対応", "動作確認のうえ引き渡し。保証やアフター対応は担当加盟店の内容に準じます。"],
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
              生活110番は、上場企業であるシェアリングテクノロジーが運営する生活トラブル総合サービスで、業務用エアコンを含む設備のトラブルを一つの窓口にまとめて相談できること、24時間受付で急ぎにも対応しやすいことが強みです。口コミでは受付対応の丁寧さやスピードを評価する声が目立つ一方、加盟店紹介型ゆえに業者によって対応に差が出ることや、追加費用の確認を求める声もありました。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              業務用エアコンの導入・修理は費用が大きいため、1社で決めず、複数業者から相見積もりを取り、料金・保証・対応エリアを比較して選ぶのが失敗を防ぐコツです。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">業務用エアコンの設置・修理を検討中の方へ</p>
              <p className="text-teal-100 text-sm mb-5">
                まずは無料の相談・見積もり依頼で、機種と費用の目安を確認してみましょう。
              </p>
              <a
                href="https://www.seikatsu110.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors"
              >
                生活110番 公式サイトを見る
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
