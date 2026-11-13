import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { DataTable, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

const TITLE = "寒冷地向け業務用エアコン5社比較｜スゴ暖・ズバ暖・寒さ知らず・フル暖・暖ガン";
const DESC =
  "寒冷地向けの業務用エアコン（ダイキン スゴ暖ZEAS・三菱電機 ズバ暖スリム・日立 寒さ知らず・パナソニック フル暖 XEPHY・三菱重工 暖ガンハイパーインバータ）の暖房できる外気温、連続暖房の時間、霜取り中の暖房、凍結対策を、各社公式ページ（2026年11月1日確認）をもとに比べました。";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/cold-region/" },
  title: TITLE,
  description: DESC,
};

const MHI = "https://www.mhi-mth.co.jp/business/air-conditioner-for-business/air-conditioner-for-office/";

const series = [
  {
    maker: "ダイキン",
    makerHref: "/maker/daikin/",
    seriesHref: "/maker/daikin/sugodan-zeas/",
    name: "スゴ暖ZEAS",
    capacity: "P80〜P160形",
    items: [
      "外気温−25℃でも運転（湿球温度において）",
      "最大6時間の連続暖房運転（外気温−20℃・室温20℃、S-ラウンドフロー〈センシング〉タイプ室内機接続時。外気温や湿度が高いと霜が付きやすく、連続運転時間は短くなる）",
      "立ち上がり5分で50℃、最高60℃の高温風を吹き出す（外気温2℃・室内温度20℃などの条件つき）",
      "2015年省エネ基準値をクリア",
      "寒冷地向けのマルチタイプとして「スゴ暖machiマルチ」も掲載",
    ],
  },
  {
    maker: "三菱電機",
    makerHref: "/maker/mitsubishi-electric/",
    seriesHref: "/maker/mitsubishi-electric/zubadan-slim/",
    name: "ズバ暖スリム（DHシリーズ・Hシリーズ）",
    capacity: "P80〜P160形（P160形はHシリーズのみ）",
    items: [
      "外気温−15℃まで定格暖房能力と同等（ピーク時）をキープ、外気温−25℃まで暖房運転に対応（DH・H共通）",
      "DHシリーズ：熱交換器を上下半分ずつ交互に霜取りする「デュアルオンデフロスト回路」で、霜取り中も暖房が途切れない（外気温−10℃まで。24時間連続して暖房運転できることを確認）",
      "Hシリーズ：最大10時間の連続暖房（外気温−15℃の同社試験室での最大運転時間）",
      "暖房の設定温度の下限を17℃から10℃に広げ、終夜運転による底冷えを抑える（MAスマートリモコン使用時）",
      "同じ空間の4台までを連携させ、同時に霜取りに入らないよう制御（スマートデフロスト）",
    ],
  },
  {
    maker: "日立",
    makerHref: "/maker/hitachi/",
    seriesHref: "/maker/hitachi/samusa-shirazu/",
    name: "寒さ知らず",
    capacity: "80型〜160型",
    items: [
      "業界トップクラスの暖房能力（てんかせ4方向との組み合わせ、外気温度−15℃（湿球）時。2026年1月20日現在の日立表記）",
      "着霜量検出機能で、除霜運転の間隔を最大約13時間まで延長（外気温度−15℃での最大連続運転時間）",
      "着霜量に応じて「ホットガスバイパス除霜」と「逆サイクル除霜」を自動で切り替え、除霜中の吹出口付近の温度低下を抑える",
      "運転開始後約1分30秒で40℃、約7分で50℃の温風（140型、外気温度2℃・室温10℃の場合）",
      "暖房設定温度の下限を17℃から10℃に拡張（機能選択による設定が必要）",
      "寒冷地対応オプションとして防雪フード・ドレンパンヒーター（ドレンパンヒーターは深形の防雪フード一式と併用）",
    ],
  },
  {
    maker: "パナソニック",
    makerHref: "/maker/panasonic/",
    name: "フル暖 XEPHY",
    capacity: "4方向天井カセット形とのセットはP56・P80・P112・P140・P160形",
    items: [
      "全機種が外気温−25℃まで暖房運転可能",
      "暖房の連続運転時間は最長約13時間",
      "室外ユニット底板の凍結防止ヒーターを全機種に標準搭載",
      "底板のドレン排水穴を6個に増やし、除霜時の排水による凍結成長を抑える",
    ],
  },
  {
    maker: "三菱重工",
    makerHref: "/maker/mitsubishi-heavy/",
    seriesHref: "/maker/mitsubishi-heavy/dangan-hyper-inverter/",
    name: "暖ガンハイパーインバータ",
    capacity: "P80〜P160形（P80・P112形はR32冷媒、P140・P160形はR410A冷媒）",
    items: [
      "外気温−25℃まで暖房運転可能",
      "3・4馬力に、暖房と霜取りを同時に行う「ノンストップ暖房」（ホットガスバイパス方式のデフロスト制御）を搭載",
      "暖房10℃設定に対応し、室内の底冷えを抑える。あらかじめ部屋を暖めるウォームアップ運転も用意",
      "室外ユニットはP80・P112形が高さ1,050mm・92kg、P140・P160形が高さ1,505mm・165kg",
    ],
  },
];

