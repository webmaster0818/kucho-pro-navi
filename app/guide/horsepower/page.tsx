import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { HP_CLASSES } from "@/data/horsepower-classes";
import { KW_CLASSES } from "@/data/kw-classes";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/horsepower/" },
  title: "業務用エアコンの馬力・kW換算早見表｜1馬力≒2.8kW・10馬力は28kW・10kWは約3.6馬力",
  description:
    "業務用エアコンの馬力は1馬力≒2.8kW（ダイキン公式）で換算します。10馬力は28.0kW（P280形）、10kWは約3.6馬力（機種は4馬力/P112形）、4.5kWは約1.6馬力（1.8馬力/P45形）、20kWは約7.1馬力（8馬力/P224形）です。ダイキン公式のP形対応と床面積の目安を早見表で示します。",
};

// kW→馬力 換算早見表（1馬力≒2.8kW・ダイキン公式の換算値。機種クラスはP形=冷房能力kW×10の公式規則）
const kwToHp: { kw: string; hp: string; model: string; kwSlug?: string; hpSlug?: string }[] = [
  { kw: "4.0kW", hp: "約1.4馬力", model: "1.5馬力（P40形）＝4.0kWそのもの" },
  { kw: "4.5kW", hp: "約1.6馬力", model: "1.8馬力（P45形）＝4.5kWそのもの", kwSlug: "4-5-kw" },
  { kw: "5.6kW", hp: "約2.0馬力", model: "2.3馬力（P56形）", kwSlug: "5-6-kw" },
  { kw: "6.3kW", hp: "約2.3馬力", model: "2.5馬力（P63形）＝6.3kWそのもの", hpSlug: "2-5-bariki" },
  { kw: "8.0kW", hp: "約2.9馬力", model: "3馬力（P80形）＝8.0kWそのもの", hpSlug: "3-bariki" },
  { kw: "9kW", hp: "約3.2馬力", model: "4馬力（P112形・11.2kW）が目安", hpSlug: "4-bariki" },
  { kw: "10kW", hp: "約3.6馬力", model: "4馬力（P112形・11.2kW）が目安", kwSlug: "10-kw", hpSlug: "4-bariki" },
  { kw: "11.2kW", hp: "4馬力", model: "4馬力（P112形）＝11.2kWそのもの", hpSlug: "4-bariki" },
  { kw: "12kW", hp: "約4.3馬力", model: "5馬力（P140形・14.0kW）が目安", hpSlug: "5-bariki" },
  { kw: "12.5kW", hp: "約4.5馬力", model: "5馬力（P140形・14.0kW）が目安", kwSlug: "12-5-kw", hpSlug: "5-bariki" },
  { kw: "14kW", hp: "5馬力", model: "5馬力（P140形）＝14.0kWそのもの", hpSlug: "5-bariki" },
  { kw: "16kW", hp: "約5.7馬力", model: "6馬力（P160形）＝16.0kWそのもの", hpSlug: "6-bariki" },
  { kw: "18kW", hp: "約6.4馬力", model: "8馬力（P224形・22.4kW）が目安", hpSlug: "8-bariki" },
  { kw: "20kW", hp: "約7.1馬力", model: "8馬力（P224形・22.4kW）が目安", kwSlug: "20-kw", hpSlug: "8-bariki" },
  { kw: "22.4kW", hp: "8馬力", model: "8馬力（P224形）＝22.4kWそのもの", hpSlug: "8-bariki" },
  { kw: "25kW", hp: "約8.9馬力", model: "10馬力（P280形・28.0kW）が目安", kwSlug: "25-kw", hpSlug: "10-bariki" },
  { kw: "28kW", hp: "10馬力", model: "10馬力（P280形）＝28.0kWそのもの", hpSlug: "10-bariki" },
];

