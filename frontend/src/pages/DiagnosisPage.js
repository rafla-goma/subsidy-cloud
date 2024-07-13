import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DiagnosisPage = ({ isLoggedIn }) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
    setStep(step + 1);
  };

  const questions = [
    {
      question: "あなたの企業の主な事業分野は何ですか？",
      options: ["製造業", "サービス業", "小売業", "IT・ソフトウェア", "その他"]
    },
    {
      question: "従業員数は何人ですか？",
      options: ["1-10人", "11-50人", "51-100人", "101-300人", "301人以上"]
    },
    {
      question: "直近の年間売上高はいくらですか？",
      options: ["5000万円未満", "5000万円-1億円", "1億円-3億円", "3億円-10億円", "10億円以上"]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-900 to-indigo-900 min-h-screen text-white p-8">
      <h1 className="text-4xl font-bold mb-8">企業診断</h1>
      
      {!isLoggedIn && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8">
          <p>ログインすると、より詳細な診断結果を保存し、補助金への応募が可能になります。</p>
          <Link to="/login" className="text-blue-500 hover:underline mt-2 inline-block">ログインまたは新規登録</Link>
        </div>
      )}

      {step <= questions.length ? (
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">{questions[step-1].question}</h2>
          <div className="space-y-2">
            {questions[step-1].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(`question${step}`, option)}
                className="w-full text-left p-3 bg-blue-800 hover:bg-blue-700 rounded transition duration-300"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">診断結果</h2>
          <p className="mb-4">あなたの企業プロフィール：</p>
          <ul className="list-disc list-inside mb-6">
            {Object.entries(answers).map(([key, value]) => (
              <li key={key}>{value}</li>
            ))}
          </ul>
          <p className="mb-4">おすすめの補助金：</p>
          <ul className="list-disc list-inside mb-6">
            <li>中小企業デジタル化支援補助金</li>
            <li>グリーンイノベーション促進補助金</li>
            <li>地域活性化支援金</li>
          </ul>
          {isLoggedIn ? (
            <Link 
              to="/recommendations" 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-block transition duration-300"
            >
              詳細を見る
            </Link>
          ) : (
            <Link 
              to="/login" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block transition duration-300"
            >
              ログインして詳細を見る
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default DiagnosisPage;