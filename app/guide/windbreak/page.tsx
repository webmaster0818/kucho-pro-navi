import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { DataTable, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

const CHECKED = "2026-11-19";
const SRC_LABEL = "三菱電機・ダイキンの公式ページと取扱説明書";

const TITLE = "業務用エアコンの風除け｜直接風を避ける機能（三菱電機の風よけ・ダイキンの風向個別設定）と注意点";
const DESC =
  "業務用エアコン（天井カセット形）の風が人に直接当たるときの対策を、三菱電機 Mr.SLIM の「風よけ」機能とダイキン S-ラウンドフローの「風向個別設定」を中心に、両社の公式ページと取扱説明書（2026年11月19日確認）で整理しました。必要な別売部品、天井高さとドラフトの注意点も掲載しています。";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/windbreak/" },
  title: TITLE,
  description: DESC,
};

const MEL_4WAY = "https://www.mitsubishielectric.co.jp/ldm/slim/indoorunit/fourway/";
const MEL_MANUAL =
  "https://dl.mitsubishielectric.co.jp/dl/ldg/wink/ssl/wink_doc/m_contents/wink/PAC_IB/rg79f008h02.pdf";
const DK_SRF = "https://www.ac.daikin.co.jp/shopoffice/products/indoor/sensing_flow";

const compareRows = [
  [
    "直接風を避ける機能",
    "「風よけ機能」：風あたりを抑える。人感ムーブアイと左右ルーバーユニットが連動し、風向を上下左右に自動調整。「ドラフトセーブ」：簡単操作で1方向の吹出しを水平にして風あたりを防止",
    "「風向個別設定」：4つの吹出口ごとに風向を個別に設定（個別なし〈風向自動〉・ポジション0〜4・スイングの7種類）",
  ],
  [
    "人の検知",
    "人感ムーブアイ：人の位置を検知すると、人のいるエリアのベーン角度を設定に応じて自動調整。ベーンそれぞれに「風よけ」「風あて」を選択できる（快適自動モード・取扱説明書）",
    "人検知センサー：4個のセンサーが人のいるエリアを検知（床上80cmでの範囲。FIVE STAR ZEAS、Eco-ZEASは別売品対応）",
  ],
  [
    "吹出しの方式",
    "4方向天井カセット形〈i-スクエアタイプ〉（360°全周囲に風を届けると案内）",
    "8方向・360°全周吹出し。ドラフト感を和らげながら部屋全体に気流を届けると案内（FIVE STAR ZEAS・Eco-ZEAS）",
  ],
  [
    "必要な別売部品",
    "左右ルーバーユニット（別売）。2方向設定時は左右ルーバーユニットを使用できない",
    "人検知センサーは Eco-ZEAS では別売品で対応",
  ],
  [
    "メーカーの注意書き",
    "ドラフトセーブは吹出口からの気流を完全になくすものではない。吹き出した空気により天井が汚れる場合がある。場所によっては「風よけ」でも風があたる場合がある",
    "風あたり（ドラフト）は天井高さや能力（風量）によって変わる。冷気ドラフトが気になる設置環境（天井が低い等）の場合は事前に了解を得て選定するよう案内",
  ],
];

const ceilingRows = [
  ["PL-ZRP/HRP40〜80HA5・PL-ERP40〜80HA5", "2.5m", "2.7m", "3.5m"],
  ["PL-ZRP112〜160HA5・PL-ERP112〜160HA5", "2.7m", "3.2m", "4.5m"],
];

const faqs = [
  {
    q: "業務用エアコンの風が席に直接当たります。機種を替えずにできることはありますか？",
    a: "ダイキンの S-ラウンドフローは、4つの吹出口ごとに風向を個別に設定できます（個別なし〈風向自動〉・ポジション0〜4・スイングの7種類）。三菱電機の取扱説明書は、人感ムーブアイが人の位置を検知すると、ベーンごとに選んだ「風よけ」「風あて」の設定に応じて角度を自動調整する快適自動モードを案内しています。お使いの機種で設定できるかは、取扱説明書またはリモコンのメニューで確認してください。",
  },
  {
    q: "風よけ機能を使えば、風は当たらなくなりますか？",
    a: "完全になくなるわけではありません。三菱電機は、ドラフトセーブは吹出口からの気流を完全になくすものではないとし、取扱説明書でも場所によっては「風よけ」でも風があたる場合があると注記しています。ダイキンも、風あたり（ドラフト）は天井高さや能力（風量）によって変わると案内しています。",
  },
  {
    q: "天井が低い店舗で気をつけることはありますか？",
    a: "ダイキンは、冷気ドラフトが気になるような設置環境（天井が低い等）の場合には事前に了解を得て選定するよう案内しています。三菱電機の4方向天井カセット形は、機種ごとに低天井・標準・高天井の設定の目安を示しています。見積もりの際は、天井高と席の配置を業者に伝えてください。",
  },
];

