import { KcMark } from "@/components/top/KcLogo";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2.5"><KcMark size={32} tone="light" />空調プロナビ</h3>
            <p className="text-sm leading-relaxed">
              業務用エアコンの設置・交換・修理業者を比較・掲載し、空調業者選びを支援します。
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">ランキング</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ranking/" className="hover:text-[#F59E0B] transition-colors">総合ランキング</Link></li>
              <li><Link href="/ranking/cheap/" className="hover:text-[#F59E0B] transition-colors">費用を抑える方法</Link></li>
              <li><Link href="/ranking/lease/" className="hover:text-[#F59E0B] transition-colors">リースランキング</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">お役立ちガイド</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guide/cost/" className="hover:text-[#F59E0B] transition-colors">費用相場ガイド</Link></li>
              <li><Link href="/guide/horsepower/" className="hover:text-[#F59E0B] transition-colors">馬力選びガイド</Link></li>
              <li><Link href="/guide/type/" className="hover:text-[#F59E0B] transition-colors">機種タイプ比較</Link></li>
              <li><Link href="/maker/" className="hover:text-[#F59E0B] transition-colors">メーカー別シリーズ一覧</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">業種別ガイド</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/industry/restaurant/" className="hover:text-[#F59E0B] transition-colors">飲食店</Link></li>
              <li><Link href="/industry/office/" className="hover:text-[#F59E0B] transition-colors">オフィス</Link></li>
              <li><Link href="/industry/factory/" className="hover:text-[#F59E0B] transition-colors">工場・倉庫</Link></li>
              <li><Link href="/industry/clinic/" className="hover:text-[#F59E0B] transition-colors">クリニック</Link></li>
              <li><Link href="/industry/shop/" className="hover:text-[#F59E0B] transition-colors">小売店舗</Link></li>
              <li><Link href="/industry/school/" className="hover:text-[#F59E0B] transition-colors">学校・教育施設</Link></li>
              <li><Link href="/industry/beauty-salon/" className="hover:text-[#F59E0B] transition-colors">美容室</Link></li>
              <li><Link href="/industry/nursery/" className="hover:text-[#F59E0B] transition-colors">保育園</Link></li>
              <li><Link href="/industry/care-facility/" className="hover:text-[#F59E0B] transition-colors">介護施設</Link></li>
            </ul>
            <h4 className="text-white font-semibold mt-6 mb-3">都道府県別の補助金</h4>
            <ul className="flex flex-wrap gap-x-3 gap-y-2 text-sm">
              <li><Link href="/area/tokyo/" className="hover:text-[#F59E0B] transition-colors">東京都</Link></li>
              <li><Link href="/area/kanagawa/" className="hover:text-[#F59E0B] transition-colors">神奈川県</Link></li>
              <li><Link href="/area/saitama/" className="hover:text-[#F59E0B] transition-colors">埼玉県</Link></li>
              <li><Link href="/area/osaka/" className="hover:text-[#F59E0B] transition-colors">大阪府</Link></li>
              <li><Link href="/area/hokkaido/" className="hover:text-[#F59E0B] transition-colors">北海道（札幌市）</Link></li>
              <li><Link href="/area/ibaraki/" className="hover:text-[#F59E0B] transition-colors">茨城県</Link></li>
              <li><Link href="/area/fukushima/" className="hover:text-[#F59E0B] transition-colors">福島県</Link></li>
              <li><Link href="/area/niigata/" className="hover:text-[#F59E0B] transition-colors">新潟県</Link></li>
              <li><Link href="/area/fukui/" className="hover:text-[#F59E0B] transition-colors">福井県</Link></li>
              <li><Link href="/area/aichi/" className="hover:text-[#F59E0B] transition-colors">愛知県（名古屋市）</Link></li>
              <li><Link href="/area/kyoto/" className="hover:text-[#F59E0B] transition-colors">京都府（京都市）</Link></li>
              <li><Link href="/area/yamaguchi/" className="hover:text-[#F59E0B] transition-colors">山口県</Link></li>
              <li><Link href="/area/hiroshima/" className="hover:text-[#F59E0B] transition-colors">広島県</Link></li>
              <li><Link href="/area/fukuoka/" className="hover:text-[#F59E0B] transition-colors">福岡県（福岡市）</Link></li>
              <li><Link href="/area/iwate/" className="hover:text-[#F59E0B] transition-colors">岩手県</Link></li>
              <li><Link href="/area/miyagi/" className="hover:text-[#F59E0B] transition-colors">宮城県（仙台市）</Link></li>
              <li><Link href="/area/chiba/" className="hover:text-[#F59E0B] transition-colors">千葉県</Link></li>
              <li><Link href="/area/shizuoka/" className="hover:text-[#F59E0B] transition-colors">静岡県</Link></li>
              <li><Link href="/area/hyogo/" className="hover:text-[#F59E0B] transition-colors">兵庫県（神戸市）</Link></li>
              <li><Link href="/area/kagoshima/" className="hover:text-[#F59E0B] transition-colors">鹿児島県</Link></li>
              <li><Link href="/area/shimane/" className="hover:text-[#F59E0B] transition-colors">島根県</Link></li>
              <li><Link href="/area/tottori/" className="hover:text-[#F59E0B] transition-colors">鳥取県</Link></li>
              <li><Link href="/area/wakayama/" className="hover:text-[#F59E0B] transition-colors">和歌山県</Link></li>
              <li><Link href="/area/saga/" className="hover:text-[#F59E0B] transition-colors">佐賀県</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-sm text-gray-500">
          <div className="flex flex-wrap gap-4 mb-3">
            <Link href="/terms/" className="hover:text-[#F59E0B] transition-colors text-xs">利用規約</Link>
            <Link href="/privacy/" className="hover:text-[#F59E0B] transition-colors text-xs">プライバシーポリシー</Link>
            <Link href="/content-policy/" className="hover:text-[#F59E0B] transition-colors text-xs">記事の制作ポリシー</Link>
            <Link href="/about/" className="hover:text-[#F59E0B] transition-colors text-xs">運営者情報</Link>
          </div>
          <p className="mb-2">
            ※当サイトは一部広告収益により運営しています。掲載情報は調査時点のものです。ご利用前に、各業者の公式サイトにて最新情報をご確認ください。
          </p>
          <p>© 2026 空調プロナビ All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
