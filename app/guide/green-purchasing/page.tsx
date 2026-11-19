import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { DataTable, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

const CHECKED = "2026-11-20";
const SRC_LABEL = "環境省のグリーン購入法ページと基本方針（令和8年2月3日変更閣議決定）";

const TITLE = "グリーン購入法と業務用エアコン｜判断の基準（APF・GWP750以下・常時監視システム）と能力別の基準値";
const DESC =
  "グリーン購入法の基本方針（令和8年2月3日変更閣議決定）で、業務用エアコンが満たすべき判断の基準を環境省の資料（2026年11月20日確認）で整理しました。基準エネルギー消費効率の算定式から能力別（P40〜P160形相当）の基準値を当サイトで計算し、令和8年の改定で追加された常時監視システムの要件もご説明します。";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/green-purchasing/" },
  title: TITLE,
  description: DESC,
};

const ENV_GLAW = "https://www.env.go.jp/policy/hozen/green/g-law/index.html";
const ENV_KIHON = "https://www.env.go.jp/content/000387322.pdf";
const ENV_KAITEI = "https://www.env.go.jp/content/000387327.pdf";
const ENV_PRESS = "https://www.env.go.jp/press/press_02550.html";

const criteriaRows = [
  ["① エネルギー消費効率", "基準値1：表2の区分ごとの基準エネルギー消費効率（算定式）を下回らないこと。基準値2：同じ値に88/100を乗じ、小数点以下1桁未満を切り捨てた数値を下回らないこと"],
  ["② 冷媒", "冷媒に使用される物質の地球温暖化係数（GWP）が750以下であること"],
  ["③ 常時監視システム", "フロンの漏えいや機器の故障等を常時監視するシステムを使用したものであること（令和8年2月の改定で追加）"],
  ["④ 特定の化学物質", "鉛・水銀・カドミウム・六価クロム・PBB・PBDE が含有率基準値を超えず、含有情報がウェブサイト等で容易に確認できること"],
];

const calcRows = [
  ["P40形相当（4.0kW）", "5.97", "5.2", "5.07", "4.4"],
  ["P50形相当（5.0kW）", "5.88", "5.1", "4.98", "4.3"],
  ["P63形相当（6.3kW）", "5.78", "5.0", "4.88", "4.2"],
  ["P80形相当（8.0kW）", "5.63", "4.9", "4.73", "4.1"],
  ["P112形相当（11.2kW）", "5.86", "5.1", "4.98", "4.3"],
  ["P140形相当（14.0kW）", "5.52", "4.8", "4.70", "4.1"],
  ["P160形相当（16.0kW）", "5.28", "4.6", "4.50", "3.9"],
];

const excludeRows = [
  ["冷房能力が28kW（マルチタイプは50.4kW）を超えるもの", "対象外"],
  ["冷房専用のもの・窓に設置するもの・壁を貫通して設置するもの", "対象外"],
  ["水冷式のもの", "対象外"],
  ["電気以外のエネルギーを暖房の熱源とするもの", "対象外（ガスヒートポンプ式冷暖房機は別の品目）"],
  ["機械器具の性能維持や飲食物の衛生管理を目的とする温度制御・除じん性能を持つもの", "対象外"],
  ["スポットエアコン", "対象外"],
];

const faqs = [
  {
    q: "グリーン購入法は民間企業にも義務がありますか？",
    a: "環境省の説明では、グリーン購入法は国等の機関にグリーン購入を義務づけ、地方公共団体や事業者・国民にはグリーン購入に努めることを求める法律です。民間企業が業務用エアコンを導入する場合は努力の対象で、基本方針の判断の基準は機種を選ぶときの目安として使えます。",
  },
  {
    q: "令和8年の改定で業務用エアコンの基準はどう変わりましたか？",
    a: "環境省の「特定調達品目及び判断の基準等の改定一覧」では、業務用エアコンディショナーについて、判断の基準にフロン類の常時監視システムの搭載を追加したとしています。基本方針の備考では、本体の使用開始時点で、システムの利用に必要な機器の設置・接続（サービス契約が必要な場合はその締結を含む）が完了し、利用できる状態になっていることで適合とすると定めています。",
  },
  {
    q: "計算した基準値は、どの数値と比べればよいですか？",
    a: "基本方針の基準エネルギー消費効率は、通年エネルギー消費効率（APF）の値です。メーカーのカタログに記載された機種ごとの APF と比べます。四方向カセット形とそれ以外の室内機で算定式が異なり、冷房能力10kW以上で式が切り替わるため、P112形相当の基準値は P80形相当より高くなります。",
  },
];

