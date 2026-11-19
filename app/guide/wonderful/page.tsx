import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { DataTable, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

const CHECKED = "2026-11-20";
const SRC_LABEL = "ダイキン工業の公式ページ（天吊自在形 ワンダ風流）";

const TITLE = "ワンダ風流とは｜ダイキンの天吊自在形の特長・3シリーズの機種（P40〜P140形）と吹出し方向";
const DESC =
  "ダイキンの「天吊自在形 ワンダ風流」は、天井に吊り下げて4方向に吹き出す業務用エアコンの室内機です。FIVE STAR ZEAS・Eco-ZEAS・スゴ暖ZEASの3シリーズの形名（P40〜P140形）、機能の対応、2・3方向吹出しの注意点を、ダイキン公式ページ（2026年11月20日確認）で整理しました。";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/wonderful/" },
  title: TITLE,
  description: DESC,
};

const DK_FEATURE = "https://www.ac.daikin.co.jp/shopoffice/products/indoor/wonderful";
const DK_SERIES = "https://www.ac.daikin.co.jp/shopoffice/products/indoor/wonderful/series";
const DK_INDOOR = "https://www.ac.daikin.co.jp/shopoffice/products/indoor";

const featureRows = [
  ["人検知センサー・床温度センサー", "○", "別売品で対応", "—"],
  ["水内部クリーン（熱交換器の結露水洗浄）", "○", "○", "○"],
  ["不在時節電機能", "○（リモコンでの現地設定が必要）", "別売品で対応", "○（リモコンでの現地設定が必要）"],
  ["除湿冷房（さらら除湿）", "○", "○", "○"],
  ["マルチフロー（4・3・2方向吹出し）", "○", "○", "○"],
  ["ブラック色", "○", "○", "○"],
];

const modelRows = [
  ["P40形", "SSRU40DT(V)", "SZRU40CT(V)", "—"],
  ["P50形", "SSRU50DT(V)", "SZRU50CT(V)", "—"],
  ["P63形", "SSRU63DT(V)", "SZRU63CT(V)", "—"],
  ["P80形", "SSRU80DT(V)", "SZRU80CT(V)", "SDRU80C"],
  ["P112形", "SSRU112D", "SZRU112C", "SDRU112C"],
  ["P140形", "SSRU140D", "SZRU140C", "SDRU140C"],
];

const flowRows = [
  ["4方向吹出し", "部屋の中央に設置し、4方向へ吹き出す", "—"],
  ["3方向吹出し", "壁際に設置し、3方向へ吹き出す", "標準付属の吹出口閉鎖材を取り付ける。運転音が2dB（音圧レベル）ほど大きくなる"],
  ["2方向吹出し", "部屋の角、または縦長のスペースに設置する", "2方吹用閉鎖材キット（別売品）が必要。運転音が2dB（音圧レベル）ほど大きくなる"],
];

const faqs = [
  {
    q: "ワンダ風流は天井カセット形と何が違いますか？",
    a: "ワンダ風流は天井に本体を吊り下げる「天吊自在形」です。ダイキンは、天井埋込カセット形では天井ふところ（天井裏の空間）が足りない場合でも、ワンダ風流なら天井吊設置で4方向吹出しができると案内しています。天井裏に本体を納めないため、天井の改修を伴わずに4方向へ吹き出したい場合の選択肢になります。",
  },
  {
    q: "ワンダ風流にはどの馬力がありますか？",
    a: "ダイキン公式の機種シリーズのページでは、FIVE STAR ZEAS と Eco-ZEAS が P40形〜P140形の6機種、寒冷地向けのスゴ暖ZEAS が P80形〜P140形の3機種です。P40〜P80形には単相200V電源機種（形名末尾の（V））があり、その他は3相200V電源機種です。スゴ暖ZEASは全機種が3相200Vです。",
  },
  {
    q: "壁際や部屋の角にも設置できますか？",
    a: "設置できます。ダイキンはマルチフロー方式として、壁際からの3方向吹出し、部屋の角や縦長のスペースからの2方向吹出しを案内しています。ただし、3方向・2方向にする場合は吹出口の閉鎖材が必要で（2方向は別売のキット）、運転音が2dB（音圧レベル）ほど大きくなると注記されています。",
  },
];

const sources = [
  { label: "ダイキン工業 天吊自在形 ワンダ風流 製品特長", url: DK_FEATURE },
  { label: "ダイキン工業 天吊自在形 ワンダ風流 機種シリーズ", url: DK_SERIES },
  { label: "ダイキン工業 店舗・オフィスエアコン 室内機ラインアップ", url: DK_INDOOR },
];

