import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンコムの口コミ・評判は？業務用エアコンの料金・リース・対応エリアを徹底調査【2026年7月】｜空調プロナビ",
  description:
    "業務用エアコン専門通販「エアコンコム」（千葉の空調工事会社が運営）の特徴・料金・対応エリアをまとめました。3,000機種超の取り扱い、自社一貫施工、リース、選ぶ際の一般的な注意点まで中立的に解説します。",
  alternates: { canonical: "/company/aircon-com" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "エアコンコムとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "feature", label: "サービスの特徴" },
  { id: "notice", label: "選ぶ際の一般的な注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている事業者・向いていない事業者" },
  { id: "price", label: "料金・リースの仕組み" },
  { id: "flow", label: "問い合わせから設置までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "summary-last", label: "まとめ" },
];

const faqs = [
  {
    q: "エアコンコムは業務用エアコン専門ですか？",
    a: "はい。エアコンコムは業務用エアコンを専門に扱う通販サービスで、3,000機種を超える取り扱いをうたっています。本体販売だけでなく、自社による一貫施工に対応しているのが特徴です。",
  },
  {
    q: "工事も自社で対応してもらえますか？",
    a: "千葉県知事の管工事業許可を持つ空調工事会社が運営しており、自社一貫施工に対応するとされています。販売から施工まで同じ事業者に任せられるのが強みです。",
  },
  {
    q: "リース契約はできますか？",
    a: "はい。エアコンコムはリース契約に対応しており、リース契約数No.1を公称しています。初期費用を抑えて業務用エアコンを導入したい事業者に向いています。具体的な条件は見積もりで確認してください。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "千葉・東京を中心に展開しています。通販のため本体配送は広域に対応する一方、自社施工の範囲は地域により異なる場合があるため、設置先で対応可能かを事前に確認するのがおすすめです。",
  },
  {
    q: "運営会社はどこですか？",
    a: "「エアコンコム」は、千葉県知事の管工事業許可を持つ空調工事会社が運営する業務用エアコン専門通販です。会社概要は公式サイト（aboutusページ）で確認できます。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "エアコンコムの口コミ・評判は？業務用エアコンの料金・リース・対応エリアを徹底調査",
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
          { label: "エアコンコムの口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        {/* Eyecatch / Header */}
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-3">
            業務用エアコン業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンコムの口コミ・評判は？
            <br className="hidden md:block" />
            業務用エアコンの料金・リース・対応エリアを徹底調査
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
            業務用エアコンを通販で安く導入したいけれど、「工事まできちんと任せられるのか」が気になる方は多いはずです。
            この記事では、業務用エアコン専門通販として知られる
            <strong className="font-semibold text-slate-900">エアコンコム</strong>
            （千葉の空調工事会社が運営）について、公開されている公式情報をもとに、サービスの特徴、料金やリースの仕組み、対応エリア、そして業者選びで押さえておきたい一般的な注意点を、中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※エアコンコムは第三者の口コミが限定的なため、本記事では公式に公開されている情報と、業務用エアコンの業者を選ぶ際の一般的な注意点を中心に構成しています。料金や対応内容は時期・地域・契約条件により変わるため、最新の情報は公式サイトや見積もりでご確認ください（調査時点：2026年6月）。
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
              エアコンコムとは
            </h2>
            <p className="leading-8 text-slate-700">
              エアコンコムは、
              <strong className="font-semibold">業務用エアコンを専門に扱う通販サービス</strong>
              です。運営は、千葉県知事の管工事業許可を持つ空調工事会社。3,000機種を超える取り扱いをうたい、本体の通販だけでなく、自社による一貫施工に対応しているのが大きな特徴です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              さらに、最大84%OFFをうたう価格訴求と、リース契約数No.1を公称するリース対応も強み。「販売だけ」の通販とは異なり、施工まで自社で完結できる体制が、業務用エアコンの入れ替えを検討する事業者にとって安心材料になります。千葉・東京を中心に展開しています。
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
                    ["サービス名", "エアコンコム（業務用エアコン専門通販）"],
                    ["運営会社", "千葉の空調工事会社（管工事業 千葉県知事許可）"],
                    ["所在地・拠点", "千葉・東京を中心に展開"],
                    ["事業内容", "業務用エアコンの専門通販＋自社一貫施工"],
                    ["取扱機種", "3,000機種超"],
                    ["価格訴求", "最大84%OFF"],
                    ["リース", "対応（リース契約数No.1を公称）"],
                    ["会社概要", "https://www.airizm.com/aboutus/"],
                    ["公式サイト", "https://www.airizm.com/"],
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
              出典：エアコンコム公式サイト（会社概要）。所在地・対応エリア等は変更される場合があります。
            </p>
          </section>

          {/* Feature */}
          <section id="feature" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              サービスの特徴
            </h2>
            <div className="grid gap-4">
              {[
                ["業務用エアコン専門の品揃え", "3,000機種を超える取り扱いをうたい、能力・設置形態に合わせて幅広く選べます。専門に特化しているため、業務用ならではの相談がしやすい体制です。"],
                ["自社一貫施工", "千葉県知事の管工事業許可を持つ空調工事会社が運営し、販売から施工まで自社で対応するとされています。窓口が分かれず、責任の所在が明確になりやすいのが利点です。"],
                ["リース対応（契約数No.1公称）", "初期費用を抑えられるリースに対応。リース契約数No.1を公称しており、導入時のコスト負担を軽くしたい事業者に向いています。"],
                ["価格訴求", "最大84%OFFをうたう価格設定で、本体コストを抑えたい事業者の選択肢になります。"],
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
              alt="天井に設置された業務用エアコンと整ったオフィス空間"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          {/* Notice (general selection tips, no fabricated reviews) */}
          <section id="notice" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              選ぶ際の一般的な注意点
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              エアコンコムは公式に取引後アンケートを多く掲載している一方、第三者の口コミは限定的です。ここでは
              <strong className="font-semibold">業務用エアコンの通販・工事業者を選ぶ際に一般的に押さえておきたいポイント</strong>
              をまとめます。特定の業者への評価ではなく、業務用エアコンを検討する際に共通する確認事項です。
            </p>
            <div className="grid gap-4">
              {[
                ["自社施工の対応エリアを確認する", "通販は本体配送が広域でも、自社施工の範囲は地域により異なる場合があります。設置先で施工に対応できるかを事前に確認しましょう。"],
                ["本体＋工事費の総額で比較する", "本体価格の安さだけでなく、設置工事費・既存機の撤去費まで含めた総額で比べるのが基本です。"],
                ["リース条件を細かく確認する", "リースは月額だけでなく、契約年数・中途解約・満了後の扱いまで確認しておくと、後から想定外になりにくくなります。"],
                ["保証・アフターの範囲を確認する", "保証年数や故障時の対応窓口、定期点検の有無を見積もり時に確認しておくと安心です。"],
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
                  <li>業務用専門で3,000機種超から選べる</li>
                  <li>販売から施工まで自社一貫で対応</li>
                  <li>リースに対応し、初期費用を抑えやすい</li>
                  <li>最大84%OFF訴求で本体コストを抑えられる</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>千葉・東京中心のため、遠方は施工対応の確認が必要</li>
                  <li>第三者の口コミが少なく、見積もりで実態を確認したい</li>
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
                  <li>千葉・東京エリアで業務用エアコンを導入したい事業者</li>
                  <li>販売から施工まで同じ業者にまとめたい事業者</li>
                  <li>リースで初期費用を抑えて導入したい店舗・オフィス</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>対応エリア外（遠方）で自社施工を希望する事業者</li>
                  <li>多数の第三者口コミを見てから決めたい事業者</li>
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
              業務用エアコンは、機種の馬力（能力）・台数・設置場所・既存機の撤去有無などで費用が大きく変わります。エアコンコムは、本体＋工事をまとめて依頼できる
              <strong className="font-semibold">自社一貫施工</strong>
              に対応し、初期費用を抑えられるリース契約も選べます。最大84%OFFをうたう価格訴求が特徴ですが、これは条件次第の参考値です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              正確な金額は、設置場所の条件を伝えたうえで、本体価格・工事費・リース条件・保証を含めた見積もりで把握するのが確実です。複数業者から相見積もりを取り、横並びで比較するのがおすすめです。
            </p>
            <p className="mt-3 text-xs text-slate-400">
              ※価格・リース条件は機種・台数・契約条件によって変わります。最新の情報は公式サイトや見積もりでご確認ください。
            </p>
          </section>

          {/* Flow */}
          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              問い合わせから設置までの流れ
            </h2>
            <ol className="space-y-4">
              {[
                ["問い合わせ・相談", "Webや電話で相談。設置場所や希望機種、台数、リース希望の有無などを伝えます。"],
                ["機種選び・見積もり", "業務用専門の品揃えから機種を選び、本体＋工事費の見積もりを確認します。"],
                ["プラン・契約方法の決定", "購入かリースか、機種・保証内容を比較して決定します。"],
                ["工事日程の調整・自社施工", "自社施工で設置工事を行います（対応エリアは事前確認）。"],
                ["引き渡し・アフター対応", "動作確認のうえ引き渡し。保証やアフターの内容を確認しておきましょう。"],
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
              エアコンコムは、千葉の空調工事会社が運営する業務用エアコン専門通販で、3,000機種超の品揃え、販売から施工まで完結する自社一貫施工、リース対応（契約数No.1公称）が強みです。最大84%OFFをうたう価格訴求と合わせ、千葉・東京エリアで業務用エアコンの入れ替えを検討する事業者にとって有力な選択肢といえます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              第三者の口コミが限定的なため、最終的には見積もりで内容を確かめるのが安心です。自社施工の対応エリア、本体＋工事費の総額、リース条件、保証・アフターを確認し、複数業者と比較して判断するのが失敗を防ぐコツです。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">業務用エアコンの入れ替えを検討中の方へ</p>
              <p className="text-teal-100 text-sm mb-5">
                まずは公式サイトで機種・リース内容を確認し、見積もりで費用の目安をつかみましょう。
              </p>
              <a
                href="https://www.airizm.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors"
              >
                エアコンコム 公式サイトを見る
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