const sources = [
  { label: "環境省 グリーン購入法（国等による環境物品等の調達の推進等に関する法律）", url: ENV_GLAW },
  { label: "環境省 環境物品等の調達の推進に関する基本方針（令和8年2月3日変更閣議決定）10-1 エアコンディショナー", url: ENV_KIHON },
  { label: "環境省 特定調達品目及び判断の基準等の改定一覧", url: ENV_KAITEI },
  { label: "環境省 報道発表「グリーン購入法基本方針の閣議決定及び意見募集（パブリックコメント）の結果について」（2026年2月3日）", url: ENV_PRESS },
];

export default function GreenPurchasingPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ガイド" }, { label: "グリーン購入法と業務用エアコン" }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          グリーン購入法と業務用エアコン｜判断の基準と能力別の基準値
        </h1>
        <UpdatedNote checked={CHECKED} label={SRC_LABEL} />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            グリーン購入法の基本方針では、業務用エアコンは「エアコンディショナー等」の特定調達品目に含まれます。判断の基準は、エネルギー消費効率（APF）が区分ごとの基準値を下回らないこと、冷媒の地球温暖化係数が750以下であること、フロンの漏えいや故障を常時監視するシステムを使用していること、特定の化学物質が基準値を超えないことの4点です。
            このうち常時監視システムの要件は、令和8年2月3日の基本方針の変更で追加されました。国等の機関には調達の義務があり、地方公共団体や事業者には努力が求められています。
          </p>
        </div>

        <DataTable
          caption="業務用エアコンの判断の基準（基本方針 10-1）"
          head={["項目", "基本方針の記載（要旨）"]}
          rows={criteriaRows}
          note="環境省「環境物品等の調達の推進に関する基本方針」（令和8年2月3日変更閣議決定）の「10-1 エアコンディショナー」の判断の基準を当サイトが要約しました。ビル用マルチエアコンは、基準値1の要件を満たすこと、または基準値2の要件と冷媒の要件を満たすことで基準値1とする扱いです。冷媒の要件は、フロン排出抑制法の告示で目標値・目標年度が定められた製品に適用されます。2026年11月20日確認。"
        />

        <DataTable
          caption="能力別の基準エネルギー消費効率（当サイトの計算）"
          head={["能力", "四方向カセット形 基準値1", "四方向カセット形 基準値2", "四方向カセット形以外 基準値1", "四方向カセット形以外 基準値2"]}
          rows={calcRows}
          note="基本方針の表2「業務用エアコンディショナーに係る基準エネルギー消費効率又は算定式」（複数組合せ形のもの及び下記以外のもの）の算定式に冷房能力を当てはめて当サイトが計算しました。基準値1は小数第3位を四捨五入した計算値、基準値2は算定値に88/100を乗じて小数点以下1桁未満を切り捨てた値です。単位は通年エネルギー消費効率（APF）。マルチタイプで室内機を個別制御するもの、床置きダクト接続形は別の算定式です。P形の能力は冷房能力の目安で、実際の判定は機種ごとの定格冷房能力で行います。"
        />

        <DataTable
          caption="判断の基準の対象にならないエアコン（備考1より抜粋）"
          head={["機器", "扱い"]}
          rows={excludeRows}
          note="基本方針 10-1 の備考1に列挙された14項目のうち、店舗・事務所の導入で関係しやすいものを当サイトが抜粋しました。"
        />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">機種を選ぶときの確認方法</h2>
          <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>カタログで室内機の形（四方向カセット形かどうか）と定格冷房能力、APF を確認し、上の算定式の値と比べます。</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>冷媒の種類（地球温暖化係数）を確認します。冷媒については<Link href="/guide/r22/" className="text-[#1E40AF] underline">R22冷媒の業務用エアコン</Link>でもご説明しています。</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>常時監視システムは、本体に内蔵されたものと別売の専用機器を接続するものの両方が対象です。使用開始時点で接続とサービス契約が済んでいる必要があるため、見積もりの段階で販売店に確認してください。</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>導入後の点検・記録の義務は<Link href="/guide/fron-law/" className="text-[#1E40AF] underline">フロン排出抑制法と業務用エアコン</Link>にまとめています。</li>
          </ul>
        </section>

        <Faqs faqs={faqs} />

        <Sources sources={sources} checked={CHECKED} label={SRC_LABEL} />
      </main>
      <SiteFooter />
    </>
  );
}
