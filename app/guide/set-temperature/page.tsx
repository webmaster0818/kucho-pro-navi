import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { DataTable, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

const CHECKED = "2026-11-20";
const SRC_LABEL = "厚生労働省（事務所衛生基準規則・施行通達）と三菱電機の取扱説明書";

const TITLE = "業務用エアコンの設定温度｜事務所の室温18〜28℃・湿度40〜70%の基準とリモコンの設定範囲";
const DESC =
  "業務用エアコンの設定温度の目安を、事務所衛生基準規則（室温18℃以上28℃以下・相対湿度40%以上70%以下・気流0.5m/s以下、令和4年4月1日施行の改正）と、三菱電機の取扱説明書（設定できる温度の範囲、冷房時の室内外の温度差、設定温度1℃あたりの節電の目安）で整理しました（2026年11月20日確認）。";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/set-temperature/" },
  title: TITLE,
  description: DESC,
};

const MHLW_RULE = "https://www.mhlw.go.jp/web/t_doc?dataId=74089000&dataType=0&pageNo=1";
const MHLW_NOTICE = "https://www.mhlw.go.jp/content/11300000/000904298.pdf";
const MEL_MANUAL =
  "https://dl.mitsubishielectric.co.jp/dl/ldg/wink/ssl/wink_doc/m_contents/wink/PAC_IB/rg79f008h02.pdf";

const ruleRows = [
  ["室の気温", "18℃以上28℃以下（努力義務）", "空気調和設備を設けている場合。令和4年4月1日施行の改正で下限を17℃から18℃に引き上げ"],
  ["相対湿度", "40%以上70%以下（努力義務）", "空気調和設備を設けている場合"],
  ["気流", "0.5m/s以下", "室に流入する空気が特定の労働者に直接、継続して及ばないようにする"],
];

const rangeRows = [
  ["冷房・ドライ", "19〜30℃", "28℃を超える設定（29・30℃）も可能"],
  ["暖房", "17〜28℃", "18℃を下回る設定（17℃）も可能"],
  ["自動", "19〜28℃", "範囲内"],
  ["送風", "設定できない", "—"],
];

const faqs = [
  {
    q: "設定温度を28℃にすれば、室温は28℃になりますか？",
    a: "設定温度と実際の室温は同じになるとは限りません。事務所衛生基準規則の基準は「室の気温」で、リモコンの設定温度ではありません。日射や人の多さ、機器の能力で室温は変わるため、温度計で室温を測って確認してください。",
  },
  {
    q: "設定温度を1℃変えると、電気代はどのくらい変わりますか？",
    a: "三菱電機の取扱説明書は、たとえば冷房のとき設定温度を1℃上げると約10%の電力が節約できるとしています。あわせて、冷房運転では室内と室外の温度差を5℃以内にするのが最適で、冷やしすぎは健康によくなく電力のムダ使いにもなると案内しています。",
  },
  {
    q: "従業員が勝手に設定温度を変えないようにできますか？",
    a: "三菱電機の取扱説明書では、設定温度範囲制限を設定すると、リモコンで変えられる温度の範囲を狭くでき、範囲を超えて設定しようとすると「設定温度制限中」と表示されると案内しています。設定方法はリモコンの取扱説明書で確認してください。集中管理システムで設定温度を管理する方法もあります。",
  },
  {
    q: "空調設備がない事務所にも18〜28℃の基準はありますか？",
    a: "規則の努力義務は空気調和設備を設けている場合ですが、厚生労働省の施行通達は、それ以外の場合でも冷暖房器具を使用することなどにより、事務所の室の気温を18度以上28度以下にすることが望ましいとしています。",
  },
];

const sources = [
  { label: "厚生労働省 法令等データベース 事務所衛生基準規則（第5条 空気調和設備等による調整）", url: MHLW_RULE },
  { label: "厚生労働省 事務所衛生基準規則の一部を改正する省令の施行等について（基発0301第1号・令和4年3月1日）", url: MHLW_NOTICE },
  { label: "三菱電機 パッケージエアコン 室内ユニット取扱説明書「設定温度を変えたいとき」「上手な使い方」", url: MEL_MANUAL },
];

export default function SetTemperaturePage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ガイド" }, { label: "業務用エアコンの設定温度" }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコンの設定温度｜事務所の室温の基準とリモコンの設定範囲
        </h1>
        <UpdatedNote checked={CHECKED} label={SRC_LABEL} />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            事務所で業務用エアコン（空気調和設備）を使う場合、事務所衛生基準規則により、室の気温を18℃以上28℃以下、相対湿度を40%以上70%以下にするよう努める必要があります。下限は令和4年4月1日の改正で17℃から18℃に引き上げられました。基準は「室温」で、リモコンの設定温度ではない点に注意してください。
            三菱電機の取扱説明書では、冷房時は室内と室外の温度差を5℃以内にするのが最適とし、冷房の設定温度を1℃上げると約10%の電力が節約できるとしています。
          </p>
        </div>

        <DataTable
          caption="事務所衛生基準規則の室内環境の基準（空気調和設備を設けている場合）"
          head={["項目", "基準", "補足"]}
          rows={ruleRows}
          note="事務所衛生基準規則 第5条第2項・第3項と、厚生労働省の施行通達（基発0301第1号）より当サイトが整理しました。2026年11月20日確認。"
        />

        <DataTable
          caption="リモコンで設定できる温度の範囲と、規則の室温18〜28℃との関係"
          head={["運転モード", "設定できる温度（三菱電機の例）", "規則の室温18〜28℃との関係（当サイトの比較）"]}
          rows={rangeRows}
          note="三菱電機 パッケージエアコン 室内ユニット取扱説明書（PL-ZRP・EA3形ほか）の設定温度範囲と、事務所衛生基準規則の室温の範囲を当サイトが比べました。設定はMAスマートリモコンで0.5℃、ワイヤレスリモコンで1℃単位です。設定温度範囲制限が設定されている場合は範囲が狭くなります。2026年11月20日確認。"
        />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">設定温度を決めるときの確認事項</h2>
          <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>温度計・湿度計で、実際の室温と湿度が18〜28℃・40〜70%に入っているか</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>吹出しの風が特定の人に直接、継続して当たっていないか（風向の調整）</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>冷房時に室内外の温度差が大きくなりすぎていないか</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>フィルターが目詰まりしていないか（三菱電機は、目詰まりは冷房・暖房能力を下げ電力のムダ使いになるとしています）</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            設定温度を下げても冷えない場合は
            <Link href="/guide/not-cooling/" className="text-[#1E40AF] underline">業務用エアコンが冷えないときの確認事項</Link>
            、複数台の設定温度をまとめて管理する方法は
            <Link href="/guide/central-control/" className="text-[#1E40AF] underline">空調管理システム</Link>
            、電気代の目安は
            <Link href="/guide/electricity-cost/" className="text-[#1E40AF] underline">業務用エアコンの電気代</Link>
            でご説明しています。学校の教室の基準は
            <Link href="/industry/school/" className="text-[#1E40AF] underline">学校用の業務用エアコン</Link>
            をご覧ください。
          </p>
        </section>

        <Faqs faqs={faqs} />

        <Sources sources={sources} checked={CHECKED} label={SRC_LABEL} />
      </main>
      <SiteFooter />
    </>
  );
}
