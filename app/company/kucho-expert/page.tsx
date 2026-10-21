import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "空調エキスパートの口コミ・評判は？業務用エアコンの料金・対応エリアを解説【2026年10月】",
  description:
    "業務用エアコン専門サイト「空調エキスパート」の口コミの確認状況、運営移管の経緯（テクノ菱和→アトム冷熱工業）、対応エリア、リースの仕組み、メリット・デメリットを中立的に解説します。",
  alternates: { canonical: "/company/kucho-expert" },
};

const UPDATED = "2026年10月21日";

const toc = [
  { id: "summary", label: "空調エキスパートとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "口コミ・評判の確認状況" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている事業者・向いていない事業者" },
  { id: "price", label: "料金・リースの仕組み" },
  { id: "flow", label: "問い合わせから設置までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "summary-last", label: "まとめ" },
];

const faqs = [
  {
    q: "空調エキスパートは業務用エアコンの設置に対応していますか？",
    a: "空調エキスパートは業務用エアコンの販売・設計提案・設置工事を扱ってきた専門サイトですが、2026年10月21日時点の公式サイトには「現在、新規のお問合せは承っておりません」と表示されています。現在は運営元のエアコンフロンティアが提供する業務用エアコンのお役立ちサイトと案内されているため、相談先は公式サイトの案内をご確認ください。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "公式サイトでは全国対応とされています。各地域の指定工事協力店が施工を担当する体制のため、地域や時期によって対応スピードに差が出る場合があります。詳しい対応可否は、問い合わせ時にご確認ください。",
  },
  {
    q: "料金やリースの目安は？",
    a: "本体＋工事の販売に加え、初期費用を抑えられるリース契約にも対応しています。リース料は機種・台数・契約条件で変わるため、正式な金額は見積もりでご確認ください。",
  },
  {
    q: "保証はありますか？",
    a: "メーカー保証に加え、有償の延長保証を選べるとされています。リース契約に保証を組み込めるプランもあります。保証範囲や年数は契約内容で異なるため、見積もり時にご確認ください。",
  },
  {
    q: "運営会社はどこですか？",
    a: "空調エキスパートは、もともと昭和24年（1949年）創業の建築設備会社・株式会社テクノ菱和が運営していたサービスです。2025年4月にサイトがアトム冷熱工業株式会社（神奈川県横浜市・前身は1946年創業）へ譲渡され、現在は同社が運営しています。いずれも空調設備の設計・施工・保守を長く手がけてきた事業者です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "空調エキスパートの口コミ・評判は？業務用エアコンの料金・対応エリアを解説【2026年10月】",
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
          { label: "空調エキスパートの口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        {/* Eyecatch / Header */}
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-3">
            業務用エアコン業者の口コミ・評判
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            空調エキスパートの口コミ・評判は？
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
              alt="オフィスや施設に設置される業務用エアコンのイメージ"
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
            オフィスや施設の空調を入れ替える際は、専門知識のある業者から適切な提案を受けることが重要です。
            本記事では、業務用エアコンの設計提案から施工までを手がける
            <strong className="font-semibold text-slate-900">空調エキスパート</strong>
            について、口コミの確認状況、運営移管の経緯、料金やリースの仕組み、対応エリア、メリット・デメリットを、良い点・注意点の両面から中立的にまとめています。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※出典ページを確認できる利用者口コミが見つからなかったため、本記事では口コミの引用を掲載していません。料金や対応内容は時期・地域・契約条件により変わるため、最新の情報は公式サイトでご確認ください（確認日：2026年10月21日）。
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
              空調エキスパートとは
            </h2>
            <p className="leading-8 text-slate-700">
              空調エキスパートは、事務所・店舗・病院・学校・工場など、事業者向けの
              <strong className="font-semibold">業務用エアコン</strong>
              の販売・設計提案・設置工事を専門に手がけるサービスです。もともとは昭和24年（1949年）創業の建築設備会社、株式会社テクノ菱和が運営していました。テクノ菱和は病院や複合商業施設、学校といった建物の空調・衛生設備工事を手がけてきた会社です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              なお同サービスは、2025年4月にサイトがアトム冷熱工業株式会社（神奈川県横浜市・前身は1946年創業）へ譲渡され、現在の公式サイトでは「エアコンフロンティアが提供している業務用エアコンのお役立ちサイト」と案内されています。ダイキン・三菱電機・三菱重工・日立・東芝・パナソニック・日本ピーマックなど主要メーカーの機種を幅広く扱い、本体＋工事の販売だけでなく、初期費用を抑えられるリース契約にも対応しています。
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
                    ["サービス名", "空調エキスパート（業務用エアコン専門サイト）"],
                    ["運営会社", "アトム冷熱工業株式会社（前運営：株式会社テクノ菱和）"],
                    ["運営移管", "2025年4月にテクノ菱和からアトム冷熱工業へサイト譲渡"],
                    ["対応エリア", "全国（各地域の指定工事協力店が施工を担当）"],
                    ["取扱メーカー", "ダイキン／三菱電機／三菱重工／日立／東芝／パナソニック／日本ピーマック ほか"],
                    ["保証", "メーカー保証＋有償の延長保証"],
                    ["新規問い合わせ", "公式サイト上で「現在、新規のお問合せは承っておりません」と表示（2026-10-21確認）"],
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
              出典：空調エキスパート公式サイト（会社概要・お知らせ）。運営会社・受付時間等は変更される場合があります。最新情報は公式サイトでご確認ください。
            </p>
          </section>

          {/* Reviews status */}
          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              口コミ・評判の確認状況
            </h2>
            <p className="leading-8 text-slate-700">
              2026年10月21日時点で、空調エキスパートの利用者口コミとして出典ページを確認できるものは見つかりませんでした。そのため本記事では口コミの引用を掲載していません。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              公式サイトのお知らせによると、「空調EX.com」は株式会社テクノ菱和が2015年から運営してきたサイトで、2025年3月末で同社での運用を終了し、2025年4月1日にアトム冷熱工業株式会社へ譲渡されました。現在の公式サイトでは「エアコンフロンティアが提供している業務用エアコンのお役立ちサイト」と案内されており、トップページには「現在、新規のお問合せは承っておりません」と表示されています。業務用エアコンの購入・工事を相談する場合は、運営元のエアコンフロンティアの窓口や他社もあわせて比較することをおすすめします。
            </p>
            <p className="mt-3 text-xs text-slate-400">
              出典：
              <a href="https://kucho-ex.com/announce/" target="_blank" rel="nofollow noopener" className="underline">空調エキスパート公式「新規問合せ受付中止とサイト譲渡のお知らせ」</a>
              ／
              <a href="https://kucho-ex.com/" target="_blank" rel="nofollow noopener" className="underline">空調エキスパート公式サイト トップページ</a>
              （いずれも2026-10-21確認）
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

          {/* Merit / Demerit */}
          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              メリット・デメリット
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-teal-100 bg-teal-50/60 p-6">
                <h3 className="font-bold text-teal-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>旧運営（テクノ菱和）時代からの業務用エアコン選びの情報が公式サイトにまとまっている</li>
                  <li>主要メーカーを横断して機種を選べる</li>
                  <li>本体＋工事の販売に加え、初期費用を抑えられるリースにも対応している</li>
                  <li>小規模な工事から特殊な現場まで幅広く相談できる</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>施工は地域の指定工事協力店が担当するため、対応に地域差が出ることがある</li>
                  <li>出典を確認できる利用者口コミが見つからない</li>
                  <li>公式サイト上で新規問い合わせを受け付けていない旨が表示されている（2026-10-21確認）</li>
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
                  <li>機種選びから相談し、提案を受けて決めたい事業者</li>
                  <li>初期費用を抑えてリースで導入したい店舗・オフィス</li>
                  <li>病院・学校・施設など、設備工事の実績を重視したい現場</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>即日・最短での工事完了を最優先する事業者</li>
                  <li>口コミを重視して業者を選びたい事業者</li>
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
              業務用エアコンは、機種の馬力（能力）・台数・設置場所・既存機の撤去有無などで費用が大きく変わります。空調エキスパートでは、本体＋工事をまとめて購入する方法と、初期費用を抑えられる
              <strong className="font-semibold">リース契約</strong>
              の両方が案内されています。リース料は物件金額・リース期間・契約条件によって変わります。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              正確な金額は、無料の現地調査と見積もりでご確認ください。複数業者から相見積もりを取り、本体価格・工事費・保証年数・アフター対応を同じ条件で比較することをおすすめします。
            </p>
            <p className="mt-3 text-xs text-slate-400">
              ※公式サイトでは現在新規の問い合わせを受け付けていない旨が表示されています（2026-10-21確認）。最新の料金・リース条件は運営元にご確認ください。
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
                ["機種提案・現地調査・見積もり", "専門の技術者が設置環境を確認し、用途に合った機種と費用を提案します。見積もりは無料です。"],
                ["プラン・契約方法の決定", "購入かリースか、機種・保証内容を比較して決定します。"],
                ["工事日程の調整・設置工事", "地域の指定工事協力店が訪問し、設置工事を行います。"],
                ["引き渡し・アフター対応", "動作確認のうえ引き渡します。引き渡し後は保証やメンテナンスで対応します。"],
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
              空調エキスパートは、株式会社テクノ菱和が運営していた業務用エアコンの専門サイトで、2025年4月1日にアトム冷熱工業株式会社へ譲渡され、現在は「エアコンフロンティアが提供している業務用エアコンのお役立ちサイト」と案内されています。2026年10月21日時点では、出典を確認できる利用者口コミは見つからず、公式サイトには新規の問い合わせを受け付けていない旨が表示されています。相談先を検討する際は、運営元のエアコンフロンティアを含め、複数業者を比較してください。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              業務用エアコンの導入は費用が大きいため、1社で決めず、複数業者から相見積もりを取り、料金・保証・対応エリアを比較して選ぶことが、失敗を防ぐうえで有効です。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">業務用エアコンの入れ替えを検討中の方へ</p>
              <p className="text-teal-100 text-sm mb-5">
                空調エキスパートの公式サイトでは、現在新規の問い合わせを受け付けていない旨が表示されています（2026-10-21確認）。
              </p>
              <a
                href="https://kucho-ex.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors"
              >
                空調エキスパート公式サイトを見る
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
