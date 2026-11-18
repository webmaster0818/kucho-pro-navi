import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { DataTable, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

const CHECKED = "2026-11-18";
const SRC_LABEL = "環境省・経済産業省のページとメーカー公式ページ";

const TITLE = "R22冷媒の業務用エアコンはまだ使える？生産終了後の修理と更新の考え方";
const DESC =
  "R22（HCFC）冷媒の業務用エアコンについて、生産終了後も使えるか、修理が難しくなる理由、R410A・R32との違い、更新時に既設配管を使えるかを、環境省のフロン排出抑制法ポータルサイトとダイキン・三菱電機・日立の公式ページ（2026年11月18日確認）で整理しました。";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/r22/" },
  title: TITLE,
  description: DESC,
};

const ENV = "https://www.env.go.jp/earth/furon/";

const refrigerantRows = [
  ["R22", "HCFC（オゾン層を破壊する物質）", "—", "生産は終了。既存機器の使用や市中在庫の使用は禁止されていない"],
  ["R410A", "HFC（代替フロン）", "2,090", "指定製品の表で、店舗・オフィス用エアコンの「現在使用されている主な冷媒」として記載"],
  ["R32", "HFC（代替フロン）", "675", "GWPが店舗・オフィス用エアコンの目標値（750）を下回る冷媒（同表では家庭用エアコンの主な冷媒として記載）"],
];

const goalRows = [
  ["店舗・オフィス用エアコン（床置型等除く・法定冷凍能力3トン未満）", "750", "2020年度"],
  ["店舗・オフィス用エアコン（床置型等除く・法定冷凍能力3トン以上）", "750", "2023年度"],
  ["ビル用マルチエアコン（新設・冷媒配管一式の更新を伴うもの。冷暖同時運転型・寒冷地用等を除く）", "750", "2025年度"],
  ["設備用エアコン（新設・冷媒配管一式の更新を伴うもの。特定用途対応機器などを除く）", "750", "2027年度"],
];

const makerRows = [
  ["ダイキン", "R22冷媒は既に生産を終了。銘板シールに冷媒R22の記載がある室外機は更新対象機種。冷媒の入手困難や価格高騰、補修用性能部品の保有状況により、故障しても修理が困難になる場合がある"],
  ["三菱電機", "中温用パッケージエアコンは、リニューアルや圧縮機故障による入替えでも洗浄レスでR22冷媒の既設配管を利用できると案内。リプレースFitマルチ（店舗・事務所用マルチエアコン）は、入替工事の際に既設の配管を洗浄レスで利用できると案内"],
  ["日立", "店舗・オフィス用エアコンは、条件を満たせば洗浄レスで既設配管を利用できると案内（配管長（総長）が50mを超える場合は配管洗浄が必要。条件を満たせば既設が他社製品でも利用可。圧縮機が故障して動かない場合は別売のリニューアルキットを使用）"],
];

const faqs = [
  {
    q: "R22の業務用エアコンは、使い続けてはいけないのですか？",
    a: "使い続けること自体は禁止されていません。環境省・経済産業省のフロン排出抑制法ポータルサイトのFAQでは、HCFCの生産は全廃されたものの、機器の使用や市中にストックされているHCFCの使用は禁止されていないと説明されています。ただし、ダイキンは冷媒の入手困難や価格高騰、部品の保有状況によって、故障時の修理が困難になる場合があると案内しています。",
  },
  {
    q: "自分のエアコンがR22かどうかは、どこで分かりますか？",
    a: "室外機の銘板（シール）に冷媒の種類が記載されています。ダイキンは、銘板シールに「冷媒R22」の記載がある室外機は更新対象機種としています。",
  },
  {
    q: "R22の機器も、フロン排出抑制法の点検は必要ですか？",
    a: "必要です。R22はHCFCでフロン類にあたるため、3か月に1回以上の簡易点検、圧縮機の電動機の定格出力が7.5kW以上の機器の定期点検、廃棄時の登録業者への引渡しなどの対象になります。詳しくはフロン排出抑制法のガイドにまとめています。",
  },
  {
    q: "R22から入れ替えるとき、配管はそのまま使えますか？",
    a: "メーカーによっては、既設配管を洗浄レスで再利用できる機種を案内しています。三菱電機は中温用パッケージエアコンでR22冷媒の既設配管を洗浄レスで利用できると明記しており、日立は店舗・オフィス用エアコンで、配管長などの条件を満たせば洗浄レスで既設配管を利用できるとしています。使えるかどうかは配管の状態や長さによって変わるため、業者の現地調査で確認してください。",
  },
];

