import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { DataTable, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

const CHECKED = "2026-11-19";
const SRC_LABEL = "ダイキン・三菱電機の公式ページと取扱説明書";

const TITLE = "室外機の台風対策｜転倒・浸水したときの対処と強風の場所に置くときの注意（業務用エアコン）";
const DESC =
  "台風・強風で室外機が倒れた・浸水したときの対処と、事前にできる転倒防止策を、ダイキンの「災害時の困りごとと対処法」と三菱電機の店舗・事務所用パッケージエアコンのページ・取扱説明書（2026年11月19日確認）で整理しました。屋上など強風の場所に業務用エアコンの室外機を置くときの別売部品の案内も掲載しています。";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/outdoor-unit-typhoon/" },
  title: TITLE,
  description: DESC,
};

const DK_DISASTER = "https://www.daikin.co.jp/air/life/laboratory/disaster";
const MEL_RPFIT = "https://www.mitsubishielectric.co.jp/ldm/slim/outdoorunit/rpfit/";
const MEL_MANUAL =
  "https://dl.mitsubishielectric.co.jp/dl/ldg/wink/ssl/wink_doc/m_contents/wink/PAC_IB/rg79f008h02.pdf";

const afterRows = [
  [
    "室外機が倒れた・落下した・位置がずれた",
    "絶対に自分で起こさず、使っているエアコンの販売店へ連絡・相談する。電気が復旧していない状態では動作確認ができないため、復旧してから連絡する",
    "自分で起こすと冷媒配管に負荷がかかり、亀裂や穴から冷媒が漏洩する可能性がある。噴き出る冷媒はマイナスの温度になっていることもあり、触れると負傷につながることがある",
  ],
  [
    "倒れたままエアコンを使えるか",
    "倒れている状態での使用は控える",
    "正常に運転しているように見えても故障が発生している場合があり、倒れたまま使うと新たな故障の原因にもなる",
  ],
  [
    "室外機が浸水した",
    "すぐに使用を中止し、室内機の電源を抜くかブレーカーを切って、販売店（またはメーカー）へ連絡・相談する",
    "電気回路の部品に水が入ると、一度乾いても漏電や発火などが起きる可能性がある。泥などの不純物がモーターの不具合の原因になることもある",
  ],
];

const prepRows = [
  ["室外機の向き", "ダイキン", "設置スペースに融通が利く場合、地域の日頃の風向きを確認し、面積が広い室外機の正面・背面が風を受けない向きにする"],
  ["置き台", "ダイキン", "強風が吹く場所では、樹脂製の軽い置き台ではなくコンクリート製の重い置き台を勧める。置き台の下にゴム製の防振パッドを敷くと強風によるズレの防止にもなる"],
  ["屋上など強風が吹きつける場所", "三菱電機", "リプレースFitマルチ（店舗・事務所用マルチエアコン）の室外ユニットを設置する場合、別売のエアガイドの取り付けを求めている"],
  ["室外機の周囲", "ダイキン", "吹出口の近くに障害物があると吹き出した空気を再び吸い込み、冷暖房効果が弱まる。設置後は周辺に物を置かない。確保すべき空きスペースは機種ごとに据付説明書に記載"],
  ["海浜地区・積雪地区", "三菱電機", "塩分の多いところは使用を避けるか耐塩害／耐重塩害仕様の室外ユニット（受注品）、積雪の多いところは防雪ダクト・防雪フード（別売）を取り付ける"],
];

