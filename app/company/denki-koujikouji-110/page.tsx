import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "電気工事110番・換気扇110番は悪質？口コミ・評判と料金・契約の仕組みを公式で確認",
  description:
    "「電気工事110番」と同じ運営会社（シェアリングテクノロジー）の「換気扇110番」の口コミ・評判と、悪質かどうかを判断するための事実を公式サイトで確認しました。換気扇110番の料金表（交換11,000円〜・掃除10,000円〜）、見積もり後のキャンセル、契約相手が加盟店になる規約の仕組みを解説します。",
  alternates: { canonical: "/company/denki-koujikouji-110" },
};

const UPDATED = "2026年10月28日";

const toc = [
  { id: "summary", label: "電気工事110番とは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "kankisen", label: "換気扇110番は悪質？運営会社・料金・契約の仕組み" },
  { id: "good", label: "良い口コミ・評判" },
  { id: "bad", label: "注意点（公式の注記・利用規約から）" },
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
      "作業内容、原因、金額等、説明しながら修理してくださり、安心して依頼できました。",
    who: "漏電修理［神奈川県相模原市南区］2026年9月24日",
    source: "電気工事110番 公式サイト「最新の口コミ」",
  },
  {
    body:
      "祝日に停電になり、本当に焦っていたので、すごく助かりました。不具合の原因も丁寧に教えていただき、稀な故障だったという言葉にも救われました。",
    who: "漏電修理［香川県綾歌郡宇多津町］2026年9月28日",
    source: "電気工事110番 公式サイト「最新の口コミ」",
  },
  {
    body:
      "何ヶ所か、たらい回しのあとの業者さんで、とても親切な方で本当に助かりました。",
    who: "電気工事全般［埼玉県さいたま市桜区］2026年9月14日",
    source: "電気工事110番 公式サイト「最新の口コミ」",
  },
];

