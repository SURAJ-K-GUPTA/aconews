import React, { useState } from 'react';
import NewsFeed from '../components/NewsFeed';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
import useFetchNews from '../hooks/useFetchNews';

const Home = () => {
  const [query, setQuery] = useState('');
  const [lang, setLang] = useState('en');
  const [country, setCountry] = useState('us');
  const [page, setPage] = useState(1);
  const [max, setMax] = useState(30)
 
  const { articles, totalPages, loading, error } = useFetchNews(query, lang, country, page, max);

  return (
    <div className="container mx-auto p-4">
      <SearchBar query={query} setQuery={setQuery} />
      <Filters lang={lang} setLang={setLang} country={country} setCountry={setCountry} />
      
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      
      {!loading && articles.length > 0 && <NewsFeed articles={articles} />}
      {!loading && articles.length === 0 && <p>No articles found.</p>}
      
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default Home;
