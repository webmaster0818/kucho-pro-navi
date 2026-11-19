import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { DataTable, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

const CHECKED = "2026-11-20";
const SRC_LABEL = "中小企業基盤整備機構 J-Net21、三菱重工サーマルシステムズ・日立の公式ページ";

const TITLE = "APFとCOPの違い｜業務用エアコンの省エネ性能の見方（APF2015とAPF2006の差も比較）";
const DESC =
  "業務用エアコンのカタログにあるAPF（通年エネルギー消費効率）とCOP（成績係数）の違いを、計算式・測る条件・使い分けで比べました。三菱重工の公式表からAPF2015とAPF2006の差を当サイトで計算し、日立の算出条件もあわせてご説明します（2026年11月20日確認）。";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/apf-cop/" },
  title: TITLE,
  description: DESC,
};

const JNET = "https://j-net21.smrj.go.jp/solution/qa/energyeff/Q1177.html";
const MHI_GLOSSARY_SA = "https://www.mhi-mth.co.jp/support/introduce/glossary/g-sa/index.html";
const MHI_GLOSSARY_TA = "https://www.mhi-mth.co.jp/support/introduce/glossary/g-ta/index.html";
const MHI_ONEFAN =
  "https://www.mhi-mth.co.jp/business/air-conditioner-for-business/air-conditioner-for-office/hyper-inverter-one-fan/";
const HITACHI_APF = "https://www.hitachi-gls.co.jp/products/office/knowledge/apf.html";

const compareRows = [
  ["正式名", "成績係数（Coefficient of Performance）", "通年エネルギー消費効率（Annual Performance Factor）"],
  ["計算式", "定格冷房（暖房）能力（kW）÷ 定格消費電力（kW）", "1年間で必要な冷暖房能力の総和 ÷ 期間消費電力量（kWh）"],
  ["測る条件", "定められた温度条件での1点の性能", "地域（東京）・建物用途・使用期間・使用時間を決めた1年間の運転"],
  ["冷房・暖房", "冷房・暖房それぞれの定格値から求める", "冷房と暖房の1年分をまとめた1つの値"],
  ["向いている使い方", "特定の条件（定格運転）での効率の比較", "年間の電気代の比較の目安"],
];

const mhiRows = [
  ["4馬力", "6.4", "6.0", "+0.4"],
  ["5馬力", "6.0", "5.7", "+0.3"],
  ["6馬力", "5.8", "5.5", "+0.3"],
];

const conditionRows = [
  ["規格", "JIS B 8616：2015", "JIS B 8616：2006"],
  ["評価点", "最大8点（中間冷房中温・最小冷房中温・最小暖房標準を追加）", "5点（定格冷房・定格暖房・暖房低温・中間冷房・中間暖房）"],
  ["建物モデル（店舗・オフィス用）", "東京の「店舗」", "東京の「戸建て店舗」"],
  ["冷房期間", "5月7日〜10月17日", "5月23日〜10月10日"],
  ["暖房期間", "11月17日〜4月3日", "11月21日〜4月11日"],
  ["使用日数・時間", "週7日・8:00〜21:00", "週7日・8:00〜21:00"],
];

const faqs = [
  {
    q: "APFとCOPは、どちらを見て機種を比べればよいですか？",
    a: "年間の電気代を比べるならAPFが目安になります。J-Net21（中小企業基盤整備機構）の解説では、COPは一定の温度条件で運転したときの1点の性能であるのに対し、APFは年間を通じた総合負荷と総消費電力量から算出するため、実際に近い効率になるとしています。同じ能力の機種どうしを、同じ規格（APF2015どうし）で比べてください。",
  },
  {
    q: "APF2015とAPF2006の値を比べてもよいですか？",
    a: "そのまま比べることはできません。算出の規格・評価点・使用期間が異なるためです。三菱重工の公式表では、同じ機種でもAPF2015がAPF2006より0.3〜0.4大きく表示されています。カタログや見積書でどちらの値かを確認してください。",
  },
  {
    q: "APFが高い機種なら、必ず電気代が安くなりますか？",
    a: "必ずとは限りません。APFは東京の店舗などをモデルにした条件での値で、地域・営業時間・使い方が違えば実際の消費電力量も変わります。J-Net21の解説でも、試験は圧縮機の回転数を固定して行うため、特に低負荷の運転での能力が予測できていないおそれがあるなどの課題が挙げられています。",
  },
];