const compareRows = [
  ["ダイキン スゴ暖ZEAS", "P80〜P160形", "−25℃（湿球）", "最大6時間（外気温−20℃）"],
  ["三菱電機 ズバ暖スリム", "P80〜P160形", "−25℃", "Hシリーズ最大10時間（外気温−15℃）／DHシリーズは霜取り中も暖房（−10℃まで）"],
  ["日立 寒さ知らず", "80〜160型", "−25℃（湿球。室外吸込空気温度の範囲 −25〜15℃）", "最大約13時間（外気温度−15℃）"],
  ["パナソニック フル暖 XEPHY", "P56〜P160形（4方向カセットのセット）", "−25℃", "最長約13時間"],
  ["三菱重工 暖ガンハイパーインバータ", "P80〜P160形", "−25℃", "3・4馬力は暖房と霜取りを同時に行う"],
];

const faqs = [
  {
    q: "寒冷地向けの業務用エアコンは、外気温何℃まで暖房できますか？",
    a: "今回比べた5社の寒冷地向けシリーズは、いずれも公式に外気温−25℃まで暖房運転できると案内しています（ダイキンと日立は湿球温度の表記）。定格の暖房能力を保てる温度は別で、三菱電機のズバ暖スリムは外気温−15℃まで定格暖房能力と同等（ピーク時）としています。",
  },
  {
    q: "霜取り（除霜）の間も暖房は止まりませんか？",
    a: "通常のエアコンは霜取り中に暖房が止まります。三菱電機ズバ暖スリムDHシリーズ（外気温−10℃まで）と、三菱重工 暖ガンハイパーインバータの3・4馬力は、霜取り中も暖房を続ける仕組みを搭載しています。ほかのシリーズは、霜取りの回数を減らして連続暖房の時間を延ばす方式です。",
  },
  {
    q: "寒冷地では、室外機まわりで何を確認すればよいですか？",
    a: "各社の公式ページでは、防雪フード、ドレンパンヒーター・凍結防止ヒーター（パナソニック フル暖 XEPHYは全機種標準、日立 寒さ知らずはオプション）が案内されています。積雪や排水の凍結は設置場所によって変わるため、業者の現地調査で必要なオプションを確認してください。",
  },
  {
    q: "東芝キヤリアの寒冷地向け機種は比較に入っていますか？",
    a: "入っていません。東芝キヤリアの公式サイトは2026年11月1日の確認時点でメンテナンス中（表示できない状態）だったため、今日確認できた5社のみを掲載しています。",
  },
];

const sources = [
  { label: "ダイキン工業 寒冷地向けエアコン スゴ暖ZEAS", url: "https://www.ac.daikin.co.jp/shopoffice/products/sugodanzeas" },
  { label: "ダイキン工業 シリーズラインアップ（スゴ暖ZEASの容量）", url: "https://www.ac.daikin.co.jp/shopoffice/products" },
  { label: "三菱電機 ズバ暖スリム（寒冷地用）DHシリーズ・Hシリーズ", url: "https://www.mitsubishielectric.co.jp/ldm/slim/outdoorunit/zuba/" },
  { label: "日立 寒さ知らず 主な特長", url: "https://www.hitachi-gls.co.jp/products/office/samusa/features.html" },
  { label: "日立 寒さ知らず", url: "https://www.hitachi-gls.co.jp/products/office/samusa/" },
  { label: "日立 システム構成（使用温度範囲）", url: "https://www.hitachi-gls.co.jp/products/office/outunit/system_01.html" },
  { label: "パナソニック フル暖 XEPHY（寒冷地向け）", url: "https://panasonic.co.jp/hvac-cc/biz/products/pac/outdoor-xephy-cold-region/" },
  { label: "パナソニック セット品番 フル暖 XEPHY × 4方向天井カセット形", url: "https://panasonic.co.jp/hvac-cc/biz/products/pac/set-number/in01_out03.html" },
  { label: "三菱重工 暖ガンハイパーインバータ（寒冷地向けタイプ）", url: `${MHI}dangan-hyper-inverter/` },
];

