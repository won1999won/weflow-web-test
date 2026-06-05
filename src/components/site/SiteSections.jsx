'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Check, Crown, Megaphone, Trash2 } from 'lucide-react';
import { adPlans, carePlans, cases, formTypes, links, processSteps, productionPlans, reviews } from '@/data/siteData';

const storeKey = {
  inquiries: 'weflow_inquiries',
  reservations: 'weflow_reservations',
};

function readStore(key) {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(window.localStorage.getItem(key) || '[]');
  } catch {
    return [];
  }
}

function writeStore(key, items) {
  window.localStorage.setItem(key, JSON.stringify(items));
}

export function saveRecord(key, payload) {
  const rows = readStore(key);
  const next = [{ id: Date.now(), status: '진행중', createdAt: new Date().toLocaleString('ko-KR'), ...payload }, ...rows];
  writeStore(key, next);
}

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <p className="mb-3 text-xs font-bold tracking-[0.28em] text-cyan-300">{eyebrow}</p>}
      <h2 className="text-3xl font-black text-white sm:text-4xl">{title}</h2>
      {desc && <p className="mt-3 text-sm leading-7 text-slate-400">{desc}</p>}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,145,178,.18),transparent_42%,rgba(37,99,235,.18))]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_460px]">
        <div>
          <p className="mb-4 text-sm font-bold text-cyan-300">랜딩&홈페이지 제작 · 광고 운영 · 검색 상단 노출 · 맞춤형 웹 솔루션</p>
          <h1 className="max-w-4xl text-5xl font-black leading-tight text-white sm:text-6xl">
            문의로 이어지는
            <br />
            홈페이지를 만듭니다
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
            홈페이지 제작부터 광고 연동·운영 관리까지, 단순 제작이 아닌 문의 구조까지 설계합니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => window.dispatchEvent(new Event('open-diagnosis-modal'))} className="gradient-blue rounded-lg px-6 py-3 text-sm font-bold text-white">
              무료 진단 신청
            </button>
            <Link href="/cases" className="rounded-lg border border-white/10 bg-slate-900/70 px-6 py-3 text-sm font-bold text-white">
              성공 사례 보기
            </Link>
            <Link href="/landing" className="rounded-lg border border-white/10 bg-slate-900/70 px-6 py-3 text-sm font-bold text-white">
              랜딩 페이지 사례
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {['케어 플랜(제작·광고·운영)', '빠른제작 (3일~7일)', '합리적 비용(가성비+퀄리티)'].map((item) => (
              <span key={item} className="rounded-md border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-100">{item}</span>
            ))}
          </div>
        </div>
        <div className="relative min-h-[360px]">
          <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl" />
          <Image src="/main_icon.png" alt="WEFLOW 메인 비주얼" fill className="object-contain drop-shadow-2xl" priority />
        </div>
      </div>
    </section>
  );
}

