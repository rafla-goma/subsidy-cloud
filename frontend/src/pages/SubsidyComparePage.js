import React, { useState } from 'react';
import useSubsidies from '../hooks/useSubsidies';

const SubsidyComparePage = () => {
  const { allSubsidies } = useSubsidies();
  const [selectedSubsidies, setSelectedSubsidies] = useState([]);

  const handleSubsidySelect = (e) => {
    const subsidyId = parseInt(e.target.value);
    if (selectedSubsidies.includes(subsidyId)) {
      setSelectedSubsidies(selectedSubsidies.filter(id => id !== subsidyId));
    } else if (selectedSubsidies.length < 3) {
      setSelectedSubsidies([...selectedSubsidies, subsidyId]);
    }
  };

  const compareSubsidies = allSubsidies.filter(subsidy => selectedSubsidies.includes(subsidy.id));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">補助金比較</h1>
      <div>
        <label className="block mb-2">補助金を選択 (最大3つ):</label>
        <select
          multiple
          value={selectedSubsidies}
          onChange={handleSubsidySelect}
          className="w-full p-2 border rounded"
        >
          {allSubsidies.map(subsidy => (
            <option key={subsidy.id} value={subsidy.id}>
              {subsidy.title}
            </option>
          ))}
        </select>
      </div>
      {compareSubsidies.length > 0 && (
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">項目</th>
              {compareSubsidies.map(subsidy => (
                <th key={subsidy.id} className="py-3 px-4 text-left">{subsidy.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-3 px-4 font-semibold">カテゴリ</td>
              {compareSubsidies.map(subsidy => (
                <td key={subsidy.id} className="py-3 px-4">{subsidy.category}</td>
              ))}
            </tr>
            <tr className="border-t">
              <td className="py-3 px-4 font-semibold">締切</td>
              {compareSubsidies.map(subsidy => (
                <td key={subsidy.id} className="py-3 px-4">{subsidy.deadline}</td>
              ))}
            </tr>
            <tr className="border-t">
              <td className="py-3 px-4 font-semibold">説明</td>
              {compareSubsidies.map(subsidy => (
                <td key={subsidy.id} className="py-3 px-4">{subsidy.description}</td>
              ))}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SubsidyComparePage;