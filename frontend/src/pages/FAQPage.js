import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: '補助金の申請はどのように行えばよいですか？',
    answer: '補助金の申請は、各補助金の詳細ページから行うことができます。必要な情報を入力し、必要書類をアップロードしてください。'
  },
  {
    question: '申請後の審査期間はどのくらいですか？',
    answer: '審査期間は補助金によって異なりますが、通常1〜2ヶ月程度かかります。詳細は各補助金の情報をご確認ください。'
  },
  {
    question: '補助金の対象となる条件を教えてください。',
    answer: '補助金の対象条件は各補助金によって異なります。一般的には、企業規模、業種、プロジェクトの内容などが考慮されます。詳細は各補助金の詳細ページでご確認いただけます。'
  },
  {
    question: '複数の補助金に同時に申請することは可能ですか？',
    answer: '基本的には可能ですが、補助金によっては重複申請を禁止しているものもあります。各補助金の規定をよくご確認ください。'
  },
  {
    question: '補助金の使用用途に制限はありますか？',
    answer: 'はい、補助金にはそれぞれ使用用途の制限があります。一般的には、事業拡大、研究開発、設備投資などに使用できますが、詳細は各補助金の規定をご確認ください。'
  }
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-700 to-purple-800 flex flex-col text-white">
      <h1 className="text-3xl font-bold mb-4">よくある質問</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white text-black rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
              onClick={() => toggleAnswer(index)}
            >
              <span className="font-semibold">{faq.question}</span>
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 border-t text-black">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