export function BenefitsSection() {
  const cards = [
    ['WEFLOW 케어플랜', '제작+운영+광고+관리 원터치'],
    ['빠른 제작', '3~7일 로켓배송'],
    ['합리적인 가성비', '퀄리티는 높게, 비용은 합리적으로'],
    ['24시간 상담대기', '빠른 상담 및 피드백'],
    ['운영 · 광고 지원', '사후관리서비스'],
    ['문의 구조 설계', '업종별 맞춤 문의 동선 구성'],
  ];
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <SectionTitle title="WEFLOW만의 케어 플랜 혜택" desc="제작 이후 운영과 광고까지 이어지는 실전형 웹 솔루션입니다." />
      <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {cards.map(([title, desc], index) => (
          <div key={title} className="rounded-lg border border-white/10 bg-slate-900/60 p-4">
            <p className="text-xs font-black text-cyan-300">{String(index + 1).padStart(2, '0')}</p>
            <h3 className="mt-3 text-sm font-bold text-white">{title}</h3>
            <p className="mt-2 text-xs leading-5 text-slate-400">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="PROCESS" title="제작진행과정" desc="상담부터 SEO 등록과 사후관리까지 한 흐름으로 진행합니다." />
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
        {processSteps.map(([num, title, desc]) => (
          <div key={num} className="rounded-lg border border-white/10 bg-slate-900/60 p-5">
            <p className="text-sm font-black text-cyan-300">{num}</p>
            <h3 className="mt-3 text-lg font-bold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CasesGrid({ limit }) {
  const list = limit ? cases.slice(0, limit) : cases;
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="SUCCESS" title="성공사례" desc="업종별 제작 사례를 확인하고 자세히 보기를 통해 블로그로 이동할 수 있습니다." />
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((item) => (
          <Link key={item.title} href={item.blogHref} className="group overflow-hidden rounded-lg border border-white/10 bg-slate-900/60">
            <div className="relative aspect-[4/3] bg-slate-800">
              <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="flex items-center justify-between gap-3 p-4">
              <div>
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{item.category}</p>
              </div>
              <span className="text-xs font-bold text-cyan-300">자세히보기</span>
            </div>
          </Link>
        ))}
      </div>
      {limit && (
        <div className="mt-8 text-center">
          <Link href="/cases" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm font-bold text-white">더보기 <ArrowRight size={16} /></Link>
        </div>
      )}
    </section>
  );
}

function PriceCard({ plan }) {
  return (
    <div className={`relative rounded-lg border p-6 ${plan.featured ? 'border-amber-300/50 bg-amber-300/10' : 'border-white/10 bg-slate-900/60'}`}>
      {plan.featured && <div className="absolute right-4 top-4 rounded-full bg-amber-300 px-2 py-1 text-xs font-black text-slate-950"><Crown size={12} className="mr-1 inline" />추천</div>}
      <p className="text-xs font-black tracking-[0.2em] text-cyan-300">{plan.tier || plan.subtitle}</p>
      <h3 className="mt-3 text-2xl font-black text-white">{plan.name}</h3>
      <div className="mt-5">
        <p className="text-sm text-slate-500 line-through decoration-red-400">{plan.original}</p>
        <p className="mt-1 text-3xl font-black text-white">{plan.price}</p>
      </div>
      <ul className="mt-6 space-y-3">
        {plan.features.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-slate-300"><Check size={16} className="mt-0.5 shrink-0 text-cyan-300" />{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function PricingSections() {
  return (
    <div className="pt-20">
      <section className="px-4 py-12 text-center sm:px-6 lg:px-8">
        <SectionTitle eyebrow="PRICING" title="제작플랜 & 가격안내" desc="VAT 포함 가격이며 도메인 비용과 광고비는 별도입니다." />
      </section>
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">{productionPlans.map((plan) => <PriceCard key={plan.name} plan={plan} />)}</div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle title="WEFLOW CARE PLAN" desc="제작부터 운영 · 광고 · 관리까지 한 번에 관리합니다." />
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">{carePlans.map((plan) => <PriceCard key={plan.name} plan={plan} />)}</div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle title="광고 플랜" desc="네이버 키워드와 당근 플레이스 광고 세팅을 지원합니다." />
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">{adPlans.map((plan) => <PriceCard key={plan.name} plan={plan} />)}</div>
        <div className="mx-auto mt-8 max-w-4xl rounded-lg border border-white/10 bg-slate-900/60 p-5 text-sm leading-7 text-slate-400">
          도메인은 고객님 명의로 등록되며 비용은 별도입니다. WEFLOW에서 연결 세팅은 무료로 지원합니다. 광고비는 고객 계정의 결제수단으로 직접 결제되며 WEFLOW는 운영 및 세팅만 합니다. 유지보수는 텍스트, 이미지, 링크 등 경미한 수정 기준이며 페이지 추가 및 기능 개발은 별도 비용이 발생할 수 있습니다.
        </div>
      </section>
    </div>
  );
}

export function DiagnosisSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-lg border border-cyan-400/20 bg-cyan-400/10 p-8">
        <SectionTitle title="무료진단 후 나의 개선점 확인해보기" desc="문의 구조, 디자인·사용성, 검색 노출, 문의 개선 제안을 확인합니다." />
        <button onClick={() => window.dispatchEvent(new Event('open-diagnosis-modal'))} className="gradient-blue mx-auto flex rounded-lg px-6 py-3 text-sm font-bold text-white">무료진단 후 견적 받기</button>
      </div>
    </section>
  );
}

export function ReviewsSection() {
  return (
    <section className="overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-black text-white">후기</h2>
        <Link href="/reservation" className="text-sm font-bold text-cyan-300">후기 더보기</Link>
      </div>
      <div className="flex w-max animate-marquee gap-4">
        {[...reviews, ...reviews].map((text, index) => (
          <div key={`${text}-${index}`} className="w-72 rounded-lg border border-white/10 bg-slate-900/70 p-5">
            <p className="text-amber-300">★★★★★</p>
            <p className="mt-3 text-sm leading-6 text-slate-200">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ServicesContent() {
  const systems = [
    ['블로그 업로드', '브랜드 노출과 검색 유입을 위한 콘텐츠 운영'],
    ['인스타 업로드', '피드/릴스 기반 소셜 채널 운영'],
    ['스레드 업로드', '짧은 콘텐츠 기반 바이럴 확산'],
    ['네이버 키워드 업로드', '검색 의도에 맞춘 키워드 광고 세팅'],
    ['구글 콘솔 상단등록', '검색엔진 최적화와 색인 관리'],
    ['사이트맵 등록', '검색 누락 방지와 상단 노출 기반 구성'],
  ];
  return (
    <div className="pt-20">
      <ProcessSection />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle title="광고 운영 · 사후관리 시스템" desc="제작 후에도 콘텐츠, 광고, 검색 노출을 지속적으로 관리합니다." />
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">{systems.map(([title, desc]) => (
          <div key={title} className="rounded-lg border border-white/10 bg-slate-900/60 p-5"><Megaphone className="text-cyan-300" /><h3 className="mt-4 font-bold text-white">{title}</h3><p className="mt-2 text-sm text-slate-400">{desc}</p></div>
        ))}</div>
      </section>
    </div>
  );
}

const reservationTimeSlots = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

function formatDateValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function buildCalendarDays(monthDate) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDate = new Date(year, month + 1, 0).getDate();
  const blanks = Array.from({ length: firstDay.getDay() }, (_, index) => ({ key: `blank-${index}`, blank: true }));
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days = Array.from({ length: lastDate }, (_, index) => {
    const date = new Date(year, month, index + 1);
    date.setHours(0, 0, 0, 0);
    return {
      key: formatDateValue(date),
      label: index + 1,
      value: formatDateValue(date),
      disabled: date < today,
    };
  });
  return [...blanks, ...days];
}

function ReservationDateTimePicker({ date, time, onDate, onTime }) {
  const [monthDate, setMonthDate] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const days = buildCalendarDays(monthDate);
  const monthLabel = `${monthDate.getFullYear()}년 ${monthDate.getMonth() + 1}월`;

  function moveMonth(delta) {
    setMonthDate((current) => new Date(current.getFullYear(), current.getMonth() + delta, 1));
  }

  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/70 p-4">
      <div className="mb-4 flex items-center justify-between">
        <button type="button" onClick={() => moveMonth(-1)} className="rounded-md border border-white/10 px-3 py-1.5 text-xs font-bold text-slate-300 hover:text-white">
          이전
        </button>
        <p className="text-sm font-black text-white">{monthLabel}</p>
        <button type="button" onClick={() => moveMonth(1)} className="rounded-md border border-white/10 px-3 py-1.5 text-xs font-bold text-slate-300 hover:text-white">
          다음
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-bold text-slate-500">
        {weekDays.map((day) => <div key={day} className="py-1">{day}</div>)}
      </div>
      <div className="mt-1 grid grid-cols-7 gap-1">
        {days.map((day) => day.blank ? (
          <div key={day.key} className="aspect-square" />
        ) : (
          <button
            key={day.key}
            type="button"
            disabled={day.disabled}
            onClick={() => onDate(day.value)}
            className={`aspect-square rounded-md text-sm font-bold transition-colors ${
              date === day.value
                ? 'bg-cyan-400 text-slate-950'
                : day.disabled
                  ? 'cursor-not-allowed bg-slate-900/40 text-slate-700'
                  : 'bg-slate-900 text-slate-200 hover:bg-cyan-400/20 hover:text-white'
            }`}
          >
            {day.label}
          </button>
        ))}
      </div>

      <div className="mt-5">
        <p className="mb-2 text-xs font-bold text-slate-400">상담 시간 선택</p>
        <div className="grid grid-cols-3 gap-2">
          {reservationTimeSlots.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => onTime(slot)}
              className={`rounded-md border px-3 py-2 text-xs font-bold transition-colors ${
                time === slot
                  ? 'border-cyan-300 bg-cyan-300 text-slate-950'
                  : 'border-white/10 bg-slate-900 text-slate-300 hover:border-cyan-300/50 hover:text-white'
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-md bg-slate-900/70 px-3 py-2 text-xs text-slate-300">
        선택 일정: <span className="font-bold text-cyan-300">{date || '날짜 선택 필요'}</span>
        {' / '}
        <span className="font-bold text-cyan-300">{time || '시간 선택 필요'}</span>
      </div>
    </div>
  );
}

export function InquiryForm({ mode = 'inquiry' }) {
  const [form, setForm] = useState({ name: '', phone: '', type: formTypes[0], industry: '', date: '', time: '', request: '', agree: false });
  const [done, setDone] = useState(false);
  function update(e) {
    const { name, value, checked, type } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  }
  function updateField(name, value) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }
  function submit(e) {
    e.preventDefault();
    if (!form.agree) return alert('개인정보 수집 및 상담 동의가 필요합니다.');
    if (mode === 'reservation' && (!form.date || !form.time)) return alert('상담 날짜와 시간을 선택해 주세요.');
    saveRecord(mode === 'reservation' ? storeKey.reservations : storeKey.inquiries, form);
    setDone(true);
  }
  if (done) return <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 p-8 text-center font-bold text-white">접수 완료! 빠른 시간 안에 연락드리겠습니다.</div>;
  return (
    <form onSubmit={submit} className="space-y-4 rounded-lg border border-white/10 bg-slate-900/70 p-6">
      {mode === 'reservation' && (
        <ReservationDateTimePicker
          date={form.date}
          time={form.time}
          onDate={(value) => updateField('date', value)}
          onTime={(value) => updateField('time', value)}
        />
      )}
      <input name="name" placeholder="이름" onChange={update} className="w-full rounded-md border border-white/10 bg-slate-950 px-3 py-3 text-sm text-white" required />
      <input name="phone" placeholder="연락처" onChange={update} className="w-full rounded-md border border-white/10 bg-slate-950 px-3 py-3 text-sm text-white" required />
      <select name="type" onChange={update} className="w-full rounded-md border border-white/10 bg-slate-950 px-3 py-3 text-sm text-white">{formTypes.map((item) => <option key={item}>{item}</option>)}</select>
      <input name="industry" placeholder="업종 입력" onChange={update} className="w-full rounded-md border border-white/10 bg-slate-950 px-3 py-3 text-sm text-white" />
      <textarea name="request" rows={4} placeholder="추가요청사항" onChange={update} className="w-full rounded-md border border-white/10 bg-slate-950 px-3 py-3 text-sm text-white" />
      <label className="flex gap-2 text-xs text-slate-400"><input type="checkbox" name="agree" onChange={update} className="accent-cyan-400" />개인정보 수집 및 상담 동의</label>
      <button className="gradient-blue w-full rounded-lg py-3 text-sm font-bold text-white">{mode === 'reservation' ? '예약 신청하기' : '무료 진단 신청하기'}</button>
    </form>
  );
}

export function ReservationContent() {
  return (
    <div className="px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_420px]">
        <div>
          <SectionTitle eyebrow="RESERVATION" title="무료 진단 상담 예약" desc="원하는 날짜와 시간대를 입력해 상담을 예약하세요." />
          <div className="grid gap-4 sm:grid-cols-2">
            {['24시간 상담대기', '3~7일 빠른 제작', '광고 연동 지원', '사후관리 가능'].map((item) => <div key={item} className="rounded-lg border border-white/10 bg-slate-900/60 p-5 text-white">{item}</div>)}
          </div>
        </div>
        <InquiryForm mode="reservation" />
      </div>
    </div>
  );
}

export function LandingContent() {
  return (
    <div className="pt-20">
      <HeroSection />
      <BenefitsSection />
      <ServicesContent />
      <PricingSections />
      <DiagnosisSection />
      <ReviewsSection />
    </div>
  );
}

export function AdminDashboard() {
  const [tab, setTab] = useState('inquiries');
  const [version, setVersion] = useState(0);
  const key = tab === 'inquiries' ? storeKey.inquiries : storeKey.reservations;
  const rows = version >= 0 ? readStore(key) : [];
  function setStatus(id, status) {
    const next = rows.map((row) => (row.id === id ? { ...row, status } : row));
    writeStore(key, next); setVersion((value) => value + 1);
  }
  function remove(id) {
    const next = rows.filter((row) => row.id !== id);
    writeStore(key, next); setVersion((value) => value + 1);
  }
  const tabs = [{ id: 'inquiries', label: '문의 관리' }, { id: 'reservations', label: '예약 관리' }];
  return (
    <div className="min-h-screen px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <div><p className="text-cyan-300">ADMIN</p><h1 className="text-3xl font-black text-white">관리자창</h1></div>
          <Link href="/" className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white">로그아웃</Link>
        </div>
        <div className="mb-5 flex gap-2">{tabs.map((item) => <button key={item.id} onClick={() => setTab(item.id)} className={`rounded-lg px-4 py-2 text-sm font-bold ${tab === item.id ? 'gradient-blue text-white' : 'bg-slate-900 text-slate-300'}`}>{item.label}</button>)}</div>
        <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-900/60">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-950 text-slate-300">
              <tr>
                <th className="p-3">접수일</th>
                <th className="p-3">이름</th>
                <th className="p-3">연락처</th>
                {tab === 'reservations' && <th className="p-3">예약일</th>}
                {tab === 'reservations' && <th className="p-3">시간</th>}
                <th className="p-3">종류</th>
                <th className="p-3">상태</th>
                <th className="p-3">관리</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-t border-white/10 text-slate-300">
                  <td className="p-3">{row.createdAt}</td><td className="p-3">{row.name}</td><td className="p-3">{row.phone}</td>
                  {tab === 'reservations' && <td className="p-3">{row.date || '-'}</td>}
                  {tab === 'reservations' && <td className="p-3">{row.time || '-'}</td>}
                  <td className="p-3">{row.type}</td><td className="p-3">{row.status}</td>
                  <td className="flex gap-2 p-3"><button onClick={() => setStatus(row.id, '진행중')} aria-label={`${row.name} 진행중 처리`} className="rounded bg-blue-500/20 px-2 py-1 text-xs text-blue-200">진행중</button><button onClick={() => setStatus(row.id, '완료')} aria-label={`${row.name} 완료 처리`} className="rounded bg-emerald-500/20 px-2 py-1 text-xs text-emerald-200">완료</button><button onClick={() => remove(row.id)} aria-label={`${row.name} 삭제`} className="rounded bg-red-500/20 px-2 py-1 text-xs text-red-200"><Trash2 size={13} /></button></td>
                </tr>
              ))}
              {rows.length === 0 && <tr><td colSpan={tab === 'reservations' ? 8 : 6} className="p-8 text-center text-slate-500">저장된 데이터가 없습니다.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function HomeContent() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <CasesGrid limit={4} />
      <ProcessSection />
      <DiagnosisSection />
      <ReviewsSection />
    </>
  );
}
