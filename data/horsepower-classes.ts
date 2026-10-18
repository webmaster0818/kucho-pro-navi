/**
 * 馬力クラス別ページのデータ。
 * 値はすべて /guide/horsepower/ の既存表（kwToHp・hpGuide）に掲載済みのもので、
 * 出典はダイキン公式「1馬力≒2.8kW」およびP形＝冷房能力kW×10の型番規則（2026年7月4日確認）。
 * 新たな数値は作っていない。
 */
export type HpClass = {
  slug: string;
  hp: string;        // 表示用の馬力
  hpNum: number;
  model: string;     // P形の型番
  classKw: string;   // 機種クラスの冷房能力
  calcKw: string;    // 1馬力≒2.8kWで単純換算した値
  sameAsClass: boolean; // 単純換算と機種クラスが一致するか
  area: string;
  usage: string;
  title?: string;    // 検索結果で答えが伝わるよう個別に調整したタイトル（値は上の各項目と同じもののみ）
};

export const HP_CLASSES: HpClass[] = [
  { slug: "2-bariki", hp: "2馬力", hpNum: 2, model: "P50形", classKw: "5.0kW", calcKw: "5.6kW", sameAsClass: false,
    area: "6〜10坪", usage: "個室オフィス・小型店舗・個人クリニックの診察室",
    title: "業務用エアコン2馬力は5.0kW（P50形）｜単純換算5.6kWとの違い・適用6〜10坪" },
  { slug: "2-5-bariki", hp: "2.5馬力", hpNum: 2.5, model: "P63形", classKw: "6.3kW", calcKw: "7.0kW", sameAsClass: false,
    area: "8〜13坪", usage: "小規模会議室・小型飲食店・美容室" },
  { slug: "3-bariki", hp: "3馬力", hpNum: 3, model: "P80形", classKw: "8.0kW", calcKw: "8.4kW", sameAsClass: false,
    area: "10〜16坪", usage: "標準的なオフィス・中型飲食店・ブティック" },
  { slug: "4-bariki", hp: "4馬力", hpNum: 4, model: "P112形", classKw: "11.2kW", calcKw: "11.2kW", sameAsClass: true,
    area: "13〜20坪", usage: "大会議室・中規模レストラン・中型店舗" },
  { slug: "5-bariki", hp: "5馬力", hpNum: 5, model: "P140形", classKw: "14.0kW", calcKw: "14.0kW", sameAsClass: true,
    area: "16〜26坪", usage: "フロア全体・大型飲食店・ジム" },
  { slug: "6-bariki", hp: "6馬力", hpNum: 6, model: "P160形", classKw: "16.0kW", calcKw: "16.8kW", sameAsClass: false,
    area: "20〜33坪", usage: "大型フロア・工場の作業エリア・大型店舗" },
  { slug: "8-bariki", hp: "8馬力", hpNum: 8, model: "P224形", classKw: "22.4kW", calcKw: "22.4kW", sameAsClass: true,
    area: "26〜43坪", usage: "工場・倉庫・大型商業施設の一区画" },
  { slug: "10-bariki", hp: "10馬力", hpNum: 10, model: "P280形", classKw: "28.0kW", calcKw: "28.0kW", sameAsClass: true,
    area: "33〜53坪", usage: "大型工場・倉庫・ホール" },
];

export function getHpClass(slug: string) {
  return HP_CLASSES.find((h) => h.slug === slug);
}
export function neighbors(slug: string) {
  const i = HP_CLASSES.findIndex((h) => h.slug === slug);
  return { prev: i > 0 ? HP_CLASSES[i - 1] : null, next: i < HP_CLASSES.length - 1 ? HP_CLASSES[i + 1] : null };
}
