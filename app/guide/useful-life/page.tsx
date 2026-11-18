import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { DataTable, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

const CHECKED = "2026-11-18";
const SRC_LABEL = "国税庁・e-Gov法令検索ほか";

const TITLE = "業務用エアコンの耐用年数は6年・13年・15年｜器具備品と建物附属設備の分かれ目（22kW）";
const DESC =
  "業務用エアコンの法定耐用年数（器具及び備品の冷房用・暖房用機器は6年、建物附属設備の冷暖房設備は冷凍機の出力22kW以下で13年・それ以外で15年）と、どちらに当たるかの判断基準を、国税庁の耐用年数表・通達と減価償却資産の耐用年数等に関する省令（2026年11月18日確認）をもとに整理しました。";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/useful-life/" },
  title: TITLE,
  description: DESC,
};

const NTA_TSU = "https://www.nta.go.jp/law/tsutatsu/kobetsu/sonota/700525/02/";

const lifeRows = [
  ["器具及び備品", "家具、電気機器、ガス機器、家庭用品（他に掲げてあるものを除く。） ― 冷房用・暖房用機器", "6年"],
  ["建物附属設備", "冷房、暖房、通風又はボイラー設備 ― 冷暖房設備（冷凍機の出力が22kW以下のもの）", "13年"],
  ["建物附属設備", "冷房、暖房、通風又はボイラー設備 ― その他のもの", "15年"],
];

const kwRows = [
  ["冷房能力（例：P140形＝14.0kW）", "カタログ・見積書の型番", "機種の能力（馬力）の選定"],
  ["圧縮機の電動機の定格出力 7.5kW・50kW", "室外機の銘板（定格出力・呼称出力・電動機出力・圧縮機）", "フロン排出抑制法の定期点検の要否と頻度"],
  ["冷凍機の出力 22kW（冷凍機に直結する電動機の出力）", "室外機の銘板・メーカーの仕様書", "建物附属設備の冷暖房設備の耐用年数（13年か15年か）"],
];

const faqs = [
  {
    q: "業務用エアコンの耐用年数は何年ですか？",
    a: "税法上の区分によって6年・13年・15年のいずれかです。器具及び備品の「冷房用・暖房用機器」に当たれば6年、建物附属設備の「冷暖房設備」に当たれば、冷凍機の出力が22kW以下で13年、それを超えると15年です（国税庁の耐用年数表、減価償却資産の耐用年数等に関する省令 別表第一）。",
  },
  {
    q: "器具備品（6年）と建物附属設備（13年・15年）は、どう分かれますか？",
    a: "国税庁の通達2-7-4では、器具備品の「冷房用又は暖房用機器」に当たるのは、いわゆるウインドータイプのルームクーラー又はエアーコンディショナー、電気ストーブ等としています。そのうえで、パッケージドタイプのエアーコンディショナーでも、ダクトを通じて相当広範囲にわたって冷房するものは、器具備品ではなく建物附属設備の冷房設備に当たるとしています（通達2-2-4にも同じ趣旨の記載があります）。個別の設備がどちらに当たるかは、税理士または所轄の税務署に確認してください。",
  },
  {
    q: "22kWは、エアコンの冷房能力のことですか？",
    a: "違います。通達2-2-4では、冷暖房設備の「冷凍機の出力」とは、冷凍機に直結する電動機の出力をいうとしています。カタログの冷房能力（例：P140形の14.0kW）とは別の数値のため、室外機の銘板やメーカーの仕様書で確認します。また、22kW以下の区分には冷暖房共用のもののほか、冷房専用のものも含まれます。",
  },
  {
    q: "耐用年数を過ぎたら、エアコンは交換しなければなりませんか？",
    a: "法定耐用年数は減価償却の計算に使う年数で、使用できる期間や交換の時期を定めたものではありません。交換の判断では、冷媒の種類（R22かどうか）、修理部品の有無、故障の頻度、電気代、補助金の時期をあわせて検討するのが現実的です。",
  },
];

