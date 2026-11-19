import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { DataTable, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

const CHECKED = "2026-11-19";
const SRC_LABEL = "三菱電機の取扱説明書とダイキンの公式ページ";

const TITLE = "業務用エアコンの臭いの原因｜メーカーが挙げる5つの原因と店舗の業態別の対策";
const DESC =
  "業務用エアコン（店舗・オフィス用エアコン）から臭いがする原因を、三菱電機のパッケージエアコン取扱説明書とダイキンの公式ページ（2026年11月19日確認）で整理しました。室内のにおいの吸い込み、美容室の化粧品・スプレー、内部の汚れ、飲食店の油煙、厨房での使用について、メーカーの案内する対策をまとめています。";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/odor/" },
  title: TITLE,
  description: DESC,
};

const MEL_MANUAL =
  "https://dl.mitsubishielectric.co.jp/dl/ldg/wink/ssl/wink_doc/m_contents/wink/PAC_IB/rg79f008h02.pdf";

const causeRows = [
  [
    "室内のにおいの吸い込み",
    "三菱電機",
    "エアコンが壁・じゅうたん・家具から発生するガスや、衣類などにしみ込んだにおいを吸い込んで吹き出すため（「故障かな？」の項目で、故障ではないと説明）",
  ],
  [
    "化粧品・特殊なスプレー",
    "三菱電機",
    "美容室など化粧品・特殊なスプレーを頻繁に使用するところでは、臭いが熱交換器に付着し、室内ユニットから吹き出すことがある",
  ],
  [
    "内部の汚れ",
    "三菱電機",
    "数シーズン使用すると内部が汚れて性能が低下し、臭いが発生することがある。通常のお手入れとは別に保守点検契約を勧めている",
  ],
  [
    "飲食店の油・煙・蒸気",
    "ダイキン",
    "飲食店はほかの業態と比べて油・煙・蒸気が多く、エアコン内部にニオイ・ホコリがつきやすく汚れやすい。内部の自動洗浄機能付きの機種や、フィルターの自動昇降パネルなど清掃しやすいものを選ぶのがポイントと案内",
  ],
  [
    "厨房での食用油",
    "三菱電機",
    "食用油を使用するところ（厨房など）では、プラスチック部品の破損やフィルター目詰まりで機能低下が生じるため、厨房用エアコンまたはダクト空調を選定するよう案内",
  ],
];

const measureRows = [
  ["美容室・理容室", "化粧品・スプレーの臭いが熱交換器に付着することがある（三菱電機）", "設置場所の選定時に販売店へ相談（取扱説明書では使用を避けるか販売店へ相談する環境として記載）"],
  ["飲食店（客席）", "油・煙・蒸気で内部にニオイ・ホコリがつきやすい（ダイキン）", "内部の自動洗浄機能・フィルター自動昇降パネルなど清掃しやすい機種。ダイキンは別売の「オイルガードフィルター」で内部への油煙の進入を軽減できると案内"],
  ["厨房", "食用油でプラスチック部品の破損・フィルター目詰まり（三菱電機）", "厨房用エアコンまたはダクト空調を選定。三菱電機の厨房用（PC-RP・HA11形）は1週間（100時間）ごとにフィルターを点検し、油滴が滴下する前に交換"],
  ["事務所・一般の店舗", "室内のにおいの吸い込み・内部の汚れ（三菱電機）", "フィルターの清掃と、通常のお手入れとは別の保守点検契約"],
];

