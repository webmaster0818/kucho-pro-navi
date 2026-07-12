import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンセンターACの口コミ・評判は？料金・対応エリアを徹底調査【2026年7月】｜空調プロナビ",
  description:
    "業務用エアコン専門店「エアコンセンターAC」（運営：株式会社ミタデン）の口コミ・評判をまとめました。Googleマップの評価、本体＋工事一括やリースの仕組み、対応エリア、メリット・デメリット、向いている事業者まで中立的に解説します。",
  alternates: { canonical: "/company/aircon-center-ac" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "エアコンセンターACとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "良い口コミ・評判" },
  { id: "bad", label: "気になる点・注意したいポイント" },
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
      "機種選びの段階から説明が分かりやすく、こちらの予算や使い方に合わせて提案してくれました。初めての入れ替えでも安心して任せられました。",
    who: "店舗オーナー（利用者口コミを要約）",
    source: "コピー機Gメン（copyki-gmen.com）掲載の利用者口コミ",
  },
  {
    body:
      "補助金の対応や現地調査を丁寧にしてもらえて助かりました。施工後の保証についてもきちんと説明があり、信頼できると感じました。",
    who: "事業者（利用者口コミを要約）",
    source: "Watching Review（watching-review.com）掲載の口コミ",
  },
  {
    body:
      "見積もりから工事までスムーズで、対応も誠実でした。料金の内訳がはっきりしていて納得して契約できました。",
    who: "オフィス管理担当者（利用者口コミを要約）",
    source: "コピー機Gメン（copyki-gmen.com）掲載の利用者口コミ",
  },
];

