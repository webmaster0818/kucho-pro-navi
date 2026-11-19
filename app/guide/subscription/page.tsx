import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { DataTable, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

const CHECKED = "2026-11-20";
const SRC_LABEL = "ダイキン工業の公式ページ（ZEAS Connect）";

const TITLE = "業務用エアコンのサブスク｜ダイキン ZEAS Connect の月額に含まれるもの・リースとの違い・中途解約";
const DESC =
  "業務用エアコンのサブスク（定額利用サービス）について、ダイキン「ZEAS Connect」の公式ページ（2026年11月20日確認）をもとに、月額に含まれるもの、契約期間3〜7年、リースとの違い（会計処理・中途解約・満了後の扱い）、対象外の室内機、利用者が負う義務を整理しました。";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/subscription/" },
  title: TITLE,
  description: DESC,
};

const ZC_TOP = "https://www.ac.daikin.co.jp/shopoffice/zeas_connect";
const ZC_FAQ = "https://www.ac.daikin.co.jp/shopoffice/zeas_connect/faq";
const ZC_PLAN = "https://www.ac.daikin.co.jp/shopoffice/zeas_connect/modal/plan";

const includeRows = [
  ["エアコン機器本体＋設置工事費", "含まれる。本体は「標準タイプ」「省エネタイプ」「寒冷地向けタイプ」の3種類から選ぶ"],
  ["無償修理サービス", "含まれる。提携ファイナンス会社の「安心保証」で、通常使用における故障が対象。消耗品の交換や保守サービスは有償"],
  ["動産総合保険", "付保されている。地震・噴火・津波による損害や、故意または重大な過失による損害は対象外"],
  ["空調管理サポート", "含まれる。冷媒漏れや機器の異常を検知するとメールで通知。フロン排出抑制法の3か月ごとの簡易点検の時期もメールで知らせ、点検サポートツールで記録できる"],
  ["フィルターお掃除代行・空気Kireiサービス", "オプションメニュー（別契約）"],
  ["撤去・返還の費用", "含まれない（利用者の負担）"],
];

const compareRows = [
  ["対象物件", "移設可能な機械設備", "ダイキン・販売店が指定する対象商品"],
  ["会計処理", "売買処理", "賃貸借処理"],
  ["契約期間", "法定耐用年数による", "短期〜長期（3〜7年）"],
  ["物件の所有権", "リース会社", "提携ファイナンス会社"],
  ["固定資産税", "リース会社が納付", "提携ファイナンス会社が納付"],
  ["動産保険", "有", "有"],
  ["中途解約", "不可", "可能（所定の解約金と事務手数料〈月額3か月相当〉が必要）"],
  ["契約期間満了後", "再リース・返却", "更新・返却（更新時は審査があり、最新機種に入れ替え）"],
];

const faqs = [
  {
    q: "サブスクとリースは何が違いますか？",
    a: "ダイキンの ZEAS Connect のよくあるご質問では、リース（所有権移転外ファイナンス・リース）は中途解約が不可で契約期間は法定耐用年数による一方、ZEAS Connect は中途解約が可能で契約期間は3〜7年としています。会計処理はリースが売買処理、ZEAS Connect が賃貸借処理と整理されています。ただし、税務・会計面の処理は税理士・会計士等に確認するよう案内されています。",
  },
  {
    q: "どの室内機でも契約できますか？",
    a: "ダクト形とビルトイン形は対象外です。ダイキンは、ZEAS Connect は機器の貸出しを含めたサービスであり、ダクト形・ビルトイン形は建物に付着して移設が難しい「建物附属設備」と見なされる点も考慮して対象外としていると説明しています。対象機種は馬力や室内機の形態で異なるため、ダイキンの担当営業への確認が必要です。",
  },
  {
    q: "サブスクにすれば、フロン排出抑制法の点検は不要になりますか？",
    a: "不要にはなりません。ダイキンは、フロン排出抑制法における「管理者」は利用者（お客様）であり、管理者としての義務は利用者が適切に行うよう案内しています。空調管理サポートは簡易点検の時期の通知や記録を支援するもので、点検の実施そのものは管理者の義務です。",
  },
  {
    q: "契約が終わったらエアコンはどうなりますか？",
    a: "サービス契約の延長はなく、継続する場合は改めて ZEAS Connect を契約し、最新機種に入れ替えます（更新時は提携ファイナンス会社の審査があり、月額が変わる可能性があります）。継続しない場合は、利用者の費用負担で機器を取り外し、指定場所まで返却します。",
  },
];

