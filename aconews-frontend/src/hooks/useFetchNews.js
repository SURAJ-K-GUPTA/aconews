import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchNews = (query, lang, country, page, max) => {
  const [articles, setArticles] = useState([]);  // Initialize as an empty array
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      setArticles([]); // Clear articles when new request is made
      try {
        const response = await axios.get(`http://localhost:5000/api/news`, {
          params: { q:query, lang, country, page, max }
        });

        if (response.data.articles.length === 0) {
          setError('No articles found.');
          setTotalPages(0);
        } else {
          setArticles(response.data.articles);
          setTotalPages(Math.ceil(response.data.articles.length / 10)); // Example: 10 results per page
          setError(null);
        }
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setError('No articles found.');
        } else {
          setError(err.message+" (`Daily limit exhausted. Come back tomorrow`)" || 'An error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [query, lang, country, page, max]);

  return { articles, totalPages, loading, error };
};

export default useFetchNews;
