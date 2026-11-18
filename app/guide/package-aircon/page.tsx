import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { DataTable, Faqs, Sources, UpdatedNote } from "@/components/MakerParts";

const CHECKED = "2026-11-18";
const SRC_LABEL = "メーカー公式ページ・国税庁・環境省ほか";

const TITLE = "パッケージエアコンとは｜業務用エアコンとの関係と6社の呼び名・ビル用マルチとの違い";
const DESC =
  "パッケージエアコンとは何かを、国税庁の通達の説明と、ダイキン・三菱電機・日立・パナソニック・三菱重工・日本キヤリアの公式ページでの呼び名（2026年11月18日確認）をもとに整理しました。ビル用マルチエアコン・設備用エアコンとの区分も、環境省と日立の公式資料で確認しています。";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/package-aircon/" },
  title: TITLE,
  description: DESC,
};

const nameRows = [
  ["ダイキン", "業務用エアコン（店舗・オフィスエアコン）「スカイエア」", "使用なし（ビル用マルチは「業務用マルチエアコン（ビル用マルチ）」として別掲）"],
  ["三菱電機", "店舗・事務所用パッケージエアコン Mr.SLIM", "使用あり（「中温用パッケージエアコン」も掲載）"],
  ["日立", "店舗・オフィス用エアコン", "使用あり（総合カタログ名「パッケージエアコン 店舗・オフィス用総合カタログ」、「寒冷地向けパッケージエアコン」）"],
  ["パナソニック", "オフィス・店舗用エアコン（XEPHY）", "使用なし"],
  ["三菱重工", "店舗オフィス用エアコン", "使用あり（「設備用パッケージエアコン」「中温用パッケージエアコン」の製品区分）"],
  ["日本キヤリア（旧 東芝キヤリア）", "店舗・オフィス用エアコン", "使用なし"],
];

const classRows = [
  ["店舗・オフィス用エアコン", "室外機1台に室内機1台（またはツイン等の同時運転）を組み合わせる、店舗・事務所向けの機種。一般に「パッケージエアコン」と呼ばれるのはこの区分", "ダイキン スカイエア、三菱電機 Mr.SLIM など"],
  ["ビル用マルチエアコン", "1台の室外機に複数の室内機をつなぎ、個別に運転する機種。ビル全体やフロアの個別空調向け", "ダイキン 業務用マルチエアコン（ビル用マルチ）など"],
  ["設備用エアコン", "工場や設備の空調に使う機種", "ダイキン 設備・工場用エアコン、三菱重工 設備用パッケージエアコン など"],
  ["中央方式エアコン", "熱源機（チラー・ターボ冷凍機など）で冷温水をつくり、ダクトや配管で建物全体を空調する方式", "—"],
];

const faqs = [
  {
    q: "パッケージエアコンと業務用エアコンは同じものですか？",
    a: "一般的には、店舗・事務所用の業務用エアコンを指してパッケージエアコンと呼びます。今回確認した6社のうち、三菱電機は「店舗・事務所用パッケージエアコン Mr.SLIM」と製品名に含めていますが、ダイキン・パナソニック・日本キヤリアは公式ページで「店舗・オフィス（用）エアコン」と呼んでおり、パッケージエアコンの語は使っていませんでした。呼び名が違っても、見積もりで比べる対象は同じ区分の機種です。",
  },
  {
    q: "なぜ「パッケージ」と呼ぶのですか？",
    a: "国税庁の耐用年数の通達では、パッケージドタイプのエアーコンディショナーを「冷却装置、冷風装置等が一つのキャビネットに組み合わされた」ものと説明しています。冷房に必要な機器が一つにまとめられている（パッケージ化されている）ことが呼び名の由来と考えられます。",
  },
  {
    q: "ルームエアコン（家庭用）とは何が違いますか？",
    a: "メーカー各社は家庭用のルームエアコンと、店舗・オフィス用エアコンを別の製品区分として掲載しています。店舗・オフィス用は、天井カセット形・天吊形・床置形など室内機の形の種類が多く、馬力（P形の型番）で能力を選ぶのが一般的です。フロン排出抑制法では、業務用のエアコンは点検などの義務がある「第一種特定製品」で、家庭用エアコンはこの法律に基づく回収その他の義務の対象外です。",
  },
  {
    q: "パッケージエアコンの省エネ性能はどの数値で比べますか？",
    a: "APF2015（通年エネルギー消費効率）がカタログに表示されています。日立の公式ページによると、2015年3月の業務用エアコンのJIS規格（JIS B 8616）改正にともなう評価方法で、店舗・オフィス用エアコンは東京の「店舗」をモデルに、冷房5月7日〜10月17日・暖房11月17日〜4月3日、週7日・8時〜21時の使用を条件に算出します。",
  },
];

