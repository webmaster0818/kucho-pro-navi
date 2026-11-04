import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/cost/" },
  title: "業務用エアコンの費用相場は工事費込み50〜70万円（5馬力以下）｜交換費用の内訳",
  description:
    "業務用エアコンの値段（設置費用＝機器代金＋工事代金）の相場は、5馬力以下で50〜70万円、6馬力以上で100〜150万円です（ダイキン公表の税込目安・2026年10月30日確認）。室内機の形による設置費用の違い、交換時の撤去費や追加工事もご説明します。",
};

const DAIKIN_URL = "https://www.ac.daikin.co.jp/customercenter/useful/article/49";
const CHECKED = "2026年10月30日";

const faqs = [
  {
    q: "業務用エアコンの費用相場は、工事費込みでいくらですか？",
    a: "ダイキンの公表値では、機器代金と工事代金を合わせた1セットあたりの目安（税込）は、5馬力以下（一般事務所で70㎡以下が目安）で50万〜70万円、6馬力以上（同80㎡以上）で100万〜150万円です。2023年4月〜2024年3月にダイキンへ問い合わせがあり成約した案件の販売価格をもとにした数値で、配管の長さや室外機の設置場所によって変わります（2026年10月30日に公式サイトで確認）。",
  },
  {
    q: "交換（入れ替え）の場合も、同じ相場ですか？",
    a: "ダイキンの目安価格は、新規の取り付けと入れ替えを区別せずに集計されています。入れ替えの場合は、既設機の撤去・廃棄費用、冷媒配管の洗浄費用、冷媒の処理費用が別にかかることがあり、ダイキンは機器の種類や台数により数万円〜数十万円としています。",
  },
  {
    q: "工事費が目安より高くなるのは、どのような場合ですか？",
    a: "ダイキンは、室内機と室外機の距離が遠い場合（配管が長くなる）、室外機を屋上や壁面に設置する場合（クレーン等が必要）、新設で三相200Vの電源工事が必要な場合、入れ替えで撤去・廃棄が発生する場合、古い建物でアスベストの事前調査が必要な場合を挙げています。",
  },
  {
    q: "馬力ごとの本体価格は、どこで確認できますか？",
    a: "業務用エアコン専門店の公式サイトに、馬力・形状ごとの本体価格が掲載されています。当サイトでは、専門店3社の掲載価格（天井カセット形4方向・本体のみ）を、税込・税別などの条件と確認日とあわせて早見インデックスにまとめています。工事費・追加費用は設置条件で変わるため、現地調査のうえで複数社の見積もりを比較してください。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

// 補助金は年度・公募回で条件が変わるため概要のみ。最新の公募状況・対象要件は必ず公式で確認（詳細は発注タイミングと補助金カレンダーのガイド参照）。
const SUBSIDY_CHECKED = "2026年11月4日";
const subsidyInfo: { name: string; desc: string; amount: string; links?: { label: string; url: string }[] }[] = [
  {
    name: "省エネ・非化石転換補助金（経産省／SII）",
    desc: "業務用の高効率空調（電気式パッケージ・GHP等）の更新が主な対象で、空調更新で中心となる制度です。2026年の4次公募は2026年10月30日17時で締め切られました。5次公募の概要・日程は詳細が決まり次第SIIが公表するとしています（2026年10月31日に公式サイトで確認）",
    amount: "補助率1/3以内（GX設備単位型トップ性能枠の更新は1/2以内）",
    links: [
      { label: "SII「省エネ・非化石転換補助金（設備単位型）4次公募 公募要領」1-11 補助率及び補助金限度額", url: "https://sii.or.jp/setsubi07r/uploads/r7h_st_01_kouboyouryou_4.pdf" },
    ],
  },
  {
    name: "脱炭素ビルリノベ事業（環境省／SII）",
    desc: "既存建築物の断熱化とあわせた高効率空調の導入が対象です。2026年は公募中です（〜11月30日。予算額に達した場合は期間内でも受付終了。2026年10月17日に公式サイトで確認）",
    amount: "補助率は要公式確認",
  },
  {
    name: "東京都・各自治体の省エネ設備補助",
    desc: "クール・ネット東京の「ゼロエミッション化に向けた省エネ設備導入・運用改善支援事業」の助成率・上限額は、年間CO2排出量を28t-CO2以上削減する区分が3/4・4,500万円、ほかの2区分が2/3・2,500万円または1,000万円です。神奈川県・埼玉県・大阪府・札幌市の制度は補助率1/3〜3/4・上限500万円です（埼玉県のスマートCO2排出削減設備導入事業の高効率省エネルギー設備への更新は上限300万円、神奈川県の認定・認証を受けた事業者は上限600万円）。公募の状況は自治体・年度で異なります（2026年11月4日に各公式サイトで確認）",
    amount: "東京都 2/3〜3/4・上限1,000万〜4,500万円／4自治体 1/3〜3/4・上限300万〜600万円",
    links: [
      { label: "クール・ネット東京「ゼロエミッション化に向けた省エネ設備導入・運用改善支援事業」", url: "https://www.tokyo-co2down.jp/subsidy/zeroemi-shoene/" },
      { label: "神奈川県「中小企業省エネルギー設備導入費等補助金」", url: "https://www.pref.kanagawa.jp/docs/ap4/cnt/f7226/shouenesetubihojokin.html" },
      { label: "埼玉県「令和8年度 スマートCO2排出削減設備導入事業」", url: "https://www.pref.saitama.lg.jp/a0502/hojokin/r8co2hojo.html" },
      { label: "埼玉県「CO₂排出削減設備導入補助金【緊急対策枠】」", url: "https://www.pref.saitama.lg.jp/a0502/hojokin/r7co2hojo-kinkyutaisaku.html" },
      { label: "大阪府「令和8年度中小事業者高効率空調機導入支援事業補助金」", url: "https://www.pref.osaka.lg.jp/o120020/eneseisaku/sec/r08hojokin-pac.html" },
      { label: "札幌市「製造業省エネルギー設備導入補助金」", url: "https://www.city.sapporo.jp/keizai/seizo/shien/seizougyousyouene.html" },
    ],
  },
  {
    name: "中小企業経営強化税制（設備投資減税）",
    desc: "中小企業等経営強化法に基づく即時償却・税額控除です。補助金とは別枠の制度です",
    amount: "即時償却／税額控除",
  },
];

export default function CostGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "ガイド" },
            { label: "費用相場ガイド" },
          ]}
        />

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコン費用相場ガイド
        </h1>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
          <p className="text-gray-800 leading-relaxed">
            業務用エアコンの費用相場は、機器代金と工事代金を合わせて<strong>5馬力以下で50万〜70万円、6馬力以上で100万〜150万円</strong>です（1セットあたり・税込）。これはダイキンが公表している目安で、5馬力以下は一般事務所で70㎡以下、6馬力以上は80㎡以上が目安とされています。新規の取り付けと交換（入れ替え）を区別せずに集計された数値です。ダイキンはこの金額を「設置費用の目安」としており、6馬力以上では80万〜90万円が2番目に多い価格帯としています。
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mt-3">
            交換の場合は、既設機の撤去・廃棄や冷媒の処理に数万円〜数十万円が別にかかることがあります。配管が長い場合や、室外機の設置にクレーンが必要な場合も費用が上がります。
          </p>
          <p className="text-xs text-gray-500 mt-3">
            出典：<a href={DAIKIN_URL} target="_blank" rel="noopener noreferrer" className="underline">ダイキン工業「業務用エアコンの価格相場は？工事費込みでいくらが目安？」</a>（スカイエアの目安。2023年4月〜2024年3月の成約案件の販売価格をもとに集計。{CHECKED}確認）
          </p>
        </div>
        <p className="text-gray-600 mb-8 leading-relaxed">
          実際の費用は、機器のサイズ・機種タイプ・設置環境・業者によって大きく異なります。馬力ごとの本体価格と標準工事費は、出典とあわせて<Link href="/cost-index/" className="text-[#1E40AF] underline">坪数×馬力×費用 早見インデックス</Link>に掲載しています。以下では、規模別の目安、費用の内訳、修理費の目安、補助金をご説明します。
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">室内機の形と設置費用</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            ダイキンは、室内機の形と設置方法が設置費用に影響するとしています。設置費用が高い順は次のとおりです。
          </p>
          <ol className="text-sm text-gray-700 space-y-2 list-decimal pl-5">
            <li><strong>天井埋込カセット形</strong>：重い室内機を天井裏に取り付けるうえ、新設で天井に開口がない場合は開ける工事が必要なため、ほかの形より最も高額になる場合があります。</li>
            <li><strong>天井吊形</strong>：天井に穴をあけずに設置できますが、重い室内機を天井から吊るす作業が必要なため、天井埋込カセット形に次いで高くなります。</li>
            <li><strong>床置形</strong>：本体が重いため壁掛形よりは費用がかかりますが、天井吊形よりは抑えられます。</li>
            <li><strong>壁掛形</strong>：工事の手順が家庭用と大きく違わないため、業務用エアコンの中で設置費用を最も抑えられます。</li>
          </ol>
          <p className="text-xs text-gray-500 mt-3">
            出典：<a href={DAIKIN_URL} target="_blank" rel="noopener noreferrer" className="underline">ダイキン工業「業務用エアコンの価格相場は？工事費込みでいくらが目安？」</a>（{CHECKED}確認）。費用を抑える方法と依頼先は<Link href="/ranking/cheap/" className="text-[#1E40AF] underline">業務用エアコンの費用を抑える方法と依頼先の公式情報</Link>でご案内しています。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">規模別・修理の費用について</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            店舗の広さ別の設置費用や、ガス補充・部品交換などの修理費用は、機種・馬力・台数・設置条件・故障の内容で大きく変わります。金額は業者の見積もりで確認してください。見積もりでは、機器代・基本工事費・配管や電気の追加工事・既設機の撤去費用が分けて記載されているかを確認すると比較しやすくなります。
          </p>
        </section>

        {/* Subsidy */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">使える補助金・助成金</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subsidyInfo.map((subsidy) => (
              <div key={subsidy.name} className="bg-white rounded-xl border border-gray-100 p-5">
                <h3 className="font-bold text-gray-800 mb-1 text-sm">{subsidy.name}</h3>
                <p className="text-gray-600 text-xs mb-2">{subsidy.desc}</p>
                <span className="bg-green-100 text-[#059669] text-xs font-bold px-2 py-1 rounded">
                  目安: {subsidy.amount}
                </span>
                {subsidy.links && (
                  <ul className="mt-2 space-y-1 text-xs text-gray-500">
                    {subsidy.links.map((l) => (
                      <li key={l.url}>
                        出典: <a href={l.url} target="_blank" rel="noopener noreferrer" className="underline">{l.label}</a>（{SUBSIDY_CHECKED}確認）
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※補助金の条件・金額・公募状況は年度ごとに変更され、予算到達で早期終了します。対象要件（空調単体が対象か）と最新情報は各省庁・自治体公式サイトでご確認ください。
            <Link href="/guide/timing/" className="text-[#059669] font-bold hover:underline">2026年の補助金カレンダーと発注タイミング →</Link>
          </p>
        </section>

        {/* Tips */}
        <section className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-amber-800 mb-4">費用を抑える5つのポイント</h2>
          <ol className="space-y-3 text-sm text-amber-700">
            <li className="flex gap-2">
              <span className="font-black">1.</span>
              <span><strong>相見積もりを3社以上取る</strong> — 業者によって機器の仕入れ値や工事の範囲が異なるため、同じ条件で比較します</span>
            </li>
            <li className="flex gap-2">
              <span className="font-black">2.</span>
              <span><strong>室内機の形を検討する</strong> — ダイキンは、壁掛形が業務用エアコンの中で設置費用を最も抑えられるとしています（設置できる場所かは現地調査で確認します）</span>
            </li>
            <li className="flex gap-2">
              <span className="font-black">3.</span>
              <span><strong>補助金・税制優遇を活用する</strong> — 国の省エネ・非化石転換補助金（設備単位型）の補助率は、補助対象経費の1/3以内（GX設備単位型トップ性能枠の更新は1/2以内）です（SIIの4次公募の公募要領・2026年11月4日確認）。自治体の補助は上の「使える補助金・助成金」をご覧ください</span>
            </li>
            <li className="flex gap-2">
              <span className="font-black">4.</span>
              <span><strong>必要台数・馬力を正確に計算する</strong> — 過剰な能力にならないよう、専門家の助言を受けることをおすすめします</span>
            </li>
            <li className="flex gap-2">
              <span className="font-black">5.</span>
              <span><strong>リースや分割払いを活用する</strong> — 初期費用を分散し、資金繰りの負担を軽減できます</span>
            </li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white rounded-xl border border-gray-100 p-5">
                <h3 className="font-bold text-gray-800 text-sm mb-2">{f.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典：<a href={DAIKIN_URL} target="_blank" rel="noopener noreferrer" className="underline">ダイキン工業「業務用エアコンの価格相場は？工事費込みでいくらが目安？」</a>（{CHECKED}確認）
          </p>
        </section>

        <div className="text-center">
          <Link
            href="/ranking/"
            className="inline-block bg-[#1E40AF] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            業者ランキングを見る →
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
