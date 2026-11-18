import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { DataTable, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

const CHECKED = "2026-11-18";

const TITLE = "業務用エアコンの電気代｜5馬力で年1,829kWhと4,603kWh（新旧の試算）から計算する目安";
const DESC =
  "業務用エアコンの電気代の目安を、ダイキン公式の試算（5馬力・東京の店舗・年3,250時間運転）の年間消費電力量（2023年モデル1,829kWh・15年使用の2008年製4,603kWh）から電力量単価ごとに計算しました。APF2015の算出条件も日立公式で確認（2026年11月18日）。";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/electricity-cost/" },
  title: TITLE,
  description: DESC,
};

const NEW_KWH = 1829;
const OLD_KWH = 4603;
const HOURS = 10 * 25 * 13; // 3,250時間
const PRICES = [25, 30, 35];
const yen = (n: number) => `約${(Math.round(n / 100) * 100).toLocaleString("ja-JP")}円`;

const conditionRows = [
  ["比べた機種", "2023年モデル SSRC140C と、15年間使用した2008年製 SYCP140AB（型番の140はP140形＝5馬力クラス。当サイトの馬力・kW換算早見表による）"],
  ["運転", "10か月／年・25日／月・1日13時間（年3,250時間）"],
  ["建物・地域", "東京都・戸建店舗を想定。気象データはアメダス"],
  ["設定温度", "冷房27℃・暖房20℃"],
  ["試算基準", "JRA4002:2013R。機器の省エネ制御を考慮"],
  ["既設機の劣化", "経年劣化とフィルター目詰まりを考慮し、消費電力×1.375で計算"],
  ["年間消費電力量", "2023年モデル 1,829kWh／2008年モデル 4,603kWh"],
];

const costRows = PRICES.map((p) => [
  `${p}円/kWh`,
  yen(NEW_KWH * p),
  yen(OLD_KWH * p),
  yen((OLD_KWH - NEW_KWH) * p),
]);

const faqs = [
  {
    q: "業務用エアコン（5馬力）の電気代は、年間でどのくらいですか？",
    a: `ダイキン公式の試算条件（東京の戸建店舗・年3,250時間運転）では、2023年モデルのP140形（5馬力）の年間消費電力量は1,829kWhです。電力量単価を30円/kWhとして当サイトで計算すると、年間${yen(NEW_KWH * 30)}になります。実際の電気代は、契約している料金プラン（基本料金を含む）、使用時間、建物の断熱、設定温度で大きく変わります。`,
  },
  {
    q: "古い業務用エアコンを買い替えると、電気代はどれだけ下がりますか？",
    a: `ダイキンの試算では、15年使用した2008年製の既設機（経年劣化とフィルター目詰まりを考慮）が年4,603kWh、2023年モデルが年1,829kWhで、当サイトの計算では約6割（2,774kWh）少なくなります。30円/kWhなら年${yen((OLD_KWH - NEW_KWH) * 30)}の差です。メーカーの一定条件での試算のため、実際の削減額は使い方や機種で異なります。`,
  },
  {
    q: "機種ごとの省エネ性能は、どの数値で比べればよいですか？",
    a: "カタログのAPF2015（通年エネルギー消費効率）です。日立の公式ページによると、店舗・オフィス用エアコンのAPF2015は、東京の「店舗」をモデルに、冷房5月7日〜10月17日・暖房11月17日〜4月3日、週7日・8時〜21時の使用条件で年間の負荷から算出します。同じ能力の機種どうしなら、APFが大きいほど同じ条件での消費電力量は少なくなります。",
  },
];

const sources = [
  { label: "ダイキン工業「ダイキンの節電。」（業務用エアコンの新旧比較の試算条件・年間消費電力量）", url: "https://www.ac.daikin.co.jp/setsuden" },
  { label: "日立 APF2015とは（算出条件）", url: "https://www.hitachi-gls.co.jp/products/office/knowledge/apf.html" },
];

export default function ElectricityCostPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ガイド" }, { label: "業務用エアコンの電気代" }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコンの電気代｜メーカー試算の消費電力量から計算する年間の目安
        </h1>
        <UpdatedNote checked={CHECKED} />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            ダイキン公式の試算では、P140形（5馬力クラス）の業務用エアコンを東京の戸建店舗で年3,250時間運転した場合の年間消費電力量は、2023年モデルが1,829kWh、15年間使用した2008年製が4,603kWhです。
            この消費電力量に電力量単価を掛けると、30円/kWhの場合で2023年モデルが年{yen(NEW_KWH * 30)}、2008年製が年{yen(OLD_KWH * 30)}になります（当サイトの計算）。
            運転1時間あたりの平均消費電力は、2023年モデルで約{(NEW_KWH / HOURS).toFixed(2)}kW、2008年製で約{(OLD_KWH / HOURS).toFixed(2)}kWです。
          </p>
        </div>

        <DataTable
          caption="ダイキンの試算条件（5馬力・新旧比較）"
          head={["項目", "内容"]}
          rows={conditionRows}
          note="ダイキン工業「ダイキンの節電。」の注記（2026年11月18日確認）より。同社は、電気代は目安であり負荷特性等の諸条件により異なる、試算は一定の条件に基づく相対評価であると注記しています。"
        />

        <DataTable
          caption="電力量単価ごとの年間の電力量料金（当サイトの計算）"
          head={["電力量単価", "2023年モデル（1,829kWh）", "2008年製（4,603kWh）", "差額（2,774kWh）"]}
          rows={costRows}
          note="年間消費電力量×電力量単価で当サイトが計算した値（100円単位で四捨五入）。25・30・35円/kWhは計算のために置いた単価で、特定の料金プランの単価ではありません。基本料金・燃料費調整額・再生可能エネルギー発電促進賦課金は含めていません。"
        />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">自店の電気代を見積もる手順</h2>
          <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>電気料金の明細で、電力量単価（円/kWh）と燃料費調整額を確認する</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>入れ替え候補の機種について、業者やメーカーに同じ条件での年間消費電力量の試算を依頼する（APF2015の算出条件と自店の営業時間・地域が近いかも確認）</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>年間消費電力量×電力量単価で、新旧の差額を計算する</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>差額と、本体・工事費（補助金を使う場合は差し引き後）を比べて、入れ替えの時期を判断する</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            必要な能力の目安は
            <Link href="/guide/horsepower/" className="text-[#1E40AF] underline">馬力・kW換算早見表</Link>
            、本体・工事費の目安は
            <Link href="/guide/cost/" className="text-[#1E40AF] underline">費用相場ガイド</Link>
            、省エネ設備の補助金と発注の時期は
            <Link href="/guide/timing/" className="text-[#1E40AF] underline">発注の時期のガイド</Link>
            、古い冷媒R22の機器は
            <Link href="/guide/r22/" className="text-[#1E40AF] underline">R22冷媒の業務用エアコン</Link>
            にまとめています。
          </p>
        </section>

        <Faqs faqs={faqs} />

        <Sources sources={sources} checked={CHECKED} />
      </main>
      <SiteFooter />
    </>
  );
}
