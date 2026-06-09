import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "空調センターの口コミ・評判は？業務用エアコンの料金・対応エリアを徹底調査【2026年最新】｜空調プロナビ",
  description:
    "業務用エアコンの販売専門店「空調センター」の口コミ・評判をまとめました。最大83%OFFの価格や全国送料無料、即日緊急対応などの特徴に加え、設置工事は非対応という点も含めて中立的に解説。利用者の声と選び方の注意点を2026年最新情報で紹介します。",
  alternates: { canonical: "/company/kucho-center" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "空調センターとは" },
  { id: "company", label: "基本情報・サービス概要" },
  { id: "good", label: "良い口コミ・評判" },
  { id: "note", label: "依頼前に知っておきたい注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている事業者・向いていない事業者" },
  { id: "price", label: "料金・価格の仕組み" },
  { id: "flow", label: "注文から納品までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "summary-last", label: "まとめ" },
];

const goodReviews = [
  {
    body:
      "電話での連絡がとても迅速で丁寧でした。在庫や納期の問い合わせにもすぐ答えてもらえて安心できました。",
    who: "Yahoo!ショッピング店の購入者（★5）",
    source: "Yahoo!ショッピング 店舗評価（機器販売）",
  },
  {
    body:
      "何度かリピートで購入していますが、毎回滞りなく手続きが進み、対応に不満を感じたことがありません。",
    who: "Yahoo!ショッピング店のリピート購入者（★5）",
    source: "Yahoo!ショッピング 店舗評価（機器販売）",
  },
];

