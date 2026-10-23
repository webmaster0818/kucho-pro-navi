import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンの森の口コミ・評判は？運営会社・料金・対応エリアを公式情報で確認【2026年10月】",
  description:
    "エアコン通販「エアコンの森」（運営：株式会社サンゲート・東京都千代田区）の評判の確かめ方と、公式サイトに書かれている取付工事費・送料・対応エリア・支払い方法・延長保証・問い合わせ方法・注意点をまとめました（2026年10月20日確認）。",
  alternates: { canonical: "/company/aircon-no-mori" },
};

const UPDATED = "2026年10月20日";
const CHECKED = "2026年10月20日確認";
const OFFICIAL = "https://www.airconnomori.com";

const toc = [
  { id: "summary", label: "エアコンの森とは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "reviews", label: "口コミ・評判について" },
  { id: "price", label: "料金（取付工事費・送料・手数料）" },
  { id: "area", label: "対応エリア" },
  { id: "flow", label: "注文から設置までの流れ" },
  { id: "warranty", label: "保証・延長保証" },
  { id: "contact", label: "問い合わせ方法" },
  { id: "caution", label: "注文前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "faq", label: "よくある質問" },
  { id: "summary-last", label: "まとめ" },
];

const companyRows: [string, string][] = [
  ["屋号", "激安エアコン専門店エアコンの森"],
  ["販売業者", "株式会社サンゲート"],
  ["所在地", "〒101-0021 東京都千代田区外神田4-7-7 ソフト99ビル6F"],
  ["電話・FAX", "TEL 03-3525-4671／FAX 03-3525-4672"],
  ["メール", "info@airconnomori.com"],
  ["営業時間", "平日 9:30〜18:00、土曜 9:30〜17:00（日曜・祝日定休）※公式サイトには12:00〜13:00を除く表記も併記"],
  ["取り扱い", "家庭用エアコン・ハウジングエアコン・業務用エアコン（1.5〜12馬力）・その他家電"],
  ["サービス", "本体の通販、取付工事（オプション）、工事見積り、店頭受取、延長保証"],
  ["支払い方法", "代金引換・銀行振込・郵便振替・オリコショッピングローン（業務用は銀行振込・郵便振替のみ）"],
  ["店頭受取の場所", "埼玉県川口市東川口6-7-3（マルサン物流内）※注文後のみ・本社所在地とは別"],
  ["公式サイト", "https://www.airconnomori.com/"],
];

const homeInstall: [string, string][] = [
  ["2.2kW〜2.8kW", "22,000円"],
  ["3.2kW〜4.0kW", "24,200円"],
  ["4.6kW〜6.3kW", "28,600円"],
  ["6.4kW〜9.0kW", "29,700円"],
];

const extraWork: [string, string, string][] = [
  ["既設の壁掛エアコン取外し（4.5kWまで）", "6,600円", "新品取付に伴う取外し"],
  ["既設の壁掛エアコン取外し（4.6kW〜）", "9,900円", "新品取付に伴う取外し"],
  ["廃家電収集費", "6,050円/1台", "リサイクル料金550円〜は別途"],
  ["配管延長（1mにつき・2分3分）", "4,400円", "4mを超えた場合"],
  ["専用回路増設工事", "16,500円〜", "分電盤から10mまで"],
  ["穴あけ（コンクリート）", "20,680円", "—"],
  ["石綿調査・書類作成", "5,500円〜", "建設年月がわかる書類が手元にある場合は不要"],
];

const shipping: [string, string][] = [
  ["関東・甲信越・東海・北陸・近畿・東北", "2,900円"],
  ["中国・四国", "3,500円"],
  ["北海道・九州", "4,000円"],
  ["沖縄県・離島", "問い合わせ（別途見積）"],
];

const faqs = [
  {
    q: "エアコンの森の運営会社はどこですか？",
    a: "株式会社サンゲートです。特定商取引法に基づく表記では、所在地は東京都千代田区外神田4-7-7 ソフト99ビル6F、電話番号は03-3525-4671とされています（公式サイト・2026年10月20日確認）。",
  },
  {
    q: "エアコンの森の口コミ・評判はどこで確認できますか？",
    a: "公式サイトのメニュー（ご利用案内・よくある質問・お知らせ等）には、利用者の声を掲載したページは見当たりませんでした（2026年10月20日確認）。当ページでは、掲載元を特定できない口コミは掲載していません。評判を確認する場合は、掲載元が明らかなレビューで、投稿時期と「本体の購入」か「取付工事」かを分けて見ることをおすすめします。",
  },
  {
    q: "業務用エアコンも買えますか？工事も頼めますか？",
    a: "業務用エアコン（1.5〜12馬力）を取り扱っています。業務用の取付工事は「現場見積後の施工」で、現場出張見積は3,300円です。公式FAQでは、地域によっては伺えない場合があるとしています。支払いは銀行振込・郵便振替のみで、メーカー直送のため代引きは使えません。",
  },
  {
    q: "家庭用エアコンの取付工事費はいくらですか？",
    a: "新規標準取付工事は、2.2〜2.8kWが22,000円、3.2〜4.0kWが24,200円、4.6〜6.3kWが28,600円、6.4〜9.0kWが29,700円（いずれも税込・配管4mまで等の条件つき）です。既設エアコンの取外し・処分や化粧カバーは追加工事で、追加工事費は作業完了後に作業員へ現金で支払います。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "本体の配送は全国で、沖縄県・離島は別途見積です。取付工事は、公式サイトで「2026年6月2日以降北海道・沖縄・離島への取付工事はお受けしておりません」とされています。業務用の出張見積も同日以降、北海道・沖縄・離島は受け付けていません。",
  },
  {
    q: "工事はいつ来てもらえますか？",
    a: "工事は商品到着の翌日以降の訪問で、注文確定後に工事業者へ依頼し、1週間以内に工事業者から日程の電話があります（公式）。2026年4月27日のお知らせでは、繁忙期は工事業者へ手配してから訪問まで「3〜5週間以降」が目安としていました。",
  },
  {
    q: "注文後にキャンセルはできますか？",
    a: "発送前であれば問い合わせ窓口に連絡します。公式の特定商取引法に基づく表記では、原則として商品発送完了後のキャンセル・返品・交換には応じられないとしています。不良品・欠損品は商品到着後7日以内に連絡が必要です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "エアコンの森の口コミ・評判は？運営会社・料金・対応エリアを公式情報で確認",
  datePublished: "2026-06-10",
  dateModified: "2026-10-20",
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

const h2 = "text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 mb-5";
const note = "mt-3 text-xs text-slate-400 leading-6";
const a = "text-teal-700 underline underline-offset-4";

function Src({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={a}>
      {label}
    </a>
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
          { label: "エアコンの森の口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-3">
            エアコン通販・業者の口コミ・評判
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンの森の口コミ・評判は？
            <br className="hidden md:block" />
            運営会社・料金・対応エリアを公式情報で確認
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>空調プロナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-10-20">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image
              src="/images/hero-a.png"
              alt="店舗やオフィスに設置されるエアコンのイメージ"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            <strong className="font-semibold text-slate-900">エアコンの森</strong>
            は、株式会社サンゲート（東京都千代田区）が運営するエアコンの通販サイトです。本記事では、運営会社・所在地、取付工事費や送料などの料金、対応エリア、注文から設置までの流れ、保証、問い合わせ方法、注文前の注意点を、公式サイトの記載どおりにまとめています。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※料金・エリア・条件は公式サイトの記載（{CHECKED}）です。変更される場合があるため、注文前に公式サイトでご確認ください。
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-6">
            <p className="font-bold text-teal-800 mb-2">エアコンの森の要点</p>
            <ul className="text-[0.95rem] leading-7 text-slate-700 list-disc pl-5 space-y-1">
              <li>運営：株式会社サンゲート（東京都千代田区外神田）。家庭用・ハウジング・業務用エアコンを通販で販売</li>
              <li>家庭用の標準取付工事は22,000円〜29,700円（税込・能力別）。業務用工事は現場見積後の施工（出張見積3,300円）</li>
              <li>2026年6月2日以降、北海道・沖縄・離島への取付工事は受け付けていない（本体配送は全国）</li>
              <li>原則として発送後のキャンセル・返品・交換は不可。繁忙期は工事訪問まで3〜5週間以降が目安とした告知あり</li>
            </ul>
          </div>
        </div>

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
          <section id="summary" className="scroll-mt-24">
            <h2 className={h2}>エアコンの森とは</h2>
            <p className="leading-8 text-slate-700">
              エアコンの森（屋号：激安エアコン専門店エアコンの森）は、
              <strong className="font-semibold">エアコン本体を通販で販売するサイト</strong>
              です。家庭用エアコン、ハウジングエアコン、業務用エアコン（1.5馬力〜12馬力）、その他の家電を扱っています。本体の購入時にオプションで取付工事を申し込めるほか、工事の見積り依頼、川口市の倉庫での店頭受取、有料の延長保証も用意しています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              公式サイトでは「14時までの入金確認で当日発送が可能な商品もございます」としています。引渡し時期は、当店在庫の場合は翌日〜、メーカー在庫の場合は翌日〜3営業日程度とされています（特定商取引法に基づく表記）。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className={h2}>運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {companyRows.map(([k, v], i) => (
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
            <p className={note}>
              出典：エアコンの森公式サイト（
              <Src href={`${OFFICIAL}/html/page10.html`} label="特定商取引法に基づく表記" />・
              <Src href={`${OFFICIAL}/`} label="トップページ" />・
              <Src href={`${OFFICIAL}/html/page4.html`} label="お支払い方法" />・
              <Src href={`${OFFICIAL}/html/page44.html`} label="店頭受取サービス" />・
              <Src href={`${OFFICIAL}/html/page9.html`} label="よくある質問" />
              ）{CHECKED}。
            </p>
          </section>

          <section id="reviews" className="scroll-mt-24">
            <h2 className={h2}>口コミ・評判について</h2>
            <p className="leading-8 text-slate-700">
              公式サイトのメニュー（ご利用案内・よくある質問・お知らせ等）には、利用者の声や施工事例を掲載したページは見当たりませんでした（{CHECKED}）。
              当ページでは以前、通販モール等のレビューとして利用者の声を掲載していましたが、
              <strong className="font-semibold">掲載元のページを特定できなかったため削除</strong>
              しました。評価の点数や件数も、出典を確認できないため掲載していません。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコンの森の口コミ・評判を調べるときは、次の点を分けて確認すると判断しやすくなります。
            </p>
            <ul className="mt-3 space-y-2 text-slate-700 leading-7 list-disc pl-6">
              <li>
                <strong className="font-semibold">本体購入（通販）への評価か、取付工事への評価か</strong>：工事は注文確定後に工事業者へ依頼する仕組みで、工事業者から日程の電話が入ります（公式）。配送・価格の評価と工事の評価は別に見る必要があります。
              </li>
              <li>
                <strong className="font-semibold">投稿時期</strong>：工事の受付エリアは2026年6月2日に変わり、繁忙期の工事待ちの目安も時期で変わります。古い投稿の条件が今も同じとは限りません。
              </li>
              <li>
                <strong className="font-semibold">掲載元が明らかか</strong>：サイト名・ページが特定できないレビューは、内容を確かめられません。
              </li>
            </ul>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="font-bold text-slate-800 mb-2">公式のお知らせに書かれている点（評判と混同しやすい事項）</p>
              <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7 list-disc pl-5">
                <li>
                  2026年4月27日「夏季工事お伺い状況について」：繁忙期で工事依頼が込み合っており、工事業者へ手配してから訪問まで「3〜5週間以降のご訪問が目安」、工事業者からの連絡にも日数がかかっている、としています。
                </li>
                <li>
                  「【重要】運送会社の物量増加に伴うお荷物の遅延について」：運送会社の物量増加で、希望日に届けられない場合や、出荷を見合わせる場合があるとしています。
                </li>
                <li>
                  エアコンが動かない等のトラブルは「メーカー対応」とし、保証書・取扱説明書に記載のメーカー窓口へ連絡するよう案内しています。
                </li>
              </ul>
              <p className={note}>
                出典：エアコンの森公式サイト（
                <Src href={`${OFFICIAL}/new/2026-04-27-140525.html`} label="夏季工事お伺い状況について" />・
                <Src href={`${OFFICIAL}/new/2025-12-01-095526.html`} label="お荷物の遅延について" />・
                <Src href={`${OFFICIAL}/new/2026-04-27-140501.html`} label="GW期間中の休業日のお知らせ" />
                ）{CHECKED}。
              </p>
            </div>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image
              src="/images/hero-b.png"
              alt="壁に設置されたエアコンと整った室内空間"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <section id="price" className="scroll-mt-24">
            <h2 className={h2}>料金（取付工事費・送料・手数料）</h2>
            <p className="leading-8 text-slate-700">
              本体価格は商品ごとに公式サイトに税込で表示されています。総額は「本体＋送料＋取付工事費＋追加工事費＋（代引きの場合）代引手数料」で考えます。以下は公式サイトの記載です。
            </p>

            <h3 className="mt-6 font-bold text-slate-800">家庭用エアコンの新規標準取付工事（税込）</h3>
            <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <thead>
                  <tr className="bg-slate-100 text-slate-700">
                    <th className="text-left px-4 py-2">能力</th>
                    <th className="text-left px-4 py-2">取付費（税込）</th>
                  </tr>
                </thead>
                <tbody>
                  {homeInstall.map(([k, v]) => (
                    <tr key={k} className="border-t border-slate-100">
                      <td className="px-4 py-2 text-slate-700">{k}</td>
                      <td className="px-4 py-2 text-slate-700">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-sm text-slate-500 leading-6">
              公式の条件：配管長4mまで／化粧テープ仕上げ／室外機置プラスチック台付／真空引き工事。既存エアコンの取り外し・処分・化粧カバーは追加工事です。
            </p>

            <h3 className="mt-6 font-bold text-slate-800">主な追加工事（公式「価格の目安」・税込・抜粋）</h3>
            <div className="mt-3 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-[0.9rem]">
                <thead>
                  <tr className="bg-slate-100 text-slate-700">
                    <th className="text-left px-4 py-2">項目</th>
                    <th className="text-left px-4 py-2">価格の目安</th>
                    <th className="text-left px-4 py-2">適用</th>
                  </tr>
                </thead>
                <tbody>
                  {extraWork.map(([k, v, c]) => (
                    <tr key={k} className="border-t border-slate-100">
                      <td className="px-4 py-2 text-slate-700">{k}</td>
                      <td className="px-4 py-2 text-slate-700 whitespace-nowrap">{v}</td>
                      <td className="px-4 py-2 text-slate-500">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-sm text-slate-500 leading-6">
              追加工事費は作業完了後に作業員へ現金で支払います。設置環境を見て当日発生する追加工事がある場合がある、とされています。
            </p>

            <h3 className="mt-6 font-bold text-slate-800">業務用エアコンの工事費</h3>
            <p className="mt-2 leading-8 text-slate-700">
              業務用エアコンの工事は<strong className="font-semibold">現場見積後の施工</strong>で、現場出張見積は3,300円です。公式サイトでは、諸経費（雑部材・試運転調整費・養生費・運搬費・駐車料金等）、取外し・処分費、4mを超える配管工事、電源工事、外壁穴あけ、クレーン・高所作業などを「別途工事費」として挙げています。
            </p>

            <h3 className="mt-6 font-bold text-slate-800">送料（家庭用エアコン1セット）</h3>
            <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {shipping.map(([k, v]) => (
                    <tr key={k} className="border-t border-slate-100 first:border-t-0">
                      <td className="px-4 py-2 text-slate-700">{k}</td>
                      <td className="px-4 py-2 text-slate-700 whitespace-nowrap">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-sm text-slate-500 leading-6">
              公式の注記：商品詳細ページに送料区分の記載がある商品は所定の送料がかかり、記載がない商品は送料無料。ハウジングエアコンの送料はお問い合わせ。業務用エアコンはメーカーからの直送です（公式FAQ）。
            </p>

            <h3 className="mt-6 font-bold text-slate-800">代引手数料（税込）</h3>
            <p className="mt-2 leading-8 text-slate-700">
              商品と代引金額の合計に応じて495円〜5,940円です（例：100,001〜300,000円は1,650円、300,001〜500,000円は3,300円）。銀行振込・郵便振替の手数料は利用者負担です。
            </p>
            <p className={note}>
              出典：エアコンの森公式サイト（
              <Src href={`${OFFICIAL}/html/page6.html`} label="エアコン取付工事（家庭用）" />・
              <Src href={`${OFFICIAL}/html/page7.html`} label="エアコン取付工事（業務用）" />・
              <Src href={`${OFFICIAL}/html/page41.html`} label="配送料について" />・
              <Src href={`${OFFICIAL}/html/page4.html`} label="お支払方法について" />
              ）{CHECKED}。
            </p>
          </section>

          <section id="area" className="scroll-mt-24">
            <h2 className={h2}>対応エリア</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["本体の配送", "全国（沖縄県・離島は問い合わせ・別途見積）"],
                    ["家庭用の取付工事", "2026年6月2日以降、北海道・沖縄・離島は受け付けていない（離島等、一部エリアは対応できない場合あり）"],
                    ["業務用の工事・出張見積", "現場見積後の施工。2026年6月2日以降、北海道・沖縄・離島への出張見積は受け付けていない。地域により伺えない場合あり"],
                    ["店頭受取", "埼玉県川口市東川口6-7-3（マルサン物流内）。注文時にオプションで「店頭引取り希望」を選択"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={note}>
              出典：エアコンの森公式サイト（
              <Src href={`${OFFICIAL}/html/page6.html`} label="家庭用工事" />・
              <Src href={`${OFFICIAL}/html/page7.html`} label="業務用工事" />・
              <Src href={`${OFFICIAL}/html/page9.html`} label="よくある質問" />・
              <Src href={`${OFFICIAL}/html/page44.html`} label="店頭受取サービス" />
              ）{CHECKED}。
            </p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className={h2}>注文から設置までの流れ（家庭用エアコン・取付工事つき）</h2>
            <ol className="space-y-4">
              {[
                ["商品の購入", "商品ページのオプションで「標準取付工事」を選び、本体と一緒に購入します。工事希望日がある場合は購入時に備考欄へ記載します。"],
                ["工事日の打ち合わせ", "注文確定後、商品のお届け日が決まり次第、工事業者へ工事を依頼します。その後1週間以内に工事業者から日程と工事内容の確認の電話があります。追加工事の相談もこのときに行います。"],
                ["商品の受け取り", "運送会社が商品を届けます。商品のお届け日と工事の訪問日は別日で、工事は商品到着の翌日以降です。"],
                ["工事当日", "訪問日の朝に訪問目安時間の連絡があり、設置後に試運転で運転チェックをして完了です。"],
                ["追加工事費の支払い", "追加工事費は作業完了後に作業員へ現金で支払います。"],
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
            <p className="mt-5 leading-8 text-slate-700">
              業務用エアコンは、工事見積（メールでの概算見積、または3,300円〜の現地確認出張見積）を経て施工となります。支払いは銀行振込・郵便振替のみで、入金確認後にメーカーから発送されます（公式FAQ）。
            </p>
            <p className={note}>
              出典：エアコンの森公式サイト（
              <Src href={`${OFFICIAL}/html/page6.html`} label="エアコン設置工事の流れ" />・
              <Src href={`${OFFICIAL}/html/page9.html`} label="よくある質問" />・
              <Src href={`${OFFICIAL}/html/page29.html`} label="エアコン工事のお見積り" />
              ）{CHECKED}。
            </p>
          </section>

          <section id="warranty" className="scroll-mt-24">
            <h2 className={h2}>保証・延長保証</h2>
            <p className="leading-8 text-slate-700">
              メーカー保証期間中の自然故障は、メーカーのサポートセンターへ直接連絡して修理を依頼します。有料の延長保証（SOMPOワランティ）は、メーカー保証期間を含めて5年・8年・10年の3種類で、保証期間中の自然故障は修理代（部品代＋技術料＋出張費）の負担なく、回数の制限なく利用できるとされています。修理上限は製品金額（税込）までです。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              ただし、<strong className="font-semibold">業務用エアコンを導入する事業者は対象外になる可能性が高い点</strong>に注意が必要です。公式FAQでは延長保証は「個人様のみ」とされ、延長保証ページでは法人名義の加入も可能としつつ「メーカーが定める業務用製品（一部除外品目あり）」は保証の対象外としています。
            </p>
            <p className={note}>
              出典：エアコンの森公式サイト（
              <Src href={`${OFFICIAL}/html/page8.html`} label="当店の延長保証" />・
              <Src href={`${OFFICIAL}/html/page9.html`} label="よくある質問" />
              ）{CHECKED}。
            </p>
          </section>

          <section id="contact" className="scroll-mt-24">
            <h2 className={h2}>問い合わせ方法</h2>
            <ul className="space-y-2 text-slate-700 leading-7 list-disc pl-6">
              <li>電話：03-3525-4671（平日9:30〜18:00、土曜9:30〜17:00、日曜・祝日定休）。電話での注文も可能です</li>
              <li>FAX：03-3525-4672</li>
              <li>メール：info@airconnomori.com（日曜・店休日のメール返信は翌営業日以降）</li>
              <li>公式サイトの<Src href={`${OFFICIAL}/html/page27.html`} label="お問い合わせフォーム" /></li>
              <li>工事の見積り：<Src href={`${OFFICIAL}/html/page29.html`} label="エアコン工事のお見積りフォーム" />（メールでの概算見積。現地確認の出張見積は備考欄に「出張見積もり希望」と記入、3,300円〜）</li>
            </ul>
            <p className="mt-4 leading-8 text-slate-700">
              公式サイトでは「エアコンの森は365日／24時間営業です」としていますが、電話の受付やメール返信は上記の営業時間内です。大型連休等は休業日のお知らせが出るため、注文前にお知らせ欄を確認しておくと安心です。
            </p>
            <p className={note}>出典：エアコンの森公式サイト（<Src href={`${OFFICIAL}/`} label="トップページ・インフォメーション" />）{CHECKED}。</p>
          </section>

          <section id="caution" className="scroll-mt-24">
            <h2 className={h2}>注文前の注意点</h2>
            <ul className="space-y-3 text-slate-700 leading-7 list-disc pl-6">
              <li>
                <strong className="font-semibold">発送後のキャンセル・返品・交換は原則不可</strong>：発送前のキャンセルは問い合わせ窓口へ連絡します。客都合の返品は受け付けておらず、「工事延期等による損害は負担することができません」としています。
              </li>
              <li>
                <strong className="font-semibold">届いたらすぐ破損確認</strong>：破損は運送会社の現物確認が必要で、開梱後や設置時の連絡では対応できなくなるとされています。不良品・欠損品は到着後7日以内に連絡します。
              </li>
              <li>
                <strong className="font-semibold">クレジットカード決済は使えない</strong>：公式FAQでは代引き・銀行振込・郵便振替の取り扱いとしています（ショッピングローンはオリコを採用）。銀行振込・郵便振替は7日以内に入金がないとキャンセル扱いです。
              </li>
              <li>
                <strong className="font-semibold">設置条件の事前確認</strong>：エアコン専用回路のコンセントが必要で、200Vが通っていない場合は200V機を設置できません。隠蔽配管は通常より高くなり、加湿・換気ホースが必要な機種は設置できない場合があります。
              </li>
              <li>
                <strong className="font-semibold">繁忙期は工事まで日数がかかる</strong>：2026年4月27日の告知では、手配から訪問まで3〜5週間以降が目安でした。
              </li>
              <li>
                <strong className="font-semibold">店頭受取は注文後のみ</strong>：注文前の来店は不可で、受取場所（埼玉県川口市）は本社所在地と異なります。11:45〜13:00は来店対応不可です。
              </li>
            </ul>
            <p className={note}>
              出典：エアコンの森公式サイト（
              <Src href={`${OFFICIAL}/html/page10.html`} label="特定商取引法に基づく表記" />・
              <Src href={`${OFFICIAL}/html/page9.html`} label="よくある質問" />・
              <Src href={`${OFFICIAL}/html/page4.html`} label="お支払方法" />・
              <Src href={`${OFFICIAL}/html/page6.html`} label="工事依頼前チェック" />・
              <Src href={`${OFFICIAL}/html/page44.html`} label="店頭受取サービス" />
              ）{CHECKED}。
            </p>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className={h2}>メリット・デメリット（公式情報から整理）</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-teal-100 bg-teal-50/60 p-6">
                <h3 className="font-bold text-teal-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>家庭用の標準取付工事費が能力別に公開されており、総額を見積もりやすい</li>
                  <li>14時までの入金確認で当日発送が可能な商品がある</li>
                  <li>業務用エアコン（1.5〜12馬力）も通販で購入でき、工事の見積りも依頼できる</li>
                  <li>川口市の倉庫で店頭受取ができる</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>北海道・沖縄・離島は取付工事を受け付けていない（2026年6月2日以降）</li>
                  <li>原則として発送後のキャンセル・返品・交換はできない</li>
                  <li>業務用は銀行振込・郵便振替のみで、延長保証は業務用製品が対象外</li>
                  <li>繁忙期は工事の訪問まで数週間かかる場合がある</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いている事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>導入する機種・能力が決まっており、自分で選んで注文できる</li>
                  <li>本体価格・工事費を公開情報で比べてから決めたい</li>
                  <li>シーズン前に余裕を持って準備できる</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない事業者</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>北海道・沖縄・離島で取付工事まで頼みたい</li>
                  <li>繁忙期に最短で工事を終えたい</li>
                  <li>業務用機でも長期の延長保証やリースを使いたい</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="faq" className="scroll-mt-24">
            <h2 className={h2}>よくある質問</h2>
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

          <section id="summary-last" className="scroll-mt-24">
            <h2 className={h2}>まとめ</h2>
            <p className="leading-8 text-slate-700">
              エアコンの森は、株式会社サンゲート（東京都千代田区外神田）が運営するエアコン通販サイトで、家庭用から業務用（1.5〜12馬力）まで扱い、家庭用の標準取付工事費（22,000円〜29,700円・税込）を公開しています。一方、2026年6月2日以降は北海道・沖縄・離島の取付工事を受け付けておらず、発送後のキャンセル・返品は原則できません。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              公式サイトに利用者の声のページは見当たらず、当ページでも出典を特定できない口コミは掲載していません。本体価格・送料・工事費・追加工事費・納期・保証を、他の通販・工事業者と同じ条件で比べて判断することをおすすめします。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">最新の価格・在庫・工事条件は公式サイトで</p>
              <p className="text-teal-100 text-sm mb-5">
                工事費まで含めた総額で比較することをおすすめします。
              </p>
              <a
                href="https://www.airconnomori.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-7 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors"
              >
                エアコンの森 公式サイトを見る
              </a>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/ranking", label: "業務用エアコン業者ランキング" },
                { href: "/ranking/lease", label: "業務用エアコンのリース対応業者とメリット・デメリット" },
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
