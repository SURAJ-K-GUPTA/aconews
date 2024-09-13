import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={article.image} alt={article.title} />
      <div className="p-4">
        <h2 className="text-xl font-bold">{article.title}</h2>
        <p className="text-gray-600">{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">Read more</a>
      </div>
    </div>
  );
};

export default NewsCard;
