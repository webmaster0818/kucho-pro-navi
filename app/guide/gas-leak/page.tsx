import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { DataTable, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

const CHECKED = "2026-11-20";
const SRC_LABEL = "環境省の簡易点検の手引き・フロン排出抑制法FAQ、ダイキン工業・三菱電機の公式資料";

const TITLE = "業務用エアコンのガス漏れ（冷媒漏えい）｜見つけ方・漏れたときの対応と修理前の充塡の禁止";
const DESC =
  "業務用エアコンの冷媒（フロン類）のガス漏れについて、環境省の簡易点検の手引きにある点検項目、冷媒不足を想定要因に挙げるダイキンのエラーコード（当サイト集計）、漏れたときの換気と連絡、修理前の充塡の禁止と1回限りの応急充塡の条件を、公式・公的資料（2026年11月20日確認）をもとにご説明します。";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/gas-leak/" },
  title: TITLE,
  description: DESC,
};

const ENV_GUIDE = "https://www.env.go.jp/earth/airconditioner.pdf";
const ENV_FAQ = "https://www.env.go.jp/earth/furon/faq/index.html";
const DK_ERR = "https://www.daikincc.com/errorcode/index.php";
const DK_ENERGY = "https://www.ac.daikin.co.jp/shopoffice/products/energy_saving";
const MEL_MANUAL =
  "https://dl.mitsubishielectric.co.jp/dl/ldg/wink/ssl/wink_doc/m_contents/wink/PAC_IB/rg79f008h02.pdf";

const checkRows = [
  ["室外機", "異常振動・異常運転音（いつもと違う振動や音）", "1日1回以上（推奨）"],
  ["室外機", "機器と機器周辺（室外機の下など）の油のにじみ", "1日1回以上（推奨）"],
  ["室外機", "キズ、熱交換器の腐食・錆、配管の劣化", "1日1回以上（推奨）"],
  ["室内機", "熱交換器の霜付き・油のにじみ（グリルを外して見える場合）", "1日1回以上（推奨）"],
  ["使用中の状態", "「冷えが悪くなった」「エアコンがきかなくなった」", "気づいたとき"],
];

const codeRows = [
  ["U0", "システムの冷媒循環量が不足", "冷媒系統の不具合（冷媒不足・詰まり）、閉鎖弁の開け忘れ、センサーの不具合など"],
  ["E4", "運転中に低圧圧力が下がりすぎて停止", "冷媒系統の不具合（冷媒不足・詰まり）、低圧圧力スイッチ・センサーや電子膨張弁の不具合など"],
  ["F3", "圧縮機の吐出管温度が上がりすぎて停止", "冷媒系統の不具合（冷媒不足・詰まり）、吐出管サーミスタの不具合など"],
  ["E0", "室外機の何らかの保護装置が作動（一括表示）", "圧縮機の不具合、冷媒系統の不具合（冷媒不足・詰まり）、冷媒過充てんなど"],
  ["A0", "R32冷媒仕様の床置き形室内機では、冷媒漏えいセンサーが冷媒などのガスを検知", "自機の冷媒漏えい、同じ部屋の別の室内機からの漏えい、配管貫通部から入った室外の冷媒ガスなど（その他の機種では外部保護装置の作動）"],
];

const faqs = [
  {
    q: "ガス漏れに気づいたら、まず何をすればよいですか？",
    a: "三菱電機の取扱説明書は、万一冷媒が漏れたときはストーブなどの火を消し、戸を開けるなどして十分に換気したうえで、購入した販売店に連絡するよう案内しています。冷媒は空気より比重が重く室内では床面にたまりやすいため酸欠事故の原因になること、火気に触れると有毒ガスが発生することがあると注意しています。",
  },
  {
    q: "ガスを補充すれば、修理しなくても使えますか？",
    a: "フロン類を使う業務用エアコンでは、漏えいが確認された場合、原則として漏えい箇所を修理する前に冷媒を充塡することは禁止されています。環境省のFAQでは例外として、飲食物等の管理に支障が生じるなど人の健康を損なう事態等で応急的に充塡する必要があり、かつ漏えいを確認した日から60日以内に修理を行うことが確実なときに限り、1回だけ充塡できるとしています。",
  },
  {
    q: "簡易点検は自分で行ってよいですか？",
    a: "環境省の手引きでは、機器ユーザーが行う簡易点検は原則として目視で、安全で容易に目視できる場合に限るとしています。防護柵のない屋上にある室外機や、高い脚立を使わないとグリルを外せない室内機は、専門業者に点検を依頼するよう案内しています。室外機の外板は外さないよう注意されています。",
  },
  {
    q: "冷媒漏れを自動で見つける方法はありますか？",
    a: "ダイキンは、店舗・オフィスエアコンの室外機内蔵のセンサーで冷媒漏れを毎日監視する冷媒漏えい検知機能を案内しています。メールでの通知や簡易点検の自動化には、有償の「アシスネットサービス」などの契約が必要です。2022年8月のフロン排出抑制法の改正で、冷媒漏えい検知システムによる簡易点検の自動化が目視の簡易点検の代替方法として認められたと説明しています。",
  },
];

