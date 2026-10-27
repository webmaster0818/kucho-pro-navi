import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンフロンティアの口コミ・評判は？業務用エアコンの料金・対応エリアを解説【2026年10月】",
  description:
    "業務用エアコン専門店「エアコンフロンティア」（運営：アトム冷熱工業）の口コミ・評判をまとめました。実際の利用者の声、料金やリースの仕組み、対応エリア、メリット・デメリット、向いている事業者まで中立的に解説します。",
  alternates: { canonical: "/company/aircon-frontier" },
};

const UPDATED = "2026年10月27日";

const toc = [
  { id: "summary", label: "エアコンフロンティアとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "良い口コミ・評判" },
  { id: "bad", label: "注意点を指摘する口コミ・評判" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている事業者・向いていない事業者" },
  { id: "price", label: "料金・リースの仕組み" },
  { id: "flow", label: "問い合わせから設置までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "summary-last", label: "まとめ" },
];

type Review = { body: string; who: string; rating?: string; source: string; url?: string };

const goodReviews: Review[] = [
  {
    body:
      "対応はスピーディーで、まさに神対応でした。価格は普通かと。工事は意外と簡単に終わりました。",
    who: "福岡県・40代男性",
    rating: "とても満足",
    source: "コピー機Gメン（業務用エアコン）「エアコンフロンティアの業務用エアコンの評判は？安い上に対応の評価も◎」（2026-10-21確認）",
    url: "https://www.copyki-gmen.com/aircon/aircon-frontier",
  },
  {
    body:
      "ラインで相談しましたが　とても丁寧に説明して頂き　無理に進める事もなく本当に安心でした　ありがとうございました。",
    who: "Kimiko さん（2024年7月11日投稿）",
    rating: "★5.0",
    source: "PR Haco「エアコンフロンティア評判と口コミ・レビュー!」（2026-10-21確認）",
    url: "https://hacolib.com/pr/aircon-f-co-jp/",
  },
  {
    body:
      "見積もりから支払い手続き、作業日程調整、作業当日。どれもスムーズにご対応いただきました。",
    who: "教育施設・東京都世田谷区（天吊形を設置）",
    source: "エアコンフロンティア公式サイト「お客様の声：教育施設 業務用エアコン入替工事 2025年12月16日 東京都世田谷区」（2026-10-21確認）",
    url: "https://aircon-f.co.jp/weblog/voice/educational_facilities/58022",
  },
  {
    body:
      "梱包、配送、対応、全てにおいて満足出来ました。",
    who: "Yahoo!ショッピング店の購入者（2018年3月29日投稿）",
    rating: "★5",
    source: "Yahoo!ショッピング「エアコンフロンティア」ストアレビュー（2026-10-21確認）",
    url: "https://shopping.yahoo.co.jp/store_rating/aircon-f/store/review/",
  },
];

const badReviews: Review[] = [
  {
    body:
      "クレジット決済する迄はとても迅速で丁寧な対応だったが、決済が決まった途端、うんともすんとも言って来なくなった。工事日程と見積内容について変更及び追加の問合せをしているのだが。現場と営業窓口が噛み合っていない気がする。工事はまだ先なので心配。天井カセットエアコン。",
    who: "PR Haco投稿者（2024年7月11日投稿）",
    rating: "★2.0",
    source: "PR Haco「エアコンフロンティア評判と口コミ・レビュー!」（2026-10-21確認）",
    url: "https://hacolib.com/pr/aircon-f-co-jp/",
  },
  {
    body:
      "正月のキャンペーンで購入をしたが、在庫がなかったためキャンセルになりました。年末から探していたこと、他の店で購入したするタイミングを逃したことが残念です。今後在庫情報の精度アップに期待します。支払い修正して対応は迅速でした。",
    who: "Yahoo!ショッピング店の購入者（2021年1月7日投稿）",
    rating: "★2",
    source: "Yahoo!ショッピング「エアコンフロンティア」ストアレビュー（2026-10-21確認）",
    url: "https://shopping.yahoo.co.jp/store_rating/aircon-f/store/review/",
  },
];

const faqs = [
  {
    q: "エアコンフロンティアは業務用エアコンの設置に対応していますか？",
    a: "はい。エアコンフロンティアは業務用エアコンの販売・設置工事を専門に手がけるサービスです。天井カセット形・天井吊形など、店舗・オフィス・施設向けの機種を幅広く取り扱っています。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "公式サイトでは全国（北海道〜沖縄）に対応するとされています。各地域のメーカー認定・提携工事店が施工を担当する体制のため、地域や時期によって対応スピードに差が出る場合があります。",
  },
  {
    q: "料金やリースの目安は？",
    a: "本体価格に設置工事費を含む販売のほか、初期費用を抑えられるリース契約も用意されています。公式サイトでは月額リース料3,100円〜と表示されていますが（2026-10-21確認）、機種・台数・契約条件で変わるため、正式な金額は無料の現地調査・見積もりでご確認ください。",
  },
  {
    q: "保証はありますか？",
    a: "メーカー保証に加え、有償の延長保証（最長10年）を選べるとされています。保証範囲や年数は契約内容によって異なるため、見積もり時にご確認ください。",
  },
  {
    q: "運営会社はどこですか？",
    a: "「エアコンフロンティア」は、神奈川県横浜市に本社を置くアトム冷熱工業株式会社が運営する業務用エアコンの専門ブランドです。会社の前身は1946年創業で、空調設備の販売・施工・保守を長く手がけています。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "エアコンフロンティアの口コミ・評判は？業務用エアコンの料金・対応エリアを解説【2026年10月】",
  datePublished: "2026-06-10",
  dateModified: "2026-10-27",
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
          { label: "エアコンフロンティアの口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        {/* Eyecatch / Header */}
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-3">
            業務用エアコン業者の口コミ・評判
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンフロンティアの口コミ・評判は？
            <br className="hidden md:block" />
            業務用エアコンの料金・対応エリアを解説
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>空調プロナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-10-27">最終更新：{UPDATED}</time>
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
            本記事では、業務用エアコンの専門店として知られる
            <strong className="font-semibold text-slate-900">エアコンフロンティア</strong>
            （運営：アトム冷熱工業株式会社）について、実際に公開されている利用者の口コミ、料金やリースの仕組み、対応エリア、メリット・デメリットを、評価されている点と注意点の両面から中立的にまとめています。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、各掲載サイトで公開されている内容を、出典ページを明記したうえで原文のまま引用したものです。料金や対応内容は時期・地域・契約条件により変わるため、最新の情報は公式サイトや無料見積もりでご確認ください（口コミの出典確認日：2026年10月21日）。
          </p>
        </div>


        {/* 即答 */}
        <div className="max-w-3xl mx-auto px-5 pt-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="font-bold text-slate-900 mb-3">エアコンフロンティアとは（2026年10月27日確認）</p>
            <ul className="space-y-3 text-[0.95rem] leading-7 text-slate-700 list-disc pl-5">
              <li>
                横浜市のアトム冷熱工業株式会社（創業1946年・特定建設業許可 第64687号）が運営する、業務用エアコンの機器販売と取り付け工事の専門サイトです。公式サイトによると2014年に開設されました。
              </li>
              <li>
                工事は全国に対応し、本体は全国送料無料です（離島・一部地域とメーカーによっては送料がかかります）。リースは月額3,100円からの案内があります。
              </li>
              <li>
                公式サイトは <a href="https://aircon-f.co.jp/" target="_blank" rel="nofollow noopener" className="text-teal-700 underline underline-offset-4">aircon-f.co.jp</a>、電話の受付は平日9:00〜17:30（0120-620-500）です。
              </li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">
              出典：<a href="https://aircon-f.co.jp/" target="_blank" rel="nofollow noopener" className="underline">エアコンフロンティア公式サイト</a>、<a href="https://aircon-f.co.jp/deals/lease.php" target="_blank" rel="nofollow noopener" className="underline">リースのご案内</a>（2026年10月27日確認）
            </p>
          </div>
        </div>

        {/* 要点 */}
        <div className="max-w-3xl mx-auto px-5 pt-8">
          <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-6">
            <p className="font-bold text-teal-800 mb-2">エアコンフロンティアの評判の要点</p>
            <p className="text-[0.95rem] leading-7 text-slate-700">
              エアコンフロンティアは<strong className="font-semibold">業務用エアコンの専門店</strong>（運営：アトム冷熱工業株式会社）で、公開されている口コミでは対応の速さ・説明の丁寧さを評価する声がある一方、決済後の連絡が途絶えた、在庫がなくキャンセルになった、と指摘する声もあります。<strong className="font-semibold">リース・購入の両方に対応</strong>しており、導入形態で総費用が変わるため、見積もり時にリース総額と購入額の比較を依頼することをおすすめします。詳しくは<a href="#good" className="text-teal-700 underline underline-offset-4">実際の口コミ</a>と<a href="#price" className="text-teal-700 underline underline-offset-4">料金・リースの仕組み</a>をご覧ください。
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
              エアコンフロンティアとは
            </h2>
            <p className="leading-8 text-slate-700">
              エアコンフロンティアは、飲食店・オフィス・クリニック・学校・工場など、事業者向けの
              <strong className="font-semibold">業務用エアコン</strong>
              の販売と設置工事を専門に手がけるサービスです。運営は、神奈川県横浜市に本社を構えるアトム冷熱工業株式会社です。前身は1946年創業で、空調設備の販売・施工・保守を長年にわたり手がけている事業者です。2014年にECサイト「エアコンフロンティア」を立ち上げ、全国対応の業務用エアコン専門店として展開しています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              ダイキン・三菱電機・三菱重工・日立・東芝・パナソニックなど主要メーカーの機種を幅広く扱い、本体＋工事の販売だけでなく、初期費用を抑えられるリース契約にも対応しているのが特徴です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              業務用エアコンの情報サイト「空調エキスパート」は2025年4月1日にアトム冷熱工業株式会社へ譲渡され、販売・施工のお問い合わせはエアコンフロンティアが受け付けています（2026年10月23日確認）。経緯は
              <Link href="/company/kucho-expert/" className="text-teal-700 underline underline-offset-4">空調エキスパートの会社ページ</Link>
              をご覧ください。
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
                    ["サービス名", "エアコンフロンティア（業務用エアコン専門店）"],
                    ["運営会社", "アトム冷熱工業株式会社"],
                    ["本社所在地", "神奈川県横浜市中区弁天通2-21 アトム関内ビル4F"],
                    ["サービス開始", "2014年（会社の前身は1946年創業）"],
                    ["対応エリア", "全国（各地域の認定・提携工事店が施工を担当）"],
                    ["取扱メーカー", "ダイキン／三菱電機／三菱重工／日立／東芝／パナソニック ほか"],
                    ["保証", "メーカー保証＋有償の延長保証（最長10年）"],
                    ["受付時間", "平日 9:00〜17:30（電話：0120-620-500）"],
                    ["建設業許可", "特定建設業許可 第64687号（公式サイト記載）"],
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
              出典：エアコンフロンティア公式サイト（会社情報）。所在地・受付時間等は変更される場合があります。
            </p>
          </section>

          {/* Good reviews */}
          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5">
              良い口コミ・評判
            </h2>
            <p className="leading-8 text-slate-700 mb-6">
              公開されている口コミで見られたのは、
              <strong className="font-semibold">問い合わせから設置までの対応のスピードと丁寧さ</strong>
              を評価する声です。LINEでの相談時に丁寧に説明してもらえた、無理に進められなかった、見積もりから作業当日までスムーズだった、といった点が好意的に受け止められています。
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
              ※公式サイト「お客様の声」は自社で収集・掲載された口コミです。Yahoo!ショッピング店の評価は機器販売（EC）に対するもので、設置工事そのものの評価とは限りません。出典を明記したうえで参考としてご覧ください。
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
              一方で、件数は多くないものの
              <strong className="font-semibold">決済後の連絡や在庫状況</strong>
              に関する不満の声も見られました。契約・決済の前に、工事日程の連絡方法や担当窓口、在庫状況を確認しておくことをおすすめします。
            </p>
            <div className="grid gap-4">
              {badReviews.map((r, i) => (
                <figure key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  {r.rating && <p className="text-xs font-semibold text-slate-500">{r.rating}</p>}
                  <blockquote className="mt-3 text-slate-700 leading-7">「{r.body}」</blockquote>
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
                  <li>主要メーカーを横断して機種を選べる</li>
                  <li>本体＋工事の販売に加え、初期費用を抑えるリースに対応</li>
                  <li>全国対応で、店舗・オフィス・施設など業種を問わず相談できる</li>
                  <li>現地調査・見積もりが無料で、相談しやすい</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>施工は地域の認定・提携工事店が担当するため、対応に地域差が出ることがある</li>
                  <li>決済後の連絡や在庫状況について不満を指摘する口コミがある</li>
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
                  <li>初期費用を抑えてリースで導入したい店舗・オフィス</li>
                  <li>複数メーカーから機種を比較して選びたい事業者</li>
                  <li>全国の複数拠点でまとめて空調を入れ替えたい企業</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>繁忙期に即日・最短での工事完了を求める急ぎの案件</li>
                  <li>地元の決まった工事店に直接依頼したい場合</li>
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
              業務用エアコンは、機種の馬力（能力）・台数・設置場所・既存機の撤去有無などで費用が大きく変わります。エアコンフロンティアでは、本体＋工事をまとめて購入する方法と、初期費用を抑えられる
              <strong className="font-semibold">リース契約</strong>
              の両方が選べます。公式サイトのリース案内では「月額リース料3,100円〜」と表示されていますが、これはあくまで条件次第の下限の目安です（出典：<a href="https://aircon-f.co.jp/deals/lease.php" target="_blank" rel="nofollow noopener" className="underline">エアコンフロンティア公式「業務用エアコンをリースで！」</a>、2026-10-21確認）。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              正確な金額は、無料の現地調査と見積もりでご確認ください。複数業者から相見積もりを取り、本体価格・工事費・保証年数・アフター対応を同じ条件で比較することをおすすめします。
            </p>
            <p className="mt-3 text-xs text-slate-400">
              ※月額の目安は公式サイトの表示に基づきます。最新の料金・リース条件は公式の見積もりでご確認ください。
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
                ["現地調査・見積もり", "担当者が設置環境を確認し、機種と費用を提案します。現地調査・見積もりは無料です。"],
                ["プラン・契約方法の決定", "購入かリースか、機種・保証内容を比較して決定します。"],
                ["工事日程の調整・設置工事", "地域の認定・提携工事店が訪問し、設置工事を行います。"],
                ["引き渡し・アフター対応", "動作確認のうえ引き渡します。引き渡し後は保証や定期点検によるアフター対応を行います。"],
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
              エアコンフロンティアは、長い実績を持つアトム冷熱工業が運営する業務用エアコンの専門店で、主要メーカーの機種を横断して選べること、購入・リースの両方に対応していることが強みです。口コミでは対応の速さと丁寧さを評価する声がある一方、決済後の連絡や在庫状況に関する指摘も見られました。
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
                href="https://aircon-f.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors"
              >
                エアコンフロンティア公式サイトを見る
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
