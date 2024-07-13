import React from 'react';
import { TrendingUp, Award, FileText, ArrowRight } from 'lucide-react';

const SubsidyList = ({ popularSubsidies, newSubsidies, recommendedSubsidies, onSubsidyClick }) => (
  <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      { icon: TrendingUp, title: '人気の補助金', color: 'from-green-400 to-blue-500', data: popularSubsidies },
      { icon: Award, title: '新着の補助金', color: 'from-yellow-400 to-orange-500', data: newSubsidies },
      { icon: FileText, title: 'あなたへのおすすめ', color: 'from-pink-400 to-red-500', data: recommendedSubsidies }
    ].map((item, index) => (
      <div key={index} className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
        <div className={`bg-gradient-to-r ${item.color} text-white rounded-full p-3 inline-block mb-4`}>
          <item.icon size={32} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <ul className="text-gray-600 mb-4">
          {item.data.map(subsidy => (
            <li key={subsidy.id} className="mb-2">
              <button 
                onClick={() => onSubsidyClick(subsidy.id)}
                className="text-left hover:text-indigo-600 transition-colors"
              >
                {subsidy.title}
              </button>
            </li>
          ))}
        </ul>
        <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center">
          もっと見る <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    ))}
  </section>
);

export default SubsidyList;