import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エコトピアの口コミ・評判は？中古エアコンの販売・買取・料金を徹底調査【2026年7月】｜空調プロナビ",
  description:
    "新品・中古エアコンの販売／買取で知られる「エコトピア」（運営：株式会社エコトピア）の特徴・料金・対応エリアをまとめました。関東最大級のショールーム、買取の仕組み、選ぶ際の一般的な注意点まで中立的に解説します。",
  alternates: { canonical: "/company/eco-topia" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "エコトピアとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "feature", label: "サービスの特徴" },
  { id: "notice", label: "中古・買取で利用する際の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "price", label: "料金・買取の仕組み" },
  { id: "flow", label: "問い合わせから設置・買取までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "summary-last", label: "まとめ" },
];

const faqs = [
  {
    q: "エコトピアは中古エアコンを扱っていますか？",
    a: "はい。新品に加えて中古エアコンの販売も手がけており、関東最大級とされるショールームに常時約4,000台を展示しています。新品は最大80%OFFをうたう低価格訴求が特徴です。",
  },
  {
    q: "エアコンの買取もしてもらえますか？",
    a: "はい。エコトピアは販売だけでなく買取にも対応しています。入れ替えで不要になった機器をまとめて相談できるのが、販売・買取ワンストップの強みです。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "埼玉県越谷市に拠点を置き、埼玉・東京を中心に展開しています。設置・点検・保守までワンストップで対応するとされていますが、対応範囲は地域や内容により異なるため、事前の確認がおすすめです。",
  },
  {
    q: "設置や保守も依頼できますか？",
    a: "はい。販売・買取に加えて、設置・点検・保守までワンストップで対応するとされています。具体的な対応範囲や費用は、見積もり時に確認してください。",
  },
  {
    q: "運営会社はどこですか？",
    a: "「エコトピア」は、1996年設立の株式会社エコトピア（埼玉県越谷市・代表 野見山哲二）が運営しています。新品・中古エアコンの販売／買取を長年手がけている事業者です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "エコトピアの口コミ・評判は？中古エアコンの販売・買取・料金を徹底調査",
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumb
        items={[
          { label: "ランキング", href: "/ranking/" },
          { label: "エコトピアの口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        {/* Eyecatch / Header */}
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-3">
            エアコン販売・買取 業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エコトピアの口コミ・評判は？
            <br className="hidden md:block" />
            中古エアコンの販売・買取・料金を徹底調査
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
              alt="ショールームに並ぶエアコンのイメージ"
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
            「新品は高いけれど、中古なら手頃に導入できるのでは」「入れ替えで出る古い機器も一緒に引き取ってほしい」——そんなニーズに応えるのが、新品・中古エアコンの販売／買取を手がける
            <strong className="font-semibold text-slate-900">エコトピア</strong>
            （運営：株式会社エコトピア）です。この記事では、公開されている公式情報をもとに、サービスの特徴、料金や買取の仕組み、対応エリア、そして中古・買取を利用する際に押さえておきたい一般的な注意点を、中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※エコトピアは第三者の口コミが限定的なため、本記事では公式に公開されている情報と、中古・買取サービスを選ぶ際の一般的な注意点を中心に構成しています。料金や対応内容は時期・地域・在庫状況により変わるため、最新の情報は公式サイトや見積もりでご確認ください（調査時点：2026年6月）。
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
              エコトピアとは
            </h2>
            <p className="leading-8 text-slate-700">
              エコトピアは、
              <strong className="font-semibold">新品・中古エアコンの販売と買取</strong>
              を軸に、設置・点検・保守までをワンストップで手がける事業者です。運営は、1996年設立の株式会社エコトピア（埼玉県越谷市・代表 野見山哲二）。埼玉・東京を中心に展開し、関東最大級とされるショールームに常時約4,000台を展示しているのが大きな特徴です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              新品は最大80%OFFをうたう低価格訴求に加え、中古の取り扱いと買取にも対応。入れ替え時に「新しい機器の購入」と「古い機器の買取」をまとめて相談できる点が、他社にはない独自性といえます。
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
                    ["サービス名", "エコトピア（新品・中古エアコン販売／買取）"],
                    ["運営会社", "株式会社エコトピア"],
                    ["代表", "野見山 哲二"],
                    ["設立", "1996年"],
                    ["所在地", "埼玉県越谷市"],
                    ["対応エリア", "埼玉・東京を中心に展開"],
                    ["事業内容", "新品・中古エアコンの販売／買取＋設置・点検・保守"],
                    ["特徴", "関東最大級のショールーム（常時約4,000台展示）／新品最大80%OFF"],
                    ["公式サイト", "https://www.eco-topia.co.jp/"],
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
              出典：エコトピア公式サイト（会社情報）。所在地・対応エリア等は変更される場合があります。
            </p>
          </section>

          {/* Feature */}
          <section id="feature" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              サービスの特徴
            </h2>
            <div className="grid gap-4">
              {[
                ["関東最大級のショールーム", "常時約4,000台を展示。実機を見て比較しながら選べるため、写真や型番だけでは判断しづらい中古機器も納得して選びやすい環境です。"],
                ["新品・中古の両方を扱う", "予算や用途に応じて、新品（最大80%OFF訴求）と中古を選べます。コストを抑えたい場合の選択肢が広いのが強みです。"],
                ["買取にも対応", "入れ替えで不要になった機器の買取に対応。購入と買取をまとめて相談でき、処分の手間とコストを抑えやすくなります。"],
                ["販売〜保守までワンストップ", "販売・買取だけでなく、設置・点検・保守まで一貫して対応するとされており、導入後のサポートまで見据えて相談できます。"],
              ].map(([t, d], i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="font-bold text-slate-800 mb-2">{t}</h3>
                  <p className="text-slate-600 text-[0.95rem] leading-7">{d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mid image */}
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image
              src="/images/hero-b.png"
              alt="設置されたエアコンと整った室内空間"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          {/* Notice (general selection tips, no fabricated reviews) */}
          <section id="notice" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              中古・買取で利用する際の注意点
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              エコトピアは第三者の口コミが限定的なため、ここでは
              <strong className="font-semibold">中古・買取サービスを選ぶ際に一般的に押さえておきたいポイント</strong>
              をまとめます。これは特定の業者への評価ではなく、中古エアコンを扱うサービス全般に共通する確認事項です。
            </p>
            <div className="grid gap-4">
              {[
                ["中古機器の状態・保証を確認する", "中古は機種ごとに使用年数や状態が異なります。動作確認の有無、保証の範囲・期間を事前に確認しておくと安心です。"],
                ["設置費・撤去費まで含めて見積もる", "本体価格だけでなく、設置工事費や既存機の撤去費まで含めた総額で比較しましょう。"],
                ["買取は事前査定と条件を確認する", "買取価格は機種・年式・状態で変わります。査定方法や引き取り条件を見積もり時に確認しておきましょう。"],
                ["対応エリア・納期を確認する", "埼玉・東京中心の展開のため、設置先が対応エリア内か、希望時期に間に合うかを事前に確認しておくと安心です。"],
              ].map(([t, d], i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-800 mb-2">{t}</h3>
                  <p className="text-slate-600 text-[0.95rem] leading-7">{d}</p>
                </div>
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
                  <li>新品・中古の両方から予算に合わせて選べる</li>
                  <li>関東最大級のショールームで実機を見て比較できる</li>
                  <li>購入と買取をまとめて相談できる</li>
                  <li>設置・点検・保守までワンストップで対応</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>埼玉・東京中心のため、遠方は対応エリアの確認が必要</li>
                  <li>中古は機種ごとに状態・保証が異なるため事前確認が必要</li>
                  <li>第三者の口コミが少なく、見積もりで実態を確認したい</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Fit */}
          <section id="fit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              向いている人・向いていない人
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いている人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>中古も含めてコストを抑えて導入したい人</li>
                  <li>実機を見て選びたい・埼玉や東京が拠点の人</li>
                  <li>購入と同時に古い機器の買取も相談したい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>対応エリア外（遠方）で設置を急ぐ人</li>
                  <li>新品のみ・長期保証を最優先したい人</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Price */}
          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              料金・買取の仕組み
            </h2>
            <p className="leading-8 text-slate-700">
              エコトピアは、新品（最大80%OFF訴求）と中古を選べるため、
              <strong className="font-semibold">予算に応じて初期費用を調整しやすい</strong>
              のが特徴です。中古は機種・年式・状態によって価格が変わるため、本体価格に加えて設置工事費や既存機の撤去費まで含めた総額で考えるのがポイントです。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              買取は、機種・年式・状態によって査定額が変わります。入れ替えの場合は「購入額」と「買取額」を合わせて実質負担を試算すると、コスト感を把握しやすくなります。正確な金額は見積もり・査定で確認するのが確実です。
            </p>
            <p className="mt-3 text-xs text-slate-400">
              ※料金・買取条件は機種や状態、時期によって変わります。最新の情報は公式サイトや見積もりでご確認ください。
            </p>
          </section>

          {/* Flow */}
          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              問い合わせから設置・買取までの流れ
            </h2>
            <ol className="space-y-4">
              {[
                ["問い合わせ・相談", "Webや電話で相談。新品か中古か、買取の有無、設置場所などを伝えます。"],
                ["ショールーム見学・機種選び", "実機を見ながら機種を比較。中古は状態や保証も確認しておきましょう。"],
                ["見積もり・査定", "本体＋工事費の見積もりと、買取がある場合は査定を確認します。"],
                ["契約・設置工事", "内容を確認して契約。設置工事を行います。"],
                ["引き渡し・買取・保守", "動作確認のうえ引き渡し。買取機器の引き取りや、点検・保守の相談も可能です。"],
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
              エコトピアは、株式会社エコトピアが運営する新品・中古エアコンの販売／買取サービスです。関東最大級のショールームで実機を見て選べること、新品・中古の両方から予算に合わせて選べること、購入と買取をまとめて相談できることが強みです。埼玉・東京を中心に、設置・点検・保守までワンストップで対応するとされています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              中古や買取を利用する際は、機器の状態・保証、設置費・撤去費、対応エリアを事前に確認するのが安心です。第三者の口コミが限定的なため、最終的には見積もり・査定で内容を確かめ、他社とも比較して判断するのがおすすめです。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">中古・買取も含めて検討したい方へ</p>
              <p className="text-teal-100 text-sm mb-5">
                まずは公式サイトで在庫やサービス内容を確認し、見積もり・査定で費用感をつかみましょう。
              </p>
              <a
                href="https://www.eco-topia.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors"
              >
                エコトピア 公式サイトを見る
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
