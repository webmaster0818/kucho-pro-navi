// 空調プロナビ TOP 用のロゴマーク・業種／お悩みアイコン（すべて自作の SVG。48×48 のグリッド）。
// アイコンは太めの線（stroke 3）＋一部を塗る系統。色は currentColor の単色。
// ロゴだけ2色（--kc-navy と --kc-sky）。

export const LOGO_NAVY = "#15365C";
export const LOGO_SKY = "#7FB8DE";

/** ロゴ：天井カセット形の室内機を下から見た形（四方の吹出口＋中央の吸込グリル） */
export function logoSvg(panel: string, vent: string, grille: string) {
  return [
    `<rect x="3" y="3" width="42" height="42" rx="4" fill="${panel}"/>`,
    `<rect x="13" y="8" width="22" height="4.6" rx="1.2" fill="${vent}"/>`,
    `<rect x="13" y="35.4" width="22" height="4.6" rx="1.2" fill="${vent}"/>`,
    `<rect x="8" y="13" width="4.6" height="22" rx="1.2" fill="${vent}"/>`,
    `<rect x="35.4" y="13" width="4.6" height="22" rx="1.2" fill="${vent}"/>`,
    `<rect x="17" y="17" width="14" height="14" rx="1" fill="${grille}"/>`,
    `<path d="M19.5 21.5H28.5M19.5 26.5H28.5" stroke="${panel}" stroke-width="2" stroke-linecap="round"/>`,
  ].join("");
}

const S = `fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"`;
const F = `fill="currentColor"`;

export type IconDef = { key: string; label: string; svg: string };

