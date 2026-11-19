import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { DataTable, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

const CHECKED = "2026-11-19";
const SRC_LABEL = "三菱電機の取扱説明書とダイキンの公式ページ";

const TITLE = "業務用エアコンの修理業者はどこに頼む？依頼先の順番・伝える6項目・修理料金の内訳";
const DESC =
  "業務用エアコン（店舗・オフィス用エアコン）の修理をどこに依頼するかを、三菱電機のパッケージエアコン取扱説明書とダイキンの修理受付ページ（2026年11月19日確認）で整理しました。依頼先の順番、連絡時に伝える6項目、修理料金の内訳、保証期間と補修用性能部品の保有期間、主要部品の保全周期の目安を掲載しています。";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/repair/" },
  title: TITLE,
  description: DESC,
};

const MEL_MANUAL =
  "https://dl.mitsubishielectric.co.jp/dl/ldg/wink/ssl/wink_doc/m_contents/wink/PAC_IB/rg79f008h02.pdf";

const routeRows = [
  ["1", "購入した販売店・施工者・設備業者", "三菱電機の取扱説明書は「修理・取扱い・お手入れ」などの相談先として最初に挙げています。不具合のあるときは、電源を切ってから購入した販売店に連絡するよう案内しています"],
  ["2", "メーカーの修理窓口", "三菱電機は、購入先に依頼できない場合に「三菱電機 修理窓口・ご相談窓口」へ問い合わせるよう案内しています。ダイキンは「修理のご相談・お申し込み」のページで、ウェブからの修理申し込みを受け付けています（店舗用エアコンは申し込み前の故障診断の対象）"],
];

const tellRows = [
  ["1. 品名", "パッケージエアコン"],
  ["2. 形名・製品番号", "室内ユニットは保証書、室外ユニットは室外製品銘板に記載"],
  ["3. 購入日", "年月日"],
  ["4. 故障の状況", "できるだけ詳しく（リモコンのエラー表示記号なども）"],
  ["5. 住所", "付近の目印なども"],
  ["6. 名前・電話番号", "—"],
];

const termRows = [
  ["保証期間", "購入日・据付日・試運転完了日のいずれかから起算して1年間（保証期間中でも有償になる場合がある）"],
  ["保証期間が過ぎた後", "修理すれば使用できる場合は、希望により有償で修理"],
  ["修理料金の内訳", "技術料＋部品代＋（出張料）など"],
  ["補修用性能部品の保有期間", "パッケージエアコンは製造打切り後9年（製品の機能を維持するために必要な部品）"],
];

const partsRows = [
  ["圧縮機", "20,000時間"],
  ["モーター（ファン・ルーバー・ドレンポンプ用など）", "20,000時間"],
  ["ベアリング", "15,000時間"],
  ["電子基板類", "25,000時間"],
  ["熱交換器", "5年（点検周期1年）"],
  ["膨張弁・バルブ（電磁弁・四方弁など）", "20,000時間"],
  ["センサー（サーミスタ・圧力センサーなど）", "5年"],
  ["ドレンパン", "8年"],
];

const faqs = [
  {
    q: "業務用エアコンの修理は、最初にどこへ連絡すればよいですか？",
    a: "三菱電機の取扱説明書は、修理の相談先として購入した販売店・施工者・設備業者を最初に挙げ、購入先に依頼できない場合はメーカーの修理窓口に問い合わせるよう案内しています。",
  },
  {
    q: "修理料金はどのような内訳になりますか？",
    a: "三菱電機の取扱説明書では、修理料金は技術料＋部品代＋（出張料）などで構成されていると説明されています。金額は故障の内容と部品で変わるため、当サイトでは修理料金の相場は掲載していません。依頼時に見積もりを確認してください。",
  },
  {
    q: "古い機種は修理できないことがありますか？",
    a: "三菱電機はパッケージエアコンの補修用性能部品の保有期間を製造打切り後9年としています。この期間を過ぎた機種は、部品がなく修理できない場合があります。R22冷媒の機種の修理と更新の考え方は、R22冷媒のガイドにまとめています。",
  },
  {
    q: "故障を防ぐために、修理とは別にできることはありますか？",
    a: "三菱電機は、数シーズン使用すると内部が汚れて性能が低下し、臭いの発生やドレンポンプ・ドレンホースの詰まりによる水漏れ・異常停止が起こることがあるとして、通常のお手入れとは別に保守点検契約を勧めています。ダイキンは、年に1回程度、専門業者によるドレンポンプとドレンパンの点検・清掃を行うよう案内しています。",
  },
];

