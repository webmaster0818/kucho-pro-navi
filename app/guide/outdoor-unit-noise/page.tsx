import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { DataTable, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

const CHECKED = "2026-11-20";
const SRC_LABEL = "メーカー公式資料（日立・三菱重工・三菱電機）、環境省の手引き、岡山市・名古屋市・札幌市の公式ページ";

const TITLE = "業務用エアコンの室外機の騒音｜運転音の表示の見方・静音運転・自治体の規制の対象";
const DESC =
  "業務用エアコンの室外機の騒音について、カタログの運転音（音響パワーレベルと音圧レベル）の違い、三菱重工の公式値、三菱電機の室外サイレントモード、いつもと違う音が出たときの対応、騒音規制法と自治体の条例で規制の対象となる出力の基準（岡山市・名古屋市）を、公式・公的資料（2026年11月20日確認）をもとに整理しました。";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/outdoor-unit-noise/" },
  title: TITLE,
  description: DESC,
};

const HITACHI_APF = "https://www.hitachi-gls.co.jp/products/office/knowledge/apf.html";
const MHI_ONEFAN =
  "https://www.mhi-mth.co.jp/business/air-conditioner-for-business/air-conditioner-for-office/hyper-inverter-one-fan/";
const MEL_MANUAL =
  "https://dl.mitsubishielectric.co.jp/dl/ldg/wink/ssl/wink_doc/m_contents/wink/PAC_IB/rg79f008h02.pdf";
const ENV_GUIDE = "https://www.env.go.jp/earth/airconditioner.pdf";
const OKAYAMA = "https://www.city.okayama.jp/kurashi/cmsfiles/contents/0000016/16224/000355764.pdf";
const NAGOYA = "https://www.city.nagoya.jp/jigyou/gomi/1026075/1026219/1026220.html";
const SAPPORO = "https://www.city.sapporo.jp/kankyo/souon/sonota/souon_konpuressa.html";

const levelRows = [
  ["音響パワーレベル（dB）", "音源が発する音響エネルギーの大きさをもとにした量", "音源との距離や方向によらず、運転音の大きさで一義的に決まる"],
  ["音圧レベル（運転音レベル・dB）", "音源から離れたある1点での音の大きさ（音圧）をもとにした量", "同じ運転音でも、音源との距離や方向で値が変わる"],
];

const mhiRows = [
  ["4馬力", "70"],
  ["5馬力", "70"],
  ["6馬力", "72"],
];

const ruleRows = [
  ["騒音規制法（国）", "空気圧縮機・送風機", "原動機の定格出力 7.5kW以上", "札幌市の案内。空気圧縮機は、環境大臣が指定する低騒音の機器を除く（指定すべき機器は現状では存在しないとされている）"],
  ["岡山市環境保全条例", "冷凍機", "原動機の定格出力 7.5kW以上", "原動機ごとに判断。室外機に5.5kWの原動機が2つあるパッケージ型エアコンは該当しないとの回答"],
  ["名古屋市 環境保全条例（市民の健康と安全を確保する環境の保全に関する条例）", "圧縮機・冷凍機", "原動機の定格出力 3.75kW以上", "法律の対象を除く。圧縮機は環境大臣が指定するものを除く"],
];

const faqs = [
  {
    q: "カタログの運転音と、設置したあとに聞こえる音が違うのはなぜですか？",
    a: "三菱電機の取扱説明書は、室内の運転音は反響などにより、無響室で測った仕様値より一般に高くなるとしています。目安として、吸音効果の高い部屋（放送スタジオなど）で3〜7dB、普通の部屋（応接室・ホテルロビーなど）で6〜10dB、吸音効果の低い部屋（オフィス・ビジネスホテルなど）で9〜13dB高くなる例が示されています（室内ユニットについての記載）。室外機も周囲の壁や距離で聞こえ方が変わるため、設置前に業者と置き場所を確認してください。",
  },
  {
    q: "夜間だけ室外機の音を小さくできますか？",
    a: "三菱電機の取扱説明書では、室外サイレントモード運転として、室外ユニットの静音性を優先した運転を行い、1週間の開始時刻・停止時刻を設定でき、静音レベルを「標準」「中」「静」から選べると案内しています。ただし低騒音を優先するため能力がセーブされ、室外ユニットのタイプにより設定できない場合があります。逆に、ハイパワー運転では室外・室内ユニットの騒音が大きくなることがあるとしています。",
  },
  {
    q: "室外機からいつもと違う音がします。",
    a: "環境省の簡易点検の手引きでは、室外機の振動や運転音がいつもと違う場合は専門業者に連絡するよう案内しています。異常に早く気づくには日常の正常な振動や音を把握しておく必要があり、日頃からの点検を勧めています。防護柵のない屋上の室外機は点検せず、外板は外さないよう注意しています。",
  },
  {
    q: "店舗の室外機は、騒音の届出が必要ですか？",
    a: "自治体の条例と、室外機の原動機（圧縮機などのモーター）の定格出力によります。岡山市は、条例の特定施設（原動機の定格出力7.5kW以上の冷凍機）を原動機ごとに判断し、5.5kWの原動機が2つのパッケージ型エアコンは該当しないと回答したうえで、苦情の未然防止のため敷地境界付近に設置しないなど設置場所に配慮するよう求めています。名古屋市の条例は原動機の定格出力3.75kW以上の冷凍機を対象にしています。設置する市区町村の環境担当課に確認してください。",
  },
];

