import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  alternates: { canonical: "/ranking/" },
  title: "業務用エアコン業者のおすすめランキング【2026年10月】｜業者タイプの違いと許可の確認方法",
  description:
    `業務用エアコン業者のおすすめ${companies.length}社のランキングです。販売・施工の専門店、紹介・見積もりサービス、販売のみの通販の違いと、建設業許可・フロン類充塡回収業者登録の確認方法を公的機関の出典とともにご説明します。`,
};

const UPDATED = "2026年10月23日";
const CHECKED = "2026年10月23日";

const SRC = {
  daikin: { label: "ダイキン工業「業務用エアコンはどこで買うのが正解？失敗しない購入先の選び方を解説」", url: "https://www.ac.daikin.co.jp/customercenter/useful/article/54" },
  mlitPermit: { label: "国土交通省「建設業の許可とは」", url: "https://www.mlit.go.jp/totikensangyo/const/1_6_bt_000080.html" },
  mlitSearch: { label: "国土交通省「建設業者・宅建業者等企業情報検索システム」", url: "https://etsuran2.mlit.go.jp/TAKKEN/" },
  envMeibo: { label: "環境省 フロン排出抑制法ポータルサイト「業者名簿」（都道府県の第一種フロン類充塡回収業者登録簿）", url: "https://www.env.go.jp/earth/furon/operator/meibo.html" },
  envHaiki: { label: "環境省 フロン排出抑制法ポータルサイト「機器の廃棄」", url: "https://www.env.go.jp/earth/furon/operator/isshu_4.html" },
  envTenken: { label: "環境省「業務用冷凍空調機器ユーザーによる簡易点検の手引き（業務用エアコン編）」", url: "https://www.env.go.jp/earth/airconditioner.pdf" },
  envFaq: { label: "環境省 フロン排出抑制法ポータルサイト「FAQ」", url: "https://www.env.go.jp/earth/furon/faq/index.html" },
};

// 業者タイプ（companies.json の各社説明＝公式サイトで確認済みの内容から分類。順位は変えない）
const TYPE_PRO = "販売・施工の専門店";
const TYPE_MATCH = "紹介・見積もりサービス";
const companyType: Record<string, string> = {
  "aircon-frontier": TYPE_PRO,
  "kucho-expert": "情報サイト（窓口はエアコンフロンティア）",
  "aircon-sohonpo": TYPE_PRO,
  "aircon-sohonten": TYPE_PRO,
  "shin-kucho": TYPE_PRO,
  emeao: TYPE_MATCH,
  "denki-koujikouji-110": TYPE_MATCH,
  "seikatsu-110": TYPE_MATCH,
  "kurashi-no-market": TYPE_MATCH,
  mitsumoa: TYPE_MATCH,
  "aircon-center-ac": TYPE_PRO,
  "aircon-mart": TYPE_PRO,
  "acn-aircon": "リース",
  "aircon-no-mori": "通販（取付工事はオプションで手配）",
  "eco-topia": TYPE_PRO,
  "aircon-com": TYPE_PRO,
  "tenpos-dotcom": "通販（設置工事にも対応）",
  "kucho-center": "通販（販売のみ・工事は非対応）",
  "proni-imitsu": TYPE_MATCH,
};

const types = [
  {
    name: "販売・施工の専門店",
    fit: "機種の選定から取付工事・保守までを1社にまとめて任せたい方",
    note: "取り扱うメーカーや製品が限られる場合があります。施工を自社で行うか、指定工事店・提携工事店が行うかは業者ごとに異なります。",
    examples: "エアコンフロンティア、エアコン総本舗、エアコン総本店 ほか",
  },
  {
    name: "紹介・見積もりサービス",
    fit: "複数の業者の見積もりや対応を比べてから決めたい方",
    note: "実際の施工と保証は紹介先の業者が担います。業務用エアコンを扱う業者かどうか、紹介を受けた段階で確認が必要です。",
    examples: "EMEAO!、ミツモア、PRONIアイミツ ほか",
  },
  {
    name: "通販（販売のみ、または工事を別手配）",
    fit: "機種が決まっていて、本体価格を比べて購入したい方",
    note: "本体のみを購入した場合、設置工事は別に手配が必要です。不具合が起きた際に、製品と施工のどちらに原因があるかの責任区分が曖昧になるおそれがあります。",
    examples: "空調センター（販売のみ）、エアコンの森（取付はオプション）",
  },
];

