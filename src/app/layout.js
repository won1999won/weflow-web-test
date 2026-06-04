import { Geist } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BottomBar from '@/components/layout/BottomBar';
import FormModal from '@/components/ui/FormModal';

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

export const metadata = {
  title: 'WEFLOW - 문의로 이어지는 홈페이지를 만듭니다',
  description: '랜딩페이지, 홈페이지, 광고 운영, 검색 상단 노출, 사후관리까지 한 번에 제공하는 WEFLOW 웹 솔루션입니다.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={geist.variable}>
      <body className="min-h-screen text-slate-100 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <BottomBar />
        <FormModal />
      </body>
    </html>
  );
}
