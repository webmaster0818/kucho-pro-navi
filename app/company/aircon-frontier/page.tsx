import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンフロンティアの口コミ・評判は？業務用エアコンの料金・対応エリアを徹底解説",
  description:
    "業務用エアコン専門店「エアコンフロンティア」（運営：アトム冷熱工業）の口コミ・評判をまとめました。実際の利用者の声、料金やリースの仕組み、対応エリア、メリット・デメリット、向いている事業者まで中立的に解説します。",
  alternates: { canonical: "/company/aircon-frontier" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "エアコンフロンティアとは" },
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
      "対応はスピーディーで、まさに神対応でした。価格は普通かと思いますが、工事は意外と簡単に終わりました。",
    who: "福岡県・40代男性",
    source: "コピー機Gメン 掲載の利用者口コミ",
  },
  {
    body:
      "ラインで相談しましたが、とても丁寧に説明していただき、無理に進めることもなく本当に安心でした。",
    who: "Kimiko さん（★5・2024年7月）",
    source: "PR Haco 掲載の口コミ",
  },
  {
    body:
      "見積もりから支払い手続き、作業日程の調整、作業当日まで、どれもスムーズに対応していただきました。",
    who: "教育施設・東京都世田谷区（天井吊形を設置）",
    source: "エアコンフロンティア公式サイト「お客様の声」",
  },
  {
    body:
      "梱包、配送、対応、すべてにおいて満足できました。電話での質問にも迅速で親切な対応でした。",
    who: "Yahoo!ショッピング店の購入者（★5）",
    source: "Yahoo!ショッピング 店舗評価（機器販売）",
  },
];

const badReviews = [
  {
    body:
      "問い合わせ当初の対応は丁寧で迅速でしたが、繁忙期に重なったためか、その後の日程連絡に少し時間がかかった印象でした。",
    who: "利用者（★2相当の指摘を要約）",
    source: "PR Haco 掲載の口コミ",
  },
  {
    body:
      "希望していた機種が在庫切れで取り寄せになり、納期が読みづらかった。事前に在庫状況がわかると助かりました。",
    who: "Yahoo!ショッピング店の購入者（★2）",
    source: "Yahoo!ショッピング 店舗評価（機器販売）",
  },
];

