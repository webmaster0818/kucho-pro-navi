import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "EMEAO!（エミーオ）の口コミ・評判は？業務用エアコンの一括見積もりの仕組みを解説【2026年10月】",
  description:
    "業者マッチングサービス「EMEAO!（エミーオ）」の口コミ・評判をまとめています。業務用エアコンの一括見積もり（相見積もり）の仕組み、コンシェルジュ対応、料金、メリット・デメリット、向いている事業者まで中立的に解説します。",
  alternates: { canonical: "/company/emeao" },
};

const UPDATED = "2026年10月19日";

const toc = [
  { id: "summary", label: "EMEAO!とは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "良い口コミ・評判" },
  { id: "bad", label: "注意点（公式サイトの説明から）" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている事業者・向いていない事業者" },
  { id: "price", label: "料金・利用の仕組み" },
  { id: "flow", label: "問い合わせから業者選定までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "summary-last", label: "まとめ" },
];

const goodReviews = [
  {
    body:
      "実際、10分後には1社目から連絡をいただき、3日後には発注先を確定することができました。",
    who: "スキャンマン株式会社 代表取締役社長 杉本 勝男様（出張スキャニング事業）",
    source: "EMEAO! 公式サイト「ご利用者様の声」",
  },
  {
    body:
      "EMEAO!はコンシェルジュに事情を電話で相談するだけで済むので、余計な手間が省けて大変助かりました。紹介された業者はどこもとても親切で正直迷いましたが、最終的に１社に決めました。",
    who: "株式会社TSO 代表取締役社長 中屋 仁志様（リサイクル業）",
    source: "EMEAO! 公式サイト「ご利用者様の声」",
  },
  {
    body:
      "ご紹介いただいた企業からの提案を比較して発注し、なんと月々のランニングコストを30％も削減することができました。",
    who: "株式会社レティクル 代表取締役社長 松木 徹雄様（映像制作）",
    source: "EMEAO! 公式サイト「ご利用者様の声」",
  },
];

const faqs = [
  {
    q: "EMEAO!とはどんなサービスですか？",
    a: "EMEAO!（エミーオ）は、業務用エアコンをはじめとするBtoBサービスの発注先を探せる業者マッチングサービスです。専任のコンシェルジュに条件を伝えると、審査を通過した業者の中から条件に合う業者（最大8社程度）の紹介を無料で受けられます。",
  },
  {
    q: "利用に料金はかかりますか？",
    a: "発注側（依頼する事業者）の利用は無料です。サービスは登録業者からの掲載料・送客料で運営されているため、見積もりを取る側に費用は発生しません。実際の工事費用は契約する業者との取り決めになります。",
  },
  {
    q: "業者とのやり取りはどうなりますか？",
    a: "最初のヒアリングはコンシェルジュが対応しますが、その後の各業者との連絡・交渉・お断りの連絡は、基本的に発注者自身で行う必要があります。条件に合う複数社へ連絡が届く仕組みのため、複数社から営業の電話が入る点はあらかじめご確認ください。",
  },
  {
    q: "EMEAO!自体が工事をするのですか？",
    a: "いいえ。EMEAO!は業者を紹介するマッチングサービスで、自社で施工は行いません。実際の業務用エアコンの設置・工事は、紹介された各業者が担当します。保証やアフター対応も契約する業者によって異なります。",
  },
  {
    q: "運営会社はどこですか？",
    a: "EMEAO!は、東京に拠点を置く株式会社eclore（エクロール）が運営しています。設立から10年以上の実績があり、業者マッチングサイトの運営やWebマーケティング事業を手がけています。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "EMEAO!（エミーオ）の口コミ・評判は？業務用エアコンの一括見積もりの仕組みを解説【2026年10月】",
  datePublished: "2026-06-10",
  dateModified: "2026-10-19",
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
          { label: "EMEAO!の口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        {/* Eyecatch / Header */}
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-3">
            業者マッチングサービスの口コミ・評判
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            EMEAO!（エミーオ）の口コミ・評判は？
            <br className="hidden md:block" />
            業務用エアコンの一括見積もりの仕組みを解説
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>空調プロナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-10-19">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image
              src="/images/hero-a.png"
              alt="複数の業者を比較して業務用エアコンを選ぶイメージ"
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
            業務用エアコンの入れ替えで「どの業者に頼めば適正価格なのか」を見極めるには、複数社からの相見積もりが欠かせません。
            本記事では、業者マッチング（一括見積もり）サービスの
            <strong className="font-semibold text-slate-900">EMEAO!（エミーオ）</strong>
            （運営：株式会社eclore）について、公式サイトに掲載された利用者の声、料金や仕組み、メリット・デメリットを、良い点・注意点の両面から中立的にまとめています。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、EMEAO!の公式サイト「ご利用者様の声」に掲載されているものを原文のまま引用しています（運営会社が掲載している声で、業務用エアコンの事例ではありません）。EMEAO!は業者を紹介するマッチングサービスで、実際の工事は紹介先の業者が行います。条件は公式サイトでご確認ください（2026年10月19日確認）。
          </p>
        </div>


        {/* 結論即答 */}
        <div className="max-w-3xl mx-auto px-5 pt-8">
          <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-6">
            <p className="font-bold text-teal-800 mb-2">EMEAO!（エミーオ）の評判の要点</p>
            <p className="text-[0.95rem] leading-7 text-slate-700">
              EMEAO!は<strong className="font-semibold">コンシェルジュ型の業者マッチング（一括見積もり）サービス</strong>（運営：株式会社eclore）です。公式サイトの利用者の声は業者探しの時間短縮・紹介スピードを評価する内容です。一方、<strong className="font-semibold">紹介は最大8社で、紹介後は各社から直接連絡が来て、打ち合わせ・見積もりのやり取りは発注者自身で行う</strong>仕組みです（公式）。あらかじめご確認ください。詳しくは<a href="#good" className="text-teal-700 underline underline-offset-4">実際の口コミ</a>と<a href="#price" className="text-teal-700 underline underline-offset-4">料金の仕組み</a>をご覧ください。
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
              EMEAO!とは
            </h2>
            <p className="leading-8 text-slate-700">
              EMEAO!（エミーオ）は、業務用エアコンをはじめとするBtoBサービスの発注先を探せる
              <strong className="font-semibold">業者マッチング（一括見積もり）サービス</strong>
              です。利用者が条件を伝えると、専任のコンシェルジュが審査を通過した登録業者の中から、条件に合う業者を無料で紹介します。清掃・防犯カメラ・消毒除菌など幅広い分野を扱っており、業務用エアコンの設置・入れ替えも対象です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              1社ずつ業者を探す必要がなく、複数社（最大8社程度）の見積もりをまとめて集められる点が最大の特徴です。価格・品質・対応を同じ条件で比較したうえで、発注先を選ぶことができます。
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
                    ["サービス名", "EMEAO!（エミーオ）"],
                    ["サービス種別", "業者マッチング・一括見積もりサービス（BtoB）"],
                    ["運営会社", "株式会社eclore（エクロール）"],
                    ["所在地", "東京都"],
                    ["対応エリア", "全国（紹介される業者の対応範囲による）"],
                    ["紹介社数", "条件に合う最大8社程度"],
                    ["利用料金", "発注側は無料"],
                    ["特徴", "専任コンシェルジュが業者選びをサポート／登録業者は事前審査あり"],
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
              出典：EMEAO!公式サイト（運営会社情報）。掲載社数・運営体制等は変更される場合があります。
            </p>
          </section>

          {/* Good reviews */}
          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              良い口コミ・評判
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              EMEAO!の公式サイトには、利用した企業の声が社名・役職とともに掲載されています。内容は
              <strong className="font-semibold">業者探しの手間が省けた点、連絡の早さ、相見積もりによるコスト削減</strong>
              を評価するものです。3件を原文のまま引用します。
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
              ※運営会社が自社サイトに掲載している声で、第三者の口コミサイトの評価ではありません。業務用エアコンでの利用事例ではない点にご注意ください。出典（掲載サイト）を特定できる第三者の口コミは、当サイトの調査では確認できなかったため掲載していません。
            </p>
          </section>

          {/* Mid image */}
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image
              src="/images/hero-b.png"
              alt="複数業者の見積もりを比較するイメージ"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          {/* Bad reviews */}
          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              注意点（公式サイトの説明から）
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              出典を特定できる否定的な口コミは確認できなかったため、ここでは公式サイトに書かれている仕組みから、利用前に知っておきたい点をまとめます。
            </p>
            <ul className="space-y-3 text-slate-700 text-[0.95rem] leading-7 list-disc pl-6">
              <li>紹介される業者は最大8社。ヒアリングの後は、紹介された各業者から直接連絡が来る（最短5分・ほとんどの場合は当日中、翌日以降になる場合もある）</li>
              <li>紹介後の打ち合わせ・見積もりのやり取りは、発注者が各業者と直接行う</li>
              <li>電話受付は平日9:00〜18:00</li>
              <li>利用者の費用は無料で、EMEAO!は掲載業者からの紹介手数料で運営されている</li>
              <li>問い合わせても契約する必要はなく、不安が残る場合は見送ってよいとされている</li>
            </ul>
            <p className="mt-4 text-xs text-slate-400">
              出典：
              <a href="https://emeao.jp/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">EMEAO! 公式サイト</a>
              ・
              <a href="https://emeao.jp/faq/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">よくある質問</a>
              （2026年10月19日確認）。
            </p>
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
                  <li>1回の相談で複数社の相見積もりを集められる</li>
                  <li>コンシェルジュによる条件整理・業者選びのサポートを受けられる</li>
                  <li>登録業者には事前審査がある</li>
                  <li>発注側の利用は無料</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>複数社から営業の連絡が来るため、対応の手間がかかる</li>
                  <li>各業者との交渉・お断りは発注者自身で行う必要がある</li>
                  <li>施工は紹介先の業者が担当する（品質・保証は業者ごとに異なる）</li>
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
                  <li>複数社を比較して適正価格で発注したい事業者</li>
                  <li>業者を探す時間や手間を減らしたい担当者</li>
                  <li>各社とのやり取りを自社で対応できる事業者</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>依頼先を最初から1社に決めている事業者</li>
                  <li>複数社からの営業連絡を避けたい事業者</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Price */}
          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              料金・利用の仕組み
            </h2>
            <p className="leading-8 text-slate-700">
              EMEAO!は、発注側（依頼する事業者）の
              <strong className="font-semibold">利用料が無料</strong>
              です。サービスは登録業者からの掲載料・送客料で運営されているため、見積もりを取る側に費用は発生しません。実際の業務用エアコンの本体価格や工事費は、紹介された各業者との契約で決まります。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              業務用エアコンは機種の馬力・台数・設置場所などで費用が大きく変わります。EMEAO!で集めた複数社の見積もりを、本体価格・工事費・保証年数・アフター対応の観点で比較することで、適正価格を判断しやすくなります。
            </p>
            <p className="mt-3 text-xs text-slate-400">
              ※工事費用や保証内容は契約する業者によって異なります。見積もり時に各社の条件を必ずご確認ください。
            </p>
          </section>

          {/* Flow */}
          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              問い合わせから業者選定までの流れ
            </h2>
            <ol className="space-y-4">
              {[
                ["問い合わせ・相談", "Webフォームや電話から、業務用エアコンの設置・入れ替え条件を伝えます。"],
                ["コンシェルジュのヒアリング", "専任コンシェルジュが予算感・台数・設置場所・希望時期などを整理します。"],
                ["業者の紹介", "条件に合う登録業者（最大8社程度）が紹介され、各社から見積もり・連絡が届きます。"],
                ["相見積もりの比較・交渉", "本体価格・工事費・保証・対応を比較し、各業者と直接やり取りします。"],
                ["発注先の決定・契約", "比較のうえ1社を選んで契約します。設置工事は契約した業者が担当します。"],
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
              EMEAO!は、株式会社ecloreが運営する業者マッチング（一括見積もり）サービスで、コンシェルジュのサポートを受けながら複数社の相見積もりをまとめて集められること、発注側は無料で使えることが強みです。口コミでは対応の丁寧さと紹介の速さを評価する声が目立ちます。一方で、複数社から営業連絡が来る点や、各社とのやり取りは発注者自身で進める必要がある点にご留意ください。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              業務用エアコンの導入は費用が大きいため、EMEAO!のようなサービスで集めた複数社の見積もりを、料金・保証・対応エリアで比較して選ぶことが、失敗を防ぐうえで有効です。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">業務用エアコンの相見積もりを取りたい方へ</p>
              <p className="text-teal-100 text-sm mb-5">
                無料の一括見積もりで、複数社の料金とプランを比較することをおすすめします。
              </p>
              <a
                href="https://emeao.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors"
              >
                EMEAO! 公式サイトを見る
              </a>
            </div>
          </section>

          {/* Related */}
          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/ranking", label: "業務用エアコン業者ランキング" },
                { href: "/ranking/cheap", label: "費用を抑えて選ぶ業務用エアコン" },
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
