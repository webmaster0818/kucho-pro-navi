"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#1E40AF] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">空調プロナビ</span>
          <span className="bg-[#F59E0B] text-white text-xs px-2 py-0.5 rounded font-bold">
            PR
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/ranking/" className="hover:text-[#F59E0B] transition-colors">
            ランキング
          </Link>
          <Link href="/ranking/cheap/" className="hover:text-[#F59E0B] transition-colors">
            格安
          </Link>
          <Link href="/ranking/lease/" className="hover:text-[#F59E0B] transition-colors">
            リース
          </Link>
          <Link href="/guide/cost/" className="hover:text-[#F59E0B] transition-colors">
            費用相場
          </Link>
          <Link href="/guide/horsepower/" className="hover:text-[#F59E0B] transition-colors">
            馬力選び
          </Link>
          <Link href="/guide/type/" className="hover:text-[#F59E0B] transition-colors">
            機種比較
          </Link>
        </nav>
        <button
          className="md:hidden p-2 rounded hover:bg-blue-700 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-blue-800 border-t border-blue-600">
          <nav className="flex flex-col px-4 py-3 gap-3 text-sm font-medium">
            <Link href="/ranking/" className="hover:text-[#F59E0B]" onClick={() => setMenuOpen(false)}>
              ランキング
            </Link>
            <Link href="/ranking/cheap/" className="hover:text-[#F59E0B]" onClick={() => setMenuOpen(false)}>
              格安ランキング
            </Link>
            <Link href="/ranking/lease/" className="hover:text-[#F59E0B]" onClick={() => setMenuOpen(false)}>
              リースランキング
            </Link>
            <Link href="/guide/cost/" className="hover:text-[#F59E0B]" onClick={() => setMenuOpen(false)}>
              費用相場ガイド
            </Link>
            <Link href="/guide/horsepower/" className="hover:text-[#F59E0B]" onClick={() => setMenuOpen(false)}>
              馬力選びガイド
            </Link>
            <Link href="/guide/type/" className="hover:text-[#F59E0B]" onClick={() => setMenuOpen(false)}>
              機種タイプ比較
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
