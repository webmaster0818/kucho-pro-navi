import { ICONS } from "./marks";

/** 業種・お悩み別アイコン（太線＋一部塗り。単色 currentColor） */
export default function TopIcon({ name, size = 72, className = "" }: { name: string; size?: number; className?: string }) {
  const def = ICONS.find((d) => d.key === name);
  if (!def) return null;
  return <svg width={size} height={size} viewBox="0 0 48 48" className={className} aria-hidden="true" dangerouslySetInnerHTML={{ __html: def.svg }} />;
}
