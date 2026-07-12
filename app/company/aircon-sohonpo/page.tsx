import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコン総本舗の口コミ・評判は？業務用エアコンの料金・対応エリアを解説【2026年7月】",
  description:
    "業務用エアコン専門店「エアコン総本舗」（運営：株式会社フジテック）の口コミ・評判をまとめました。実際の利用者の声、料金、対応エリア、メリット・デメリット、向いている事業者まで、良い点・気になる点の両面から中立的に解説します。",
  alternates: { canonical: "/company/aircon-sohonpo" },
};

const UPDATED = "2026年7月12日";

const toc = [
  { id: "summary", label: "エアコン総本舗とは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "良い口コミ・評判" },
  { id: "bad", label: "気になる口コミ・評判" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている事業者・向いていない事業者" },
  { id: "price", label: "料金・保証の仕組み" },
  { id: "flow", label: "問い合わせから設置までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "summary-last", label: "まとめ" },
];

const goodReviews = [
  {
    body:
      "こちらの聞きたい事に対しても的確なアドバイスをしてもらえ、安心できました。",
    who: "業務用エアコンの設置を依頼した利用者",
    source: "コピー機Gメン 掲載のエアコン総本舗 利用者口コミ",
  },
  {
    body:
      "安くて取り付けもスムーズで、丁寧に対応してもらいました。比較した他店よりも安価に取り付けていただきました。",
    who: "業務用エアコンの設置を依頼した利用者",
    source: "コピー機Gメン 掲載のエアコン総本舗 利用者口コミ",
  },
  {
    body:
      "お見積りから工事まで迅速に行っていただき、大変助かりました。見積内容と請求金額にズレがなく、施工も細かい希望を聞いていただき丁寧でした。",
    who: "業務用エアコンの設置を依頼した利用者",
    source: "コピー機Gメン 掲載のエアコン総本舗 利用者口コミ",
  },
  {
    body:
      "商品の品質とサービスに満足しています。スタッフの対応が親切で、信頼性がありました。",
    who: "業務用エアコンの設置を依頼した利用者",
    source: "コピー機Gメン 掲載のエアコン総本舗 利用者口コミ",
  },
];

const faqs = [
  {
    q: "エアコン総本舗は業務用エアコンの設置に対応していますか？",
    a: "はい。エアコン総本舗は2004年創業の空調専門店で、業務用エアコン・ハウジングエアコンを中心に、販売から設置・入替工事までワンストップで対応しています。年間6,000件以上、累計5万件超の施工実績があります。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "公式サイトでは、東京・神奈川・埼玉・千葉・群馬・静岡・山梨など首都圏を中心とした関東圏が工事エリアとされています。エリアは随時拡大中で、エリア外でも対応可能な場合があるため、問い合わせ時に確認してください。",
  },
  {
    q: "料金やリースの目安は？",
    a: "本体＋工事込みの明朗会計を掲げており、写真を送るだけの「クイック見積もり」で概算を確認できます。正式な金額は現地調査後の見積もりで提示されます。リース契約にも対応していますが、機種・台数・契約条件で変わるため、無料見積もりで確認するのが確実です。",
  },
  {
    q: "保証はありますか？",
    a: "メーカー保証（1年）に加え、施工後1年間の工事保証が付きます。さらに有償の10年延長保証オプションも用意されています。保証範囲は契約内容で異なるため、見積もり時に確認してください。",
  },
  {
    q: "運営会社はどこですか？",
    a: "エアコン総本舗は、東京都品川区に本社を置く株式会社フジテック（2004年設立）が運営する業務用エアコンの専門店です。首都圏に複数の実店舗を構え、ネット完結型でありながら現地調査や自社の工事体制を重視しています。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "エアコン総本舗の口コミ・評判は？業務用エアコンの料金・対応エリアを解説【2026年7月】",
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
          { label: "エアコン総本舗の口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        {/* Eyecatch / Header */}
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-3">
            業務用エアコン業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコン総本舗の口コミ・評判は？
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
            業務用エアコンの入れ替えでは、「できるだけ費用を抑えたいが、工事の質も妥協したくない」というのが多くの事業者の本音です。
            この記事では、コストパフォーマンスと工事品質の両立で知られる
            <strong className="font-semibold text-slate-900">エアコン総本舗</strong>
            （運営：株式会社フジテック）について、実際に公開されている利用者の口コミ、料金、対応エリア、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、各掲載サイトで公開されている内容を出典付きで引用・要約したものです。料金や対応内容は時期・地域・契約条件により変わるため、最新の情報は公式サイトや無料見積もりでご確認ください（調査時点：2026年6月）。
          </p>
        </div>


        {/* 結論即答 */}
        <div className="max-w-3xl mx-auto px-5 pt-8">
          <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-6">
            <p className="font-bold text-teal-800 mb-2">結論：エアコン総本舗の評判は？</p>
            <p className="text-[0.95rem] leading-7 text-slate-700">
              エアコン総本舗は<strong className="font-semibold">コストパフォーマンスと工事品質の両立</strong>で知られる業務用エアコン業者（運営：株式会社フジテック）です。公開されている口コミでは<strong className="font-semibold">他店比較での安さ・見積もりと請求のズレのなさ・対応の丁寧さ</strong>を評価する声が中心です。「最悪」といった強い言葉で検索されることもありますが、本記事では良い点・気になる点の両方を出典付きで掲載しています。詳しくは<a href="#good" className="text-teal-700 underline underline-offset-4">実際の口コミ</a>と<a href="#price" className="text-teal-700 underline underline-offset-4">料金</a>をご覧ください。
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
              エアコン総本舗とは
            </h2>
            <p className="leading-8 text-slate-700">
              エアコン総本舗は、飲食店・オフィス・クリニック・店舗など、事業者向けの
              <strong className="font-semibold">業務用エアコン</strong>
              の販売と設置・入替工事をワンストップで手がける専門店です。運営は、東京都品川区に本社を構える株式会社フジテック。2004年の創業以来、首都圏を中心に数多くの業務用・ハウジングエアコンの工事を手がけ、年間6,000件以上、累計5万件を超える施工実績を積み重ねています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              ダイキン・パナソニック・三菱電機・三菱重工・日立・東芝（日本キヤリア）など主要メーカーの機種を幅広く扱い、本体と工事費をまとめた明朗会計を掲げているのが特徴です。ネット完結型でありながら、首都圏に複数の実店舗を構え、現地調査や自社の工事体制を重視しています。
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
                    ["サービス名", "エアコン総本舗（業務用エアコン専門店）"],
                    ["運営会社", "株式会社フジテック"],
                    ["本社所在地", "東京都品川区東五反田4-7-26 塚本ビル1F"],
                    ["設立", "2004年1月（創業2004年）"],
                    ["対応エリア", "東京・神奈川・埼玉・千葉・群馬・静岡・山梨 ほか（随時拡大中）"],
                    ["取扱メーカー", "ダイキン／パナソニック／三菱電機／三菱重工／日立／東芝（日本キヤリア） ほか"],
                    ["施工実績", "年間6,000件以上・累計5万件超"],
                    ["保証", "メーカー保証（1年）＋工事保証（1年）／有償の10年延長保証あり"],
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
              出典：エアコン総本舗公式サイト（会社概要）。所在地・対応エリア等は変更される場合があります。最新情報は公式サイトでご確認ください。
            </p>
          </section>

          {/* Good reviews */}
          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              良い口コミ・評判
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              公開されている口コミで多く見られたのは、
              <strong className="font-semibold">価格の手頃さと、見積もり・施工の丁寧さの両立</strong>
              を評価する声です。他店より安く取り付けられた、見積内容と請求金額にズレがなかった、要望を細かく聞いてくれた、といった点が好意的に受け止められています。
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
              ※上記は第三者の業務用エアコン情報サイトに掲載された利用者口コミを引用・要約したものです。出典を明記したうえで参考としてご覧ください。
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
              公開されている口コミは肯定的なものが中心で、明確に不利な指摘は確認できませんでした。ただし注意点として、
              <strong className="font-semibold">対応エリアが首都圏を中心とした関東圏に限られる</strong>
              点が挙げられます。エリア外の事業者は対応可否を事前に確認する必要があります。また、需要が集中する繁忙期は工事日程が読みづらくなることがあるため、早めの相談がおすすめです。
            </p>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-slate-700 leading-7 text-[0.95rem]">
                ここでは無理に否定的な口コミを掲載せず、一般的な注意点として「対応エリアの確認」「繁忙期の日程」「見積もり内容・保証範囲の確認」を挙げるにとどめます。気になる点も把握したうえで、見積もり段階で条件をしっかり確認しておくと安心です。
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
                  <li>本体＋工事込みの明朗会計で、追加費用が把握しやすい</li>
                  <li>他店より安く取り付けられたという価格面の口コミが多い</li>
                  <li>年間6,000件以上・累計5万件超の豊富な施工実績</li>
                  <li>写真を送るだけのクイック見積もりで概算を確認できる</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>対応エリアが首都圏を中心とした関東圏に限られる</li>
                  <li>工事保証は1年と、長期保証は有償オプションになる</li>
                  <li>繁忙期は工事日程が読みづらくなる場合がある</li>
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
                  <li>費用を抑えつつ、工事品質も確保したい首都圏の店舗・オフィス</li>
                  <li>本体と工事費を明朗会計でまとめて把握したい事業者</li>
                  <li>まずは写真で概算を知りたい、相談のハードルを下げたい事業者</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>関東圏以外（地方）で施工を依頼したい事業者</li>
                  <li>最初から長期の工事保証を無償で付けたい場合</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Price */}
          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              料金・保証の仕組み
            </h2>
            <p className="leading-8 text-slate-700">
              業務用エアコンは、機種の馬力（能力）・台数・設置場所・既存機の撤去有無などで費用が大きく変わります。エアコン総本舗は、本体価格と工事費をまとめた
              <strong className="font-semibold">明朗会計</strong>
              を掲げており、写真を送るだけのクイック見積もりで概算を確認できます。正式な金額は、現地調査後の見積もりで提示されます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              保証は、メーカー保証（1年）に施工後1年間の工事保証が付き、さらに有償で10年の延長保証を選べます。正確な金額や保証条件は、無料の現地調査と見積もりで把握するのが確実です。複数業者から相見積もりを取り、本体価格・工事費・保証年数・アフター対応を横並びで比較するのがおすすめです。
            </p>
            <p className="mt-3 text-xs text-slate-400">
              ※保証年数・料金は契約条件により変わります。最新の内容は公式の見積もりでご確認ください。
            </p>
          </section>

          {/* Flow */}
          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              問い合わせから設置までの流れ
            </h2>
            <ol className="space-y-4">
              {[
                ["問い合わせ・クイック見積もり", "電話・Webフォームから相談。設置場所の写真を送れば概算見積もりが受けられます。"],
                ["現地調査・正式見積もり", "担当者が設置環境を確認し、機種と費用を提案。現地調査・見積もりは無料です。"],
                ["プラン・契約内容の決定", "機種・保証内容・支払い方法を比較して決定します。"],
                ["工事日程の調整・設置工事", "日程を調整し、設置・入替工事を行います。"],
                ["引き渡し・アフター対応", "動作確認のうえ引き渡し。工事保証や延長保証でアフターをサポートします。"],
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
              エアコン総本舗は、株式会社フジテックが2004年から運営する業務用エアコンの専門店で、本体＋工事込みの明朗会計と、首都圏での豊富な施工実績が強みです。口コミでは「他店より安く取り付けられた」「見積もりと請求にズレがなく丁寧」といった、価格と対応の両面を評価する声が目立ちました。一方で、対応エリアが関東圏中心である点や、長期保証が有償である点には注意したいところです。
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
                href="https://ac.fj-tec.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors"
              >
                エアコン総本舗公式サイトを見る
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
