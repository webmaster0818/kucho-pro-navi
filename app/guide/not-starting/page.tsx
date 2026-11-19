import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { DataTable, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

const CHECKED = "2026-11-20";
const SRC_LABEL = "三菱電機の取扱説明書とダイキン工業のエラーコード検索";

const TITLE = "業務用エアコンがつかない・動かないとき｜故障ではない8つのケースと電源・通信のエラーコード";
const DESC =
  "業務用エアコンが運転ボタンを押してもつかない・動かないときに、故障ではない主なケース（停止後3分の保護、初期設定中、圧縮機の予熱、集中管理による操作禁止、タイマー、乾電池切れなど）を三菱電機の取扱説明書で、電源・通信が原因で止まるコードをダイキンのエラーコード検索で確認しました（2026年11月20日確認）。";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/not-starting/" },
  title: TITLE,
  description: DESC,
};

const MEL_MANUAL =
  "https://dl.mitsubishielectric.co.jp/dl/ldg/wink/ssl/wink_doc/m_contents/wink/PAC_IB/rg79f008h02.pdf";
const DK_ERR = "https://www.daikincc.com/errorcode/index.php";

const caseRows = [
  ["停止後すぐに運転ボタンを押したが動かない", "エアコンを保護するために止まっている", "約3分待つ"],
  ["リモコンに「Please Wait」と表示される", "初期設定（約3分）を行っている", "表示が消えるまで待つ"],
  ["寒冷時に電源を入れたが運転しない", "圧縮機の予熱中。外気温度が−20℃より低い条件では最大4時間運転できない場合がある（PUZ-HRP80〜160形）", "予熱が終わるまで待つ"],
  ["リモコンに操作禁止の表示が出ている", "集中管理側でリモコンからの運転・停止や運転モードの操作が禁止されている", "運転を指示したところ（集中管理の担当）に確認する"],
  ["押していないのに止まった・動き出した", "入タイマー・切タイマー、遠方コントロール、停電自動復帰の設定", "タイマーなどの設定を確認する"],
  ["ワイヤレスリモコンの表示が出ない・薄い", "乾電池の消耗", "乾電池を交換してリセットボタンを押す（＋−の向きも確認）"],
  ["ワイヤレスリモコンが故障した", "リモコンの故障・乾電池切れ", "室内ユニットの受光部付近の応急運転ボタンで冷房・暖房の運転ができる"],
  ["暖房にしたがすぐ風が出ない", "暖かい風を出すための準備中（暖房準備中の表示）", "そのまま待つ"],
];

const codeRows = [
  ["U1", "三相電源の逆相または欠相を検知して停止", "電源の逆相・欠相、電源電圧の不平衡、ブレーカの不具合など"],
  ["U2", "インバータ電源回路の不足電圧・過電圧を検知して停止", "電源電圧が正常範囲外（±10％）、電源の欠相、瞬時停電など"],
  ["E1", "室内機と室外機の間の通信状態が正常でなく停止", "電圧の瞬間低下、瞬時停電、基板の不具合、ノイズなど"],
  ["U4", "室内機と室外機の間の通信不具合で停止", "室内外の基板、室内外の連絡線の配線接続部の不具合、ノイズなど"],
  ["U5", "室内機とワイヤードリモコンの間の通信不具合で停止", "基板とリモコン間の配線の不備、リモコンの不具合、ノイズなど"],
  ["UE", "室内機と集中制御機器の間の通信不具合", "集中制御機器からは運転できないが、個別リモコンからの運転は継続する"],
];