export const ICONS: IconDef[] = [
  {
    key: "restaurant",
    label: "飲食店",
    svg: `<path ${F} d="M7 24H41C41 33.4 33.4 40 24 40C14.6 40 7 33.4 7 24Z"/><path ${S} d="M17 43.5H31M17 18.5C15 15.5 19 13.5 17 10M25 18.5C23 15.5 27 13.5 25 10M31 20L42 6.5M35 21.5L44.5 10.5"/>`,
  },
  {
    key: "office",
    label: "オフィス",
    svg: `<path ${S} d="M12 43V6.5H36V43M5 43H43M21 43V36H27V43"/><path ${F} d="M17 12H22V16.5H17ZM26 12H31V16.5H26ZM17 20.5H22V25H17ZM26 20.5H31V25H26ZM17 29H22V33.5H17ZM26 29H31V33.5H26Z"/>`,
  },
  {
    key: "factory",
    label: "工場・倉庫",
    svg: `<path ${S} d="M5 43V21L15 27V21L25 27V21L33 26V8H41V43ZM3 43H45"/><path ${F} d="M10 33H16V38H10ZM20.5 33H26.5V38H20.5ZM31 33H37V38H31Z"/>`,
  },
  {
    key: "clinic",
    label: "クリニック",
    svg: `<path ${S} d="M9 43V14H39V43M5 14H43M4 43H44"/><path ${F} d="M21 19H27V24.5H32.5V30.5H27V36H21V30.5H15.5V24.5H21Z"/>`,
  },
  {
    key: "shop",
    label: "小売店舗",
    svg: `<path ${S} d="M6 17L10 7H38L42 17M10 24V43H38V24M20 43V32H28V43M4 43H44"/><path ${F} d="M5 16H43V19C43 22.3 40.3 24.5 37 24.5C33.7 24.5 31 22.3 31 19C31 22.3 28 24.5 24 24.5C20 24.5 17 22.3 17 19C17 22.3 14.3 24.5 11 24.5C7.7 24.5 5 22.3 5 19Z"/>`,
  },
  {
    key: "school",
    label: "学校",
    svg: `<path ${S} d="M7 43V22L24 13L41 22V43M4 43H44M20.5 43V35H27.5V43M24 13V4.5L31 7L24 9.5"/><circle cx="24" cy="25" r="4.5" ${F}/>`,
  },
  {
    key: "beauty-salon",
    label: "美容室",
    svg: `<circle cx="13.5" cy="36" r="6" ${S}/><circle cx="34.5" cy="36" r="6" ${S}/><path ${S} d="M17.6 31.6L35 5.5M30.4 31.6L13 5.5"/><circle cx="24" cy="21.8" r="2.6" ${F}/>`,
  },
  {
    key: "nursery",
    label: "保育園",
    svg: `<path ${S} d="M6.5 28.5H21.5V43.5H6.5ZM24 6L35 25H13Z"/><path ${F} d="M26.5 28.5H41.5V43.5H26.5Z"/>`,
  },
  {
    key: "care-facility",
    label: "介護施設",
    svg: `<path ${S} d="M5 22L24 6.5L43 22M11 18V43H37V18"/><path ${F} d="M24 38.5C24 38.5 14.5 33 14.5 26.6C14.5 23.5 16.9 21.3 19.6 21.3C21.6 21.3 23.2 22.5 24 24C24.8 22.5 26.4 21.3 28.4 21.3C31.1 21.3 33.5 23.5 33.5 26.6C33.5 33 24 38.5 24 38.5Z"/>`,
  },
  // お悩み（ガイド）
  {
    key: "cost",
    label: "費用相場",
    svg: `<circle cx="24" cy="24" r="18.5" ${S}/><path ${S} d="M16.5 13.5L24 24.5L31.5 13.5M24 24.5V36M17.5 25.5H30.5M17.5 31H30.5"/>`,
  },
  {
    key: "horsepower",
    label: "馬力・kW",
    svg: `<path ${S} d="M6 35A18 18 0 0 1 42 35M6 35H10.5M37.5 35H42M24 17V21.5M11.3 22.3L14.5 25.5M36.7 22.3L33.5 25.5M24 35L33 22"/><circle cx="24" cy="35" r="4" ${F}/>`,
  },
  {
    key: "type",
    label: "機種タイプ",
    svg: `<rect x="5" y="5" width="38" height="38" rx="2.5" ${S}/><path ${F} d="M14 10H34V14H14ZM14 34H34V38H14ZM10 14H14V34H10ZM34 14H38V34H34Z"/><path ${S} d="M19 20.5H29M19 27.5H29"/>`,
  },
  {
    key: "timing",
    label: "更新の時期",
    svg: `<path ${S} d="M7 11H41V42H7ZM7 19.5H41M15.5 6V14M32.5 6V14"/><path ${F} d="M13 25H19V30.5H13ZM21 25H27V30.5H21ZM29 33H35V38.5H29Z"/>`,
  },
  {
    key: "cold-region",
    label: "寒冷地",
    svg: `<path ${S} d="M24 4.5V43.5M7.1 14.25L40.9 33.75M7.1 33.75L40.9 14.25M18.5 7.5L24 12L29.5 7.5M18.5 40.5L24 36L29.5 40.5M7.6 21.2L14.3 23.7L13.1 16.7M40.4 26.8L33.7 24.3L34.9 31.3M7.6 26.8L14.3 24.3L13.1 31.3M40.4 21.2L33.7 23.7L34.9 16.7"/>`,
  },
  {
    key: "renewal",
    label: "更新専用機種",
    svg: `<path ${S} d="M38.5 18A15.5 15.5 0 0 0 10 15.5M9.5 30A15.5 15.5 0 0 0 38 32.5M9.5 7V16H18.5M38.5 41V32H29.5"/><path ${F} d="M17 20H31V28H17Z"/>`,
  },
  {
    key: "maker",
    label: "メーカー別",
    svg: `<path ${S} d="M6 8H42V20H6ZM6 28H42V40H6Z"/><path ${F} d="M11 14H24V17H11ZM11 34H24V37H11Z"/><circle cx="35.5" cy="14" r="2.2" ${F}/><circle cx="35.5" cy="34" r="2.2" ${F}/>`,
  },
  {
    key: "index",
    label: "早見表",
    svg: `<path ${S} d="M6 8H42V40H6ZM6 18H42M6 29H42M19 8V40"/><path ${F} d="M6 8H42V18H6Z"/>`,
  },
];