const sources = [
  { label: "日立 店舗・オフィス用エアコン（音響パワーレベル運転音とは）", url: HITACHI_APF },
  { label: "三菱重工サーマルシステムズ ハイパーインバータ 1ファン室外ユニット", url: MHI_ONEFAN },
  { label: "三菱電機 パッケージエアコン 室内ユニット取扱説明書（室外サイレントモード運転・故障かな？と思ったら）", url: MEL_MANUAL },
  { label: "環境省 業務用冷凍空調機器ユーザーによる簡易点検の手引き（業務用エアコン編）", url: ENV_GUIDE },
  { label: "岡山市 騒音・振動関係の届出についてのよくある質問", url: OKAYAMA },
  { label: "名古屋市 騒音規制法、振動規制法及び条例における特定施設等の見直し", url: NAGOYA },
  { label: "札幌市 コンプレッサーの規制対象要件の改正（騒音規制法・振動規制法）", url: SAPPORO },
];

export default function OutdoorUnitNoisePage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ガイド" }, { label: "室外機の騒音" }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコンの室外機の騒音｜運転音の見方と静音運転・規制の対象
        </h1>
        <UpdatedNote checked={CHECKED} label={SRC_LABEL} />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            業務用エアコンの室外機の運転音は、カタログで「音響パワーレベル」または「音圧レベル」のdB値で示されます。日立は、業務用エアコンのJIS規格の改正に基づき、従来の音圧レベルから、距離や方向で変わらない音響パワーレベルに測定方法を変更したと説明しています。例として、三菱重工の1ファン室外ユニットは4・5馬力が70dB、6馬力が72dB（パワーレベル）です。
            近隣への音が心配な場合は、置き場所の検討に加え、室外サイレントモードなど静音運転の機能を確認してください。室外機が騒音の規制の対象になるかは、自治体の条例と原動機の出力で決まります。
          </p>
        </div>

        <DataTable
          caption="運転音の2つの表示の違い"
          head={["表示", "何をもとにした量か", "特徴"]}
          rows={levelRows}
          note="日立 店舗・オフィス用エアコン「音響パワーレベル運転音とは」の説明より当サイトが整理しました。値の基準が異なるため、パワーレベルと音圧レベルの数値はそのまま比べられません。2026年11月20日確認。"
        />

        <DataTable
          caption="室外ユニットの運転音の例（三菱重工 ハイパーインバータ 1ファン室外ユニット）"
          head={["馬力", "騒音（パワーレベル・dB）"]}
          rows={mhiRows}
          note="三菱重工サーマルシステムズの公式ページの表より。2026年11月20日確認。"
        />

        <DataTable
          caption="騒音の規制の対象となる機器と出力の基準（例）"
          head={["法令・条例", "対象の機器", "出力の基準", "補足"]}
          rows={ruleRows}
          note="札幌市・岡山市・名古屋市の公式ページの記載を当サイトが並べました。業務用エアコンの室外機がどの区分に当たるか、また他の自治体の基準は、設置する市区町村で異なります。2026年11月20日確認。"
        />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">騒音を抑えるために確認すること</h2>
          <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>見積もりの機種の運転音が、パワーレベルと音圧レベルのどちらで書かれているか</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>室外機を敷地境界や隣家の窓の近くに置かない（岡山市は苦情の未然防止のため敷地境界付近を避けるよう求めています）</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>夜間に静音運転を設定できる機種か（室外ユニットのタイプにより設定できない場合がある）</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>設置後は、日頃の運転音を把握しておき、いつもと違う振動や音に気づけるようにする</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            室外機の強風・台風への備えは
            <Link href="/guide/outdoor-unit-typhoon/" className="text-[#1E40AF] underline">室外機の台風対策</Link>
            、異常音を含む簡易点検の義務は
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
