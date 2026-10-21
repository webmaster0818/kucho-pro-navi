import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコン総本舗の口コミ・評判は？業務用エアコンの料金・対応エリアを解説【2026年10月】",
  description:
    "業務用エアコン専門店「エアコン総本舗」（運営：株式会社フジテック）の口コミ・評判をまとめました。実際の利用者の声、料金、対応エリア、メリット・デメリット、向いている事業者まで、評価されている点と注意点の両面から中立的に解説します。",
  alternates: { canonical: "/company/aircon-sohonpo" },
};

const UPDATED = "2026年10月21日";

const toc = [
  { id: "summary", label: "エアコン総本舗とは" },
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

const goodReviews: { body: string; who: string; rating?: string; source: string; url?: string }[] = [
  {
    body:
      "こちらの聞きたい事に対しても的確なアドバイスをしてもらえ安心できましたし、購入をするとスピーディーに設置工事もしてもらえたので、とても助かりました。",
    who: "広島県・40代男性",
    rating: "とても満足",
    source: "コピー機Gメン（業務用エアコン）「エアコン総本舗の業務用エアコンは安い？評判・口コミから分かる実力」（2026-10-21確認）",
    url: "https://www.copyki-gmen.com/aircon/aircon-sohompo",
  },
  {
    body:
      "安くて取り付けもスムーズで丁寧に対応してもらいました。取り付けも2週間ほどで工事も早かったので満足しました。",
    who: "30代女性",
    rating: "やや満足",
    source: "コピー機Gメン（業務用エアコン）「エアコン総本舗の業務用エアコンは安い？評判・口コミから分かる実力」（2026-10-21確認）",
    url: "https://www.copyki-gmen.com/aircon/aircon-sohompo",
  },
  {
    body:
      "大手が経営しているのでエアコン総本舗を選んだ。購入も施工も依頼し、比較した他店よりも安価に取り付けていただいた。アフターサービスも豊富。担当者が決まっているので、壊れた時もいつも同じ人が来てくれてありがたい。",
    who: "利用者（属性の記載なし）",
    rating: "やや満足",
    source: "コピー機Gメン（業務用エアコン）「エアコン総本舗の業務用エアコンは安い？評判・口コミから分かる実力」（2026-10-21確認）",
    url: "https://www.copyki-gmen.com/aircon/aircon-sohompo",
  },
  {
    body:
      "お見積りから工事まで迅速に行っていただき大変助かりました。ありがちな工事の日に追加料金を支払うということもなく、お見積り通りのご請求でした。施工も細かい希望を聞いていただきながらとても丁寧に設置していただき、またお願いしたいと思います。",
    who: "Googleマップの口コミ（同記事内で引用）",
    source: "コピー機Gメン（業務用エアコン）「エアコン総本舗の業務用エアコンは安い？評判・口コミから分かる実力」（2026-10-21確認）",
    url: "https://www.copyki-gmen.com/aircon/aircon-sohompo",
  },
  {
    body:
      "商品の品質とサービスに満足しています。スタッフの対応が親切で、商品の性能も期待通り。購入後のアフターサポートも信頼性がありました。",
    who: "東京都・20代女性",
    rating: "やや満足",
    source: "コピー機Gメン（業務用エアコン）「エアコン総本舗の業務用エアコンは安い？評判・口コミから分かる実力」（2026-10-21確認）",
    url: "https://www.copyki-gmen.com/aircon/aircon-sohompo",
  },
];

const faqs = [
  {
    q: "エアコン総本舗は業務用エアコンの設置に対応していますか？",
    a: "はい。エアコン総本舗は2004年創業の空調専門店で、業務用エアコン・ハウジングエアコンを中心に、販売から設置・入替工事までワンストップで対応しています。年間6,000件以上、累計63,000件超の施工実績があります。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "公式サイトでは、東京・神奈川・埼玉・千葉・群馬・静岡・山梨など首都圏を中心とした関東圏が工事エリアとされています。エリアは随時拡大中で、エリア外でも対応可能な場合があるため、問い合わせ時にご確認ください。",
  },
  {
    q: "料金やリースの目安は？",
    a: "公式サイトの掲載価格は商品のみの価格で、工事費は無料の現地調査のうえで見積もりとして提示されます。写真を送るだけの「クイック見積もり」で概算を確認することもできます。リース契約にも対応していますが、機種・台数・契約条件で変わるため、無料見積もりでご確認ください。",
  },
  {
    q: "保証はありますか？",
    a: "メーカー保証（1年）に加え、施工後1年間の工事保証があります。さらに有償の10年延長保証オプションも用意されています。保証範囲は契約内容で異なるため、見積もり時にご確認ください。",
  },
  {
    q: "運営会社はどこですか？",
    a: "エアコン総本舗は、東京都品川区に本社を置く株式会社フジテック（2004年設立）が運営する業務用エアコンの専門店です。首都圏に複数の実店舗を構え、ネット完結型でありながら現地調査や自社の工事体制を重視しています。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "エアコン総本舗の口コミ・評判は？業務用エアコンの料金・対応エリアを解説【2026年10月】",
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
          { label: "エアコン総本舗の口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        {/* Eyecatch / Header */}
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-3">
            業務用エアコン業者の口コミ・評判
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコン総本舗の口コミ・評判は？
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
            業務用エアコンの入れ替えでは、費用の抑制と工事品質の確保を両立させることが重要です。
            本記事では、業務用エアコンの販売・設置を手がける
            <strong className="font-semibold text-slate-900">エアコン総本舗</strong>
            （運営：株式会社フジテック）について、実際に公開されている利用者の口コミ、料金、対応エリア、メリット・デメリットを、評価されている点と注意点の両面から中立的にまとめています。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、各掲載サイトで公開されている内容を、出典ページを明記したうえで原文のまま引用したものです。料金や対応内容は時期・地域・契約条件により変わるため、最新の情報は公式サイトや無料見積もりでご確認ください（口コミの出典確認日：2026年10月21日）。
          </p>
        </div>


        {/* 要点 */}
        <div className="max-w-3xl mx-auto px-5 pt-8">
          <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-6">
            <p className="font-bold text-teal-800 mb-2">エアコン総本舗の評判の要点</p>
            <p className="text-[0.95rem] leading-7 text-slate-700">
              エアコン総本舗は、業務用エアコンの販売から設置工事までを手がける業者（運営：株式会社フジテック）です。第三者サイトに掲載された口コミでは<strong className="font-semibold">他店比較での安さ・見積もりと請求のズレのなさ・対応の丁寧さ</strong>を評価する声が中心です。「最悪」といった語句で検索されることもありますが、本記事では評価されている点と注意点の両方を、出典を明記して掲載しています。詳しくは<a href="#good" className="text-teal-700 underline underline-offset-4">実際の口コミ</a>と<a href="#price" className="text-teal-700 underline underline-offset-4">料金</a>をご覧ください。
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
              エアコン総本舗とは
            </h2>
            <p className="leading-8 text-slate-700">
              エアコン総本舗は、飲食店・オフィス・クリニック・店舗など、事業者向けの
              <strong className="font-semibold">業務用エアコン</strong>
              の販売と設置・入替工事をワンストップで手がける専門店です。運営は、東京都品川区に本社を構える株式会社フジテックです。2004年の創業以来、首都圏を中心に数多くの業務用・ハウジングエアコンの工事を手がけ、年間6,000件以上、累計63,000件を超える施工実績を積み重ねています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              ダイキン・パナソニック・三菱電機・三菱重工・日立・東芝（日本キヤリア）など主要メーカーの機種を幅広く扱い、市場調査と格安仕入れによる価格設定を掲げているのが特徴です。ネット完結型でありながら、首都圏に複数の実店舗を構え、現地調査や自社の工事体制を重視しています。
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
                    ["サービス名", "エアコン総本舗（業務用エアコン専門店）"],
                    ["運営会社", "株式会社フジテック"],
                    ["本社所在地", "東京都品川区東五反田4-7-26 塚本ビル1F"],
                    ["設立", "2004年1月（創業2004年）"],
                    ["対応エリア", "東京・神奈川・埼玉・千葉・群馬・静岡・山梨 ほか（随時拡大中）"],
                    ["取扱メーカー", "ダイキン／パナソニック／三菱電機／三菱重工／日立／東芝（日本キヤリア） ほか"],
                    ["施工実績", "年間6,000件以上・累計63,000件超"],
                    ["保証", "メーカー保証（1年）＋工事保証（1年）／有償の10年延長保証あり"],
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
              出典：エアコン総本舗公式サイト（会社概要）。所在地・対応エリア等は変更される場合があります。最新情報は公式サイトでご確認ください。
            </p>
          </section>

          {/* Good reviews */}
          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              良い口コミ・評判
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              公開されている口コミで多く見られたのは、
              <strong className="font-semibold">価格の手頃さと、見積もり・施工の丁寧さの両立</strong>
              を評価する声です。他店より安く取り付けられた、見積内容と請求金額にズレがなかった、要望を細かく聞き取ってもらえた、といった点が好意的に受け止められています。
            </p>
            <div className="grid gap-4">
              {goodReviews.map((r, i) => (
                <figure key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
                  {r.rating && <p className="text-xs font-semibold text-amber-600">{r.rating}</p>}
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
              ※上記は第三者の業務用エアコン情報サイトに掲載された利用者口コミ（うち1件は同サイトが引用したGoogleマップの口コミ）を原文のまま引用したものです。満足度の表記は掲載元の表記に従っています。
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
              出典とした掲載サイトの口コミは肯定的なものが中心で、同サイトの記事でも明確な悪い口コミは確認できなかったとされています。ただし注意点として、
              <strong className="font-semibold">対応エリアが首都圏を中心とした関東圏に限られる</strong>
              点が挙げられます。エリア外の事業者は対応可否を事前に確認する必要があります。また、需要が集中する繁忙期は工事日程が読みづらくなることがあるため、早めに相談することをおすすめします。
            </p>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-slate-700 leading-7 text-[0.95rem]">
                当サイトでは根拠のない否定的な口コミは掲載せず、一般的な注意点として「対応エリアの確認」「繁忙期の日程」「見積もり内容・保証範囲の確認」を挙げるにとどめます。見積もりの段階で、これらの条件を確認しておくことをおすすめします。
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
                  <li>施工前に正確な見積もりを提示し、追加工事の発生防止に努めている</li>
                  <li>「比較した他店よりも安価に取り付けていただいた」など価格面を評価する口コミがある</li>
                  <li>年間6,000件以上・累計63,000件超の施工実績がある</li>
                  <li>写真を送るだけのクイック見積もりで概算を確認できる</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>対応エリアが首都圏を中心とした関東圏に限られる</li>
                  <li>工事保証は1年と、長期保証は有償オプションになる</li>
                  <li>繁忙期は工事日程が読みづらくなる場合がある</li>
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
                  <li>費用を抑えつつ、工事品質も確保したい首都圏の店舗・オフィス</li>
                  <li>無料の現地調査で、工事費を施工前に確定させたい事業者</li>
                  <li>写真による概算見積もりから気軽に相談したい事業者</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>関東圏以外（地方）で施工を依頼したい事業者</li>
                  <li>長期の工事保証を無償で希望する場合</li>
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
              業務用エアコンは、機種の馬力（能力）・台数・設置場所・既存機の撤去有無などで費用が大きく変わります。エアコン総本舗の公式サイトの掲載価格は商品のみの価格で、工事費は
              <strong className="font-semibold">無料の現地調査と見積もり</strong>
              で提示されます。写真を送るだけのクイック見積もりで概算を確認することもできます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              保証は、メーカー保証（1年）に加えて施工後1年間の工事保証があり、さらに有償で10年の延長保証を選べます。正確な金額や保証条件は、無料の現地調査と見積もりでご確認ください。複数業者から相見積もりを取り、本体価格・工事費・保証年数・アフター対応を同じ条件で比較することをおすすめします。
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
                ["問い合わせ・クイック見積もり", "電話・Webフォームから相談します。設置場所の写真を送ると、概算見積もりを受けられます。"],
                ["現地調査・正式見積もり", "担当者が設置環境を確認し、機種と費用を提案します。現地調査・見積もりは無料です。"],
                ["プラン・契約内容の決定", "機種・保証内容・支払い方法を比較して決定します。"],
                ["工事日程の調整・設置工事", "日程を調整し、設置・入替工事を行います。"],
                ["引き渡し・アフター対応", "動作確認のうえ引き渡します。引き渡し後は工事保証や延長保証にもとづいてアフター対応を行います。"],
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
              エアコン総本舗は、株式会社フジテックが2004年から運営する業務用エアコンの専門店で、市場調査と格安仕入れによる価格設定と、首都圏での豊富な施工実績が強みです。第三者サイトに掲載された口コミでは、比較した他店より安く取り付けられた、見積もり通りの請求で施工も丁寧だった、といった価格と対応の両面を評価する声が見られました。一方で、対応エリアが関東圏中心である点や、長期保証が有償である点には注意が必要です。
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
                href="https://ac.fj-tec.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors"
              >
                エアコン総本舗公式サイトを見る
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
