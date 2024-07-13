import React, { useState } from 'react';
import { X } from 'lucide-react';

const AutoPaymentModal = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [bankAccount, setBankAccount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === 'card' && cardNumber) {
      alert(`クレジットカード（${cardNumber}）での自動引き落とし設定が完了しました。`);
      onClose();
    } else if (paymentMethod === 'bank' && bankAccount) {
      alert(`銀行口座（${bankAccount}）での自動引き落とし設定が完了しました。`);
      onClose();
    } else {
      alert('支払い方法と必要な情報を入力してください。');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">自動引き落とし設定</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">支払い方法</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">選択してください</option>
              <option value="card">クレジットカード</option>
              <option value="bank">銀行口座</option>
            </select>
          </div>
          {paymentMethod === 'card' && (
            <div>
              <label htmlFor="cardNumber" className="block mb-2 font-medium">カード番号</label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                placeholder="1234 5678 9012 3456"
              />
            </div>
          )}
          {paymentMethod === 'bank' && (
            <div>
              <label htmlFor="bankAccount" className="block mb-2 font-medium">銀行口座番号</label>
              <input
                type="text"
                id="bankAccount"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                placeholder="1234567"
              />
            </div>
          )}
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">
            設定を保存
          </button>
        </form>
      </div>
    </div>
  );
};

export default AutoPaymentModal;