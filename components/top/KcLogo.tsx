import { logoSvg, LOGO_NAVY, LOGO_SKY } from "./marks";

// ロゴマーク＝天井カセット形の室内機を下から見た形（2026-11-05 刷新）。ファビコンも同じ形。
export function KcMark({ size = 36, tone = "dark" }: { size?: number; tone?: "dark" | "light" }) {
  const svg = tone === "light" ? logoSvg("#FFFFFF", LOGO_SKY, LOGO_NAVY) : logoSvg(LOGO_NAVY, LOGO_SKY, "#FFFFFF");
  return <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" className="shrink-0" dangerouslySetInnerHTML={{ __html: svg }} />;
}
