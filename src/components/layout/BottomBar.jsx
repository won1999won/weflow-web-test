'use client';

import Link from 'next/link';
import { MessageCircle, NotebookText, Phone, Search } from 'lucide-react';
import { links } from '@/data/siteData';

export default function BottomBar() {
  const items = [
    { label: '24시간 상담', href: '/reservation', icon: Phone },
    { label: '카카오톡문의', href: links.kakao, icon: MessageCircle },
    { label: '블로그', href: links.blog, icon: NotebookText },
  ];
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0a0f1e]" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
      <div className="mx-auto grid max-w-7xl grid-cols-4">
        {items.map(({ label, href, icon: Icon }) => <Link key={label} href={href} className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-slate-300 hover:bg-slate-900 hover:text-white"><Icon size={18} />{label}</Link>)}
        <button onClick={() => window.dispatchEvent(new Event('open-diagnosis-modal'))} className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-slate-300 hover:bg-slate-900 hover:text-white"><Search size={18} />무료진단</button>
      </div>
    </div>
  );
}