const faqs = [
  {
    q: "電気工事110番とはどんなサービスですか？",
    a: "電気工事110番は、漏電修理・コンセント工事・エアコン工事・換気扇工事などの電気まわりのトラブルに、全国・24時間365日の受付で対応するWebサービスです。受付後、加盟している地域の業者が現場に伺う仕組みです。",
  },
  {
    q: "業務用エアコンの工事にも対応していますか？",
    a: "電気工事と空調工事を扱うサービスのため、エアコンの設置・修理に関する相談に対応しています。ただし大型の業務用機種や特殊な設置環境は、現場や加盟店によって対応可否が分かれることがあるため、問い合わせ時に内容を具体的に伝えたうえで、対応可否をご確認ください。",
  },
  {
    q: "料金はどのくらいですか？",
    a: "公式サイトの料金表（税込の最低額）では、エアコン工事7,700円〜、換気扇・レンジフード工事8,800円〜、漏電修理・ブレーカー工事5,500円〜です。対応エリア・加盟店によっては記載の価格で対応できない場合があり、事前の確認のうえ調査費用がかかる場合もあるため、作業前に総額と作業範囲を必ずご確認ください。",
  },
  {
    q: "本当に24時間・全国どこでも対応してもらえますか？",
    a: "受付は24時間365日対応とされていますが、実際の訪問時間や対応可否は地域や時間帯、加盟店の状況によって変わります。地方や深夜帯はすぐに駆けつけられない場合もあるため、対応可能時間を事前にご確認ください。",
  },
  {
    q: "運営会社はどこですか？",
    a: "電気工事110番は、東証グロース市場に上場するシェアリングテクノロジー株式会社が運営するWebサービスのひとつです。生活トラブル全般のマッチング・受付を手がけており、加盟店ネットワークを通じてサービスを提供しています。",
  },
  {
    q: "換気扇110番は悪質な業者ですか？",
    a: "換気扇110番（kankisen-c.jp）は、電気工事110番と同じシェアリングテクノロジー株式会社（証券コード3989）が運営する受付サービスで、実際の作業は加盟店が行います。料金は公式の料金表で交換11,000円〜（税込）、掃除はプロペラタイプ10,000円〜・レンジフードタイプ11,000円〜（税込）です。公式は現地調査後の見積もりを無料、見積もり後のキャンセルも可能としていますが、エリア・加盟店・現場状況によっては事前の確認のうえで調査・見積もりに費用がかかる場合があると注記しています。利用規約では契約はお客様と加盟店の間で結ばれるとされているため、作業前に総額・作業範囲・調査費の有無を書面で確認すると安心です（2026年10月19日に公式サイトで確認）。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "電気工事110番・換気扇110番は悪質？口コミ・評判と料金・契約の仕組みを公式で確認",
  datePublished: "2026-06-10",
  dateModified: "2026-10-28",
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
            生活トラブル対応サービスの口コミ・評判
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            電気工事110番・換気扇110番は悪質？
            <br className="hidden md:block" />
            口コミ・評判と料金・契約の仕組みを公式で確認
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>空調プロナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-10-28">最終更新：{UPDATED}</time>
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
            エアコンの急な停止や電気まわりのトラブルに対しては、24時間受付の生活トラブル対応サービスを利用する方法があります。
            本記事では、電気・空調トラブルに対応する
            <strong className="font-semibold text-slate-900">電気工事110番</strong>
            （運営：シェアリングテクノロジー株式会社）について、公式サイトに掲載された利用者の声、料金や仕組み、メリット・デメリットを、良い点・注意点の両面から中立的にまとめています。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、電気工事110番の公式サイトに掲載されているものを原文のまま引用しています（運営会社が選んで掲載している口コミで、掲載基準は公開されていません）。電気工事110番は受付窓口となるサービスで、実際の作業は加盟店が行います。料金・条件は公式サイトと見積もりでご確認ください（2026年10月19日確認）。
          </p>
        </div>


        {/* 換気扇110番の即答 */}
        <div className="max-w-3xl mx-auto px-5 pt-8">
          <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6">
            <p className="font-bold text-amber-800 mb-2">換気扇110番は悪質？　公式サイトと利用規約で確認できること</p>
            <ul className="text-[0.95rem] leading-7 text-slate-700 list-disc pl-5 space-y-1">
              <li>運営は電気工事110番と同じシェアリングテクノロジー株式会社（東証上場・証券コード3989）。受付は運営会社、作業は地域の加盟店です</li>
              <li>料金は交換11,000円〜、掃除はプロペラタイプ10,000円〜・レンジフードタイプ11,000円〜（いずれも税込の最低額）</li>
              <li>公式は「現地調査の後、無料で見積もり」「見積もり後のキャンセル可」「見積もり確定後の追加料金なし」としつつ、エリア・加盟店・現場状況により内容が異なる場合があると注記しています</li>
              <li>利用規約第8条では、契約はお客様と加盟店の間で結ばれ、サービスの内容・質や苦情・解約は加盟店との間で扱うとされています</li>
            </ul>
            <p className="mt-3 text-[0.95rem] leading-7 text-slate-700">
              契約の相手は加盟店のため、悪質かどうかは来訪した加盟店の見積もりと説明で判断することになります。作業前に総額・作業範囲・調査費の有無を書面で受け取り、納得できない場合は依頼しないことが確実です。詳しくは<a href="#kankisen" className="text-teal-700 underline underline-offset-4">換気扇110番の料金と契約の仕組み</a>をご覧ください（2026年10月28日に<a href="https://www.kankisen-c.jp/price/" target="_blank" rel="nofollow noopener" className="underline underline-offset-2">料金のご案内</a>・<a href="https://www.kankisen-c.jp/terms/" target="_blank" rel="nofollow noopener" className="underline underline-offset-2">利用規約</a>で確認）。
            </p>
          </div>
        </div>
        {/* 結論即答 */}
        <div className="max-w-3xl mx-auto px-5 pt-8">
          <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-6">
            <p className="font-bold text-teal-800 mb-2">電気工事110番の評判の要点</p>
            <p className="text-[0.95rem] leading-7 text-slate-700">
              電気工事110番は<strong className="font-semibold">24時間受付の電気・空調トラブル対応窓口</strong>（運営：シェアリングテクノロジー株式会社・実作業は加盟店）です。公式サイトには原因や金額の説明の丁寧さを評価する口コミが掲載されています。一方で、公式の注記と利用規約では<strong className="font-semibold">料金・日時は加盟店やエリアで変わること、契約の相手は加盟店であること</strong>が示されています。作業範囲と料金の内訳は、着手前にご確認ください。詳しくは<a href="#good" className="text-teal-700 underline underline-offset-4">実際の口コミ</a>と<a href="#price" className="text-teal-700 underline underline-offset-4">料金の仕組み</a>をご覧ください。
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
              ・換気扇工事など、電気まわりのトラブルに全国・24時間365日の受付で対応するWebサービスです。運営は、東証上場（証券コード：3989）のシェアリングテクノロジー株式会社です。生活トラブル全般のマッチング・受付を手がけており、加盟店ネットワークを通じてサービスを提供しています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              急なトラブルに対応できる受付体制と、電気工事と空調をあわせて相談できる点が特徴です。運営会社は上場企業です。
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
                    ["見積もり", "原則無料（エリア・加盟店・現場状況により、事前確認のうえ調査費用がかかる場合あり）"],
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

          {/* 換気扇110番 */}
          <section id="kankisen" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              換気扇110番は悪質？運営会社・料金・契約の仕組み
            </h2>
            <p className="leading-8 text-slate-700">
              「換気扇110番」（kankisen-c.jp）は、換気扇の掃除・交換・修理を扱う受付サービスです。公式サイトに「換気扇110番は、東証上場企業が運営しております。（証券コード: 3989）」とあり、電気工事110番と同じ
              <strong className="font-semibold">シェアリングテクノロジー株式会社</strong>
              が運営しています。生活110番の公式サイトでも、関連サービスの一覧に換気扇110番が掲載されています。電気工事110番と同じく、受付は運営会社、実際の作業は地域の加盟店が担当する仕組みです。
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["換気扇の交換", "11,000円〜（税込）"],
                    ["換気扇の修理", "別途相談"],
                    ["掃除（プロペラタイプ）", "10,000円〜（税込）"],
                    ["掃除（レンジフードタイプ）", "11,000円〜（税込）"],
                    ["見積もり", "現地調査の後、無料で見積もり（エリア・加盟店・現場状況により、事前に確認のうえ調査・見積もりに費用がかかる場合あり）"],
                    ["キャンセル", "見積もり後のキャンセルが可能（公式）"],
                    ["追加料金", "見積もり確定後の追加料金は発生しない（公式）"],
                    ["支払い", "各種クレジットカード可（一部の加盟店・エリアを除く）"],
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
              出典：
              <a href="https://www.kankisen-c.jp/price/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">換気扇110番 料金のご案内</a>
              ・
              <a href="https://www.kankisen-c.jp/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">換気扇110番 公式サイト</a>
              ・
              <a href="https://www.kankisen-c.jp/terms/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">利用規約</a>
              （2026年10月19日確認）。料金は「〜」表記の最低額で、作業内容・機種・現場状況により変わります。
            </p>
            <h3 className="mt-8 font-bold text-slate-900">「悪質かどうか」を判断するために知っておきたい規約の内容</h3>
            <p className="mt-3 leading-8 text-slate-700">
              換気扇110番の利用規約（第8条）では、運営会社は受付・加盟店の紹介を行う立場で、
              <strong className="font-semibold">工事の契約はお客様と加盟店の間で結ばれる</strong>
              とされています。運営会社は取引の当事者にならないため、加盟店が提供するサービスの内容・質については保証できないこと、質問・要望・苦情や契約の解除は加盟店に直接連絡することも定められています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              このため、「悪質かどうか」は運営会社よりも、実際に来た加盟店の見積もりと説明で判断することになります。依頼する前に、次の3点を確認しておくとトラブルを避けやすくなります。
            </p>
            <ul className="mt-4 space-y-2 text-slate-700 text-[0.95rem] leading-7 list-disc pl-6">
              <li>現地調査・見積もりに費用がかかるかどうか（公式は原則無料としつつ、費用がかかる場合があると注記しています）</li>
              <li>見積もりの総額と作業範囲（本体代・部品代・処分費を含むか）を、作業前に書面で受け取る</li>
              <li>断る場合・契約を解除する場合の連絡先が加盟店であること（規約第8条）</li>
            </ul>
            <p className="mt-4 leading-8 text-slate-700">
              請求額や契約の内容に納得できない場合は、消費者ホットライン「188」（最寄りの消費生活相談窓口につながります）に相談できます。業務用の厨房・店舗の換気設備は、ダクトや排気量の設計が絡むため、空調・設備の専門業者からも相見積もりを取って比べることをおすすめします。
            </p>
          </section>

          {/* Good reviews */}
          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              良い口コミ・評判
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              電気工事110番の公式サイトには、利用者の口コミが日付・地域とともに掲載されています。2026年10月19日に確認した最新5件はすべて★5で、
              <strong className="font-semibold">原因や金額を説明しながら作業してくれた点、休日・当日に対応してもらえた点</strong>
              を評価する内容でした。そのうち3件を原文のまま引用します。
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
              ※運営会社が自社サイトに掲載している口コミで、第三者の口コミサイトの評価ではありません。出典（掲載サイト）を特定できる第三者の口コミは、当サイトの調査では確認できなかったため掲載していません。評価は依頼内容や対応した加盟店によって異なります。
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
              注意点（公式の注記・利用規約から）
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              出典を特定できる否定的な口コミは確認できなかったため、ここでは公式サイトの注記と、同じ運営会社のサービス（換気扇110番）の利用規約に書かれている注意点をまとめます。実際の作業は地域の加盟店が担当するため、
              <strong className="font-semibold">料金・日時・支払い方法は加盟店やエリアによって変わる</strong>
              ことが前提になっています。
            </p>
            <ul className="space-y-3 text-slate-700 text-[0.95rem] leading-7 list-disc pl-6">
              <li>料金表の金額は「〜」の最低額で、対応エリア・加盟店によっては記載の価格や条件で対応できない場合がある</li>
              <li>現地調査・見積もりは原則無料だが、対応エリア・加盟店・現場状況により、事前に確認したうえで調査費用がかかる場合がある</li>
              <li>加盟店のスケジュールにより、希望の日時に対応できない場合がある</li>
              <li>加盟店によっては、作業前に料金の支払いを求められる場合がある。クレジットカードも一部の加盟店・エリアでは使えない</li>
              <li>契約はお客様と加盟店の間で結ばれ、運営会社は取引の当事者にならない（換気扇110番の利用規約 第8条。苦情や契約の解除は加盟店に直接連絡）</li>
            </ul>
            <p className="mt-4 text-xs text-slate-400">
              出典：
              <a href="https://www.sharing-tech.co.jp/denki/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">電気工事110番 公式サイト</a>
              ・
              <a href="https://www.kankisen-c.jp/terms/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">換気扇110番 利用規約</a>
              （2026年10月19日確認）。
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
                  <li>相談・見積もりは原則無料で、クレジットカード払いにも対応している（一部の加盟店・エリアを除く）</li>
                  <li>東証グロース上場企業が運営している</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>実際の作業は加盟店が担当し、対応に地域差・店舗差が出ることがある</li>
                  <li>料金表は最低額で、加盟店・エリアによっては記載の価格で対応できない場合がある</li>
                  <li>計画的な工事や大型の業務用工事は、専門業者のほうが適している場合がある</li>
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
                  <li>急なエアコン・電気トラブルを早期に解決したい店舗・事業者</li>
                  <li>営業時間外や夜間の対応を相談したい事業者</li>
                  <li>電気工事もまとめて1か所に相談したい事業者</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>複数台・大型の業務用機を計画的に入れ替えたい事業者</li>
                  <li>長期保証や省エネ提案など専門的な設計を重視する事業者</li>
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
              公式サイトの料金表（いずれも税込の最低額）は、
              <strong className="font-semibold">エアコン工事7,700円〜</strong>
              、換気扇・レンジフード工事8,800円〜、漏電修理・ブレーカー工事5,500円〜、コンセント工事6,600円〜です。相談・見積もりは原則無料ですが、エリア・加盟店・現場状況によっては事前に確認のうえ調査費用がかかる場合があります。実際の作業は受付後に手配される加盟店が担当し、正式な金額は現地で提示される見積もりで決まります。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              利用の際は、作業に着手する前に「総額（出張費・部品代込み）」と「作業範囲」を明確にしておくことが重要です。急ぎでない計画的な工事であれば、複数業者から相見積もりを取り、料金・保証・対応を比較することをおすすめします。
            </p>
            <p className="mt-3 text-xs text-slate-400">
              出典：電気工事110番 公式サイトの料金表（2026年10月19日確認）。料金は作業内容・地域・時間帯・加盟店によって異なります。正式な金額は見積もりでご確認ください。
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
                ["加盟店の手配・訪問", "内容に応じて地域の加盟店が手配され、担当者が現場に伺います。"],
                ["現地確認・見積もり", "状況を確認し、正式な見積もりが提示されます。見積もりは原則無料ですが、事前の確認のうえ調査費用がかかる場合があります。"],
                ["作業の実施", "見積もり内容を確認したうえで作業を実施します。エアコン・電気工事をあわせて対応できます。"],
                ["完了確認・支払い", "動作を確認し、正式な見積もりで提示された代金を支払って完了です。加盟店によっては作業前の支払いを求められる場合があります。"],
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
              電気工事110番は、東証上場のシェアリングテクノロジー株式会社が運営する電気・空調トラブルの受付サービスで、24時間365日の受付体制と、全国の加盟店ネットワークが強みです。公式サイトには原因や金額の説明の丁寧さを評価する口コミが掲載されています。一方で、実際の作業と契約の相手は加盟店のため、料金・日時・支払い方法が加盟店やエリアで変わる点にご留意ください。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              急なトラブルへの対応に適している一方、計画的な工事や大型の業務用エアコン工事では、専門業者を含めて複数社から相見積もりを取り、料金・保証・対応を比較して選ぶことが、失敗を防ぐうえで有効です。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">急なエアコン・電気トラブルでお困りの方へ</p>
              <p className="text-teal-100 text-sm mb-5">
                無料の見積もりで、作業内容と総額の目安をご確認ください。
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