const faqs = [
  {
    q: "業務用エアコンから臭いがするのは故障ですか？",
    a: "三菱電機の取扱説明書は、「部屋がにおう」場合について、エアコンが壁・じゅうたん・家具から発生するガスや衣類にしみ込んだにおいを吸い込んで吹き出すためとして、故障ではない項目に挙げています。一方で、数シーズン使用すると内部が汚れて臭いが発生することがあるとも案内しており、その場合は保守点検（内部の清掃）の対象になります。",
  },
  {
    q: "美容室で使うときに気をつけることはありますか？",
    a: "三菱電機の取扱説明書は、美容室など化粧品・特殊なスプレーを頻繁に使用するところでは、臭いが熱交換器に付着して室内ユニットから吹き出すことがあるとして、使用を避けるか販売店へ相談する環境に挙げています。導入前に販売店・施工業者へ業態を伝えて相談してください。",
  },
  {
    q: "飲食店では、どのような機種を選べばよいですか？",
    a: "ダイキンは、飲食店ではエアコン内部にニオイ・ホコリがつきやすく汚れやすいため、内部の自動洗浄機能付きの機種や、フィルターの自動昇降パネルなど清掃しやすいものを選ぶのがポイントと案内しています。また、一部の製品・機能は油煙環境での使用を推奨していない場合があるとしています。厨房については、三菱電機は厨房用エアコンまたはダクト空調を選ぶよう案内しています。",
  },
  {
    q: "内部の清掃は自分でできますか？",
    a: "三菱電機の取扱説明書は、通常のお手入れ（フィルターの清掃など）とは別に、保守点検契約を勧めています。熱交換器やドレンパンなど内部の清掃は、販売店・施工業者やメンテナンス業者に相談してください。",
  },
];

const sources = [
  { label: "三菱電機 パッケージエアコン 室内ユニット取扱説明書（PL-ZRP・EA3形ほか、冷媒R410A/R32対応）「故障かな？と思ったら」「移設・工事について」「保守点検契約のおすすめ」", url: MEL_MANUAL },
  { label: "ダイキン工業 お役立ち情報「～飲食店様向け～業務用エアコン（店舗・オフィス用エアコン）の選び方」", url: "https://www.ac.daikin.co.jp/customercenter/useful/article/32" },
  { label: "ダイキン工業 店舗・オフィスエアコン スカイエア「上手な使い方」（オイルガードフィルター）", url: "https://www.ac.daikin.co.jp/shopoffice/info/better" },
];

export default function OdorPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ガイド" }, { label: "業務用エアコンの臭い" }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコンの臭いの原因と対策｜室内のにおい・美容室・飲食店・厨房
        </h1>
        <UpdatedNote checked={CHECKED} label={SRC_LABEL} />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            業務用エアコンの臭いには、故障ではないものと、内部の汚れによるものがあります。三菱電機の取扱説明書は、エアコンが壁・家具や衣類のにおいを吸い込んで吹き出すことを故障ではない項目に挙げる一方、数シーズン使用すると内部が汚れて臭いが発生することがあるとして、保守点検契約を勧めています。
            業態による違いもあります。美容室の化粧品・スプレーの臭いは熱交換器に付着することがあり（三菱電機）、飲食店は油・煙・蒸気でエアコン内部にニオイがつきやすいとされています（ダイキン）。以下に、メーカーが挙げる原因と業態別の対策をまとめました。
          </p>
        </div>

        <DataTable
          caption="メーカーが挙げる臭いの原因"
          head={["原因", "出典", "メーカーの記載"]}
          rows={causeRows}
          note="三菱電機は室内ユニット取扱説明書（PL-ZRP・EA3形ほか）、ダイキンはお役立ち情報「飲食店様向け 業務用エアコンの選び方」の記載を当サイトが整理しました。2026年11月19日確認。"
        />

        <DataTable
          caption="業態別の注意点と対策"
          head={["業態", "臭いに関する注意点", "メーカーが案内する対策"]}
          rows={measureRows}
          note="対策は確認日時点のメーカーの記載です。機種ごとの対応（油煙環境での使用可否など）は、販売店・施工業者に業態を伝えて確認してください。"
        />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">臭いが続くときの相談先</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            フィルターを清掃しても臭いが続く場合は、購入した販売店・施工業者に点検・清掃を相談します。依頼時に伝える内容は
            <Link href="/guide/repair/" className="text-[#1E40AF] underline">業務用エアコンの修理の依頼先</Link>
            、冷えにくさも同時に起きている場合の確認項目は
            <Link href="/guide/not-cooling/" className="text-[#1E40AF] underline">業務用エアコンが冷えないとき</Link>
            、業種ごとの機種の選び方は
            <Link href="/industry/restaurant/" className="text-[#1E40AF] underline">飲食店</Link>
            ・
            <Link href="/industry/beauty-salon/" className="text-[#1E40AF] underline">美容室</Link>
            の業種別ページにまとめています。
          </p>
        </section>

        <Faqs faqs={faqs} />

        <Sources sources={sources} checked={CHECKED} label={SRC_LABEL} />
      </main>
      <SiteFooter />
    </>
  );
}
