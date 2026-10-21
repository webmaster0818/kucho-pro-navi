import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "テンポスドットコムの口コミ・評判は？飲食店向け業務用エアコンの料金・特徴を調査【2026年10月】",
  description:
    "飲食店の開業・運営を支援するテンポスドットコム（テンポスホールディングス系）の業務用エアコン販売について、サービスの特徴、料金の考え方、向いている事業者、注意点を中立的にまとめています。飲食店向けの強みと選び方のポイントを、2026年10月時点の情報にもとづきご説明します。",
  alternates: { canonical: "/company/tenpos-dotcom" },
};

const UPDATED = "2026年10月21日";

const toc = [
  { id: "summary", label: "テンポスドットコムとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "feature", label: "飲食店向けの特徴・強み" },
  { id: "good", label: "公式サイト掲載の導入事例" },
  { id: "note", label: "依頼前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている事業者・向いていない事業者" },
  { id: "price", label: "料金の考え方" },
  { id: "flow", label: "問い合わせから設置までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "summary-last", label: "まとめ" },
];

const OFFICIAL_SOURCE = "テンポスドットコム公式「業務用エアコン」ページ内「エアコン導入事例」（2026-10-21確認）";
const OFFICIAL_URL = "https://www.tenpos.com/c/aircon-all";

// 公式サイト掲載の導入事例（「エアコン工事をテンポスに依頼しようと思ったきっかけは？」への回答）を原文のまま引用
const goodReviews: { body: string; who: string; source: string; url?: string }[] = [
  {
    body:
      "冷蔵庫の修理依頼時にエアコンも古く(10年前)冷房の効きも悪かった為テンポスに相談。新しいエアコンにすると電気代も安くなるとの話を聞き注文。",
    who: "太古ダイニング様（中華料理・30坪／三菱電機 天カセ4方向×2台 同機種更新工事）",
    source: OFFICIAL_SOURCE,
    url: OFFICIAL_URL,
  },
  {
    body:
      "客席の8台あるエアコンの1台が壊れてしまい、年中無休営業に支障がなく費用も安くできるテンポスに依頼。",
    who: "牛国屋 ふじみ野店様（焼肉屋・60坪／ダイキン 天井埋込カセット形）",
    source: OFFICIAL_SOURCE,
    url: OFFICIAL_URL,
  },
];

const faqs = [
  {
    q: "テンポスドットコムは飲食店以外でも利用できますか？",
    a: "テンポスドットコムは飲食店の開業・運営支援を軸にしたサービスで、業務用厨房機器を中心に店舗まわりの備品や設備を幅広く扱っています。業務用エアコンも取り扱いがありますが、飲食店向けを主とするサービスのため、店舗・厨房を持つ業態に適しています。",
  },
  {
    q: "業務用エアコンの設置工事も依頼できますか？",
    a: "公式サイトの業務用エアコンページでは、工事の流れや導入事例が紹介されており、「最短7日で設置完了」と案内されています（2026-10-21確認）。ただし機種・地域・店舗の状況によって対応範囲が変わるため、設置まで含めて依頼したい場合は、見積もり段階で工事の有無と内容を必ず確認してください。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "テンポスドットコムは通販サイトで、グループのテンポスバスターズ各店舗とも連携しています（公式の会社概要より）。設置工事の対応可否は地域によって異なる場合があるため、見積もり時にご確認ください。",
  },
  {
    q: "料金の目安はどのくらいですか？",
    a: "業務用エアコンは機種の能力（馬力）・台数・設置場所・既存機の撤去の有無などで費用が大きく変わります。テンポスは中古・リユース品も扱う点が特徴で、費用を抑えたい場合の選択肢となります。正確な金額は、商品ページや見積もりでご確認ください。",
  },
  {
    q: "運営会社はどこですか？",
    a: "テンポスドットコムは、テンポスホールディングスのグループ会社である株式会社テンポスドットコム（東京都大田区）が運営する、飲食店向けの通販サイトです。グループは中古厨房機器の販売・買取を中心に事業を展開しています。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "テンポスドットコムの口コミ・評判は？飲食店向け業務用エアコンの料金・特徴を調査",
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
          { label: "テンポスドットコムの口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        {/* Eyecatch / Header */}
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-3">
            業務用エアコン業者の口コミ・評判
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            テンポスドットコムの口コミ・評判は？
            <br className="hidden md:block" />
            飲食店向け業務用エアコンの料金・特徴を調査
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
              alt="飲食店の厨房や客席に設置される業務用エアコンのイメージ"
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
            飲食店の開業や改装にあたり、厨房機器と空調をまとめて相談する場合の候補となるのが
            <strong className="font-semibold text-slate-900">テンポスドットコム</strong>
            です。テンポスホールディングスのグループ会社が運営する飲食店向けの通販サイトで、業務用エアコンも扱っています。本記事では、サービスの特徴、料金の考え方、向いている事業者、依頼前の注意点を中立的にまとめています。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事は公開情報をもとに構成しています。業務用エアコンに関する第三者の口コミは確認できなかったため、本記事では公式サイトの情報・導入事例と一般的な選び方の注意点を中心にご説明します。料金・対応内容は時期・地域・在庫により変わるため、最新情報は公式サイトや見積もりでご確認ください（出典確認日：2026年10月21日）。
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
              テンポスドットコムとは
            </h2>
            <p className="leading-8 text-slate-700">
              テンポスドットコムは、飲食店の開業・運営を総合的に支援する
              <strong className="font-semibold">飲食店向けの通販・店舗支援サービス</strong>
              です。運営は、テンポスホールディングスのグループ会社である株式会社テンポスドットコムです。グループは中古厨房機器の販売・買取を中心に、新品・中古の幅広い品揃えで飲食店向けの事業を展開しています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              冷蔵庫・コンロといった厨房機器だけでなく、店舗の備品や設備を幅広く扱っており、その中で業務用エアコンも販売しています。公式サイトの業務用エアコンページでは「最短7日で設置完了」とし、飲食店の導入事例も紹介しています。また、グループのテンポスバスターズ各店舗と連携していると案内されています。
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
                    ["サービス名", "テンポスドットコム（飲食店向け通販／業務用エアコン）"],
                    ["運営", "株式会社テンポスドットコム（テンポスホールディングスのグループ会社）"],
                    ["設立", "平成18年5月（株式会社テンポスドットコム）"],
                    ["所在地", "東京都大田区南蒲田1-1-25 蒲田東日本ビル7階"],
                    ["主な事業", "飲食店向けの厨房機器・店舗備品・空調機器の販売"],
                    ["対応エリア", "全国（通販。設置工事の対応は地域・機種により異なる）"],
                    ["取扱区分", "新品・中古（リユース）を含む幅広い品揃え"],
                    ["公式サイト", "https://www.tenpos.com/c/aircon-all"],
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
              出典：テンポスドットコム公式サイト（
              <a href="https://www.tenpos.com/c/company" target="_blank" rel="nofollow noopener" className="underline">会社概要</a>
              ・
              <a href="https://www.tenpos.com/c/aircon-all" target="_blank" rel="nofollow noopener" className="underline">業務用エアコン</a>
              、2026-10-21確認）。所在地・取扱内容等は変更される場合があります。
            </p>
          </section>

          {/* Feature */}
          <section id="feature" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              飲食店向けの特徴・強み
            </h2>
            <p className="leading-8 text-slate-700 mb-5">
              テンポスドットコムの主な特徴は、
              <strong className="font-semibold">飲食店の開業・運営に必要なものをワンストップでそろえられる</strong>
              点にあります。厨房機器の販売で実績があり、店舗づくりの過程で空調もあわせて検討できる点が強みです。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-teal-600 font-bold">・</span>厨房機器から空調・店舗備品まで、飲食店向けの設備を一か所で相談できる</li>
              <li className="flex gap-3"><span className="text-teal-600 font-bold">・</span>新品だけでなく中古・リユース品も扱い、開業時のコストを抑えやすい</li>
              <li className="flex gap-3"><span className="text-teal-600 font-bold">・</span>全国通販に対応し、地方の店舗でも商品を取り寄せやすい</li>
              <li className="flex gap-3"><span className="text-teal-600 font-bold">・</span>飲食店の現場に即した品揃えと提案</li>
            </ul>
          </section>

          {/* Good reviews */}
          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              公式サイト掲載の導入事例
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              業務用エアコンに関する第三者サイトの口コミは確認できませんでした。参考として、公式サイトの業務用エアコンページに掲載されている
              <strong className="font-semibold">飲食店の導入事例</strong>
              から、「エアコン工事をテンポスに依頼しようと思ったきっかけ」への回答を原文のまま引用します。公式サイトが掲載する事例であり、第三者による評価ではない点にご留意ください。
            </p>
            <div className="grid gap-4">
              {goodReviews.map((r, i) => (
                <figure key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
                  <blockquote className="text-slate-800 leading-7">「{r.body}」</blockquote>
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
              ※上記は公式サイトに掲載された導入事例の引用です（2026-10-21確認）。事業者自身が掲載する事例のため、第三者の口コミとは性質が異なります。参考としてご覧ください。
            </p>
          </section>

          {/* Mid image */}
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image
              src="/images/hero-b.png"
              alt="天井に設置された業務用エアコンと飲食店の客席空間"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          {/* Note */}
          <section id="note" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              依頼前の注意点
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              テンポスは飲食店向けの通販を主軸とするサービスのため、業務用エアコンを検討する際は、
              <strong className="font-semibold">設置工事まで含めて任せられるかどうか</strong>
              を事前に確認しておくことをおすすめします。通販で本体を購入する形と、設置の手配まで含める形では、費用やスケジュールが異なります。
            </p>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-slate-700 leading-7">
                  ・業務用エアコンの設置工事は、機種・地域・店舗の状況によって対応範囲が変わります。設置まで依頼する場合は、工事の有無・内容・費用を見積もり段階でご確認ください。
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-slate-700 leading-7">
                  ・中古・リユース品を選ぶ場合は、保証の範囲や年式・状態を事前にご確認ください。導入後のトラブルを避けるためです。
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
                  <li>厨房機器から空調まで飲食店向けに一括で相談できる</li>
                  <li>新品・中古の両方を扱い、開業コストを抑えやすい</li>
                  <li>全国通販に対応し、地方の店舗でも取り寄せやすい</li>
                  <li>見積もり・現地調査が無料である</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>業務用エアコン専門店ではなく、飲食店向け通販の取扱商品のひとつという位置づけ</li>
                  <li>設置工事の対応範囲は機種・地域によって異なる</li>
                  <li>中古品は保証・状態の確認が前提になる</li>
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
                  <li>開業・改装で厨房機器と空調をまとめて準備したい飲食店</li>
                  <li>新品にこだわらず、中古も含めてコストを抑えたい店舗</li>
                  <li>店舗まわりの備品を一か所でそろえたい事業者</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>設置工事からアフター対応まで一貫して専門業者に任せたい事業者</li>
                  <li>オフィス・工場など飲食店以外で大規模な空調更新を行う事業者</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Price */}
          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              料金の考え方
            </h2>
            <p className="leading-8 text-slate-700">
              業務用エアコンは、機種の馬力（能力）・台数・設置場所・既存機の撤去の有無などで費用が大きく変わります。テンポスは
              <strong className="font-semibold">中古・リユース品も扱う</strong>
              ため、費用を抑えたい飲食店にとって選択肢が広い点が特徴です。一方で、設置工事を含めるかどうかで総額が変わる点にご留意ください。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              正確な金額は、商品ページの価格と見積もりでご確認ください。本体価格だけでなく、工事費・保証・アフター対応を含めた総額で、複数の選択肢を比較することをおすすめします。
            </p>
            <p className="mt-3 text-xs text-slate-400">
              ※価格・在庫は変動します。最新の料金は公式サイトや見積もりでご確認ください。
            </p>
          </section>

          {/* Flow */}
          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              問い合わせから設置までの流れ
            </h2>
            <ol className="space-y-4">
              {[
                ["商品の検討・相談", "公式サイトで機種を探し、必要に応じて電話・フォームで相談します。"],
                ["見積もり・在庫の確認", "希望機種の在庫・価格、設置の可否や工事の要否を確認します。"],
                ["注文・契約方法の決定", "新品か中古か、設置手配を含めるかを決めて注文します。"],
                ["配送・設置の手配", "商品の配送、必要に応じて設置工事の日程を調整します。"],
                ["引き渡し・アフター対応", "動作確認のうえ引き渡しとなります。保証内容に沿ってサポートを受けられます。"],
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
              テンポスドットコムは、業務用厨房機器の販売で実績のあるテンポスホールディングス系のサービスです。飲食店の開業・運営に必要な設備を一括でそろえられる点が強みです。業務用エアコンも通販で扱っており、厨房機器とあわせて検討する飲食店に適しています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              一方で、業務用エアコンの専門店ではないため、設置工事の対応範囲や中古品の保証は事前に確認する必要があります。空調の導入は費用が大きいため、1社のみで決めず、複数の選択肢から料金・保証・対応エリアを比較したうえで選ぶことが、失敗を防ぐうえで有効です。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">飲食店の空調・店舗設備を検討中の方へ</p>
              <p className="text-teal-100 text-sm mb-5">
                公式サイトで機種・価格を確認し、設置の要否もあわせてご相談いただくことをおすすめします。
              </p>
              <a
                href="https://www.tenpos.com/c/aircon-all"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors"
              >
                テンポスドットコム公式サイトを見る
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
