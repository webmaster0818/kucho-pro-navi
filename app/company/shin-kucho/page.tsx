import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "新空調の口コミ・評判は？名古屋の業務用エアコン専門店の料金・対応エリアを解説",
  description:
    "名古屋の業務用エアコン専門店「新空調（有限会社新空調）」の口コミ・評判をまとめています。利用者の声、料金とリース・中古機の仕組み、対応エリア、メリット・デメリット、向いている事業者について、中立的な立場でご説明します。",
  alternates: { canonical: "/company/shin-kucho" },
};

const UPDATED = "2026年10月21日";

const toc = [
  { id: "summary", label: "新空調とは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "良い口コミ・評判" },
  { id: "bad", label: "注意点を指摘する口コミ・評判" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている事業者・向いていない事業者" },
  { id: "price", label: "料金・リース・中古の仕組み" },
  { id: "flow", label: "問い合わせから設置までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "summary-last", label: "まとめ" },
];

const goodReviews: { body: string; who: string; source: string; url?: string }[] = [
  {
    body:
      "新規店舗オープンの際にHPを拝見させて相談いたしました。問い合わせしてから業務用エアコン工事完了までとてもスピーディーに対応して頂き大満足です。今後のメンテナス等宜しく御願い致します。",
    who: "事務所・愛知県知多市（ダイキン天井カセット2.5馬力交換）",
    source: "新空調公式サイト 施工実績「【愛知県知多市】事務所のダイキン天カセ2.5馬力交換工事」（2026-10-21確認）",
    url: "https://www.ecoaircon.jp/results/%e6%84%9b%e7%9f%a5%e7%9c%8c-%e6%a5%ad%e5%8b%99%e7%94%a8%e3%82%a8%e3%82%a2%e3%82%b3%e3%83%b3%e5%b7%a5%e4%ba%8b19725",
  },
  {
    body:
      "スタッフルームの業務用エアコンが壊れ早急に対応して頂き有難うございます。夏の季節だったのでスタッフ一同とても満足でした。ありがとうございます。",
    who: "接骨院・愛知県知立市（ダイキン壁掛2.5馬力交換）",
    source: "新空調公式サイト 施工実績「【愛知県知立市】接骨院のダイキン壁掛 2.5馬力交換工事」（2026-10-21確認）",
    url: "https://www.ecoaircon.jp/results/%e6%84%9b%e7%9f%a5%e7%9c%8c-%e6%a5%ad%e5%8b%99%e7%94%a8%e3%82%a8%e3%82%a2%e3%82%b3%e3%83%b3%e5%b7%a5%e4%ba%8b19726",
  },
  {
    body:
      "業務用エアコンが壊れ以前使用していた業務用エアコンの電気代も高く相談いたしました。１０年以上使用していた業務用エアコンよりも電気代も安くとても満足しています。違う業務用エアコンも相談させていただきます。",
    who: "事務所・愛知県安城市（ダイキン天井カセット3馬力交換）",
    source: "新空調公式サイト 施工実績「【愛知県安城市】事務所のダイキン天カセ3馬力交換工事」（2026-10-21確認）",
    url: "https://www.ecoaircon.jp/results/%e6%84%9b%e7%9f%a5%e7%9c%8c-%e6%a5%ad%e5%8b%99%e7%94%a8%e3%82%a8%e3%82%a2%e3%82%b3%e3%83%b3%e5%b7%a5%e4%ba%8b19724",
  },
];

const faqs = [
  {
    q: "新空調はどこの会社ですか？",
    a: "新空調は、愛知県名古屋市北区に拠点を置く有限会社新空調が運営する業務用エアコンの専門店です。約20年にわたり、業務用エアコンの販売・交換・修理・リース・工事を手がけてきた地域密着型の業者です。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "名古屋市全域を中心に、愛知県を主な対応エリアとしています。家庭用エアコンについては名古屋市北区・春日井市・守山区などにも対応しています。エリア外の場合は、問い合わせ時にご確認ください。",
  },
  {
    q: "中古の業務用エアコンも扱っていますか？",
    a: "はい。新空調では新品だけでなく中古の業務用エアコンも取り扱っています。初期費用を抑えたい事業者向けに、状態を確認したうえで提案を受けることができます。",
  },
  {
    q: "即日対応はしてもらえますか？",
    a: "在庫状況や工事スケジュールに空きがあれば、即日の設置や修理に対応できる場合があります。ただし部品の取り寄せが必要なケースなどでは日数がかかることがあるため、お急ぎの場合は事前にご相談ください。",
  },
  {
    q: "保証はありますか？",
    a: "公式サイトでは、取り付け工事保証を5年間付けると案内しています（施工不良などの工事のミスは保証期間中に無償で対応）。機器にはメーカー保証があります。機器の保証内容は機種・契約条件によって異なるため、見積もり時に確認しておくことをおすすめします。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "新空調の口コミ・評判は？名古屋の業務用エアコン専門店の料金・対応エリアを解説",
  datePublished: "2026-06-10",
  dateModified: "2026-10-21",
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
            業務用エアコン業者の口コミ・評判
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            新空調の口コミ・評判は？
            <br className="hidden md:block" />
            名古屋の業務用エアコン専門店の料金・対応エリアを解説
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>空調プロナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-10-21">最終更新：{UPDATED}</time>
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
            名古屋エリアで業務用エアコンの入れ替えを検討する際は、地元で信頼できる業者を選ぶことが重要です。
            本記事では、名古屋の業務用エアコン専門店として知られる
            <strong className="font-semibold text-slate-900">新空調</strong>
            （運営：有限会社新空調）について、公開されている利用者の声、料金と中古・リースの仕組み、対応エリア、メリット・デメリットを、評価点と注意点の両面から中立的にまとめています。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、公式サイトなどで公開されている内容を出典ページを明記したうえで原文のまま引用したものです。料金や対応内容は時期・地域・契約条件により変わるため、最新の情報は公式サイトや無料見積もりでご確認ください（口コミの出典確認日：2026年10月21日）。
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
              の販売・交換・修理・リース・工事を手がける名古屋の専門店です。運営会社は、愛知県名古屋市北区に拠点を置く有限会社新空調です。約20年にわたり地域密着で空調設備を扱ってきた実績があり、業務用だけでなく家庭用エアコンの取り付け・交換工事にも対応しています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              主要メーカーの新品機種に加え、初期費用を抑えやすい中古の業務用エアコンも取り扱っている点が特徴です。地元の業者としての相談のしやすさと、職人による丁寧な施工を強みとしています。
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
                    ["保証", "取り付け工事保証5年（公式）＋機器メーカー保証"],
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
              公式サイトの施工実績ページに掲載されているお客様の声では、
              <strong className="font-semibold">問い合わせから工事完了までの対応の早さ</strong>
              を評価する内容が見られます。故障時に早急に対応してもらえた、入れ替え後に電気代が安くなった、といった点が挙げられています。
            </p>
            <div className="grid gap-4">
              {goodReviews.map((r, i) => (
                <figure key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
                  <blockquote className="mt-3 text-slate-800 leading-7">「{r.body}」</blockquote>
                  <figcaption className="mt-3 text-sm text-slate-500">
                    {r.who}
                    {r.url ? (
                      <a href={r.url} target="_blank" rel="nofollow noopener" className="underline block text-xs text-slate-400 mt-0.5">出典：{r.source}</a>
                    ) : (
                      <span className="block text-xs text-slate-400 mt-0.5">出典：{r.source}</span>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-400">
              ※上記は公式サイトの施工実績ページに掲載されているお客様の声を原文のまま引用したものです。自社で収集・掲載された内容のため、出典を明記したうえで参考としてご覧ください。
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
              注意点を指摘する口コミ・評判
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              新空調は地域密着の中小規模の専門店であるため、インターネット上で公開されている第三者の口コミ件数は多くありません。注意点として挙げられるのは、
              <strong className="font-semibold">対応エリアが愛知県中心に限られること</strong>
              と、繁忙期は在庫や工事日程の都合により希望日に対応できない場合がある点です。全国対応の大手業者と比べると対応範囲が限られるため、エリア外の事業者には適していません。
            </p>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-slate-700 leading-7 text-[0.95rem]">
                調査時点では、否定的な評判が広く見られる事例は確認できませんでした。一般的な注意点として、見積もり段階で対応エリアに含まれるか、希望日に工事できるか、中古機の場合の保証範囲を事前に確認しておくことをおすすめします。
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
                  <li>名古屋・愛知に密着しており、相談しやすく対応が早い</li>
                  <li>新品だけでなく中古機も扱い、初期費用を抑えやすい</li>
                  <li>販売・交換・修理・リース・工事をワンストップで依頼できる</li>
                  <li>約20年の実績があり、職人による丁寧な施工を受けられる</li>
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
                  <li>地元の業者に直接相談しながら進めたい事業者</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>愛知県外・全国の複数拠点をまとめて任せたい企業</li>
                  <li>大手メーカー系列の長期保証を重視する事業者</li>
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
              業務用エアコンは、機種の馬力（能力）・台数・設置場所・既存機の撤去の有無などで費用が大きく変わります。新空調では、本体＋工事をまとめて購入する方法のほか、初期費用を抑えやすい
              <strong className="font-semibold">中古機の活用やリース契約</strong>
              にも対応しています。中古機は状態を確認したうえで提案されるため、費用を重視する事業者にとって選択肢が広い点が特徴です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              正確な金額は、無料の現地調査と見積もりでご確認ください。複数業者から相見積もりを取り、本体価格・工事費・保証年数・アフター対応を比較することをおすすめします。
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
                ["問い合わせ・相談", "電話またはWebフォームから相談し、設置場所や希望機種、台数、新品・中古の希望などを伝えます。"],
                ["現地調査・見積もり", "担当者が設置環境を確認し、機種と費用を提案します。現地調査・見積もりは無料です。"],
                ["プラン・契約方法の決定", "新品か中古か、購入かリースか、保証内容を比較して決定します。"],
                ["工事日程の調整・設置工事", "職人が訪問し、設置工事を行います。在庫・日程次第で即日対応も可能です。"],
                ["引き渡し・アフター対応", "動作確認のうえ引き渡しとなります。施工保証や修理対応によるアフターサポートがあります。"],
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
              新空調は、名古屋・愛知エリアで約20年の実績を持つ業務用エアコンの専門店です。地域密着による相談のしやすさ、新品・中古・リースから選べること、販売から修理までを一括で依頼できることが強みです。公式サイトに掲載されたお客様の声では、対応の早さを評価する声が見られます。一方で、対応エリアが愛知県中心に限られる点は、事前にご確認ください。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              業務用エアコンの導入は費用が大きいため、1社で決めず、複数業者から相見積もりを取り、料金・保証・対応エリアを比較したうえで選ぶことが、失敗を防ぐうえで有効です。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">名古屋・愛知で業務用エアコンを検討中の方へ</p>
              <p className="text-teal-100 text-sm mb-5">
                無料の現地調査・見積もりにより、機種と費用の目安をご確認いただくことをおすすめします。
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
