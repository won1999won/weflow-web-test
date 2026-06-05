'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/siteData';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0f1e]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo_icon.png" alt="WEFLOW" width={42} height={42} className="object-contain" priority />
          <span className="text-xl font-black text-white">WE<span className="text-cyan-300">FLOW</span></span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => <Link key={link.href} href={link.href} className="text-sm font-semibold text-slate-300 hover:text-white">{link.label}</Link>)}
        </nav>
        <button onClick={() => window.dispatchEvent(new Event('open-diagnosis-modal'))} className="hidden rounded-lg px-4 py-2 text-sm font-bold text-white sm:block gradient-blue">무료진단받기</button>
        <button onClick={() => setOpen((v) => !v)} className="rounded-lg p-2 text-white lg:hidden" aria-label="메뉴 열기">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-4 py-4 lg:hidden">
          {navLinks.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-semibold text-slate-300">{link.label}</Link>)}
          <button onClick={() => { setOpen(false); window.dispatchEvent(new Event('open-diagnosis-modal')); }} className="mt-2 w-full rounded-lg py-3 text-sm font-bold text-white gradient-blue">무료진단받기</button>
        </div>
      )}
    </header>
  );
}
