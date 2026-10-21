import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンマートの口コミ・評判は？料金・対応エリアを調査【2026年10月】",
  description:
    "業務用エアコンの通販＋工事「エアコンマート」の口コミ・評判をまとめました。楽天市場の店舗レビュー、新品・中古の取り扱い、料金や対応エリア、メリット・デメリット、向いている事業者まで中立的に解説します。",
  alternates: { canonical: "/company/aircon-mart" },
};

const UPDATED = "2026年10月21日";

const toc = [
  { id: "summary", label: "エアコンマートとは" },
  { id: "company", label: "基本情報" },
  { id: "good", label: "良い口コミ・評判" },
  { id: "bad", label: "注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている事業者・向いていない事業者" },
  { id: "price", label: "料金の考え方（新品・中古）" },
  { id: "flow", label: "問い合わせから設置までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "summary-last", label: "まとめ" },
];

const RAKUTEN_SOURCE = "楽天市場「エアコンマート 楽天市場店のレビュー・口コミ」（2026-10-21確認）";
const RAKUTEN_URL = "https://review.rakuten.co.jp/shop/4/309567_309567/1.1/";

const goodReviews: { body: string; who: string; stars: number; source: string; url?: string }[] = [
  {
    body:
      "日程調整、実設置、共に非常に丁寧に対応頂きました。旧エアコンの取り外し&引取りもお願いしたのですが、他業者に比べると、引取り代金分がまるまる浮くぐらいのリーズナブルな料金設定で、非常に助かりました。",
    who: "楽天市場店の購入者（男性・40代、2021/12/10投稿）",
    stars: 5,
    source: RAKUTEN_SOURCE,
    url: RAKUTEN_URL,
  },
  {
    body:
      "インターネットショッピングで検索したところ、一番安かったのとショップ評価が良かったので注文させてもらいました。商品注文からは発送までの対応も丁寧で良かったです。また何かありましたらこちらのショップにリピート注文したいと思っております。",
    who: "楽天市場店の購入者（男性・40代、2022/07/25投稿）",
    stars: 4,
    source: RAKUTEN_SOURCE,
    url: RAKUTEN_URL,
  },
  {
    body:
      "こちらで中古エアコンを2台購入し、別途手配した工事を依頼し取付しました。購入したうち1台に初期不良があったのですが、とても丁寧に対応してもらいました。2台とも美品で快適に使用できています。",
    who: "楽天市場店の購入者（男性・50代、2024/07/15投稿）",
    stars: 5,
    source: RAKUTEN_SOURCE,
    url: RAKUTEN_URL,
  },
  {
    body:
      "3回目の利用ですが、毎回とても品質が良く満足しています。とても中古と思えない綺麗さで、綺麗過ぎて恐いです^ ^まだ1台付いていない部屋があるので、来年もお世話になるかも？です。",
    who: "楽天市場店のリピート購入者（男性・40代、2020/11/27投稿）",
    stars: 5,
    source: RAKUTEN_SOURCE,
    url: RAKUTEN_URL,
  },
];

const faqs = [
  {
    q: "エアコンマートは業務用エアコンの設置に対応していますか？",
    a: "はい。エアコンマートは業務用エアコンの通販と設置工事に対応するサービスです。本体を購入したうえで、工事もあわせて依頼することができます。",
  },
  {
    q: "中古の業務用エアコンも扱っていますか？",
    a: "はい。新品に加えて、整備済みで1年保証がある中古業務用エアコンも取り扱っています。コストを抑えたい場合の選択肢になります。",
  },
  {
    q: "対応エリアや店舗はどこにありますか？",
    a: "公式サイトによると、大阪に実店舗があり、東京・神奈川にも拠点があります。通販を中心に、設置工事にも対応しています。エリアや時期によって対応条件が変わる場合があるため、注文前にご確認ください。",
  },
  {
    q: "口コミでの評価はどのくらいですか？",
    a: "楽天市場店のレビュー（2026-10-21確認）では、価格の安さ、日程調整・設置の丁寧さ、初期不良への丁寧な対応などを評価する声が見られます。一方で、取り付けに対応してもらえなかった・異臭がしたという★1のレビューもあります。なお同店の総合評価は「有効な件数に達していません」と表示されており、レビューは中古エアコン（家庭用を含む）の購入が中心です。Yahoo!ショッピングの「エアコンマート中古販売店」にはストアレビューの投稿がありませんでした。",
  },
  {
    q: "どのくらいの取扱・施工実績がありますか？",
    a: "公式サイトでは、年間1,000台以上の家庭用・業務用エアコンの取り付け工事実績があるとしています。業務用エアコンの販売と工事を幅広く手がけているサービスです。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "エアコンマートの口コミ・評判は？料金・対応エリアを調査",
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
          { label: "エアコンマートの口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        {/* Eyecatch / Header */}
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-3">
            業務用エアコン業者の口コミ・評判
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンマートの口コミ・評判は？
            <br className="hidden md:block" />
            料金・対応エリアを調査
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
            店舗やオフィスの空調を入れ替えるとき、「どの業者に依頼すれば安心か」の判断が重要になります。
            本記事では、業務用エアコンの通販と工事を手がける
            <strong className="font-semibold text-slate-900">エアコンマート</strong>
            について、楽天市場店のレビューとして公開されている利用者の声、新品・中古の取り扱い、料金の考え方、対応エリア、メリット・デメリットを、評価されている点と注意点の両面から中立的にまとめています。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、掲載サイトで公開されている内容を、出典ページを明記したうえで原文のまま引用したものです。料金や対応内容は時期・地域・契約条件により変わるため、最新の情報は公式サイトや無料見積もりでご確認ください（出典確認日：2026年10月21日）。
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
              エアコンマートとは
            </h2>
            <p className="leading-8 text-slate-700">
              エアコンマートは、飲食店・オフィス・店舗など、事業者向けの
              <strong className="font-semibold">業務用エアコンの通販と設置工事</strong>
              を手がけるサービスです。新品に加え、整備済みで1年保証がある中古機も扱っており、コストを抑えたい事業者にとって選択肢が広い点が特徴です。低価格を打ち出しており、本体価格を抑えたい事業者に対応しています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              大阪に実店舗を構え、東京・神奈川にも拠点があります。公式サイトでは、年間1,000台以上の取り付け工事実績があるとしており、通販と工事の両面で実績を重ねているサービスです。
            </p>
          </section>

          {/* Company table */}
          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              基本情報
            </h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "エアコンマート（業務用エアコン通販＋工事）"],
                    ["公式サイト", "https://aircon-mart.com/"],
                    ["拠点", "大阪に実店舗／東京・神奈川に拠点"],
                    ["取り扱い", "新品＋中古（整備済み・1年保証あり）の業務用エアコン"],
                    ["事業内容", "業務用エアコンの通販＋設置工事"],
                    ["実績", "年間1,000台以上の取り付け工事（公式）"],
                    ["特徴", "低価格の訴求／コストを抑えた導入に対応"],
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
              出典：エアコンマート公式サイト（
              <a href="https://aircon-mart.com/" target="_blank" rel="nofollow noopener" className="underline">トップページ</a>
              ・
              <a href="https://aircon-mart.com/guide/" target="_blank" rel="nofollow noopener" className="underline">ご利用ガイド（中古1年保証）</a>
              、2026-10-21確認）。運営会社の正式名称は公式の会社概要でご確認ください。実績は公称値で、内容は変更される場合があります。
            </p>
          </section>

          {/* Good reviews */}
          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              良い口コミ・評判
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              楽天市場店のレビューで多く見られたのは、
              <strong className="font-semibold">価格の安さと、問い合わせ・日程調整・初期不良などへの対応の丁寧さ</strong>
              を評価する声です。中古機について「中古とは思えない綺麗さ」とする声も複数ありました。以下は同ページのレビューを原文のまま引用したものです（★は同ページの評価）。
            </p>
            <div className="grid gap-4">
              {goodReviews.map((r, i) => (
                <figure key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
                  <Stars n={r.stars} />
                  <blockquote className="mt-3 text-slate-800 leading-7">「{r.body}」</blockquote>
                  <figcaption className="mt-3 text-sm text-slate-500">
                    {r.who}
                    <span className="block text-xs text-slate-400 mt-0.5">
                      {r.url ? (
                        <a href={r.url} target="_blank" rel="nofollow noopener" className="underline">出典：{r.source}</a>
                      ) : (
                        <>出典：{r.source}</>
                      )}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-400">
              ※口コミは楽天市場店のレビューの引用です（2026-10-21確認）。同店の総合評価は「有効な件数に達していません」と表示されており、レビューは中古エアコン（家庭用を含む）の購入・配送に関するものが中心です。業務用エアコンの工事に対する評価とは限らない点にご注意ください。
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
              注意点
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              通販を中心としたサービスのため、利用前に確認すべき一般的な注意点があります。楽天市場店のレビューには「最低！取り付け対応も出来なく、事前の説明ではクリーニング済との記載だが、５月現在、異臭が酷い！！」（★1、2026/05/20投稿）という声もありました（
              <a href={RAKUTEN_URL} target="_blank" rel="nofollow noopener" className="underline">出典</a>
              、2026-10-21確認）。注文前に、納期や工事対応エリア、中古機の状態・保証範囲を確認しておくことをおすすめします。
            </p>
            <ul className="space-y-3 text-slate-700 text-[0.95rem] leading-7">
              <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                通販が中心のため、設置工事の対応可否や条件はエリア・時期によって変わることがあります。注文前に確認することをおすすめします。
              </li>
              <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                中古機は整備済み・1年保証ありですが、保証範囲や状態は機種ごとに異なります。事前に内容をご確認ください。
              </li>
              <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                繁忙期や取り寄せの場合、納入までに時間がかかることがあります。スケジュールに余裕を持って相談することをおすすめします。
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
                  <li>低価格を打ち出しており、本体・工事のコストを抑えやすい</li>
                  <li>新品に加え、整備済み・1年保証がある中古機も選べる</li>
                  <li>大阪の実店舗と東京・神奈川の拠点があり、通販＋工事に対応</li>
                  <li>年間1,000台以上の取り付け工事実績がある</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>通販中心のため、工事の対応条件はエリア・時期で変わることがある</li>
                  <li>中古機は保証範囲・状態が機種ごとに異なるため事前確認が必要</li>
                  <li>取り寄せや繁忙期は納入までに時間がかかる場合がある</li>
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
                  <li>本体・工事のコストを最優先で抑えたい店舗・オフィス</li>
                  <li>新品にこだわらず、中古機も含めて検討したい事業者</li>
                  <li>大阪・東京・神奈川エリアで通販＋工事を依頼したい事業者</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>繁忙期に即日・最短での工事完了を求める急ぎの案件</li>
                  <li>全国どこでも手厚い訪問サポートを求める場合</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Price */}
          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              料金の考え方（新品・中古）
            </h2>
            <p className="leading-8 text-slate-700">
              業務用エアコンは、機種の馬力（能力）・台数・設置場所・既存機の撤去有無などで費用が大きく変わります。エアコンマートは
              <strong className="font-semibold">低価格を打ち出しており、新品と中古の両方</strong>
              を扱っているため、予算に合わせて選びやすい点が特徴です。整備済み・1年保証がある中古機を選べば、さらにコストを抑えることもできます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              正確な金額は、設置環境を踏まえた見積もりでご確認ください。本体価格だけでなく、工事費・撤去費・保証範囲（特に中古機）を含めて、複数業者と同じ条件で比較することをおすすめします。
            </p>
            <p className="mt-3 text-xs text-slate-400">
              ※料金は機種・台数・設置環境・新品／中古の別により異なります。最新の条件は公式サイトや見積もりでご確認ください。
            </p>
          </section>

          {/* Flow */}
          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              問い合わせから設置までの流れ
            </h2>
            <ol className="space-y-4">
              {[
                ["問い合わせ・相談", "公式サイトや通販ページから相談・注文し、設置場所や希望機種、台数などを伝えます。"],
                ["機種の選定・見積もり", "新品・中古を含めて機種を選び、本体・工事費を含む見積もりを確認します。"],
                ["注文・契約", "機種と費用、保証内容を確認して注文・契約します。"],
                ["納品・設置工事", "機器を納品し、工事対応エリアでは設置工事を行います。"],
                ["引き渡し・アフター対応", "動作確認のうえ引き渡します。中古機は1年保証にもとづいてアフター対応を行います。"],
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
              エアコンマートは、業務用エアコンの通販と工事を手がけるサービスで、低価格と、新品・中古（整備済み・1年保証あり）の両方を扱う品ぞろえが強みです。楽天市場店のレビューでは、価格の安さや、日程調整・初期不良などへの丁寧な対応を評価する声が見られました（レビューは中古エアコンの購入が中心）。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              一方で、通販が中心のため、工事の対応条件や中古機の保証範囲は事前の確認が大切です。業務用エアコンの導入は費用が大きいため、1社で決めず、複数業者から相見積もりを取り、料金・保証・対応エリアを比較して選ぶことが、失敗を防ぐうえで有効です。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">業務用エアコンの入れ替えを検討中の方へ</p>
              <p className="text-teal-100 text-sm mb-5">
                見積もりで、新品・中古を含めた機種と費用の目安をご確認ください。
              </p>
              <a
                href="https://aircon-mart.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors"
              >
                エアコンマート公式サイトを見る
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
