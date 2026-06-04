import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { footerInfo, links, navLinks } from '@/data/siteData';

export default function Footer() {
  const contact = [
    ['카카오 채널 문의', links.kakao],
    ['블로그', links.blog],
    ['인스타 문의', links.instagram],
    ['GitHub', links.github],
  ];
  return (
    <footer className="border-t border-white/10 bg-[#080c18] px-4 pb-24 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Image src="/logo_icon.png" alt="WEFLOW" width={44} height={44} />
          <p className="mt-4 text-sm leading-7 text-slate-400">제작부터 관리까지<br />비즈니스 성장을 함께합니다.</p>
          <div className="mt-5 space-y-1 text-xs text-slate-500">
            <p>{footerInfo.ceo}</p><p>{footerInfo.bizNo}</p><p>{footerInfo.email}</p><p>{footerInfo.hours}</p>
          </div>
          <p className="mt-5 text-xs text-slate-600">개인정보처리방침 | 이용약관<br />© 2026 WEFLOW. All rights reserved.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">서비스</h3>
          <div className="mt-4 space-y-2">{navLinks.map((link) => <Link key={link.href} href={link.href} className="block text-sm text-slate-400 hover:text-white">{link.label}</Link>)}</div>
        </div>
        <div>
          <h3 className="font-bold text-white">WEFLOW 케어플랜</h3>
          <div className="mt-4 space-y-2">{['WE 케어', 'FLOW 케어', 'WEFLOW 케어'].map((item) => <Link key={item} href="/pricing" className="block text-sm text-slate-400 hover:text-white">{item}</Link>)}</div>
        </div>
        <div>
          <h3 className="font-bold text-white">상담문의</h3>
          <div className="mt-4 space-y-2">{contact.map(([label, href]) => <Link key={label} href={href} className="flex items-center gap-1 text-sm text-slate-400 hover:text-white">{label}<ExternalLink size={12} /></Link>)}</div>
        </div>
      </div>
    </footer>
  );
}
