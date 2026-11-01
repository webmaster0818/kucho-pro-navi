import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { DataTable, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

const TITLE = "業務用エアコンの更新専用機種と既設配管の再利用｜リプレースFitマルチほか各社の対応";
const DESC =
  "業務用エアコンの入れ替え（更新）で既設の冷媒配管・配線を使えるかについて、三菱電機「リプレースFitマルチ」（更新専用）、三菱重工の更新専用機、ダイキン・日立の既設配管の再利用、パナソニックの更新機選びの案内を、各社公式ページ（2026年11月1日確認）をもとにまとめました。";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/renewal-model/" },
  title: TITLE,
  description: DESC,
};

const MHI_BIZ = "https://www.mhi-mth.co.jp/business/air-conditioner-for-business/";

const makers = [
  {
    maker: "三菱電機",
    makerHref: "/maker/mitsubishi-electric/",
    name: "リプレースFitマルチ（店舗・事務所用マルチエアコン）",
    label: "更新専用",
    items: [
      "室外ユニット一覧で「更新専用」と表示されている店舗・事務所用マルチエアコン（同じ一覧のFitマルチは「新設専用」）",
      "入替工事の際、既設の配管を洗浄レスで利用できる。パイプシャフト内や天井裏の配管撤去・敷設などが不要になるため、短工期・コスト削減に貢献すると案内",
      "分岐管を含む既設配管の種類や耐圧によっては、配管を再利用できない場合がある",
      "総配管長300m（P224・P280形は150m）、最遠配管長150m（同80m）",
      "横吹き形のコンパクトな室外ユニットで、屋上設置でも手搬入できる（クレーンの手配や道路使用許可が不要）",
    ],
  },
  {
    maker: "三菱重工",
    makerHref: "/maker/mitsubishi-heavy/",
    name: "更新専用冷暖フリーマルチR-LXR4／更新専用標準床置ダクトASVRPシリーズ",
    label: "更新専用",
    items: [
      "店舗オフィス用エアコンのシリーズページから、更新専用機として「更新専用冷暖フリーマルチR-LXR4」（ビル用マルチ）と「更新専用標準床置ダクトASVRPシリーズ」（設備用）へリンクされている",
      "R-LXR4：既設機が標準マルチ（冷・暖切替）でも冷暖フリーマルチ（冷・暖同時）でも、既設冷媒配管を流用して更新できる。室外ユニットは8馬力シングルから組合せ30馬力まで全12機種",
      "ASVRPシリーズ：既設の流用が可能であれば、冷媒配管・配線の新設が難しい現場で工期を短くし、配管材料費や廃材処分費などの工事コストを削減できると案内。8・10・16・20馬力",
      "店舗オフィス用のハイパーインバータ・エクシードハイパーのページでも、リニューアルや増設時に既存配管を活かしやすいと案内されている",
    ],
  },
  {
    maker: "ダイキン",
    makerHref: "/maker/daikin/",
    name: "スカイエア（配線・配管の再利用）",
    label: "既設配管の再利用",
    items: [
      "すべての配管が再利用可能（ダイキン純正品の場合。腐食などで老朽化した配管は新設が必要）",
      "既設エアコンがGHPの場合も既設配管を再利用できる（必ず配管洗浄を行う）",
      "圧縮機の故障時も、冷媒回路の耐久性を強化して既設配管を洗浄レスで再利用できる。ポンプダウンできない場合は、既設配管の長さにより更新拡張ユニット（別売品）が必要",
      "配線は2線式・3線式の連絡配線方式に対応。既存の3線式はそのまま使え、2線式は内外配線2線化キット（別売品）で対応",
      "特に便利な場合として、配管が埋め込まれているなど新規配管が難しい、室外機が屋上や壁面にある、複数台を同時に更新する、を挙げている",
    ],
  },
  {
    maker: "日立",
    makerHref: "/maker/hitachi/",
    name: "店舗・オフィス用エアコン（リニューアルへの対応）",
    label: "既設配管・配線の利用",
    items: [
      "既設配管・配線を利用した「簡単リニューアル」を案内。洗浄レスで既設配管を使う場合の施工手順や注意事項を公式に掲載",
      "配管洗浄した場合は、新設と同じ配管長まで対応できる",
      "既設配線は3方式（B方式・e方式〈e-LINE〉・C方式）で利用できる",
      "寒さ知らず、寒さ知らずマルチ-mini、フレックスマルチ-miniリニューアル型は、室外ユニットのスイッチ設定が必要",
    ],
  },
  {
    maker: "パナソニック",
    makerHref: "/maker/panasonic/",
    name: "空調機器買い替え提案システム（P-SPEC）",
    label: "更新機の選定ツール",
    items: [
      "オフィス・店舗用エアコンの各ページにある「更新機を選ぶ」から、空調機器買い替え提案システム（P-SPEC）に進める",
      "既設機の配管を使えるかどうかの条件は、このページで確認した範囲では見つけられなかったため、ここには掲載していません",
    ],
  },
];

