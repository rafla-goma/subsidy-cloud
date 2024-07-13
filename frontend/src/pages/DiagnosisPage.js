import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DiagnosisPage = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
    setStep(step + 1);
  };

  return (
    <div className="bg-gradient-to-b from-blue-900 to-indigo-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">企業診断</h1>
        
        {step === 1 && (
          <DiagnosisQuestion
            question="あなたの企業の主な事業分野は何ですか？"
            options={["製造業", "サービス業", "小売業", "IT・ソフトウェア", "その他"]}
            onAnswer={(answer) => handleAnswer("business", answer)}
          />
        )}
        
        {step === 2 && (
          <DiagnosisQuestion
            question="従業員数は何人ですか？"
            options={["1-10人", "11-50人", "51-100人", "101-300人", "301人以上"]}
            onAnswer={(answer) => handleAnswer("employees", answer)}
          />
        )}
        
        {step === 3 && (
          <DiagnosisQuestion
            question="直近の年間売上高はいくらですか？"
            options={["5000万円未満", "5000万円-1億円", "1億円-3億円", "3億円-10億円", "10億円以上"]}
            onAnswer={(answer) => handleAnswer("revenue", answer)}
          />
        )}
        
        {step > 3 && (
          <DiagnosisResult answers={answers} />
        )}
      </div>
    </div>
  );
};

const DiagnosisQuestion = ({ question, options, onAnswer }) => (
  <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold mb-4">{question}</h2>
    <div className="space-y-2">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onAnswer(option)}
          className="w-full text-left p-3 bg-blue-700 hover:bg-blue-600 rounded transition duration-300"
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

const DiagnosisResult = ({ answers }) => (
  <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-4">診断結果</h2>
    <p className="mb-4">あなたの企業プロフィール：</p>
    <ul className="list-disc list-inside mb-6">
      <li>事業分野: {answers.business}</li>
      <li>従業員数: {answers.employees}</li>
      <li>年間売上高: {answers.revenue}</li>
    </ul>
    <p className="mb-4">おすすめの補助金：</p>
    <ul className="list-disc list-inside mb-6">
      <li>中小企業デジタル化支援補助金</li>
      <li>グリーンイノベーション促進補助金</li>
      <li>地域活性化支援金</li>
    </ul>
    <Link 
      to="/recommendations" 
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-block transition duration-300"
    >
      詳細を見る
    </Link>
  </div>
);

export default DiagnosisPage;