import { useEffect } from "react";
import "./App.css";
import { Pagination, usePagination } from "./components";
function App() {
  const paginationModel = usePagination();

  useEffect(() => {
    setTimeout(() => {
      paginationModel.setTotalRecord(100);
    }, 0);
  }, [paginationModel.page]);

  return (
    <div className="w-screen h-screen py-10 px-5 justify-center bg-slate-100">
      <div className="w-full mx-auto text-center">
        <h1 className="font-semibold text-2xl">React Pagination</h1>
        <p className="mb-3">
          Create reusable pagination component from scratch
        </p>
        <div className="bg-white shadow-md p-3 rounded-md text-left flex justify-center">
          <Pagination model={paginationModel} />
        </div>
      </div>
    </div>
  );
}

export default App;