const compareRows = [
  ["三菱電機", "リプレースFitマルチ", "更新専用（マルチ）", "洗浄レスで利用可（配管の種類・耐圧によっては不可）"],
  ["三菱重工", "R-LXR4・ASVRPシリーズ", "更新専用（ビル用マルチ・設備用）", "既設冷媒配管を流用して更新"],
  ["ダイキン", "スカイエア", "通常機種で対応", "純正品の配管はすべて再利用可（老朽化した配管は新設）"],
  ["日立", "店舗・オフィス用", "通常機種で対応", "洗浄レスで利用可（施工手順・注意事項あり）"],
  ["パナソニック", "—", "更新機の選定ツールあり", "—（確認できた範囲では記載なし）"],
];

const faqs = [
  {
    q: "「更新専用」の機種とは何ですか？",
    a: "既設のエアコンからの入れ替えを前提にした機種です。三菱電機は店舗・事務所用マルチエアコンの「リプレースFitマルチ」を「更新専用」、「Fitマルチ」を「新設専用」と表示しています。三菱重工も、ビル用マルチの「更新専用冷暖フリーマルチR-LXR4」や設備用の「更新専用標準床置ダクトASVRPシリーズ」を掲載しています。",
  },
  {
    q: "更新専用でない機種では、既設配管は使えないのですか？",
    a: "使える場合があります。ダイキンはスカイエアについて「すべての配管が再利用可能」（ダイキン純正品の場合）、日立は洗浄レスで既設配管を利用できると案内しています。ただし、腐食などで老朽化した配管は新設が必要です。",
  },
  {
    q: "既設配管を使えるかどうかは、どうやって判断しますか？",
    a: "各社とも、配管の種類・耐圧・老朽化の状態によっては再利用できないとしています。配管の太さや長さ、既設機の冷媒も関係するため、業者の現地調査で判断してもらい、見積書に「既設配管利用」か「配管新設」かを明記してもらうと比較しやすくなります。",
  },
  {
    q: "東芝キヤリアの更新対応は掲載していますか？",
    a: "掲載していません。東芝キヤリアの公式サイトは2026年11月1日の確認時点でメンテナンス中（表示できない状態）だったため、今日確認できた5社のみを掲載しています。",
  },
];

