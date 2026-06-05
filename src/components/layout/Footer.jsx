import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { footerInfo, links } from '@/data/siteData';

export default function Footer() {
  const services = [
    ['홈페이지 제작 과정', '/services'],
    ['랜딩페이지 제작 과정', '/landing'],
    ['광고 운영 · 관리 안내', '/services'],
  ];
  const carePlans = [
    ['WE 케어', '/pricing'],
    ['FLOW 케어', '/pricing'],
    ['WEFLOW 케어', '/pricing'],
  ];
  const contact = [
    ['전화문의', 'tel:'],
    ['이메일 문의', 'mailto:contact@weflowlab.kr'],
    ['카카오 채널 문의', links.kakao],
    ['인스타 문의', links.instagram],
  ];
  return (
    <footer className="border-t border-white/10 bg-[#080c18] px-4 pb-24 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="WEFLOW 홈으로 이동" className="inline-flex">
            <Image src="/logo_icon.png" alt="WEFLOW" width={44} height={44} loading="eager" />
          </Link>
          <p className="mt-4 text-sm leading-7 text-slate-400">제작부터 관리까지<br />비즈니스 성장을 함께합니다.</p>
          <div className="mt-5 space-y-1 text-xs text-slate-500">
            <p>{footerInfo.ceo}</p><p>{footerInfo.bizNo}</p><p>{footerInfo.email}</p><p>{footerInfo.hours}</p>
          </div>
          <p className="mt-5 text-xs text-slate-600">개인정보처리방침 | 이용약관<br />© 2026 WEFLOW. All rights reserved.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">서비스</h3>
          <div className="mt-4 space-y-2">{services.map(([label, href]) => <Link key={label} href={href} className="block text-sm text-slate-400 hover:text-white">{label}</Link>)}</div>
        </div>
        <div>
          <h3 className="font-bold text-white">WEFLOW 케어플랜</h3>
          <div className="mt-4 space-y-2">{carePlans.map(([label, href]) => <Link key={label} href={href} className="block text-sm text-slate-400 hover:text-white">{label}</Link>)}</div>
        </div>
        <div>
          <h3 className="font-bold text-white">상담문의</h3>
          <div className="mt-4 space-y-2">{contact.map(([label, href]) => <Link key={label} href={href} className="flex items-center gap-1 text-sm text-slate-400 hover:text-white">{label}<ExternalLink size={12} /></Link>)}</div>
        </div>
      </div>
    </footer>
  );
}