const faqs = [
  {
    q: "ブレーカーが落ちていました。入れ直してよいですか？",
    a: "ダイキンは、ブレーカーや漏電遮断機が作動する場合はすぐに再投入せず、機器の絶縁点検を行って問題がないことを確認するよう注意しています。絶縁点検をせずに再投入すると機器が損傷するおそれがあるとしています。販売店や施工業者に連絡してください。",
  },
  {
    q: "リモコンの運転表示灯が点滅して動きません。",
    a: "三菱電機の取扱説明書では、ワイヤレスリモコン受光部の運転表示灯（緑）の点滅や、リモコンへのエラーコードの表示は、空調機に障害が発生して運転を継続できずに停止している状態としています。自分では絶対に修理せず、電源を切って販売店に製品名（とリモコンの表示内容）を連絡するよう案内しています。",
  },
  {
    q: "停止したあと、すぐに電源を切ってもよいですか？",
    a: "三菱電機の取扱説明書は、運転停止後すぐに電源を切らず、必ず5分以上待つよう求めています。水漏れや故障の原因となることがあるためです。",
  },
];

const sources = [
  { label: "三菱電機 パッケージエアコン 室内ユニット取扱説明書「故障かな？と思ったら」「応急運転のしかた」", url: MEL_MANUAL },
  { label: "ダイキン工業 エラーコード検索（業務用・設備用エアコン）", url: DK_ERR },
];

export default function NotStartingPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ガイド" }, { label: "業務用エアコンがつかないとき" }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコンがつかない・動かないときの確認事項
        </h1>
        <UpdatedNote checked={CHECKED} label={SRC_LABEL} />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            業務用エアコンがつかないときは、まずリモコンの表示を確認してください。停止直後の保護（約3分）、初期設定中（約3分）、寒冷時の圧縮機の予熱、集中管理による操作禁止、タイマーの設定、ワイヤレスリモコンの乾電池切れは、三菱電機の取扱説明書で「故障ではありません」とされているケースです。
            一方、エラーコードの表示や運転表示灯の点滅は、障害で停止している状態です。電源を切り、販売店に製品名と表示内容を連絡してください。ブレーカーが作動している場合は、絶縁点検をせずに入れ直さないようダイキンが注意しています。
          </p>
        </div>

        <DataTable
          caption="故障ではない主なケース（三菱電機の取扱説明書）"
          head={["症状", "理由", "対応"]}
          rows={caseRows}
          note="三菱電機 パッケージエアコン 室内ユニット取扱説明書（PL-ZRP・EA3形ほか）の「故障かな？と思ったら」「応急運転のしかた」より当サイトが8件を整理しました。機種により内容が異なります。2026年11月20日確認。"
        />

        <DataTable
          caption="電源・通信が原因で止まる主なエラーコード（ダイキン）"
          head={["コード", "内容", "想定される要因（抜粋）"]}
          rows={codeRows}
          note="ダイキン工業「エラーコード検索」（業務用・設備用エアコン）の77件のうち、説明に「通信」を含むコードは11件、電源・電圧（逆相・欠相・停電など）を含むコードは4件でした（当サイト集計）。表はその一部です。2026年11月20日確認。"
        />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">販売店に連絡する前に確認すること</h2>
          <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>リモコンの表示（エラーコード・操作禁止の表示・運転表示灯の点滅の有無）</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>ブレーカー・漏電遮断機が作動していないか（作動していても入れ直さない）</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>停電や瞬時停電の直後ではないか、同じ系統の他の室内機は動いているか</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>室内機・室外機の形名（銘板に記載）</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            動くが冷えない場合は
            <Link href="/guide/not-cooling/" className="text-[#1E40AF] underline">業務用エアコンが冷えないときの確認事項</Link>
            、コードの読み方は
            <Link href="/guide/error-code/" className="text-[#1E40AF] underline">業務用エアコンのエラーコード</Link>
            、修理の依頼先と料金の内訳は
            <Link href="/guide/repair/" className="text-[#1E40AF] underline">業務用エアコンの修理業者</Link>
            でご説明しています。
          </p>
        </section>

        <Faqs faqs={faqs} />

        <Sources sources={sources} checked={CHECKED} label={SRC_LABEL} />
      </main>
      <SiteFooter />
    </>
  );
}
