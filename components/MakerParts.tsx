import Link from "next/link";
import { MAKER_CHECKED, MAKER_DEALERS, type Source } from "@/data/makers";

export const fmtDate = (d: string) => d.replace(/^(\d+)-0?(\d+)-0?(\d+)$/, "$1年$2月$3日");

export function DataTable({
  caption,
  head,
  rows,
  note,
}: {
  caption?: string;
  head: string[];
  rows: string[][];
  note?: string;
}) {
  return (
    <div className="mb-8">
      {caption && <h2 className="text-xl font-bold text-gray-800 mb-3">{caption}</h2>}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gray-200 bg-white">
          <thead className="bg-gray-50">
            <tr>
              {head.map((h) => (
                <th key={h} className="border border-gray-200 px-3 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.join("|")}>
                {r.map((c, i) => (
                  <td key={i} className={`border border-gray-200 px-3 py-2 text-gray-700 ${i === 0 ? "font-semibold whitespace-nowrap" : ""}`}>
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="mt-2 text-xs text-gray-500 leading-relaxed">{note}</p>}
    </div>
  );
}

export function Faqs({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">よくある質問</h2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
              <span className="text-[#1E40AF] font-black">Q.</span>
              {f.q}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed pl-6">
              <span className="font-bold text-[#059669] mr-1">A.</span>
              {f.a}
            </p>
          </div>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </div>
  );
}

export function Sources({ sources }: { sources: Source[] }) {
  return (
    <div className="mb-8 text-xs text-gray-500 leading-relaxed">
      <p className="font-bold mb-1">出典（メーカー公式ページ・{fmtDate(MAKER_CHECKED)}確認）</p>
      <ul className="space-y-1">
        {sources.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="nofollow noopener" className="underline">
              {s.label}
            </a>
            <span className="ml-1 break-all">（{s.url}）</span>
          </li>
        ))}
      </ul>
      <p className="mt-2">
        仕様・機能は確認日時点のメーカー公式ページの記載です。価格はメーカーが公表していないため掲載していません。機種の仕様は変更されることがあるため、見積もり時に最新のカタログで確認してください。
      </p>
    </div>
  );
}

export function Dealers({ makerName }: { makerName: string }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-3">{makerName}の機種を扱う掲載業者</h2>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        当サイトの業者ページで、取扱メーカーに{makerName}を記載している業者です（各業者の公式サイトの表記にもとづく。並びは順位ではありません）。機種の在庫や取り扱いは時期によって変わるため、見積もり時に確認してください。
      </p>
      <ul className="space-y-3">
        {MAKER_DEALERS.map((d) => (
          <li key={d.slug} className="text-sm">
            <Link href={`/company/${d.slug}/`} className="font-bold text-[#1E40AF] underline">
              {d.name}
            </Link>
            <span className="block text-gray-500 text-xs mt-0.5">取扱メーカー：{d.makers}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function UpdatedNote() {
  return (
    <p className="text-xs text-gray-500 mb-6">
      最終更新：<time dateTime={MAKER_CHECKED}>{fmtDate(MAKER_CHECKED)}</time>（メーカー公式ページで確認）
    </p>
  );
}
