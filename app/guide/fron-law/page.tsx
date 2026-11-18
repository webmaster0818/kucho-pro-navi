import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { DataTable, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

const CHECKED = "2026-11-18";
const SRC_LABEL = "環境省・経済産業省 フロン排出抑制法ポータルサイトほか";

const TITLE = "フロン排出抑制法と業務用エアコン｜管理者の簡易点検・定期点検の頻度と記録の保存";
const DESC =
  "フロン類を使う業務用エアコンの管理者に求められる義務（3か月に1回以上の簡易点検、7.5kW以上の機器の定期点検、点検記録の保存、漏えい時の修理、算定漏えい量の報告、廃棄時の引渡し）を、環境省・経済産業省のフロン排出抑制法ポータルサイトとパンフレット（2026年11月18日確認）をもとに整理しました。";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/fron-law/" },
  title: TITLE,
  description: DESC,
};

const ENV = "https://www.env.go.jp/earth/furon/";

const duties: { heading: string; body: string }[] = [
  {
    heading: "簡易点検（すべての機器・3か月に1回以上）",
    body: "フロン類を使う業務用エアコンは、規模にかかわらず簡易点検の対象です。法律上の義務は3か月に1回以上で、環境省の「簡易点検の手引き」にある「1日に1回」などの頻度は推奨であり義務ではないと、ポータルサイトのFAQで説明されています。手引きでは、簡易点検は機器ユーザーが自ら行うことが求められており、専門業者に依頼することもできます。",
  },
  {
    heading: "定期点検（圧縮機の電動機の定格出力が7.5kW以上の機器）",
    body: "専門知識を有する者による定期点検が必要です。エアコンディショナーの場合、7.5kW以上50kW未満の機器は3年に1回以上、50kW以上の機器は1年に1回以上です（環境省パンフレット）。7.5kWは冷房能力ではなく圧縮機の電動機の定格出力で、室外機の銘板の「定格出力」「呼称出力」「電動機出力・圧縮機」の欄で確認します。",
  },
  {
    heading: "漏えいが見つかったときの修理",
    body: "漏えいが確認された場合は、できるだけ速やかに漏えい箇所を特定し、充塡を依頼する前に修理する必要があります。修理を行うまでは、原則として冷媒の充塡は禁止されています。",
  },
  {
    heading: "点検・整備の記録と保存",
    body: "点検・修理、冷媒の充塡・回収などの履歴を機器ごとに記録し、機器を廃棄して冷媒の引渡しを完了した日から3年を経過するまで保存します。様式は自由で、紙でも電子媒体でも構いません。整備を行う業者から求められた場合は、記録を開示する必要があります。",
  },
  {
    heading: "算定漏えい量の報告（1,000t-CO2以上の場合）",
    body: "整備時に充塡回収業者から交付される充塡・回収証明書をもとに漏えい量を算定し、事業者全体で1,000t-CO2以上の漏えいがあった場合は、事業を所管する大臣に報告します。報告期間は毎年4月1日から7月31日までで、前年度の漏えい量を報告します。",
  },
  {
    heading: "廃棄・入れ替えのときのフロン類の引渡し",
    body: "業務用エアコンを廃棄するときは、都道府県知事の登録を受けた第一種フロン類充塡回収業者にフロン類を引き渡します。機器廃棄時の回収を確実にするため、令和元年の改正で、回収を行わない違反に対する直接罰などが導入されました（令和2年4月1日施行）。",
  },
];

const tableRows = [
  ["簡易点検", "すべての業務用エアコン", "3か月に1回以上"],
  ["定期点検", "7.5kW以上50kW未満の機器（大型店舗用エアコン、ビル用マルチエアコン、ガスヒートポンプエアコンなど）", "3年に1回以上"],
  ["定期点検", "50kW以上の機器（中央方式エアコンなど）", "1年に1回以上"],
  ["参考：冷蔵機器・冷凍機器", "7.5kW以上の機器（別置型ショーケース、冷凍冷蔵ユニットなど）", "1年に1回以上"],
];

const faqs = [
  {
    q: "小さな店舗の業務用エアコンも、フロン排出抑制法の対象ですか？",
    a: "冷媒にフロン類を使う業務用のエアコンは「第一種特定製品」として対象です。規模に関係なく3か月に1回以上の簡易点検が必要で、圧縮機の電動機の定格出力が7.5kW以上の機器はさらに定期点検が必要です。家庭用エアコンは、この法律に基づく回収その他の義務の対象ではありません（家電リサイクル法でフロン類の回収が義務付けられています）。",
  },
  {
    q: "定期点検が必要な「7.5kW」はどこで確認しますか？",
    a: "室外機の銘板の「定格出力」「呼称出力」「電動機出力・圧縮機」と書かれた欄です。同じ冷媒系統に圧縮機が複数ある場合は合算して判断し、定格出力が定められていないインバーター製品は最大出力で判断します。分からない場合は、メーカーや販売店に問い合わせるよう案内されています。",
  },
  {
    q: "R32などの冷媒を使う新しい機種も対象ですか？",
    a: "R32やR410AはHFC（フロン類）のため対象です。HFOなどフロン類以外の冷媒を使用した業務用エアコンは、フロン排出抑制法の対象外とFAQで説明されています。",
  },
  {
    q: "点検をしないと罰則はありますか？",
    a: "簡易点検など管理者の判断基準の遵守は法に基づく義務です。違反した場合は都道府県による指導・助言の対象となり、定期点検の対象機器を所有している場合は、勧告・公表・命令・罰則の対象となる場合があります。環境省パンフレットの罰則一覧では、7.5kW以上の機器を有する管理者の判断基準の遵守（16条）について50万円以下の罰金、算定漏えい量報告（19条）について10万円以下の過料が掲載されています。",
  },
  {
    q: "テナントで使うエアコンの管理者は誰になりますか？",
    a: "環境省のパンフレットでは、管理者は原則として製品の所有権を持つ企業・法人です。ただし、契約書などの書面で保守・修繕の責務を所有者以外が負うとされている場合は、その企業・法人が管理者になります。",
  },
];