const sources = [
  { label: "ダイキン工業 業務用エアコン（店舗・オフィスエアコン）「スカイエア」シリーズ", url: "https://www.ac.daikin.co.jp/shopoffice" },
  { label: "三菱電機 店舗・事務所用パッケージエアコン Mr.SLIM", url: "https://www.mitsubishielectric.co.jp/ldm/slim/" },
  { label: "日立 店舗・オフィス用エアコン", url: "https://www.hitachi-gls.co.jp/products/office/" },
  { label: "日立 APF2015とは", url: "https://www.hitachi-gls.co.jp/products/office/knowledge/apf.html" },
  { label: "パナソニック オフィス・店舗用エアコン", url: "https://panasonic.co.jp/hvac-cc/biz/products/pac/" },
  { label: "三菱重工サーマルシステムズ 店舗オフィス用エアコン", url: "https://www.mhi-mth.co.jp/business/air-conditioner-for-business/air-conditioner-for-office/" },
  { label: "日本キヤリア 店舗・オフィス用エアコン", url: "https://www.toshiba-carrier.co.jp/products/office/index_j.htm" },
  { label: "日本キヤリア 企業情報（会社概要・沿革）", url: "https://www.toshiba-carrier.co.jp/company/index_j.htm" },
  { label: "国税庁 耐用年数の適用等に関する取扱通達 2-2-4（冷房、暖房、通風又はボイラー設備）", url: "https://www.nta.go.jp/law/tsutatsu/kobetsu/sonota/700525/02/02_02.htm" },
  { label: "環境省 フロン排出抑制法パンフレット（2025年3月版・指定製品の区分）", url: "https://www.env.go.jp/earth/furon/files/int_01-16_202503.pdf" },
  { label: "環境省・経済産業省 フロン排出抑制法ポータルサイト「FAQ」", url: "https://www.env.go.jp/earth/furon/faq/index.html" },
];

export default function PackageAirconPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "ガイド" }, { label: "パッケージエアコンとは" }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          パッケージエアコンとは｜店舗・オフィス用エアコンの呼び名と区分
        </h1>
        <UpdatedNote checked={CHECKED} label="メーカー公式ページ・国税庁・環境省のページ" />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            パッケージエアコンは、店舗・事務所などで使う業務用エアコン（店舗・オフィス用エアコン）を指す呼び名です。国税庁の通達では、パッケージドタイプのエアーコンディショナーを「冷却装置、冷風装置等が一つのキャビネットに組み合わされた」ものと説明しています。
            ただし、メーカーの呼び名はそろっていません。当サイトが主要6社の公式ページを確認したところ（2026年11月18日）、「パッケージエアコン」の語を使っていたのは三菱電機・日立・三菱重工の3社で、ダイキン・パナソニック・日本キヤリアは「店舗・オフィス（用）エアコン」と呼んでいました。
          </p>
        </div>

        <DataTable
          caption="主要6社の公式ページでの呼び名"
          head={["メーカー", "製品区分の呼び名", "「パッケージエアコン」の語"]}
          rows={nameRows}
          note="各社の店舗・オフィス用エアコンの公式トップページ（2026年11月18日確認）の表記を当サイトで集計。並びは順位ではありません。日本キヤリアは旧社名 東芝キヤリアから商号変更した会社です（同社 企業情報）。"
        />

        <DataTable
          caption="業務用エアコンの区分（パッケージエアコンとほかの方式）"
          head={["区分", "概要", "例"]}
          rows={classRows}
          note="区分名は、環境省パンフレットの指定製品の区分と、日立「APF2015とは」の対象機種（店舗・オフィス用エアコン／ビル用マルチエアコン／設備用エアコン）の表記による。概要は当サイトが各社の公式ページの説明から要約したものです。"
        />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">パッケージエアコンを選ぶときの手順</h2>
          <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>部屋の広さと用途から、必要な能力（馬力・P形）を決める</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>天井の形や設置場所から、室内機の形（天井カセット・天吊・壁掛・床置など）を決める</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>省エネ性（APF2015）と、寒冷地・厨房などの用途に合うシリーズを比べる</li>
            <li className="flex items-start gap-2"><span className="text-[#1E40AF] mt-0.5">•</span>複数の業者から、本体と工事費を分けた見積もりを取る</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            能力の目安は
            <Link href="/guide/horsepower/" className="text-[#1E40AF] underline">馬力・kW換算早見表</Link>
            、室内機の形は
            <Link href="/guide/type/" className="text-[#1E40AF] underline">機種タイプ比較</Link>
            、各社のシリーズは
            <Link href="/maker/" className="text-[#1E40AF] underline">メーカー別のシリーズ一覧</Link>
            、費用の目安は
            <Link href="/guide/cost/" className="text-[#1E40AF] underline">費用相場ガイド</Link>
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
