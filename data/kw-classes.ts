/**
 * kW → 馬力の逆引きページ用データ。
 *
 * 値はすべて /guide/horsepower/ の既存「kW→馬力 換算早見表」(kwToHp) に掲載済みのもので、
 * 出典はダイキン公式「1馬力≒2.8kW」およびP形＝冷房能力kW×10の型番規則
 * （三菱電機 Mr.SLIM 形名検索・パナソニック公式コラム・ダイキン公式／2026年7月4日確認）。
 * 新しい数値は作っていない。
 *
 * 適用面積・用途は data/horsepower-classes.ts に掲載がある馬力クラスのみ転記し、
 * 掲載のないクラス（1.8馬力/P45形・2.3馬力/P56形）は空にして「記載なし」扱いとする。
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
      "1.8馬力（P45形）の適用面積は当サイトで一次確認した掲載値がないため記載していません。ひとつ上の2馬力（5.0kW・P50形）は6〜10坪が目安です。",
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
      "2.3馬力（P56形）の適用面積は当サイトで一次確認した掲載値がないため記載していません。前後のクラスは2馬力（5.0kW・P50形）が6〜10坪、2.5馬力（6.3kW・P63形）が8〜13坪です。",
    hpSlug: "2-5-bariki",
  },
  {
    slug: "10-kw",
    kw: "10kW",
    calcHp: "約3.6馬力",
    classHp: "4馬力",
    classModel: "P112形",
    classKw: "11.2kW",
    area: "13〜20坪",
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
    area: "16〜26坪",
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
    area: "26〜43坪",
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
    area: "33〜53坪",
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
