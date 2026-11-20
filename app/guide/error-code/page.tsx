import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { DataTable, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

const CHECKED = "2026-11-20";
const SRC_LABEL = "ダイキン工業のエラーコード検索と三菱電機の取扱説明書";

const TITLE = "業務用エアコンのエラーコード｜ダイキン77件を集計（停止・運転継続・試運転時）と主なコードの意味";
const DESC =
  "業務用エアコンのリモコンに表示されるエラーコードについて、ダイキン公式のエラーコード検索（業務用・設備用エアコン）に掲載された77件を当サイトで集計し、運転が止まるもの・運転を続ける警報・試運転時の表示に分けました。主なコードの意味と想定要因、三菱電機の取扱説明書の案内（2026年11月20日確認）もご説明します。";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/error-code/" },
  title: TITLE,
  description: DESC,
};

const DK_ERR = "https://www.daikincc.com/errorcode/index.php";
const DK_ERR_REMOCON = "https://www.daikincc.com/errorcode/remocon/index.php";
const MEL_MANUAL =
  "https://dl.mitsubishielectric.co.jp/dl/ldg/wink/ssl/wink_doc/m_contents/wink/PAC_IB/rg79f008h02.pdf";

const summaryRows = [
  ["掲載コード数（「00」正常を除く）", "77件"],
  ["運転を続ける警報（説明に「運転は継続します」）", "7件（AF・CC・CE・CJ・P1・UC・UE）"],
  ["試運転（チェック運転・冷媒自動充てん運転）時の表示", "6件（F6・P2・P8・P9・PA・PE）"],
  ["上記以外（説明に「停止」と書かれたものは50件）", "64件"],
];

const letterRows = [
  ["A", "10件", "ドレン水位（A3）・ファンモータ（A6）・電源電圧（A8）など室内機の不具合"],
  ["C", "9件", "室内機のサーミスタ・センサー、基板間の通信"],
  ["E", "9件", "室外機の保護装置（E0）・高圧上昇（E3）・低圧低下（E4）・圧縮機の過電流（E5）など"],
  ["F", "2件", "吐出管温度の上昇（F3）、試運転時の冷媒過充てん（F6）"],
  ["H", "4件", "圧力スイッチ・ファンモータ・外気サーミスタ"],
  ["J", "10件", "室外機の圧力センサー・サーミスタ"],
  ["L", "7件", "インバータ基板・インバータ圧縮機"],
  ["M", "4件", "集中管理機器の通信・設定"],
  ["P", "9件", "電源の電圧不平衡（P1）・放熱フィン温度、試運転時の表示"],
  ["U", "13件", "冷媒循環量の不足（U0）・逆相/欠相（U1）・室内外やリモコンとの通信（U4・U5）など"],
];

const codeRows = [
  ["A3", "ドレンパン内の水位が上がり、フロートスイッチが作動して停止", "ドレンパンの汚れ・ドレンポンプの不具合・排水管の詰まり・電圧不足など"],
  ["A6", "ファンモータの不具合で停止", "ファンモータやハーネス・コネクタの不具合、ファンに異物が絡まっている"],
  ["E1", "室内機と室外機の間の通信が正常でなく停止", "電圧の瞬間低下・瞬時停電・基板の不具合・ノイズなど"],
  ["E3", "運転中に高圧圧力が上がりすぎて停止", "冷媒系統の不具合（過充てん・詰まり）・閉鎖弁が閉じている。冷房時は室外機のショートサーキットや室外熱交換器の目詰まり・汚れも"],
  ["E4", "運転中に低圧圧力が下がりすぎて停止", "冷媒系統の不具合（冷媒不足・詰まり）・電子膨張弁や圧力スイッチの不具合など"],
  ["E5", "圧縮機の過電流で停止", "圧縮機の不具合・起動時の均圧不足・閉鎖弁が閉じている・インバータ基板の不具合"],
  ["U0", "システムの冷媒循環量が不足", "冷媒不足・詰まり・閉鎖弁の開け忘れ・センサーの不具合・冷媒配管の誤接続"],
  ["U1", "三相電源の逆相または欠相を検知して停止", "電源の逆相・欠相・電圧の不平衡・ブレーカの不具合など"],
  ["U4", "室内機と室外機の間の通信不具合で停止", "室内外の基板・連絡線の配線接続部の不具合・ノイズなど"],
  ["U5", "室内機とワイヤードリモコンの間の通信不具合で停止", "基板とリモコン間の配線の不備・リモコンの不具合・ノイズなど"],
];

const causeRows = [
  ["ノイズ等の外的要因", "15件"],
  ["閉鎖弁が閉じている・開け忘れ", "10件"],
  ["電圧・電源（瞬間低下・停電・不平衡など）", "6件"],
  ["室外機・室内機のショートサーキット、熱交換器の目詰まり・汚れ", "5件（E0・E3・E6・F3・P3）"],
  ["冷媒系統の不具合（不足・過充てん・詰まり）", "5件（E0・E3・E4・F3・U0）"],
];

