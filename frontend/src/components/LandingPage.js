import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="text-white">
      {/* ヒーローセクション */}
      <div className="bg-blue-900 h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold mb-4">補助金クラウドへようこそ</h1>
        <p className="text-xl mb-8">未来を創る、あなたの補助金</p>
        <Link 
          to="/signup" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
        >
          無料で始める
        </Link>
      </div>

      {/* 特徴セクション */}
      <section className="bg-gradient-to-b from-blue-800 to-indigo-900 py-20 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">主な機能</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard 
            title="AI企業診断" 
            description="あなたの企業に最適な補助金をAIが診断します"
          />
          <FeatureCard 
            title="申請サポート" 
            description="複雑な申請手続きをステップバイステップでサポート"
          />
          <FeatureCard 
            title="進捗管理" 
            description="申請状況をリアルタイムで確認・管理できます"
          />
        </div>
      </section>

      {/* 利用者の声セクション */}
      <section className="bg-indigo-900 py-20 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">利用者の声</h2>
        <div className="max-w-2xl mx-auto bg-indigo-800 p-8 rounded-lg shadow-lg">
          <blockquote className="italic text-center text-lg">
            "補助金クラウドのおかげで、最適な補助金を見つけることができました。申請も驚くほど簡単でした！"
          </blockquote>
          <p className="text-right mt-4">- 株式会社イノベーション 代表取締役</p>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-gradient-to-b from-indigo-900 to-purple-900 py-20 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">さあ、始めましょう</h2>
        <div className="text-center">
          <Link 
            to="/signup" 
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg inline-block"
          >
            無料アカウントを作成
          </Link>
          <p className="mt-4">30日間の無料トライアル。契約の縛りはありません。</p>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-blue-700 bg-opacity-50 p-6 rounded-lg shadow-lg hover:bg-opacity-70 transition duration-300">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-blue-100">{description}</p>
  </div>
);

export default LandingPage;