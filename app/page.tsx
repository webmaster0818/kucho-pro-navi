import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import allCompanies from "@/data/companies.json";
import { areaCount } from "@/data/areaRegions";
import TopIcon from "@/components/top/TopIcon";
import AreaFinder from "@/components/top/AreaFinder";
import ScrollReveal from "@/components/top/ScrollReveal";

// rankingListed: false の会社（空調エキスパート＝問い合わせ先がエアコンフロンティアと同じ）は順位・おすすめに並べない。会社ページは残す
const companies = allCompanies.filter((c) => c.rankingListed !== false);

import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};


const faqs = [
  {
    q: "業務用エアコンの工事費はどのくらいかかりますか？",
    a: "ダイキンの公表値では、機器代金と工事代金を合わせた1セットあたりの目安（税込）は、5馬力以下（一般事務所で70㎡以下が目安）で50万〜70万円、6馬力以上（同80㎡以上）で100万〜150万円です（2026年10月25日確認）。飲食店や工場など特殊な環境では追加費用が発生する場合があります。複数業者から見積もりを取ることで、適正価格を判断しやすくなります。",
  },
  {
    q: "業務用エアコンの寿命はどのくらいですか？",
    a: "適切なメンテナンスを行えば15〜20年程度使用できます。ただし10年を過ぎると部品供給が難しくなるケースもあり、省エネ性能も大幅に向上しているため、10〜15年を目安に交換を検討することをおすすめします。",
  },
  {
    q: "複数の業者に見積もりを依頼するメリットはありますか？",
    a: "メリットは大きいといえます。業者によって機器の仕入れ値や工事の範囲が異なるため、同じ条件で比べることで金額の違いが分かります。また複数の提案を比較することで、最適な機器選定や工事方法を選べます。最低3社から見積もりを取ることを推奨します。",
  },
  {
    q: "業務用エアコンにはどんな種類がありますか？",
    a: "主に天井カセット型（4方向・2方向）、壁掛け型、床置き型、天井吊り下げ型があります。店舗・オフィスでは天井カセット型が主流で、スペースを有効活用しながら均一に冷暖房できます。用途や天井高に合わせて最適なタイプを選ぶことが重要です。",
  },
  {
    q: "リース契約と購入はどちらがお得ですか？",
    a: "初期費用を抑えたい場合はリース、長期的なコストを重視する場合は購入が有利です。リースは月額固定費で資金繰りが安定しますが、総支払額は購入より高くなります。税務上の扱いや資金状況に合わせて選択することをおすすめします。",
  },
];

// 2026-11-05 TOP デザイン刷新（redesign-20261105）。本文・業者情報・順位・リンク先は変えず、見せ方だけを変えている。

const ArrowRight = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

const PinIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

/* ─── Hero ─── */
function HeroButtons() {
  return (
    <div className="grid gap-2.5 sm:grid-cols-2">
      <a href="#industry" className="kc-btn kc-btn--lg justify-between">
        <span className="flex items-center gap-3">
          <TopIcon name="office" size={30} className="text-white" />
          業種・お悩みから探す
        </span>
        <ArrowRight className="h-5 w-5" />
      </a>
      <a href="#area" className="kc-btn kc-btn--lg justify-between">
        <span className="flex items-center gap-3">
          <PinIcon />
          エリアから探す
        </span>
        <ArrowRight className="h-5 w-5" />
      </a>
    </div>
  );
}

const HERO_LINKS: [string, string][] = [
  ["業者ランキングを見る", "/ranking/"],
  ["費用相場を調べる", "/guide/cost/"],
];

const LEAD = "業務用エアコンの設置・交換・修理業者を比較・掲載しています。業種・予算・地域に応じた業者選びにご活用ください。";

