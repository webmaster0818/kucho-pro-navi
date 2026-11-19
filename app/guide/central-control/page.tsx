import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { DataTable, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

const CHECKED = "2026-11-20";
const SRC_LABEL = "ダイキン工業の公式ページ（インテリジェントタッチマネージャー・DK-CONNECT・エアネットサービスシステム）";

const TITLE = "空調管理システムとは｜集中管理盤・クラウド管理・遠隔監視の違い（ダイキンの3サービスで比較）";
const DESC =
  "業務用エアコンの空調管理システムを、現地に置く集中管理盤・クラウドでの設備管理・メーカーの遠隔監視の3つに分け、ダイキンのインテリジェントタッチマネージャー・DK-CONNECT・エアネットサービスシステムの公式ページ（2026年11月20日確認）で、できること・フロン排出抑制法の点検への対応を比較しました。";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/central-control/" },
  title: TITLE,
  description: DESC,
};

const DK_ITM = "https://www.ac.daikin.co.jp/i-touchmanager";
const DK_DKC = "https://www.ac.daikin.co.jp/solution/dkconnect";
const DK_AIRNET = "https://www.daikincc.com/fcs/service/airnet/";

const compareRows = [
  [
    "仕組み",
    "建物に設置する総合監視盤（DCM601C1）。空調・給湯・照明など建物内の設備を統合管理",
    "IoTを活用した設備管理サービス。スマートフォン・パソコン・タブレットから空調機などを操作・管理し、運転データをクラウドに蓄積",
    "空調機とダイキンをクラウドでつなぎ、運転状態を24時間365日遠隔監視するサービス",
  ],
  [
    "主な機能",
    "集中管理・スケジュール管理・テナントごとの空調料金計算・電力デマンド制御・エネルギーの見える化",
    "遠隔からの操作による管理の手間の軽減・トラブル時のアフターサービス",
    "故障予知・シーズン前の遠隔点検・遠隔復旧・遠隔応急運転・緊急出動（24時間365日）・省エネ運用サポート",
  ],
  [
    "異常時の通知",
    "異常の発生を電子メールで知らせる。運転・異常履歴を記録",
    "—",
    "異常発生時にメールで知らせる（遠隔みまもりプランでは、メールのURLから利用者が応急運転を設定）",
  ],
  [
    "フロン排出抑制法の点検",
    "—",
    "—",
    "有資格のサービスエンジニアによる定期点検を無料で実施（遠隔みまもりプランは別途費用）。冷媒漏えい検知のメール通知・漏えい有無の自動診断の記録・点検記録簿の自動作成で簡易点検を支援",
  ],
  [
    "他の設備との連携",
    "セントラル空調・業務用マルチエアコンの混在管理、調湿・換気、給湯機、DALI対応照明・無線式センサー",
    "空調機などの建物設備",
    "現地の計量器やセンサーデータを取り込む場合は別途有償の工事・試運転が必要",
  ],
];

const faqs = [
  {
    q: "空調管理システムを入れると、フロン排出抑制法の簡易点検は不要になりますか？",
    a: "ダイキンのエアネットサービスシステムは、冷媒漏えいの検知をメールで知らせ、漏えいの有無を自動診断して記録・保管し、点検記録簿を自動で作るなど、利用者が行う簡易点検の負担を減らすサービスとして案内されています。点検と記録の義務は機器の管理者にあるため、契約するサービスで何が点検として扱われるかを事前に確認してください。",
  },
  {
    q: "遠隔監視で、故障したエアコンをその場で直せますか？",
    a: "ダイキンのエアネットサービスシステムでは、業務用マルチエアコンの対象機種に限り、異常発生と同時にリモコンリセットまたはマイコンリセットを自動で行う遠隔復旧と、遠隔からの応急運転の設定ができるとしています。すべての異常・故障に対応できるものではなく、応急運転中は空調能力が下がり、7日間で自動解除されるため修理対応が必要です。",
  },
  {
    q: "店舗・オフィス用エアコンでも使えますか？",
    a: "サービスと機能ごとに対象機種が異なります。エアネットサービスシステムのシーズン前遠隔点検・遠隔復旧・遠隔応急運転PLUSは業務用マルチエアコンのみ対応と表示されています。契約するバージョンによって対応機能が異なるとも注記されているため、導入する機種で使える機能をダイキンに確認してください。",
  },
];

const sources = [
  { label: "ダイキン工業 インテリジェント タッチ マネージャー（DCM601C1）", url: DK_ITM },
  { label: "ダイキン工業 IoTを活用した設備管理サービス DK-CONNECT", url: DK_DKC },
  { label: "ダイキン工業 エアネットサービスシステム（業務用エアコン遠隔監視サービス）", url: DK_AIRNET },
];

export default function CentralControlPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ガイド" }, { label: "空調管理システムとは" }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          空調管理システムとは｜集中管理盤・クラウド管理・遠隔監視の違い
        </h1>
        <UpdatedNote checked={CHECKED} label={SRC_LABEL} />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            業務用エアコンの空調管理システムは、複数の空調機の運転・スケジュール・異常をまとめて管理する仕組みです。ダイキンの製品・サービスでは、建物に設置する総合監視盤（インテリジェントタッチマネージャー）、スマートフォンやパソコンから操作するクラウドの設備管理（DK-CONNECT）、メーカーが24時間365日監視する遠隔監視（エアネットサービスシステム）の3種類に分かれます。
            テナントごとの空調料金計算やデマンド制御が目的なら集中管理盤、拠点が離れていて遠隔から操作したいならクラウド管理、故障予知や法定点検の支援まで任せたいなら遠隔監視が、それぞれの案内内容に沿った選び方です。
          </p>
        </div>

        <DataTable
          caption="ダイキンの空調管理システム3種類の比較"
          head={["項目", "インテリジェントタッチマネージャー（集中管理盤）", "DK-CONNECT（クラウド管理）", "エアネットサービスシステム（遠隔監視）"]}
          rows={compareRows}
          note="ダイキン工業の各製品・サービスの公式ページの記載を、当サイトが項目ごとに整理しました。「—」は確認したページに該当する記載がない項目です。並びは順位ではありません。対応機能は機種・契約内容・バージョンで異なります。2026年11月20日確認。"
        />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">導入前に確認すること</h2>
          <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>管理したい空調機の台数・系統と、使いたい機能が対象機種で使えるか</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>テナントごとの料金按分やデマンド制御が必要か（集中管理盤の機能）</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>フロン排出抑制法の点検・記録をどこまでサービスで支援してもらうか</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>計量器・センサーの取り込みなど、別途の工事費用が必要になる項目</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            点検・記録の義務は
            <Link href="/guide/fron-law/" className="text-[#1E40AF] underline">フロン排出抑制法と業務用エアコン</Link>
            、国等の調達で求められる常時監視システムの要件は
            <Link href="/guide/green-purchasing/" className="text-[#1E40AF] underline">グリーン購入法と業務用エアコン</Link>
            、リモコンに表示される異常の意味は
            <Link href="/guide/error-code/" className="text-[#1E40AF] underline">業務用エアコンのエラーコード</Link>
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