const sources = [
  { label: "国税庁 確定申告書等作成コーナー よくある質問「耐用年数（器具・備品）（その1）」", url: "https://www.keisan.nta.go.jp/r5yokuaru/aoiroshinkoku/hitsuyokeihi/genkashokyakuhi/taiyonensukigu1.html" },
  { label: "国税庁 確定申告書等作成コーナー よくある質問「耐用年数表」", url: "https://www.keisan.nta.go.jp/r5yokuaru/aoiroshinkoku/hitsuyokeihi/genkashokyakuhi/taiyonensuhyo.html" },
  { label: "e-Gov法令検索 減価償却資産の耐用年数等に関する省令（別表第一 建物附属設備）", url: "https://laws.e-gov.go.jp/law/340M50000040015" },
  { label: "国税庁 耐用年数の適用等に関する取扱通達 第2章第2節（2-2-4 冷房、暖房、通風又はボイラー設備）", url: `${NTA_TSU}02_02.htm` },
  { label: "国税庁 耐用年数の適用等に関する取扱通達 第2章第7節（2-7-4 冷房用又は暖房用機器）", url: `${NTA_TSU}02_07.htm` },
  { label: "環境省・経済産業省 フロン排出抑制法ポータルサイト「FAQ」（Q51 定期点検の7.5kWの確認方法）", url: "https://www.env.go.jp/earth/furon/faq/index.html" },
];

export default function UsefulLifePage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ガイド" }, { label: "業務用エアコンの耐用年数" }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコンの耐用年数｜6年・13年・15年の区分と判断基準
        </h1>
        <UpdatedNote checked={CHECKED} label="国税庁・e-Gov法令検索のページ" />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            業務用エアコンの法定耐用年数は、税法上の区分によって6年・13年・15年に分かれます。器具及び備品の「冷房用・暖房用機器」に当たる場合は6年、建物附属設備の「冷暖房設備」に当たる場合は、冷凍機の出力が22kW以下なら13年、それを超えると15年です。
            国税庁の通達では、パッケージドタイプのエアーコンディショナーでも、ダクトを通じて相当広範囲にわたって冷房するものは建物附属設備に当たるとしています。22kWは冷房能力ではなく、冷凍機に直結する電動機の出力です。
          </p>
        </div>

        <DataTable
          caption="業務用エアコンに関係する法定耐用年数"
          head={["資産の種類", "構造・用途と細目", "耐用年数"]}
          rows={lifeRows}
          note="器具及び備品は国税庁「耐用年数（器具・備品）（その1）」、建物附属設備は減価償却資産の耐用年数等に関する省令 別表第一（e-Gov法令検索）より。2026年11月18日確認。"
        />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">器具備品か建物附属設備かの判断基準</h2>
          <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>器具備品の「冷房用又は暖房用機器」には、いわゆるウインドータイプのルームクーラー又はエアーコンディショナー、電気ストーブ等が該当する（通達2-7-4）</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>冷却装置、冷風装置等が一つのキャビネットに組み合わされたパッケージドタイプのエアーコンディショナーでも、ダクトを通じて相当広範囲にわたって冷房するものは、建物附属設備の冷房設備に該当する（通達2-2-4（1）、2-7-4（注））</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>「冷暖房設備（冷凍機の出力が22kW以下のもの）」には、冷暖房共用のもののほか、冷房専用のものも含まれる（通達2-2-4（2））</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>「冷凍機の出力」とは、冷凍機に直結する電動機の出力をいう（通達2-2-4（3））</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            実際の資産区分は、設置の方法や契約内容によって判断が分かれることがあります。決算・申告に使う場合は、税理士または所轄の税務署に確認してください。
          </p>
        </section>

        <DataTable
          caption="業務用エアコンで混同しやすい3つの「kW」"
          head={["数値", "確認する場所", "使われる場面"]}
          rows={kwRows}
          note="当サイトが、国税庁の通達2-2-4、フロン排出抑制法ポータルサイトのFAQ（Q51）、当サイトの馬力・kW換算早見表の内容を突き合わせて整理したものです。"
        />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">耐用年数と入れ替えの判断</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            法定耐用年数は減価償却のための年数で、機器を使える期間を示すものではありません。入れ替えを検討するときは、冷媒がR22かどうか、修理部品が手に入るか、補助金の公募時期に間に合うかをあわせて確認してください。
            冷媒R22の機器は
            <Link href="/guide/r22/" className="text-[#1E40AF] underline">R22冷媒の業務用エアコン</Link>
            、点検の義務は
            <Link href="/guide/fron-law/" className="text-[#1E40AF] underline">フロン排出抑制法のガイド</Link>
            、リースで導入する場合のリース期間の考え方は
            <Link href="/ranking/lease/" className="text-[#1E40AF] underline">リース対応業者のページ</Link>
            、能力のkWと馬力の関係は
            <Link href="/guide/horsepower/" className="text-[#1E40AF] underline">馬力・kW換算早見表</Link>
            、入れ替えによる電気代の差の目安は
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
