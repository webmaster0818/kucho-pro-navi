import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコン総本店（東洋電興）の口コミ・評判は？1981年創業・施工5万件の実力と料金を検証【2026年10月】",
  description:
    "業務用エアコン専門店「エアコン総本店」（運営：東洋電興株式会社／総本舗とは別会社）の口コミ・評判をまとめています。1981年創業・施工5万件以上の実績、対応エリア・料金・保証、メリット・デメリット、向いている事業者まで中立的に解説します。",
  alternates: { canonical: "/company/aircon-sohonten" },
};

const UPDATED = "2026年10月21日";

const toc = [
  { id: "summary", label: "エアコン総本店とは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "良い口コミ・評判" },
  { id: "bad", label: "注意点を指摘する口コミ・評判" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている事業者・向いていない事業者" },
  { id: "price", label: "料金・保証の仕組み" },
  { id: "flow", label: "問い合わせから設置までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "summary-last", label: "まとめ" },
];

const goodReviews: { body: string; who: string; source: string; url?: string }[] = [
  {
    body:
      "他社の方からエアコン総本店さんの話を聞き、問い合わせてみたところ、親身に話を聞いてくださいました。最初に話をした人が工事終了までずっと担当してくれたので、こちらも相談しやすくてよかったです。工事も非常にスムーズで、すぐに新しいエアコンになったので本当に助かりました。",
    who: "神奈川県・建設業・50代男性（原文から一部抜粋）",
    source: "エアコン総本店公式サイト「神奈川県の対応エリア」掲載のお客様の声（2026-10-21確認）",
    url: "https://www.1981airconsohonten.jp/area/kanagawa/",
  },
  {
    body:
      "できるだけ急ぎで対応してほしいと依頼したところ、こちらが思っていたよりも早く対応してもらえて本当に助かりました。費用の相場もこちらで簡単に調べてはいましたが、それよりも安く済んだことにも驚きました。担当してくれた人が丁寧で、気になることも説明してもらえたので安心して任せられました。",
    who: "東京都渋谷区・文具小売業・30代男性（原文から一部抜粋）",
    source: "エアコン総本店公式サイト「東京都の対応エリア」掲載のお客様の声（2026-10-21確認）",
    url: "https://www.1981airconsohonten.jp/area/tokyo/",
  },
  {
    body:
      "工事の内容も事前にわかりやすく説明してもらえましたし、スケジュール通りに終わらせてもらえたので営業にも影響が出なくて助かりました。",
    who: "神奈川県・飲食店・40代女性（原文から一部抜粋）",
    source: "エアコン総本店公式サイト「神奈川県の対応エリア」掲載のお客様の声（2026-10-21確認）",
    url: "https://www.1981airconsohonten.jp/area/kanagawa/",
  },
];

const faqs = [
  {
    q: "エアコン総本店は業務用エアコンの設置に対応していますか？",
    a: "はい。エアコン総本店は1981年創業の業務用エアコン専門店で、業務用エアコン・設備用エアコンの販売から現場の打ち合わせ・施工・工程管理までを手がけています。公式サイトでは50,000件以上の施工実績があるとされています。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "施工・設置は東京・神奈川・埼玉・千葉の関東1都3県が中心です。機器の販売のみであれば全国対応も可能とされています。施工を希望する場合は、問い合わせ時に対応可否をご確認ください。",
  },
  {
    q: "料金やリースの目安は？",
    a: "見積もりは無料で、業種や用途、フロアの広さに応じた機種の提案を受けられます。本体や工事費は機種・台数・設置条件で変わるため、具体的な金額は無料見積もりでご確認ください。",
  },
  {
    q: "保証はありますか？",
    a: "エアコン本体にはメーカー保証（1年）があり、加えて施工に対して3年間の独自の工事保証（無料）が用意されています。保証範囲は契約内容で異なるため、見積もり時にご確認ください。",
  },
  {
    q: "運営会社はどこですか？",
    a: "エアコン総本店は、東京都千代田区外神田に本社を置く東洋電興株式会社が運営する業務用エアコンの専門店です。1981年の創業以来、業務用エアコンの販売・施工・アフターメンテナンスを手がけ、公式サイトでは「DAIKIN AWARD」や三菱重工からの感謝状を掲げています。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "エアコン総本店の口コミ・評判は？業務用エアコンの料金・対応エリアを解説【2026年10月】",
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
          { label: "エアコン総本店の口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        {/* Eyecatch / Header */}
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-3">
            業務用エアコン業者の口コミ・評判
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコン総本店の口コミ・評判は？
            <br className="hidden md:block" />
            業務用エアコンの料金・対応エリアを解説
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
            業務用エアコンの入れ替えでは、長期的に取引できる信頼性の高い業者を選ぶことが重要です。
            本記事では、創業40年以上の老舗として知られる
            <strong className="font-semibold text-slate-900">エアコン総本店</strong>
            （運営：東洋電興株式会社）について、公開されている利用者の声、料金や保証、対応エリア、メリット・デメリットを、良い点・注意点の両面から中立的にまとめています。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、各掲載サイトで公開されている内容を、出典ページを明記したうえで原文から引用したものです。料金や対応内容は時期・地域・契約条件により変わるため、最新の情報は公式サイトや無料見積もりでご確認ください（口コミの出典確認日：2026年10月21日）。
          </p>
        </div>


        {/* 結論即答 */}
        <div className="max-w-3xl mx-auto px-5 pt-8">
          <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-6">
            <p className="font-bold text-teal-800 mb-2">エアコン総本店の評判の要点</p>
            <p className="text-[0.95rem] leading-7 text-slate-700">
              エアコン総本店は<strong className="font-semibold">創業40年以上の老舗</strong>業務用エアコン業者（運営：東洋電興株式会社）です。公式サイトに掲載されたお客様の声では<strong className="font-semibold">担当者の一貫対応・急ぎの依頼への対応スピード・事前説明の丁寧さ</strong>を評価する声が見られます。詳しくは<a href="#good" className="text-teal-700 underline underline-offset-4">実際の口コミ</a>と<a href="#price" className="text-teal-700 underline underline-offset-4">料金</a>をご覧ください。
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
              エアコン総本店とは
            </h2>
            <p className="leading-8 text-slate-700">
              エアコン総本店は、飲食店・オフィス・病院・クリニック・店舗など、事業者向けの
              <strong className="font-semibold">業務用エアコン</strong>
              の販売・施工・アフターメンテナンスを手がける専門店です。運営は、東京都千代田区外神田に本社を構える東洋電興株式会社です。1981年の創業以来、首都圏を中心に業務用空調の施工を手がけており、公式サイトでは50,000件以上の施工実績があるとしています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              ダイキン・三菱電機・三菱重工・日立・東芝（日本キヤリア）・パナソニック・富士通ゼネラルなど主要メーカーの機種を幅広く扱い、見積もりから施工完了まで同じ担当者が対応する「専任担当制」を採用しているのが特徴です。公式サイトでは「DAIKIN AWARD」や三菱重工からの感謝状を掲げています。
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
                    ["サービス名", "エアコン総本店（業務用エアコン専門店）"],
                    ["運営会社", "東洋電興株式会社"],
                    ["本社所在地", "東京都千代田区外神田2-8-4"],
                    ["設立", "1981年1月（創業40年以上）"],
                    ["対応エリア", "東京・神奈川・埼玉・千葉（施工）／全国（機器販売のみ）"],
                    ["取扱メーカー", "ダイキン／三菱電機／三菱重工／日立／東芝（日本キヤリア）／パナソニック／富士通ゼネラル"],
                    ["施工実績", "50,000件以上（公式サイト表記）"],
                    ["保証", "メーカー保証（1年）＋独自の工事保証（3年・無料）"],
                    ["受付時間", "平日 9:00〜18:00"],
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
              出典：エアコン総本店公式サイト（会社概要・選ばれる理由）。所在地・受付時間等は変更される場合があります。最新情報は公式サイトでご確認ください。
            </p>
          </section>

          {/* Good reviews */}
          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              良い口コミ・評判
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              公式サイトの対応エリアページに掲載されているお客様の声では、
              <strong className="font-semibold">担当者が変わらない安心感と、対応の早さ・説明の丁寧さ</strong>
              を評価する声が見られます。最初に話をした人が工事終了まで担当した点、急ぎの依頼に早く対応した点、工事内容を事前にわかりやすく説明した点が挙げられています。
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
              ※上記は公式サイトに掲載されているお客様の声を原文から一部抜粋して引用したものです。公式サイトの声は自社で収集・掲載された内容のため、出典を明記したうえで参考としてご覧ください。独立した口コミ投稿サイトでの件数は限られています。
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
              注意点を指摘する口コミ・評判
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              公開されている口コミは肯定的なものが中心で、明確に不利な指摘は確認できませんでした。ただし注意点として、
              <strong className="font-semibold">施工対応エリアが関東1都3県に限られる</strong>
              点が挙げられます（機器の販売のみであれば全国対応）。エリア外で施工まで依頼する場合は、事前に対応可否をご確認ください。また、需要が集中する繁忙期は工事日程の調整が難しくなることがあるため、早めの相談をおすすめします。
            </p>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-slate-700 leading-7 text-[0.95rem]">
                当サイトでは確認できない否定的な口コミは掲載を控え、一般的な注意点として「施工エリアの確認」「繁忙期の日程」「見積もり内容・保証範囲の確認」を挙げるにとどめています。見積もりの段階で、これらの条件をご確認ください。
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
                  <li>創業40年以上・施工50,000件以上（公式サイト表記）の実績</li>
                  <li>見積もりから完了まで一貫対応する専任担当制</li>
                  <li>3年間の工事保証が無料で付帯する（メーカー保証とは別）</li>
                  <li>急な故障など、急ぎの相談にも対応する（最短3日での施工にも対応）</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>施工の対応エリアが関東1都3県に限られる</li>
                  <li>独立した口コミサイトでの評価件数は限られている</li>
                  <li>機種・台数・設置条件で料金が変わるため、相見積もりでの比較が前提</li>
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
                  <li>実績と信頼性を重視して老舗に任せたい関東圏の事業者</li>
                  <li>窓口が一本化された専任担当制で進めたい事業者</li>
                  <li>急な故障・入替で、早めの施工を希望する店舗・オフィス</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>関東1都3県以外で施工まで依頼したい事業者</li>
                  <li>独立した口コミの件数を最も重視する事業者</li>
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
              業務用エアコンは、機種の馬力（能力）・台数・設置場所・既存機の撤去有無などで費用が大きく変わります。エアコン総本店では、
              <strong className="font-semibold">業種や用途、フロアの広さに応じた機種</strong>
              を専任担当者が提案し、見積もりは無料で受けられます。具体的な金額は機種や設置条件によって変わるため、現地調査後の見積もりでご確認ください。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              保証は、エアコン本体のメーカー保証（1年）に加え、施工に対する独自の工事保証（3年・無料）が付帯する点が特徴です。複数業者から相見積もりを取り、本体価格・工事費・保証年数・アフター対応を同じ条件で比較することをおすすめします。
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
                ["問い合わせ・相談", "電話またはWebフォームから相談し、設置場所や希望機種、台数などを伝えます。"],
                ["現地調査・見積もり", "専任担当者が設置環境を確認し、用途に合った機種と費用を提案します。見積もりは無料です。"],
                ["プラン・契約内容の決定", "機種・保証内容・支払い方法を比較して決定します。"],
                ["工事日程の調整・設置工事", "日程を調整し、国家資格を持つ担当者が設置・入替工事を行います。"],
                ["引き渡し・アフター対応", "動作確認のうえ引き渡します。引き渡し後は工事保証やメンテナンスで対応します。"],
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
              エアコン総本店は、東洋電興株式会社が1981年から運営する業務用エアコンの老舗専門店で、創業40年以上の実績、専任担当制による安心感、3年・無料の工事保証が強みです。公式サイトに掲載されているお客様の声では、担当者が変わらない安心感や、急ぎの依頼への早い対応、事前説明の丁寧さを評価する声が見られました。一方で、施工エリアが関東1都3県中心である点にご留意ください。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              業務用エアコンの導入は費用が大きいため、1社で決めず、複数業者から相見積もりを取り、料金・保証・対応エリアを比較して選ぶことが、失敗を防ぐうえで有効です。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">業務用エアコンの入れ替えを検討中の方へ</p>
              <p className="text-teal-100 text-sm mb-5">
                無料の現地調査・見積もりで、機種と費用の目安をご確認ください。
              </p>
              <a
                href="https://www.1981airconsohonten.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors"
              >
                エアコン総本店公式サイトを見る
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