const sources = [
  { label: "環境省・経済産業省 フロン排出抑制法ポータルサイト「FAQ」（全般 Q4・Q5ほか）", url: `${ENV}faq/index.html` },
  { label: "環境省 フロン排出抑制法パンフレット（2025年3月版・指定製品の目標値と主な冷媒のGWP）", url: `${ENV}files/int_01-16_202503.pdf` },
  { label: "ダイキン工業「R22冷媒(HCFC)生産終了のお知らせ」", url: "https://www.ac.daikin.co.jp/r22" },
  { label: "三菱電機 中温用パッケージエアコン", url: "https://www.mitsubishielectric.co.jp/ldm/slim/outdoorunit/midtemp/" },
  { label: "三菱電機 リプレースFitマルチ（店舗・事務所用マルチエアコン）", url: "https://www.mitsubishielectric.co.jp/ldm/slim/outdoorunit/rpfit/" },
  { label: "日立 店舗・オフィス用エアコン リニューアルへの対応", url: "https://www.hitachi-gls.co.jp/products/office/outunit/renewal.html" },
];

export default function R22Page() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ガイド" }, { label: "R22冷媒の業務用エアコン" }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          R22冷媒の業務用エアコン｜生産終了後も使える？修理と更新の判断材料
        </h1>
        <UpdatedNote checked={CHECKED} label="環境省・経済産業省のページとメーカー公式ページ" />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            R22はHCFCと呼ばれるオゾン層を破壊する冷媒で、生産はすでに終了しています。ただし、R22を使う業務用エアコンを使い続けることや、市中に残っているR22を使うことは禁止されていません（環境省・経済産業省 フロン排出抑制法ポータルサイトのFAQ）。
            一方で、ダイキンは「2020年に実質全廃」とし、冷媒の入手困難や価格高騰、補修用性能部品の保有状況によって、故障しても修理が困難になる場合があると案内しています。故障してから慌てないよう、銘板で冷媒を確認し、更新の見積もりを早めに取っておくことが判断材料になります。
          </p>
        </div>

        <DataTable
          caption="R22と現在の主な冷媒"
          head={["冷媒", "種類", "GWP（地球温暖化係数）", "位置づけ"]}
          rows={refrigerantRows}
          note="GWPは環境省パンフレット（2025年3月版）の指定製品の表に記載の値。R22の扱いはフロン排出抑制法ポータルサイトFAQ（全般 Q4）による。2026年11月18日確認。"
        />

        <DataTable
          caption="業務用エアコンの低GWP化の目標（指定製品制度）"
          head={["製品の区分", "目標値（GWP）", "目標年度"]}
          rows={goalRows}
          note="環境省パンフレット（2025年3月版、2023年2月現在の区分）より抜粋。メーカーが出荷する製品の加重平均で目標の達成を求める制度で、利用者に冷媒の種類を指定するものではありません。"
        />

        <h2 className="text-xl font-bold text-gray-800 mb-4">メーカー各社のR22機器への案内</h2>
        <DataTable
          head={["メーカー", "公式ページの案内（2026年11月18日確認）"]}
          rows={makerRows}
          note="並びは順位ではありません。各社の対応機種や条件は出典のページで確認してください。"
        />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">修理か更新かを判断するときの確認事項</h2>
          <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>室外機の銘板で冷媒がR22かどうか、製造年はいつか</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>故障の内容が冷媒の補充を必要とするものか（フロン排出抑制法では、漏えいが見つかった場合は修理をしてから充塡するのが原則です）</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>メーカーの補修用性能部品が残っているか（修理を依頼する業者・メーカー窓口に確認）</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>更新する場合、既設配管を再利用できる機種か（業者の現地調査で確認）</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>自治体の省エネ設備の補助金が使える時期か（多くは公募期間が限られています）</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            既設配管を使える更新専用機種は
            <Link href="/guide/renewal-model/" className="text-[#1E40AF] underline">更新専用機種と既設配管の再利用</Link>
            、管理者の点検義務は
            <Link href="/guide/fron-law/" className="text-[#1E40AF] underline">フロン排出抑制法のガイド</Link>
            、税務上の耐用年数は
            <Link href="/guide/useful-life/" className="text-[#1E40AF] underline">業務用エアコンの耐用年数</Link>
            、入れ替えの時期と補助金は
            <Link href="/guide/timing/" className="text-[#1E40AF] underline">発注の時期のガイド</Link>
            、古い機種と新しい機種の電気代の差の目安は
            <Link href="/guide/electricity-cost/" className="text-[#1E40AF] underline">業務用エアコンの電気代</Link>
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