const sources = [
  { label: "三菱電機 パッケージエアコン 室内ユニット取扱説明書（PL-ZRP・EA3形ほか、冷媒R410A/R32対応）「保証とアフターサービス」", url: MEL_MANUAL },
  { label: "ダイキン工業「修理のご相談・お申し込み」", url: "https://www.daikincc.com/acceptNew/ippanTop.php" },
  { label: "ダイキン工業 お役立ち情報「業務用エアコンの水漏れ原因とは？」（ドレンポンプ・ドレンパンの点検）", url: "https://www.ac.daikin.co.jp/customercenter/useful/article/55" },
];

export default function RepairPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ガイド" }, { label: "業務用エアコンの修理の依頼先" }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコンの修理業者はどこに頼む？依頼先の順番と連絡時に伝える内容
        </h1>
        <UpdatedNote checked={CHECKED} label={SRC_LABEL} />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            業務用エアコンの修理は、まず購入した販売店・施工者・設備業者に依頼します。三菱電機のパッケージエアコン取扱説明書はこの順番を明記しており、購入先に依頼できない場合はメーカーの修理窓口に問い合わせるよう案内しています。ダイキンも、ウェブから修理を申し込めるページを設けています。
            連絡するときは、形名・製品番号（室外ユニットは銘板に記載）と、リモコンのエラー表示を含む故障の状況を伝えます。修理料金は技術料・部品代・出張料などで構成され、パッケージエアコンの補修用性能部品の保有期間は製造打切り後9年です（いずれも三菱電機の取扱説明書）。
          </p>
        </div>

        <DataTable
          caption="修理の依頼先の順番"
          head={["順番", "依頼先", "メーカーの案内"]}
          rows={routeRows}
          note="三菱電機は室内ユニット取扱説明書（PL-ZRP・EA3形ほか）の「保証とアフターサービス」、ダイキンは「修理のご相談・お申し込み」の記載による。2026年11月19日確認。メーカー窓口の電話番号・受付時間は変更されることがあるため、各社の公式ページでご確認ください。"
        />

        <DataTable
          caption="修理を依頼するときに伝える6項目"
          head={["項目", "内容"]}
          rows={tellRows}
          note="三菱電機の取扱説明書「ご連絡いただきたい内容」より。依頼の前に、取扱説明書の「故障かな？と思ったら」に従って確認するよう案内されています。"
        />

        <DataTable
          caption="保証期間・修理料金・部品の保有期間"
          head={["項目", "三菱電機の取扱説明書の記載"]}
          rows={termRows}
          note="保証の条件は機種・保証書の規定によります。お使いの機種の保証書で確認してください。"
        />

        <DataTable
          caption="主要部品の保全周期の目安（交換または修理）"
          head={["主要部品", "保全周期"]}
          rows={partsRows}
          note="三菱電機の取扱説明書「点検周期および保全周期の一覧」より。1日10時間・年2,500時間の運転で、頻繁な発停のない通常の使用を前提とした目安で、保証期間を示すものではありません。高温多湿の場所、24時間空調、油煙・塩分の多い場所などでは周期を短くする必要があるとされています。"
        />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">修理を依頼する前の確認</h2>
          <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>リモコンにエラーコードが表示されている場合、三菱電機は自分では修理せず、電源を切って販売店に製品名とリモコンの表示内容を連絡するよう案内しています。</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>冷えないだけの場合は、フィルターや室外機の周囲など、取扱説明書で故障ではないとされる原因を先に確認します。</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>冷媒漏れの修理では、漏れ箇所の修理が確実に行われたことをサービスマンに確認するよう、三菱電機は案内しています。</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            冷えないときの確認項目は
            <Link href="/guide/not-cooling/" className="text-[#1E40AF] underline">業務用エアコンが冷えないとき</Link>
            、臭いの原因は
            <Link href="/guide/odor/" className="text-[#1E40AF] underline">業務用エアコンの臭い</Link>
            、修理か入れ替えかの判断は
            <Link href="/guide/r22/" className="text-[#1E40AF] underline">R22冷媒の業務用エアコン</Link>
            と
            <Link href="/guide/useful-life/" className="text-[#1E40AF] underline">業務用エアコンの耐用年数</Link>
            、入れ替えを依頼できる業者は
            <Link href="/ranking/" className="text-[#1E40AF] underline">業者一覧</Link>
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