const faqs = [
  {
    q: "業務用エアコンの業者は、どのタイプを選べばよいですか？",
    a: "機種選定から工事・保守までをまとめて任せたい場合は販売・施工の専門店、複数社の見積もりを比べたい場合は紹介・見積もりサービスが選択肢になります。本体だけを通販で購入する場合は、設置工事を別に手配する必要があり、ダイキンは不具合時に製品と工事の責任区分が曖昧になりトラブルの原因になりうるとしています。",
  },
  {
    q: "業者が建設業許可を持っているかは、どこで確認できますか？",
    a: "国土交通省の「建設業者・宅建業者等企業情報検索システム」で、許可の有無や許可の業種を確認できます。なお、建築一式工事以外で工事1件の請負代金が500万円未満（消費税を含む）の「軽微な建設工事」のみを請け負う場合は、建設業の許可は必ずしも必要ありません。",
  },
  {
    q: "古い業務用エアコンを撤去・入れ替えるとき、発注者に義務はありますか？",
    a: "あります。フロン類を使用した業務用エアコンは、フロン排出抑制法の「第一種特定製品」にあたり、廃棄する管理者は、費用負担も含め、都道府県知事の登録を受けた第一種フロン類充塡回収業者にフロン類を引き渡す必要があります。工事業者に引渡しを委託する場合は委託確認書を交付し、回収後に受け取る引取証明書とあわせて3年間保存します。",
  },
  {
    q: "業務用エアコンの使用中に、管理者が行う点検はありますか？",
    a: "環境省の手引きでは、すべての業務用冷凍空調機器について、機器ユーザーが日常的に行う簡易点検を四半期に1回以上行うよう定めています（専門業者に依頼することもできます）。一定規模（7.5kW）以上の機器は、専門業者など十分な知見を有する者による定期点検も必要です。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const ext = "text-[#1E40AF] underline hover:no-underline";

const rankMedals = ["", "", ""];

export default function RankingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "総合ランキング" }]} />

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          業務用エアコン業者のおすすめランキング【2026年10月】
        </h1>
        <p className="text-xs text-gray-500 mb-4">最終更新日：{UPDATED}</p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          業務用エアコンの業者は、大きく<strong>販売・施工の専門店</strong>、<strong>紹介・見積もりサービス</strong>、<strong>通販（販売のみ、または工事を別手配）</strong>の3タイプに分かれます。機種の選定から工事・保守まで1社に任せる場合は専門店、複数社を比べる場合は紹介・見積もりサービスが選択肢になります。当サイトの総合1位は、全国（離島除く）で指定工事店が下見から施工まで担当するエアコンフロンティアです。
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          依頼の前には、業者タイプにかかわらず、建設業許可の有無（国土交通省の検索システム）、フロン類を回収できる登録業者かどうか（都道府県の登録簿）、保証の内容と年数を確認してください。確認方法は<a href="#check" className={ext}>このページの後半</a>でご説明します。
        </p>
        <p className="text-gray-600 text-sm mb-8 leading-relaxed">
          順位は、価格・施工品質・対応速度・保証内容・実績等をもとに編集部が付けたもので（<Link href="/content-policy/" className={ext}>コンテンツポリシー</Link>）、個別の工事の料金や品質を保証するものではありません。
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">業者タイプ別の違い</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 bg-white">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 border-b">タイプ</th>
                  <th className="text-left p-3 border-b">向いている方</th>
                  <th className="text-left p-3 border-b">注意点</th>
                  <th className="text-left p-3 border-b">当サイトの掲載例</th>
                </tr>
              </thead>
              <tbody>
                {types.map((t) => (
                  <tr key={t.name} className="align-top">
                    <th scope="row" className="text-left p-3 border-b font-semibold whitespace-nowrap">{t.name}</th>
                    <td className="p-3 border-b">{t.fit}</td>
                    <td className="p-3 border-b">{t.note}</td>
                    <td className="p-3 border-b">{t.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            専門店と通販の比較は、<a href={SRC.daikin.url} className={ext} target="_blank" rel="noopener">{SRC.daikin.label}</a>の記載にもとづきます（{CHECKED}確認）。
          </p>
        </section>

        <div className="flex gap-4 mb-8">
          <Link
            href="/ranking/cheap/"
            className="flex-1 text-center bg-white border-2 border-[#1E40AF] text-[#1E40AF] py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors"
          >
            格安ランキング
          </Link>
          <Link
            href="/ranking/lease/"
            className="flex-1 text-center bg-white border-2 border-[#059669] text-[#059669] py-2 px-4 rounded-lg text-sm font-semibold hover:bg-green-50 transition-colors"
          >
            リースランキング
          </Link>
        </div>

        <div className="space-y-6">
          {companies.map((company, index) => (
            <div
              key={company.slug}
              className={`bg-white rounded-2xl shadow-sm border-2 p-6 ${
                index === 0
                  ? "border-[#F59E0B]"
                  : index === 1
                  ? "border-gray-300"
                  : index === 2
                  ? "border-orange-300"
                  : "border-gray-100"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex items-center gap-3 md:w-8">
                  <span className="text-2xl">
                    {index < 3 ? rankMedals[index] : `${index + 1}`}
                  </span>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{company.name}</h2>
                  <p className="text-xs text-gray-500 mb-1">タイプ：{companyType[company.slug] ?? "—"}</p>
                  <p className="text-[#1E40AF] text-sm font-medium mb-2">{company.tagline}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{company.description.slice(0, 100)}...</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {company.features.slice(0, 4).map((f) => (
                      <span
                        key={f}
                        className="bg-blue-50 text-[#1E40AF] text-xs font-medium px-2 py-1 rounded"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-500 mb-4">
                    <span> 平均費用: ¥{company.avgCost.toLocaleString()}〜</span>
                    <span> 対応エリア: {company.coverage}</span>
                  </div>
                  <Link
                    href={`/company/${company.slug}/`}
                    className="inline-block bg-[#1E40AF] hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg text-sm transition-colors"
                  >
                    詳しく見る →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-3">掲載{companies.length}社のタイプ・保証・対応エリア一覧</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 bg-white">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-2 border-b">順位</th>
                  <th className="text-left p-2 border-b">業者</th>
                  <th className="text-left p-2 border-b">タイプ</th>
                  <th className="text-left p-2 border-b">保証</th>
                  <th className="text-left p-2 border-b">対応エリア</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((c, i) => (
                  <tr key={c.slug} className="align-top">
                    <td className="p-2 border-b">{i + 1}</td>
                    <td className="p-2 border-b whitespace-nowrap">
                      <Link href={`/company/${c.slug}/`} className={ext}>{c.name}</Link>
                    </td>
                    <td className="p-2 border-b">{companyType[c.slug] ?? "—"}</td>
                    <td className="p-2 border-b">{c.warranty}</td>
                    <td className="p-2 border-b">{c.coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">保証・対応エリアは各社の公式サイトの記載をもとにしています。詳細と出典は各社のページをご覧ください。</p>
        </section>

        <section id="check" className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-3">依頼前に確認したい許可・登録</h2>
          <h3 className="font-bold text-gray-900 mt-4 mb-2">1. 建設業許可（国土交通省の検索システムで確認）</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            建設工事の完成を請け負うことを営業するには、建設業法第3条にもとづく建設業の許可が必要です。ただし、建築一式工事以外で工事1件の請負代金が500万円未満（消費税を含む）の「軽微な建設工事」のみを請け負う場合は、許可は必ずしも必要ありません。そのため、許可のない業者がただちに違法というわけではありませんが、許可の有無と業種は、<a href={SRC.mlitSearch.url} className={ext} target="_blank" rel="noopener">建設業者・宅建業者等企業情報検索システム</a>で会社名から確認できます。
          </p>
          <h3 className="font-bold text-gray-900 mt-4 mb-2">2. 第一種フロン類充塡回収業者の登録（都道府県の登録簿で確認）</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            フロン類を冷媒に使用する業務用エアコンは、フロン排出抑制法の「第一種特定製品」にあたります。フロン類の充塡・回収を業として行うには都道府県の登録が必要で、登録業者は、環境省のポータルサイトにまとめられた<a href={SRC.envMeibo.url} className={ext} target="_blank" rel="noopener">都道府県ごとの登録簿</a>で確認できます。
          </p>
          <h3 className="font-bold text-gray-900 mt-4 mb-2">3. 入れ替え・撤去時の書類（発注者に保存義務があります）</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            業務用エアコンを廃棄する管理者は、費用負担も含め、第一種フロン類充塡回収業者にフロン類を引き渡す必要があります。登録業者に直接引き渡す場合は回収依頼書を、登録のない設備業者などに引渡しを委託する場合は委託確認書を交付し、その写しを3年間保存します。回収後に交付される引取証明書も3年間の保存が必要です。入れ替え工事を依頼する際は、これらの書類を業者が用意できるかを見積もりの段階で確認してください。
          </p>
          <h3 className="font-bold text-gray-900 mt-4 mb-2">4. 設置後の点検</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            すべての業務用冷凍空調機器は、簡易点検を四半期に1回以上行うことが定められています（専門業者への依頼も可能です）。一定規模（7.5kW）以上の機器は、専門業者など十分な知見を有する者による定期点検も必要です。保守・点検まで依頼するかどうかも、業者選びの判断材料になります。
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-3">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2">Q. {f.q}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-bold text-gray-900 mb-2">出典（{CHECKED}確認）</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {Object.values(SRC).map((x) => (
              <li key={x.url}>
                <a href={x.url} className={ext} target="_blank" rel="noopener">{x.label}</a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
