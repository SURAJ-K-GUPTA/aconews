import React from 'react';

const Pagination = ({ page, setPage, totalPages }) => {
  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="flex justify-center space-x-2 mt-4">
      <button
        onClick={handlePrev}
        disabled={page <= 1}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
      >
        Previous
      </button>
      <span className="px-4 py-2">{page} / {totalPages}</span>
      <button
        onClick={handleNext}
        disabled={page >= totalPages}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
