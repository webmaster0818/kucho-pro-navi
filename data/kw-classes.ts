/**
 * kW → 馬力の逆引きページ用データ。
 *
 * 値はすべて /guide/horsepower/ の既存「kW→馬力 換算早見表」(kwToHp) に掲載済みのもので、
 * 出典はダイキン公式「1馬力≒2.8kW」およびP形＝冷房能力kW×10の型番規則
 * （三菱電機 Mr.SLIM 形名検索・パナソニック公式コラム・ダイキン公式／2026年7月4日確認）。
 * 新しい数値は作っていない。
 *
 * 適用面積・用途は data/horsepower-classes.ts に掲載がある馬力クラスのみ転記し、
 * 掲載のないクラス（1.8馬力/P45形・2.3馬力/P56形）は areaNote にダイキン公式の一般事務所の床面積のみ記載。
 * 面積はダイキン公式「業務用エアコンの選び方」の表（2026年11月1日確認）。出典のない坪数は 2026-11-01 に削除。
 */
export type KwClass = {
  slug: string;        // URL スラッグ
  kw: string;          // 表示用の冷房能力
  calcHp: string;      // 1馬力≒2.8kW で単純換算した馬力
  classHp: string;     // 実際に選ぶ機種クラスの馬力
  classModel: string;  // P形の型番
  classKw: string;     // その機種クラスの冷房能力
  area?: string;       // 機種クラスの適用面積（当サイト掲載がある場合のみ）
  usage?: string;      // 主な用途（同上）
  areaNote?: string;   // 適用面積の掲載がない場合の注記
  hpSlug?: string;     // 対応する馬力クラスページ
};

export const KW_CLASSES: KwClass[] = [
  {
    slug: "4-5-kw",
    kw: "4.5kW",
    calcHp: "約1.6馬力",
    classHp: "1.8馬力",
    classModel: "P45形",
    classKw: "4.5kW",
    areaNote:
      "1.8馬力（P45形）の主な用途は記載していません。ダイキン公式の表では、P45形の床面積の目安は一般事務所で20〜43㎡です。",
    hpSlug: "2-bariki",
  },
  {
    slug: "5-6-kw",
    kw: "5.6kW",
    calcHp: "約2.0馬力",
    classHp: "2.3馬力",
    classModel: "P56形",
    classKw: "5.6kW",
    areaNote:
      "2.3馬力（P56形）の主な用途は記載していません。ダイキン公式の表では、P56形の床面積の目安は一般事務所で24〜53㎡です。",
    hpSlug: "2-5-bariki",
  },
  {
    slug: "10-kw",
    kw: "10kW",
    calcHp: "約3.6馬力",
    classHp: "4馬力",
    classModel: "P112形",
    classKw: "11.2kW",
    area: "一般事務所で49〜107㎡",
    usage: "大会議室・中規模レストラン・中型店舗",
    hpSlug: "4-bariki",
  },
  {
    slug: "12-5-kw",
    kw: "12.5kW",
    calcHp: "約4.5馬力",
    classHp: "5馬力",
    classModel: "P140形",
    classKw: "14.0kW",
    area: "一般事務所で61〜133㎡",
    usage: "フロア全体・大型飲食店・ジム",
    hpSlug: "5-bariki",
  },
  {
    slug: "20-kw",
    kw: "20kW",
    calcHp: "約7.1馬力",
    classHp: "8馬力",
    classModel: "P224形",
    classKw: "22.4kW",
    area: "一般事務所で97〜213㎡",
    usage: "工場・倉庫・大型商業施設の一区画",
    hpSlug: "8-bariki",
  },
  {
    slug: "25-kw",
    kw: "25kW",
    calcHp: "約8.9馬力",
    classHp: "10馬力",
    classModel: "P280形",
    classKw: "28.0kW",
    area: "一般事務所で122〜267㎡",
    usage: "大型工場・倉庫・ホール",
    hpSlug: "10-bariki",
  },
];

export function getKwClass(slug: string) {
  return KW_CLASSES.find((k) => k.slug === slug);
}

export function kwNeighbors(slug: string) {
  const i = KW_CLASSES.findIndex((k) => k.slug === slug);
  return {
    prev: i > 0 ? KW_CLASSES[i - 1] : null,
    next: i >= 0 && i < KW_CLASSES.length - 1 ? KW_CLASSES[i + 1] : null,
  };
}
