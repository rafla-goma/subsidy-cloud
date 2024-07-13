import { useState } from 'react';

const useSubsidies = () => {
  const allSubsidies = [
    { id: 1, title: '革新的技術開発支援補助金', description: '中小企業の革新的な技術開発プロジェクトを支援します。最大1000万円の補助金が利用可能です。', deadline: '2024年8月31日', category: '技術開発', popularity: 95 },
    { id: 2, title: 'グリーンイノベーション促進補助金', description: '環境に配慮した新製品・サービスの開発を行う中小企業を支援します。最大500万円の補助金が利用可能です。', deadline: '2024年9月30日', category: '環境', popularity: 88 },
    { id: 3, title: 'デジタルトランスフォーメーション推進補助金', description: '中小企業のDX推進を支援します。ITツールの導入から業務プロセスの改善まで幅広くサポートします。', deadline: '2024年10月15日', category: 'IT', popularity: 92 },
    { id: 4, title: '事業承継・引継ぎ支援補助金', description: '事業承継・引継ぎを契機とした新たな取り組みを支援します。最大400万円の補助金が利用可能です。', deadline: '2024年11月30日', category: '事業承継', popularity: 75 },
    { id: 5, title: '海外展開支援補助金', description: '中小企業の海外進出を支援します。市場調査から現地法人設立まで幅広くサポートします。', deadline: '2024年12月15日', category: '海外展開', popularity: 80 },
    { id: 6, title: 'ポストコロナ対応ビジネスモデル転換補助金', description: 'コロナ禍後の新しい生活様式に対応したビジネスモデルへの転換を支援します。', deadline: '2024年9月1日', category: 'ビジネスモデル', popularity: 89 },
    { id: 7, title: 'AI・IoT活用促進補助金', description: '中小企業におけるAIやIoT技術の活用を促進し、生産性向上を図ります。', deadline: '2024年10月31日', category: 'IT', popularity: 87 },
    { id: 8, title: '地域資源活用販路開拓補助金', description: '地域の特産品や観光資源を活用した新商品開発や販路開拓を支援します。', deadline: '2024年11月15日', category: '地域振興', popularity: 78 },
    { id: 9, title: 'ものづくり・商業・サービス生産性向上促進補助金', description: '中小企業の生産性向上に資する革新的サービス開発・試作品開発・生産プロセスの改善を行うための設備投資等を支援します。', deadline: '2024年12月31日', category: '生産性向上', popularity: 93 },
    { id: 10, title: '小規模事業者持続化補助金', description: '小規模事業者の販路開拓等のための取り組みを支援します。', deadline: '2024年10月1日', category: '販路開拓', popularity: 91 },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubsidy, setSelectedSubsidy] = useState(null);

  const popularSubsidies = allSubsidies.sort((a, b) => b.popularity - a.popularity).slice(0, 5);
  const newSubsidies = allSubsidies.sort((a, b) => new Date(b.deadline) - new Date(a.deadline)).slice(0, 5);
  const recommendedSubsidies = allSubsidies.sort(() => 0.5 - Math.random()).slice(0, 5);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('検索クエリ:', searchQuery);
    // ここで検索ロジックを実装
  };

  const handleSubsidyClick = (subsidy) => {
    setSelectedSubsidy(subsidy);
  };

  return {
    allSubsidies,
    popularSubsidies,
    newSubsidies,
    recommendedSubsidies,
    searchQuery,
    setSearchQuery,
    selectedSubsidy,
    setSelectedSubsidy,
    handleSearch,
    handleSubsidyClick,
  };
};

export default useSubsidies;