const faqs = [
  {
    q: "台風で室外機が倒れました。自分で起こしてもよいですか？",
    a: "ダイキンは、室外機が転倒した場合は絶対に自分で起こさず、使っているエアコンの販売店へ連絡・相談するよう案内しています。起こすときに冷媒配管に負荷がかかり、亀裂や穴から冷媒が漏洩する可能性があり、噴き出る冷媒はマイナスの温度になっていることもあるためです。停電している場合は、電気が復旧してから連絡します。",
  },
  {
    q: "大雨で室外機が水につかりました。乾けば使えますか？",
    a: "ダイキンは、浸水した場合はすぐに使用を中止し、室内機の電源を抜くかブレーカーを切って、販売店またはメーカーへ連絡・相談するよう案内しています。電気回路の部品に水が入ると、一度乾いても漏電や発火などが起きる可能性があるためです。",
  },
  {
    q: "業務用エアコンの室外機を屋上に置きます。強風への備えはありますか？",
    a: "三菱電機は、リプレースFitマルチの室外ユニットを屋上など強風が吹きつける場所に設置する場合、別売のエアガイドを取り付けるよう案内しています。ダイキンは、強風が吹く場所ではコンクリート製の重い置き台と防振パッドを勧めています。必要な部品や固定方法は機種と設置場所で異なるため、見積もりの際に施工業者へ設置場所の状況を伝えて確認してください。",
  },
  {
    q: "室外機が倒れたあと、修理はどこに依頼しますか？",
    a: "ダイキンは、使っているエアコンの販売店へ連絡・相談するよう案内しています。業務用エアコンの修理の依頼先と、連絡時に伝える内容は修理の依頼先のガイドにまとめています。",
  },
];

const sources = [
  { label: "ダイキン工業 空気の困りごとラボ「災害時の困りごとと対処法」（地震や台風、大雨による室外機トラブルと対処法）", url: DK_DISASTER },
  { label: "三菱電機 リプレースFitマルチ（店舗・事務所用マルチエアコン）※4", url: MEL_RPFIT },
  { label: "ダイキン工業 店舗・オフィスエアコン スカイエア「上手な使い方」（室外機のまわり）", url: "https://www.ac.daikin.co.jp/shopoffice/info/better" },
  { label: "三菱電機 パッケージエアコン 室内ユニット取扱説明書（PL-ZRP・EA3形ほか）「海浜地区・積雪地区における設置に関するご注意」", url: MEL_MANUAL },
];

export default function OutdoorUnitTyphoonPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ガイド" }, { label: "室外機の台風・強風対策" }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          室外機の台風対策｜倒れた・浸水したときの対処と強風の場所での設置
        </h1>
        <UpdatedNote checked={CHECKED} label={SRC_LABEL} />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            台風で室外機が倒れた場合は、自分で起こさずに販売店へ連絡します。ダイキンは、起こすときに冷媒配管に負荷がかかって冷媒が漏洩する可能性があること、倒れたまま使うと新たな故障の原因になることを理由に挙げています。浸水した場合は、すぐに使用を中止して電源を抜くかブレーカーを切り、販売店またはメーカーに連絡します。
            事前の備えとして、ダイキンは室外機の正面・背面が風を受けない向きとコンクリート製の重い置き台を勧め、三菱電機は屋上など強風が吹きつける場所に店舗・事務所用マルチエアコンの室外ユニットを置く場合に別売のエアガイドの取り付けを求めています。
            なお、ダイキンの災害時の案内はエアコン全般（家庭用を含む）を対象とした内容です。
          </p>
        </div>

        <DataTable
          caption="台風・大雨のあとの対処（ダイキンの案内）"
          head={["状況", "対処", "理由"]}
          rows={afterRows}
          note="ダイキン「災害時の困りごとと対処法」の記載を当サイトが整理しました。2026年11月19日確認。"
        />

        <DataTable
          caption="事前にできる備えと設置場所の注意"
          head={["項目", "出典", "メーカーの記載"]}
          rows={prepRows}
          note="各社の公式ページ・取扱説明書の記載による。必要な部品や固定方法は機種・設置場所で異なります。施工業者に確認してください。"
        />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">関連するガイド</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            台風のあとに冷えにくくなった場合の確認項目は
            <Link href="/guide/not-cooling/" className="text-[#1E40AF] underline">業務用エアコンが冷えないとき</Link>
            、修理の依頼先と伝える内容は
            <Link href="/guide/repair/" className="text-[#1E40AF] underline">業務用エアコンの修理の依頼先</Link>
            、冷媒が漏れた場合の管理者の義務は
            <Link href="/guide/fron-law/" className="text-[#1E40AF] underline">フロン排出抑制法のガイド</Link>
            、寒冷地・積雪地での機種選びは
            <Link href="/guide/cold-region/" className="text-[#1E40AF] underline">寒冷地の業務用エアコン</Link>
            、室外機の運転音と置き場所は
            <Link href="/guide/outdoor-unit-noise/" className="text-[#1E40AF] underline">室外機の騒音</Link>
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
