import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { DataTable, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

const CHECKED = "2026-11-20";
const SRC_LABEL = "三菱電機の据付工事説明書とダイキン工業のエラーコード検索";

const TITLE = "業務用エアコンの試運転｜工事後に行う確認と手順、試運転で出るエラーコード（ダイキン8件）";
const DESC =
  "業務用エアコンの据付工事の最後に行う試運転について、三菱電機の据付工事説明書から試運転前の確認（気密試験・真空引き・絶縁抵抗・12時間前の通電）と試運転の手順を、ダイキンのエラーコード検索から試運転・チェック運転に関係するコード8件を整理しました（2026年11月20日確認）。";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/test-run/" },
  title: TITLE,
  description: DESC,
};

const MEL_OUTDOOR =
  "https://dl.mitsubishielectric.co.jp/dl/ldg/wink/ssl/wink_doc/m_contents/wink/PAC_IM/bh79d505k06.pdf";
const MEL_INDOOR =
  "https://dl.mitsubishielectric.co.jp/dl/ldg/wink/ssl/wink_doc/m_contents/wink/PAC_IM/rg79f002k09.pdf";
const DK_ERR = "https://www.daikincc.com/errorcode/index.php";

const beforeRows = [
  ["冷媒配管の気密試験", "窒素ガスで0.5MPa→1.5MPa→3.6MPaと段階的に加圧し、規定値で約1日放置して圧力が下がらなければ合格", "室外ユニット据付工事説明書"],
  ["真空引き（真空乾燥）", "真空ポンプで −0.1MPa に達してから1時間以上。不十分だと高圧の異常上昇・低圧の異常低下・冷凍機油の劣化などにつながる", "室外ユニット据付工事説明書"],
  ["ストップバルブ（液・ガス）", "真空乾燥のあとに全開にする。閉めたまま運転すると圧縮機や制御弁の損傷を招く", "室外ユニット据付工事説明書"],
  ["絶縁抵抗", "室外ユニットの電源端子（R・S・T）と大地間を500Vメガーで測り、1.0MΩ以上", "室内・室外ユニット据付工事説明書"],
  ["電源を入れる時期", "圧縮機保護のため、運転を開始する12時間以上前に電源を入れる", "室内・室外ユニット据付工事説明書"],
  ["配管・配線の再確認", "冷媒漏れ、各配線の緩み、極性の間違いがないか", "室内ユニット据付工事説明書"],
];

const stepRows = [
  ["1. 電源を入れる", "リモコンに「Please Wait」が約3分間表示される（システム立上げ中で、この間は操作できない）"],
  ["2. リモコンを試運転に切り換える", "サービスメニューから「試運転」→「試運転操作」を選ぶ"],
  ["3. 吹出温度を確認する", "冷房運転で冷風、暖房運転で温風が出ることを確認する"],
  ["4. 室外ユニットのファンを確認する", "外気の状態でファンが低速・停止・逆回転になることがあるが、異常ではない"],
  ["5. 試運転を終える", "ボタンで終了する。終了しない場合は2時間の切タイマーで自動的に止まる"],
];

const codeRows = [
  ["U3", "チェック運転（試運転）が未完了のため停止", "チェック運転を完了させないと運転できない"],
  ["F6", "チェック運転時に冷媒の過充てんを検知して停止", "冷媒過充てん・サーミスタの外れや不具合"],
  ["P2", "チェック運転が中止された（冷媒の循環を阻害する要因を検出）", "閉鎖弁が全開でない・追加充てん用ボンベのバルブが開いていない・室内機の吸込口や吹出口がふさがれている・室内温度が10℃未満・手順どおりでない"],
  ["UF", "個別運転タイプでは、チェック運転時の不具合で停止（機種シリーズで内容が異なる）", "室内機の配管接続・連絡配線の接続の不具合・閉鎖弁の開け忘れなど"],
  ["P8", "冷媒自動充てん運転が室内熱交換器の凍結防止のため停止", "再度、自動充てん運転を行う"],
  ["P9・PA・PE", "冷媒自動充てん運転時の表示（機器の不具合ではない）", "据付説明書の指示に従って作業する"],
];