export default function WonderfulPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ガイド" }, { label: "ワンダ風流とは" }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          ワンダ風流とは｜ダイキンの天吊自在形の特長と機種
        </h1>
        <UpdatedNote checked={CHECKED} label={SRC_LABEL} />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            ワンダ風流（わんだふる）は、ダイキン工業の店舗・オフィスエアコン（スカイエア）の室内機のうち、天井に吊り下げて4方向に吹き出す「天吊自在形」の名称です。ダイキンは、天井埋込カセット形では天井ふところが足りない場合でも、天井吊設置で4方向吹出しができる機種として案内しています。
            室外機のシリーズは FIVE STAR ZEAS・Eco-ZEAS・スゴ暖ZEAS の3つから選べ、能力は P40形〜P140形（スゴ暖ZEAS は P80形〜P140形）です。設置場所に合わせて4方向・3方向・2方向の吹出しを選べますが、3方向・2方向では閉鎖材が必要になり、運転音が2dBほど大きくなります。
          </p>
        </div>

        <DataTable
          caption="シリーズ別の形名（標準ペア・液晶ワイヤードリモコン）"
          head={["能力", "FIVE STAR ZEAS（センシングタイプ）", "Eco-ZEAS（標準タイプ）", "スゴ暖ZEAS（標準タイプ）"]}
          rows={modelRows}
          note="ダイキン公式「天吊自在形 ワンダ風流 機種シリーズ」の標準ペア（R32）の表より当サイトが3シリーズを1つの表にまとめました。液晶ワイヤレスリモコンの組み合わせは形名の末尾が異なります（例：SSRU40DNT(V)）。（V）は単相200V電源機種で、その他は3相200V電源機種です。標準ペア以外に同時運転マルチもあります。「—」は該当する機種がないことを示します。2026年11月20日確認。"
        />

        <DataTable
          caption="機能の対応（ダイキン公式の製品特長ページより）"
          head={["機能", "FIVE STAR ZEAS", "Eco-ZEAS", "スゴ暖ZEAS"]}
          rows={featureRows}
          note="製品特長ページで各機能に付されたシリーズ表示と注記を、当サイトが表にしました。人検知センサーは FIVE STAR ZEAS のみに適用（Eco-ZEAS は別売品対応）、不在時節電機能は液晶ワイヤードリモコン（BRC1G4）による現地設定が必要です。「—」は確認したページに該当シリーズの表示がない項目です。2026年11月20日確認。"
        />

        <DataTable
          caption="吹出し方向の選び方と注意点"
          head={["吹出し", "設置場所の例（ダイキンの案内）", "必要な部材・注意点"]}
          rows={flowRows}
          note="ダイキン公式「天吊自在形 ワンダ風流 製品特長」のマルチフロー方式の説明と注記より。"
        />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">メーカーが示す注意点</h2>
          <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>風あたり（ドラフト）は天井高さや能力（風量）によって変わります。人検知センサーは、センサーの死角になるエリアでは人を検知できません。</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>床温度センサーは、検知範囲内に熱源や窓があると温度の影響を受けるおそれがあり、その場合は販売店またはダイキンコンタクトセンターへの相談を求めています。</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>水内部クリーンは工場出荷時は「無効」で、リモコンのメニューから有効にします。冷房・除湿冷房の終了後に自動で行い、付着したホコリやカビをすべて落とせる機能ではないと注記されています。1回あたり約0.95kWh（SZRC160C の場合）の電力を使います。</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>除湿冷房は再熱除湿方式ではないため室温が下がります。ワイヤレスリモコンでは使えません。</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            天井吊り形のほかの機種は
            <Link href="/guide/type/tenturi/" className="text-[#1E40AF] underline">天井吊り形の比較</Link>
            、室外機のシリーズごとの違いは
            <Link href="/maker/daikin/fivestar-zeas/" className="text-[#1E40AF] underline">FIVE STAR ZEAS</Link>
            ・
            <Link href="/maker/daikin/eco-zeas/" className="text-[#1E40AF] underline">Eco-ZEAS</Link>
            ・
            <Link href="/maker/daikin/sugodan-zeas/" className="text-[#1E40AF] underline">スゴ暖ZEAS</Link>
            のページ、風が人に当たるときの対策は
            <Link href="/guide/windbreak/" className="text-[#1E40AF] underline">業務用エアコンの風除け</Link>
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