const sources = [
  { label: "三菱電機 Mr.SLIM 室外ユニット（新設専用・更新専用の表示）", url: "https://www.mitsubishielectric.co.jp/ldm/slim/outdoorunit/" },
  { label: "三菱電機 リプレースFitマルチ（店舗・事務所用マルチエアコン）", url: "https://www.mitsubishielectric.co.jp/ldm/slim/outdoorunit/rpfit/" },
  { label: "三菱重工 ハイパーインバータ（高効率省エネタイプ）", url: `${MHI_BIZ}air-conditioner-for-office/hyper-inverter/` },
  { label: "三菱重工 更新専用冷暖フリーマルチR-LXR4", url: `${MHI_BIZ}multi-air-conditioner-for-building/cwfree-multi-r-lx4/` },
  { label: "三菱重工 更新専用標準床置ダクトASVRPシリーズ", url: `${MHI_BIZ}air-conditioner-for-factory/asvrp-series/` },
  { label: "ダイキン工業 ダイキンの施工（配線・配管の再利用）", url: "https://www.ac.daikin.co.jp/shopoffice/products/construction" },
  { label: "日立 リニューアルへの対応", url: "https://www.hitachi-gls.co.jp/products/office/outunit/renewal.html" },
  { label: "パナソニック XEPHY Premium（「更新機を選ぶ」の掲載ページ）", url: "https://panasonic.co.jp/hvac-cc/biz/products/pac/outdoor-xephy-premium/" },
  { label: "パナソニック 空調機器買い替え提案システム（P-SPEC）", url: "https://hvac.panasonic.com/replace/DispCate.do?volumeName=00001" },
];

export default function RenewalModelPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ガイド" }, { label: "更新専用機種と既設配管の再利用" }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコンの更新専用機種と既設配管の再利用｜各社の対応
        </h1>
        <UpdatedNote />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            業務用エアコンを入れ替えるとき、既設の冷媒配管や配線をそのまま使えると、天井裏やパイプシャフト内の配管撤去・敷設が不要になり、工期と工事の手間を抑えられます。メーカーの対応は2通りあり、三菱電機の「リプレースFitマルチ」や三菱重工の「更新専用冷暖フリーマルチR-LXR4」のように入れ替え専用の機種を用意している場合と、ダイキン・日立のように通常の機種で既設配管の再利用に対応している場合があります。どちらの場合も、配管の種類や老朽化の状態によっては再利用できません。並びは掲載の都合によるもので、順位ではありません。
          </p>
        </div>

        <DataTable
          caption="各社の更新（入れ替え）への対応（公式ページの記載）"
          head={["メーカー", "機種・シリーズ", "対応の形", "既設配管"]}
          rows={compareRows}
          note="各社公式ページ（2026年11月1日確認）より。「—」は確認したページに記載がないもの。実際に使えるかは現場の配管の状態によります。"
        />

        <h2 className="text-xl font-bold text-gray-800 mb-4">メーカー別の内容</h2>
        <div className="space-y-4 mb-8">
          {makers.map((m) => (
            <section key={m.maker} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <h3 className="font-bold text-gray-900 text-lg">
                {m.maker} {m.name}
              </h3>
              <p className="text-xs text-gray-500 mt-1">対応の形：{m.label}</p>
              <ul className="space-y-2 mt-3">
                {m.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
                    <span className="text-[#1E40AF] mt-0.5">•</span>
                    {i}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm">
                <Link href={m.makerHref} className="text-[#1E40AF] underline">
                  {m.maker}のシリーズ一覧を見る
                </Link>
              </p>
            </section>
          ))}
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">見積もりの前に確認したいこと</h2>
          <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>既設機のメーカー・型番と冷媒の種類（室外機の銘板で確認できます）</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>配管が壁や天井に埋め込まれているか、室外機が屋上や壁面にあるか（ダイキンは、こうした現場で配管の再利用が特に便利としています）</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>見積書が「既設配管利用」か「配管新設」か、配管洗浄を行うかどうか</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>マルチエアコン（1台の室外機に複数の室内機）の場合は、更新専用機の対象かどうか</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            入れ替えの時期の考え方は
            <Link href="/guide/timing/" className="text-[#1E40AF] underline">交換時期のガイド</Link>
            、費用の目安は
            <Link href="/guide/cost/" className="text-[#1E40AF] underline">費用相場ガイド</Link>
            にまとめています。メーカーは本体価格を公表していないため、費用は業者の見積もりで確認してください。
          </p>
        </section>

        <Faqs faqs={faqs} />

        <Sources sources={sources} />
      </main>
      <SiteFooter />
    </>
  );
}