const faqs = [
  {
    q: "試運転にはどのくらい時間がかかりますか？",
    a: "メーカーの説明書に所要時間の目安は書かれていません。三菱電機の室内ユニット据付工事説明書では、電源投入後のシステム立上げに約3分かかり、試運転は終了操作をしない場合2時間の切タイマーで自動的に止まるとしています。また、圧縮機保護のため運転開始の12時間以上前に電源を入れるよう求めているため、工事の日程は施工業者に確認してください。",
  },
  {
    q: "工事中の建物でエアコンを使ってもよいですか？",
    a: "三菱電機の据付工事説明書は、試運転以外での長時間の運転をやめるよう注意しています。建築中の現場などで長時間運転すると、ほこりやにおいが付着する場合があるためです。",
  },
  {
    q: "試運転のあと、何を受け取ればよいですか？",
    a: "三菱電機の据付工事説明書は、施工業者に対し、試運転で異常がないことを確認したうえで取扱説明書にそって使用方法やお手入れを説明し、据付工事説明書を取扱説明書と共にお客様で保管するよう依頼することを求めています。また、気密試験後の冷媒の充塡状況や漏えい検査結果を所定の記録用紙に記入し、所有者が管理するよう求めています。点検記録の扱いは業務用エアコンのフロン排出抑制法のページもご覧ください。",
  },
  {
    q: "試運転の直後に室外機から「カチカチ」と音がします。",
    a: "三菱電機の室外ユニット据付工事説明書（PUZ-ERMP・LA7シリーズ）では、電源投入直後の「カチ、カチ」という小さな音は電子膨張弁が開度合わせのために作動している音、圧縮機起動後の数秒〜数十秒の「カチャ、カチャ」「ビー」という音は起動直後の状態によるもので、いずれも異常ではないとしています。音が続く場合は施工業者に確認してください。",
  },
];

const sources = [
  { label: "三菱電機 室外ユニット据付工事説明書 PUZ-ERMP・LA7シリーズ（冷媒R32）「冷媒配管の気密試験方法」「据付後の確認」「試運転」", url: MEL_OUTDOOR },
  { label: "三菱電機 室内ユニット据付工事説明書 厨房用天吊形（冷媒R32）「据付工事後の確認」「試運転」", url: MEL_INDOOR },
  { label: "ダイキン工業 エラーコード検索（店舗・オフィスエアコン スカイエア）", url: DK_ERR },
];

export default function TestRunPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ガイド" }, { label: "業務用エアコンの試運転" }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコンの試運転｜工事後の確認と手順
        </h1>
        <UpdatedNote checked={CHECKED} label={SRC_LABEL} />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            試運転は、据付工事の最後に施工業者が行う運転確認です。三菱電機の据付工事説明書は「必ず実施してください」としており、その前に冷媒配管の気密試験・真空引き、絶縁抵抗の測定、運転開始12時間以上前の通電を求めています。
            試運転では冷房で冷風、暖房で温風が出ることを確かめ、異常がなければ使い方の説明と書類の引き渡しに進みます。
            ダイキンの機種では、試運転（チェック運転）が終わっていないと「U3」を表示して運転できません。
          </p>
        </div>

        <DataTable
          caption="試運転の前に施工業者が行う確認（三菱電機）"
          head={["項目", "内容", "記載のある説明書"]}
          rows={beforeRows}
          note="三菱電機 室外ユニット据付工事説明書（PUZ-ERMP・LA7シリーズ、冷媒R32）と室内ユニット据付工事説明書（厨房用天吊形、冷媒R32）より当サイトが整理しました。加圧する圧力などの値は機種・冷媒によって異なります。2026年11月20日確認。"
        />

        <DataTable
          caption="試運転の手順（三菱電機 室内ユニット据付工事説明書）"
          head={["手順", "内容"]}
          rows={stepRows}
          note="MAスマートリモコンを使う場合の手順です。室外ユニットの基板のスイッチからも試運転を開始・終了できます（室外ユニット据付工事説明書）。2026年11月20日確認。"
        />

        <DataTable
          caption="試運転・チェック運転に関係するエラーコード（ダイキン スカイエア）"
          head={["コード", "内容", "要因・対応（抜粋）"]}
          rows={codeRows}
          note="ダイキン工業「エラーコード検索」の店舗・オフィスエアコン（スカイエア）に掲載された77件（「00」正常を除く）のうち、説明に「試運転」または「チェック運転」を含むコードは8件でした（当サイト集計）。機種により内容が異なる場合があります。2026年11月20日確認。"
        />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">立ち会うときに確認しておくこと</h2>
          <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>冷房・暖房それぞれで風が出ているか、リモコンにエラーコードが出ていないか</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>使い方・お手入れ（フィルターなど）の説明を受けたか</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>取扱説明書と据付工事説明書を受け取ったか</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>冷媒の充塡状況や漏えい検査結果を記入した記録を受け取ったか</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            発注から工事までの流れは
            <Link href="/guide/timing/" className="text-[#1E40AF] underline">業務用エアコンの発注時期と工事が混む時期</Link>
            、コードの読み方は
            <Link href="/guide/error-code/" className="text-[#1E40AF] underline">業務用エアコンのエラーコード</Link>
            、点検記録の義務は
            <Link href="/guide/fron-law/" className="text-[#1E40AF] underline">フロン排出抑制法と業務用エアコン</Link>
            、修理の依頼先は
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
