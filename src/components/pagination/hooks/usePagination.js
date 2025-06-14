import { useState } from "react";

const usePagination = (perPage = 10, size = 5) => {
  const [state, setState] = useState({
    page: 1,
    perPage,
    size,
    totalRecord: 0,
  });

  const setPage = (page) => {
    setState((prev) => ({
      ...prev,
      page,
    }));
  };

  const setTotalRecord = (totalRecord) => {
    setState((prev) => ({
      ...prev,
      totalRecord,
    }));
  };

  return { ...state, setPage, setTotalRecord };
};

export { usePagination };