export default function ColdRegionPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ガイド" }, { label: "寒冷地向け業務用エアコン" }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          寒冷地向け業務用エアコン5社比較｜暖房できる外気温と霜取り中の暖房
        </h1>
        <UpdatedNote />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            寒冷地向けの業務用エアコンは、ダイキン「スゴ暖ZEAS」、三菱電機「ズバ暖スリム」、日立「寒さ知らず」、パナソニック「フル暖 XEPHY」、三菱重工「暖ガンハイパーインバータ」の5シリーズを各社が公式に掲載しています。5シリーズとも外気温−25℃まで暖房運転できると案内されており、違いが出るのは「霜取り中も暖房を続けられるか」「連続して暖房できる時間」「凍結対策が標準かオプションか」です。並びはメーカー名の順で、順位ではありません。
          </p>
          <p className="text-gray-800 leading-relaxed mt-3">
            <strong>スゴ暖とズバ暖の違い：</strong>
            ダイキン「スゴ暖ZEAS」と三菱電機「ズバ暖スリム」は、どちらも外気温−25℃まで暖房運転に対応しています（スゴ暖ZEASは湿球温度の表記）。
            スゴ暖ZEASは、最大6時間の連続暖房運転（外気温度−20℃・室温20℃・S-ラウンドフロー〈センシング〉タイプ室内機接続時）と、最高60℃・立ち上がり5分で50℃の高温風を案内しています。
            ズバ暖スリムは、外気温−15℃でも定格能力同等（ピーク時）をキープし、DHシリーズは霜取り中も暖房が途切れない仕組み（外気温−10℃まで）、Hシリーズは最大10時間の連続暖房（外気温−15℃の同社試験室での最大運転時間）を案内しています。
            測定条件が違うため、連続運転の時間どうしを単純に比べることはできません（両社の公式ページ、2026年11月13日確認）。
          </p>
        </div>

        <DataTable
          caption="5シリーズの比較（公式ページの記載）"
          head={["シリーズ", "容量", "暖房運転できる外気温", "連続暖房・霜取り"]}
          rows={compareRows}
          note="各社公式ページ（2026年11月1日確認）より。測定条件は各社で異なるため、数字どうしを単純に比べることはできません。条件は下の各シリーズの欄と出典で確認してください。"
        />

        <h2 className="text-xl font-bold text-gray-800 mb-4">シリーズ別の特長</h2>
        <div className="space-y-4 mb-8">
          {series.map((s) => (
            <section key={s.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <h3 className="font-bold text-gray-900 text-lg">
                {s.maker} {s.name}
              </h3>
              <p className="text-xs text-gray-500 mt-1">容量：{s.capacity}</p>
              <ul className="space-y-2 mt-3">
                {s.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
                    <span className="text-[#1E40AF] mt-0.5">•</span>
                    {i}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm">
                {s.seriesHref && (
                  <>
                    <Link href={s.seriesHref} className="text-[#1E40AF] underline">
                      {s.name}の詳細を見る
                    </Link>
                    <span className="text-gray-400">　</span>
                  </>
                )}
                <Link href={s.makerHref} className="text-[#1E40AF] underline">
                  {s.maker}のほかのシリーズを見る
                </Link>
              </p>
            </section>
          ))}
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">選ぶときに確認したいこと</h2>
          <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>霜取り中に暖房が止まると困るか（営業時間中に室温を下げたくない店舗など）。止めたくない場合は、霜取り中も暖房を続ける方式（三菱電機DHシリーズ、三菱重工 暖ガンの3・4馬力）を見積もりの候補に入れる</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>必要な容量が各シリーズの設定にあるか（寒冷地向けシリーズは、多くがP80形〜P160形の範囲）</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>防雪フードや凍結防止ヒーターが標準か、別売か</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>夜間に止めるか、低い設定温度で運転を続けるか（三菱電機・日立・三菱重工は暖房10℃設定に対応）</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            必要な能力（馬力）の目安は
            <Link href="/guide/horsepower/" className="text-[#1E40AF] underline">馬力選びガイド</Link>
            、メーカーごとの通常モデルとの違いは
            <Link href="/maker/" className="text-[#1E40AF] underline">メーカー別のシリーズ一覧</Link>
            にまとめています。メーカーは本体価格を公表していないため、費用は業者の見積もりで確認してください。
          </p>
        </section>

        <Faqs faqs={faqs} />

        <Sources sources={sources} />
      </main>
      <SiteFooter />
    </>
  );
}
