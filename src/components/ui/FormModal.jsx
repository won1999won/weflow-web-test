'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { InquiryForm } from '@/components/site/SiteSections';

export default function FormModal() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-diagnosis-modal', handler);
    return () => window.removeEventListener('open-diagnosis-modal', handler);
  }, []);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} aria-label="닫기" />
      <div className="relative w-full max-w-md">
        <button onClick={() => setOpen(false)} className="absolute right-3 top-3 z-10 rounded-md p-2 text-slate-400 hover:bg-white/10 hover:text-white" aria-label="닫기"><X size={18} /></button>
        <InquiryForm />
      </div>
    </div>
  );
}