const sources = [
  { label: "J-Net21（中小企業基盤整備機構）空調機の性能表示のCOPとAPFの違いは？", url: JNET },
  { label: "三菱重工サーマルシステムズ 冷熱・環境用語事典「成績係数（COP）」", url: MHI_GLOSSARY_SA },
  { label: "三菱重工サーマルシステムズ 冷熱・環境用語事典「通年エネルギー消費効率（APF）」", url: MHI_GLOSSARY_TA },
  { label: "三菱重工サーマルシステムズ ハイパーインバータ 1ファン室外ユニット", url: MHI_ONEFAN },
  { label: "日立 店舗・オフィス用エアコン APF2015とは（算出条件）", url: HITACHI_APF },
];

export default function ApfCopPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ガイド" }, { label: "APFとCOPの違い" }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          APFとCOPの違い｜業務用エアコンの省エネ性能の見方
        </h1>
        <UpdatedNote checked={CHECKED} label={SRC_LABEL} />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            COP（成績係数）は、定められた温度条件で運転したときの「定格能力÷定格消費電力」で、ある1点の効率を表します。APF（通年エネルギー消費効率）は、地域・建物・使用期間を決めた1年間の運転で「必要な冷暖房能力の総和÷期間消費電力量」を求めた値で、年間を通じた効率を表します。どちらも大きいほど省エネです。
            業務用エアコンの電気代を比べるときはAPFが目安になりますが、規格の異なるAPF2015とAPF2006はそのまま比べられません。三菱重工の公式表では、同じ機種でAPF2015がAPF2006より0.3〜0.4大きくなっています。
          </p>
        </div>

        <DataTable
          caption="COPとAPFの比較"
          head={["項目", "COP", "APF"]}
          rows={compareRows}
          note="計算式は三菱重工サーマルシステムズ「冷熱・環境用語事典」、測る条件と使い分けはJ-Net21（中小企業基盤整備機構）の解説より当サイトが整理しました。2026年11月20日確認。"
        />

        <DataTable
          caption="同じ機種のAPF2015とAPF2006の差（三菱重工 1ファン室外ユニット）"
          head={["馬力", "APF（2015）", "APF（2006）", "差（当サイト計算）"]}
          rows={mhiRows}
          note="三菱重工サーマルシステムズ「ハイパーインバータ 1ファン室外ユニット」の公式表の値から、当サイトが差を計算しました。2026年11月20日確認。"
        />

        <DataTable
          caption="APF2015とAPF2006の算出条件（店舗・オフィス用エアコン）"
          head={["項目", "APF2015", "APF2006"]}
          rows={conditionRows}
          note="日立「APF2015とは」の記載より当サイトが整理しました。APF2015の対象は定格冷房能力56kW以下（JRA 4002：2016では400kW以下）の空冷式です。ビル用マルチエアコン・設備用エアコンのAPF2015は「事務所」をモデルとし、冷房4月19日〜11月11日・暖房12月3日〜3月15日、週6日・8:00〜20:00で算出します。2026年11月20日確認。"
        />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">カタログでAPFを見るときの確認事項</h2>
          <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>APF2015かAPF2006か（比べる機種で規格をそろえる）</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>同じ能力（馬力・形）どうしで比べているか（能力が違えば値の水準も違う）</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>室内機の形（天井カセット形など）の組み合わせ。日立の表では、省エネ法の基準値も4方向カセット形とそれ以外で分かれています</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>自店の地域・営業時間がAPFの算出条件（東京・週7日・8:00〜21:00など）と近いか</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            APFから年間の電気代を試算する方法は
            <Link href="/guide/electricity-cost/" className="text-[#1E40AF] underline">業務用エアコンの電気代</Link>
            、APFの基準値を満たす機種を求める調達の基準は
            <Link href="/guide/green-purchasing/" className="text-[#1E40AF] underline">グリーン購入法と業務用エアコン</Link>
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
