import { useState, useEffect } from 'react';

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // ここでお気に入りを取得するAPIを呼び出す
    const mockFavorites = [1, 3, 5]; // 補助金IDのリスト
    setFavorites(mockFavorites);
  }, []);

  const addFavorite = (subsidyId) => {
    setFavorites([...favorites, subsidyId]);
    // ここでAPIを呼び出してお気に入りを追加する
  };

  const removeFavorite = (subsidyId) => {
    setFavorites(favorites.filter(id => id !== subsidyId));
    // ここでAPIを呼び出してお気に入りを削除する
  };

  return { favorites, addFavorite, removeFavorite };
};

export default useFavorites;