import { regions, tokyo, areaCount, type AreaLink } from "@/data/areaRegions";

const Chevron = () => (
  <svg className="kc-chev h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const Arrow = () => (
  <svg className="h-3.5 w-3.5 shrink-0 text-[color:var(--kc-sky-dark)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

function Tiles({ items }: { items: AreaLink[] }) {
  return (
    <ul className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-2 md:grid-cols-3">
      {items.map((x) => (
        <li key={x.slug}>
          <a
            href={`/area/${x.slug}/`}
            className="flex min-h-[52px] items-center justify-between gap-2 rounded-[3px] border border-[color:var(--kc-border)] bg-white px-4 text-[15px] font-bold text-[color:var(--kc-ink)] transition-colors hover:border-[color:var(--kc-navy)] hover:bg-[color:var(--kc-wash)]"
          >
            <span>{x.label}</span>
            <Arrow />
          </a>
        </li>
      ))}
    </ul>
  );
}

/** TOP「エリアから探す」。東京都は最上部の別枠、地方は折りたたみ（JS 不要の details）。 */
export default function AreaFinder() {
  return (
    <div>
      <p className="mb-5 text-[14px] leading-relaxed text-[color:var(--kc-muted)]">
        {areaCount}都道府県について、業務用エアコンの更新に使える補助金・助成金と、公式サイトでその地域を対応エリアに挙げる業者をまとめています。地方名を押すと一覧が開きます。
      </p>

      {tokyo && (
        <div className="mb-4 border-2 border-[color:var(--kc-navy)] bg-white" data-reveal="0">
          <div className="flex min-h-[56px] items-center justify-between gap-3 bg-[color:var(--kc-navy)] px-4 text-white md:px-5">
            <span className="text-[18px] font-bold tracking-[0.06em]">東京都</span>
            <span className="text-[12px] text-white/80">クール・ネット東京の助成金</span>
          </div>
          <div className="grid gap-3 p-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-5">
            <p className="text-[13px] leading-relaxed text-[color:var(--kc-muted)]">
              東京都全体の助成金と、東京都を対応エリアに挙げる業者のまとめです。23区・市町村ごとのページは、現在ありません。
            </p>
            <a href={`/area/${tokyo.slug}/`} className="kc-btn w-full md:w-auto">
              東京都のまとめを見る
            </a>
          </div>
        </div>
      )}

      <div className="grid gap-3">
        {regions.map((r, i) => (
          <details key={r.name} className="kc-acc group border border-[color:var(--kc-border-strong)] bg-white" data-reveal={String(i + 1)}>
            <summary className="flex min-h-[60px] items-center justify-between gap-3 px-4 group-open:border-b group-open:border-[color:var(--kc-border)] md:px-5">
              <span className="text-[16px] font-bold tracking-[0.04em] text-[color:var(--kc-navy)]">{r.name}</span>
              <span className="flex items-center gap-2 text-[12px] font-bold text-[color:var(--kc-muted)]">
                {r.items.length}都道府県
                <span className="text-[color:var(--kc-navy)]"><Chevron /></span>
              </span>
            </summary>
            <div className="bg-[color:var(--kc-paper)] p-4 md:p-5">
              <Tiles items={r.items} />
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