const sources = [
  { label: "環境省 業務用冷凍空調機器ユーザーによる簡易点検の手引き（業務用エアコン編）", url: ENV_GUIDE },
  { label: "環境省・経済産業省 フロン排出抑制法ポータルサイト FAQ（充塡のやむを得ない場合・充塡前の修理）", url: ENV_FAQ },
  { label: "ダイキン工業 エラーコード検索（業務用・設備用エアコン）", url: DK_ERR },
  { label: "ダイキン工業 店舗・オフィスエアコン ダイキンの省エネ（冷媒漏えい検知機能）", url: DK_ENERGY },
  { label: "三菱電機 パッケージエアコン 室内ユニット取扱説明書「冷媒（フロンガス）についてのご注意」", url: MEL_MANUAL },
];

export default function GasLeakPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ガイド" }, { label: "業務用エアコンのガス漏れ" }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコンのガス漏れ（冷媒漏えい）｜見つけ方と漏れたときの対応
        </h1>
        <UpdatedNote checked={CHECKED} label={SRC_LABEL} />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            業務用エアコンのガス漏れは、冷媒（多くはフロン類）が配管や熱交換器などから漏れる状態です。環境省の簡易点検の手引きでは、室外機の異常な振動・音、室外機や周辺の油のにじみ、熱交換器の腐食・錆、室内機の熱交換器の霜付きを確認し、異常があれば専門業者に連絡するよう案内しています。「冷えが悪くなった」ときも同様です。
            漏えいが確認された場合、修理の前に冷媒を補充することは原則として禁止されています。室内で漏れたときは、火気を消して換気し、販売店に連絡してください。
          </p>
        </div>

        <DataTable
          caption="ガス漏れを見つけるための簡易点検の項目"
          head={["点検する場所", "確認すること", "環境省の手引きの頻度"]}
          rows={checkRows}
          note="環境省「業務用冷凍空調機器ユーザーによる簡易点検の手引き（業務用エアコン編）」より当サイトが整理しました。1日1回以上は手引きの推奨頻度で、法律上の簡易点検の義務は3か月に1回以上です。安全で容易に目視できる場合に限ります。2026年11月20日確認。"
        />

        <DataTable
          caption="冷媒不足・冷媒漏えいを想定要因に挙げるダイキンのエラーコード"
          head={["コード", "内容", "想定される要因（抜粋）"]}
          rows={codeRows}
          note="ダイキン工業「エラーコード検索」（業務用・設備用エアコン）の77件のうち、説明または想定要因に「冷媒不足」「冷媒漏えい」を含むコードを当サイトが抜き出しました（冷媒不足4件・冷媒漏えいセンサーの検知1件。センサー自体の不具合を示すCHは除く）。これらのコードは冷媒不足以外の要因でも表示されます。2026年11月20日確認。"
        />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">漏えいが確認されたあとの流れ</h2>
          <ol className="space-y-2 text-sm text-gray-700 leading-relaxed list-decimal pl-5">
            <li>室内で漏れた場合は、火気を消して換気し、販売店・施工業者に連絡します（三菱電機 取扱説明書）。</li>
            <li>専門業者が漏えい箇所を特定し、修理します。修理の前の充塡は原則として禁止です。</li>
            <li>やむを得ず応急的に充塡する場合は、漏えいを確認した日から60日以内に修理を行うことが確実なときに限り、1回だけ認められます（環境省FAQ）。</li>
            <li>点検・修理・充塡の内容を機器ごとの点検記録簿に残します。</li>
          </ol>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            管理者の点検・記録・報告の義務は
            <Link href="/guide/fron-law/" className="text-[#1E40AF] underline">フロン排出抑制法と業務用エアコン</Link>
            、リモコンの表示の読み方は
            <Link href="/guide/error-code/" className="text-[#1E40AF] underline">業務用エアコンのエラーコード</Link>
            、修理の依頼先は
            <Link href="/guide/repair/" className="text-[#1E40AF] underline">業務用エアコンの修理業者</Link>
            でご説明しています。古いR22の機種で漏れた場合は
            <Link href="/guide/r22/" className="text-[#1E40AF] underline">R22冷媒の業務用エアコン</Link>
            もご覧ください。
          </p>
        </section>

        <Faqs faqs={faqs} />

        <Sources sources={sources} checked={CHECKED} label={SRC_LABEL} />
      </main>
      <SiteFooter />
    </>
  );
}