const sources = [
  { label: "三菱電機 4方向天井カセット形〈i-スクエアタイプ〉（店舗・事務所用パッケージエアコン Mr.SLIM）", url: MEL_4WAY },
  { label: "三菱電機 パッケージエアコン 室内ユニット取扱説明書（PL-ZRP・EA3形ほか）「人感ムーブアイ」「風よけ・風あて」", url: MEL_MANUAL },
  { label: "ダイキン工業 天井埋込形エアコン「S-ラウンドフロータイプ」（スカイエア 室内機ラインアップ）", url: DK_SRF },
];

export default function WindbreakPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ガイド" }, { label: "業務用エアコンの風除け" }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコンの風除け｜直接風を避ける機能と選ぶときの注意点
        </h1>
        <UpdatedNote checked={CHECKED} label={SRC_LABEL} />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            天井カセット形の業務用エアコンには、人に風が直接当たるのを避ける機能を持つ機種があります。三菱電機の Mr.SLIM 4方向天井カセット形は「風よけ機能」で風あたりを抑え、人感ムーブアイと別売の左右ルーバーユニットが連動して風向を自動で調整します。ダイキンの S-ラウンドフローは、4つの吹出口ごとに風向を個別に設定できます。
            ただし、どちらも風を完全に止めるものではありません。三菱電機は気流を完全になくすものではないと注記し、ダイキンは風あたり（ドラフト）は天井高さや風量によって変わると案内しています。天井が低い場所では、機種選びの段階で業者に相談することが前提になります。
          </p>
        </div>

        <DataTable
          caption="直接風を避ける機能の比較（三菱電機・ダイキン）"
          head={["項目", "三菱電機 Mr.SLIM 4方向天井カセット形", "ダイキン S-ラウンドフロー"]}
          rows={compareRows}
          note="各社の公式ページ・取扱説明書の記載を当サイトが項目ごとに整理しました。「—」は確認したページに該当する記載がない項目です。並びは順位ではありません。2026年11月19日確認。"
        />

        <DataTable
          caption="三菱電機 4方向天井カセット形の天井高の目安"
          head={["形名", "低天井", "標準", "高天井"]}
          rows={ceilingRows}
          note="三菱電機の4方向天井カセット形〈i-スクエアタイプ〉のページより（2.7m〜4.5mまで天井高に対応と案内）。3・2方向設定には別売の吹出口シャッタープレートが必要で、高温多湿環境での3・2方向や低天井の選択は露付き・露たれの原因になるため行わないよう注記されています。"
        />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">見積もり・入れ替えのときに伝えること</h2>
          <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>天井高と、席・レジ・作業台など人が長くいる場所の位置</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>風よけ・風向個別設定などの機能を使いたいこと（別売部品が必要な機種がある）</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>2方向・3方向吹出しにしたい場合は、その理由（別売部品と運転音・露たれの注意がある）</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            室内機の形状ごとの特徴は
            <Link href="/guide/type/" className="text-[#1E40AF] underline">業務用エアコンの形状の選び方</Link>
            、メーカーごとのシリーズは
            <Link href="/maker/mitsubishi-electric/" className="text-[#1E40AF] underline">三菱電機</Link>
            ・
            <Link href="/maker/daikin/" className="text-[#1E40AF] underline">ダイキン</Link>
            のメーカーページにまとめています。
          </p>
        </section>

        <Faqs faqs={faqs} />

        <Sources sources={sources} checked={CHECKED} label={SRC_LABEL} />
      </main>
      <SiteFooter />
    </>
  );
}
