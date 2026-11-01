import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { MAKERS, SERIES_PAGES } from "@/data/makers";
import { UpdatedNote } from "@/components/MakerParts";

export const metadata: Metadata = {
  alternates: { canonical: "/maker/" },
  title: "業務用エアコンのメーカー別シリーズ一覧｜ダイキン・三菱電機・日立・パナソニック・三菱重工",
  description:
    "ダイキン・三菱電機・日立・パナソニック・三菱重工の店舗・オフィス用業務用エアコンについて、室外機シリーズの名前と公式の位置づけ（フラッグシップ・スタンダード・寒冷地向け）をメーカー公式ページ（2026年11月1日確認）をもとに一覧にしました。",
};

export default function MakerIndex() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "メーカー別" }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">業務用エアコンのメーカー別シリーズ一覧</h1>
        <UpdatedNote />
        <p className="text-gray-700 leading-relaxed mb-8">
          店舗・オフィス用の業務用エアコン（パッケージエアコン）は、多くのメーカーが「高効率のフラッグシップ」「標準（スタンダード）」「寒冷地向け」の3段構えで室外機のシリーズをそろえています。見積書に書かれたシリーズ名がどの位置づけかを、メーカー公式ページの表記で確認できるようにまとめました。東芝キヤリアは、2026年11月1日時点で公式サイトがメンテナンス中のため掲載していません。
        </p>
        <div className="space-y-6 mb-10">
          {MAKERS.map((m) => (
            <section key={m.slug} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-1">
                <Link href={`/maker/${m.slug}/`} className="text-[#1E40AF] underline">
                  {m.name}
                  {m.brand ? `（${m.brand}）` : ""}
                </Link>
              </h2>
              <ul className="mt-3 space-y-1 text-sm text-gray-700">
                {m.series.map((s) => (
                  <li key={s.name}>
                    <span className="font-semibold">{s.name}</span>
                    <span className="text-gray-500">：{s.position}</span>
                  </li>
                ))}
              </ul>
              {SERIES_PAGES.filter((p) => p.maker === m.slug).length > 0 && (
                <p className="mt-3 text-sm">
                  シリーズ別：
                  {SERIES_PAGES.filter((p) => p.maker === m.slug).map((p, i) => (
                    <span key={p.slug}>
                      {i > 0 && "・"}
                      <Link href={`/maker/${m.slug}/${p.slug}/`} className="text-[#1E40AF] underline">
                        {p.name}
                      </Link>
                    </span>
                  ))}
                </p>
              )}
            </section>
          ))}
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          必要な能力（馬力）の目安は
          <Link href="/guide/horsepower/" className="text-[#1E40AF] underline">馬力選びガイド</Link>
          、室内機の形の違いは
          <Link href="/guide/type/" className="text-[#1E40AF] underline">機種タイプ比較</Link>
          をご覧ください。寒冷地向けのシリーズ（スゴ暖ZEAS・ズバ暖スリム・寒さ知らず・フル暖 XEPHY・暖ガンハイパーインバータ）は
          <Link href="/guide/cold-region/" className="text-[#1E40AF] underline">寒冷地向け業務用エアコン5社比較</Link>
          で比べています。
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
