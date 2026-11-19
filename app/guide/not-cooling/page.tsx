import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { DataTable, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

const CHECKED = "2026-11-19";
const SRC_LABEL = "ダイキン・三菱電機の公式ページと取扱説明書";

const TITLE = "業務用エアコンが冷えないときの確認事項｜修理を呼ぶ前にメーカーが挙げる6項目";
const DESC =
  "業務用エアコン（店舗・オフィス用エアコン）が冷えないときに、修理を依頼する前に確認できる項目を、三菱電機のパッケージエアコン取扱説明書「故障かな？と思ったら」とダイキンの公式ページ（2026年11月19日確認）から整理しました。フィルター・設定温度・室外機の周囲・窓やドア・再運転直後・エラーコードの6項目です。";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/not-cooling/" },
  title: TITLE,
  description: DESC,
};

const MEL_MANUAL =
  "https://dl.mitsubishielectric.co.jp/dl/ldg/wink/ssl/wink_doc/m_contents/wink/PAC_IB/rg79f008h02.pdf";

const checkRows = [
  [
    "フィルターの汚れ・目詰まり",
    "「よく冷えない」の最初の項目。フィルターが汚れて目詰まりし、風量が低下しているためとして清掃を案内",
    "目詰まりすると風量が低下して適正能力が発揮できず、冷えない・暖まらないことがあると案内。目安として月1回のフィルター掃除を推奨",
  ],
  [
    "設定温度",
    "温度調節を確認して、設定温度を調節するよう案内",
    "—",
  ],
  [
    "室外機の周囲",
    "室外ユニットの周囲空間を広くあけ、吹出し口・吸込み口が塞がれていないか確認するよう案内",
    "吹出口の近くに障害物があると、吹き出した空気を再び吸い込み、冷暖房効果が弱まると案内。確保すべき空きスペースは機種ごとに据付説明書に記載",
  ],
  [
    "窓・ドア",
    "窓やドアが開いていないか確認するよう案内",
    "—",
  ],
  [
    "停止直後の再運転",
    "停止後すぐに運転ボタンを押しても、エアコンを保護するため約3分間は動かないと案内",
    "—",
  ],
  [
    "リモコンのエラーコード",
    "障害が発生して停止している状態。自分では修理せず、電源を切って販売店に製品名とリモコンの表示内容を連絡するよう案内",
    "—",
  ],
];

const filterRows = [
  ["三菱電機（天井カセット形など PL-ZRP・EA3形ほか）", "ワイヤードリモコンの「フィルター清掃」表示：運転2,500時間で表示"],
  ["三菱電機（厨房用 PC-RP・HA11形）", "1週間（100時間）ごとにフィルターを点検し、油滴が滴下する前・目詰まりする前に交換（使い捨てフィルター）"],
  ["ダイキン（店舗・オフィスエアコン）", "1年間清掃不要の「ロングライフフィルター」、4年間清掃不要の「超ロングライフフィルター」などがあるが、汚れ具合は設置環境で大きく異なり、清掃サイクルは短いほどよいと案内"],
];

const faqs = [
  {
    q: "業務用エアコンが冷えないとき、最初に何を確認すればよいですか？",
    a: "三菱電機の取扱説明書は、「よく冷えない」ときの最初の確認項目としてフィルターの清掃を挙げています。ダイキンも、フィルターが目詰まりすると風量が低下し、冷えない・暖まらないことがあると案内しています。次に、設定温度、室外機の吹出し口・吸込み口の周りに物が置かれていないか、窓やドアが開いていないかを確認してください。",
  },
  {
    q: "フィルターはどのくらいの頻度で掃除すればよいですか？",
    a: "ダイキンのお役立ち情報（業務用エアコンの水漏れの記事）は、目安として月1回のフィルター掃除を推奨しています。三菱電機の天井カセット形などは、運転2,500時間でリモコンに「フィルター清掃」が表示されます。油煙の多い厨房では、三菱電機は厨房用機種のフィルターを1週間（100時間）ごとに点検するよう案内しています。",
  },
  {
    q: "リモコンにエラーコードが出ています。自分で直せますか？",
    a: "三菱電機の取扱説明書は、エラーコードが表示されたときは空調機に障害が発生して停止している状態とし、自分では絶対に修理せず、電源を切って販売店に製品名とリモコンの表示内容を連絡するよう案内しています。",
  },
  {
    q: "確認しても冷えない場合はどうすればよいですか？",
    a: "購入した販売店・施工業者に修理を依頼します。三菱電機は、購入先に依頼できない場合はメーカーの修理窓口に問い合わせるよう案内しています。依頼時に伝える内容は修理の依頼先のガイドにまとめています。冷媒の漏えいが疑われる場合の管理者の点検義務は、フロン排出抑制法のガイドにまとめています。",
  },
];

