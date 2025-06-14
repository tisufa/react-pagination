const Pagination = () => {
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
      {Array.from({ length: 8 }, (_, index) => index + 1).map((item) => (
        <li key={item}>
          {item === 2 || item == 7 ? (
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
                item === 1 ? "!bg-lime-500/100" : ""
              }`}
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