const faqs = [
  {
    q: "エラーコードが出たら、まず何をすればよいですか？",
    a: "三菱電機の取扱説明書は、リモコンにエラーコードが表示されたときは空調機に障害が発生して運転を継続できずに停止している状態とし、自分では絶対に修理せず、電源を切って購入した販売店に製品名とリモコンの表示内容を連絡するよう案内しています。ダイキンのエラーコード検索も、ページの内容をもとに分解や修理をして生じたトラブルについては責任を負わないとしています。",
  },
  {
    q: "ブレーカーが落ちたら、すぐに入れ直してよいですか？",
    a: "ダイキンは、ブレーカーや漏電遮断機が作動する場合はすぐに再投入せず、機器の絶縁点検を行って問題がないことを確認するよう注意しています。絶縁点検をせずに再投入すると機器が損傷するおそれがあるとしています。",
  },
  {
    q: "ダイキンと三菱電機で同じコードは同じ意味ですか？",
    a: "同じとは限りません。コードの体系はメーカーごとに異なり、ダイキンのエラーコード検索も、機種により内容が若干異なる場合があると注記しています。お使いのメーカーの検索ページや取扱説明書で確認し、販売店に伝える際は形名とコードをそのまま伝えてください。",
  },
];

const sources = [
  { label: "ダイキン工業 エラーコード検索（業務用・設備用エアコン）", url: DK_ERR },
  { label: "ダイキン工業 エラーコードの表示方法", url: DK_ERR_REMOCON },
  { label: "三菱電機 パッケージエアコン 室内ユニット取扱説明書「その他の表示・点滅について」「故障かな？と思ったら」", url: MEL_MANUAL },
];

export default function ErrorCodePage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ガイド" }, { label: "業務用エアコンのエラーコード" }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコンのエラーコード｜表示されたときの対応と主なコードの意味
        </h1>
        <UpdatedNote checked={CHECKED} label={SRC_LABEL} />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            業務用エアコンのエラーコードは、機器が正常に動作しなかったときや故障が発生したときに、リモコンに表示されるコードです。多くは運転を止めて知らせるもので、利用者が自分で直すことは想定されていません。三菱電機は、電源を切り、販売店に製品名とリモコンの表示内容を連絡するよう案内しています。
            ダイキンのエラーコード検索（業務用・設備用エアコン）に掲載された77件を当サイトで集計すると、運転を続ける警報は7件、試運転時の表示は6件で、残る64件は不具合や保護装置の作動を示すものでした。メーカーごとにコードの体系が異なるため、意味はお使いのメーカーの案内で確認してください。
          </p>
        </div>

        <DataTable
          caption="ダイキンのエラーコード77件の内訳（当サイトの集計）"
          head={["区分", "件数"]}
          rows={summaryRows}
          note="ダイキン工業「エラーコード検索」で「業務用・設備用エアコン」を選んだときに表示されるコード（「00」＝正常を除く77件）を、各コードの説明文の記載で当サイトが分類しました。2026年11月20日確認。"
        />

        <DataTable
          caption="先頭の英字別の件数と主な内容"
          head={["先頭の英字", "件数", "主な内容（ダイキンの説明より）"]}
          rows={letterRows}
          note="当サイトが先頭の英字ごとに件数を数え、ダイキンの説明文から主な内容をまとめました。英字ごとの区分はダイキンが定義として示したものではありません。"
        />

        <DataTable
          caption="主なエラーコードの意味と想定要因（ダイキン）"
          head={["コード", "内容", "想定される要因（抜粋）"]}
          rows={codeRows}
          note="ダイキン工業「エラーコード検索」（業務用・設備用エアコン）の説明と想定要因を当サイトが要約・抜粋しました。機種により内容が異なる場合があります。2026年11月20日確認。"
        />

        <DataTable
          caption="想定要因に挙げられた項目の件数（当サイトの集計）"
          head={["想定要因に含まれる項目", "該当するコードの件数"]}
          rows={causeRows}
          note="77件の想定要因の記載に各項目が含まれるコードの件数を当サイトが数えました。1つのコードが複数の項目に該当する場合があります。"
        />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">販売店・修理窓口に伝えること</h2>
          <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>リモコンに表示されたエラーコード（英数字をそのまま）</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>室内機・室外機の形名と製造番号（三菱電機の MAスマートリモコンでは、異常時の画面に異常コード・冷媒アドレス・形名・製造番号が表示されます。形名・製造番号はあらかじめ入力されている場合に表示）</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>冷房・暖房のどちらの運転中に止まったか、ブレーカーが作動したか</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            エラーコードが出ていないのに冷えない場合の確認事項は
            <Link href="/guide/not-cooling/" className="text-[#1E40AF] underline">業務用エアコンが冷えないときの確認事項</Link>
            、修理の依頼先と料金の内訳は
            <Link href="/guide/repair/" className="text-[#1E40AF] underline">業務用エアコンの修理業者</Link>
            、冷媒の漏えいが分かったときの義務は
            <Link href="/guide/fron-law/" className="text-[#1E40AF] underline">フロン排出抑制法と業務用エアコン</Link>
            、工事直後の試運転で出るコードは
            <Link href="/guide/test-run/" className="text-[#1E40AF] underline">業務用エアコンの試運転</Link>
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