function HeroLinks() {
  return (
    <ul className="flex flex-wrap gap-2">
      {HERO_LINKS.map(([label, href]) => (
        <li key={href}>
          <Link href={href} className="inline-flex min-h-[42px] items-center gap-1 rounded-[3px] border border-[color:var(--kc-border-strong)] bg-white px-3.5 text-[13px] font-bold text-[color:var(--kc-navy)] hover:border-[color:var(--kc-navy)]">
            {label}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--kc-border)] bg-[color:var(--kc-paper)]">
      <div className="md:grid md:min-h-[580px] md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:min-h-[620px]">
        <div className="relative z-10 flex flex-col justify-center px-4 pb-6 pt-7 md:py-14 md:pl-[max(24px,calc((100vw-1160px)/2+24px))] md:pr-0">
          <p className="text-[13px] font-bold tracking-[0.06em] text-[color:var(--kc-sky-dark)] md:text-[14px]">
            法人・店舗向け業務用エアコン専門ポータル
          </p>
          <h1 className="mt-3 text-[28px] font-bold leading-[1.42] tracking-[0.03em] text-[color:var(--kc-ink)] md:mt-4 md:text-[40px] lg:text-[46px]">
            法人・店舗の
            <br />
            業務用エアコン選びを
            <br />
            <span className="text-[color:var(--kc-navy)] underline decoration-[color:var(--kc-sky)] decoration-[6px] underline-offset-[8px]">業者比較</span>で支援します
          </h1>

          <div className="relative mt-8 hidden md:block md:mr-[-90px] lg:mr-[-170px]">
            <div className="border border-[color:var(--kc-border-strong)] bg-white p-3">
              <HeroButtons />
            </div>
          </div>
          <p className="mt-6 hidden max-w-[34em] text-[15px] leading-[1.9] text-[color:var(--kc-muted)] md:block">{LEAD}</p>
          <div className="mt-5 hidden md:block"><HeroLinks /></div>
        </div>

        {/* PC：写真を右に置き、左から背景色のグラデーションを重ねる */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[64%] md:block lg:w-[62%]" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/fv-kucho-tenken-pc.jpg" alt="" width={2400} height={1349} className="absolute inset-0 h-full w-full object-cover object-[62%_50%]" fetchPriority="high" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--kc-paper)_0%,var(--kc-paper)_6%,color-mix(in_srgb,var(--kc-paper)_84%,transparent)_24%,color-mix(in_srgb,var(--kc-paper)_38%,transparent)_42%,transparent_60%)]" />
          <p className="absolute bottom-3 right-3 bg-black/50 px-2 py-1 text-[11px] text-white">写真はイメージです</p>
        </div>
        <div className="hidden md:block" />

        {/* スマホ：写真の中に主導線 */}
        <div className="relative md:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/fv-kucho-tenken-sp.jpg" alt="天井の空調の吸込グリルを外して点検する作業者の手元" width={1200} height={675} className="block h-[390px] w-full object-cover object-[64%_50%]" fetchPriority="high" />
          <p className="absolute right-2 top-2 bg-black/50 px-2 py-0.5 text-[10px] text-white">写真はイメージです</p>
          <div className="absolute inset-x-3 bottom-3">
            <HeroButtons />
          </div>
        </div>
        <div className="px-4 pb-6 pt-5 md:hidden">
          <p className="text-[14px] leading-[1.85] text-[color:var(--kc-muted)]">{LEAD}</p>
          <div className="mt-4"><HeroLinks /></div>
        </div>
      </div>
    </section>
  );
}

