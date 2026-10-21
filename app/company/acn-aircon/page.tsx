import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ACNエアコンの口コミ・評判は？リース料金・対応内容を調査【2026年10月】",
  description:
    "業務用エアコンのリース専門「ACNエアコン」（運営：株式会社ACNソリューション）の口コミ・評判をまとめました。初期費用0円リースやあんしん保証Ecoプラン、対応内容、メリット・デメリット、向いている事業者まで中立的に解説します。",
  alternates: { canonical: "/company/acn-aircon" },
};

const UPDATED = "2026年10月21日";

const toc = [
  { id: "summary", label: "ACNエアコンとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "良い口コミ・評判" },
  { id: "bad", label: "注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている事業者・向いていない事業者" },
  { id: "price", label: "料金・リースの仕組み" },
  { id: "flow", label: "問い合わせから設置までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "summary-last", label: "まとめ" },
];

const GMEN_SOURCE =
  "コピー機Gメン「ACNのエアコンの評判｜激安じゃないけどサポートは高評価！」（2026-10-21確認）";
const GMEN_URL = "https://www.copyki-gmen.com/aircon/acn-aircon";

const goodReviews: { body: string; who: string; rating: string; source: string; url?: string }[] = [
  {
    body:
      "ACNエアコンのリースプランで契約しましたが、大変満足しています。初期費用が不要で、省エネ性能の高い最新モデルを選べるのが魅力です。特に、自動フィルター清掃機能が付いたモデルは清潔で快適です。また、24時間体制のサポートが心強く、小さなトラブルも迅速に解決してくれました。",
    who: "大阪府 30代 男性",
    rating: "やや満足",
    source: GMEN_SOURCE,
    url: GMEN_URL,
  },
  {
    body:
      "購入前とても丁寧に説明していただきましたが、わかりやすく好印象でした。ものの方も、実際コンパクトですごくいいなと思いました。",
    who: "富山県 男性",
    rating: "とても満足",
    source: GMEN_SOURCE,
    url: GMEN_URL,
  },
  {
    body:
      "平均的な価格で購入しました。設置時のフロアの下見も丁寧にして頂き事前にしっかりとした準備をすることができました。何かあった時の対応についての説明も非常に丁寧でした。",
    who: "利用者（地域・年代の記載なし）",
    rating: "とても満足",
    source: GMEN_SOURCE,
    url: GMEN_URL,
  },
];

const faqs = [
  {
    q: "ACNエアコンはどんなサービスですか？",
    a: "ACNエアコンは、株式会社ACNソリューションが運営する業務用エアコンのリース専門サービスです。初期費用0円のリースを中心に、販売や保守にも対応しています。公式サイトの会社概要には「2万社以上の実績」との記載がありますが、業務用エアコンのリースに限った数字かどうかは明記されていません（2026-10-21確認）。",
  },
  {
    q: "「あんしん保証Ecoプラン」とは何ですか？",
    a: "ACNエアコンが用意するリースプランで、公式サイトでは出張・修理費無料、24時間365日サポート、動産総合保険付きなどが案内されています。内部の分解洗浄は標準プランには含まれず、オプションで追加する形です（公式サイト https://www.acn-aircon.com/plan/ 2026-10-21確認）。プランの詳細や条件は契約時にご確認ください。",
  },
  {
    q: "リースのメリットは何ですか？",
    a: "初期費用0円で業務用エアコンを導入できるため、まとまった出費を抑えられます。月々のリース料に保守やサポートが含まれるプランもあり、計画的に空調を管理しやすいのが利点です。",
  },
  {
    q: "料金は安いですか？",
    a: "比較サイト「コピー機Gメン」の記事では、価格について「正直『激安です』とは言えません」としつつ、リース料の中にメンテナンス費用や修理費用が組み込まれている点を評価しています（2026-10-21確認）。本体価格だけでなく、サポートを含めた総額で比較することをおすすめします。正確な金額は見積もりでご確認ください。",
  },
  {
    q: "運営会社はどこですか？",
    a: "「ACNエアコン」は株式会社ACNソリューションが運営しています。公式サイトの会社概要では、資本金4億100万円（グループ計）、年商671億円（グループ会社の単純合算）とされており、業務用エアコンのリース・販売・保守を手がけています。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ACNエアコンの口コミ・評判は？リース料金・対応内容を調査",
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
          { label: "ACNエアコンの口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        {/* Eyecatch / Header */}
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-3">
            業務用エアコン業者の口コミ・評判
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            ACNエアコンの口コミ・評判は？
            <br className="hidden md:block" />
            リース料金・対応内容を調査
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
            本記事では、業務用エアコンのリース専門サービスとして知られる
            <strong className="font-semibold text-slate-900">ACNエアコン</strong>
            （運営：株式会社ACNソリューション）について、公開されている利用者の声、初期費用0円リースや「あんしん保証Ecoプラン」の仕組み、対応内容、メリット・デメリットを、評価されている点と注意点の両面から中立的にまとめています。
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
              ACNエアコンとは
            </h2>
            <p className="leading-8 text-slate-700">
              ACNエアコンは、飲食店・オフィス・店舗・施設など、事業者向けの
              <strong className="font-semibold">業務用エアコンのリース専門サービス</strong>
              です。運営は株式会社ACNソリューションです。初期費用0円のリースを中心に、販売や保守にも対応しています。公式サイトの会社概要には「2万社以上の実績」との記載があります（業務用エアコンのリースに限った数字かは明記なし）。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              特徴的なのが「あんしん保証Ecoプラン」です。公式サイトでは出張・修理費無料、24時間365日サポート、動産総合保険付きなどが案内されており、設置後の運用段階まで支援する設計になっています。なお、内部の分解洗浄は標準プランには含まれず、オプションです。
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
                    ["サービス名", "ACNエアコン（業務用エアコンのリース専門）"],
                    ["運営会社", "株式会社ACNソリューション"],
                    ["公式サイト", "https://www.acn-aircon.com/"],
                    ["資本金・年商", "資本金4億100万円（グループ計）／年商671億円（グループ会社の単純合算）"],
                    ["事業内容", "業務用エアコンのリース（初期費用0円）＋販売・保守"],
                    ["主なプラン", "あんしん保証Ecoプラン（出張・修理費無料／24時間365日サポート／分解洗浄はオプション）"],
                    ["実績", "「2万社以上の実績」（会社概要の記載。リースに限った数字かは明記なし）"],
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
              出典：ACNエアコン公式サイト（
              <a href="https://www.acn-aircon.com/company/" target="_blank" rel="nofollow noopener" className="underline">会社概要</a>
              ・
              <a href="https://www.acn-aircon.com/plan/" target="_blank" rel="nofollow noopener" className="underline">あんしん保証Ecoプラン</a>
              、2026-10-21確認）。実績・規模は公称値です。内容は変更される場合があります。
            </p>
          </section>

          {/* Good reviews */}
          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              良い口コミ・評判
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              比較サイト「コピー機Gメン」に掲載された口コミでは、
              <strong className="font-semibold">初期費用が不要な点、24時間体制のサポート、購入前・設置前の説明の丁寧さを評価する声</strong>
              が見られました。以下は同ページの口コミを原文のまま引用したものです（満足度の表記も同ページのものです）。
            </p>
            <div className="grid gap-4">
              {goodReviews.map((r, i) => (
                <figure key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
                  <span className="text-xs font-semibold text-teal-700">評価：{r.rating}</span>
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
              ※口コミは出典ページに掲載されている内容の引用です（2026-10-21確認）。掲載内容は変更・削除される場合があります。参考としてご覧ください。
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
              比較サイト「コピー機Gメン」の記事では、価格について「
              <strong className="font-semibold">正直「激安です」とは言えません</strong>
              」としたうえで、リース料にメンテナンス費用・修理費用が含まれる点を評価しています。同ページには「スピーディーな対応だったが、やや連携不足を感じた」（評価：普通）という口コミもあり、担当者が変わった際の引き継ぎに触れています（
              <a href={GMEN_URL} target="_blank" rel="nofollow noopener" className="underline">出典</a>
              、2026-10-21確認）。リース契約は中長期にわたるため、契約前に料金やプラン内容を確認しておくことをおすすめします。
            </p>
            <ul className="space-y-3 text-slate-700 text-[0.95rem] leading-7">
              <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                本体価格の安さを最優先する場合、低価格の通販と比べると割高に感じることがあります。サポートを含めた総額で比較することをおすすめします。
              </li>
              <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                リースは中長期の契約になるため、契約期間・月額・プランに含まれるサポート範囲を事前にご確認ください。
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
                  <li>初期費用0円のリースで、まとまった出費を抑えて導入できる</li>
                  <li>あんしん保証Ecoプランで出張・修理費無料、24時間365日サポート（分解洗浄はオプション）</li>
                  <li>フロン排出抑制法に基づく簡易点検・定期点検の代行に対応（公式FAQ）</li>
                  <li>購入前・設置前の説明が丁寧だったという口コミがある</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>本体価格の安さを最優先するなら、低価格の通販より割高に感じることがある</li>
                  <li>リースは中長期契約のため、期間・月額・プラン内容の確認が前提</li>
                  <li>サポートを含めた総額で、他の業者と同じ条件で比較することが望ましい</li>
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
                  <li>導入後の点検・清掃・修理サポートを重視したい事業者</li>
                  <li>電気代やランニングコストも含めて相談したい事業者</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>本体価格の安さを最も重視したい場合</li>
                  <li>リースではなく一括購入で短期的に済ませたい場合</li>
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
              ACNエアコンは
              <strong className="font-semibold">初期費用0円のリース</strong>
              を中心としたサービスです。まとまった導入費用をかけずに業務用エアコンを使い始められ、月々のリース料で計画的に空調を管理できます。「あんしん保証Ecoプラン」を選べば、出張・修理費無料や24時間365日サポートなど、運用面のサポートが月額に組み込まれます（分解洗浄はオプション）。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              比較サイト「コピー機Gメン」でも、価格は「激安」とは言えない一方、メンテナンス・修理費用込みのリース料である点が評価されています。正確な金額やプラン内容は、設置環境を踏まえた見積もりでご確認ください。本体価格だけでなく、契約期間・月額・含まれるサポート範囲を、複数業者で比較することをおすすめします。
            </p>
            <p className="mt-3 text-xs text-slate-400">
              ※料金・リース条件は機種・台数・設置環境・プランにより異なります。最新の条件は公式の見積もりでご確認ください。
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
                ["現地調査・見積もり", "担当者が設置環境を確認し、機種・リース料・プランを提案します。ランニングコストも含めて相談できます。"],
                ["プラン・契約内容の決定", "リース期間やあんしん保証Ecoプランの内容を比較して決定します。"],
                ["工事日程の調整・設置工事", "日程を調整し、設置工事を行います。"],
                ["引き渡し・運用サポート", "動作確認のうえ引き渡します。その後も点検・清掃・出張修理などで運用を継続して支援します。"],
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
              ACNエアコンは、株式会社ACNソリューションが運営する業務用エアコンのリース専門サービスで、初期費用0円のリースと、あんしん保証Ecoプランによる手厚い運用サポートが強みです。比較サイトに掲載された口コミでは、初期費用不要や24時間体制のサポート、説明の丁寧さを評価する声が見られました。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              一方で、本体価格の安さを最優先する場合は割高に感じることもあるため、サポートを含めた総額で比較することが大切です。業務用エアコンの導入は費用が大きいため、1社で決めず、複数業者から相見積もりを取り、料金・保証・サポート内容を比較して選ぶことが、失敗を防ぐうえで有効です。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">業務用エアコンの導入を検討中の方へ</p>
              <p className="text-teal-100 text-sm mb-5">
                無料の見積もりで、リース料とプラン内容の目安をご確認ください。
              </p>
              <a
                href="https://www.acn-aircon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors"
              >
                ACNエアコン公式サイトを見る
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