const hpGuide = [
  { hp: "2馬力（5.0kW・P50形）", area: "28〜31㎡／14〜26㎡", usage: "個室オフィス・小型店舗・個人クリニック診察室", slug: "2-bariki" },
  { hp: "2.5馬力（6.3kW・P63形）", area: "35〜39㎡／17〜33㎡", usage: "小規模会議室・小型飲食店・美容室", slug: "2-5-bariki" },
  { hp: "3馬力（8.0kW・P80形）", area: "44〜50㎡／22〜42㎡", usage: "標準的なオフィス・中型飲食店・ブティック", slug: "3-bariki" },
  { hp: "4馬力（11.2kW・P112形）", area: "62〜70㎡／30〜59㎡", usage: "大会議室・中規模レストラン・中型店舗", slug: "4-bariki" },
  { hp: "5馬力（14.0kW・P140形）", area: "78〜88㎡／38〜74㎡", usage: "フロア全体・大型飲食店・ジム", slug: "5-bariki" },
  { hp: "6馬力（16.0kW・P160形）", area: "89〜100㎡／43〜84㎡", usage: "大型フロア・工場作業エリア・大型店舗", slug: "6-bariki" },
  { hp: "8馬力（22.4kW・P224形）", area: "124〜140㎡／61〜118㎡", usage: "工場・倉庫・大型商業施設の一区画", slug: "8-bariki" },
  { hp: "10馬力（28.0kW・P280形）", area: "156〜175㎡／76〜147㎡", usage: "大型工場・倉庫・ホール・体育館（補助的に）", slug: "10-bariki" },
];

// 馬力→kW・P形・一般事務所の床面積（ダイキン公式 article/28 の表。面積は冷房負荷105〜230W/㎡で算出された目安）
const hpQuick = [
  { hp: "1.5馬力", kw: "4.0kW", model: "P40形", office: "17〜38㎡" },
  { hp: "1.8馬力", kw: "4.5kW", model: "P45形", office: "20〜43㎡" },
  { hp: "2馬力", kw: "5.0kW", model: "P50形", office: "22〜48㎡", slug: "2-bariki" },
  { hp: "2.3馬力", kw: "5.6kW", model: "P56形", office: "24〜53㎡" },
  { hp: "2.5馬力", kw: "6.3kW", model: "P63形", office: "27〜60㎡", slug: "2-5-bariki" },
  { hp: "3馬力", kw: "8.0kW", model: "P80形", office: "35〜76㎡", slug: "3-bariki" },
  { hp: "4馬力", kw: "11.2kW", model: "P112形", office: "49〜107㎡", slug: "4-bariki" },
  { hp: "5馬力", kw: "14.0kW", model: "P140形", office: "61〜133㎡", slug: "5-bariki" },
  { hp: "6馬力", kw: "16.0kW", model: "P160形", office: "70〜152㎡", slug: "6-bariki" },
  { hp: "8馬力", kw: "22.4kW", model: "P224形", office: "97〜213㎡", slug: "8-bariki" },
  { hp: "10馬力", kw: "28.0kW", model: "P280形", office: "122〜267㎡", slug: "10-bariki" },
];

// 用途別の算出基準冷房負荷（ダイキン公式 article/28）
const coolingLoads = [
  { use: "一般事務所", load: "105〜230W/㎡" },
  { use: "一般商店", load: "160〜180W/㎡" },
  { use: "飲食店", load: "190〜370W/㎡" },
  { use: "理美容院", load: "230〜290W/㎡" },
];

