// TOP「エリアから探す」用。都道府県別ページ（app/area/[slug]・data/areas.json）を地方ごとに並べる。
// 表示名は SiteFooter「都道府県別の補助金」と同じ。新しい都道府県を足したら areas.json とここを両方更新する。
import areas from "./areas.json";

export type AreaLink = { slug: string; label: string };
export type Region = { name: string; items: AreaLink[] };

const LABEL: Record<string, string> = {
  tokyo: "東京都",
  kanagawa: "神奈川県",
  saitama: "埼玉県",
  ibaraki: "茨城県",
  hokkaido: "北海道（札幌市）",
  fukushima: "福島県",
  niigata: "新潟県",
  fukui: "福井県",
  aichi: "愛知県（名古屋市）",
  kyoto: "京都府（京都市）",
  osaka: "大阪府",
  yamaguchi: "山口県",
  hiroshima: "広島県",
  fukuoka: "福岡県（福岡市）",
  iwate: "岩手県",
  miyagi: "宮城県（仙台市）",
  chiba: "千葉県",
  shizuoka: "静岡県",
  hyogo: "兵庫県（神戸市）",
  kagoshima: "鹿児島県",
  shimane: "島根県",
  tottori: "鳥取県",
  wakayama: "和歌山県",
  saga: "佐賀県",
  nagano: "長野県",
  yamanashi: "山梨県",
  ishikawa: "石川県",
  tochigi: "栃木県",
  toyama: "富山県",
  shiga: "滋賀県",
  nara: "奈良県",
  yamagata: "山形県（山形市）",
  akita: "秋田県",
  okayama: "岡山県",
  kagawa: "香川県",
  kochi: "高知県（高知市）",
  kumamoto: "熊本県（熊本市）",
  oita: "大分県",
  gifu: "岐阜県",
};

const REGION_OF: [string, string[]][] = [
  ["北海道・東北", ["hokkaido", "iwate", "akita", "miyagi", "yamagata", "fukushima"]],
  ["関東", ["kanagawa", "saitama", "chiba", "ibaraki", "tochigi"]],
  ["中部・北陸", ["niigata", "toyama", "ishikawa", "fukui", "yamanashi", "nagano", "gifu", "shizuoka", "aichi"]],
  ["近畿", ["shiga", "kyoto", "osaka", "hyogo", "nara", "wakayama"]],
  ["中国", ["tottori", "shimane", "okayama", "hiroshima", "yamaguchi"]],
  ["四国", ["kagawa", "kochi"]],
  ["九州", ["fukuoka", "saga", "kumamoto", "oita", "kagoshima"]],
];

const slugs = new Set((areas as { slug: string }[]).map((a) => a.slug));
const link = (slug: string): AreaLink => ({ slug, label: LABEL[slug] ?? slug });

export const tokyo: AreaLink | null = slugs.has("tokyo") ? link("tokyo") : null;
export const regions: Region[] = REGION_OF.map(([name, list]) => ({
  name,
  items: list.filter((s) => slugs.has(s)).map(link),
})).filter((r) => r.items.length > 0);

/** 地方に割り当てていない都道府県があればビルドで気づけるようにする */
const placed = new Set(["tokyo", ...REGION_OF.flatMap(([, l]) => l)]);
const missing = [...slugs].filter((s) => !placed.has(s));
if (missing.length) throw new Error(`areaRegions.ts: 地方が未設定の都道府県ページ ${missing.join(",")}`);

export const areaCount = slugs.size;