const faqs = [
  {
    q: "空調センターは設置工事もしてくれますか？",
    a: "いいえ。空調センターは業務用エアコンの本体販売に特化したサービスで、新規設置や入れ替えの工事は行っていません。本体を購入したうえで、設置は別途お近くの工事業者へ依頼する形になります。工事まで一括で任せたい場合は、販売と施工の両方に対応する業者を選ぶ必要があります。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "全国の購入に対応しており、送料無料で商品を届ける体制とされています。販売（通販）が中心のため、機器そのものは全国どこでも取り寄せやすい一方、設置工事は対象外である点に注意してください。",
  },
  {
    q: "料金の目安はどのくらいですか？",
    a: "公式では最大83%OFFといった価格訴求がされており、本体価格を抑えやすいのが特徴です。ただし価格は機種・在庫状況によって変わり、別途必要になる設置工事費は含まれません。総額は本体価格に工事費を加えて考える必要があります。",
  },
  {
    q: "急ぎで必要な場合に対応してもらえますか？",
    a: "公式では即日の緊急対応オプションが用意されているとされています。在庫状況によって変わるため、急ぐ場合は注文前に在庫と発送のタイミングを確認しておくと安心です。",
  },
  {
    q: "運営会社はどこですか？",
    a: "空調センターは業務用エアコンの販売専門店として運営されています。運営法人の詳細は公式サイトの会社概要で確認できます。購入前に運営者情報・支払い方法・返品条件などをあわせて確認しておくと安心です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "空調センターの口コミ・評判は？業務用エアコンの料金・対応エリアを徹底調査",
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
          { label: "空調センターの口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        {/* Eyecatch / Header */}
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-3">
            業務用エアコン業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            空調センターの口コミ・評判は？
            <br className="hidden md:block" />
            業務用エアコンの料金・対応エリアを徹底調査
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
            「業務用エアコンの本体だけを、できるだけ安く手に入れたい」という事業者に候補として挙がるのが
            <strong className="font-semibold text-slate-900">空調センター</strong>
            です。最大83%OFFといった価格訴求と全国送料無料が特徴の販売専門店ですが、
            <strong className="font-semibold text-slate-900">設置工事は行っていない（機器販売のみ）</strong>
            という点に大きな特徴があります。この記事では、利用者の声、料金の仕組み、向いている事業者、依頼前に知っておきたい注意点を中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、掲載サイトで公開されている内容を出典付きで引用・要約したものです。料金や在庫は時期により変わるため、最新情報は公式サイトでご確認ください（調査時点：2026年6月）。
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
              空調センターとは
            </h2>
            <p className="leading-8 text-slate-700">
              空調センターは、店舗・オフィス・施設向けの
              <strong className="font-semibold">業務用エアコンの本体販売に特化した専門店</strong>
              です。最大83%OFFといった価格訴求、全国送料無料、即日の緊急対応オプションなど、本体を安く・早く手に入れたい事業者向けのサービス設計が特徴です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              ここで重要なのは、空調センターは
              <strong className="font-semibold">新規設置・入れ替えなどの工事は行っていない</strong>
              という点です。あくまで機器の販売が中心で、設置は購入者がお近くの工事業者へ別途依頼する形になります。本体価格を抑えたい一方で工事は地元業者に任せたい、といったニーズに合うサービスといえます。
            </p>
          </section>

          {/* Company table */}
          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              基本情報・サービス概要
            </h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "空調センター（業務用エアコン販売専門店）"],
                    ["サービス区分", "本体販売のみ（新規設置・入替工事は非対応）"],
                    ["価格の特徴", "最大83%OFFの価格訴求"],
                    ["配送", "全国送料無料"],
                    ["対応エリア", "全国（販売・通販。設置工事は対象外）"],
                    ["オプション", "即日緊急対応オプションあり（在庫状況による）"],
                    ["運営会社", "公式サイトの会社概要を要確認"],
                    ["公式サイト", "https://www.tokyo-aircon.net/"],
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
              出典：空調センター公式サイト（サービス情報）。価格・在庫・取扱内容は変更される場合があります。設置工事は行っていない販売専門店です。
            </p>
          </section>

          {/* Good reviews */}
          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              良い口コミ・評判
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              公開されている口コミで多く見られたのは、
              <strong className="font-semibold">電話連絡の迅速さと丁寧さ、購入手続きのスムーズさ</strong>
              を評価する声です。在庫や納期の問い合わせにすぐ答えてもらえる点、リピートでも滞りなく取引できる点が好意的に受け止められています。
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
              ※掲載の評価はYahoo!ショッピング店での機器販売（EC）に対するものです。販売専門店のため、設置工事そのものの評価ではない点にご留意ください。
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

          {/* Note */}
          <section id="note" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              依頼前に知っておきたい注意点
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              空調センターを利用するうえで最も大切なのは、
              <strong className="font-semibold">設置工事が含まれない販売専門店である</strong>
              という前提を理解しておくことです。本体価格が安くても、設置工事を別の業者に依頼する分の費用とスケジュールが別途かかります。
            </p>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-slate-700 leading-7">
                  ・本体購入後の設置工事は、お近くの工事業者へ別途依頼が必要です。事前に施工してくれる業者と費用の見通しを立てておきましょう。
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-slate-700 leading-7">
                  ・本体だけ購入した場合、設置不良が起きてもどちらの責任か切り分けが難しくなることがあります。販売店と工事業者それぞれの保証範囲を確認しておくと安心です。
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-slate-700 leading-7">
                  ・通販での購入になるため、運営者情報・支払い方法・返品条件を注文前に確認しておきましょう。
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
                  <li>本体価格を大きく抑えられる価格訴求（最大83%OFF）</li>
                  <li>全国送料無料で、地方でも取り寄せやすい</li>
                  <li>即日の緊急対応オプションがある（在庫状況による）</li>
                  <li>電話対応が迅速・丁寧という評価が見られる</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>設置工事は非対応（本体販売のみ）で、工事は別途手配が必要</li>
                  <li>本体と工事で窓口が分かれ、保証の切り分けに注意が必要</li>
                  <li>価格は在庫状況により変動し、工事費は別途かかる</li>
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
                  <li>本体価格をとにかく安く抑えたい事業者</li>
                  <li>設置を依頼できる工事業者がすでに決まっている場合</li>
                  <li>同じ機種を急ぎで取り寄せたい場合</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>本体購入から設置工事まで一括で任せたい場合</li>
                  <li>機種選び・施工・保証を一つの窓口で完結させたい場合</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Price */}
          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              料金・価格の仕組み
            </h2>
            <p className="leading-8 text-slate-700">
              空調センターは、本体価格の安さが最大の魅力です。公式では
              <strong className="font-semibold">最大83%OFF</strong>
              といった価格訴求がされており、全国送料無料で届けられます。ただし、ここに含まれるのはあくまで
              <strong className="font-semibold">本体（機器）の価格</strong>
              で、設置工事費は含まれません。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              総額を考えるときは、本体価格に加えて、別途依頼する設置工事費・既存機の撤去費などを足して見積もるのがポイントです。「本体は販売店、工事は地元業者」という分業で安く仕上げたい場合に向いています。販売と施工を一括で頼みたい場合は、両方に対応する業者と総額で比較するとよいでしょう。
            </p>
            <p className="mt-3 text-xs text-slate-400">
              ※価格・割引率・在庫は変動します。最新の料金は公式サイトでご確認ください。工事費は本体価格に含まれません。
            </p>
          </section>

          {/* Flow */}
          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              注文から納品までの流れ
            </h2>
            <ol className="space-y-4">
              {[
                ["機種の検討・問い合わせ", "公式サイトで機種・価格を確認し、必要に応じて在庫や納期を問い合わせます。"],
                ["注文・支払い", "希望の機種を注文し、支払い方法を確定します。"],
                ["発送・納品", "全国送料無料で本体が届きます。急ぐ場合は即日対応オプションを確認します。"],
                ["設置工事の手配（別途）", "本体到着後、お近くの工事業者へ設置を依頼します。"],
                ["設置・動作確認", "工事業者による設置後、動作を確認して使用開始します。"],
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
              空調センターは、業務用エアコンの本体を安く・早く手に入れたい事業者向けの販売専門店です。最大83%OFFの価格訴求や全国送料無料、即日の緊急対応オプションが強みで、口コミでは電話対応の迅速さと購入手続きのスムーズさを評価する声が見られました。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              ただし、空調センターは設置工事を行わない販売専門店です。本体購入後の設置は別の工事業者へ依頼する必要があるため、工事費を含めた総額と保証範囲を確認したうえで判断するのが大切です。販売と施工を一括で任せたい場合は、両方に対応する業者と比較して選ぶとよいでしょう。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">業務用エアコンの本体購入を検討中の方へ</p>
              <p className="text-teal-100 text-sm mb-5">
                まずは公式サイトで機種・価格を確認し、設置工事の手配もあわせて計画しておきましょう。
              </p>
              <a
                href="https://www.tokyo-aircon.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors"
              >
                空調センター公式サイトを見る
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
