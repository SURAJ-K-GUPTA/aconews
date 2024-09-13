import React from 'react';

const Filters = ({ lang, setLang, country, setCountry }) => {
  return (
    <div className="flex space-x-4 my-4">
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        className="p-2 border border-gray-300 rounded-lg"
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="es">Spanish</option>
        {/* Add more languages as needed */}
      </select>
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="p-2 border border-gray-300 rounded-lg"
      >
        <option value="us">United States</option>
        <option value="in">India</option>
        <option value="gb">United Kingdom</option>
        {/* Add more countries as needed */}
      </select>
    </div>
  );
};

export default Filters;
