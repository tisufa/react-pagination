import { useEffect, useState } from "react";

const Pagination = () => {
  const [state, setState] = useState({
    paginations: [],
    page: 1,
  });

  useEffect(() => {
    const page = state.page;
    const perPage = 10;
    const totalRecord = 65;
    const size = 5;
    const half = Math.floor(size / 2);

    const totalPage = Math.ceil(totalRecord / perPage);
    console.log(totalPage, "totalPage");

    const createPagination = () => {
      if (totalPage <= size + 1) {
        return Array.from({ length: totalPage }, (_, index) => index + 1);
      } else {
        let start = Math.max(2, page - half);
        let end = Math.min(totalPage - 1, page + half);

        if (page <= half + 1) {
          start = 2;
          end = size;
        } else if (page >= totalPage - half) {
          start = totalPage - size + 1;
          end = totalPage - 1;
        }

        const range = Array.from(
          { length: end - start + 1 },
          (_, index) => start + index
        );

        return [
          1,
          ...(start > 2 ? ["..."] : []),
          ...range,
          ...(end < totalPage - 1 ? ["..."] : []),
          totalPage,
        ];
      }
    };

    setState((prev) => ({
      ...prev,
      paginations: createPagination(),
    }));
  }, [state.page]);

  return (
    <ul className="inline-flex gap-1">
      <li>
        <a
          href="#"
          className={`rounded-full flex items-center justify-center w-7 h-7 hover:cursor-pointer hover:bg-lime-500 transition-all duration-300 bg-lime-500/0`}
        >
          <em className="fas fa-chevron-left text-sm"></em>
        </a>
      </li>
      {state.paginations.map((item) => (
        <li key={item}>
          {item === "..." ? (
            <a
              href="#"
              className={`rounded-full flex cursor-default items-center justify-center w-7 h-7 `}
            >
              ...
            </a>
          ) : (
            <a
              href="#"
              className={`rounded-full flex items-center justify-center w-7 h-7 hover:bg-lime-500 transition-all duration-300 bg-lime-500/0 ${
                item === state.page ? "!bg-lime-500/100" : ""
              }`}
              onClick={() =>
                setState((prev) => ({
                  ...prev,
                  page: item,
                }))
              }
            >
              {item}
            </a>
          )}
        </li>
      ))}
      <li>
        <a
          href="#"
          className={`rounded-full flex items-center justify-center w-7 h-7 hover:cursor-pointer hover:bg-lime-500 transition-all duration-300 bg-lime-500/0 `}
        >
          <em className="fas fa-chevron-right text-sm"></em>
        </a>
      </li>
    </ul>
  );
};

export { Pagination };