const sources = [
  { label: "環境省・経済産業省 フロン排出抑制法ポータルサイト「機器の管理・廃棄 概要」", url: `${ENV}operator/isshu.html` },
  { label: "同「機器の点検」", url: `${ENV}operator/isshu_2.html` },
  { label: "同「点検・整備の記録」", url: `${ENV}operator/isshu_3.html` },
  { label: "同「漏えい量の算定・報告 概要」", url: `${ENV}operator/isshu_santei.html` },
  { label: "同「フロン排出抑制法の全体像」", url: `${ENV}gaiyo/gaiyo.html` },
  { label: "同「FAQ」（Q51〜Q58・Q67ほか）", url: `${ENV}faq/index.html` },
  { label: "環境省 フロン排出抑制法パンフレット（2025年3月版・点検頻度の表と罰則一覧）", url: `${ENV}files/int_01-16_202503.pdf` },
  { label: "環境省「業務用冷凍空調機器ユーザーによる簡易点検の手引き（業務用エアコン編）」", url: "https://www.env.go.jp/earth/airconditioner.pdf" },
];

const li = "flex items-start gap-2 text-sm text-gray-700 leading-relaxed";

export default function FronLawPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ガイド" }, { label: "フロン排出抑制法と業務用エアコン" }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          フロン排出抑制法と業務用エアコン｜管理者の点検・記録・廃棄の義務
        </h1>
        <UpdatedNote checked={CHECKED} label="環境省・経済産業省のページ" />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            冷媒にフロン類（R32・R410A・R22など）を使う業務用エアコンは、フロン排出抑制法の「第一種特定製品」にあたります。管理者には、すべての機器で3か月に1回以上の簡易点検、圧縮機の電動機の定格出力が7.5kW以上の機器では専門知識を有する者による定期点検（エアコンは50kW未満で3年に1回以上、50kW以上で1年に1回以上）が求められます。あわせて、点検・修理の記録を機器の廃棄後3年まで保存し、漏えいを見つけたら充塡の前に修理し、廃棄時は登録業者にフロン類を引き渡します。
          </p>
        </div>

        <DataTable
          caption="業務用エアコンの点検の種類と頻度"
          head={["点検", "対象", "頻度（法律上の義務）"]}
          rows={tableRows}
          note="環境省パンフレット「法律上必要な定期点検の頻度」とポータルサイト「機器の点検」・FAQ（2026年11月18日確認）より当サイトで整理。kWは圧縮機に用いられる原動機の定格出力（またはエンジンの出力）で、冷房能力のkWとは異なります。"
        />

        <h2 className="text-xl font-bold text-gray-800 mb-4">管理者に求められること</h2>
        <div className="space-y-4 mb-8">
          {duties.map((d) => (
            <section key={d.heading} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <h3 className="font-bold text-gray-900">{d.heading}</h3>
              <p className="text-sm text-gray-700 leading-relaxed mt-2">{d.body}</p>
            </section>
          ))}
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">点検の時期の数え方</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            ポータルサイトのFAQでは、最初の点検は、簡易点検なら3か月以内、定期点検なら1年または3年以内に行い、次の点検は前回の点検日が属する月の翌月1日から数えて定められた期間内に行うと説明されています。例として、6月3日に簡易点検をした場合、次回は9月中であればいつでもよいとされています。点検の義務は、機器の所有権がユーザーに移ってから発生します。フロン類を抜いて保管している機器は、点検は不要です。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">業者を選ぶときに確認したいこと</h2>
          <ul className="space-y-2">
            <li className={li}><span className="text-[#1E40AF] mt-0.5">•</span>入れ替え・撤去でフロン類を回収する業者が、都道府県の第一種フロン類充塡回収業者に登録されているか（環境省ポータルサイトの「業者名簿」から各都道府県の登録簿を確認できます）</li>
            <li className={li}><span className="text-[#1E40AF] mt-0.5">•</span>定期点検の対象機器（7.5kW以上）がある場合、保守契約に定期点検が含まれるか</li>
            <li className={li}><span className="text-[#1E40AF] mt-0.5">•</span>充塡・回収のたびに充塡証明書・回収証明書を受け取り、点検記録簿とあわせて保存できるか</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            業者のタイプと許可・登録の確認方法は
            <Link href="/ranking/" className="text-[#1E40AF] underline">業務用エアコン業者の選び方</Link>
            、古い冷媒R22を使う機器の扱いは
            <Link href="/guide/r22/" className="text-[#1E40AF] underline">R22冷媒の業務用エアコン</Link>
            、入れ替えの時期は
            <Link href="/guide/timing/" className="text-[#1E40AF] underline">発注の時期のガイド</Link>
            、業務用エアコンの区分（店舗・オフィス用／ビル用マルチなど）は
            <Link href="/guide/package-aircon/" className="text-[#1E40AF] underline">パッケージエアコンとは</Link>
            、定期点検の7.5kWと耐用年数の22kWの違いは
            <Link href="/guide/useful-life/" className="text-[#1E40AF] underline">業務用エアコンの耐用年数</Link>
            にまとめています。
          </p>
        </section>

        <Faqs faqs={faqs} />

        <Sources sources={sources} checked={CHECKED} label={SRC_LABEL} />
      </main>
      <SiteFooter />
    </>
  );
}