const sources = [
  { label: "三菱電機 パッケージエアコン 室内ユニット取扱説明書（PL-ZRP・EA3形ほか、冷媒R410A/R32対応）「故障かな？と思ったら」「フィルター清掃時期」", url: MEL_MANUAL },
  { label: "ダイキン工業 店舗・オフィスエアコン スカイエア「上手な使い方」", url: "https://www.ac.daikin.co.jp/shopoffice/info/better" },
  { label: "ダイキン工業 お役立ち情報「業務用エアコンの水漏れ原因とは？」（フィルター掃除の目安）", url: "https://www.ac.daikin.co.jp/customercenter/useful/article/55" },
];

export default function NotCoolingPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ガイド" }, { label: "業務用エアコンが冷えないとき" }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコンが冷えないとき｜修理を依頼する前に確認する6項目
        </h1>
        <UpdatedNote checked={CHECKED} label={SRC_LABEL} />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            業務用エアコンが冷えないとき、修理を依頼する前に確認できる項目があります。三菱電機のパッケージエアコン取扱説明書は「よく冷えない。よく暖まらない。」の項目で、フィルターの清掃、設定温度、室外ユニットの周囲、窓やドアの4点を挙げています。
            ダイキンも、フィルターの目詰まりで風量が低下すると冷えないことがあり、室外機の吹出口の近くに障害物があると冷暖房効果が弱まると案内しています。
            以下の表は、2社の案内を項目ごとに並べたものです。確認しても改善しない場合や、リモコンにエラーコードが表示されている場合は、購入した販売店・施工業者に連絡してください。
          </p>
        </div>

        <DataTable
          caption="冷えないときの確認項目（メーカー2社の案内）"
          head={["確認項目", "三菱電機（取扱説明書）", "ダイキン（公式ページ）"]}
          rows={checkRows}
          note="三菱電機は室内ユニット取扱説明書（PL-ZRP・EA3形ほか）の「故障かな？と思ったら」、ダイキンは「上手な使い方」と「業務用エアコンの水漏れ原因とは？」の記載を当サイトが項目ごとに整理しました。「—」は確認したページに該当する記載がない項目です。2026年11月19日確認。"
        />

        <DataTable
          caption="フィルター清掃の目安（メーカーの記載）"
          head={["メーカー・機種", "記載内容"]}
          rows={filterRows}
          note="清掃・点検の目安は機種と設置環境で異なります。お使いの機種の取扱説明書で確認してください。"
        />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">確認しても冷えない場合</h2>
          <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>電源を切り、購入した販売店・施工業者に連絡します。三菱電機は、購入先に依頼できない場合はメーカーの修理窓口に問い合わせるよう案内しています。</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>連絡の際は、形名（室外ユニットは銘板に記載）、故障の状況、リモコンのエラー表示を伝えると、手配が進めやすくなります。</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            修理の依頼先と伝える内容は
            <Link href="/guide/repair/" className="text-[#1E40AF] underline">業務用エアコンの修理の依頼先</Link>
            、室外機の置き場所の注意は
            <Link href="/guide/outdoor-unit-typhoon/" className="text-[#1E40AF] underline">室外機の台風・強風対策</Link>
            、管理者の点検義務は
            <Link href="/guide/fron-law/" className="text-[#1E40AF] underline">フロン排出抑制法のガイド</Link>
            、古い機種の修理と更新の判断は
            <Link href="/guide/r22/" className="text-[#1E40AF] underline">R22冷媒の業務用エアコン</Link>
            にまとめています。冷えても風が席に直接当たって不快な場合は、
            <Link href="/guide/windbreak/" className="text-[#1E40AF] underline">直接風を避ける機能（風除け）</Link>
            をご覧ください。リモコンにエラーコードが表示されている場合の意味は
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
