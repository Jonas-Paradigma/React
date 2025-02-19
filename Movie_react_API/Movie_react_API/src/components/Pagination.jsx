import React from "react";

const Pagination = () => {
  return (
    <div className="pagination" id="pagination-controls">
      <button id="prev-page" className="pagination-btn" disabled>
        Previous
      </button>
      <span id="page-info">Page 1</span>
      <button id="next-page" className="pagination-btn">
        Next
      </button>
    </div>
  );
};

export default Pagination;
