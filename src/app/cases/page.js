import { CasesGrid } from '@/components/site/SiteSections';

export const metadata = {
  title: 'WEFLOW 성공사례',
  description: 'WEFLOW가 제작한 다양한 업종의 랜딩페이지·홈페이지 제작 사례를 확인하세요.',
};

export default function CasesPage() {
  return <div className="pt-20"><CasesGrid /></div>;
}