const sources = [
  { label: "ダイキン工業 業務用エアコンのサブスクリプション ZEAS Connect", url: ZC_TOP },
  { label: "ダイキン工業 ZEAS Connect よくあるご質問", url: ZC_FAQ },
  { label: "ダイキン工業 ZEAS Connect 基本プラン", url: ZC_PLAN },
];

export default function SubscriptionPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ガイド" }, { label: "業務用エアコンのサブスク" }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコンのサブスク｜月額に含まれるものとリースとの違い
        </h1>
        <UpdatedNote checked={CHECKED} label={SRC_LABEL} />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            業務用エアコンのサブスク（定額利用サービス）は、機器を購入せず、本体・設置工事費・修理の保証などを月額で利用する契約です。ダイキン工業は「ZEAS Connect」の名称で提供しており、契約は提携ファイナンス会社（三井住友ファイナンス&リース株式会社・SMFLレンタル株式会社）と結びます。
            契約期間は3〜7年（8〜10年は個別相談）で、所定の解約金と事務手数料を払えば中途解約もできます。この点が、原則として中途解約できないリースとの大きな違いです。一方で、撤去・返還の費用は含まれず、フロン排出抑制法の管理者としての義務は利用者に残ります。
          </p>
        </div>

        <DataTable
          caption="ZEAS Connect の月額に含まれるもの・含まれないもの"
          head={["項目", "ダイキン公式の記載（要旨）"]}
          rows={includeRows}
          note="ダイキン公式の ZEAS Connect トップページ・基本プラン・よくあるご質問の記載を、当サイトが項目ごとに整理しました。月額料金は機種と現地の据付状況で異なり、契約には提携ファイナンス会社の事前審査が必要です。2026年11月20日確認。"
        />

        <DataTable
          caption="リースとサブスク（ZEAS Connect）の違い"
          head={["項目", "リース（所有権移転外ファイナンス・リース）", "ZEAS Connect（サブスク）"]}
          rows={compareRows}
          note="ダイキン公式「ZEAS Connect よくあるご質問」の比較表より。会計処理の記載について、ダイキンは「中小企業の会計に関する指針」で借手は賃貸借処理ができるとされていること、上場会社等や会計監査人を設置する会社には同指針が適用されないことを注記し、税務・会計面の処理は税理士・会計士・監査法人等に確認するよう案内しています。2026年11月20日確認。"
        />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">契約の前に確認すること</h2>
          <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>設置したい室内機が対象機種か（ダクト形・ビルトイン形は対象外。改装時は対象外になる場合がある）</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>中途解約の解約金の額と、事務手数料（月額3か月相当）</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>無償修理の範囲（通常使用における故障のみ。消耗品・保守は有償）</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>契約満了時に返却する場合の取外し・運搬の費用</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>経費処理の方法（顧問の税理士・会計士への確認）</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            リースに対応した業者とリースの仕組みは
            <Link href="/ranking/lease/" className="text-[#1E40AF] underline">業務用エアコンのリース対応業者</Link>
            、購入した場合の費用の目安は
            <Link href="/guide/cost/" className="text-[#1E40AF] underline">業務用エアコンの費用相場</Link>
            、管理者の点検義務は
            <Link href="/guide/fron-law/" className="text-[#1E40AF] underline">フロン排出抑制法と業務用エアコン</Link>
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