const faqs = [
  {
    q: "エアコンセンターACは業務用エアコンの設置に対応していますか？",
    a: "はい。エアコンセンターACは業務用エアコンの販売と設置工事を専門に手がけるサービスです。本体と工事をまとめて依頼できるほか、初期費用0円のリース契約にも対応しています。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "全国に対応しています。首都圏は直営の工事部門が施工を担当し、地方は近隣の提携工事店が施工を担当する体制です。地域によって施工担当が異なるため、対応スピードに差が出る場合があります。",
  },
  {
    q: "口コミでの評価はどのくらいですか？",
    a: "Googleマップでは★4.7（305件・調査時点）と高い評価が付いており、★1の割合は2.3%にとどまっています。説明の分かりやすさや、補助金対応・現地調査・施工後保証の丁寧さを評価する声が見られます。",
  },
  {
    q: "料金やリースの目安は？",
    a: "本体価格に工事費を含めて一括で購入する方法のほか、初期費用0円で導入できるリース契約が用意されています。機種・馬力・台数・設置場所で費用が変わるため、正確な金額は無料の現地調査・見積もりで確認するのが確実です。",
  },
  {
    q: "運営会社はどこですか？",
    a: "「エアコンセンターAC」は株式会社ミタデンが運営する業務用エアコンの専門店です。全国での工事実績は6万件を超え、満足度98%を公称しています。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "エアコンセンターACの口コミ・評判は？料金・対応エリアを徹底調査",
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
          { label: "エアコンセンターACの口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        {/* Eyecatch / Header */}
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-3">
            業務用エアコン業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンセンターACの口コミ・評判は？
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
            この記事では、業務用エアコンの専門店として知られる
            <strong className="font-semibold text-slate-900">エアコンセンターAC</strong>
            （運営：株式会社ミタデン）について、Googleマップなどで公開されている利用者の評価、本体＋工事一括やリースの仕組み、対応エリア、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。
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
              エアコンセンターACとは
            </h2>
            <p className="leading-8 text-slate-700">
              エアコンセンターACは、飲食店・オフィス・クリニック・店舗・工場など、事業者向けの
              <strong className="font-semibold">業務用エアコン</strong>
              の販売と設置工事を専門に手がけるサービスです。運営は株式会社ミタデン。本体と工事をまとめて依頼できる一括対応に加え、初期費用0円で導入できるリース契約にも対応しているのが特徴で、全国での工事実績は6万件を超え、満足度98%を公称しています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              施工体制は、首都圏は直営の工事部門が担当し、地方は近隣の提携工事店が担当する全国対応型です。補助金の相談や現地調査、施工後の保証まで一貫して任せられる点が、利用者から評価されています。
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
                    ["サービス名", "エアコンセンターAC（業務用エアコン専門店）"],
                    ["運営会社", "株式会社ミタデン"],
                    ["公式サイト", "https://www.e-aircon.jp/"],
                    ["事業内容", "業務用エアコンの販売・設置工事（本体＋工事一括／リース初期費用0円）"],
                    ["対応エリア", "全国（首都圏は直営工事部門、地方は近隣の提携工事店が施工）"],
                    ["施工実績", "全国工事6万件超／満足度98%（公称）"],
                    ["特徴", "補助金対応・現地調査・施工後保証に対応"],
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
              出典：エアコンセンターAC公式サイト（会社情報）。実績・満足度は公式の公称値です。内容は変更される場合があります。
            </p>
          </section>

          {/* Good reviews */}
          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              良い口コミ・評判
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              エアコンセンターACは、
              <strong className="font-semibold">Googleマップで★4.7（305件・調査時点）</strong>
              という高い評価が付いており、★1の割合は2.3%にとどまっています。公開されている口コミで多く見られたのは、機種選びの段階からの説明の分かりやすさ、補助金対応・現地調査・施工後保証の丁寧さを評価する声です。
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
              ※口コミは各掲載サイトで公開されている内容を要約したものです。Googleマップの★4.7（305件）は調査時点の数値で、件数・評価は変動します。出典を明記したうえで参考としてご覧ください。
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
              全体的な評価は高いものの、施工体制の特徴として、
              <strong className="font-semibold">地方では近隣の提携工事店が施工を担当する</strong>
              点は把握しておきたいポイントです。首都圏の直営工事と比べて、地域や時期によって対応のスピードや進め方に差が出る可能性があります。気になる点も理解したうえで、見積もり段階で施工担当やスケジュール、保証範囲を確認しておくと安心です。
            </p>
            <ul className="space-y-3 text-slate-700 text-[0.95rem] leading-7">
              <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                地方の案件は近隣の提携工事店が施工を担当するため、地域によって対応に差が出る場合があります。
              </li>
              <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                繁忙期は現地調査や工事日程の調整に時間がかかることがあります。早めの相談がおすすめです。
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
                  <li>Googleマップ★4.7（305件）と口コミ評価が高い</li>
                  <li>本体＋工事の一括対応に加え、初期費用0円のリースにも対応</li>
                  <li>補助金対応・現地調査・施工後保証まで一貫して相談できる</li>
                  <li>全国工事6万件超の実績があり、業種を問わず相談できる</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>地方は近隣の提携工事店が施工するため、対応に地域差が出ることがある</li>
                  <li>繁忙期は現地調査や工事日程に時間がかかる場合がある</li>
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
                  <li>初期費用を抑えてリースで導入したい店舗・オフィス</li>
                  <li>補助金の活用も含めて相談しながら進めたい事業者</li>
                  <li>口コミ評価や実績を重視して業者を選びたい事業者</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>とにかく即日・最短で工事を終わらせたい繁忙期の急ぎ案件</li>
                  <li>地元の決まった工事店に直接依頼したい場合</li>
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
              業務用エアコンは、機種の馬力（能力）・台数・設置場所・既存機の撤去有無などで費用が大きく変わります。エアコンセンターACでは、本体と工事をまとめて購入する方法と、
              <strong className="font-semibold">初期費用0円で導入できるリース契約</strong>
              の両方が選べます。導入時のまとまった出費を抑えたい場合は、リースが選択肢になります。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              正確な金額は、無料の現地調査と見積もりで把握するのが確実です。複数業者から相見積もりを取り、本体価格・工事費・保証年数・アフター対応を横並びで比較するのがおすすめです。補助金が使えるケースもあるため、対応可否を相談時に確認しておくとよいでしょう。
            </p>
            <p className="mt-3 text-xs text-slate-400">
              ※料金・リース条件は機種・台数・設置環境により異なります。最新の条件は公式の見積もりでご確認ください。
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
                ["現地調査・見積もり", "担当者が設置環境を確認し、機種と費用を提案。補助金の活用可否もあわせて確認できます。"],
                ["プラン・契約方法の決定", "一括購入かリースか、機種・保証内容を比較して決定します。"],
                ["工事日程の調整・設置工事", "首都圏は直営工事部門、地方は近隣の提携工事店が訪問し、設置工事を行います。"],
                ["引き渡し・アフター対応", "動作確認のうえ引き渡し。施工後保証でアフターをサポートします。"],
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
              エアコンセンターACは、株式会社ミタデンが運営する業務用エアコンの専門店で、全国工事6万件超の実績と、Googleマップ★4.7（305件）という高い口コミ評価が強みです。本体＋工事の一括対応に加え、初期費用0円のリースにも対応し、補助金対応・現地調査・施工後保証まで一貫して相談できる点が好意的に受け止められています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              一方で、地方は近隣の提携工事店が施工を担当するため、地域によって対応に差が出る可能性があります。業務用エアコンの導入は費用が大きいため、1社で決めず、複数業者から相見積もりを取り、料金・保証・対応エリアを比較して選ぶのが失敗を防ぐコツです。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">業務用エアコンの入れ替えを検討中の方へ</p>
              <p className="text-teal-100 text-sm mb-5">
                まずは無料の現地調査・見積もりで、機種と費用の目安を確認してみましょう。
              </p>
              <a
                href="https://www.e-aircon.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors"
              >
                エアコンセンターAC公式サイトを見る
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