const faqs = [
  {
    q: "エアコンフロンティアは業務用エアコンの設置に対応していますか？",
    a: "はい。エアコンフロンティアは業務用エアコンの販売・設置工事を専門に手がけるサービスです。天井カセット形・天井吊形など、店舗・オフィス・施設向けの機種を幅広く取り扱っています。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "公式サイトでは全国（北海道〜沖縄）に対応するとされています。各地域のメーカー認定・提携工事店が施工を担当する体制のため、地域や時期によって対応スピードに差が出る場合があります。",
  },
  {
    q: "料金やリースの目安は？",
    a: "本体価格に設置工事費を含む販売のほか、初期費用を抑えられるリース契約も用意されています。第三者の紹介サイトでは月額3,410円〜という記載が見られますが、機種・台数・契約条件で変わるため、正式な金額は無料の現地調査・見積もりで確認するのが確実です。",
  },
  {
    q: "保証はありますか？",
    a: "メーカー保証に加え、有償の延長保証（最長10年）を選べるとされています。保証範囲や年数は契約内容によって異なるため、見積もり時に確認してください。",
  },
  {
    q: "運営会社はどこですか？",
    a: "「エアコンフロンティア」は、神奈川県横浜市に本社を置くアトム冷熱工業株式会社が運営する業務用エアコンの専門ブランドです。会社の前身は1946年創業で、空調設備の販売・施工・保守を長く手がけています。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "エアコンフロンティアの口コミ・評判は？業務用エアコンの料金・対応エリアを徹底解説",
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
          { label: "エアコンフロンティアの口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        {/* Eyecatch / Header */}
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-3">
            業務用エアコン業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンフロンティアの口コミ・評判は？
            <br className="hidden md:block" />
            業務用エアコンの料金・対応エリアを徹底解説
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
            <strong className="font-semibold text-slate-900">エアコンフロンティア</strong>
            （運営：アトム冷熱工業株式会社）について、実際に公開されている利用者の口コミ、料金やリースの仕組み、対応エリア、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。
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
              エアコンフロンティアとは
            </h2>
            <p className="leading-8 text-slate-700">
              エアコンフロンティアは、飲食店・オフィス・クリニック・学校・工場など、事業者向けの
              <strong className="font-semibold">業務用エアコン</strong>
              の販売と設置工事を専門に手がけるサービスです。運営は、神奈川県横浜市に本社を構えるアトム冷熱工業株式会社。前身は1946年創業で、空調設備の販売・施工・保守を長年にわたり手がけてきた事業者です。2014年にECサイト「エアコンフロンティア」を立ち上げ、全国対応の業務用エアコン専門店として展開しています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              ダイキン・三菱電機・三菱重工・日立・東芝・パナソニックなど主要メーカーの機種を幅広く扱い、本体＋工事の販売だけでなく、初期費用を抑えられるリース契約にも対応しているのが特徴です。
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
                    ["サービス名", "エアコンフロンティア（業務用エアコン専門店）"],
                    ["運営会社", "アトム冷熱工業株式会社"],
                    ["本社所在地", "神奈川県横浜市中区弁天通2-21 アトム関内ビル4F"],
                    ["サービス開始", "2014年（会社の前身は1946年創業）"],
                    ["対応エリア", "全国（各地域の認定・提携工事店が施工を担当）"],
                    ["取扱メーカー", "ダイキン／三菱電機／三菱重工／日立／東芝／パナソニック ほか"],
                    ["保証", "メーカー保証＋有償の延長保証（最長10年）"],
                    ["受付時間", "平日 9:00〜18:00（電話：0120-620-500）"],
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
              出典：エアコンフロンティア公式サイト（会社情報）。所在地・受付時間等は変更される場合があります。
            </p>
          </section>

          {/* Good reviews */}
          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              良い口コミ・評判
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              公開されている口コミで多く見られたのは、
              <strong className="font-semibold">問い合わせから設置までの対応のスピードと丁寧さ</strong>
              を評価する声です。相談時の説明がわかりやすい、無理に契約を勧められない、日程調整がスムーズ、といった点が好意的に受け止められています。
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
              ※公式サイト「お客様の声」は自社で収集・掲載された口コミです。Yahoo!ショッピング店の評価は機器販売（EC）に対するもので、設置工事そのものの評価とは限りません。出典を明記したうえで参考としてご覧ください。
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
              一方で、件数は多くないものの
              <strong className="font-semibold">繁忙期の連絡スピードや在庫・納期</strong>
              に関する不満の声も見られました。需要が集中する時期は対応にムラが出ることがあるようです。気になる点も把握したうえで、見積もり段階でスケジュールや在庫状況を確認しておくと安心です。
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
                  <li>主要メーカーを横断して機種を選べる</li>
                  <li>本体＋工事の販売に加え、初期費用を抑えるリースに対応</li>
                  <li>全国対応で、店舗・オフィス・施設など業種を問わず相談できる</li>
                  <li>現地調査・見積もりが無料で、相談のハードルが低い</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>施工は地域の認定・提携工事店が担当するため、対応に地域差が出ることがある</li>
                  <li>繁忙期は連絡や工事日程に時間がかかる場合がある</li>
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
                  <li>複数メーカーから機種を比較して選びたい事業者</li>
                  <li>全国の複数拠点でまとめて空調を入れ替えたい企業</li>
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
              業務用エアコンは、機種の馬力（能力）・台数・設置場所・既存機の撤去有無などで費用が大きく変わります。エアコンフロンティアでは、本体＋工事をまとめて購入する方法と、初期費用を抑えられる
              <strong className="font-semibold">リース契約</strong>
              の両方が選べます。第三者の紹介サイトでは、リースの目安として月額3,410円〜という記載が見られますが、これはあくまで条件次第の参考値です。
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
                ["現地調査・見積もり", "担当者が設置環境を確認し、機種と費用を提案。現地調査・見積もりは無料です。"],
                ["プラン・契約方法の決定", "購入かリースか、機種・保証内容を比較して決定します。"],
                ["工事日程の調整・設置工事", "地域の認定・提携工事店が訪問し、設置工事を行います。"],
                ["引き渡し・アフター対応", "動作確認のうえ引き渡し。保証や定期点検でアフターをサポートします。"],
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
              エアコンフロンティアは、長い実績を持つアトム冷熱工業が運営する業務用エアコンの専門店で、主要メーカーの機種を横断して選べること、購入・リースの両方に対応していることが強みです。口コミでは対応の速さと丁寧さを評価する声が目立つ一方、繁忙期の連絡や納期には注意したいという声もありました。
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
                href="https://aircon-f.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors"
              >
                エアコンフロンティア公式サイトを見る
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