/* ─── 数値（サイト内のデータから数えた値・既存の表示） ─── */
function TrustBadges() {
  const badges: { k: string; v: string; u: string; desc: string }[] = [
    { k: "掲載業者数", v: String(companies.length), u: "社", desc: "比較一覧に掲載" },
    { k: "業種別ガイド", v: String(INDUSTRIES.length), u: "業種", desc: "飲食店・オフィス・工場など" },
    { k: "都道府県別のまとめ", v: String(areaCount), u: "都道府県", desc: "補助金と対応業者" },
    { k: "無料見積もり比較", v: "3", u: "社", desc: "3社程度から取って比べる" },
    { k: "対応エリア", v: "全国", u: "", desc: "業者により異なります" },
  ];
  return (
    <section className="border-b border-[color:var(--kc-border)] bg-white">
      <div className="kc-container">
        <dl className="grid grid-cols-2 md:grid-cols-5">
          {badges.map((b, i) => (
            <div
              key={b.k}
              className={`border-[color:var(--kc-border)] px-3 py-5 md:px-5 md:py-7 ${i < 4 ? "border-b md:border-b-0" : ""} ${i % 2 === 0 && i < 4 ? "border-r" : ""} ${i < 4 ? "md:border-r" : ""} ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <dt className="text-[12px] font-bold tracking-[0.06em] text-[color:var(--kc-muted)] md:text-[13px]">{b.k}</dt>
              <dd className="mt-1.5">
                <span className="text-[30px] font-bold leading-none text-[color:var(--kc-navy)] md:text-[36px]">{b.v}</span>
                {b.u && <span className="ml-1 text-[13px] font-bold md:text-[14px]">{b.u}</span>}
                <span className="mt-1.5 block text-[12px] text-[color:var(--kc-muted)] md:text-[13px]">{b.desc}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <p className="kc-container pb-3 text-[11px] leading-relaxed text-[color:var(--kc-muted)]">
        ※ 掲載業者数・業種別ガイド・都道府県別のまとめの数は、当サイトの掲載ページを数えた値です（2026年11月5日時点）。対応エリアは業者ごとに異なるため、比較一覧と各社の公式サイトでご確認ください。写真はイメージです（Unsplash・撮影 Birmingham Airduct Cleaning Services・Unsplash License、2026年11月5日確認）。
      </p>
    </section>
  );
}

/* ─── 業種・お悩みから探す ─── */
const INDUSTRIES = [
  { slug: "restaurant", label: "飲食店" },
  { slug: "office", label: "オフィス" },
  { slug: "factory", label: "工場・倉庫" },
  { slug: "clinic", label: "クリニック" },
  { slug: "shop", label: "小売店舗" },
  { slug: "school", label: "学校" },
  { slug: "beauty-salon", label: "美容室" },
  { slug: "nursery", label: "保育園" },
  { slug: "care-facility", label: "介護施設" },
];

const GUIDES = [
  { icon: "cost", title: "費用相場", desc: "工事費込みの目安と内訳", href: "/guide/cost/" },
  { icon: "horsepower", title: "馬力・kW換算", desc: "1馬力≒2.8kWの早見表", href: "/guide/horsepower/" },
  { icon: "type", title: "機種タイプ比較", desc: "天井カセット・壁掛け・床置き", href: "/guide/type/" },
  { icon: "timing", title: "発注の時期", desc: "工事が混む時期と補助金", href: "/guide/timing/" },
  { icon: "renewal", title: "更新専用機種", desc: "既設配管の再利用", href: "/guide/renewal-model/" },
  { icon: "cold-region", title: "寒冷地向け", desc: "寒冷地向け機種の比較", href: "/guide/cold-region/" },
  { icon: "maker", title: "メーカー別", desc: "各社のシリーズ一覧", href: "/maker/" },
  { icon: "index", title: "坪数×馬力×費用", desc: "早見インデックス", href: "/cost-index/" },
];

function IndustryFinder() {
  return (
    <section id="industry" className="kc-section scroll-mt-20">
      <div className="kc-container">
        <h2 className="kc-h2">業種・お悩みから探す</h2>

        <h3 className="kc-h3">業種別に探す</h3>
        <p className="mb-5 text-[14px] text-[color:var(--kc-muted)]">業種ごとに適した業者をご紹介します</p>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5">
          {INDUSTRIES.map((t, i) => (
            <li key={t.slug} data-reveal={String(i % 5)}>
              <Link href={`/industry/${t.slug}/`} className="kc-card kc-card-link group flex h-full flex-col items-center px-3 pb-5 pt-6 text-center md:pt-7">
                <TopIcon name={t.slug} size={80} className="h-[64px] w-[64px] text-[color:var(--kc-navy)] md:h-[80px] md:w-[80px]" />
                <span className="mt-3 text-[16px] font-bold tracking-[0.04em] md:text-[17px]">{t.label}</span>
                <span className="mt-2 inline-flex items-center gap-1 text-[12px] font-bold text-[color:var(--kc-sky-dark)]">
                  選び方を見る
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <h3 className="kc-h3 mt-12 md:mt-14">お悩み別のガイド</h3>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {GUIDES.map((g, i) => (
            <li key={g.href} data-reveal={String(i % 4)}>
              <Link href={g.href} className="kc-card kc-card-link flex h-full min-h-[84px] items-center gap-4 px-4 py-3">
                <TopIcon name={g.icon} size={48} className="h-12 w-12 shrink-0 text-[color:var(--kc-navy)]" />
                <span className="flex min-w-0 flex-col">
                  <span className="text-[15px] font-bold">{g.title}</span>
                  <span className="mt-0.5 text-[12px] leading-snug text-[color:var(--kc-muted)]">{g.desc}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function HomePage() {
  const top3 = companies.slice(0, 3);

  return (
    <>
      <SiteHeader />
      <main className="kc-page">
        <ScrollReveal />
        <Hero />
        <TrustBadges />
        <IndustryFinder />

        {/* エリアから探す */}
        <section id="area" className="kc-section kc-band scroll-mt-20">
          <div className="kc-container">
            <h2 className="kc-h2">エリアから探す</h2>
            <AreaFinder />
          </div>
        </section>

        {/* TOP3 */}
        <section id="ranking" className="kc-section scroll-mt-20">
          <div className="kc-container">
            <h2 className="kc-h2">おすすめ業者 TOP3</h2>
            <p className="kc-h2-sub">編集部が選定した業者を掲載しています</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
              {top3.map((company, index) => (
                <div key={company.slug} className={`kc-card flex flex-col p-5 md:p-6 ${index === 0 ? "border-2 border-[color:var(--kc-navy)]" : ""}`} data-reveal={String(index)}>
                  <div className="mb-4 flex items-center gap-3">
                    <span className={`inline-flex h-10 min-w-[52px] items-center justify-center px-2 text-[15px] font-bold ${index === 0 ? "bg-[color:var(--kc-navy)] text-white" : "border border-[color:var(--kc-navy)] text-[color:var(--kc-navy)]"}`}>
                      {index + 1}位
                    </span>
                    <h3 className="text-[17px] font-bold leading-tight">{company.name}</h3>
                  </div>
                  <p className="mb-4 border-l-2 border-[color:var(--kc-border-strong)] pl-3 text-[14px] leading-relaxed text-[color:var(--kc-muted)]">{company.tagline}</p>
                  <ul className="mb-5 grid gap-2">
                    {company.features.slice(0, 3).map((f) => (
                      <li key={f} className="kc-dot text-[13px] leading-relaxed">{f}</li>
                    ))}
                  </ul>
                  <Link href={`/company/${company.slug}/`} className="kc-btn mt-auto w-full !min-h-[48px] text-[14px]">
                    詳しく見る
                    <ArrowRight />
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/ranking/" className="inline-flex min-h-[44px] items-center gap-1 text-[14px] font-bold text-[color:var(--kc-navy)] underline decoration-[color:var(--kc-border-strong)] underline-offset-4 hover:decoration-[color:var(--kc-navy)]">
                すべてのランキングを見る
                <ArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* 比較一覧 */}
        <section className="kc-section kc-band">
          <div className="kc-container">
            <h2 className="kc-h2">業者比較一覧</h2>
            <p className="kc-h2-sub">主要業者のサービス内容を一覧で比較できます</p>
            <div className="overflow-x-auto border border-[color:var(--kc-border-strong)]" data-reveal="0">
              <table className="w-full min-w-[640px] border-collapse text-[14px]">
                <thead>
                  <tr className="bg-[color:var(--kc-navy)] text-white">
                    <th className="p-3.5 text-left font-bold md:p-4">業者名</th>
                    <th className="p-3.5 text-left font-bold md:p-4">対応エリア</th>
                    <th className="p-3.5 text-left font-bold md:p-4">保証</th>
                    <th className="p-3.5 text-left font-bold md:p-4">詳細</th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map((company, index) => (
                    <tr key={company.slug} className={`border-t border-[color:var(--kc-border)] ${index % 2 === 0 ? "bg-white" : "bg-[color:var(--kc-paper)]"}`}>
                      <td className="whitespace-nowrap p-3.5 font-bold md:p-4">{company.name}</td>
                      <td className="p-3.5 text-[color:var(--kc-muted)] md:p-4">{company.coverage}</td>
                      <td className="p-3.5 text-[13px] text-[color:var(--kc-muted)] md:p-4">{company.warranty}</td>
                      <td className="p-3.5 md:p-4">
                        <Link href={`/company/${company.slug}/`} className="inline-flex min-h-[40px] items-center gap-1 whitespace-nowrap rounded-[3px] border border-[color:var(--kc-navy)] px-3 text-[13px] font-bold text-[color:var(--kc-navy)] hover:bg-[color:var(--kc-wash)]">
                          詳しく見る
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="kc-section">
          <div className="kc-container max-w-[880px]">
            <h2 className="kc-h2">よくある質問</h2>
            <p className="kc-h2-sub">業務用エアコンに関するご質問にお答えします</p>
            <div className="grid gap-3">
              {faqs.map((faq, index) => (
                <div key={index} className="kc-card p-5 md:p-6" data-reveal="0">
                  <h3 className="mb-3 border-l-4 border-[color:var(--kc-navy)] pl-3 text-[16px] font-bold leading-snug">{faq.q}</h3>
                  <p className="text-[14px] leading-[1.9] text-[color:var(--kc-muted)]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[color:var(--kc-navy)] py-14 md:py-16">
          <div className="kc-container max-w-[880px]">
            <h2 className="text-[22px] font-bold leading-snug tracking-[0.03em] text-white md:text-[28px]">
              無料見積もりによる業者比較をおすすめします
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-white/80 md:text-[15px]">
              複数業者（3社程度）から無料で見積もりを取り、費用感を把握したうえで業者を選ぶことをおすすめします。
            </p>
            <Link href="/ranking/" className="mt-7 inline-flex min-h-[56px] items-center gap-2 rounded-[3px] border border-white bg-white px-7 text-[16px] font-bold text-[color:var(--kc-navy)] hover:bg-[color:var(--kc-wash)]">
              おすすめ業者ランキングを見る
              <ArrowRight />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
