import { useState, useEffect } from 'react';
const useMainCategories = () => {
  const [mainCategories, setMainCategories] = useState([]);
  useEffect(() => {
    const url = 'http://localhost:3001/mainCategories';
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMainCategories(data));
  }, []);
  return [mainCategories, setMainCategories];
};
export default useMainCategories;