// kW→馬力の個別即答FAQ（「◯kWは何馬力？」の検索に1問1答で対応）
const kwFaqs = [
  { q: "10馬力は何kWですか？", a: "10馬力は28.0kWです（1馬力≒2.8kW）。機種クラスではP280形にあたります。" },
  { q: "4.5kWは何馬力ですか？", a: "4.5kWは約1.6馬力です（4.5÷2.8）。機種クラスでは1.8馬力（P45形）＝4.5kWそのものにあたります。" },
  { q: "10kWは何馬力ですか？", a: "10kWは約3.6馬力です（1馬力≒2.8kWで換算）。業務用エアコンの機種クラスでは、4馬力（P112形・11.2kW）が目安になります。" },
  { q: "6.3kWは何馬力ですか？", a: "6.3kWは約2.3馬力です。機種クラスでは2.5馬力（P63形）＝6.3kWそのものにあたります。" },
  { q: "12.5kWは何馬力ですか？", a: "12.5kWは約4.5馬力です。機種クラスでは5馬力（P140形・14.0kW）が目安になります。" },
  { q: "14kWは何馬力ですか？", a: "14kWは5馬力です。機種クラスの5馬力（P140形）＝14.0kWそのものにあたります。" },
  { q: "18kWは何馬力ですか？", a: "18kWは約6.4馬力です。6馬力（P160形）は16.0kWで不足するため、機種クラスでは8馬力（P224形・22.4kW）が目安になります。" },
  { q: "20kWは何馬力ですか？", a: "20kWは約7.1馬力です。機種クラスでは8馬力（P224形・22.4kW）が目安になります。" },
  { q: "22.4kWは何馬力ですか？", a: "22.4kWは8馬力です。機種クラスの8馬力（P224形）＝22.4kWそのものにあたります。" },
  { q: "25kWは何馬力ですか？", a: "25kWは約8.9馬力です。機種クラスでは10馬力（P280形・28.0kW）が目安になります。" },
  { q: "28kWは何馬力ですか？", a: "28kWは10馬力です。機種クラスの10馬力（P280形）＝28.0kWそのものにあたります。" },
  { q: "1馬力は何kWですか？", a: "業務用エアコンでは1馬力≒2.8kW（メーカー公式の換算値）です。ただし機種の「馬力クラス」は冷房能力kW×10のP形規則で表され（例：4馬力＝P112形＝11.2kW）、単純な2.8kW換算とはややずれます。" },
];

const kwFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: kwFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function HorsepowerGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(kwFaqSchema) }} />
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "ガイド" },
            { label: "馬力選びガイド" },
          ]}
        />

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          業務用エアコンの馬力・kW換算早見表（1馬力≒2.8kW）と選び方
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          <strong>業務用エアコンの馬力は「1馬力≒冷房能力2.8kW」で換算します</strong>（ダイキン公式の換算値）。<strong>10馬力は28.0kW</strong>（P280形）、6馬力は16.0kW（P160形）、5馬力は14.0kW（P140形）です。反対に<strong>10kWは約3.6馬力</strong>で、機種クラスでは4馬力（P112形・11.2kW）が目安です。4.5kWは約1.6馬力で1.8馬力（P45形）、20kWは約7.1馬力で8馬力（P224形・22.4kW）が目安です。すぐ下の早見表は、ダイキン公式の馬力とP形の対応にもとづいています。kW→馬力の換算表の各行から、kW別・馬力別の詳しいページへ進めます。換算したうえで、床面積・用途に応じた選び方をご確認ください。
        </p>

        {/* 馬力→kW 早見表（冒頭の即答） */}
        <section id="quick" className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">馬力→kW 換算早見表（ダイキン公式のP形対応）</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1E40AF] text-white">
                  <th className="p-3 text-left">馬力</th>
                  <th className="p-3 text-left">冷房能力</th>
                  <th className="p-3 text-left">機種クラス</th>
                  <th className="p-3 text-left">一般事務所の床面積の目安</th>
                </tr>
              </thead>
              <tbody>
                {hpQuick.map((r, i) => (
                  <tr key={r.model} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-semibold text-[#1E40AF]">
                      {r.slug ? <Link href={`/guide/horsepower/${r.slug}/`} className="underline hover:no-underline">{r.hp}</Link> : r.hp}
                    </td>
                    <td className="p-3 text-gray-800 font-medium">{r.kw}</td>
                    <td className="p-3 text-gray-600">{r.model}</td>
                    <td className="p-3 text-gray-600">{r.office}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 leading-relaxed">
            出典：ダイキン公式「<a href="https://www.ac.daikin.co.jp/customercenter/useful/article/28" target="_blank" rel="nofollow noopener" className="underline">業務用エアコンの選び方</a>」の形式（P形）と馬力の対応・用途別の床面積の目安（一般事務所＝算出基準冷房負荷105〜230W/㎡）、1馬力≒2.8kWは「<a href="https://www.ac.daikin.co.jp/customercenter/useful/article/49" target="_blank" rel="nofollow noopener" className="underline">業務用エアコンの設置費用</a>」（いずれも2026年10月28日確認）。冷房能力はP形の数字÷10（例：P40形＝4.0kW）です。P140形は同ページの表で「4馬力相当」と表記されていますが、14.0kW÷2.8kW＝5.0のため、本表では5馬力としています。床面積は目安で、建物・用途・発熱量により負荷が変わります。
          </p>
        </section>

        {/* 馬力クラス別ページへの導線 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">馬力クラスから調べる</h2>
          <p className="text-gray-600 text-sm mb-4">
            「◯馬力は何kWか」を調べる場合は、クラス別のページをご覧ください。冷房能力・機種クラス（P形）・適用面積を掲載しています。
          </p>
          <div className="flex flex-wrap gap-2">
            {HP_CLASSES.map((h) => (
              <Link key={h.slug} href={`/guide/horsepower/${h.slug}/`} className="px-4 py-2 rounded-lg text-sm border border-gray-200 text-gray-700 hover:border-[#1E40AF] transition">
                {h.hp}は何kW？
              </Link>
            ))}
          </div>
        </section>

        {/* kW→馬力 逆引きページへの導線 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">kW（冷房能力）から調べる</h2>
          <p className="text-gray-600 text-sm mb-4">
            「◯kWは何馬力か」を調べる場合は、kW別のページをご覧ください。換算馬力・対応する機種クラス（P形）・適用面積を掲載しています。
          </p>
          <div className="flex flex-wrap gap-2">
            {KW_CLASSES.map((k) => (
              <Link key={k.slug} href={`/guide/horsepower/${k.slug}/`} className="px-4 py-2 rounded-lg text-sm border border-gray-200 text-gray-700 hover:border-[#1E40AF] transition">
                {k.kw}は何馬力？
              </Link>
            ))}
          </div>
        </section>

        {/* kW→馬力 換算早見表 */}
        <section id="conversion" className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">kW→馬力 換算早見表</h2>
          <p className="text-gray-600 text-sm mb-4">
            換算式は <strong>馬力 = 冷房能力kW ÷ 2.8</strong> です。機種は連続的なkW値ではなくクラス（P形＝冷房能力kW×10の型番）で展開されるため、「換算した馬力」と「実際に選ぶ機種クラス」をあわせて掲載しています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1E40AF] text-white">
                  <th className="p-3 text-left">冷房能力</th>
                  <th className="p-3 text-left">換算馬力（÷2.8）</th>
                  <th className="p-3 text-left">選ぶ機種クラスの目安</th>
                </tr>
              </thead>
              <tbody>
                {kwToHp.map((row, i) => (
                  <tr key={row.kw} id={`kw-${row.kw.replace("kW", "").replace(".", "-")}`} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-semibold text-[#1E40AF]">
                      {row.kwSlug ? <Link href={`/guide/horsepower/${row.kwSlug}/`} className="underline hover:no-underline">{row.kw}</Link> : row.kw}
                    </td>
                    <td className="p-3 text-gray-800 font-medium">{row.hp}</td>
                    <td className="p-3 text-gray-600">
                      {row.hpSlug ? <Link href={`/guide/horsepower/${row.hpSlug}/`} className="text-[#1E40AF] underline hover:no-underline">{row.model}</Link> : row.model}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-xs text-gray-500 mt-3 leading-relaxed space-y-1">
            <p>
              出典: ダイキン公式「1馬力≒2.8kW」（<a href="https://www.ac.daikin.co.jp/customercenter/useful/article/49" target="_blank" rel="nofollow noopener" className="underline">業務用エアコンの設置費用</a>）、P形と馬力の対応（P40形＝1.5馬力相当〜P280形、「P40形は4.0kW」）は<a href="https://www.ac.daikin.co.jp/customercenter/useful/article/28" target="_blank" rel="nofollow noopener" className="underline">ダイキン公式 業務用エアコンの選び方</a>（いずれも2026年10月23日確認）。三菱電機Mr.SLIM形名検索・パナソニック公式コラムでも同じ対応を確認しています（2026年7月4日確認）。
            </p>
            <p>
              ※チラー（冷却水熱源機）など一部の機種カテゴリでは「1馬力=2.5kW」の換算が使われる場合があります（東芝キヤリア空調機器ハンドブックで確認）。本表は店舗・オフィス用パッケージエアコンの換算です。
            </p>
          </div>
        </section>

        {/* Basic Formula */}
        <section className="bg-[#1E40AF] text-white rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">床面積から必要な馬力を計算する方法</h2>
          <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-4 text-center">
            <p className="text-lg font-mono font-bold">
              必要な冷房能力（kW）＝ 床面積（㎡）× 用途別の冷房負荷（W/㎡）÷ 1,000
            </p>
            <p className="text-sm mt-2">必要な馬力 ＝ 必要な冷房能力（kW）÷ 2.8</p>
          </div>
          <div className="text-sm text-blue-100 space-y-1">
            {coolingLoads.map((c) => (
              <p key={c.use}>• {c.use}：{c.load}</p>
            ))}
            <p className="pt-2 text-xs">用途別の冷房負荷はダイキン公式 article/28 の「算出基準冷房負荷」です（2026年10月28日確認）。</p>
          </div>
        </section>

        {/* HP Guide Table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">馬力別 適用面積・用途一覧</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1E40AF] text-white">
                  <th className="p-3 text-left">馬力（kW）</th>
                  <th className="p-3 text-left">床面積の目安（一般商店／飲食店）</th>
                  <th className="p-3 text-left">主な用途</th>
                </tr>
              </thead>
              <tbody>
                {hpGuide.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-semibold text-[#1E40AF]">
                      <Link href={`/guide/horsepower/${row.slug}/`} className="underline hover:no-underline">{row.hp}</Link>
                    </td>
                    <td className="p-3 text-gray-600">{row.area}</td>
                    <td className="p-3 text-gray-700">{row.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Calculation Example */}
        <section className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-green-800 mb-4">計算例：床面積100㎡の飲食店の場合</h2>
          <div className="space-y-2 text-sm text-green-700">
            <p>必要な冷房能力：100㎡ × 190〜370W/㎡ ÷ 1,000 ＝ 19.0〜37.0kW</p>
            <p>馬力に換算：19.0〜37.0kW ÷ 2.8 ＝ 約6.8〜13.2馬力</p>
            <p className="font-bold text-green-800 text-base border-t border-green-200 pt-2">
              → ダイキン公式の目安では、飲食店100㎡は8馬力（P224形・61〜118㎡）と10馬力（P280形・76〜147㎡）の範囲に入ります。厨房の熱が大きい場合は負荷が上限側になるため、10馬力以上や複数台の組み合わせを、専門業者の熱負荷計算で確認します。
            </p>
          </div>
        </section>

        {/* Warning */}
        <section className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <h2 className="font-bold text-red-700 mb-3">馬力選びの注意点</h2>
          <ul className="text-sm text-red-600 space-y-2">
            <li> <strong>小さすぎる馬力：</strong>冷暖房が追いつかず、フル稼働により電気代が高くなります。機器の寿命も短くなります。</li>
            <li> <strong>大きすぎる馬力：</strong>オン・オフが頻繁になり効率が低下するため、機器代・電気代ともに過大になります。</li>
            <li> <strong>専門業者による確認：</strong>実際には建物の断熱性・気密性・窓の方角なども考慮する必要があります。専門業者に熱負荷計算を依頼することをおすすめします。</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-[#1E40AF] pl-3">kW・馬力の換算 よくある質問</h2>
          <div className="space-y-2">
            {kwFaqs.map((f, i) => (
              <details key={i} className="bg-white border border-slate-200 rounded-lg p-4">
                <summary className="font-bold cursor-pointer text-sm text-slate-800">{f.q}</summary>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="text-center">
          <Link
            href="/ranking/"
            className="inline-block bg-[#1E40AF] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            馬力を相談できる業者を探す →
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
