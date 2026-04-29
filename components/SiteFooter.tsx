import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">空調プロナビ</h3>
            <p className="text-sm leading-relaxed">
              業務用エアコンの設置・交換・修理業者を徹底比較。最適な空調業者選びをサポートします。
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">ランキング</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ranking/" className="hover:text-[#F59E0B] transition-colors">総合ランキング</Link></li>
              <li><Link href="/ranking/cheap/" className="hover:text-[#F59E0B] transition-colors">格安ランキング</Link></li>
              <li><Link href="/ranking/lease/" className="hover:text-[#F59E0B] transition-colors">リースランキング</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">お役立ちガイド</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guide/cost/" className="hover:text-[#F59E0B] transition-colors">費用相場ガイド</Link></li>
              <li><Link href="/guide/horsepower/" className="hover:text-[#F59E0B] transition-colors">馬力選びガイド</Link></li>
              <li><Link href="/guide/type/" className="hover:text-[#F59E0B] transition-colors">機種タイプ比較</Link></li>
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
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-sm text-gray-500">
          <p className="mb-2">
            ※当サイトは一部広告収益により運営されています。掲載情報は調査時点のものであり、最新情報は各業者公式サイトをご確認ください。
          </p>
          <p>© 2026 空調プロナビ All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
